module.exports = function(grunt) {
    var pkg = grunt.file.readJSON(require('os').tmpdir() + '/grunt.json');

    grunt.initConfig({
        copy: pkg.copy,
        concat: pkg.concat,
        uglify: pkg.uglify,
        css_url_replace: pkg.css_url_replace,
        cssmin: pkg.cssmin,
        clean: pkg.clean
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css-url-replace');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask(
        'build',
        ['copy', 'uglify', 'concat', 'css_url_replace', 'cssmin', 'clean']
    );
};