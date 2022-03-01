var router = require("express").Router();
var mongoose = require("mongoose");

var Plan = require("../database/plan");

router.get("/plan/all", async function (req, res) {
  try {
    console.log(req.ip);
    var plan = await Plan.find();
    console.log(plan);
    res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/plan/one/:id", async function (req, res) {
  try {
    var plan = await Plan.findOne({ _id: req.params.id });
    res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/plan/new", async function (req, res) {
  try {
    console.log(req.body);
    var plan = new Plan({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      price: req.body.price,
      phone: req.body.phone,
      date: Date.now(),
    });
    await plan.save();
    res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/plan/delete/:id", async function (req, res) {
  try {
    var plan = await Plan.deleteOne({ _id: req.params.id });
    res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/plan/edit/:id", async function (req, res) {
  try {
    console.log(req.body);
    var plan = await Plan.findOne({ _id: req.params.id });
    plan.name = req.body.name;
    plan.email = req.body.email;
    plan.phone = req.body.phone;
    plan.price = req.body.price;
    await plan.save();

    res.status(200).json(plan);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { router };
