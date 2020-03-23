module.exports = (bot) => {
  bot.setPersistentMenu([
    {
      type: 'postback',
      title: '🤖 Main Menu',
      payload: 'MAIN_MENU',
    },
    {
      type: 'postback',
      title: '🏃‍♂️ Social Distancing 101',
      payload: 'SOCIAL_DISTANCING',
    },
    {
      type: 'postback',
      title: '📞 Emergency Numbers',
      payload: 'EMERGENCY_NUMBERS',
    },
  ]);
};
