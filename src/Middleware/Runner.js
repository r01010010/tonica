import async from 'async';

class Runner {
  constructor(options){
    this.middleware = options.middleware;
  }

  // use(when, fn){
  //   this.middlewares[when].push(fn);
  // }

  hasPreMiddleware(){
    return (this.middleware && this.middleware.pre && this.middleware.pre.length > 0);
  }

  hasPostMiddleware(){
    return (this.middleware && this.middleware.post && this.middleware.post.length > 0);
  }

  exec(actor, action, object, context, cb, logic) {
    const self = this;
    const responses = {};

    const performLogic = (err, responses) => {
      logic(actor, object, context, cb);
    };

    const execMiddlewaresAndLogic = () => {
      const options = { actor, action, object, context };
      async.waterfall([cb => cb(null, options), ...self.middleware.pre], performLogic);
    }

    if (this.hasPreMiddleware) execMiddlewaresAndLogic();
    else performLogic({});
  }
}

export default Runner;
