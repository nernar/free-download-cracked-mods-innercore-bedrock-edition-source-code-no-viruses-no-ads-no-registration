function baseSearch(editText, main, setting, height, func){
	let keyword = String(editText.getText());
	let _a = {};
	_a.list = 0;
	
	_a.items = func(_a, keyword);
	
	text = _a.list+"/"+Jei.getMaxList(setting, _a, height);
	let content = main.getContent();
	content.elements.searchText.text = keyword;
	content.elements.text.text = text;
	content.elements.text.x = 500-getTextWidth(text, 23*5)/2;
	Jei.setupSlots(main, setting, height, _a);
	main.forceRefresh();
	return _a;
};
const SEARCH = {
	lite(editText, main, setting, height){
		return baseSearch(editText, main, setting, height, function(self, keyword){
			return Jei.items.filter(function (item) {
				return Translation.translate(Item.getName(item.id, item.data)).split(keyword).length > 1;
			});
		});
	},
	normal(editText, main, setting, height){
		return baseSearch(editText, main, setting, height, function(self, keyword){
			let names = keyword.split("@");
			return keyword[0] == "@" && ItemInformation != null ? Jei.items.filter(function (item) {
				let mod = (item.type == "item" ? ItemInformation.items[getId(ItemID, item.id)] : ItemInformation.blocks[getId(BlockID , item.id)]) || "minecraft";
				return mod.toLowerCase().split(names[1]).length > 1;
			}) : Jei.items.filter(function (item) {
				return Translation.translate(Item.getName(item.id, item.data)).split(keyword).length > 1;
			});
		});
	}, 
	reliable(editText, main, setting, height){
		return baseSearch(editText, main, setting, height, function(self, keyword){
			keyword = keyword.toLowerCase();
			if(keyword[0] == "@" && ItemInformation != null){
				let name = keyword.split(" ");
				let result = "";
				for(let i = 1;i < name.length;i++){
					result += name[i];
					if(i != name.length-1) result += " ";
				}
				let names = keyword.split("@");
				return Jei.items.filter(function (item) {
					let mod = (item.type == "item" ? ItemInformation.items[getId(ItemID, item.id)] : ItemInformation.blocks[getId(BlockID, item.id)]) || "minecraft";
					mod = mod.replace(" ", "");
					if(result != ""){
						names[1] = names[1].split(" ")[0];
						return mod.toLowerCase().split(names[1]).length > 1 && Translation.translate(Item.getName(item.id, item.data)).toLowerCase().split(result).length > 1;
					}
					return mod.toLowerCase().split(names[1]).length > 1;
				});
			}
			return Jei.items.filter(function (item) {
				return Translation.translate(Item.getName(item.id, item.data)).toLowerCase().split(keyword).length > 1;
			});
		});
	}
};