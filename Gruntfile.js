module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');
    var cfg = {
        src:'www',
        serverHost:'localhost',
        serverPort:9000,
        livereload:35729,
        lrSnippet:require('connect-livereload')({ port: this.livereload }),
        lrMiddleware:function(connect, options) {
            console.log(connect.static);
            return [
            cfg.lrSnippet,
            connect.static(options.base[0]+'/www'),
            connect.directory(options.base[0]+'/www')
            ];
        }
    };

    grunt.initConfig({
        pkg:pkg,
        cfg:cfg,
        uglify:{
            options:{
                striBanners:true,
                banner:'/*! '+pkg.name+'-'+pkg.version+'.js <%=grunt.template.today("yyyy-mm-dd")%> */\n',
                footer:'angular.bootstrap(document, ["app"]);'
            },
            build:{
                src:[
                cfg.src+'/bower_components/jquery/dist/jquery.min.js',
                cfg.src+'/bower_components/ionic/js/ionic.bundle.min.js',
                cfg.src+'/bower_components/oclazyload/dist/ocLazyLoad.min.js',
                cfg.src+'/bower_components/ngCordova/ng-cordova.min.js',
                cfg.src+'/modules/base/utils/security.js',
                cfg.src+'/modules/base/utils/format.js',
                cfg.src+'/modules/base/utils/cache.js',
                cfg.src+'/modules/base/utils/http.js',
                cfg.src+'/modules/base/utils/service.js',
                cfg.src+'/modules/base/utils/interceptor.js',
                cfg.src+'/modules/base/utils/utils.js',
                cfg.src+'/modules/base/app.js',
                cfg.src+'/modules/sample/sampleModule.js',
                cfg.src+'/modules/sample/service/sampleService.js'
                ],
                dest:cfg.src+'/'+pkg.name+'-'+pkg.version+'.min.js'
            },
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'src/app/lxtClient-1.0.0.min.css': [
                        cfg.src+"/bower_components/ionic/css/ionic.min.css",
                        cfg.src+"/bower_components/fontawesome/css/font-awesome.min.css",
                        cfg.src+"/styles/main.css"
                    ]
                }
            }
        },
        connect:{
            options:{
                port:cfg.serverPort,
                hostname:'0.0.0.0',
                base:'.'
            },
            livereload: {
                options: {
                    middleware:cfg.lrMiddleware
                }
            }
        },
        open:{
            server:{
                url:'http://localhost:'+cfg.serverPort
            }
        },
        csslint:{
            strict: {
                options: {
                    import: 2
                },
                src: [cfg.src+'/modules/**/*.css']
            },
            options:{
                csslintrc:'.csslintrc'
            }
        },
        watch:{
            build:{
                files:[cfg.src+'/modules/**/*.js',cfg.src+'/modules/**/*.css'],
                // tasks:['jshint','uglify','csslint'],
                options:{livereload: cfg.livereload}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('server', ['connect','open','watch']);
    grunt.registerTask('build', ['uglify','cssmin']);
};