import User from "../models/Users.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

export const register = async (req, res, next) => {

  try {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    })

    const user = await newUser.save()
    res.status(200).send(user)
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {

  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return next(createError(404, "Usuário não encontrado"))

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect)
      return next(createError(400, "Usuário ou senha incorretos!"))

      const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT)

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({...otherDetails})
  } catch (err) {
    next(err)
  }
}