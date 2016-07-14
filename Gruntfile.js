module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: {
				src: "build"
			}
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'source/',
						src: ['clever-style-switcher.js'],
						dest: 'build/'
					}
				]
			}
		},

		uglify: {
			build: {
				files: {
					'build/css.min.js': ['source/clever-style-switcher.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['clean', 'copy']);

	grunt.registerTask('default', ['build']);
};