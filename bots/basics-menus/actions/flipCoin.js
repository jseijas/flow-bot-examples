module.exports = function(session, args, next) {
  var flip = Math.random() > 0.5 ? 'heads' : 'tails'; 
  if (flip === session.dialogData.view.dialog.coin) {
    session.endDialog("It's %s. YOU WIN!", flip);
  } else {
    session.endDialog("Sorry... It was %s. You lost :(", flip);
  }
};
