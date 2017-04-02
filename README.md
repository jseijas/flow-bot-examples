# Flow Bot Examples

Examples of the Flow Bot framework.
The examples are taken from the Microsoft Botbuilder Examples, and translated to Flow-Bot style. 
The Microsoft sources can be found at https://github.com/Microsoft/BotBuilder/tree/master/Node/examples

## Overview
The examples are organized into groups and designed to illustrate the techniques needed to build great bots.
To use the samples clone the GitHub repository using Git.

```bash
git clone https://github.com/jseijas/flow-bot-examples.git
cd flow-bot-examples
npm install
```

## Executing

First at all, you'll need the Microsoft Bot Emulator, you can find it here: https://docs.botframework.com/en-us/tools/bot-framework-emulator/

If you prefer to use the bots directly in a client, then you'll need to create a bot at the Microsoft Bot Framework web: https://dev.botframework.com/
Once there, you'll need the Microsoft APP ID and Microsoft APP Secret of the bot. Store them in environmen variables called BOT_APP_ID and BOT_APP_PASSWORD and Flow-Bot will use them.
In the endpoint part of the web, you need to tell the endpoint where Microsoft can find your bot. You can deploy to Azure, Amazon, Heroku... or you can use nrok to create a tunnel to your machine: https://ngrok.com/

## Hello World
These examples show a simple "Hello World" sample for each bot type supported by the framework. 

|**Example**            | **Description**           | **Microsoft source**                                 
| ----------------------| --------------------------|------------------------
|hello-ConsoleConnector | "Hello World" for Console | [hello-ConsoleConnector](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/hello-ConsoleConnector)
|hello-ChatConnector    | "Hello World"             | [hello-ChatConnector](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/hello-ChatConnector) 
