var grunt = require('./node_modules/grunt/lib/grunt'),
    Uglify;

Uglify = function(sourceFiles, outputFile, isCss, staticRoot) {
    this.sourceFiles = sourceFiles;
    this.outputFile = outputFile;
    this.isCss = isCss;
    this.staticRoot = staticRoot;
};

Uglify.prototype.run = function() {

};

module.exports = Uglify;