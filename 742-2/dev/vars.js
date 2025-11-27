var dont_include = "vars|__variable_name__|dont_include|___|____key____|this_clone"

var vars = {}; vars = this

for (__variable_name__ in vars) {
  if (dont_include.indexOf(__variable_name__) != -1 || '|'.indexOf(__variable_name__) != -1) {
    delete vars[__variable_name__]
  } else {
    // pass
	}
}

vars = JSON.stringify(vars)

var both = write(mod_path_slash+'vars.txt', vars);
var success = both[0];
/*
if (success==true) {
	print('text successfully written to the file')
} else {
	print('some error occurred while trying to write to the file')
	print('both[1]: '.concat(both[1]));
}
*/

// print(this.hasOwnProperty('window'))