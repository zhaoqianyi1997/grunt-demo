module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
           'dist/reactangle.js':['./reactangle.js'] ,
           'dist/calc.js':['./calc.js']
            
        }
                     
      }       
                  
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['uglify']);

};
