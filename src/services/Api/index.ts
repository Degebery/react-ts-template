import EventEmitter from 'events';
import API from './Api';

export default new API(process.env.REACT_APP_API_URL || '/', new EventEmitter());
