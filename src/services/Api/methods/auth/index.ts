import { AxiosInstance } from 'axios';
import IMethodPayload from '../../interfaces/IMethodPayload';

export function login (http: AxiosInstance, body?: IMethodPayload, params?: IMethodPayload) {
  return http.post('login', body, {
    params,
  })
};
