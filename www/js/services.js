angular.module('starter.services', [])

.factory('DataService', function($q) {
  return {
    getPopularAlbums: function(musicData) {
      return musicData;
    },
    getPopularAlbumsFakeData: function(){
        return $q(function(resolve, reject) {
            setTimeout(function() {
                resolve([
                    {artist: "Son of Raw", title: "A Black Man In Space (Sax Remix)", albumTitle: "A Black Man In Space - EP"},
                    {artist: "Johnny Cash", title: "A Boy Named Sue (Live)", albumTitle: "At San Quentin"}
                ]);
            }, 1000);
        })
    }
  };
});
