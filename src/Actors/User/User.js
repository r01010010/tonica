import actorTypes from '../../__sourceOfTrue/actors';
import createWorkspace from '../../Actions/USER_CREATES_WORKSPACE';
import Actor from '../Actor';
import logger from '../../Middleware/logger';

class User extends Actor {
  constructor() {
    super({
      type: actorTypes.USER,
      middleware: {
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

const user = new User();

export default user;
