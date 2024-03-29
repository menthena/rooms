module.exports = function() {
	var config = {
		allTs: './client/**/*.ts',
		allTests: './test/**/*.ts',
		typings: './typings/tsd.d.ts',
    tsOutputPath: './dist',
		tsTestOutputPath: './dist',
		scss: './client/**/*.scss',
		html: './client/**/*.html'
	};

	return config;
};
