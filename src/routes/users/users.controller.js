const { createUser } = require("../../models/user/user.model");

//Sign up
async function usersCreate(req, res) {
  try {
    const user_name = req.body.user_name;
    const password = req.body.password;
    const user = await createUser(user_name, password);
    res.send(user);
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Sign in
function usersSignIn(req, res) {
  try {
    
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: "Invalid user's credentials" });
  }
}

//Authorization
function usersAuth(req, res) {}

module.exports = {
  usersCreate,
  usersSignIn,
  usersAuth,
};
