import TYPE_USER from '../types';
import Actor from '../Actor';

class User extends Actor {
  constructor() {
    this.super({
      type: TYPE_USER,
      middlewares: [
        () => { },
        () => { }
      ]
    });
  }
}
