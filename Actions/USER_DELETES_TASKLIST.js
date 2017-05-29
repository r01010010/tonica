import Action from './Action';
import store from '../store.js';

class USER_DELETES_TASKLIST extends Action {
  constructor() {
    this.super({
      middleware: {
        pre:[],
        post: []
      }
    });
  }
}
