const userModel = require("../models/userModel");
const { hashPassword } = require("../helpers/authHelper");
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    // if (!answer) {
    //   return res.send({ message: "Answer is Required" });
    // }
    //check user
    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already Registerd please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
console.log('hashPassword',hashedPassword)

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password:hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registation",
      error,
    });
  }
};

module.exports = registerController;
