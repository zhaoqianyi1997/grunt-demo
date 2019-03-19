module.exports=function(grunt){

  grunt.initConfig({
    concat: {
      options: {
              separator: ';',
      
      },
      dist: {
          src: ['reactangle.js', 'calc.js', ],
        dest: 'dist/bundle.js',
      
     },
    
    },

  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default',['concat']);
}
