module.exports = {
    entry: "./build.js",
    output: {
        path: __dirname,
        filename: "dist/ddp.min.js"
    },
	optimize: {
		minimize: true
	}
};