module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        id:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
         type:{
             type:DataTypes.ENUM("NORMAL","ADMIN"),
             allowNull:false,
             primaryKey: true
         }
    })

    User.associate = models => {

        User.hasOne(models.Profile,{
            onDelete:"cascade"
        })
    }

    return User
}