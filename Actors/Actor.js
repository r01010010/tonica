const Runner from '../Middleware/Runner';

class Actor extends Runner {
  constructor(options) {
    this.middleware = options.middleware;
  }

  does(action, object, context = {}, cb){
    this.exec(this, action, object, context, () => {
      action.exec(this, object, context, cb);
    });
  }
};
