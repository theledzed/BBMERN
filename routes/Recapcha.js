const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.post("/suscribe", (req, res) => {
  if (
    req.body.captcha === undefined ||
    req.body.captcha === "" ||
    req.body.captcha === null
  ) {
    return res.json({ success: false, menssge: "Please Select captcha" });
  }

  //secret Key

  const secretKey = "6LcCSbMUAAAAACDir-RBergBV-0k79epdZbM-4VE";

  // verify URL

  const verifyURL = `https://google.com/recaptcha/api/siteveryfy?secret=${secretKey}&response${
    req.body.captcha
  }&remoteip=${req.connection.remoteAddress}`;

  // make request to verifyURL

  request(verifyURL, (err, response, body) => {
    body = JSON.parse(body);

    //if not successful

    if (body.success !== undefined && !body.success) {
      return res.json({
        success: false,
        menssge: "Failed captcha verification"
      });
    }

    // If successful

    return res.json({ success: true, menssge: "Captcha passed" });
  });
});
