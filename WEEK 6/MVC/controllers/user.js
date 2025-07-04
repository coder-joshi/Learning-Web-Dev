const User = require("../models/user")

async function HandleGetAllUsers(req,res){
    const allDbUsers = await User.find({})
    res.setHeader("X-MyName", "Atharv Joshi")
    res.status(200).json(allDbUsers);
}

async function HandleGetUserById(req,res){
    const user = await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({msg: "User not found"})
    }
    return res.json(user);
}

async function HandleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"})
    return res.json({msg: "Updated"})
}

async function HandleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({ message: "pending" });
}

async function HandleCreateNewUser(req,res){
    const body = req.body;
    if (!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title) {
        return res.status(400).json({msg: "All fields are required"})        
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });
    console.log(result);
    return res.status(201).json({ Msg: "Success",id: result._id })
}


module.exports = {HandleGetAllUsers,HandleGetUserById,HandleUpdateUserById,HandleDeleteUserById,HandleCreateNewUser}