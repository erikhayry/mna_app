angular.module('mna')
    .factory('Sort', function(lodash) {

    function _sortToAlbums(tracks){
        console.log('_sortToAlbums')

        return lodash.chain(tracks).groupBy('albumId').sortBy(function(a,b){
            console.log(a)
            console.log(b)
            return a && b ? b.length - a.length : 0
        }).value()
    }
  
    return {
        sortToAlbums: _sortToAlbums
    };
});
