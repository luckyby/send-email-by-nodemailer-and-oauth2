const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const {config_user} = require('./config.user.js')

const CLIENT_ID = config_user.client_ID;
const CLIENT_SECRET = config_user.client_secret;
const REDIRECT_URI = config_user.redirect_uri;
const REFRESH_TOKEN = config_user.refresh_token;
const USER_NAME = config_user.user_name;
const AUTH_EMAIL = config_user.auth_email;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(email_to, subject_to, text_to) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: AUTH_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `${USER_NAME} <${AUTH_EMAIL}>`,
      to: email_to,
      subject: subject_to,
      text: text_to,
      html: `<h1>Hello ${email_to}</h1></br><p>This letter was sended from app with Google credentials</p>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

const email_to = 'asnpost@gmail.com';
const subject = 'Hi!';
const text = 'Hello! Hello! Hello!!!';


sendMail(email_to, subject, text)
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
