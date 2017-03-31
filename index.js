const FlowBot = require('flow-bot').FlowBot;
const restify = require('restify');
const inquirer = require('inquirer');

var choices = [
  'hello-ChatConnector', 
  'basics-waterfall', 
  'basics-loops', 
  'basics-menus',
  'basics-naturalLanguage'
];

var server = restify.createServer();

inquirer.prompt([
  {
    type: 'list',
    name: 'bot',
    message: 'Choose a bot to be executed:',
    paginated: true,
    choices: choices
  }
]).then(function (answers) {
  var opts = {

    botPath: './bots/'+answers.bot
  };
  server.bot = new FlowBot(opts, function() {
    var port = process.env.port || process.env.PORT || 3978;
    server.listen(port, function () {
      server.post('/api/messages', server.bot.connector.listen());
      console.log('bot running in http://localhost:'+ port +'/api/messages');
    });
  });
});
