const {Sequelize,DataTypes} = require('sequelize');
const seque = new Sequelize('nodeDb','root','',{host:'localhost',dialect:'mysql',logging:false});
seque.authenticate().then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log('err',err);
})
const db = {};
db.Sequelize=Sequelize;
db.seque=seque;

db.seque.sync().then(()=>{
}).catch(()=>{})
db.users = require('./users')(seque,DataTypes);
db.posts = require('./posts')(seque,DataTypes);

db.users.hasOne(db.posts,{foreignKey:'user_id'});
db.posts.belongsTo(db.users);

module.exports=db;