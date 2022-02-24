define(['binder','knockout']
	, function (_binder, ko) {
		var binder = _binder;

		function actionVM() {
			var self = this;
			self.summary = ko.observableArray();
			
			document.querySelector('form').addEventListener('submit', (e) => {
  			const formData = new FormData(e.target);
  			// Now you can use formData.get('foo'), for example.
  			// Don't forget e.preventDefault() if you want to stop normal form .submission
  			var obj = {"fname": formData.get("fname"), "lname": formData.get("lname")};
  			console.log(obj);
  			
  			var req = new Object();
				req.changeNotice = System.getParameterByName("changeNotice");
				req.jwt = System.getParameterByName("jwt");
				req.data = obj		
				System.sendHTTPRequestWithJWT(
					"POST",
					"addusers",
					JSON.stringify(req),
					function(response) {
						if (response.success) {
							location.reload();				
						}
					},
					"Processing Request ..."
				);
  			
			});

			self.onLoad = function() {
				var req = new Object();
				req.changeNotice = System.getParameterByName("changeNotice");
				req.jwt = System.getParameterByName("jwt");				
				System.sendHTTPRequestWithJWT(
					"POST",
					"users",
					JSON.stringify(req),
					function(response) {
						if (response.success) {
							
							console.log(response.data[0].firstName);
							var ul = document.getElementById("list");
  							
  							
  							for(i=0;i<response.data.length;i++){
								
								var li = document.createElement("li");
								var user = "First Name: " + response.data[i].firstName + " - " +
											"Last Name: "+ response.data[i].lastName;
								li.appendChild(document.createTextNode(user));
  								ul.appendChild(li);
	
							}
  							
							g_baseviewmodel.setFootNote("success", "Request Processed Successfully!");							
						}
					},
					"Processing Request ..."
				);
			}
			
			
		}

		return {
			getInstance: function () {
				return new actionVM();
			}
		};
	});
