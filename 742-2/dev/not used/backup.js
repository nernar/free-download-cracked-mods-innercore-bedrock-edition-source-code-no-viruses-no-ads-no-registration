// Functions, isFile

var is_file_return = null;

__isFile__(file, Return) {
	var ret = Return; Return = null;
	var to_return = true
	try {
		read(file)
	} catch (e) {
		alert('error: '.concat(e))
		to_return = false
	}
	if (ret == true) is_file_return = to_return
}

String.prototype.isFile = function(Return) {
	if (!Return) Return = true;
	
	var function_parent = arguments.callee.caller.name;
	
	var result = __isFile__(function_parent, Return)
	
	if (Return == true) return result
}

