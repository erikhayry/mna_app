var exec = require('cordova/exec');

exports.getTracks = function(success, error) {
    console.log("Plugin called");
    exec(success, error, "iOSAudioInfo", "getTracks");
};

exports.getTrack = function(success, error, trackId) {
    exec(success, error, "iOSAudioInfo", "getTrack", [trackId]);
};
