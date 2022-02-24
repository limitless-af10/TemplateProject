define(['binder', 'knockout', 'jquery'], function(_binder, ko, $) {
  var binder = _binder;

  function BaseVM() {
    var self = this;

    /*ko.validation.init(
      {
        errorElementClass: "has-error",
        errorMessageClass: "help-block",
        decorateInputElement: true
      },
      true
    );*/

    self.msg = ko.observable();
    self.footerClass = ko.observable("alert alert-info");

    self.onLoad = function() {};

    self.showLandingPage = function() {
			binder.loadView("FormPage", "FormPage_viewmodel", "FormCreationDiv");
		}

    self.setFootNote = function(type, msg, timeout) {
      self.msg(msg);
      switch (type) {
        case "error":
          self.footerClass(
            "alert alert-danger col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2"
          );
          break;
        case "success":
          self.footerClass(
            "alert alert-success col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2"
          );
          break;
        case "warning":
          self.footerClass(
            "alert alert-warning col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2"
          );
          break;
        default:
          self.footerClass(
            "alert alert-info col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2"
          );
      }

      $("#index-errorDiv").fadeIn();

      if (timeout)
        setTimeout(function() {
          $("#index-errorDiv").fadeOut();
        }, timeout);
    };

    self.hideMessage = function() {
      $("#index-errorDiv").slideUp("slow");
    };
  }

  return {
    getInstance: function() {
      return new BaseVM();
    }
  };
});
