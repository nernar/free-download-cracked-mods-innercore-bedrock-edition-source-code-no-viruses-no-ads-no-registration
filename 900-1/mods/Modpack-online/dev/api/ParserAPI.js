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

let FunctionToken = {
	type: "function",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(symbol == "<"){
			lineObj.saveStringToken = false;
			lineObj.string = true;
			return "continue";
		}else if(symbol == ">" || symbols.length - 1 == i){
			lineObj.string = false;
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
			return "continue";
		}else if(symbol == ","){
			lineObj.args = lineObj.args || [];
			lineObj.args.unshift(lineObj.str);
			lineObj.str = "";
			return "continue";
		}
	},
	run(runs, i, global, run){
		let name = run.args[run.args.length-1];
		if(name){
			if(name == "text")
				global.ui.addElement(new Setting.SettingTextElement(run.value||"", 15));
			else if(name == "title")
				global.ui.addElement(new Setting.SettingTextElement(run.value||"", 15));
		}
	}
};

let DefaultParserDs1 = new ParserAPI()
	.addToken(FunctionToken)
	.addToken(StringToken)
	.addToken(EmptyToken)
	.setDefaultGlobalRun({ds: "ds 1-b", ds_code_version: 1});