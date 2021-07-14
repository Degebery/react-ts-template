import { AxiosInstance, AxiosResponse } from 'axios';
import IMethodPayload from './IMethodPayload';

export default interface IMethod {
  (http: AxiosInstance, data?: IMethodPayload): Promise<AxiosResponse<any>>;
}
