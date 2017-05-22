import TYPE_USER from '../types';
import Actor from '../Actor';

class User extends Actor {
  constructor() {
    this.super({
      type: TYPE_USER,
      middlewares: {
        pre: [
          () => { // logging whatever },
          () => { // analytics }
          () => { // permissions }
        ],
        post: []
      }
    });
  }
}

export default User;
