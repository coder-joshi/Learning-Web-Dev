const {getUser} = require("../Services/auth");

async function restrictToLoggedInUserOnly(req,res,next){
    // Check for token in Authorization header first, then in cookies
    const userUid = req.headers["authorization"];
    let token;
    
    if(userUid) {
        token = userUid.split("Bearer ")[1];
    } else if(req.cookies?.token) {
        token = req.cookies.token;
    }
    
    if(!token){
        return res.redirect("/login");
    }
    
    const user = getUser(token);
    if(!user){
        return res.redirect("/login");
    }
    req.user = user;
    next()
}

async function checkAuth(req,res,next){
    // Check for token in Authorization header first, then in cookies
    const userUid = req.headers["authorization"];
    let token;
    
    if(userUid) {
        token = userUid.split("Bearer ")[1];
    } else if(req.cookies?.token) {
        token = req.cookies.token;
    }
    
    if(!token) {
        req.user = null;
        return next();
    }
    
    const user = getUser(token);
    req.user = user;
    console.log(req.user);
    next()
}

module.exports = {restrictToLoggedInUserOnly,checkAuth};