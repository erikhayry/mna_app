angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope, $ionicPlatform, DataService) {
    var vm = this;
    vm.result = [];
    vm.track = {};
    vm.error = '';
    vm.isLoading = true;
        
    function success(data){
        console.log('success!')

        console.timeEnd('getAudio');
        $scope.$apply(function(){
            vm.result = DataService.getPopularAlbums(data)
            vm.isLoading = false;
            console.log(vm.result[0].trackId)
            getTrack(vm.result[2].trackId);
        })
    }
    function error(error){
        console.error(error)
        console.timeEnd('getAudio');        
        $scope.$apply(function(){
            vm.error = error;
            vm.result = [];
            vm.isLoading = false;
        })
    }
    
    function getTrack(id){
        console.log('Try getting track', id)
        vm.isLoading = true;        
        window.plugins.iOSAudioInfo.getTrack(function(data){
            $scope.$apply(function(){
                vm.error = error;
                vm.track = data[0];
                console.log(JSON.stringify(data))
                vm.isLoading = false;
            })
        }, error, id); 
    }
    
    vm.getAudio = function(){
        console.log('Try getting Audio')
        if(window.plugins && window.plugins.iOSAudioInfo){
            console.log('Get Audio')
            console.time('getAudio');
            vm.isLoading = true;
            vm.error = '';
            vm.result = [];
            window.plugins.iOSAudioInfo.getTracks(success, error);       
        }
        else {
            vm.isLoading = true;
            DataService.getPopularAlbumsFakeData().then(function(data){
                vm.isLoading = false;
                vm.result = data;
            })
        } 
    }
   
    //init       
    document.addEventListener('deviceready', function () {
        vm.getAudio();
    }, false);
})

.controller('PreferencesCtrl', function() {
    var vm = this;
    vm.preferences = {};
})