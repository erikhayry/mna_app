'use strict'
angular.module('mna')
.factory('Settings', function(Storage) {  
    var _defaultPreferences = [
        {
            'text': 'Use ratings DEF',
            'checked': false,
        },
        {
            'text': 'Another Pref DEF',
            'checked': false,
        }
   ]
             
    function _getIgnoreList(){
        return Storage.getIgnoreList() || [];
    }
    
    function _setIgnoreList(ignoreList){
        return Storage.setIgnoreList(ignoreList) || [];
    }
    
    function _getPreferences(){
        return ;
    }
    
    function _setPreferences (key, value){
        return Storage.setPreferences(key, value) || _defaultPreferences;
    }            
        
    return {
        getIgnoreList: _getIgnoreList,
        setIgnoreList: _setIgnoreList,
        getPreferences: function(){
            return Storage.getPreferences(_defaultPreferences)
        },
        setPreferences: function(key, value){
            console.log(key, value)
            return Storage.setPreferences(key, value)
        }
    }        
});