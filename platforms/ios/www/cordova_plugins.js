cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/erikportin.plugins.audio-info/www/iOSAudioInfo.js",
        "id": "erikportin.plugins.audio-info.iOSAudioInfo",
        "pluginId": "erikportin.plugins.audio-info",
        "clobbers": [
            "window.plugins.iOSAudioInfo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "erikportin.plugins.audio-info": "0.0.1"
}
// BOTTOM OF METADATA
});