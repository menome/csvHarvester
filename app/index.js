/**
 * The Bot Itself
 */

"use strict";
var Bot = require('@menome/botframework')
var configSchema = require('./config');
var config = require('../config/config.json');
var MessageParser = require('./messageParser');


var bot = new Bot({
    config: {
      name: "CSVHarvester",
      desc: "Extract csv data into configurable model format",
      ...config
    }, 
    configSchema
});
var paths = { }

// Loader. So we don't have to individually require each file.
var normalizedPath = require("path").join(__dirname, "controllers");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  paths = Object.assign(paths,require("./controllers/" + file).swaggerDef);
});

//load up what actually does work
var mp = new MessageParser(bot);

// Let our middleware use these.
bot.web.use((req,res,next) => {
    req.mp = mp;
    next();
});
bot.registerPaths(paths,__dirname+"/controllers");
bot.start();
bot.changeState({state: "idle"});