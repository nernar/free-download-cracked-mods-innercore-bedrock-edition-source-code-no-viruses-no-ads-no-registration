const dir = FileTools.root + "games/horizon/minecraftpe/"
const pack_id = "85b4ee6e-c263-4c5c-8399-1b4baf4a10fe"
const main_pack = {"pack_id": pack_id, "version": [1, 0, 0]}
const setup_message = "[BetterEffectBar] Setup completed. Please reboot."

if(FileTools.isExists(file = (dir + "global_resource_packs.json"))){
	global_packs = FileTools.ReadJSON(file)
	if(global_packs.filter(function(x){return x.pack_id == pack_id}).length <= 0){
		global_packs.unshift(main_pack)
		FileTools.WriteJSON(file, global_packs)
		alert(setup_message)
	}
}
else{
	FileTools.WriteJSON(file, [main_pack])
	alert(setup_message)
}