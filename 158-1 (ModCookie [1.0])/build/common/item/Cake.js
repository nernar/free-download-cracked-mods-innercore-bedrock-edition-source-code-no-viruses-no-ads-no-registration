Translation.addTranslation("Cookie Cake", {ru: "Печенюшный торт"});
IDRegistry.genBlockID("cookie_cake_b");
Block.createBlock("cookie_cake_b", [
	{name: "Cookie Cake", texture: [
["cookie_cake", 1], ["cookie_cake", 0],
["cookie_cake", 2], ["cookie_cake", 2],
["cookie_cake", 2], ["cookie_cake", 2]
], inCreative: false}
]);
Block.setBlockShape(BlockID.cookie_cake_b, {x: 1/16, y: 0, z: 1/16}, {x: 15/16, y: 8/16, z: 15/16});
IDRegistry.genItemID("cookie_cake");
Item.createFoodItem("cookie_cake", "Cookie Cake",{
	name:"cookie_cake_item",meta:0
	},{
	stack: 16,
	food: 12,
});
Block.registerDropFunction("cookie_cake_b", function(){
	return [[ItemID.cookie_cake, 1, 0]]
});
ToolAPI.registerBlockMaterial(BlockID.cookie_cake_b, "plant");
Callback.addCallback("ItemUse",function(crd,item){
	hk=crd.relative;
	if(item.id==ItemID.cookie_cake&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.cookie_cake_b,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Recipes.addShaped({id: ItemID.cookie_cake, count:1, data: 0}, [
	"aaa",
	"bcb",
	"ddd"
	], ['a', ItemID.cookie_rye,0,'b',353,0,'c',344,-1,'d',325,1]);
