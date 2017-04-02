const FlowBot = require('flow-bot').FlowBot;
const restify = require('restify');
const inquirer = require('inquirer');

var choices = [
  'hello-ConsoleConnector',
  'hello-ChatConnector', 
  'basics-waterfall', 
  'basics-loops', 
  'basics-menus',
  'basics-naturalLanguage',
  'basics-firstRun',
  'basics-logging'
];

inquirer.prompt([
  {
    type: 'list',
    name: 'bot',
    message: 'Choose a bot to be executed:',
    paginated: true,
    choices: choices
  }
]).then(function (answers) {
  if (answers.bot === 'hello-ConsoleConnector') {
    var opts = {
      consoleConnector: true,
      botPath: './bots/hello-ChatConnector'
    }
    new FlowBot(opts);
  } else {
    var opts = {
      botPath: './bots/'+answers.bot
    };
    var server = restify.createServer();
    server.bot = new FlowBot(opts, function() {
      var port = process.env.port || process.env.PORT || 3978;
      server.listen(port, function () {
        server.post('/api/messages', server.bot.connector.listen());
        console.log('botBrunning in http://localhost:'+ port +'/api/messages');
      });
    });
  }
});
