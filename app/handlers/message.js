const mainMenu = require('../menus/main-menu');

module.exports = (bot) => {
  bot.on('message', (payload, chat) => {
    const { text } = payload.message;
    console.log(text);
    mainMenu(chat);
  });
};
