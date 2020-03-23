module.exports = async (chat) => {
  await chat.sendAttachment('image', 'https://i.imgur.com/oAKeLca.gif');
  chat.say({
    text: '*DO THE FIVE*\nHelp stop coronavirus\n\n🤲 HANDS Wash them often\n\n💪 ELBOW Cough into it\n\n🙂 FACE Don\'t touch it\n\n🌌 SPACE Keep safe distance\n\n🏠 HOME Stay if you can',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Learn More',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/videos',
      }],
  });
};
