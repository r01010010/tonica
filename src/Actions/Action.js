import Runner from '../Middleware/Runner';

class Action extends Runner {
  constructor(options){
    super(options);
  }

  updateStore() {
    // Use this to update redux state or any other by executing a dispatcher
    throw new Error('Implement updateStore method');
  }
}

export default Action;
