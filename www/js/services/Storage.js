'use strict'
angular.module('mna')
.factory('Storage', function($q) {  
    //var _db = window.sqlitePlugin.openDatabase({name: "mna.db"});
    //_db.executeSql("DROP TABLE IF EXISTS Settings");
    //_db.executeSql("CREATE TABLE IF NOT EXISTS Settings (text, checked)");

    // _db.transaction(function(tx) {
    //   tx.executeSql('INSERT INTO Settings (text, checked) VALUES(?, ?)', ["Use Ratings", false]);
    //   tx.executeSql('INSERT INTO Settings (text, checked) VALUES(?, ?)', ["Another Setting", true]);
    // }, function(e) {
    //   console.log('Transaction error: ' + e.message);
    // }, function() {
    //   console.log('INSERT transaction OK');
    //   _db.executeSql('SELECT * FROM Settings', [], function(results) {
    //     console.log(results)
    //     console.log(results.rows.item(0))
    //   });

    // });

    var _db;

    document.addEventListener("deviceready", _onDeviceReady, false);

    function _onDeviceReady() {
      _db = window.sqlitePlugin.openDatabase({name: "mna.db"});
      _db.transaction(_populateDB, _errorCB, _successCB);
    }

    function _errorCB(err) {
      console.error("Error processing SQL: " + err.code);
    }

    function _successCB() {
      _db = window.sqlitePlugin.openDatabase({name: "mna.db"});
      _db.transaction(_queryDB, _errorCB);
    }

    function _populateDB(tx) {
      //tx.executeSql("DROP TABLE Settings")
      tx.executeSql("CREATE TABLE IF NOT EXISTS Settings (text PRIMARY KEY, checked BOOLEAN NOT NULL)", _errorCB, function(tx, res){
        tx.executeSql('INSERT OR IGNORE INTO Settings (text, checked) VALUES(?, ?)', ["Use Ratings", 1]);
        tx.executeSql('INSERT OR IGNORE INTO Settings (text, checked) VALUES(?, ?)', ["Another Setting", 1]);
        //tx.executeSql('INSERT INTO Settings (text, checked) VALUES(?, ?)', ["Another Setting", false]);
      });
    }

    function _queryDB(tx) {
      tx.executeSql('SELECT * FROM Settings', [], _querySuccess, _errorCB);
    }

    function _querySuccess(tx, results) {
      return results;
    }

    function _getPreferences(){
      var _deferred = $q.defer();     
      _db = window.sqlitePlugin.openDatabase({name: "mna.db"});
      _db.transaction(function(tx){
        tx.executeSql('SELECT * FROM Settings', [], function(tx, res){
          var _len = res.rows.length,
          _ret = [];
          for (var i = 0; i < _len; i++) {
            _ret.push(res.rows.item(i))
          };
          _deferred.resolve(_ret);
        }, _errorCB);
      }, _errorCB);
      
      return _deferred.promise; 
    }

    return {
      getIgnoreList: function(){
        return  null;
      },
      setIgnoreList: function(list){
        return null;
      },
      getPreferences: _getPreferences,
      setPreferences: function(key, value){
        console.log(key, value)
        var _deferred = $q.defer();     
        _db = window.sqlitePlugin.openDatabase({name: "mna.db"});
        _db.transaction(function(tx){
          tx.executeSql('UPDATE Settings SET checked = ? WHERE text = ?', [value, key], function(tx, res){
            _deferred.resolve(_getPreferences());
          }, _errorCB);
        }, _errorCB);

        return _deferred.promise;       
      }
    }   
  });