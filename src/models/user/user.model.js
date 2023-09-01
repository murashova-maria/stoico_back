const bcrypt = require("bcrypt");
const UserModel = require("./user.mongo");

const createUser = async (user_name, password) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const doc = new UserModel({
    user_name,
    passwordHash,
  });
  const user = await doc.save();
  const { passwordHash: h, ...userData } = user._doc;
  return userData
};


const findUser = async (user_name) => {
    const user = await UserModel.findOne({user_name})
    return user
}


const findUserById = async (_id) => {
  const user = await UserModel.findOne({_id})
  const {passwordHash: h, ...userData} = user._doc
  return userData
}

module.exports = {
    createUser,
    findUser,
    findUserById
}
