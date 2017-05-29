import Action from './Action';
import actions from '../__sourceOfTrue/actions';
import store from '../store.js';
import logger from '../Middleware/logger';

class USER_CREATES_WORKSPACE extends Action {
  constructor() {
    this.super({
      name: actions.USER_CREATES_WORKSPACE,
      middleware: {
        pre:[logger],
        post: []
      }
    });

    updateStore(data){
      // UPDATE reduxStore.dispatch(actions.USER_CREATES_WORKSPACE, { foo: 'bar' });
    }

    exec(user, workspace, context, cb) {
      super.exec(...arguments, (err, mwResponses) => {

        console.log(`Executing LOGIC for ${actions.USER_CREATES_WORKSPACE} in async if you want to`);
        const logicResopnse = { foo: 'bar' };

        cb(null, Object.assign(mwResponses, logicResponse});
        updateStore(logicResopnse);
      });
    }
  }
}
