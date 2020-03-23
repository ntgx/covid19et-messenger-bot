const mainMenu = require('../menus/main-menu');
const about = require('../covid/about');
const prevention = require('../covid/prevention');
const symptoms = require('../covid/symptoms');
const links = require('../covid/links');
const myths = require('../covid/myths');
const news = require('../covid/news');
const stats = require('../covid/stats');
const emergencyNumbers = require('../covid/emergency-numbers');
const socialDistancing = require('../covid/social-distancing');

module.exports = (bot) => {
  bot.on('postback', (payload, chat) => {
    const postback = payload.postback.payload;

    switch (postback) {
      case 'MAIN_MENU':
        mainMenu(chat);
        break;
      case 'ABOUT':
        about(chat);
        break;
      case 'PREVENTION':
        prevention(chat);
        break;
      case 'SYMPTOMS':
        symptoms(chat);
        break;
      case 'LINKS':
        links(chat);
        break;
      case 'MYTHS':
        myths(chat);
        break;
      case 'NEWS':
        news(chat);
        break;
      case 'STATS':
        stats(chat);
        break;
      case 'EMERGENCY_NUMBERS':
        emergencyNumbers(chat);
        break;
      case 'SOCIAL_DISTANCING':
        socialDistancing(chat);
        break;
      default:
        console.log(`Unhandled Postback: ${postback}`);
        break;
    }
  });
};
