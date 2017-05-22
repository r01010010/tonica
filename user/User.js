import Actor from '../Actor'

class User extends Actor {
  constructor() {
    this.super({
      type: 'user'
    });
  }

  does(options) {

    this.super.does(options);
  }
  saves() {
    workspace: () => {

    }
  }
}
