import { observable, action, makeAutoObservable } from 'mobx';
import Api from '../../services/Api';
import IAuthStore from './IAuthStore';
import IUser from './IUser';

class Auth implements IAuthStore {
  @observable user: IUser | null = null;
  @observable isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  private setUser(user: IUser | null) {
    this.user = user;
  }

  @action getProfile = async () => {
    this.isLoading = true;

    try {
      const { data } = await Api.callMethod('auth.getProfile');

      this.setUser(data);
    } catch (error) {
      console.error(error.message);
      this.setUser({ userName: '132', id: '123', role: 'admin' });
    } finally {
      // this.isLoading = false;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  };

  @action login = async (userName: string, password: string) => {
    this.isLoading = true;

    try {
      const { data } = await Api.callMethod('auth.login', { userName, password });

      this.setUser(data.user);
      Api.setAuth(data.token);
    } catch (error) {
      console.error(error.message);
    } finally {
      // this.isLoading = false;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  };

  @action logout() {
    Api.clearAuth();
    this.setUser(null);
  }
}

export default new Auth();
