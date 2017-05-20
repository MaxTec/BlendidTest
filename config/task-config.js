const stylus = require('gulp-stylus');
const nib = require('nib');
module.exports = {
    html: true,
    images: true,
    fonts: true,
    static: true,
    svgSprite: true,
    ghPages: true,
    stylesheets: true,

    javascripts: {
        entry: {
            // files paths are relative to
            // javascripts.dest in path-config.json
            app: ["./app.js"]
        },
        provide: {
            $: "jquery",
            jQuery: "jquery"
        }
    },

    browserSync: {
        server: {
            // should match `dest` in
            // path-config.json
            baseDir: 'public'
        }
    },
    stylesheets: {
        alternateTask: function(gulp, PATH_CONFIG, TASK_CONFIG) {
            // Stylus task instead of Sass
            return function() {
                return gulp.src('./src/*.styl')
                    .pipe(stylus({
                        paths: ['node_modules'],
                        import: ['nib', 'rupture/rupture'],
                        use: [nib()],
                        'include css': true
                    }))
                    // .pipe(autoprefixer('last 2 versions'))
                    .pipe(gulp.dest('./dest'))
                    // .pipe(gulp.dest('./dest'))
            }
        }
    },

    production: {
        rev: true
    }
}