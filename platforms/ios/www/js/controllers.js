angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    console.log('dash')
    
    function success(data){
        console.log('success!')
        console.log(data)
    }
    function error(data){
        console.log('error!')
        console.log(data)
    }
    $scope.getAudio = function(){
        console.log('Get audio.')
        window.plugins.iOSAudioPicker.getAudio(function(data){
            console.log('callback')
            success(data);
        },function(data){
            console.log('callback')
            success(data);
        },'true','true');
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
