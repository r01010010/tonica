import types from '../../__sourceOfTrue/actors';
import types from '../../__sourceOfTrue/actions';
import createWorkspace from '../../Actions/USER_CREATES_WORKSPACE';
import Actor from '../Actor';
import logger from '../../Middleware/logger';

class User extends Actor {
  constructor() {
    this.super({
      type: types.USER,
      middlewares: {
        pre: [
          logger,
          // () => { // analytics }
          // () => { // permissions }
        ],
        post: []
      }
    });
  }

  createWorkspace(ws, cb) {
    this.does(createWorkspace, ws, {}, cb);
  }
}

export default User;
