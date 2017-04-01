module.exports = function(session, args, next) {
  var intent = session.dialogData.args.intent;
  var title = this.findEntity(intent, 'builtin.alarm.title');
  var time = this.resolveTime(intent);
  var alarm = session.dialogData.alarm = {
    title: title ? title.entity : null,
    timestamp: time ? time.getTime() : null
  }
  if (!alarm.title) {
    this.sendCard('askAlarmTitle', session, {}, next);
  } else {
    return next();  
  }
};
