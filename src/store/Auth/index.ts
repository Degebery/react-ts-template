import { observable, action } from 'mobx';
import Api from '../../services/Api';
import IAuthStore from './IAuthStore';
import IUser from './IUser';

class Auth implements IAuthStore {
  @observable user: IUser | null = null;
  @observable isLoading: boolean = false;

  private setUser(user: IUser | null) {
    this.user = user;
  }

  @action async login(userName: string, password: string) {
    this.isLoading = true;

    try {
      const { data } = await Api.callMethod('auth.login', { userName, password });

      this.setUser(data.user);
      Api.setAuth(data.token);
    } catch (error) {
      console.error(error.message);
    } finally {
      this.isLoading = false;
    }
  }

  @action logout() {
    Api.clearAuth();
    this.setUser(null);
  }
}

export default new Auth();
