import Runner from '../Middleware/Runner';

class Actor extends Runner {
  constructor(options){
    super(options);
  }

  does(action, object, context = {}, cb){
    this.exec(this, action, object, context, () => {
      action.exec(this, object, context, cb);
    });
  }
};

export default Actor;
