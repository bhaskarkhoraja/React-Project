const mongoose = require("mongoose");
const mongoURL =
  "mongodb://127.0.0.1:27017/peter?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

const connectToMongo = () => {
  mongoose.connect(mongoURL).then(() => {
    console.log("Connected to mongodb successfully");
  });
};

module.exports = connectToMongo;
