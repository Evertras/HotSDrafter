module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: {
					'pub/js/hotsdrafter.js': ['src/**/*.js']
				}
			}
		},
		jshint: {
			options: {
				jshintrc: true
				},
			all: ['src/**/*.js']
		},
		concat: {
			options: {
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'concat.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['jshint', 'concat:dist', 'uglify:build']);
};
