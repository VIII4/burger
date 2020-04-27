//Import connection
var connection = require("./connection.js");

//#region Global Variables
``;

//#endregion

//#region Helper Functions

function printQuestionMarks(_valueAmt) {
  var arr = [];

  for (var i = 0; i < _valueAmt; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Convert object key/value pairs to SQL syntax string
function objToSql(_obj) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in _obj) {
    var value = _obj[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(_obj, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//#endregion

//Orm
var orm = {
  ////Read
  //Select all rows from table (SELECT * FROM _table)
  selectAll: function (_table, _callback) {
    var sql = "SELECT * FROM ??";
    connection.query(sql, [_table], function (err, results) {
      if (err) throw err;
      //console.log(results);
      _callback(results);
    });
  },

  //Select Column from table (SELECT _column FROM _table)
  selectCol: function (_column, _table, _callback) {
    var sql = "SELECT ? FROM ??";
    connection.query(sql, [_condition, _table], function (err, results) {
      if (err) throw err;
      //console.log(results)
      _callback(_results);
    });
  },

  //Select all from table where value is (SELECT * FROM _table WHERE _condition ({_column: _value}))
  selectAllFromWhere: function (_table, _condition, _callback) {
    var _temp = [];
    //
    var sql = "SELECT * FROM " + _table;
    sql += " WHERE " + objToSql(_condition);

    connection.query(sql, function (err, results) {
      if (err) throw err;
      _callback(results);
    });
  },

  //Select column from table where value is (SELECT _column FROM _table WHERE _condition ({_column: _value}) )
  //selectColFromWhere: function (_column, _table, _condition, _callback) {},

  ////Create
  //INSERT into _table  SET {_column:_value, _column:_value, ...}
  insertInto: function (_table, _keyValues, _callback) {
    var sql = "INSERT INTO ?? SET " + objToSql(_keyValues);
    var insert = _table;

    connection.query(sql, insert, function (err, results) {
      if (err) throw err;
      _callback(results);
    });
  },

  ////Update
  // UPDATE _table SET {_column:_value, ...} WHERE _condition ({_condition:_conditionValue})
  updateWhere: function (_table, _keyValues, _condition, _callback) {
    var sql =
      "UPDATE ?? SET " +
      objToSql(_keyValues) +
      " WHERE " +
      objToSql(_condition);

    var insert = _table;

    connection.query(sql, insert, function (err, results) {
      if (err) throw err;
      _callback(results);
    });
  },

  ////Destroy
  //DELETE FROM _table WHERE _condition ({_condition:_value})
  //destroyWhere: function (_table, _condition, _callback) {},
};

module.exports = orm;
