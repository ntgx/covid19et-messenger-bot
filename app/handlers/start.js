const mainMenu = require('../menus/main-menu');

module.exports = async (_, chat) => {
  const user = await chat.getUserProfile();
  chat.say(`Hey there ${user.first_name || ''} 🙂 I'm the COVID-19 Bot for Ethiopia 🇪🇹 I'll provide you various info & news about the corona virus in Ethiopia.\nHere are some of the things i can help you with!`, { typing: true }).then(() => {
    mainMenu(chat);
  });
};
