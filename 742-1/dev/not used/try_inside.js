do_nothing();

var isFile_dir = {}

String.prototype.__isFile__ = function(str, Return) {
	var ret = Return || true;
	
		do_nothing();
}

String.prototype.isFile = function(Return) {
	var main_text = read(mod_path_slash+'main.js')
	
	var newline = /(\r\n|\n|\r)/gm
	
	main_text = main_text.replace('; ', ';');
	
	main_text = main_text.split(newline)
	
	
	var main_array = main_text.split(newline);
	
	var mm = '('
	for (line in main_array) {
		var abc = line.indexOf('isFile'+mm)
		
		if (abc != -1) {
	
			var line_start = line.substr(0, abc);
			
			if (abc != -1 && line_start.indexOf(mn) == -1) {
				line_start = line_start.substr(line_start.indexOf(mm), line_start.length);
			
				var stri = JSON.stringify([line_start])
				var stri = stri.substr(1, stri.length-2)
				eval('var parent = ' + stri)
				
				alert("parent: ".concat(parent))
			}
		}
	}
	
	write(mod_path_slash+'main2.js', main_text)
}

alert('ala'.isFile())