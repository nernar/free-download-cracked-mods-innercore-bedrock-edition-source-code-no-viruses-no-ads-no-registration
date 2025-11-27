alert("The Twilight Forest Test Mod By XD HMDT \n Youtube XD HMDT");
IMPORT("ToolLib");
IMPORT("PortalUtils");
IMPORT("TileRender");
IMPORT("BaseBlocks");
IMPORT("GuideAPI");

IMPORT("DungeonAPI");
IMPORT ( "StructuresAPI" );
IMPORT("DungeonCore");
DungeonCore.setPath("objects/");

	
var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.1,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 2,
    explosionres: 8,
    translucency: 0,
    sound: "wood"
});
var newGame = true;
Callback.addCallback("LevelLoaded", function(){
    if(newGame){        
        Game.message("§l§b The Twilight Forest 2.1 Beta");
        //Game.message(Translation.translate("§1Витя Белей: §7проявил соучастие в совершествовании рецептов компонентов механической брони и созданию новых ресурсов. §c09.08.2020 §b3§f.§70§f.§36"))
        Player.addItemToInventory(ItemID.book_twilight, 1, 0);
    }
});

Saver.addSavesScope("",
    function read(scope) {
        if(scope.amount){
			newGame = false;
		} 
    },
    
    function save() {
        return {amount: true};
    }
);

/*var timer = 0;
var sphere = null;

Callback.addCallback("ItemUse", function(c, i, b){
	if(i.id == 280&&!timer){      
        sphere = new KotoffeyMatch.particleSphere(c, 3);
        sphere.setParticleType(Native.ParticleType.HappyVillager);
        sphere.setParticlesDensity(7);
        timer = 10*20;
	}
});

Callback.addCallback("tick", function(){
    if(timer){
        sphere.emit();
    }
});*/
