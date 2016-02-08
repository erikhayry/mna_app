angular.module('mna')
    .factory('Sort', function(lodash) {

    function _sortToAlbums(tracks){
        console.log('_sortToAlbums')
        return lodash.chain(tracks).groupBy('albumId').sortBy(function(a) { 
            return -a.length; 
        }).value()
    }
  
    return {
        sortToAlbums: _sortToAlbums
    };
});
