const FlowBot = require('flow-bot').FlowBot;

var opts = {
  consoleConnector: true,
  botPath: './bots/hello-ChatConnector'
};

new FlowBot(opts);