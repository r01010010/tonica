const MiddlewareRunner from '../MiddlewareRunner';

class Actor extends MiddlewareRunner {
  constructor(options) {
    this.middleware = options.middleware;
  }

  does(action, object) {
    MiddlewareRunner.do(this, action, object)
    this.middlewares.forEach('')
  }
}
