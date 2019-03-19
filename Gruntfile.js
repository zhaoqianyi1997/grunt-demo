module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
                configFile: '.eslintrc.json'
          
      },
        target: ['reactangle.js']
        
    }
              
  });

    grunt.loadNpmTasks('grunt-eslint');

      grunt.registerTask('default', ['eslint']);

};

