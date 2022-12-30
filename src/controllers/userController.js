var db = require('../modals');
const Users = db.users;
const Posts = db.posts;
var addUser = async (req,res)=>{
    // let data = Users.build({name:'Test',email:'test123@gmail.com'});
    // await Users.create({name:req.query.name,email:req.query.email,gender:req.query.gender});

    await Users.create({name:'demo',email:'demo123@gmail.com',gender:'male'});
    // await data.save();
    let resp={
        data:'OK'
    }
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
    // let data = await Users.findAll({attribute:['name','email']})
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