module.exports = (chat) => {
  chat.say({
    text: '🤔 What is COVID-19?\n\nCorona viruses are large groups of viruses that are common amongst animals. Those viruses can make people sick, usually with a mild to moderate upper respiratory tract illness, similar to a common cold.\n\nA new coronavirus called COVID-19 was identified in China and is associated with an outbreak of pneumonia.',
    buttons: [
      {
        type: 'web_url',
        url: 'https://youtu.be/4hwD6tF9m5ks',
        title: 'Watch Video 📹',
        webview_height_ratio: 'tall',
      },
    ],
  });
};
