import mongoose from "mongoose";
import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(__dirname, "./.env") });

mongoose.set("strictQuery", false);

const connectToMongo = () => {
  // "!" It tells TypeScript that even though something looks like it could be null, it can trust you that it's not
  mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log("Connected to mongodb successfully");
  });
};

export default connectToMongo;
