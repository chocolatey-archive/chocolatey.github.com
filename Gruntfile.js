module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      build: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/style.css' : 'assets/sass/style.scss'
        }
      }
    },

    jshint: {
      files: ['assets/js/src/app.js'],
    },

    uglify: {
      build: {
        src: 'assets/js/src/app.js',
        dest: 'assets/js/app.js'
      }
    },

    shell: {
      encoding: {
        command: 'chcp 65001',
        options: {
          async: false
        }
      },

      build: {
        command: 'jekyll build',
        options: {
          async: false
        }
      },

      watch: {
        command: 'jekyll build --watch',
        options: {
          async: false
        }
      },

      server: {
        command: 'nws -d _site/ -p 4000',
        options: {
          async: true
        }
      }
    },

    watch: {
      css: {
        files: 'assets/sass/*.scss',
        tasks: ['sass']
      },
      js: {
        files: 'assets/js/src/*.js',
        tasks: ['uglify']
      }
    }
  });

  // For generating the site
  grunt.registerTask('default', [
    'sass', 'jshint', 'uglify',
    'shell:encoding', 'shell:build'
  ]);

  // For writing code
  grunt.registerTask('dev', [
    'sass', 'jshint', 'uglify', 'watch'
  ]);

  // For writing pages
  grunt.registerTask('serve', [
    'sass', 'jshint', 'uglify',
    'shell:encoding', 'shell:server', 'shell:watch'
  ]);

};
