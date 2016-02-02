angular.module('mna.controllers', [])

.controller('ResultCtrl', function($scope, $ionicPlatform, $timeout, DataService) {
    var vm = this,
        _isDevice = false;        
    vm.album = null;
    vm.error = '';
    vm.isLoading = true;
           
    function success(data){
        console.log('success!', data)
        console.timeEnd('getNextAlbum');

        vm.album = data;
        vm.error = '';
        vm.isLoading = false;

    }
    
    function error(error){
        console.error(error)
        console.timeEnd('getNextAlbum');        

        vm.album = null;
        vm.error = error;
        vm.isLoading = false;
       
    }
       
    vm.getNextAlbum = function(){
        console.log('Try getting Album')
        console.time('getNextAlbum');
        vm.isLoading = true;
        vm.error = '';
        vm.album = null;
        DataService.getNextAlbum().then(success, error)       
    }
   
    //init       
    document.addEventListener('deviceready', function () {
        _isDevice = true;
        vm.getAudio();
    }, false);
    
    $timeout(function(){
        if(!_isDevice){
            vm.getNextAlbum();
        }
    }, 2000)  
})