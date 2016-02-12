angular.module('mna')
    .factory('Albums', function($q, $http, AudioInfo, Sort) {     
        var _groupedAndSortedTracks = [],
            _tracksWithImage = {},
            _currentAlbumIndex = -1;
                     
        function _getAlbum(albumsSorted){
            console.log('_getAlbum')
            //console.table(albumsSorted)
            _currentAlbumIndex++;
            return AudioInfo.getTrack(albumsSorted[_currentAlbumIndex][0].trackId); 
        }    
            
        function _sortToAlbums(trackData){
            console.log('_sortToAlbums')
            //console.table(trackData)
            return $q.when(Sort.sortToAlbums(trackData))     
        }
                    
        function _getNextAlbum(shouldRefreshData){    
            console.log('_getNextAlbum')  
            
            if(shouldRefreshData){
                _groupedAndSortedTracks = [];
                _tracksWithImage = {};
                _currentAlbumIndex = -1;  
            }
            
            if(_groupedAndSortedTracks.length > 0){
                return _getAlbum(_groupedAndSortedTracks)
            }
            
            return AudioInfo.getTracks(shouldRefreshData)
                .then(_sortToAlbums)
                .then(_getAlbum)                               
        }  
    
        return {
            getNextAlbum: _getNextAlbum,
        };
});
