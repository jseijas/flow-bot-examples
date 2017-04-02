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

## Pre-requisites

First at all, you'll need the Microsoft Bot Emulator, you can find it here: https://docs.botframework.com/en-us/tools/bot-framework-emulator/

If you prefer to use the bots directly in a client, then you'll need to create a bot at the Microsoft Bot Framework web: https://dev.botframework.com/
Once there, you'll need the Microsoft APP ID and Microsoft APP Secret of the bot. Store them in environmen variables called BOT_APP_ID and BOT_APP_PASSWORD and Flow-Bot will use them.
In the endpoint part of the web, you need to tell the endpoint where Microsoft can find your bot. You can deploy to Azure, Amazon, Heroku... or you can use nrok to create a tunnel to your machine: https://ngrok.com/

## Running the examples

Inside the flow-bot-examples folder, execute:

```bash
npm start
```

Then select in console the example to be executed.

## Hello World
These examples show a simple "Hello World" sample for each bot type supported by the framework. 

| **Microsoft source**      | **Description**                               
| --------------------------|------------------------
|[hello-ConsoleConnector](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/hello-ConsoleConnector)|"Hello World" for Console
|[hello-ChatConnector](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/hello-ChatConnector)|"Hello World"

## Basic Techniques
These examples show the basic techniques needed to build a great bot. 

| **Microsoft source** | **Description**                               
| ---------------------|----------------------------------------------
|[basics-waterfall](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/basics-waterfall) | Shows how to use a waterfall to prompt the user with a series of questions.
|basics-waterfall[basics-loops](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/basics-loops) | Shows how to use session.replaceDialog() to create loops. 
|[basics-menus](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/basics-menus) | Shows how to create a simple menu system for a bot. 
|[basics-naturalLanguage](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples/basics-naturalLanguage) | Shows how to use a LuisDialog to add natural language support to a bot.
