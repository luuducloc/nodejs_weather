const nodemailer = require('nodemailer');

class ForgotPasswordController {
    index(req, res) {
        res.render('forgot-password');
    }

    send_email(req, res) {
        const email = req.body.email;
        const option = {
            service: 'gmail',
            auth: {
                user: "luuducloc1997@gmail.com",
                pass: "ducloc123"
            }
        };

        const transporter = nodemailer.createTransport(option);
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error)
            } else {
                console.log("ket noi thanh cong");
                const mail = {
                    from: 'luuducloc1997@gmail.com',
                    to: email,
                    subject: 'Your account password has been reset',
                    text: 'Test nodejs send mail. :D'

                };
                transporter.sendMail(mail, (error, info) => {
                    if(error) {
                        console.log(error);
                    } else {
                        console.log('email send: ' + info.respond);
                    }
                })
                res.redirect('/login');
            }
        })
    }
}

module.exports = new ForgotPasswordController;