cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/me.rahul.plugins.audio-picker/www/iOSAudioPicker.js",
        "id": "me.rahul.plugins.audio-picker.iOSAudioPicker",
        "pluginId": "me.rahul.plugins.audio-picker",
        "clobbers": [
            "window.plugins.iOSAudioPicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "me.rahul.plugins.audio-picker": "0.0.8"
}
// BOTTOM OF METADATA
});