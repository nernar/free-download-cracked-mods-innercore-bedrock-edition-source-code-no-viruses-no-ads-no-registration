let skip = false;

function error(message, block){
	skip = true;
	try{
		Dialog.openFormattedDialog(message, "ErrorShow");
	}catch(e){}
	skip = false;
	while(!!block){}
}

HookManager.registerListener("Logger::error", function(ctr, self, name){
	if(skip) return;
	error(name);
});

let FileTools = com.zhekasmirnov.innercore.utils.FileTools;
let FileUtils = com.zhekasmirnov.horizon.util.FileUtils;
let File = java.io.File;
let Dialog = com.zhekasmirnov.innercore.api.log.DialogHelper;

try{
	let log = String(FileUtils.readFileText(new File(
		FileTools.DIR_HORIZON + "logs/log.txt"
	)));
	
	let there_error = false;
	let lines = log.split("\n");
	for(let i in lines)
		if(lines[i].includes("[E/")){
			there_error = true;
			break;
		}
	there_error && error(log, true);
}catch(e){
	error("Error for get log "+e);
}
