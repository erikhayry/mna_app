module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      '../www/lib/angular/angular.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/ng-lodash/build/ng-lodash.min.js',
      '../test/app.js',
      '../www/js/services/AudioInfo.mock.js',
      '../www/js/services/Albums.js',
      '../www/js/services/Sort.js',
      '../www/js/**/*.spec.js'
    ]
  });
};
