const axios = require("axios").default;

const token = process.env.WHATSAPP_TOKEN;


exports.sendText = ({messageBody,phoneNumber,chatBotNum}) => {
    axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
            "https://graph.facebook.com/v12.0/" +
            phoneNumber +
            "/messages?access_token=" +
            token,
        data: {
            messaging_product: "whatsapp",
            to: chatBotNum,
            text: {body: messageBody},
        },
        headers: {"Content-Type": "application/json"},
    }).then(r => {
    });
}
