class Runner {
  constructor(){
    this.middlewares = { pre: [], post: [] };
  }

  use(when, fn){
    this.middlewares[when].push(fn);
  }

  hasPreMiddleware(){
    return (this.middleware && this.middleware.pre && this.middleware.pre.length > 0);
  }

  hasPostMiddleware(){
    return (this.middleware && this.middleware.post && this.middleware.post.length > 0);
  }

  exec(actor, object, context, cb, logic) {
    const responses = {};

    const performLogic = (responses) => {
      logic(actor, object, context, cb);
    };

    const execMiddlewaresAndLogic = () => {
      async.applyEachSeries(this.middleware.pre, actor, object, context, performLogic);
    }

    if (hasPreMiddleware) execMiddlewaresAndLogic();
    else performLogic({});
  }
}

export default MiddlewareRunner;
