require(["config/config"], function() {
	require(["binder", 'sammy', "globals"], function(loader, Sammy) {
		var navigationHandler = function() {
			Sammy(function() {
				//Catch all possible patterns of hash.
				this.get(/\#(.*)/, function() {
					var allParams = this.params.splat[0].split("/");
					var url = allParams[0].toLowerCase();
					
					var pathSplit = this.path.split("/");
					if(pathSplit.length > 2) {
						g_appname = "/" + this.path.split("/")[1] + "/";
					} else {
						g_appname = "";
					}
					
				});

				//If no #route is given then route to main page
				this.get("", function(url) {
					if (g_baseviewmodel) g_baseviewmodel.showLandingPage();
				});
			}).run();
		};

		loader.loadBaseView(false, navigationHandler);
	});
});
