var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: '@gmail.com',
  to: 'jakesmiththeclown@gmail.com',
  subject: 'Sending Email using Node.js Octocer 2, 2019 16:50',
  text: 'That was easy! Im sending this through the terminal. This is a test to see if message goes through'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});