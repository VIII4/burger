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
router.post("/api/create/:burger", function (req, res) {
  burger.create(
    {
      burger_name: req.params.burger,
    },
    function (data) {
      console.log(data);
      res.json(data);
    }
  );
});

router.put("/api/devour/:id", function (req, res) {
  burger.update(
    {
      devoured: "true",
    },
    { id: req.params.id },
    function (data) {
      if (data.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

//Export
module.exports = router;
