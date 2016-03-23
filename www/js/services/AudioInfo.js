angular.module('mna')
    .factory('AudioInfo', function($q, $http) {           
    function _getTrack(trackId){
        console.log('Get Track', trackId)
        var _deferred = $q.defer();
                
        window.plugins.iOSAudioInfo.getTrack(function(track){
            _deferred.resolve(track[0]);
        }, function(error){
            _deferred.reject(error);
        }, trackId)
           
        return _deferred.promise; 
    }    
                           
    function _getTracks(){
        console.log('Get Tracks')       
        var _deferred = $q.defer();
                
        window.plugins.iOSAudioInfo.getTracks(function(tracks){
            console.table(tracks, ['albumTitle', 'artist', 'rating', 'playCount'])
            _deferred.resolve(tracks);
        }, function(error){
            _deferred.reject(error);
        })
           
        return _deferred.promise; 
    }  
  
    return {
        getTracks: _getTracks,
        getTrack: _getTrack
    };
});