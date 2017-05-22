class Runner {
  constructor(){
    this.middlewares = { pre: [], post: [] };
  }

  use(where, fn){
    this.middlewares[where].push(fn);
  }

  next(action, object, context, i, results, cb){
    const middleware = this.middlewares.pre[i];

    if (!middleware) return cb(results);

    middleware(subject, action, object, context, () => this.next(action, object, context, i++));
  }

  do(subject, action, object, context, cb){
    this.next(action, object, context, 0, {}, cb);
  }
}

export default MiddlewareRunner;
