var FlowRecognizerLuis = require('flow-bot').FlowRecognizerLuis;

module.exports = function(next) {
  var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/c413b2ef-382c-45bd-8ff0-f76d60e2a821?subscription-key=4dd11918afb34cb2b42795044455b79e&q=';
  this.bot.recognizer(new FlowRecognizerLuis({ models: model }));
  this.getDialog('/setAlarm').triggerAction({
    matches: 'builtin.intent.alarm.set_alarm',
    confirmPrompt: 'This will cancel the current alarm. Are you sure?'
  })
  .cancelAction('cancelSetAlarm', "Alarm canceled.", {
    matches: /^(cancel|nevermind)/i,
    confirmPrompt: "Are you sure?"
  });
  this.getDialog('/deleteAlarm').triggerAction({
    matches: 'builtin.intent.alarm.delete_alarm'
  }).cancelAction('cancelDeleteAlarm', "Ok.", {
    matches: /^(cancel|nevermind)/i
  });
  next();
};
