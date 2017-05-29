export default (options, cb) => {
  const { actor, action, object, context } = options;
  console.log('Logger middleware executed for:');
  console.log('Actor:', actor.type);
  console.log('Action:', action.type);
  //console.log('object', object);
  //console.log('context', context);

  options.logger = { err: null, data: true };

  cb(null, options);
}
