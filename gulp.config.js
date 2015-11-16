module.exports = function() {
	var config = {
		allTs: './app/**/*.ts',
		typings: './typings/**/*.d.ts',
    tsOutputPath: './dist/',
		scss: './app/**/*.scss',
		html: './app/**/*.html'
	};

	return config;
};
