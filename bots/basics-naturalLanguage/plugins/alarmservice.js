function AlarmService(bot) {
  this.bot = bot;
  this.alarms = {};
  setInterval(this.processAlarms.bind(this), 15000);
}

AlarmService.prototype.getAlarmCount = function() {
  var result = 0;
  for (var name in this.alarms) {
    result++;
  }
  return result;
}

AlarmService.prototype.addAlarm = function(alarm) {
  this.alarms[alarm.title] = alarm;
}

AlarmService.prototype.processAlarms = function() {
  var now = new Date().getTime();
  for (var key in this.alarms) {
    var alarm = this.alarms[key];
    if (now >= alarm.timestamp) {
      var msg = new this.bot.builder.Message()
        .address(alarm.address)
        .text("Here's your '%s' alarm.", alarm.title);
      this.bot.bot.send(msg);
      delete this.alarms[key];
    }  
  }    
}

module.exports = AlarmService;