/**
 * Created by Richard Cheung on 5/14/2017.
 */

module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //task configs
        clean: {
            less: ['less', !'/less/custom'],
            dist: 'dist',
            // docs: 'docs/dist'
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            files: [
                'Gruntfile.js',
                'js/*.js',
                'test/**/*.js',
            ],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'bootstrap.css.map',
                    sourceMapFilename: 'css/bootstrap.css.map'
                },
                src: 'less/bootstrap.less',
                dest: 'css/bootstrap.css'
            },
            compileTheme: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'bootstrap-theme.css.map',
                    sourceMapFilename: 'css/bootstrap-theme.css.map'
                },
                src: 'less/theme.less',
                dest: 'css/bootstrap-theme.css'
            },
            compileCustom: {
                src: 'less/custom/custom.less',
                dest: 'css/<%= pkg.name %>.css'
            },
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        exec: {
            npmUpdate: {
                command: 'npm update'
            }
        },
    });
    //Load tasks
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    //register tasks
    grunt.registerTask('less-compile', ['less']);
    grunt.registerTask('init-bs', ['clean', 'bower_concat', 'copy:less', 'copy:fonts']);
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('dist', ['clean:dist', 'copy', 'less', 'jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default', []);

};