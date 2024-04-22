const nodeMailer = require("nodemailer");


const SMPT_HOST="smtp.gmail.com"
const SMPT_PORT=465
const SMPT_SERVICE="gmail"
const SMPT_MAIL="supersen14@gmail.com"
const SMPT_PASSWORD="sahil123"


const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: SMPT_HOST,
    port: SMPT_PORT,
    service:SMPT_SERVICE,
    auth: {
      user:SMPT_MAIL,
      pass:SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;