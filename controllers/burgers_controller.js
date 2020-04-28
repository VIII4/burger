var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//HTML ROUTES
router.get("/", function (req, res) {
  burger.all(function (data) {
    var _data = {
      burgers: data,
    };
    console.log(_data);
    res.render("index", _data);
  });
});

//API ROUTES
router.get("/api/burgers", function (req, res) {});
router.post("/api/create/:newburger", function (req, res) {});
router.post("/api/devour/:burger", function (req, res) {});

//Export
module.exports = router;
