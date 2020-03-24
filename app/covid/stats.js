const axios = require('axios');

module.exports = async (chat) => {
  axios.get('https://api.pmo.gov.et/v1/cases').then((res) => {
    const {
      total, stable, critical, deceased,
    } = res.data[0];
    chat.say({
      text: `Latest data as reported by national authorities \n\n😷 Infections: ${total}\n\n😐 Stable: ${stable}\n\n🙏 Critical: ${critical}\n\n😢 Deaths: ${deceased}`,
      buttons: [
        {
          type: 'web_url',
          title: '📊 Live Dashboard',
          url: 'https://tracketdata.com',
          webview_height_ratio: 'tall',
        }],
    });
  }).catch((error) => {
    console.log(error);
    chat.say('Something went wrong. Please try again!');
  });
};
