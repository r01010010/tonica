export USER_CREATES_WORKSPACE = (actor, action, object, context, next) => {
  return (user.id === workspace.admin_id);
}
