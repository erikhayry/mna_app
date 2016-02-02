angular.module('mna').factory('DataService', function($q, $http) {
    var _tracks = [],
        _sortedAlbums = [],
        _currentAlbumIndex = 0;
        
        
    function _getAlbumData(trackData){
        var _deferred = $q.defer();
        console.log('Get Album Data', trackData.data)
        
        if(window.plugins && window.plugins.iOSAudioInfo){
            console.log('Get Track')                   
        }
        else {
            console.log('Get Mock Track')
            _currentAlbumIndex = _currentAlbumIndex == '3554566140474577000' ? '3554566140474578400' : '3554566140474577000';
            $http.get('mock_data/' + _currentAlbumIndex + '.json').
                success(function(data, status, headers, config) {
                    _deferred.resolve(data[0])
                }).
                error(function(data, status, headers, config) {
                    _deferred.reject('Unable to get data')
                });
        }          
        
        return _deferred.promise; 
    }    
        
    function _sortAlbums(trackData){
        var _deferred = $q.defer(),
            _albums = {};
        console.log('Sort Albums', trackData)
        
        trackData.forEach(function(track){
              if(!_albums[track.albumId]){
                  _albums[track.albumId] = {
                      id: track.albumId,
                      name: track.albumTitle,
                      artist: track.artist,
                      count: 1,
                      tracks: [
                          track
                      ]
                  };
              }
              else{
                  _albums[track.albumId].count++;
                  _albums[track.albumId].tracks.push(track)
              }
        })
       
        _deferred.resolve(Object.keys(_albums).map(function (key) {return _albums[key]}).sort(function(a, b){
            return b.count - a.count;
        }))
        
        return _deferred.promise;
    }
    
    function _error(error){
        
    }   
        
    function _getMockTracks(){
        var _deferred = $q.defer();
        console.log('Get Mock Tracks')
        $http.get('mock_data/tracks.json').then(function(data){
            console.log(data)
            _deferred.resolve(data.data)
        })
        return _deferred.promise;
    }  
    
    function _getTracks(){
        console.log('Get Tracks')
        var _deferred = $q.defer();
        
        window.plugins.iOSAudioInfo.getTracks(function(data){
            _deferred.resolve(data)
        }, _error);     
        
        return _deferred.promise;
    }   
           
    function _getNextAlbum(){
        var _deferred = $q.defer();  
        
        if(window.plugins && window.plugins.iOSAudioInfo){
            console.log('Get Tracks')   
            return _getTracks()
                .then(_sortAlbums, _error)
                .then(_getAlbumData)       
        }
        else {
            console.log('Get Mock Tracks')
            return _getMockTracks()
                .then(_sortAlbums, _error)
                .then(_getAlbumData)
        }        
        return _deferred.promise;
    }  
  
  
  return {
      greet:  function(){
          return 'Test'
      },
    getNextAlbum: _getNextAlbum,
    
    
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
