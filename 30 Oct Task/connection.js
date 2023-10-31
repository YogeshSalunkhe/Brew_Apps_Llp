const mongoose = require("mongoose");
require('dotenv').config();
const connectionParams = {
    useNewUrlparser: true,
   // useCreateIndex: true,
    useUnifiedTopology: true
}

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jfaesxd.mongodb.net/myBlog?retryWrites=true&w=majority`;
const connection = mongoose.connect(uri, connectionParams).then(() => console.log("Connected to cloud atlas")).catch((err) => console.log(err))

module.exports = connection;