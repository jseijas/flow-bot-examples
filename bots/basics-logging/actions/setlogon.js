module.exports = function(session, args, next) {
  session.userData.isLogging = true;
  next();
};
