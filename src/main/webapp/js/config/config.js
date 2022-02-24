require.config({
	baseUrl: "js",
	paths: {
		views : "../views",
		viewmodels : "../viewmodels",
		binder : "config/binder",
		globals : "config/globals",
		bootstrap :  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",
		select2 : "lib/select2.full",
		'knockout-select2' : 'lib/knockout-select2.min',
		system : 'lib/system',
		sammy : 'lib/sammy',
		
		//Oracle JET v11.0.8
		knockout : 'libs/knockout/knockout-3.5.1',
		jquery : 'libs/jquery/jquery-3.6.0.min',
		'jqueryui-amd' : 'libs/jquery/jqueryui-amd-1.12.1.min',
		text : 'libs/require/text',
		hammerjs : 'libs/hammer/hammer-2.0.8.min',
		signals : 'libs/js-signals/signals.min',
		ojdnd : 'libs/dnd-polyfill/dnd-polyfill-1.0.2.min',
		css : 'libs/require-css/css.min',
		touchr : 'libs/touchr/touchr',
		"ojs":"libs/oj/v11.0.8/min",
  		"ojL10n":"libs/oj/v11.0.8/ojL10n",
  		"ojtranslations":"libs/oj/v11.0.8/resources",
  		"preact":"libs/preact/dist/preact.umd",
		"preact/hooks":"libs/preact/hooks/dist/hooks.umd",
		"preact/debug":"libs/preact/debug/dist/debug.umd",
		"preact/devtools":"libs/preact/devtools/dist/devtools.umd",
		"ojcss":"libs/oj/v11.0.8/debug/ojcss"
	},
	
	// Shim configurations for modules that do not expose AMD
	shim : {
		bootstrap : { deps :['jquery'] },
		system : { deps :['jquery', 'bootstrap'] },
		sammy : { deps :['jquery'] },
		jquery : {
			exports : [ 'jQuery', '$' ]
		}
	},

	// This section configures the i18n plugin. It is merging the Oracle JET
	// built-in translation
	// resources with a custom translation file.
	// Any resource file added, must be placed under a directory named "nls".
	// You can use a path mapping or you can define
	// a path that is relative to the location of this main.js file.
	config : {
		ojL10n : {
			merge : {
			// 'ojtranslations/nls/ojtranslations':
			// 'resources/nls/myTranslations'
			}
		},
		text : {
			// Override for the requirejs text plugin XHR call for loading text
			// resources on CORS configured servers
			// eslint-disable-next-line no-unused-vars
			useXhr : function(url, protocol, hostname, port) {
				// Override function for determining if XHR should be used.
				// url: the URL being requested
				// protocol: protocol of page text.js is running on
				// hostname: hostname of page text.js is running on
				// port: port of page text.js is running on
				// Use protocol, hostname, and port to compare against the url
				// being requested.
				// Return true or false. true means "use xhr", false means
				// "fetch the .js version of this resource".
				return true;
			}
		}
	}
})

/**
 * A top-level require call executed by the Application. Although 'ojcore' and
 * 'knockout' would be loaded in any case (they are specified as dependencies by
 * the modules themselves), we are listing them explicitly to get the references
 * to the 'oj' and 'ko' objects in the callback.
 * 
 * For a listing of which JET component modules are required for each component,
 * see the specific component demo pages in the JET cookbook.
 */
require([ 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton',	'ojs/ojtoolbar', 'ojs/ojmenu', 'config/ko_config', 'system'], // add additional JET component modules as needed
	// eslint-disable-next-line no-unused-vars
	function (oj, ko, $) { // this callback gets executed when all required modules are loaded
	    // add any startup code that you want here
	}
);