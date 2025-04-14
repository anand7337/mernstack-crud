const mongoose = require('mongoose')


const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE)
    .then((con) => {
     console.log('connected...'+con.connection.host);
    })
}

module.exports = connectDB