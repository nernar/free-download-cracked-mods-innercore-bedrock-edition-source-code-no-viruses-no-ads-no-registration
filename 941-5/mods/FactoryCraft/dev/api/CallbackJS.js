let CallbackJS = {
	funcs: {},
	Controller(org, flags){
		let replace = false;
		let get = null;
		let args_func = [];
		
		this.getFlags = function(){
			return flags;
		}
		this.runMethot = function(type){
			this.setGet(org.apply(this, args_func, type));
		}
		
		this.setGet = function(g){
			get = g;
		}
		this.getGet = function(){
			return get;
		}
		
		this.setArguments = function(arr){
			let args = [];
			for(let i = 0;i < arr.length;i++)
				args[i]=arr[i];
			args_func = args;
		}
		this.getArguments = function(){
			return args_func;
		}
		
		this.replace = function(){
			replace = true;
		}
		this.isReplace = function(){
			return replace;
		}
	},
	getRegFunc(id){
		return function(){
			CallbackJS.runMethot(id, arguments);
		};
	},
	reg(func, run, flags){
		flags = flags || [];
		let id = Object.keys(this.funcs).length;
		const org = func;
		let _func = function(){
			let controller = new CallbackJS.Controller(org, flags);
			controller.setArguments(arguments);
			if(flags.indexOf("replace") != -1)
				controller.replace();
			if(flags.indexOf("pre") != -1)
				run(controller);
			if(!controller.isReplace()){
				controller.runMethot();
				if(flags.indexOf("post") != -1)
					run(controller);
			}
			func = _func;
			return controller.getGet();
		}
		
		this.funcs[id] = {
			func: _func,
			flags: flags
		}
		return id;
	},
	runMethot(id, arr){
		this.funcs[id].func.apply(this, arr);
	}
};
