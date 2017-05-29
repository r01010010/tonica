export default (options, cb) => {
  const { actor, action, object, context } = options;
  console.log('Looger middleware executed for:');
  console.log('action', action);
  console.log('object', object);
  console.log('context', context);

  options.logger = { err: null, data: true };

  cb(null, options);
}
