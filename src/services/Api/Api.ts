import axios, { AxiosError, AxiosInstance } from 'axios';
import EventEmitter from 'events';
import IAPI from './interfaces/IAPI';
import IMethodPayload from './interfaces/IMethodPayload';

import methods from './methods';

class API implements IAPI {
  private readonly http: AxiosInstance;
  private readonly emitter: EventEmitter;

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      timeout: 120000,
    });

    this.http.interceptors.response.use(undefined, this.unauthorizedErrorHandler);

    this.emitter = new EventEmitter();
  }

  private unauthorizedErrorHandler(error: AxiosError) {
    if (error.response && error.response.status === 401) {
      this.emitter.emit('unauthorized', error);
    }

    return Promise.reject(error);
  }

  public callMethod(name: string, body?: IMethodPayload, params?: IMethodPayload) {
    const method = methods[name];

    if (!method) {
      throw new Error(`Method ${name} not found`);
    }

    return method(this.http, body, params);
  }
}

export default API;
