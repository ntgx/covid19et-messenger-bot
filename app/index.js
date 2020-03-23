const BootBot = require('bootbot-multipage');
const config = require('./config');
const start = require('./handlers/start');
const message = require('./handlers/message');
const postback = require('./handlers/postback');
const persistentMenu = require('./menus/persistent-menu');

// init bot
const bot = new BootBot({
  accessToken: config.PAGE_ACCESS_TOKEN,
  verifyToken: config.VERIFY_TOKEN,
  appSecret: config.APP_SECRET,
});

bot.module(persistentMenu);
bot.module(message);
bot.module(postback);

bot.setGreetingText("This is an informational bot for COVID-19 in Ethiopia 🇪🇹 Tap 'Get started' below to begin!");
bot.setGetStartedButton(start);

bot.start(config.PORT);
