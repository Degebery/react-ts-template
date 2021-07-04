import * as auth from './auth';
import mapMethods from './mapMethods';

export default {
  ...mapMethods('auth', auth),
};
