const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._tranporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music',
      to: targetEmail,
      subject: 'Ekspor lagu dari playlist',
      text: 'Terlampir hasil dari ekspor lagu dari playlist',
      attachments: [
        {
          filename: 'playlist.json',
          content,
        },
      ],
    };

    return this._tranporter.sendMail(message);
  }
}

module.exports = MailSender;
