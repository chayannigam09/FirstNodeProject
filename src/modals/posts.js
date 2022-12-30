module.exports = (seque,DataTypes)=>{
    const Posts = seque.define("posts",{
       name:DataTypes.STRING,
       title:DataTypes.STRING,
        content:DataTypes.STRING,
        user_Id:DataTypes.STRING
    },{
        createdAt:'created-at',
        updatedAt:'modified-at'
    });
    return Posts;
}