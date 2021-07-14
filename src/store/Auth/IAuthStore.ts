import IUser from './IUser';

export default interface IAuthStore {
  user: IUser | null;
}
