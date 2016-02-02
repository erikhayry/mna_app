angular.module('mna')
    .factory('AudioInfo', function($q, $http) {
    var _currentAlbumId = '3554566140474577000';
           
    function _getTrack(trackData){
        console.log('Get Mock Track')
        var _deferred = $q.defer();
                
        _currentAlbumId = _currentAlbumId == '3554566140474577000' ? '3554566140474578400' : '3554566140474577000';
        $http.get('mock_data/' + _currentAlbumId + '.json').
            success(function(data, status, headers, config) {
                _deferred.resolve(data[0])
            }).
            error(function(data, status, headers, config) {
                _deferred.reject('Unable to get data')
            });
           
        return _deferred.promise; 
    }    
                           
    function _getTracks(){
        console.log('Get Mock Tracks')
        var _deferred = $q.defer();
        
        $http.get('mock_data/tracks.json').then(function(data){
            _deferred.resolve(data.data)
        })
        
        return _deferred.promise;
    }  
  
    return {
        getTracks: _getTracks,
        getTrack: _getTrack
    };
});
