module.exports = function(grunt) {
    grunt.initConfig({
        bower: {
            target: {
                rjsConfig: 'js/main.js'
            }
        }
        //pkg: grunt.file.readJSON('package.json'),
    });
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.option('force', true);
    grunt.registerTask('default', ['bower']);
};