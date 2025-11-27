var try_stringify = function(obj) {
	return null;
}

JSON.stringify  = function(dict) {
	if (!dict) return undefined;
	
	if (isArray(dict)) return old_old_stringify(dict) || '[]';
	
	var new_dict = {}
	
	Object.keys(dict).forEach( function(key) {
		new_dict[key] = dict[key]
	})
	
	var key = null;
	
	var to_return = null;
	
	try {
		to_return = old_stringify(new_dict)
	} catch (e) {
		// print(e)
		
		if (Object.keys(new_dict).length == 0) {
			to_return = old_old_stringify(new_dict) || '{}'
		} else {
			var string = ''; Object.keys(new_dict).forEach( function(key) {
				var value = null; success = true;
				try {
				 value = new_dict[key];
				} catch (e) {
					success = false;
				}
				
				if (success && value != null) try {
					var comma = ',\n';
					
					if (Object.keys(new_dict) == Object.keys(new_dict)[Object.keys(new_dict).length - 1]) {
						comma = ''
					}
					
					if (typeof value == 'string') {
						value = "'"+old_value.replace("'", "\\'")+"'"
					} else if (typeof value == 'object') {
						value = old_old_stringify(value)
					}
					
					string = '\t' + string + key + ': '.concat(value) + comma;
				} catch (e) {}
			})
			
			string = '{' + string + '}'; to_return = string;
		}
	}
	
	return to_return
}

var try_stringify = function(obj) {
	to_return = null;
	
	try {
		to_return = old_stringify(obj)
	} catch (e) {
		to_return = old_old_stringify(obj)
	}
	
	return to_return;
}

/* print(JSON.stringify({null: null})) */