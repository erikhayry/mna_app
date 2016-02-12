'use strict'
angular.module('mna')
  .factory('Storage', function($q) {  
    var _db = window.sqlitePlugin.openDatabase({name: "mna.db"});
    _db.executeSql("DROP TABLE IF EXISTS Settings");
    _db.executeSql("CREATE TABLE Settings (text, checked)");
       
    _db.transaction(function(tx) {
      tx.executeSql('INSERT INTO Settings (text, checked) VALUES(?, ?)', ["Use Ratings", false]);
      tx.executeSql('INSERT INTO Settings (text, checked) VALUES(?, ?)', ["Another Setting", false]);
    }, function(e) {
      console.log('Transaction error: ' + e.message);
    }, function() {
      console.log('INSERT transaction OK');
      _db.executeSql('SELECT * FROM Settings', [], function(results) {
        console.log(results)
        console.log(results.rows.item(0))
      });

    });
  
  
    
     
  return {
    getIgnoreList: function(){
        return  null;
    },
    setIgnoreList: function(list){
        return null;
    },
    getPreferences: function(){
        var _deferred = $q.defer();                

        _db.executeSql('SELECT * FROM Settings', [], function(results) {
          console.log(results)
          var _len = results.rows.length,
              _ret = [];
          for (var i = 0; i < _len; i++) {
            _ret.push(results.rows.item(i))
          };
          
          console.log(_ret)

          _deferred.resolve(_ret);
        })


        return _deferred.promise; 

    },
    setPreferences: function(preferences){
        return null;
    }
  }   
});