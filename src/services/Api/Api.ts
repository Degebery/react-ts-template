import axios, { AxiosError, AxiosInstance } from 'axios';
import EventEmitter from 'events';
import IMethodPayload from './interfaces/IMethodPayload';

import methods from './methods';

class API {
  private http: AxiosInstance;
  private emitter: EventEmitter;

  constructor(baseURL: string, emitter: EventEmitter) {
    this.http = axios.create({
      baseURL,
      timeout: 120000,
    });

    this.http.interceptors.response.use(undefined, this.unauthorizedErrorHandler);

    this.emitter = emitter;

    const token = localStorage.getItem('token');

    if (token) {
      this.setAuth(token);
    }
  }

  private unauthorizedErrorHandler(error: AxiosError) {
    if (error.response && error.response.status === 401) {
      this.clearAuth();
      this.emitter.emit('unauthorized', error);
    }

    return Promise.reject(error);
  }

  public callMethod(name: string, data?: IMethodPayload) {
    const method = methods[name];

    if (!method) {
      throw new Error(`Method ${name} not found`);
    }

    return method(this.http, data);
  }

  public setAuth(token: string) {
    this.http.defaults.headers.authorization = token;
  }

  public clearAuth() {
    delete this.http.defaults.headers.authorization;
  }
}

export default API;
