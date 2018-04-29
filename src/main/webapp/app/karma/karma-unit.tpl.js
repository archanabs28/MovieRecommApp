module.exports = function ( karma ) {
  karma.set({
    /** 
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      <% scripts.forEach( function ( file ) { %>'<%= file %>',
      <% }); %>
      'src/**/*.js',
      { pattern: 'src/app/*.json', watched: true, served: true, included: false }
      // 'src/**/*.coffee',
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [ 'jasmine-jquery','jasmine' ],
    plugins: [ 'karma-jasmine-jquery','karma-jasmine', 'karma-firefox-launcher', 'karma-coffee-preprocessor','karma-coverage' ],
    preprocessors: {
      'src/**/*.js': ['coverage'],

    },

    /**
     * How to report, by default.
     */
    reporters: ['dots','coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    ngHtml2JsPreprocessor: {
        stripPrefix: 'src/',
            // stripSufix: '.ext',

            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'myAppTemplates'
    },

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /** 
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'Firefox'
    ]
  });
};

