const express = require("express")
const app = express()
const bodyParser = require('body-parser')
//cnnect to db
const db = require("./models")
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoutes = require("./routes/user_routes")
app.use("/api/users",userRoutes)

const profileRoutes = require("./routes/profile_routes")
app.use("/api/profiles",profileRoutes)

db.sequelize.sync().then(() =>{
    app.listen(PORT , ()=>{
        console.log(`listening on port ${PORT}`)
    })
})