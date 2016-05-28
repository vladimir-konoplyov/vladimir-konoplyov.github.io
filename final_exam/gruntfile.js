module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['styles/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

};