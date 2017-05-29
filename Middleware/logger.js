export default (actor, action, object, context, mdResponses) => {
  console.log('Looger middleware executed for:');
  console.log('action', action);
  console.log('object', object);
  console.log('context', context);

  mdResponses.logger = true;
}
