module.exports = function(session, args, next) {
  var dices = session.dialogData.view.dialog.dices;
  if (dices > 0) {
    var msg = "I rolled:";
    for (var i = 0; i < dices; i++) {
        var roll = Math.floor(Math.random() * 6) + 1;
        msg += ' ' + roll.toString(); 
    }
    session.endDialog(msg);
  } else {
    session.endDialog("Umm... Ok... I rolled air.")
  }
};