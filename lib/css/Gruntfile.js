module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      browserify: {
        command: 'browserify -r chai -r cssom -o ../../build/sandbox_vendor.js'
      }
    },
    concat: {
      '../../build/demos/css.js': ['../../build/sandbox_vendor.js', 'node_modules/mocha/mocha.js', 'node_modules/abecedary/iframe/reporter.js']
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['shell:browserify', 'concat']);
};