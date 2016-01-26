angular.module('starter.services', [])

.factory('DataService', function() {
  return {
    getPopularAlbums: function(musicData) {
      return musicData;
    }
  };
});
