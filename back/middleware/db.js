import mmongoose from "mongoose";

export const connectDB = () => {
    mmongoose.connect("mongodb://localhost:27017/WeatherPlus")
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.error("Error connecting to MongoDB:", error));
}

