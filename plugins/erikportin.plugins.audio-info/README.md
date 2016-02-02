# IMPORTANT NOTE

Thanks to [Rahul Pandey](https://github.com/an-rahulpandey) and the plugin [me.rahul.plugins.audio-picker](https://github.com/an-rahulpandey/ios-audio-picker.git) most of my code is based on his work.
# Description

The plugin gives you track information from you iOS device using the MPMediaQuery class.

### Installation

    cordova plugin add https://github.com/erikportin/ios-audio-info.git

### Methods & Usage

- **To get all the songs from the music library**

````
window.plugins.iOSAudioInfo.getTracks(success,error);
````

  success - will be called when songs are exported. You can get the array of songs list using this
````javascript
    function success(data)
    {
      console.log(JSON.stringify(data));
    }
````  
 error - will be called if there are any errors in exporting the songs
````
    function error(e)
    {
      console.log(e);
    }
````  

- **To get a song from the music library **

````
window.plugins.iOSAudioInfo.getTracks(success,error,trackId);
````

