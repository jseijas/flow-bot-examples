module.exports = function(session, args, next) {
  session.userData.currentQuestion++;
  if (session.userData.currentQuestion >= session.userData.questions.length) {
    return session.endDialog();
  }
  session.dialogData.view.question = session.userData.questions[session.userData.currentQuestion];
  return next();  
};