const asyncHandler = require('express-async-handler');
const User=require('../models/userModel');
const genrateToken= require('../utills/jsonwebtokens');
exports.authuser = asyncHandler(async (req, res) => {
const {email,password}=req.body;
const user=await User.findOne({email});
if(user && (await user.password===password)){
    res.json({
        status:'success',
        _id:user._id,
        email:user.email,
        name:user.name,
         token:genrateToken(user._id),
         isBuyer:user.isBuyer,       
    });
}else{
    res.status(400);
    throw new Error("invalid data");
}

})
exports.getUserprofile = asyncHandler(async (req, res) => {
    const {name,email,isBuyer,password}=req.body;
    const existUser=await User.findOne({email});
    if(existUser){
        res.status(400);
        throw new Error("invalid data");
    }
    const user=await User.create({name,email,isBuyer,password})
    if(user){
        res.status(201).json({
             name:user.name,
                email:user.email,
                isBuyer:user.isBuyer,
                password:user.password,
                _id:user._id,
                token:genrateToken(user._id),

        });
    }else{
        res.status(400);
        throw new Error("invalid data");
    }

})
exports.rigesterUser = asyncHandler(async (req, res) => {
    const user=await User.findById(req.user.id);
    if(user){
        res.json({
            name:user.name,
            email:user.email,
            isBuyer:user.isBuyer,
            _id:user._id,
            token:genrateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("invalid data");
    }
})