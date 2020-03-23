module.exports = (chat) => {
  const cards = [{
    title: 'WHO Advice for Public',
    subtitle: 'Learn the latest advice from the WHO',
    image_url: '',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Open URL',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
      }],
  }, {
    title: 'Videos from WHO',
    subtitle: 'Watch videos about COVID-19 from WHO',
    image_url: '',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Open URL',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/videos',
      }],
  }, {
    title: 'COVID-19 Dashboard by TrackETData',
    subtitle: 'Dashboard, News & General Info',
    image_url: '',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Open URL',
        url: 'https://www.tracketdata.com/',
      }],
  }, {
    title: 'COVID-19 Dashboard by fynsystems',
    subtitle: 'Dashboard & Case Tracking',
    image_url: '',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Open URL',
        url: 'http://covid.fynsystems.com/',
      }],
  }];
  chat.sendGenericTemplate(cards);
};
