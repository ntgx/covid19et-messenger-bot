module.exports = async (chat) => {
  await chat.say('WHO Myth-busters\n\nThere is a lot of false information around. These are the facts.\n\n🔢 People of all ages CAN be infected by the coronavirus. Older people, and people with pre-existing medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming severely ill with the virus.\n\n☀ The coronavirus CAN be transmitted in areas with hot and humid climates  \n\n🦟 The coronavirus CANNOT be transmitted through mosquito bites.  \n\n🐶 There is NO evidence that companion animals/pets such as dogs or cats can transmit the coronavirus.  \n\n🛀 Taking a hot bath DOES NOT prevent the coronavirus  \n\n💨 Hand dryers are NOT effective in killing the coronavirus  \n\n🟣 Ultraviolet light SHOULD NOT be used for sterilization and can cause skin irritation  \n\n🌡 Thermal scanners CAN detect if people have a fever but CANNOT detect whether or not someone has the coronavirus  \n\n💦 Spraying alcohol or chlorine all over your body WILL NOT kill viruses that have already entered your body  \n\n💉 Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenzae type b (Hib) vaccine, DO NOT provide protection against the coronavirus.  \n\n👃 There is NO evidence that regularly rinsing the nose with saline has protected people from infection with the coronavirus.  \n\n🧄 Garlic is healthy but there is NO evidence from the current outbreak that eating garlic has protected people from the coronavirus.  \n\n💊 Antibiotics DO NOT work against viruses, antibiotics only work against bacteria.  \n\n🧪 To date, there is NO specific medicine recommended to prevent or treat the coronavirus.');
  chat.say({
    text: 'Learn more COVID-19 facts on WHO\'s website',
    buttons: [
      {
        type: 'web_url',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
        title: 'Check the facts 👍',
        webview_height_ratio: 'tall',
      },
    ],
  });
};
