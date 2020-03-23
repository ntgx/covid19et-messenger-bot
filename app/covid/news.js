module.exports = (chat) => {
  // TODO:: fetch data from api and populate cards
  const cards = [{
    title: 'Recruiting Tech Volunteers to Fight COVID-19 in Ethiopia',
    subtitle: 'A Washington-based software developer is recruiting other techies to combat...',
    image_url: 'https://www.voanews.com/s3/files/styles/817x459_retina/s3/afp-image/2020/03/aab483c82ef82a7e89a5243d810b8d026157c4a4.jpg?itok=e7E4XSeE',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Read More',
        url: 'https://www.voanews.com/science-health/coronavirus-outbreak/recruiting-tech-volunteers-fight-covid-19-ethiopia',
        webview_height_ratio: 'tall',
      }],
  }, {
    title: 'Ethiopia enforces 14-day quarantine for all travelers',
    subtitle: 'Ethiopia on Monday enforced a 14-day mandatory quarantine period for all...',
    image_url: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/03/23/thumbs_b_c_20cd3863a40745cab613fa4e04c33d4e.jpg?v=142705',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Read More',
        url: 'https://www.aa.com.tr/en/africa/ethiopia-enforces-14-day-quarantine-for-all-travelers/1775924',
        webview_height_ratio: 'tall',
      }],
  }, {
    title: 'Ethiopia Avails $154 Million To Combat COVID-19',
    subtitle: 'The Government of Ethiopia today announces availing 5 billion birr...',
    image_url: 'https://newbusinessethiopia.com/wp-content/uploads/2020/03/abiytwitter.jpg',
    buttons: [
      {
        type: 'web_url',
        title: '🌐 Read More',
        url: 'https://www.aa.com.tr/en/africa/ethiopia-enforces-14-day-quarantine-for-all-travelers/1775924',
        webview_height_ratio: 'tall',
      }],
  }];
  chat.sendGenericTemplate(cards);
};
