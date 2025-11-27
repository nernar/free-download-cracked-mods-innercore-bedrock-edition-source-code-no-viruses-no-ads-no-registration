IDRegistry.genItemID("Lolinghot");
Item.createItem("Lolinghot", "Слиток души", {name: "lol_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("golem_crystal");
Item.createItem("golem_crystal", "Кристалл голема", {name: "golem_crystal", meta: 0}, {stack: 64});

IDRegistry.genItemID("grapple");
Item.createItem("grapple", "Кусок гарпуна", {name: "grapple", meta: 0}, {stack: 64});

IDRegistry.genItemID("hot_p_book");
Item.createItem("hot_p_book", "Книга горячей картошки", {name: "hot_p_book", meta: 0}, {stack: 1});

IDRegistry.genItemID("nope");
Item.createItem("nope", "§2Офигевшая рыба", {name: "nope", meta: 0}, {stack: 1});

IDRegistry.genItemID("coin");
Item.createItem("coin", "Руна края", {name: "coin", meta: 0}, {stack: 1});

IDRegistry.genItemID("ender_star");
Item.createItem("ender_star", "Звезда края", {name: "ender_star", meta: 0}, {stack: 64});

IDRegistry.genItemID("skill");
Item.createItem("skill", "Основа улучшения", {name: "skill", meta: 0}, {stack: 1});

IDRegistry.genItemID("skilll");
Item.createItem("skilll", "Улучшение Край", {name: "skill", meta: 1}, {stack: 1});

IDRegistry.genItemID("skil");
Item.createItem("skil", "σУлучшение Атакаσ", {name: "skill", meta: 2}, {stack: 1});

IDRegistry.genItemID("Tail");
Item.createItem("Tail", "Портал в Край", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.Tail, count: 1, data: 0}, [
		"bab",
		"axa",
		"bab"
	], ['x', 264, 0, 'a', 381, 0, 'b', 49, 0]);


Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.Tail&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 2, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 2, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 2, 0);
Entity.spawn(coords.x+1, coords.y+1, coords.z, 93); 
}}); 

var playerMaxHealt = 20
IDRegistry.genItemID("hp");
Item.createItem("hp", "❤️Сердечко .Одноразовое❤️", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 152, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 
var playerMaxHealt = 30

Saver.addSavesScope("playerHeartScope",
    function read(scope){
        playerMaxHealt = scope.playerMaxHealt;
if(!scope.playerMaxHealt){
Game.message("Дарова");
return;
}
    },
    function save(){
        return {
            playerMaxHealt: playerMaxHealt
        }
    }
);