// dify-init.js
(function() {
    var _uParam = new URLSearchParams(window.location.search);
    var _uPhone = (_uParam.get('phone') || "anonymous").replace(/\D/g, '');

    window.difyChatbotConfig = {
        token: 'ERNQLHGG3QKClfr7',
        baseUrl: 'https://udify.app',
        inputs: {
            "user_phone": _uPhone
        }
    };
})();
