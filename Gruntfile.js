module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      src: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dist',
      },
    },
    clean: {
      dist: {
        src: 'dist',
      },
    },
    imagemin: {
      src: {
        expand: true,
        cwd: 'dist/assets',
        src: '**/*.{png,jpg,gif}',
        dest: 'dist/assets',
      },
    },
    watch: {
      js: {
        options: {
          event: ['changed'],
        },
        files: 'src/**/*.js',
        tasks: 'jshint:js',
      },
    },
    browserSync: {
      src: {
        bsFiles: {
          src: ['src/**/*'],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: 'src',
          },
        },
      },
    },
  });

  grunt.registerTask('dist', ['clean', 'copy']);
  grunt.registerTask('minifica', ['imagemin']);
  grunt.registerTask('server', ['browserSync', 'watch']);
  grunt.registerTask('default', ['dist', 'minifica']);

  // Load Taks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
};
