class MiddlewareRunner {
  constructor(){
    this.middlewares = [];
  }

  use(fn){
    this.middlewares.push(fn);
  }

  next(action, object, context, i, results, cb){
    const middleware = this.middlewares[i];

    if (!middleware) return cb(results);

    middleware(action, object, context, () => next(action, object, context, i++));
  }

  do(subject, action, object, context, cb){
    this.next(action, object, context, 0, {}, cb);
  }
}
