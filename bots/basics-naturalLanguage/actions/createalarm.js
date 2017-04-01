var moment = require('moment');

module.exports = function(session, args, next) {
  var alarm = session.dialogData.alarm;
  if (args.response) {
    var time = this.parseTime(args.response);
    alarm.timestamp = time ? time.getTime() : null;    
  }
  alarm.address = session.message.address;
  this.getPlugin('AlarmService').addAlarm(alarm);
  if (!session.dialogData.view.dialog) {
    session.dialogData.view.dialog = {};
  }
  session.dialogData.view.dialog.alarmName = alarm.title;
  session.dialogData.view.dialog.alarmTime = moment(alarm.timestamp).format('MM/DD/YYYY h:mm a');
  next();
};
