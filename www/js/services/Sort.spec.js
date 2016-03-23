describe('Sort', function () {

    beforeEach(module('mna'));

    var Sort,
        _tracks = [
            {"rating": "1", "title":"A Black Man In Space (Sax Remix)","albumTitle":"A Black Man In Space - EP","persistentID":355456,"albumPersistentID":1,"genre":"Electronic","artist":"Son of Raw"},
            {"rating": "0", "title":"A Boy Named Sue (Live)","albumTitle":"At San Quentin","persistentID":355456,"albumPersistentID":2,"genre":"Country","artist":"Johnny Cash"},
            {"rating": "5", "title":"À cause des garçons (Tepr Remix)","albumTitle":"Kitsuné : À cause des garçons (Remixes) - EP","persistentID":355456,"albumPersistentID":3,"genre":"Electronic","artist":"Yelle"},
            {"rating": "1", "title":"A Change Is Gonna Come","albumTitle":"At San Quentin","persistentID":355456,"albumPersistentID":2,"genre":"R&B/Soul","artist":"Sam Cooke"},
            {"rating": "2", "title":"A demain My Darling","albumTitle":"Gorgeous George","persistentID":321514,"albumPersistentID":4,"genre":"French Pop","artist":"Marie Laforêt"},
            {"rating": "0", "title":"A French Love","albumTitle":"At San Quentin","persistentID":355456,"albumPersistentID":2,"genre":"Pop","artist":"Anna Ternheim"},
            {"rating": "2", "title":"A Girl Like You","albumTitle":"Gorgeous George","persistentID":355456,"albumPersistentID":4,"genre":"Alternative","artist":"Edwyn Collins"},
            {"rating": "3", "title":"A Go Go (Video Edit)","albumTitle":"Gorgeous George","persistentID":368643,"albumPersistentID":4,"genre":"Electronic","artist":"Truby Trio"},
            {"rating": "0", "title":"A Good Man Is Hard to Find","albumTitle":"At San Quentin","persistentID":355456,"albumPersistentID":2,"genre":"Jazz","artist":"Sweet Emma Barrett"},
            {"rating": "0", "title":"Kitsuné : À cause des garçons (Remixes) - EP","albumTitle":"Kitsuné : À cause des garçons (Remixes) - EP","persistentID":355456,"albumPersistentID":3,"genre":"Jazz","artist":"Sweet Emma Barrett"}
        ];

    beforeEach(inject(function ($injector, _Sort_) {
        Sort = _Sort_;
    }));

    describe('sortToAlbums', function(){
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
    })

    describe('sortByRating', function(){
        it('should sort tracks', function () {
            var sortedData = Sort.sortByRating(_tracks);

            expect(sortedData.length).toEqual(4);
            
            expect(sortedData[0].albumTitle).toEqual('Gorgeous George');
            expect(sortedData[0].totalRating).toEqual(7);

            expect(sortedData[3].albumTitle).toEqual('At San Quentin');
            expect(sortedData[3].totalRating).toEqual(1);

        });
    })

});
