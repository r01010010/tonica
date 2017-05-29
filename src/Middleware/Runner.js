import async from 'async';

class Runner {
  constructor(options){
    this.type = options.type;
    this.middleware = options.middleware;
  }

  hasPreMiddleware(){
    return (this.middleware && this.middleware.pre && this.middleware.pre.length > 0);
  }

  hasPostMiddleware(){
    return (this.middleware && this.middleware.post && this.middleware.post.length > 0);
  }

  exec(actor, action, object, context, cb, logic) {
    const self = this;
    const responses = {};

    const execMiddlewaresAndLogic = () => {
      const options = { actor, action, object, context };
      async.waterfall([cb => cb(null, options), ...self.middleware.pre], logic);
    }

    if (this.hasPreMiddleware) execMiddlewaresAndLogic();
    else logic(null, {});
  }
}

export default Runner;
