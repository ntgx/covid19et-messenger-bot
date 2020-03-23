module.exports = (chat) => {
  // TODO: fetch from an api
  chat.say({
    text: 'Data as reported by national authorities on 23 March 2020\n\n🦠 Infections: 11\n\n😢 Deaths: 0\n\n🙂 Recovered: 0',
    buttons: [
      {
        type: 'web_url',
        title: '📊 Live Dashboard',
        url: 'https://tracketdata.com',
        webview_height_ratio: 'tall',
      }],
  });
};
