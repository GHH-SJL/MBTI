module.exports = {
    wechat: {
        appid: 'wx1234567890',           // 替换为您的公众号ID
        mchid: '1234567890',             // 替换为您的商户号
        private_key: './cert/apiclient_key.pem',    // 商户私钥路径
        serial_no: '123456789ABC',       // 商户证书序列号
        apiv3_private_key: 'abcdefghijklmnopqrstuvwxyz123456', // API v3密钥
        notify_url: 'http://your.domain.com/api/payment-callback'  // 支付回调地址
    }
}; 