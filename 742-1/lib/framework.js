LIBRARY({
  name: "framework",
  version: 2,
  shared: false,
  api: "CoreEngine"
});
var MOD_PREFIX = "mod_";

var hexport = EXPORT;

var halert = alert;

var error = [null, false];

var framework;
(function (framework) {
  var success = true

  try {
    halert('EXPORT: '.concat(hexport))
  } catch (e) {
    success = false
    error = [e, true]
  }

  var lek = {}
  
  if (true) {
    lek.export = null

    if (success == true) {
      lek['export'] = hexport
    } else if (success == false) {
      delete lek.export;

      lek = {
        'error': error
      }
    }
  }
  
  var test = '1';
  
  framework.test = test
  framework.lek = lek

}
)(framework || (framework = {}));

EXPORT("framework", framework);