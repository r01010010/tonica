const Runner from '../Runner';

class Actor extends Runner {
  constructor(options) {
    this.middleware = options.middleware;
  }

  does(action, object, context) {
    Runner.do(this, action, object)
    this.middlewares.forEach('')
  }
};
