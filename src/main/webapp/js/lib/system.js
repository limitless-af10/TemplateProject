var LOADING_SEM = 0;

/**
 * Set to true for disable logging.
 */
var DISABLE_LOGGING = false;

/**
 * localStorage - stores data with no expiration date
 * sessionStorage - stores data for one session (data is lost when the tab is closed)
 */
var DEFAULT_STORAGE_TYPE = "sessionStorage";

var System = {
	
	uuid : "",
	
	getParameterByName:function(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	},
	
	/**
	 * Sends ajax post request. Blocks UI and shows waiting message if given waitingMessage.
	 * @param url URL
	 * @param param Parameters
	 * @param callback Callback in case of success
	 * @param waitingMessage Waitings message to display
	 * @param divToMask Target div to mask
	 */
	sendPostRequest:function(url, param, callback, waitingMessage, divToMask) {
		var timestamp = new Date().getUTCMilliseconds();
		System.uuid = timestamp;
		
		if(waitingMessage) {
			System.showLoadingScreen(waitingMessage, divToMask);
		}
		$.ajax({
			  type: "POST",
			  url: url,
			  data: param,
			  success: function(responseJson) {
				if(System.uuid == timestamp){
					if(waitingMessage){
						System.hideLoadingScreen(divToMask);
					}
					callback(responseJson);		
				}else{
					if(waitingMessage){
						System.hideLoadingScreen(divToMask);
					}
				}
			  },		 
		}).fail(function(jqXHR, textStatus) {
			console.info(textStatus);
			//IndexPageViewModel.setFooterMessage("error", "<b>Error:</b> Unable to connect to server. Please try again");
			System.hideLoadingScreen(divToMask);
		});
	},
	
	sendHTTPRequestWithJWT: function(method, path, body, callback, waitingMessage, divToMask) {
		if(waitingMessage) {
			System.showLoadingScreen(waitingMessage, divToMask);
		}
		
		$.ajax
		({
		  type: method,
		  url: path,
		  dataType: 'json',
		  contentType: 'application/json',
		  headers: {
		    "Authorization": "Bearer " + System.getParameterByName("jwt")
		  },
		  data: body,
		  success: function(responseJson) {
			if(waitingMessage){
				System.hideLoadingScreen(divToMask);
			}
			
			callback(responseJson);
		  }
		}).fail(function(jqXHR) {
			System.hideLoadingScreen(divToMask);
			g_baseviewmodel.setFootNote("error", "Error: "+jqXHR.responseJSON.error.message);
		});
	},
	
	sendFileDownloadRequestWithJWT: function(urlToSend, waitingMessage, divToMask) {
		if(waitingMessage) {
			System.showLoadingScreen(waitingMessage, divToMask);
		}
		
		var req = new XMLHttpRequest();
		req.open("GET", urlToSend, true);
		req.responseType = "blob";
		req.setRequestHeader("Authorization", "Bearer " + System.getParameterByName("jwt"));
		req.onload = function (event) {
			if(waitingMessage){
				System.hideLoadingScreen(divToMask);
			}
			
			var fileName = null;
			if (req.getResponseHeader("Content-disposition")) {
				var contentDisposition = req.getResponseHeader("Content-disposition");
				fileName = contentDisposition.substring(contentDisposition.indexOf("=") + 1);
			} else {
				var contentType = req.getResponseHeader("content-type");
				fileName = "unnamed." + contentType.substring(contentType.indexOf("/") + 1);
			}
			
			var blob = req.response;
			var link = document.createElement('a');
			link.href = window.URL.createObjectURL(blob);
			link.download = fileName;
			link.click();
		};

		req.send();
	},
	
	/**
	 * Displays modal of waiting message.
	 * @param message Message to show
	 * @param divToMask Div to mask
	 */
	showLoadingScreen:function(message, divToMask) {	
		if(LOADING_SEM == 0) {
			var pleaseWaitDiv = $('#pleaseWaitDialog');
			pleaseWaitDiv.modal();
			$("#pleaseWaitMessage").html(message);
		}
		
		LOADING_SEM++;
	},
	
	/**
	 * Hides modal of waiting message.
	 * @param divToMask Div to unmask
	 */
	hideLoadingScreen: function(divToMask) {	
		if(LOADING_SEM > 0) {
			LOADING_SEM--;	
			if(LOADING_SEM == 0) {
				setTimeout(function() {
					$("#pleaseWaitDialog").modal('hide');
				}, 800);
			}			
		}
	}
};