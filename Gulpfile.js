var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');


gulp.task('webpack', [], function() {
	return gulp.src(path.ALL)
			.pipe(sourcemaps.init())
			.pipe(stream(webpackConfig))
			.pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.DEST_BUILD));
});



gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var devConfig = Object.create(webpackConfig);
	devConfig.devtool = "eval";
	devConfig.debug = true;
	devConfig.entry.unshift('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server');
	devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
	devConfig.module.loaders[0].loaders.unshift('react-hot');
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(devConfig), {
		publicPath: devConfig.output.publicPath,
		hot: true,
		historyApiFallback: true
	}).listen(8080, "localhost", function(err) {
		if (err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});

var path = {
	HTML: 'src/index.html',
	ALL: ['src/**/*.jsx', 'src/**/*.js'],
	MINIFIED_OUT: 'build.min.js',
	DEST_SRC: 'dist/src',
	DEST_BUILD: 'dist/build',
	DEST: 'dist'
};



gulp.task('watch', function() {
	gulp.watch(path.ALL, ['webpack']);
});


gulp.task('default', ['webpack-dev-server', 'watch']);