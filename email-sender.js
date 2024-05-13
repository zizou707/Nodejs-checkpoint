var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zahri zied',
      pass: 'zigzac2020'
    }
  });
  
  var mailOptions = {
    from: 'zizoudoom@gmail.com',
    to: 'zied.realmadrid@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });