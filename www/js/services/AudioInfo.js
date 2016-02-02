angular.module('mna')
    .factory('AudioInfo', function($q, $http) {
    var _currentAlbumId = '3554566140474577000';
           
    function _getTrack(trackData){
        console.log('Get Track', trackData[0].trackId)
        var _deferred = $q.defer();
                
        window.plugins.iOSAudioInfo.getTrack(function(track){
            _deferred.resolve(track);
        }, function(){
            _deferred.reject();
        }, trackData[0].trackId)
           
        return _deferred.promise; 
    }    
                           
    function _getTracks(){
        console.log('Get Tracks')       
        var _deferred = $q.defer();
                
        window.plugins.iOSAudioInfo.getTracks(function(tracks){
            _deferred.resolve(tracks);
        }, function(){
            _deferred.reject();
        })
           
        return _deferred.promise; 
    }  
  
    return {
        getTracks: _getTracks,
        getTrack: _getTrack
    };
});
