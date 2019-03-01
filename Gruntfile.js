module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['deploy']);

  var environment = grunt.option('environment') || 'dev';

  grunt.initConfig({
    exec: {
      deploy: 'serverless deploy -v --stage ' + environment,
      test: 'mocha ./test/test.js'
    }
  });

  grunt.registerTask('deploy', ["exec:deploy"]);
  grunt.registerTask('test', ["exec:test"]);

};
