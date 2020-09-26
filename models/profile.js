module.exports = (Sequelize, DataTypes)=>{
    const Profile = Sequelize.define("Profile",{
        display_name:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        }
    })

    Profile.associate = models => {
        Profile.belongsTo(models.User,{
            foreignkey:{
                allowNull:false
            }
        })
    }

    return Profile
}