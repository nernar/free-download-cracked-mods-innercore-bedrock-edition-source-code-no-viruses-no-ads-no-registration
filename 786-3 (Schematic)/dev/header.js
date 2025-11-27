let files = FileTools.ReadJSON(__dir__+"structure_load.json");
let pool = new StructurePool(__name__);
for(let i in files){
	let json = files[i];
	pool.load(__dir__+"structure/"+json.path, json.name, json.type);
}