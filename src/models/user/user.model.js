const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const UserModel = require("./user.mongo");

const createUser = async (user_name, password) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const doc = new UserModel({
    user_name,
    passwordHash,
  });
  const user = await doc.save();
  const token = jwt.sign(
    {
      _id: user._id,
    },
    "secret123",
    {
      expiresIn: "30d",
    }
  );
  const { passwordHash: h, ...userData } = user._doc;
  return { ...userData, token }
};

module.exports = {
    createUser
}
