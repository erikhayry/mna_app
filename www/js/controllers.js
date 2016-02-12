angular.module('mna')
    .controller('ResultCtrl', function($scope, $ionicPlatform, $ionicModal, $timeout, Albums, Settings) {
    var vm = this,
        _isDevice = false;        
    vm.album = null;
    vm.error = '';
    
    Settings.getPreferences().then(function(preferences){
        console.log(preferences)
        vm.preferences = preferences;
    });

    vm.isLoading = true;
           
    function success(data){
        console.log('success')
        console.table(data)
        console.timeEnd('getNextAlbum');

        vm.album = data;
        vm.error = '';
        vm.isLoading = false;

    }
    
    function error(error){
        console.log(error)
        console.timeEnd('getNextAlbum');        

        vm.album = null;
        vm.error = error;
        vm.isLoading = false;
       
    }
       
    vm.getNextAlbum = function(shouldRefreshData){
        console.log('Try getting Album')
        console.time('getNextAlbum');
        vm.isLoading = true;
        vm.error = '';
        vm.album = null;
        
        Albums.getNextAlbum(shouldRefreshData)
            .then(success, error)
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });       
    };
    
    $ionicModal.fromTemplateUrl('templates/settings.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        vm.modal = modal;
    });
    
    vm.showSettings = function () {
       vm.modal.show();
    };
    
    vm.hideSettings = function () {
        vm.modal.hide();
    };

    vm.preferenceChanged = function(){
        console.log('Preferences changed')
        console.table(vm.preferences)
        Settings.setPreferences(vm.preferences).then(function(preferences){
            vm.preferences = preferences;
        });
    }
    
    //init       
    document.addEventListener('deviceready', function () {
        _isDevice = true;
        vm.getNextAlbum();
    }, false);
    
    $timeout(function(){
        if(!_isDevice){
            vm.getNextAlbum();
        }
    }, 2000)  
})
