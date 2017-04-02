module.exports = function(session, args, next) {
  session.userData.version = 1.0;
  next();
};
