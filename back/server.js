import userApp from "./service/user-service/app.js";
import app from "./service/api-gateway/app.js";
import dotenv from "dotenv";
import { connectDB } from "./middleware/db.js";
dotenv.config();

connectDB();

app.listen(process.env.GATEWAY_PORT, () => {
  console.log(`Le serveur écoute sur le port ${process.env.GATEWAY_PORT}`);
})
userApp.listen(process.env.USER_PORT, () => {
  console.log(`Le serveur écoute sur le port ${process.env.USER_PORT}`);
});
