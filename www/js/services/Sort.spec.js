describe('Sort', function () {

    beforeEach(module('mna'));

    var Sort,
        _tracks = [
            {"title":"A Black Man In Space (Sax Remix)","albumTitle":"A Black Man In Space - EP","trackId":355456,"albumId":1,"genre":"Electronic","artist":"Son of Raw"},
            {"title":"A Boy Named Sue (Live)","albumTitle":"At San Quentin","trackId":355456,"albumId":2,"genre":"Country","artist":"Johnny Cash"},
            {"title":"À cause des garçons (Tepr Remix)","albumTitle":"Kitsuné : À cause des garçons (Remixes) - EP","trackId":355456,"albumId":3,"genre":"Electronic","artist":"Yelle"},
            {"title":"A Change Is Gonna Come","albumTitle":"At San Quentin","trackId":355456,"albumId":2,"genre":"R&B/Soul","artist":"Sam Cooke"},
            {"title":"A demain My Darling","albumTitle":"Gorgeous George","trackId":321514,"albumId":4,"genre":"French Pop","artist":"Marie Laforêt"},
            {"title":"A French Love","albumTitle":"At San Quentin","trackId":355456,"albumId":2,"genre":"Pop","artist":"Anna Ternheim"},
            {"title":"A Girl Like You","albumTitle":"Gorgeous George","trackId":355456,"albumId":4,"genre":"Alternative","artist":"Edwyn Collins"},
            {"title":"A Go Go (Video Edit)","albumTitle":"Gorgeous George","trackId":368643,"albumId":4,"genre":"Electronic","artist":"Truby Trio"},
            {"title":"A Good Man Is Hard to Find","albumTitle":"At San Quentin","trackId":355456,"albumId":2,"genre":"Jazz","artist":"Sweet Emma Barrett"}
        ];

    beforeEach(inject(function ($injector, _Sort_) {
        Sort = _Sort_;
    }));

    it('should sort tracks', function () {
        var sortedData = Sort.sortToAlbums(_tracks);

        expect(sortedData.length).toEqual(4);
        expect(sortedData[0].length).toEqual(1);
        expect(sortedData[1].length).toEqual(4);
        expect(sortedData[2].length).toEqual(1);
        expect(sortedData[3].length).toEqual(3);

/*        expect(sortedData[0][0].albumTitle).toEqual('A Black Man In Space - EP');
        expect(sortedData[0][0].title).toEqual('A Black Man In Space (Sax Remix)');
        expect(sortedData[0][0].trackId).toEqual(355456);
        expect(sortedData[0][1].title).toEqual('A Change Is Gonna Come');
        expect(sortedData[0][2].title).toEqual('A French Love');
        expect(sortedData[0][3].title).toEqual('A Good Man Is Hard to Find');

        expect(sortedData[1].length).toEqual(4);
        expect(sortedData[0].tracks.length).toEqual(3);

        expect(sortedData[2].id).toEqual(1);
        expect(sortedData[3].id).toEqual(3);*/
    });
});
