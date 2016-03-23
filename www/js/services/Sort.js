angular.module('mna')
    .factory('Sort', function(lodash) {

    function _sortToAlbums(tracks){
        console.log('_sortToAlbums')
        return lodash.chain(tracks).groupBy('albumPersistentID').sortBy(function(a) { 
            return -a.length; 
        }).value()
    }

    function _sortByRating(tracks){
        console.log('_sortByRating')
        return lodash.chain(tracks).groupBy('albumPersistentID').map(function(a) { 
            return lodash.extend({}, a[0], {totalRating: lodash.reduce(a, function(b, c){
                    return b + parseInt(c.rating);
                }, 0)})
        }).sortBy(function(a) { 
            return -a.totalRating; 
        }).value()
    }
  
    return {
        sortToAlbums: _sortToAlbums,
        sortByRating: _sortByRating
    };
});
