'use strict'
angular.module('mna')
.factory('Settings', function(Storage) {  
    var _defaultPreferences = [
        {
            'text': 'Use ratings',
            'checked': true,
        },
        {
            'text': 'Another Pref',
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
    
    function _setPreferences (preferences){
        return Storage.setPreferences(preferences) || _defaultPreferences;
    }            
        
    return {
        getIgnoreList: _getIgnoreList,
        setIgnoreList: _setIgnoreList,
        getPreferences: function(){
            return Storage.getPreferences(_defaultPreferences)
        },
        setPreferences: function(preferences){
            return Storage.setPreferences(preferences, _defaultPreferences)
        }
    }        
});