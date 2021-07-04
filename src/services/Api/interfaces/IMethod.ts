import { AxiosInstance } from 'axios';
import IMethodPayload from './IMethodPayload';

export default interface IMethod {
  (http: AxiosInstance, body?: IMethodPayload, params?: IMethodPayload): Promise<never>;
};
