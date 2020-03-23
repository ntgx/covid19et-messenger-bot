module.exports = async (chat) => {
  await chat.sendAttachment('image', 'https://i.imgur.com/2NSnzeT.jpg');
  chat.say({
    text: 'If you feel you have been exposed to COVID-19, or are showing slight symptoms, please avoid contact with other people in your community and self-isolate.\n\nIf you feel you are ill and need non-urgent medical care, call your doctor to ask how to be tested. They will need to follow certain steps to get you the specific care you need.\n\nIf you are feeling very ill and need care immediately, call your emergency services or go to the emergency department.',
    buttons: [
      {
        type: 'postback',
        title: '📞 Emergency Numbers',
        payload: 'EMERGENCY_NUMBERS',
      },
      {
        type: 'web_url',
        title: '🌐 Learn More',
        url: 'https://www.who.int/health-topics/coronavirus#tab=tab_3',
        webview_height_ratio: 'tall',
      }],
  });
};
