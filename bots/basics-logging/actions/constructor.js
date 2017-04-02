module.exports = function(next) {
  this.getDialog('/logon')
    .triggerAction({ matches: /^log on/i });
  this.getDialog('/logoff')
    .triggerAction({ matches: /^log off/i });
  this.bot.use({
    botbuilder: function(session, next) {
      if (session.userData.isLogging) {
        console.log('Message Received: ', session.message.text);
      }
      next();
    }
  })
  next();
};
