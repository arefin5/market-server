const asyncHandler = require("express-async-handler");
const Gig=require("../models/gigModel");

exports.Getgigs = asyncHandler(async (req, res) => {
  const gigs = await Gig.find({});
  console.log("hello world")
  res.json(gigs);
});


exports.getgigbyuser = asyncHandler(async (req, res) => {
  const userid = req.params.userid;
  const gigs = await Gig.find({ user: "${userid}" });
  if(gigs) {
    res.json(gigs)
  }
    else{
        res.status(400);
        throw new Error("invalid data")
    }

});


 exports.addgig = asyncHandler(async (req, res) => {
  const {
    title,
    categoryone,
    categorytwo,
    servicetype,
    metadata,
    searchtag,
    pkgname,
    pkgdiscription,
    deliverytime,
    numofpages,
    numofproducts,
    customization,
    responsivedesign,
    contentupload,
    revision,
    price,
    image,
    user,
  } = req.body;

   const gig = await Gig.create({
    title,
    categoryone,
    categorytwo,
    servicetype,
    metadata,
    searchtag,
    pkgname,
    pkgdiscription,
    deliverytime,
    numofpages,
    numofproducts,
    customization,
    responsivedesign,
    contentupload,
    revision,
    price,
    image,
    user,
  });
  res.status(201).json({
    success: true,
    data: gig,
  });
  if (gig) {
    res.json(gig);
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});
