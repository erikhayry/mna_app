describe('greeter', function () {

    beforeEach(module('services'));

    var DataService;

    beforeEach(inject(function ($injector, _DataService_) {
        DataService = _DataService_;
    }));

    it('should say Hello to the World', function () {
        expect(DataService.greet('World')).toEqual('Test');
    });
});
