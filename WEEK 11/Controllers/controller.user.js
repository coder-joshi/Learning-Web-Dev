const {setUser} = require("../Services/auth");
const User = require("../Models/model.user");


async function handleUserSignUp(req,res){
    const {name,email,password} = req.body;
    await User.create({name,email,password});
    return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const {email, password } = req.body;
  const user = await User.findOne({email, password });
  if(!user){
    return res.render("login",{
      error: "Invalid username or password"
    });
  } 
  
  const token = setUser(user);
  
  // Set the token as a cookie
  res.cookie("token", token);
  
  // Redirect to home page
  return res.redirect("/");
}

module.exports = {handleUserSignUp,handleUserLogin}