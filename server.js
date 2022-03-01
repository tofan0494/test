var express = require("express");
var bodyPrser = require("body-parser");
var mongoose = require("mongoose");
var Plan = require("./database/plan");
var path = require("path");
var app = express();
var { router } = require("./routes");
app.use(bodyPrser());
console.log(path.join("./codesg"));
app.use(express.static(path.join("./codesg")));
mongoose.connect(
  "mongodb://localhost:27017/gym",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false,
  //     useCreateIndex: true,
  //   },
  () => console.log("connected to Database...")
);
app.use("/", router);
app.listen(6000, () => {
  console.log("server started on:6000");
});
