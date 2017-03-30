module.exports = function(session, args, next) {
  session.userData.questions = [
    { field: 'name', prompt: 'What\'s your name?' },
    { field: 'age', prompt: 'How old are you?' },
    { field: 'state', prompt: 'What state are you in?' }    
  ];
  session.userData.currentQuestion = -1;
  next();  
};