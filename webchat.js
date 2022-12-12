window.watsonAssistantChatOptions = {
  integrationID: "***",
  region: "***",
  serviceInstanceID: "***",
  clientVersion: "6.2.0",
  onLoad: async (instance) => {
    instance.updateCSSVariables({
      'BASE-width': '360px',
    });
    instance.updateHomeScreenConfig({
      greeting: 'こんにちは！ ピザに関するお問い合わせについてお答えできます',
      starters: {
        buttons: [
          {label: 'ピザの注文'},
          {label: '割引条件'},
          {label: '注文のキャンセル'},
          {label: 'ピザの日はいつ'},
          {label: 'どこが宅配ピザを始めたの'},
          {label: 'ピザの誕生秘話'},
        ],
      },
    });
    await instance.updateLocale('ja');
    instance.render();
  }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
