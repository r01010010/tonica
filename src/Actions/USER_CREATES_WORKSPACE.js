import Action from './Action';
import actions from '../__sourceOfTrue/actions';
import store from '../store.js';
import logger from '../Middleware/logger';

class USER_CREATES_WORKSPACE extends Action {
  constructor() {
    super({
      type: actions.USER_CREATES_WORKSPACE,
      middleware: {
        pre:[logger],
        post: []
      }
    })
  }

  updateStore(data) {
    store.dispatch({ type: actions.USER_CREATES_WORKSPACE, data });
  }

  exec(user, action, workspace, context, cb) {
    super.exec(...arguments, (err, mwResponses) => {

      console.log(`Executing LOGIC for ${actions.USER_CREATES_WORKSPACE} in async if you want to`);
      const logicResponse = { foo: 'bar' };

      if (cb) cb(null, Object.assign(mwResponses, logicResponse));
      this.updateStore(logicResponse);
    });
  }
}

export default new USER_CREATES_WORKSPACE();
