var db = require('../modals');
var nodemailer = require('nodemailer');
const Users = db.users;
const Posts = db.posts;
var addUser = async (req,res)=>{
    // let data = Users.build({name:'Test',email:'test123@gmail.com'});
    // await Users.create({name:req.query.name,email:req.query.email,gender:req.query.gender});
    await Users.create({name:req.body.name,email:req.body.email,gender:req.body.gender});
    // await data.save();
    let resp={
        data:'User successfully registerd'
    }
    
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
        to:req.body.email,
        subject: 'Welcome Message',
        html: '<h2>Hello '+ req.body.name +' welcome message</h2>'
    }
    transporter.sendMail(mailOption,function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Email has been sent to ==> ',info.envelope.to);
        }
    })
    res.status(200).json(resp)
}

var crudOp = async(req,res)=>{
    //insert
    // await Users.create({name:'demo',email:'demo123@gmail.com',gender:'male'});

    //update
    // await Users.update({name:'check',gender:'male'},{where:{id:4}})

    //delete
    // await Users.destroy({where:{id:4}});

    //truncate
    // await Users.destroy({truncate:true});

    //bulk insert
    // await Users.bulkCreate([
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    //     {name:'demo',email:'demo123@gmail.com',gender:'male'},
    // ])

    //find one and all
    let data = await Users.findAll({attribute:['name','email']})
    // let data = await Users.findOne({where:{id:6}})

    let resp={
        data:data,
    }
    res.status(200).json(resp)
}

var oneToOne = async(req,res)=>{
    let data = await Users.findAll({where:{id:8}});
    res.status(200).json(data);
}

module.exports = {addUser,crudOp,oneToOne}