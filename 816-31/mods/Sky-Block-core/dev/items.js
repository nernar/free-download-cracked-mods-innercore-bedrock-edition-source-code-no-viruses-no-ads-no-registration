IDRegistry.genItemID("quest_book"); 
Item.createItem("quest_book", "The Quest Book", {name: "sb_quest_book", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.quest_book, "sb_quest_book", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
Translation.addTranslation("The Quest Book", {
	ru:"Книга квестов"
});

Recipes.addShaped({id: ItemID.quest_book, count: 1, data: 0}, [
	"a"
],[
	"a", 5, 0
]);

IDRegistry.genItemID("skyblock_icon"); 
Item.createItem("skyblock_icon", "skyblock_icon", {name: "skyblock_icon", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("uncommon_lbag"); 
Item.createItem("uncommon_lbag", "An ordinary pouch", {name: "uncommon_lbag", meta: 0}, {stack: 1});
Translation.addTranslation("An ordinary pouch", {
	ru:"Обычный мешочек"
});

IDRegistry.genItemID("rare_lbag"); 
Item.createItem("rare_lbag", "A small pouch", {name: "rare_lbag", meta: 0}, {stack: 1});
Translation.addTranslation("A small pouch", {
	ru:"Реткий мешочек"
});

IDRegistry.genItemID("legendary_lbag"); 
Item.createItem("legendary_lbag", "The Legendary pouch", {name: "legendary_lbag", meta: 0}, {stack: 1});
Translation.addTranslation("The Legendary pouch", {
	ru:"Легендарный мешочек"
});

IDRegistry.genItemID("avaritia_lbag"); 
Item.createItem("avaritia_lbag", "Infinity Bag", {name: "avaritia_lbag", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.avaritia_lbag, "avaritia_lbag", 5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
Translation.addTranslation("Infinity Bag", {
	ru:"Мешок бесконечности"
});

function Bag(id, lootmin, lootmax){
    this.items = [];
    this.addItem = function(chance, id, count, data, extra){
        count = count || {};
        count.min = count.min || 1;
        count.max = count.max || 1;
        data = data || 0
        extra = extra || null;
        if(id)
        	this.items.push({chance: chance, id: id, data: data, max: count.max, min: count.min, extra: extra});
    }
    this.getItemsRandom = function(){
    	let arr = [];
    	let a = Math.floor(Math.random() * (lootmax - lootmin)) + lootmin;
    	while(a >= 1)
    		for(let i in this.items)
    			if(Math.random() <= _this.items[i].chance){
    				arr.push({
    					id: this.items[i].id,
    					data: this.items[i].data,
    					extra: this.items[i].extra,
    					count: Math.floor(Math.random() * (this.items[i].max - this.items[i].min)) + this.items[i].min
    				});
    				a--;
					}
			return arr;
		}
    let _this = this;
    Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
        if(item.id == id){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
            let arr = _this.getItemsRandom();
            let region = BlockSource.getDefaultForActor(player);    
            for(let i in arr)
            	region.spawnDroppedItem(coords.x, coords.y+1, coords.z, arr[i].id, arr[i].count, arr[i].data, arr[i].extra);
        }
    });
}

let UncommonBag = new Bag(ItemID.uncommon_lbag, 1, 1);

UncommonBag.addItem(.1, VanillaItemID.bone_meal, {min: 4, max: 6});
UncommonBag.addItem(.05, VanillaItemID.bread, {min: 2, max: 4});
UncommonBag.addItem(.06, VanillaItemID.apple, {min: 2, max: 5});
UncommonBag.addItem(.1, 3, {min: 1, max: 4});
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 0);
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 1);
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 2);
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 3);
UncommonBag.addItem(.5, 263, {min: 2, max: 4}, 0);
UncommonBag.addItem(.1, 265, {min: 2, max: 4}, 0);

let RareBag = new Bag(ItemID.rare_lbag, 2, 3);

RareBag.addItem(.1, VanillaItemID.bone_meal, {min: 10, max: 16});
RareBag.addItem(.07, VanillaItemID.bread, {min: 3, max: 8});
RareBag.addItem(.08, VanillaItemID.apple, {min: 3, max: 10});
RareBag.addItem(.13, VanillaBlockID.cobblestone, {min: 1, max: 4});
RareBag.addItem(.1, 265, {min: 1, max: 4});
RareBag.addItem(.1, 263, {min: 1, max: 5});
RareBag.addItem(.01, 264, {min: 1, max: 3});
RareBag.addItem(.5, VanillaItemID.bone, {min: 2, max: 6});
RareBag.addItem(.2, 3, {min: 2, max: 5});
RareBag.addItem(.1, 2, {min: 1, max: 2});

let LegendaryBag = new Bag(ItemID.legendary_lbag, 3, 6);
LegendaryBag.addItem(.07, VanillaItemID.bread, {min: 5, max: 10});
LegendaryBag.addItem(.08, VanillaItemID.apple, {min: 8, max: 15});
LegendaryBag.addItem(.08, VanillaBlockID.cobblestone, {min: 10, max: 20});
LegendaryBag.addItem(.05, 3, {min: 30, max: 40});
LegendaryBag.addItem(.1, 2, {min: 20, max: 25});
LegendaryBag.addItem(.2, 265, {min: 5, max: 10});
LegendaryBag.addItem(.2, 263, {min: 1, max: 5});
LegendaryBag.addItem(.2, 264, {min: 1, max: 2});

let AvaritiaBag = new Bag(ItemID.avaritia_lbag, 2, 3);
AvaritiaBag.addItem(.15/2, 265, {min: 32, max: 64});
AvaritiaBag.addItem(.15/2, 263, {min: 16, max: 128});
AvaritiaBag.addItem(.2/2, 264, {min: 1, max: 16});

Callback.addCallback("ModsLoaded", function(){
	AvaritiaBag.addItem(.1/2, ItemID.fuelActral, {min: 16, max: 32});
	AvaritiaBag.addItem(.25/2, ItemID.factory_update_2, {min: 1, max: 1});
	AvaritiaBag.addItem(.15/2, BlockID.energyCollector3, {min: 1, max: 3});
	AvaritiaBag.addItem(.25/2, BlockID.diamondChest, {min: 1, max: 3});
	AvaritiaBag.addItem(.1/2, ItemID.storageLapotronCrystal, {min: 1, max: 1});
	AvaritiaBag.addItem(.1/2, ItemID.ingotCopper, {min: 32, max: 64});
	AvaritiaBag.addItem(.1/2, ItemID.ingotTin, {min: 32, max: 64});
	AvaritiaBag.addItem(.1, ItemID.ingotSteel, {min: 16, max: 32});
	
	UncommonBag.addItem(.075, ItemID.ex_crookWood, {min: 1, max: 1});
	UncommonBag.addItem(.05, ItemID.ex_crookBone, {min: 1, max: 1});
	UncommonBag.addItem(.075, ItemID.ex_silkWorm, {min: 1, max: 2});
	UncommonBag.addItem(.075, ItemID.upgrade_obsidian, {min: 1, max: 1});
	UncommonBag.addItem(.05, ItemID.ex_porcelain, {min: 1, max: 8});
	UncommonBag.addItem(.025, ItemID.ex_bucketPorcelainRaw, {min: 1, max: 1});
	
	
	RareBag.addItem(.2, ItemID.ingotCopper, {min: 1, max: 5});
	RareBag.addItem(.2, ItemID.ingotTin, {min: 1, max: 5});
	RareBag.addItem(.1, ItemID.ingotSteel, {min: 1, max: 3});
	RareBag.addItem(.1, ItemID.circuitBasic, {min: 1, max: 1});
	RareBag.addItem(.1, ItemID.upgrade_iron, {min: 1, max: 1});
	RareBag.addItem(.1, ItemID.woodIronUpgrade, {min: 1, max: 1});
	
	LegendaryBag.addItem(.2, ItemID.ingotCopper, {min: 4, max: 10});
	LegendaryBag.addItem(.2, ItemID.ingotTin, {min: 4, max: 10});
	LegendaryBag.addItem(.3, ItemID.ingotSteel, {min: 3, max: 8});
	LegendaryBag.addItem(.25, ItemID.factoryBattery, {min: 1, max: 2});
	LegendaryBag.addItem(.3, ItemID.fuelAlchemical, {min: 4, max: 64});
});







