angular.module('starter.controllers', [])

.controller('ResultCtrl', function($scope, DataService) {
    var vm = this;
    vm.result = [];
    vm.error = '';
        
    console.log('Result')
    function success(data){
        console.log('success!')
        console.log(data)

            vm.result = DataService.getPopularAlbums(data)

    }
    function error(error){
        console.error(error)
        vm.error = error;
    }
    
    vm.getAudio = function(){
        if(window.plugins && window.plugins.iOSAudioPicker){
            console.log('Get Audio')
            window.plugins.iOSAudioPicker.getAudio(success, error,'true','true');       
        } 
    }
    
    //init
    vm.getAudio();
})

.controller('PreferencesCtrl', function() {
    var vm = this;
    vm.preferences = {};
})