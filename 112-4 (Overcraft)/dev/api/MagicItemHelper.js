var MagicItem = {
	
add: function (r){
	
IDRegistry.genItemID(r.Item);	
Item.createItem(r.Item, r.Name, {name: r.Texture, meta: 0}, {stack: r.Stack});
 }
};