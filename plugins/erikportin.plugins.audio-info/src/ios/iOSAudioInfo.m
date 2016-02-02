/********* iOSAudioInfo.m Cordova Plugin Implementation *******/

#import "iOSAudioInfo.h"
#import <AVFoundation/AVFoundation.h>

@implementation iOSAudioInfo

- (void) getTracks:(CDVInvokedUrlCommand *)command
{
    MPMediaQuery *everything = [[MPMediaQuery alloc] init];
    NSArray *itemsFromGenericQuery = [everything items];
    songsList = [[NSMutableArray alloc] init];
    for(MPMediaItem *song in itemsFromGenericQuery)
    {
        [songsList addObject:[self buildSongInfo:song:NO]];
    }
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:songsList];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
- (void) getTrack:(CDVInvokedUrlCommand *)command
{
    NSString *trackId = [command argumentAtIndex:0];
    
    if(trackId == nil){
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"No ID found"];
    }
    else
    {
        MPMediaItem *song;
        MPMediaPropertyPredicate *predicate;
        MPMediaQuery *songQuery;
        
        predicate = [MPMediaPropertyPredicate predicateWithValue: trackId forProperty:MPMediaItemPropertyPersistentID];
        songQuery = [[MPMediaQuery alloc] init];
        [songQuery addFilterPredicate: predicate];
        
        if (songQuery.items.count > 0)
        {
            songsList = [[NSMutableArray alloc] init];
            song = [songQuery.items objectAtIndex:0];
            [songsList addObject:[self buildSongInfo:song:YES]];
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:songsList];
        }
        else
        {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"track not found"];
        }        
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (NSMutableDictionary *)buildSongInfo :(MPMediaItem*)song :(BOOL*)addImage
{
    NSString *title = [song valueForProperty:MPMediaItemPropertyTitle];
    NSString *albumTitle = [song valueForProperty:MPMediaItemPropertyAlbumTitle];
    NSString *artist = [song valueForProperty:MPMediaItemPropertyArtist];
    NSString *genre = [song valueForProperty:MPMediaItemPropertyGenre];
    NSString *trackId = [song valueForProperty:MPMediaItemPropertyPersistentID];
    NSString *albumId = [song valueForProperty:MPMediaItemPropertyAlbumPersistentID];
    
    NSLog(@"title = %@",title);
    NSLog(@"albumTitle = %@",albumTitle);
    NSLog(@"artist = %@",artist);
    
    NSMutableDictionary *songInfo = [[NSMutableDictionary alloc] init];
    if(title != nil) {
        [songInfo setObject:title forKey:@"title"];
    } else {
        [songInfo setObject:@"No Title" forKey:@"title"];
    }
    if(albumTitle != nil) {
        [songInfo setObject:albumTitle forKey:@"albumTitle"];
    } else {
        [songInfo setObject:@"No Album" forKey:@"albumTitle"];
    }
    if(artist !=nil) {
        [songInfo setObject:artist forKey:@"artist"];
    } else {
        [songInfo setObject:@"No Artist" forKey:@"artist"];
    }
    if(genre !=nil) {
        [songInfo setObject:genre forKey:@"genre"];
    } else {
        [songInfo setObject:@"No genre" forKey:@"genre"];
    }
    if(trackId !=nil) {
        [songInfo setObject:trackId forKey:@"trackId"];
    } else {
        [songInfo setObject:@"No trackId" forKey:@"trackId"];
    }
    if(albumId !=nil) {
        [songInfo setObject:albumId forKey:@"albumId"];
    } else {
        [songInfo setObject:@"No albumId" forKey:@"albumId"];
    }
    
    if(addImage){
        BOOL artImageFound = NO;
        NSData *imgData;
        MPMediaItemArtwork *artImage = [song valueForProperty:MPMediaItemPropertyArtwork];
        UIImage *artworkImage = [artImage imageWithSize:CGSizeMake(artImage.bounds.size.width, artImage.bounds.size.height)];
        if(artworkImage != nil){
            imgData = UIImagePNGRepresentation(artworkImage);
            artImageFound = YES;
        }
        if (artImageFound) {
            [songInfo setObject:[imgData base64EncodedString] forKey:@"image"];
        } else {
            [songInfo setObject:@"No Image" forKey:@"image"];
        }
    }

    return songInfo;
}

@end