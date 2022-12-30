module.exports = (seque,DataTypes)=>{
    const Users = seque.define("users",{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'test@gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
    },{
        timestamps:false
    });
    return Users;
}