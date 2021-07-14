import { AxiosInstance } from 'axios';
import IMethodPayload from '../../interfaces/IMethodPayload';

export function login(http: AxiosInstance, data?: IMethodPayload) {
  return http.post('login', data);
}
