var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth: {
        user:'chayan.zehntech@gmail.com',
        pass:'dgzxofoiabfwznkd'
    }
});
var mailOption={
    from:'chayan.zehntech@gmail.com',
    to:'chayan@mailinator.com',
    subject: 'New Message',
    text: '<h2>Hello test message</h2>'
}
transporter.sendMail(mailOption,function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email has been sent to ==> ',info.envelope.to);
    }
})