module.exports = (chat) => {
  const cards = [
    {
      title: 'General',
      subtitle: 'Learn more about COVID-19, the symptoms, and how to protect yourself/others',
      image_url: 'https://i.imgur.com/Ij6kbl9.jpg',
      buttons: [{
        type: 'postback',
        title: 'ℹ️ What is COVID-19?',
        payload: 'ABOUT',
      }, {
        type: 'postback',
        title: '😷 Prevention',
        payload: 'PREVENTION',
      }, {
        type: 'postback',
        title: '🤒 Symptoms',
        payload: 'SYMPTOMS',
      }],
    },
    {
      title: 'Learn More',
      subtitle: 'Important links from around the web and your questions answered',
      image_url: 'https://i.imgur.com/ZW3SkbK.jpg',
      buttons: [{
        type: 'postback',
        title: '🌐 Important Links',
        payload: 'LINKS',
      }, {
        type: 'web_url',
        title: '❓ Common Questions',
        url: 'https://www.who.int/news-room/q-a-detail/q-a-coronaviruses',
        webview_height_ratio: 'tall',
      }, {
        type: 'postback',
        title: '🤥 Mythbusters',
        payload: 'MYTHS',
      }],
    },
    {
      title: 'News',
      subtitle: 'Read the latest announcements and news about COVID-19 in Ethiopia',
      image_url: 'https://i.imgur.com/XL8gA5r.jpg',
      buttons: [{
        type: 'postback',
        title: '📜 Announcements/News',
        payload: 'NEWS',
      },
      {
        type: 'postback',
        title: '📊 Latest Stats',
        payload: 'STATS',
      }, {
        type: 'postback',
        title: '📞 Emergency Numbers',
        payload: 'EMERGENCY_NUMBERS',
      }],
    },
  ];
  chat.sendGenericTemplate(cards);
};
