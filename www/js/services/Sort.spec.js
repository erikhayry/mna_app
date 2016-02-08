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
            {"title":"A Good Man Is Hard to Find","albumTitle":"At San Quentin","trackId":355456,"albumId":2,"genre":"Jazz","artist":"Sweet Emma Barrett"},
            {"title":"Kitsuné : À cause des garçons (Remixes) - EP","albumTitle":"Kitsuné : À cause des garçons (Remixes) - EP","trackId":355456,"albumId":3,"genre":"Jazz","artist":"Sweet Emma Barrett"}
        ];

    beforeEach(inject(function ($injector, _Sort_) {
        Sort = _Sort_;
    }));

    it('should sort tracks', function () {
        var sortedData = Sort.sortToAlbums(_tracks);

        expect(sortedData.length).toEqual(4);
        
        expect(sortedData[0].length).toEqual(4);
        expect(sortedData[1].length).toEqual(3);
        expect(sortedData[2].length).toEqual(2);
        expect(sortedData[3].length).toEqual(1);
        
        expect(sortedData[0][0].albumTitle).toEqual('At San Quentin');
        expect(sortedData[1][0].albumTitle).toEqual('Gorgeous George');
        expect(sortedData[2][0].albumTitle).toEqual('Kitsuné : À cause des garçons (Remixes) - EP');
        expect(sortedData[3][0].albumTitle).toEqual('A Black Man In Space - EP');

    });
});
