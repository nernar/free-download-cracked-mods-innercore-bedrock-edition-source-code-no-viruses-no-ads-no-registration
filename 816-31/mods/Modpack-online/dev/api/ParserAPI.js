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

function Token(){
	this.parse = function(){}
}

function ParserAPI(){
	let tokens = [];
	
	this.addToken = function(token){
		tokens.push(token);
		return this;
	}
	
	function parseSymbol(symbol, globalObj, obj, s, symbols){
		let cont = false;
		for(let i in tokens){
			let result = tokens[i].parse(symbol, this, s, symbols, globalObj, obj);
			if(result == "continue_parse"){
				 cont = true;
				 continue;
			}
			if(result)
				return result;
		}
		if(cont) return "continue_parse";
	}
	
	let def_global_run = {};
	let def_global_parse = {};
	
	this.setDefaultGlobalRun = function(global){
		def_global_run = global;
		return this;
	}
	
	this.setDefaultGlobalParse = function(global){
		def_global_parse = global;
		return this;
	}
	
	this.parse = function(file, globalObj){
		file = comment(file);
		try{
			if(!file) return "Error 0";
			globalObj = globalObj || {};
			try{
				for(let key in def_global_parse)
					if(globalObj[key] === undefined)
						globalObj[key] = def_global_run[key];
			}catch(e){
				return [["Error 7"], []];
			}
			let lines = file.split("\n");
			let runs = [];
			for(let i in lines){
				let symbols = lines[i].split("");
				if(symbols.length < 1) continue;
				let obj = {};
				for(let a = 0;a < symbols.length;a++){
					let result = parseSymbol(symbols[a], globalObj, obj, a, symbols);
					if(result){
						if(typeof result == "string"){
							if(result == "continue") continue;
						}
						if(result != "continue_parse")
							runs.push(result);
					}else
						runs.push("Error 1 \""+symbols[a]+"\"");
				}
			}
			return runs;
		}catch(e){
			return "Error 5 parse" + String(e);
		}
	}
	
	this.run = function(runs, global){
		if(typeof runs == "string") return [["Error 2", runs], []];
		global = global || {};
		try{
			for(let key in def_global_run)
				if(global[key] === undefined)
					global[key] = def_global_run[key];
		}catch(e){
			return [["Error 6"], []];
		}
		try{
			let errors = [];
			for(let i in runs){
				let run = runs[i];
				if(typeof run == "string"){
					errors.push(run);
					continue;
				}
				try{
					run.run && run.run(runs, i, global, run);
					for(let i in tokens){
						let token = tokens[i];
						if(token.type == run.type){
							token.run(runs, i, global, run);
							break;
						}
					}
				}catch(e){
					errors.push("Error 3 run" + String(e));
					break;
				}
			}
			return [errors, runs];
		}catch(e){
			return [["Error 4 run" + String(e)], runs];
		}
	}
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let EmptyToken = {
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(symbol == " " && !lineObj.string) return "continue";
	}
};

function isNum(a){
	return numbers.indexOf(a) != -1;
}

let NumberToken = {
	type: "number",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(lineObj.string) return;
		if(isNum(symbol) && isNum(symbols[i+1])){
			lineObj.number = (lineObj.number||"") + symbol;
			return "continue";
		}else if(isNum(symbol)){
			let num = (lineObj.number||"") + symbol;
			lineObj.number = undefined;
			return {
				type: "number",
				number: num
			};
		}
	}
};
let StringToken = {
	type: "string",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(lineObj.string){
			lineObj.str = (lineObj.str||"") + symbol;
			lineObj.endString = true;
			return "continue_parse";
		}else if(!lineObj.string && lineObj.endString){
			if(symbol != ">") lineObj.str = (lineObj.str||"") + symbol;
			let str = (lineObj.str||"");
			lineObj.str = undefined;
			lineObj.endString = undefined;
			if(lineObj.saveStringToken || lineObj.saveStringToken === undefined)
				return {
					type: "string",
					string: str
				};
			else
				lineObj.saveStringToken === undefined;
			return "continue_parse";
		}
	},
	run(runs, i, global, run){
		
	}
};

let funcs = {};

function addFunctionDs(name, func){
	funcs[name] = func;
}

function ArgsAPI(args){
	this.getArgument = function(i){
		return args[args.length-i];
	}
	this.size = function(){
		return args.length;
	}
	this.print = function(){
		alert(JSON.stringify(args));
	}
}

let FunctionToken = {
	type: "function",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(symbol == "<"){
			lineObj.saveStringToken = false;
			lineObj.string = true;
			return "continue";
		}else if(symbol == ">" || symbols.length - 1 == i){
			lineObj.string = false;
			if(symbol == ">" && symbols.length - 1 == i)
				(lineObj.args||[]).unshift(lineObj.str);
			if(symbols.length - 1 == i)
				return {
					type: "function",
					args: lineObj.args||[],
					value: (lineObj.str || "") + symbol,
				};
			else{
				lineObj.args = lineObj.args || [];
				lineObj.args.unshift(lineObj.str);
			}
		}else if(symbol == ":"){
			lineObj.string = true;
			lineObj.saveStringToken = false;
			lineObj.valueStr = true;
			return "continue";
		}else if(symbol == "," && !lineObj.valueStr){
			lineObj.args = lineObj.args || [];
			lineObj.args.unshift(lineObj.str);
			lineObj.str = "";
			return "continue";
		}
	},
	run(runs, i, global, run){
		let args = new ArgsAPI(run.args);
		let name = args.getArgument(1);
		let handler = funcs[name];
		if(handler) handler(args, i, global, run);
	}
};

function translate(global, key){
	return global.translations.translate(key);
}

addFunctionDs("text", function(args, i, global, run){
	if(args.size() >= 2){
		let lang = args.getArgument(2);
		if(lang == Translation.getLanguage())
			global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 15));
	}else 
		global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 15));
});

addFunctionDs("title", function(args, i, global, run){
	if(args.size() >= 2){
		let lang = args.getArgument(2);
		if(lang == Translation.getLanguage())
			global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 20));
	}else 
		global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 20));
});

addFunctionDs("background", function(args, i, global, run){
	let obj = {};
	for(let i = 2;i <= args.size();i++){
		let value = args.getArgument(i).split("=");
		obj[value[0]] = value[1];
	}
	if(obj.canExit) global.ui.setCanExit(obj.canExit=="true")
});

addFunctionDs("print", function(args, i, global, run){
	if(args.size() >= 2){
		let lang = args.getArgument(2);
		if(lang == Translation.getLanguage())
			alert(translate(global, run.value||""));
	}else 
		alert(translate(global, run.value||""));
});

addFunctionDs("translation", function(args, i, global, run){
	global.translations.add(args.getArgument(3), args.getArgument(2), run.value||"");
});

addFunctionDs("setdefaultlang", function(args, i, global, run){
	global.translations.setDefaultLang(args.getArgument(2));
});

addFunctionDs("button", function(args, i, global, run){
	let code = run.value||"";
	if(args.size() >= 3)
		code = global.file_system.getFile(args.getArgument(3));
	global.ui.addElement(new Setting.SettingButtonTextElement(translate(global, args.getArgument(2)), "NativeButton").setClick(function(){
		global.initization.load(code);
	}));
});

let DefaultParserDs1 = new ParserAPI()
	.addToken(FunctionToken)
	.addToken(StringToken)
	.addToken(EmptyToken)
	.setDefaultGlobalRun({ds: "ds 2-b", ds_code_version: 2});