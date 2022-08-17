const asyncHandler = require("express-async-handler");
const Job = require("../models/jobModel");
const Profile = require("../models/profileModel");

exports.Addjob = asyncHandler(async (req, res) => {
  const { id, maintitle, category, category2, days, price } = req.body;
  const job = await Job.create({
    id,
    maintitle,
    category,
    category2,
    days,
    price,
  });
  if (job) {
    res.json(job);
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

exports.buyerReletedJob = asyncHandler(async (req, res) => {
  const userid = req.params.id;
  const user = await Profile.findOne({ user: `${userid}` });
  if (user) {
    const category = user.skillcategory;
    const skill = user.skill;
    const jobs = await Job.find({
      category: `${category}`,
      category2: `${skill}`,
    });
    if (jobs) {
      res.json(jobs);
    } else {
      res.status(400);
      throw new Error("no any jobs");
    }
  }
});

exports.getjobbyuser = asyncHandler(async (req, res) => {
  const { userid } = req.params;
  const job = await Job.find({ id: `${userid}` });
  if (job) {
    res.json(job);
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});
