module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({
 
		csscomb: {
            style: {
                expand: true,
                src: ["source/scss/**/*.scss", "!source/scss/bootstrap-4.0.0/**"]
            },
        },

		sass: {
			style: {
               files: {
                
              	"build/css/style.css": ["source/scss/style.scss"]
               }  
			}
		},

		autoprefixer: {
			options: {
				 browsers: ["last 2 versions", "ie 10"]
			},

			style: {
				src: "build/css/style.css"
			}
		},

		cmq: {
            style: {
                files: {
                    "build/css/style.css": ["build/css/style.css"]
                }
            }
        },

        cssmin: {
        	style: {
        		options: {
        			keepSpecialComments: 0,
        			report: "gzip"
        		}, 

        		files: {
        			
        			"build/css/style.min.css": ["build/css/style.css"]
        		}
        	}
        },

        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: ["build/js/*.js", "!build/js/*.min.js"],
                    dest: "build/js",
                    cwd: ".",

                    rename: function(dst, src){
                        return  src.replace('.js', '.min.js'); 
                    }
                }]
            }
        },

        imagemin: {
            images: {
                options: {
                    optimizationLevel: 3
                },

                files: [{
                    expand: true,
                    src: ["biuld/img/**/*.{png,jpg,svg}"]
                }]
            }
        },

        clean: {
            build: ["build"]
        },

        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: "source",
                    src: [
                        "img/**",
                        "js/**",
                        ["*.html"],
                        "fonts/**"
                    ],

                    dest: "build"
                }],

                html: {
                    files: [{
                        expand: true,
                        src: ["*.html"],
                        dest: "build"
                    }]
                },

                js: {
                    files: [{
                        expand: true,
                        src: ["/js/*.js"],
                        dest: "build"
                    }]
                }
            }
        },

        replace: {
            build: {
                options: {
                    patterns: [{
                        match: /(\w+)\.css/g,
                        replacement: "$1.min.css"
                    },{
                        match: /(\w+)\.js/g,
                        replacement: "$1.min.js"
                    }]
                },

                files: [{
                    expand: true,
                    src: "build/*.html" 
                }]
            }
        },

        watch: {

            html: {
                files: ["source/*.html"],
                tasks: ["copy:build:html"]
            },

            style: {
                files: ["source/scss/**/*.scss"],
                tasks: ["sass","autoprefixer","cmq","cssmin"]
            },

            js: {
                files: ["source/js/*.js"],
                tasks: ["copy:build:js","uglify"]
            }
        },

        browserSync: {
            development: {
                bsFiles: {
                    
                    src: [
                        "build/*.html",
                        "build/css/*.css",
                        "build/js/*.js"
                    ]
                },

                options: {
                    server: "./build",
                    watchTask: true
                }
            }
        }
	});

    grunt.registerTask("default", ["browserSync", "watch"]);
	grunt.registerTask("build", [
        "clean",
        "copy",
        "sass",
        "autoprefixer",
        "cmq",
        "cssmin",
        "uglify",
        "imagemin", 
        "replace"
	]);
};