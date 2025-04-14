const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:path.join(__dirname,'config','.env')})
const PORT = process.env.PORT || 3000
const register = require('./routes/register')
const user = require('./routes/user')
const database = require('./config/connectDB')
const cors = require('cors')
database()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use('/',user)
app.use(register)
// app.use(
//     cors({
//     origin: "http://localhost:4500",
//     methods: ["GET", "POST"]
// }));
app.listen(PORT,(err) => {
    console.log(`Server is running successfully ${PORT}`);
})