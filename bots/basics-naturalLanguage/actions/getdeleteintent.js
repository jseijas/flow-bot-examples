module.exports = function(session, args, next) {
  var alarmService = this.getPlugin('AlarmService');
  if (alarmService.getAlarmCount() <= 0) {
    return session.endDialog('No alarms to delete.');
  }
  var title;
  var intent = session.dialogData.args.intent;
  var entity = this.findEntity(intent, 'builtin.alarm.title');
  if (entity) {
    title = this.findBestMatch(alarmService.alarms, entity.entity);
  }
  if (!title) {
    return session.endDialog('Alarm not found');
  }
  delete alarmService.alarms[title];
  session.dialogData.view.dialog.alarmName = title;
  next();
};