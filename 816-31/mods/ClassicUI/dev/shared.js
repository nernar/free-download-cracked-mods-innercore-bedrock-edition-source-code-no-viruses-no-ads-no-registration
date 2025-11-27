function comment(input){
	let RE_BLOCKS = new RegExp([
		/\/(\*)[^*]*\*+(?:[^*\/][^*]*\*+)*\//.source,
		/\/(\/)[^\n]*$/.source,
		 /"(?:[^"\\]*|\\[\S\s])*"|'(?:[^'\\]*|\\[\S\s])*'|`(?:[^`\\]*|\\[\S\s])*`/.source,
		 /(?:[$\w\)\]]|\+\+|--)\s*\/(?![*\/])/.source,
		 /\/(?=[^*\/])[^[/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[/\\]*)*?\/[gim]*/.source
	].join('|'), 'gm');
	return a = input.replace(RE_BLOCKS, function(match, mlc, slc){
		return mlc ? ' ' : slc ? '' : match;
	});
}

function checkReplacedArray(arr, file, path){
	for(let key in arr){
		let value = arr[key];
		if(Array.isArray(value))
			checkReplacedArray(value, file, path);
		else if(copys.indexOf(typeof value) != -1)
			if(typeof value == "string" && value.split("${").length > 1){
				arr[key] = comment(FileTools.ReadText(path+file.src[value.replace("${", "").replace("}", "")]));
			}
		else
			checkReplaced(value, file, path);
	}
}
function checkReplaced(obj, file, path){
	for(let key in obj){
		let value = obj[key];
		if(Array.isArray(value))
			checkReplacedArray(value, file, path);
		else if(copys.indexOf(typeof value) != -1){
			if(typeof value == "string" && value.split("${").length > 1){
				obj[key] = comment(FileTools.ReadText(path+file.src[value.replace("${", "").replace("}", "")]));
			}
		}else
			checkReplaced(value, file, path);
	}
}

(function(){
	try{
		let files = FileTools.GetListOfFiles(eval(CONFIG_UI.library||"__dir__+'themesAndConfigs/'"));
		for(let i in files){
			let file_name = String(files[i].getName());
			let path = String(files[i].getAbsolutePath());
			let path_directory = String(files[i].getParent());
			let file = JSON.parse(comment(FileTools.ReadText(path)));
			if(file_name.split(".dev.json").length > 1){
				checkReplaced(file, file, path_directory+"/");
				if(file.save){
					let beautify = file.beautify_save;
					let save = file.save;
					delete file.save;
					delete file.src;
					delete file.beautify_save;
					FileTools.WriteJSON(path_directory+"/"+save, file, beautify);
				}
			}
			file.themes = file.themes || {};
			for(let key in file.themes){
				registerTheme(key, file.themes[key]);
				Logger.Log("Register theme "+key, "ClassicUI");
			}
			
			file.configs = file.configs || {};
			for(let key in file.configs){
				registerUiConfig(key, file.themes[key]);
				Logger.Log("Register config "+key, "ClassicUI");
			}
		}
	}catch(e){Logger.Log(e, "ClassicUI");}
	for(let key in CONFIG_UI.themes){
		let theme = CONFIG_UI.themes[key];
		if(theme["prototype"] && theme["prototype"].init){
			let init = theme["prototype"].init;
			let text = "";
			if(typeof init == "string")
				text = init;
			else 
				for(let i in init)
					text += init[i]+"\n";
			try{
				eval(text);
				Logger.Log("Loaded "+key, "ClassicUI");
			}catch(e){
				Logger.Log("Failed loaded "+key+"\n"+e, "ClassicUI");
			}
		}
	}
})();

ModAPI.registerAPI("ClassicUI", {
	getWindow: getWindow,
	addVanillaSlots: addVanillaSlots,
	getConfig: getConfig,
	getTheme: getTheme,
	registerUiConfig: registerUiConfig,
	registerTheme: registerTheme,
	setBlockFunctions: setBlockFunctions,
	getBlockFunctions: getBlockFunctions,
	buildMain: buildMain,
	getSizeClassicUi: getSizeClassicUi,
	setConfigDefaultValue: setConfigDefaultValue,
	addedConfig: addedConfig,
	registerHandler: registerHandler,
	registerAllHandler: registerAllHandler,
	getThemes: getThemes,
	canThemeById: canThemeById,
	canTheme: canTheme,
	getThemeById: getThemeById,
	clone: copy,
	version: version,
	requireGlobal(cmd){
		return eval(cmd);
	}
});