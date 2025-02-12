import mmongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB = () => {
    mmongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.error("Error connecting to MongoDB:", error));
}

