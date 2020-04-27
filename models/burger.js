var orm = require("../config/orm");

//

var burger = {
  all: function (_callback) {
    orm.selectAll("burgers", function (result) {
      _callback(result);
    });
  },

  create: function (_keyValueObj, _callback) {
    orm.insertInto("burgers", _keyValueObj, function (result) {
      _callback(result);
    });
  },

  update: function (_keyValueObj, _condtionObj, _callback) {
    orm.updateWhere("burgers", _keyValueObj, _condtionObj, function (result) {
      _callback(result);
    });
  },
};

//debug
// burger.all(function (result) {
//   console.log(result);
// });

// burger.create({ burger_name: " mcdouble" }, function (result) {
//   console.log(result);
// });

// burger.update({ burger_name: " BigMac" }, { id: " 5" }, function (result) {
//   console.log(result);
// });

module.exports = burger;
