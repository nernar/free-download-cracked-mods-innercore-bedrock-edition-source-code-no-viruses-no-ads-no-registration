var dont_include = "vars|__variable_name__|dont_include|___|____key____|this_clone"

var vars = {};

var this_clone = Object(this)

for (__variable_name__ in this_clone) {
  if (dont_include.indexOf(__variable_name__) != -1 || '|'.indexOf(__variable_name__) != -1) {} else {
    if (this_clone[__variable_name__] == this_clone) {} else {
      vars[__variable_name__] = this_clone[__variable_name__]
    }
	}
}

delete this.this_clone;

var old_vars = vars;

try {
  vars = old_stringify(vars)
} catch (e) {
  print('old_stringify error:', e)
  vars = JSON.stringify(vars)
}

if (vars.indexOf('TYPE_') != -1) {
  vars = old_vars;
}

/*
          if (old_stringify(Object.keys(___.value)).indexOf("TYPE_") != -1) {
            for (key in Object.keys(___.value)) {
              if (key.indexOf('TYPE_') == 0) {
                var getValue; ___.getValue = getValue; delete this_clone.getValue;

                eval('___["getValue"] = function() {return ___.value["'+key.replace('"', '\\"')+'"]};');

                if (___.value.hasOwnProperty(___.getValue())) {
                  objectToString.print('lóóf:', ___.value[___.getValue()])
                }
              }
            }
          }
          
*/

delete this.vars; delete this.old_vars;