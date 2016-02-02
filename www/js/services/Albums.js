angular.module('mna')
    .factory('Albums', function($q, $http, AudioInfo, Sort) {
    var _tracks = [],
        _sortedAlbums = [],
        _currentAlbumIndex = 0;
           
    function _getAlbum(albumsSorted){
        console.log('_getAlbum')
        return AudioInfo.getTrack(albumsSorted[0].id); 
    }    
        
    function _sortToAlbums(trackData){
        console.log('_sortToAlbums')
        return $q.when(Sort.sortToAlbums(trackData))     
    }
                   
    function _getNextAlbum(){    
        console.log('_getNextAlbum')  
        return AudioInfo.getTracks()
                .then(_sortToAlbums)
                .then(_getAlbum)  
    }  
  
    return {
        getNextAlbum: _getNextAlbum,
    };
});
