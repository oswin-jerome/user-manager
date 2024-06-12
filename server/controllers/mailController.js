const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "54c08e593ce2d8",
    pass: "e2213b61428785",
  },
});
const sendOTPMail = async (email, otp) => {
  const info = await transporter.sendMail({
    from: '"Admin" <admin@app.com>',
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is : ${otp}`,
    html: `<p>Your OTP is : <b>${otp}</b></p>`,
  });
};

module.exports = {
  sendOTPMail,
};
