angular.module('mna')
    .factory('Sort', function() {
    function _sortToAlbums(tracks){
        console.log('_sortToAlbums')
        var _albums = {};
        tracks.forEach(function(track){
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
       
        return Object.keys(_albums).map(function (key) {return _albums[key]}).sort(function(a, b){
            return b.count - a.count;
        })     
    }
  
    return {
        sortToAlbums: _sortToAlbums,
    };
});
