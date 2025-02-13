import User from "../models/user-model.js";
import { userSchema } from "../models/user-zod.js";
const userModel = User;
import argon from "argon2";
import jwt from "jsonwebtoken";
class UserController {
  async login(req, res) {
    let data;
    try {
      data = userSchema.parse(req.body);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
    const user = await userModel.findOne({ email: data.email });
    if (!user)
      return res
        .status(400)
        .json({ message: "Oups une erreur s'est produite" });
    const isCorrect = await argon.verify(user.password, data.password);

    if (!isCorrect)
      return res
        .status(400)
        .json({ message: "Oups une erreur s'est produite" });
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ token });
  }

  async register(req, res) {
    let data;
    try {
      data = userSchema.parse(req.body);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
    const user = await userModel.findOne({ email: data.email });
    if (user)
      return res
        .status(400)
        .json({ message: "Oups une erreur s'est produite" });
    const hashedPassword = await argon.hash(data.password);
    const newUser = await userModel.create({
      ...data,
      password: hashedPassword,
    });
    return res.status(200).json({ message: "Utilisateur créé" });
  }
}


export default UserController