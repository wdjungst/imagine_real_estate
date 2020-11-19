import nodemailer from 'nodemailer'

export const sendContact = (req, res) => {
  let user = process.env.GMAIL_USER
  let password = process.env.GMAIL_PASSWORD
  // let transporter = nodemailer.createTransport('smtps://' + user + '%40imagineutah.com:' + password + '@smtp.gmail.com')
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      uesr: `${user}@imagineutah.com`,
      password: password
    }
  })
  let mailOptions = {
    from: '"Janet 👥" <janet@imagineutah.com>',
    to: req.body.notify,
    subject: '[IMAGINE] ' + req.body.name + ' has a question',
    text: req.body.content,
    html: '<p>Name: ' + req.body.name + '</p><p>Phone: ' + req.body.phone + '</p><p>Content: ' + req.body.content + '</p>'
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('ERROR', error)
      return res.status(500).json(error)
    }
    return res.status(200).json(info)
  })
}
