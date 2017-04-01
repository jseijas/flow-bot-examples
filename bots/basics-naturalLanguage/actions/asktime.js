module.exports = function(session, args, next) {
  if (args.response) {
    session.dialogData.alarm.title = args.response;
  }
  if (session.dialogData.alarm.timestamp) {
    return next();
  } else {
    return this.sendCard('askAlarmTime', session, {}, next);
  }
};
