# DDP Client

This is a browser-specific port of the DDP client from oortcloud / Tom Coleman:

[https://github.com/oortcloud/node-ddp-client](https://github.com/oortcloud/node-ddp-client)

## Building

The `dist/ddp.min.js` browser-ready library includes all dependencies in `lib` as well as those installed with `npm install` from the package.json.

You should know what's bundled and re-build accordingly to suit your usage.

To build:

*	First `npm install` to get any unincluded dependencies
*	Install webpack globally if you haven't already with `npm install webpack -g`
*	Run webpack from the repo with `webpack` (change any options as needed in `webpack.config.js`)

The built file adds a global `DDP` object (`window.DDP`).

## Usage
  
	var ddp = new DDP({
	
		host: "localhost",
		port: 8000,
		/* optional: */
		auto_reconnect: true,
		auto_reconnect_timer: 500,
		use_ejson: true,           // Use Meteor's EJSON to preserve certain data types.
		use_ssl: false,
		maintain_collections: true // Set to false to maintain your own collections.
	});

	/*
	* Connect to the Meteor Server
	*/
	ddp.connect(function(error) {
		console.log('connected', error);
		
		// play with it here
	});
	
API follows the [oortcloud/node-ddp-client](https://github.com/oortcloud/node-ddp-client) repo.

## Things to do....

*	Source dependencies properly (require from source repos rather than include here)
*	Encourage SSL usage with SRP (& find out how this can be made more secure)