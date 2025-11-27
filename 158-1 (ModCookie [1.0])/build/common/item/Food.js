Translation.addTranslation("Cookie Bread", {ru: "Печенюшный хлеб"});
IDRegistry.genItemID("cookie_bread");
Item.createFoodItem("cookie_bread", "Cookie Bread",{
	name:"cookie_bread",meta:0
	},{
	stack: 16,
	food: 12,
});
Recipes.addShaped({id: ItemID.cookie_bread, count:1, data: 0}, [
	"aaa",
	], ['a', ItemID.cookie_rye,0]);