export default (action, object, context, results, next) => {
  console.log('Looger middleware executed for:');
  console.log('action', action);
  console.log('object', object);
  console.log('context', context);

  results.logger = true;
  
  next();
}
