const { src, dest, watch, series } = require('gulp');

// CSS y SASS, Js
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Imagenes
const avif = require('gulp-avif');

function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg,PNG}')
        .pipe( avif( opciones ) )
        .pipe( dest('build/img'))
}

//Css
function css( done ) {
    src('src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/css') )

    done();
}

function dev() {
    watch( 'src/scss/**/*.scss', css );
    //watch( 'src/img/**/*', imagenes );
}

//Js
function scripts(){
    return src('js/*.js')  // Ruta de tus archivos JavaScript fuente
    .pipe(concat('all-scripts.min.js'))  // Concatenar todos los archivos en uno solo
    .pipe(uglify())  // Minificar el archivo resultante
    .pipe(dest('build/js'));  // Directorio de destino
}

//Build
function build(done) {
    // Ejecutar las tareas de construcción en serie
    series(versionAvif, scripts, css)(done);
}


exports.css = css;
exports.dev = dev;
exports.scripts = scripts;
exports.build = build; 

exports.versionAvif = versionAvif;
exports.default = series(build, dev);
