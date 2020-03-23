module.exports = (chat) => {
  chat.say({
    text: "☎️Emergency Numbers\n\n📞 Tebita Ambulance: +251 91 122 5464\n\n📞 Myung Sung Christian Medical Center ኮሪያ ሆስፒታል: +251 11 629 5422\n\n📞 St. Paul's Hospital ቅዱስ ጳውሎስ ሆስፒታል: +251 91 066 0475\n\n📞 Bethzatha Hospital: +251 11 552 7100",
    buttons: [{
      type: 'web_url',
      title: '🏥 More Hospitals',
      url: 'https://www.google.com/maps/search/hospital+ethiopia/@9.0213841,38.7122556,12z/data=!3m1!4b1',
    }],
  });
};
