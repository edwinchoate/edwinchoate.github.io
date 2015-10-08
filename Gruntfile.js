module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less'); 
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        // compiles less source files into vanilla css (great times)
        less: {
            development: {
                files: {
                    "css/main.css": "css/main.less",
                    "css/offseason.css": "css/offseason.less",
                    "css/navbar.css": "css/navbar.less",
                    "css/carousel.css": "css/carousel.less"
                }
            }
        },
        // watches for all less files in css folder and runs less task
        watch: {
            files: "css/*.less",
            tasks: ["less"]
        }
    });
    
    grunt.registerTask('default', ['watch']);
    
};
