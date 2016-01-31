angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope, $ionicPlatform, DataService) {
    var vm = this;
    vm.result = [];
    vm.track = {};
    vm.error = '';
    vm.isLoading = true;
    
    $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
        
    function success(data){
        console.log('success!')
        console.timeEnd('getAudio');
        $scope.safeApply(function(){
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
        if(window.plugins && window.plugins.iOSAudioInfo){   
            window.plugins.iOSAudioInfo.getTrack(function(data){
                $scope.safeApply(function(){
                    vm.error = '';
                    vm.album = data[0];
                    vm.isLoading = false;
                })
            }, error, id);
        }
        else {
            console.log('Get Mock Album')
            vm.isLoading = true;
            DataService.getAlbumMock(id).then(function(data){
                vm.error = '';
                vm.album = data[0];
                vm.isLoading = false;
            })
        }             
    }
    
    vm.getAudio = function(){
        console.log('Try getting Audio')
        vm.isLoading = true;
        vm.error = '';
        vm.result = [];
        console.time('getAudio');
        if(window.plugins && window.plugins.iOSAudioInfo){
            console.log('Get Audio')
            window.plugins.iOSAudioInfo.getTracks(success, error);       
        }
        else {
            console.log('Get Mock Audio')
            DataService.getPopularAlbumsMock().then(success, error)
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