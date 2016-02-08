angular.module('mna')
    .factory('AudioInfo', function($q, $http) {
    var _currentAlbumId = '3554566140474577000',
        _tracks = [],
        _albums = {};
           
    function _getTrack(trackData){
        console.log('Get Mock Track')
        var _deferred = $q.defer();                
        _currentAlbumId = _currentAlbumId == '3554566140474577000' ? '3554566140474578400' : '3554566140474577000';
        
        if(_albums[_currentAlbumId]){
            _deferred.resolve(_albums[_currentAlbumId])
        }
        
        else{
            $http.get('mock_data/' + _currentAlbumId + '.json').
                success(function(data, status, headers, config) {
                    _albums[_currentAlbumId] = data[0];
                    _deferred.resolve(_albums[_currentAlbumId])
                }).
                error(function(data, status, headers, config) {
                    _deferred.reject('Unable to get data')
                });            
        }
           
        return _deferred.promise; 
    }    
                           
    function _getTracks(shouldRefreshData){
        console.log('Get Mock Tracks')
        var _deferred = $q.defer();
        
        if(shouldRefreshData){
            _tracks = [];
            _albums = {};
        }
        
        if(_tracks.length > 0){
            _deferred.resolve(_tracks)
        }
        else{
            $http.get('mock_data/tracks.json').then(function(data){
                _tracks = data.data;
                _deferred.resolve(_tracks)
            })            
        }
        
        return _deferred.promise;
    }  
  
    return {
        getTracks: _getTracks,
        getTrack: _getTrack
    };
});
