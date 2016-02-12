'use strict'
angular.module('mna')
.factory('Storage', function($q) {  
    function _get(key){
        return JSON.parse(localStorage.getItem('mna.' + key) || null)
    }
    
    function _set(key, value){
        localStorage.setItem('mna.' + key, JSON.stringify(value));
        return value; 
    }
     
    return {
        getIgnoreList: function(){
            return  _get('ignorelist');
        },
        setIgnoreList: function(list){
            return _set('ignorelist', list);
        },
        getPreferences: function(defaultPreferences){
            return $q.resolve(_get('preferences') || defaultPreferences);
        },
        setPreferences: function(preferences, defaultPreferences){
            return $q.resolve(_set('preferences', preferences) || defaultPreferences);
        }
    }   
});