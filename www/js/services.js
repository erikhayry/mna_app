angular.module('starter.services', [])

.factory('DataService', function($q, $http) {
  function _getgetPopularAlbums(data){
      return data;
  }  
        
  return {
    getPopularAlbums: function(musicData) {
      return musicData;
    },
    getPopularAlbumsMock: function(){
        var _deferred = $q.defer();

        $http.get('mock_data/tracks.json').
            success(function(data, status, headers, config) {
                _deferred.resolve(_getgetPopularAlbums(data))
            }).
            error(function(data, status, headers, config) {
                _deferred.reject('Unable to get data')
            });
            
        return _deferred.promise;    
    },
    getAlbumMock: function(id){
        var _deferred = $q.defer();
        $http.get('mock_data/3554566140474577000.json').
            success(function(data, status, headers, config) {
                _deferred.resolve(data)
            }).
            error(function(data, status, headers, config) {
                _deferred.reject('Unable to get data')
            });
        return _deferred.promise;               
    }
  };
});
