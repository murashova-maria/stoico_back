const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  createUser,
  findUser,
  findUserById,
} = require("../../models/user/user.model");

//Sign up
async function httpUsersCreate(req, res) {
  try {
    const user_name = req.body.user_name;
    const password = req.body.password;

    const user = await createUser(user_name, password);
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    res.send({ ...user, token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Sign in
async function httpUsersSignIn(req, res) {
  try {
    const user = await findUser(req.body.user_name);
    if (!user) {
      return res.status(404).json({ error: "Invalid user's credentials" });
    }
    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );
    if (!isValidPass) {
      return res.status(404).json({ error: "Invalid user's credentials" });
    }

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
    console.log(userData);
    return res.status(200).json({ ...userData, token });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: "Invalid user's credentials" });
  }
}

//Authorization
async function httpUsersAuth(req, res) {
  try {
    const user = await findUserById(req.userId);
    if (user) {
      return res.json(user);
    }
    return res.stats(404).json({ error: "User not found" });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  httpUsersCreate,
  httpUsersSignIn,
  httpUsersAuth,
};
