var dest = 'root';
var watch = 'src';

var settings = {
	dest: {
		name: dest,
		html: {dir: dest + '/'},
		// css: {dir: dest + '/css/'},
		img: {dir: dest + '/images/'},
		font: {dir: dest + '/font/'},
		js: {dir: dest + '/js/'}
	},
	watch: {
		name: watch,
		html: {dir: watch + '/'},
		css: {dir: watch + '/js/'},
		img: {dir: watch + '/images/'},
		js: {dir: watch + '/js/'},
		font: {dir: watch + '/font/'},
		vue: {dir: watch + '/js/'}
	}
};

// settings.dest.css.files = settings.dest.css.dir + '**/*.css';
settings.dest.js.files = settings.dest.js.dir + '**/*.js';

settings.watch.html.files = settings.watch.html.dir + '**/*.html';
settings.watch.css.files = settings.watch.css.dir + '**/*.css';
settings.watch.js.files =  settings.watch.js.dir + '**/*.js';
settings.watch.vue.files =  settings.watch.vue.dir + '**/*.vue';
settings.watch.img.files =  settings.watch.img.dir + '**/**';
settings.watch.font.files =  settings.watch.font.dir + '**/**';

module.exports = settings;
