describe('Sort', function () {

    beforeEach(module('mna'));

    var Sort,
        _tracks = [
            {"title":"A Black Man In Space (Sax Remix)","albumTitle":"A Black Man In Space - EP","trackId":3554566140474578000,"albumId":1,"genre":"Electronic","artist":"Son of Raw"},
            {"title":"A Boy Named Sue (Live)","albumTitle":"At San Quentin","trackId":3554566140474577000,"albumId":2,"genre":"Country","artist":"Johnny Cash"},
            {"title":"À cause des garçons (Tepr Remix)","albumTitle":"Kitsuné : À cause des garçons (Remixes) - EP","trackId":3554566140474578400,"albumId":3,"genre":"Electronic","artist":"Yelle"},
            {"title":"A Change Is Gonna Come","albumTitle":"Keep Movin' On","trackId":3554566140474578000,"albumId":2,"genre":"R&B/Soul","artist":"Sam Cooke"},
            {"title":"A demain My Darling","albumTitle":"Les vendanges de l'amour","trackId":321514795811412350,"albumId":4,"genre":"French Pop","artist":"Marie Laforêt"},
            {"title":"A French Love","albumTitle":"Somebody Outside","trackId":3554566140474575400,"albumId":2,"genre":"Pop","artist":"Anna Ternheim"},
            {"title":"A Girl Like You","albumTitle":"Gorgeous George","trackId":3554566140474576400,"albumId":4,"genre":"Alternative","artist":"Edwyn Collins"},
            {"title":"A Go Go (Video Edit)","albumTitle":"A Go Go - EP 2","trackId":3686430716576416000,"albumId":4,"genre":"Electronic","artist":"Truby Trio"},
            {"title":"A Good Man Is Hard to Find","albumTitle":"Sweet Emma Barrett and Her New Oleans Music","trackId":3554566140474578400,"albumId":2,"genre":"Jazz","artist":"Sweet Emma Barrett"}
        ];

    beforeEach(inject(function ($injector, _Sort_) {
        Sort = _Sort_;
    }));

    it('should sort tracks', function () {
        var sortedData = Sort.sortToAlbums(_tracks);
        
        expect(sortedData.length).toEqual(4);
        expect(sortedData[0].id).toEqual(2);
        expect(sortedData[0].tracks.length).toEqual(4);
        expect(sortedData[0].tracks[0].title).toEqual('A Boy Named Sue (Live)');
        expect(sortedData[0].tracks[0].trackId).toEqual(3554566140474577000);
        expect(sortedData[0].tracks[1].title).toEqual('A Change Is Gonna Come');
        expect(sortedData[0].tracks[2].title).toEqual('A French Love');
        expect(sortedData[0].tracks[3].title).toEqual('A Good Man Is Hard to Find');

        expect(sortedData[1].id).toEqual(4);
        expect(sortedData[1].tracks.length).toEqual(3);  
        
        expect(sortedData[2].id).toEqual(1);
        expect(sortedData[3].id).toEqual(3);
    });
});
