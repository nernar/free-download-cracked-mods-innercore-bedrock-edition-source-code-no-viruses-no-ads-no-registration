/*
BUILD INFO:
  dir: core/dev
  target: main.js
  files: 23
*/



// file: IMPORT LIB.js

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




// file: Mode/buttonAPI.js


var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
	if(screenName != "hud_screen" && screenName != "in_game_play_screen"){
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
});

var UIbuttons = {
	isEnabled: false,
	nightvision: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: 925,
			y: UI.getScreenHeight()/2-75,
			width: 75,
			height: 300
		},
		drawing: [{type: "background", color: 0}],
		elements: {}
	}),
	
	setButton: function(id, name){
		armorData[id] = name;
	},
	registerButton: function(name, properties){
		buttonContent[name] = properties;
	}
}

var armorData = {};

var buttonMap = {
	button_skill_resistance: false,
	button_fly: false,
	
}

var buttonContent = {
	button_skill_resistance: {
			y: 1500,
			type: "button",
			bitmap: "skill_resistance_off",
			bitmap2: "skill_resistance_on",
			scale: 20,
			clicker: {
				onClick: function(){
              Entity.addEffect(Player.get(), 11, 1, 200, true, false);
         Entity.addEffect(Player.get(), 2, 2, 200, true, false);
            Entity.addEffect(Player.get(), 10, 1, 50, true, false);
				}
			}
		},
button_skill_speed: {
			y: 1500,
			type: "button",
			bitmap: "skill_speed_off",
			bitmap2: "skill_speed_on",
			scale: 20,
			clicker: {
				onClick: function(){
              Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 3, 25);
				}
			}
		},

    

button_fly: {
		y: 1000,
		type: "button",
		bitmap: "button_fly_off",
		bitmap2: "button_fly_on",
		scale: 20
	}
}

UIbuttons.Window.setAsGameOverlay(true);

function updateUIbuttons(){
	var elements = UIbuttons.Window.content.elements;
	for(var name in buttonMap){
		if(buttonMap[name]){
			if(!elements[name]){
				elements[name] = buttonContent[name];
			}
			elements[name].x = 0;
			buttonMap[name] = false;
		}
		else{
			elements[name] = null;
		}
	}
}


Callback.addCallback("tick", function(){
	var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
	activeButtons = [];
	for(var i in armor){
		var button = armorData[armor[i].id];
		if(button){
			buttonMap[button] = true;
			UIbuttons.isEnabled = true;
		}
	}
	if(UIbuttons.isEnabled && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		updateUIbuttons();
		if(!UIbuttons.container){
			UIbuttons.container = new UI.Container();
			UIbuttons.container.openAs(UIbuttons.Window);
		}
		if(UIbuttons.container.isElementTouched("button_fly")){
			var armor = armor[1];
			var y = Player.getPosition().y
			var maxDmg = Item.getMaxDamage(armor.id)
			if(armor.data < maxDmg && y < 256){ 
				if(World.getThreadTime() % 10 == 0){
					Player.setArmorSlot(1, armor.id, 1, Math.min(armor.data+50, maxDmg));
				}
				var vel = Player.getVelocity();
				var vy = Math.min(32, 264-y) / 160;
				if(vel.y < 0.67){
					Player.addVelocity(0, Math.min(vy, 0.67-vel.y), 0);
				}
			}
		}
	}
	else{
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
	UIbuttons.isEnabled = false;
});




// file: Mode/Group.js

Item.addCreativeGroup("Flower", Translation.translate("Flower"), [
ItemID.flower1,
ItemID.flower2,
ItemID.flower3,
ItemID.flower4,
ItemID.flower5,
ItemID.flower6,
ItemID.flower7,
ItemID.flower8,
ItemID.flower9
]);



Item.addCreativeGroup("Key Boss", Translation.translate("Key Boss"), [
ItemID.keyNaga,
 ItemID.keyHydra,
 ItemID.keyLich,
 ItemID.keyUghast,
 ItemID.keyMinoshroom,
ItemID.keySnowQueen,
]);

Item.addCreativeGroup("Ingot", Translation.translate("Ingot"), [
	ItemID.fieryblood,
	ItemID.fiery_ingot,
	ItemID.steeleaf,
	ItemID.ironwood,
	ItemID.naga_scale,
	ItemID.ice_bomb,
	ItemID.ironwood_raw,
]);

Item.addCreativeGroup("Scepter", Translation.translate("Scepter"), [
	ItemID.shield_scepter,
	ItemID.lifedrain_scepter,
	ItemID.zombie_scepter,
]);


Item.addCreativeGroup("Tools", Translation.translate("Tools"), [
	ItemID.steeleaf_sword,
	ItemID.steeleaf_shovel,
	ItemID.steeleaf_pickaxe,
	ItemID.steeleaf_axe,
	ItemID.ironwood_sword,
	ItemID.ironwood_shovel,
	ItemID.ironwood_pickaxe,
	ItemID.ironwood_axe,
	ItemID.ice_sword,
	ItemID.mazebreaker_pickaxe,
	ItemID.minotaur_axe,
	
]);


Item.addCreativeGroup("Trophy", Translation.translate("Trophy"), [
	ItemID.ughastTrophy,
	ItemID.lichTrophy,
	ItemID.nagaTrophy,
	ItemID.hydraTrophy,
]);

Item.addCreativeGroup("Helmet", Translation.translate("Helmet"), [  
	ItemID.steeleaf_helmet,
	ItemID.phantom_helmet,
	 ItemID.ironwood_helmet,
	ItemID.arctic_helmet,
	ItemID.fieryH,
	
]);

Item.addCreativeGroup("Chestplate", Translation.translate("Chestplate "), [
	ItemID.steeleaf_chestplate,
	ItemID.phantom_chestplate,
	ItemID.ironwood_chestplate,
	ItemID.arctic_chestplate,
	ItemID.fieryC,
	ItemID.nagaC,
]);

Item.addCreativeGroup("Leggings", Translation.translate("leggings"), [
	ItemID.steeleaf_leggings,
	ItemID.ironwood_leggings,
	ItemID.arctic_leggings,
	ItemID.fieryL,
	ItemID.nagaL,
]);

Item.addCreativeGroup("Boots", Translation.translate("Boots"), [
	ItemID.steeleaf_boots,
	ItemID.ironwood_boots,
	ItemID.arctic_boots,
	ItemID.fieryB,
]);



Item.addCreativeGroup("Log", Translation.translate("Log"), [
	BlockID.twDarkLog,
	 BlockID.twMangroveLog,
	BlockID.twCanopyLog,
	 BlockID.twTwilightOakLog,
	BlockID.twMiningLog,
	 BlockID.twSortingLog,
	BlockID.twTimeLog,
	 BlockID.twTransformationLog,
]);
Item.addCreativeGroup("Plank", Translation.translate("Plank"), [
	BlockID.tw_planks_dark_wood,
	 BlockID.tw_planks_mangrove,
	BlockID.tw_planks_canopy,
	 BlockID.tw_planks_twilight_oak,
	BlockID.tw_planks_mine,
	 BlockID.tw_planks_sort,
	BlockID.tw_planks_time,
	 BlockID.tw_planks_trans,
]);
Item.addCreativeGroup("Leaves", Translation.translate("Leaves"), [
BlockID.time_leaves,
BlockID.sorting_leaves,
BlockID.sorting_leaves,
BlockID.transformation_leaves,
]);




// file: Mode/TileRender.js




let BlockSide = Native.BlockSide;
const Color = android.graphics.Color;

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}


let TileRender = {
    setLogTypeRender: function (blockID) {
        Callback.addCallback("ItemUse", function (coords, item, block) {
            let place = coords.relative;
            let tile1 = World.getBlock(place.x, place.y, place.z);
            if (World.cantileBeReplaced(tile1.id, tile1.data) && item.id === blockID) {
                Game.prevent();
                if (coords.side == BlockSide.DOWN || coords.side == BlockSide.UP) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 0);
                }
                else if (coords.side == BlockSide.NORTH || coords.side == BlockSide.SOUTH) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 1);
                }
                else if (coords.side == BlockSide.WEST || coords.side == BlockSide.EAST) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 2);
                }
            }
            return true;
        })
    },
    setSlabTypeRender: function (blockID, fullBlockID) {
        Callback.addCallback("ItemUse", function (position, item, block) {
            if (item.id == blockID) {
                Game.prevent();
                if (block.id == item.id && block.data == 0 && position.side == BlockSide.UP) {
                    World.setBlock(position.x, position.y, position.z, fullBlockID, 0);
                    return true;
                }
                if (block.id == item.id && block.data == 1 && position.side == BlockSide.DOWN) {
                    World.setBlock(position.x, position.y, position.z, fullBlockID, 0);
                    return true;
                }
                let place = World.cantileBeReplaced(block.id, block.data) ? position : position.relative;
                let tileID = World.getBlockID(place.x, place.y, place.z);
                let tileDATA = World.getBlockData(place.x, place.y, place.z);

                if (position.vec.y - place.y < 0.5) {
                    if (tileID == blockID && tileDATA == 1) {
                        World.setBlock(place.x, place.y, place.z, fullBlockID, 0);
                        return true;
                    }
                    World.setBlock(place.x, place.y, place.z, item.id, item.data);
                }
                else {
                    if (tileID == blockID && tileDATA == 0) {
                        World.setBlock(place.x, place.y, place.z, fullBlockID, 0);
                        return true;
                    }
                    World.setBlock(place.x, place.y, place.z, item.id, 1);
                }
                return true;
            }
        })
        Block.setBlockShape(blockID, { x: 0, y: 0, z: 0 }, { x: 1, y: 0.5, z: 1 }, 0);
        Block.setBlockShape(blockID, { x: 0, y: 0.5, z: 0 }, { x: 1, y: 1, z: 1 }, 1);
    }
}




// file: Core/Item/Item Mod.js

IDRegistry.genItemID("steeleaf");
Item.createItem("steeleaf", "Steeleaf", {name: "steeleaf", meta: 0}, {stack: 64})

IDRegistry.genItemID("naga_scale");
Item.createItem("naga_scale", "Naga Scale", {name: "naga_scale", meta: 0}, {stack: 64})

IDRegistry.genItemID("ironwood");
Item.createItem("ironwood", "Iron Wood ", {name: "ironwood", meta: 0}, {stack: 64})

IDRegistry.genItemID("fieryblood");
Item.createItem("fieryblood", "Fiery Blood", {name: "fiery", meta: 0}, {stack: 64})

IDRegistry.genItemID("fiery_ingot");
Item.createItem("fiery_ingot", "Fiery Ingot ", {name: "fiery_ingot", meta: 0}, {stack: 64})

IDRegistry.genItemID("ironwood_raw");
Item.createItem("ironwood_raw", "Ironwood Raw ", {name: "ironwood_raw", meta: 0}, {stack: 64})
Recipes.addFurnace(ItemID.ironwood_raw, ItemID.ironwood, 0); 

IDRegistry.genItemID("ice_bomb");
Item.createItem("ice_bomb", "Ice Bomb ", {name: "ice_bomb", meta: 0}, {stack: 64})

Item.registerThrowableFunction("ice_bomb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 4);
} 
} 
);







 IDRegistry.genItemID("twpo");
Item.createItem("twpo", "Out Dimensions", {name: "over_world", meta: 0}, {stack: 1})
	Recipes.addShaped({id: ItemID.twpo, count: 2, data: 0}, [
		"ooo",
		"aaa",
		"aaa"
	], ['o', ItemID.steeleaf, 0,'a', 3, 0]);
	




// file: Core/Item/Book.js

IDRegistry.genItemID("book_twilight");
Item.createItem("book_twilight", "Book Twilight", {name: "Book_twilight", meta: 0}, {stack: 1});


GuideAPI.registerGuide("book_twilight", { 
item: ItemID.book_twilight, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 




pages: {
	
                  "default": {
                preLink: "default",
                nextLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,         
                    elements: [
                    
                        {text: "The Twilight Forest", size: 30},
                        {text: "-The Twilight Fores - this mod will add tools and bosses and buildings, the mod is pc based and will be updated continuously for the best user experience.", size: 18},
                        {text: "-This is just a beta version that hasn't been updated yet, so there's a lot of stuff that hasn't been included here", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                    {text: "================", size: 23},
                    {text: "Item", size: 27, link: "item"},     
                    {text: "================", size: 23},
                    {text: "Tools", size: 27, link: "tools"},  
                    {text: "================", size: 23},
                    {text: "Trophy", size: 27, link: "trophy"},    
                    {text: "================", size: 23},
                    {text: "Block", size: 27, link: "block"},      
                    {text: "================", size: 23},
                    {text: "Dimensions", size: 27, link: "dimensions"}, 
                    {text: "================", size: 23},
                    {text: "Mod", size: 27, link: "mob"},                            
                             
                    ]
                }
            },
                        "tools": {
                 preLink: "default",    	
                nextLink: "default",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    elements: [
                    {text: "The Twilight Forest", size: 30},
                    {text: "The Twilight Fores - this mod will add tools and bosses and buildings, the mod is pc based and will be updated continuously for the best user experience.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "================", size: 23},
                        {text: "Scepter", size: 25, link: "lifedrain_scepter"},
                        {text: "================", size: 23},
                        {text: "Steeleaf Tools", size: 25, link: "steeleaf_sword_shovel"},
                        {text: "================", size: 23},
                        {text: "IronWood Tools", size: 25, link: "ironwood_sword_shovel"},
                        {text: "================", size: 23},
                        {text: "Ice Sword", size: 25, link: "ice_sword"},
                        {text: "================", size: 23},
                        {text: "Mazebreaker Pickaxe-Minotaur Axe", size: 25, link: "pickaxe-axe"},
                        {text: "================", size: 23},
                        {text: "Bow", size: 25, link: "bow"},

                    ]
                }
            },
            
    
            "steeleaf_sword_shovel": {
            	preLink: "tools",    	
                nextLink: "steeleaf_pickaxe_axe",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_sword}
                    ],
                    elements: [
                    {text: "Steeleaf Sword", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 7", size: 18},
                    {text: "Durability: 780", size: 18},
                    
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_shovel}
                        ],
                    elements: [
                    {text: "Steeleaf Shovel", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 3", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
            "steeleaf_pickaxe_axe": {
            	preLink: "steeleaf_sword_shovel",    	
                nextLink: "ironwood_sword_shovel",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_pickaxe}
                    ],
                    elements: [
                    {text: "Steeleaf Pickaxe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 4", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Digging Level: diamond", size: 18},
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_axe}
                        ],
                    elements: [
                    {text: "Steeleaf Axe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 6", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
//ironwood
"ironwood_sword_shovel": {
            	preLink: "steeleaf_pickaxe_axe",    	
                nextLink: "ironwood_pickaxe_axe",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_sword}
                    ],
                    elements: [
                    {text: "IronWood Sword", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 8", size: 18},
                    {text: "Durability: 780", size: 18},                    
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_shovel}
                        ],
                    elements: [
                    {text: "IronWood Shovel", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 4", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
            "ironwood_pickaxe_axe": {
            	preLink: "ironwood_sword_shovel",    	
                nextLink: "tools",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_pickaxe}
                    ],
                    elements: [
                    {text: "IronWood Pickaxe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 5", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Digging Level: diamond", size: 18},
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_axe}
                        ],
                    elements: [
                    {text: "IronWood Axe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 7", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
            // scepter
            "lifedrain_scepter": {
            	preLink: "tools",    	
                nextLink: "zombie_scepter",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.lifedrain_scepter}
                    ],
                    elements: [
                    {text: "Lifedrain Scepter", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Lich Boss", size: 18},
                    {text: "Damage: 5", size: 18},
                    {text: "Summons: FireBall ", size: 18},
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted it only drops from the Lich boss", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shield_scepter}
                        ],
                    elements: [
                    {text: "Shield Scepter", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Lich Boss", size: 18},
                    {text: "Shield: Lever 3", size: 18},                    
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted it only drops from the Lich boss", size: 18},
                    ]
                }
            },
            "zombie_scepter": {
            	preLink: "lifedrain_scepter",    	
                nextLink: "scepter",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_scepter}
                    ],
                    elements: [
                    {text: "Zombie Scepter", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Lich Boss", size: 18},
                    {text: "Summons: 2", size: 18},
                    {text: "Entity: zombie", size: 18},                  
                    {text: "Hp Entity: 10", size: 18},
                    {text: "Damage Entity: 7", size: 18},                                   
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted it only drops from the Lich boss", size: 18},
                    ]
                },                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    
                    elements: [
                    
                    ]
                }
            },
            //pickaxe axe
            "pickaxe-axe": {
            	preLink: "tools",    	
                nextLink: "tools",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.mazebreaker_pickaxe}
                    ],
                    elements: [
                    {text: "Mazebreaker Pickaxe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Damage: 3", size: 18},
                    {text: "Durability: 1576", size: 18},
                    {text: "Efficiency: 50", size: 18},
                    {text: "Digging Level: obsidian", size: 18},                    
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted and can only be found in the labyrinth", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.minotaur_axe}
                        ],
                    elements: [
                    {text: "Minotaur Axe", size: 20},
                    {text: "=====================", size: 18},                    
                    {text: "Damage: 8", size: 18},                    
                    {text: "Durability: 1354", size: 18},       
                    {text: "Efficiency: 24", size: 18},
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted only dropped from the Minotaur boss", size: 18},
                    ]
                }
            },
            "ice_sword": {
                preLink: "tools",
                nextLink: "tools",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ice_sword}
                    ],
                    elements: [
                     {text: "Ice Sword", size: 20},
                    {text: "=====================", size: 18},                    
                    {text: "Damage: 11", size: 18},                    
                    {text: "Durability: 11", size: 18},                           
                    {text: "=====================", size: 18},
                    {text: "I found this paper blank so I put the formula here :))", size: 18},
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["b", "h", "b"],
 ["b", "h", "b"],
 ["b", "k", "b"]
 ],
 materials: {
 "k": {id: 280, data: 0},
 "h": {id: ItemID.ice_bomb, data: 0},
 
 },
 result: {id: ItemID.ice_sword, count: 1}
 }
 ],
 elements: [
 ],
 }
},

//item
            "item": {
                 preLink: "default",    	
                nextLink: "default",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    elements: [
                    {text: "The Twilight Forest", size: 30},
                    {text: "The Twilight Fores - this mod will add tools and bosses and buildings, the mod is pc based and will be updated continuously for the best user experience.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "================", size: 23},
                        {text: "IronWood", size: 25, link: "ironwood"},
                        {text: "================", size: 23},
                        {text: "IronWood Raw", size: 25, link: "ironwood_raw"},
                        {text: "================", size: 23},
                        {text: "Steeleaf", size: 25, link: "ironwood_raw"},
                        {text: "================", size: 23},
                        {text: "Naga Scale", size: 25, link: "naga_scale"},
                        {text: "================", size: 23},
                        {text: "Ice Bomb", size: 25, link: "naga_scale"},
                        {text: "================", size: 23},
                        {text: "Fiery Blood", size: 25, link: "fiery_blood"},
                        {text: "================", size: 23},
                        {text: "Fiery Ingot", size: 25, link: "fiery_ingot"},
                        ]
                }
            },
            
                        

"ironwood": {
            	preLink: "item",    	
                nextLink: "ironwood_raw",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood}
                    ],
                    elements: [
                    {text: "IronWood", size: 20},
                    {text: "This item only appears in Twilight Forest, used to make armor and tools", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.OTO_RECIPE_PAGE,
 title: "Furnace recipe",
 type: 0,
 bar_texture: "furnace_bar_guide",
 recipes: [
 {
 input: {
 id: ItemID.ironwood_raw,
 data: 0
 },

 output: {
 id: ItemID.ironwood,
 data: 0,
 count: 1
 }
 }
 ],
 elements: [] 
        }
 },

"ironwood_raw": {
            	preLink: "ironwood",    	
                nextLink: "naga_scale",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_raw}
                    ],
                    elements: [
                    {text: "IronWood Raw", size: 20},                    
                    {text: "you can find this item in Twilight Forest, you can burn this item to get IronWood", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf}
                        ],
                    elements: [
                    {text: "Steeleaf", size: 20},
                    
                    {text: "This item only appears in Twilight Forest, used to make armor and tools", size: 18},
                    ]
                }
            },
            "naga_scale": {
            	preLink: "ironwood_raw",    	
                nextLink: "fiery_blood",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.naga_scale}
                    ],
                    elements: [
                    {text: "Naga Scale", size: 20},                    
                    {text: "this item drops from the boss Naga, this item can make the 2nd most expensive armor of the mod so it is very important", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ice_bomb}
                        ],
                    elements: [
                    {text: "Ice Bomb", size: 20},
                    
                    {text: "This item is dropped from the penguin in the snow queen area, used to create a cool sword", size: 18},
                    ]
                }
            },
            "fiery_blood": {
            	preLink: "naga_scale",    	
                nextLink: "fiery_ingot",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fieryblood}
                    ],
                    elements: [
                    {text: "Fiery Blood", size: 20},
                    {text: "Hydra dragon's blood vial it's very rare almost very few, this item combines with iron ingot to create Fiery Ingot one of the best phono series", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["x", "z", "b"],
 ["b", "h", "b"],
 ["b", "k", "b"]
 ],
 materials: {
 "x": {id: 265, data: 0},
 "z": {id: ItemID.fieryblood, data: 0},
 
 },
 result: {id: ItemID.fiery_ingot, count: 1}
 }
 ],
 elements: [
 ],
 }
},
         
            "fiery_ingot": {
            	preLink: "fiery_blood",    	
                nextLink: "item",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fiery_ingot}
                    ],
                    elements: [
                    {text: "Fiery Ingot", size: 20},
                    {text: "Fiery Ingot is a series of phots that can be called the rarest in the Twilight Forest you can only make it too Fiery Blood", size: 18},
                    ]
                },                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    
                    elements: [
                    
                    ]
                }
            },
            "block": {
            	preLink: "default",    	
                nextLink: "default",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.twBlockPortal}
                    ],
                    elements: [
                    {text: "twilight forest block portal", size: 20},
                    {text: "This stage needs conditions to create a portal to the world of Twilight Forest, to activate the block you need a diamond, use the diamond to click on the block to create a portal", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "h", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 3, data: 0},
 
 
 },
 result: {id: BlockID.twBlockPortal, count: 1}
 }
 ],
 elements: [
 ],
 }
},



                    
    
            
            
            
            
            
            
            
            
            
            
}
});




// file: Core/Tools/Bow.js

IDRegistry.genItemID ("naga_bow");
Item.createItem("naga_bow", "Naga Bow",{name:"naga_bow",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.naga_bow){
Entity.setHealth(entity, 7);
Game.prevent();
}});
Item.registerNoTargetUseFunction("naga_bow", function(item, entity){
if(item.id == ItemID.naga_bow){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
Entity.setVelocity(pp1,8*vv.x,8*vv.y,8*vv.z);
//Entity.setVelocity(pp2,8*vv.x,8*vv.y,8*vv.z);
//Entity.setVelocity(pp3,8*vv.x,8*vv.y,8*vv.z);
//Entity.setVelocity(pp4,8*vv.x,8*vv.y,8*vv.z);

}});






// file: Core/Tools/Tools.js

 IDRegistry.genItemID("steeleaf_sword");
IDRegistry.genItemID("steeleaf_shovel");
IDRegistry.genItemID("steeleaf_pickaxe");
IDRegistry.genItemID("steeleaf_axe");
Item.createItem("steeleaf_sword", "Steeleaf Sword", {name: "steeleaf_sword", meta: 0}, {stack: 1});
Item.createItem("steeleaf_shovel", "Steeleaf Shovel", {name: "steeleaf_shovel", meta: 0}, {stack: 1});
Item.createItem("steeleaf_pickaxe", "Steeleaf Pickaxe", {name: "steeleaf_pickaxe", meta: 0}, {stack: 1});
Item.createItem("steeleaf_axe", "Steeleaf Axe", {name: "steeleaf_axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("steeleaf", {durability: 780, level: 3, efficiency: 6, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.steeleaf_sword, "steeleaf", ToolType.sword);
ToolAPI.setTool(ItemID.steeleaf_shovel, "steeleaf", ToolType.shovel);
ToolAPI.setTool(ItemID.steeleaf_pickaxe, "steeleaf", ToolType.pickaxe);
ToolAPI.setTool(ItemID.steeleaf_axe, "steeleaf", ToolType.axe);

Item.setGlint("steeleaf_sword", true);
Item.setGlint("steeleaf_shovel", true);
Item.setGlint("steeleaf_pickaxe", true);
Item.setGlint("steeleaf_axe", true);

Recipes.addShaped({id: ItemID.steeleaf_sword, couant: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.steeleaf_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.steeleaf_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.steeleaf_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

                             //2//
IDRegistry.genItemID("ironwood_sword");
IDRegistry.genItemID("ironwood_shovel");
IDRegistry.genItemID("ironwood_pickaxe");
IDRegistry.genItemID("ironwood_axe");
Item.createItem("ironwood_sword", "IronWood Sword", {name: "ironwood_sword", meta: 0}, {stack: 1});
Item.createItem("ironwood_shovel", "IronWood Shovel", {name: "ironwood_shovel", meta: 0}, {stack: 1});
Item.createItem("ironwood_pickaxe", "IronWood Pickaxe", {name: "ironwood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ironwood_axe", "IronWood Axe", {name: "ironwood_axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ironwood", {durability: 780, level: 3, efficiency: 2, damage: 4, enchantability: 14});

ToolAPI.setTool(ItemID.ironwood_sword, "ironwood", ToolType.sword);
ToolAPI.setTool(ItemID.ironwood_shovel, "ironwood", ToolType.shovel);
ToolAPI.setTool(ItemID.ironwood_pickaxe, "ironwood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ironwood_axe, "ironwood", ToolType.axe);

Recipes.addShaped({id: ItemID.ironwood_sword, couant: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ironwood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ironwood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ironwood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);















IDRegistry.genItemID("ice_sword");
Item.createItem("ice_sword", " Ice Sword", {name: "ice_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ice_sword", {durability: 11, level: 2, efficiency: 14, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.ice_sword, "ice_sword", ToolType.sword);



IDRegistry.genItemID("mazebreaker_pickaxe");
Item.createItem("mazebreaker_pickaxe", " Mazebreaker Pickaxe", {name: "mazebreaker_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("mazebreaker_pickaxe", {durability: 1576, level: 4, efficiency: 50, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.mazebreaker_pickaxe, "mazebreaker_pickaxe", ToolType.pickaxe);



IDRegistry.genItemID("minotaur_axe");
Item.createItem("minotaur_axe", "Minotaur Axe", {name: "minotaur_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("minotaur_axe", {durability: 1354, level: 4, efficiency: 24, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.minotaur_axe, "minotaur_axe", ToolType.axe);






// file: Core/Tools/Scepter.js

IDRegistry.genItemID ("lifedrain_scepter");
Item.createItem("lifedrain_scepter", "Lifedrain Scepter",{name:"lifedrain_scepter",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.lifedrain_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});

Item.registerNoTargetUseFunction("lifedrain_scepter", function(item){
if(item.id == ItemID.lifedrain_scepter){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawn(pp.x,pp.y,pp.z,Native.EntityType.FIREBALL);
Entity.setVelocity(pp1,8*vv.x,8*vv.y,8*vv.z);
}});




IDRegistry.genItemID ("shield_scepter");
Item.createItem("shield_scepter", "Shield Scepter",{name:"shield_scepter",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.shield_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});
Item.registerNoTargetUseFunction("shield_scepter", function(item){
if(item.id == ItemID.shield_scepter){
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 10, 50*225);
}});





IDRegistry.genItemID ("zombie_scepter");
Item.createItem("zombie_scepter", "Zombie Scepter",{name:"zombie_scepter",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.zombie_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});
Item.registerNoTargetUseFunction("zombie_scepter", function(item, entity){
if(item.id == ItemID.zombie_scepter){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawnAddon(pp.x+1,pp.y,pp.z, "scepter:z");
Entity.spawnAddon(pp.x+1,pp.y,pp.z, "scepter:z");
}});


/*
IDRegistry.genItemID ("zombie_scepter");
Item.createItem("zombie_scepter", "Zombie Scepter",{name:"zombie_scepter",meta:0},{stack:1});
ChargeItemRegistry.registerItem(ItemID.zombie_scepter, 2000, 0, true, true);
var ZOMBIE_DURABILITY = 2001;
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.zombie_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});
Item.registerNoTargetUseFunction("zombie_scepter", function(item, entity){
if(item.data + 50 <= Item.getMaxDamage(ItemID.zombie_scepter)){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawnAddon(pp.x+1,pp.y,pp.z, "tw:zombie");
Entity.spawnAddon(pp.x+1,pp.y,pp.z, "tw:zombie");
Entity.spawnAddon(pp.x,pp.y,pp.z-1, "tw:zombie");
Entity.spawnAddon(pp.x,pp.y,pp.z-1, "tw:zombie");
item.data = Math.min(item.data+200, ZOMBIE_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);

}});
*/





// file: Core/Armor/Tw Armor.js

//if(__config__.access("Armor Twilight Forest") == false){
IDRegistry.genItemID("steeleaf_helmet");
IDRegistry.genItemID("steeleaf_chestplate");
IDRegistry.genItemID("steeleaf_leggings");
IDRegistry.genItemID("steeleaf_boots");

Item.createArmorItem("steeleaf_helmet", " steeleaf Helmet", {name: "steeleaf_helmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/steeleaf1_1.png"});
Item.createArmorItem("steeleaf_chestplate", " steeleaf Chestplate", {name: "steeleaf_chestplate"}, {type: "chestplate", armor: 4, durability: 298, texture: "armor/steeleaf1_1.png"});
Item.createArmorItem("steeleaf_leggings", " steeleaf Leggings", {name: "steeleaf_leggings"}, {type: "leggings", armor: 4, durability: 235, texture: "armor/steeleaf2_2.png"});
Item.createArmorItem("steeleaf_boots", " steeleaf Boots", {name: "steeleaf_boots"}, {type: "boots", armor: 3, durability: 198, texture: "armor/steeleaf1_1.png"});



Recipes.addShaped({id: ItemID.steeleaf_helmet, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.steeleaf_chestplate, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.steeleaf_leggings, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.steeleaf_boots, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);



IDRegistry.genItemID("phantom_helmet");
IDRegistry.genItemID("phantom_chestplate");

Item.createArmorItem("phantom_helmet", "Phantom Helmet", {name: "phantom_helmet"}, {type: "helmet", armor: 6, durability: 236, texture: "armor/phantom1_1.png"});
Item.createArmorItem("phantom_chestplate", "Phantom Chestplate", {name: "phantom_chestplate"}, {type: "chestplate", armor: 9, durability: 356, texture: "armor/phantom1_1.png"});

IDRegistry.genItemID("ironwood_helmet");
IDRegistry.genItemID("ironwood_chestplate");
IDRegistry.genItemID("ironwood_leggings");
IDRegistry.genItemID("ironwood_boots");

Item.createArmorItem("ironwood_helmet", "Ironwood Helmet", {name: "ironwood_helmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/ironwood1_1.png"});
Item.createArmorItem("ironwood_chestplate", "Ironwood Chestplate", {name: "ironwood_chestplate"}, {type: "chestplate", armor: 4, durability: 298, texture: "armor/ironwood1_1.png"});
Item.createArmorItem("ironwood_leggings", "Ironwood Leggings", {name: "ironwood_leggings"}, {type: "leggings", armor: 4, durability: 235, texture: "armor/ironwood2_2.png"});
Item.createArmorItem("ironwood_boots", "Ironwood Boots", {name: "ironwood_boots"}, {type: "boots", armor: 3, durability: 198, texture: "armor/ironwood1_1.png"});



Recipes.addShaped({id: ItemID.ironwood_helmet, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.ironwood_chestplate, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.ironwood_leggings, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.ironwood_boots, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);

IDRegistry.genItemID("arctic_helmet");
IDRegistry.genItemID("arctic_chestplate");
IDRegistry.genItemID("arctic_leggings");
IDRegistry.genItemID("arctic_boots");

Item.createArmorItem("arctic_helmet", "Arctic Helmet", {name: "arctic_helmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/arcticarmor1_1.png"});
Item.createArmorItem("arctic_chestplate", "Arctic Chestplate", {name: "arctic_chestplate"}, {type: "chestplate", armor: 4, durability: 298, texture: "armor/arcticarmor1_1.png"});
Item.createArmorItem("arctic_leggings", "Arctic Leggings", {name: "arctic_leggings"}, {type: "leggings", armor: 4, durability: 235, texture: "armor/arcticarmor2_2.png"});
Item.createArmorItem("arctic_boots", "Arctic Boots", {name: "arctic_boots"}, {type: "boots", armor: 3, durability: 198, texture: "armor/arcticarmor1_1.png"});





IDRegistry.genItemID("fieryH");
IDRegistry.genItemID("fieryC");
IDRegistry.genItemID("fieryL");
IDRegistry.genItemID("fieryB");

Item.createArmorItem("fieryH", "Fiery Helmet \n Skill:§aTrue", {name: "FH1"}, {type: "helmet", armor: 4, durability: 356, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryC", "Fiery Chestplate \n Skill:§aTrue", {name: "FC2"}, {type: "chestplate", armor: 7, durability: 537, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryL", "Fiery Leggings \n Skill:§aTrue", {name: "FL3"}, {type: "leggings", armor: 4, durability: 432, texture: "armor/FA2_2.png"});
Item.createArmorItem("fieryB", "Fiery Boots \n Skill:§aTrue", {name: "FB4"}, {type: "boots", armor: 4, durability: 265, texture: "armor/FA1_1.png"});

Item.setGlint("fieryH", true);
Item.setGlint("fieryC", true);
Item.setGlint("fieryL", true);
Item.setGlint("fieryB", true);

Recipes.addShaped({id: ItemID.fieryH, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.fiery_ingot, 0]);

Recipes.addShaped({id: ItemID.fieryC, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.fiery_ingot, 0]);

Recipes.addShaped({id: ItemID.fieryL, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.fiery_ingot, 0]);

Recipes.addShaped({id: ItemID.fieryB, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.fiery_ingot, 0]);


IDRegistry.genItemID("nagaC");
IDRegistry.genItemID("nagaL");
Item.createArmorItem("nagaC", "Naga Chestplate \n Skill:§aTrue", {name: "nagaC"}, {type: "chestplate", armor: 7, durability: 537, texture: "armor/naga1_1.png"});
Item.createArmorItem("nagaL", "Naga Leggings \n Skill:§aTrue", {name: "nagaL"}, {type: "leggings", armor: 4, durability: 432, texture: "armor/naga2_2.png"});
Item.setGlint("nagaC", true);
Item.setGlint("nagaL", true);

Recipes.addShaped({id: ItemID.nagaC, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.naga_scale, 0]);

Recipes.addShaped({id: ItemID.nagaL, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.naga_scale, 0]);




// file: Core/Armor/Buttons/Tw Button.js

UIbuttons.setButton(ItemID.fieryC, "button_skill_resistance");
UIbuttons.setButton(ItemID.nagaC, "button_skill_speed");




// file: Core/Block/Tree Block/Log.js

IDRegistry.genBlockID("twDarkLog");
IDRegistry.genBlockID("twMangroveLog");
IDRegistry.genBlockID("twCanopyLog");
IDRegistry.genBlockID("twTwilightOakLog");
IDRegistry.genBlockID("twMiningLog");
IDRegistry.genBlockID("twSortingLog");
IDRegistry.genBlockID("twTimeLog");
IDRegistry.genBlockID("twTransformationLog");

Block.createBlock("twDarkLog", [{
    name: "Dark Log",
    texture: [
        ["twDarkLog_top", 0],
        ["twDarkLog_top", 0],
        ["twDarkLog", 0],
        ["twDarkLog", 0],
        ["twDarkLog", 0],
        ["twDarkLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twDarkLog, "wood", 1, true);
Block.setDestroyLevel("twDarkLog", 0);
        
        
Block.createBlock("twCanopyLog", [{
    name: "Canopy Log",
    texture: [
        ["twCanopyLog_top", 0],
        ["twCanopyLog_top", 0],
        ["twCanopyLog", 0],
        ["twCanopyLog", 0],
        ["twCanopyLog", 0],
        ["twCanopyLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twCanopyLog, "wood", 1, true);
Block.setDestroyLevel("twCanopyLog", 0);
        
        
        
        
Block.createBlock("twMangroveLog", [{
    name: "Mangrove Log",
    texture: [
        ["twMangroveLog_top", 0],
        ["twMangroveLog_top", 0],
        ["twMangroveLog", 0],
        ["twMangroveLog", 0],
        ["twMangroveLog", 0],
        ["twMangroveLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twMangroveLog, "wood", 1, true);
Block.setDestroyLevel("twMangroveLog", 0);
        
        
        
        
Block.createBlock("twTwilightOakLog", [{
    name: "Twilight Oak Log",
    texture: [
        ["twTwilightOakLog_top", 0],
        ["twTwilightOakLog_top", 0],
        ["twTwilightOakLog", 0],
        ["twTwilightOakLog", 0],
        ["twTwilightOakLog", 0],
        ["twTwilightOakLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twTwilightOakLog, "wood", 1, true);
Block.setDestroyLevel("twTwilightOakLog", 0);
        
        
        
        
        
Block.createBlock("twMiningLog", [{
    name: "Mining Log",
    texture: [
        ["twMiningLog_top", 0],
        ["twMiningLog_top", 0],
        ["twMiningLog", 0],
        ["twMiningLog", 0],
        ["twMiningLog", 0],
        ["twMiningLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twMiningLog, "wood", 1, true);
Block.setDestroyLevel("twMiningLog", 0);
        
        
        
Block.createBlock("twSortingLog", [{
    name: "Sorting Log",
    texture: [
        ["twSortingLog_top", 0],
        ["twSortingLog_top", 0],
        ["twSortingLog", 0],
        ["twSortingLog", 0],
        ["twSortingLog", 0],
        ["twSortingLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twSortingLog, "wood", 1, true);
Block.setDestroyLevel("twSortingLog", 0);
        
        
        
        
Block.createBlock("twTimeLog", [{
    name: "Time Log",
    texture: [
        ["twTimeLog_top", 0],
        ["twTimeLog_top", 0],
        ["twTimeLog", 0],
        ["twTimeLog", 0],
        ["twTimeLog", 0],
        ["twTimeLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twTimeLog, "wood", 1, true);
Block.setDestroyLevel("twTimeLog", 0);
 

        
        
        
        
        
        
Block.createBlock("twTransformationLog", [{
    name: "Transformation Log",
    texture: [
        ["twTransformationLog_top", 0],
        ["twTransformationLog_top", 0],
        ["twTransformationLog", 0],
        ["twTransformationLog", 0],
        ["twTransformationLog", 0],
        ["twTransformationLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twTransformationLog, "wood", 1, true);
Block.setDestroyLevel("twTransformationLog", 0);
        
        
        
        
        
        




// file: Core/Block/Tree Block/Wood.js

//Register ID
IDRegistry.genBlockID("tw_planks_dark_wood");
IDRegistry.genBlockID("tw_planks_mangrove");
IDRegistry.genBlockID("tw_planks_canopy");
IDRegistry.genBlockID("tw_planks_twilight_oak");
IDRegistry.genBlockID("tw_planks_mine");
IDRegistry.genBlockID("tw_planks_sort");
IDRegistry.genBlockID("tw_planks_time");
IDRegistry.genBlockID("tw_planks_trans");

//Create Blocks
Block.createBlock("tw_planks_dark_wood", [{
    name: "Dark Wood Planks",
    texture: [
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_dark_wood, "wood", 0, true);
Block.setDestroyLevel("tw_planks_dark_wood", 0);
    

    
    
    
    
Block.createBlock("tw_planks_mangrove", [{
    name: "Mangrove Planks",
    texture: [
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_mangrove, "wood", 1, true);
Block.setDestroyLevel("tw_planks_mangrove", 0);
    


    
    
    
    
Block.createBlock("tw_planks_canopy", [{
    name: "Canopy Planks",
    texture: [
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_canopy, "wood", 1, true);
Block.setDestroyLevel("tw_planks_canopy", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_mine", [{
    name: "Mine Planks",
    texture: [
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_mine, "wood", 1, true);
Block.setDestroyLevel("tw_planks_mine", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_twilight_oak", [{
    name: "Twilight Oak Planks",
    texture: [
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_twilight_oak, "wood", 1, true);
Block.setDestroyLevel("tw_planks_twilight_oak", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_time", [{
    name: "Time Planks",
    texture: [
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_time, "wood", 1, true);
Block.setDestroyLevel("tw_planks_time", 0);
    

    
    
    
    
    
    
Block.createBlock("tw_planks_sort", [{
    name: "Sort Planks",
    texture: [
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],],inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_sort, "wood", 1, true);
Block.setDestroyLevel("tw_planks_sort", 0);
    

    
    
    
    
Block.createBlock("tw_planks_trans", [{
    name: "Transformation Planks",
    texture: [
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_trans, "wood", 1, true);
Block.setDestroyLevel("tw_planks_trans", 0);
    




// file: Core/Block/Block.js


IDRegistry.genBlockID("twBlockPortal")
Block.createBlock("twBlockPortal", [
    {name: "twilight forest block portal", texture: [["dirt_day", 1], ["tw_top", 1], ["tw", 0], ["tw", 0], ["tw", 0], ["tw", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.twBlockPortal, count: 1, data: 0}, [
		"ooo",
		"oxo",
		"ooo"
	], ['o', 3, 0, 'h', 326, 0]);
	
	
	/*
	var hydra = new RenderMesh();
hydra.setBlockTexture("hydra4",0);
hydra.importFromFile(__dir__+"/models/hydra.obj","obj",null);
IDRegistry.genBlockID("hydra_boss_statue");
Block.createBlock("hydra_boss_statue", [
    {name: "Hydra Statue", texture: [["hydra_boss_statue", 0],["hydra_boss_statue", 1],["hydra_boss_statue", 2],["hydra_boss_statue", 3],["hydra_boss_statue", 4],["hydra_boss_statue", 5]], inCreative: false}
]);
var hydra_model = new ICRender.Model();
hydra_model.addEntry(new BlockRenderer.Model(hydra));
BlockRenderer.setStaticICRender(BlockID.hydra_boss_statue,0,hydra_model);
	*/
	







IDRegistry.genBlockID("etched_nagastone_mossy");
Block.createBlock("etched_nagastone_mossy", [{
	name: "Etched Nagastone Mossy",
	texture: [["etched_nagastone_mossy", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.etched_nagastone_mossy, 2);
ToolAPI.registerBlockMaterial(BlockID.etched_nagastone_mossy, "stone", 2, true);



IDRegistry.genBlockID("etched_nagastone_weathered");
Block.createBlock("etched_nagastone_weathered", [{
	name: "Etched Nagastone Weathered",
	texture: [["etched_nagastone_weathered", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.etched_nagastone_weathered, 2);
ToolAPI.registerBlockMaterial(BlockID.etched_nagastone_weathered, "stone", 2, true);

IDRegistry.genBlockID("etched_nagastone");
Block.createBlock("etched_nagastone", [{
	name: "Etched Nagastone",
	texture: [["etched_nagastone", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.etched_nagastone, 2);
ToolAPI.registerBlockMaterial(BlockID.etched_nagastone, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_mossy");
Block.createBlock("maze_stone_mossy", [{
	name: "Maze Stone Mossy",
	texture: [["maze_stone_mossy", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_mossy, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_mossy, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_mosaic");
Block.createBlock("maze_stone_mosaic", [{
	name: "Maze Stone Mosaic",
	texture: [["maze_stone_mosaic", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_mosaic, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_mosaic, "stone", 2, true);

IDRegistry.genBlockID("mazestone_large_brick");
Block.createBlock("mazestone_large_brick", [{
	name: "Mazestone Large Brick",
	texture: [["mazestone_large_brick", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.mazestone_large_brick, 30);
ToolAPI.registerBlockMaterial(BlockID.mazestone_large_brick, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_border");
Block.createBlock("maze_stone_border", [{
	name: "Maze Stone Border",
	texture: [["maze_stone_border", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_border, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_border, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_cracked");
Block.createBlock("maze_stone_cracked", [{
	name: "Maze Stone Cracked",
	texture: [["maze_stone_cracked", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_cracked, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_cracked, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_brick");
Block.createBlock("maze_stone_brick", [{
	name: "Maze Stone Brick",
	texture: [["maze_stone_brick", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_brick, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_brick, "stone", 2, true);





IDRegistry.genBlockID("maze_stone_decorative");
Block.createBlock("maze_stone_decorative", [{
	name: "Maze Stone Decorative",
    texture: [["maze_stone_top", 0],
                  ["maze_stone_top", 0],
                  ["maze_stone_decorative", 0],
                  ["maze_stone_decorative", 0],
                  ["maze_stone_decorative", 0],
                  ["maze_stone_decorative", 0]],
   inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_decorative, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_decorative, "stone", 2, true);


IDRegistry.genBlockID("maze_stone_chiseled");
Block.createBlock("maze_stone_chiseled", [{
	name: "Maze Stone Chiseled",
    texture: [["maze_stone_top", 0],
                  ["maze_stone_top", 0],
                  ["maze_stone_chiseled", 0],
                  ["maze_stone_chiseled", 0],
                  ["maze_stone_chiseled", 0],
                  ["maze_stone_chiseled", 0]],
   inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_chiseled, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_chiseled, "stone", 2, true);


IDRegistry.genBlockID("underbrick_floor");
Block.createBlock("underbrick_floor", [{
	name: "Underbrick Floor",
	texture: [["underbrick_floor", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.underbrick_floor, 2);
ToolAPI.registerBlockMaterial(BlockID.underbrick_floor, "stone", 2, true);

	IDRegistry.genBlockID("underbrick_mossy");
Block.createBlock("underbrick_mossy", [{
	name: "Underbrick Mossy",
	texture: [["underbrick_mossy", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.underbrick_mossy, 2);
ToolAPI.registerBlockMaterial(BlockID.underbrick_mossy, "stone", 2, true);

	//huge_lilypad//
	
	
IDRegistry.genItemID("huge_lilypad");
Item.createItem("huge_lilypad", "Huge Lilypad", {name: "huge_lilypad", meta: 0}, {stack: 64});
IDRegistry.genBlockID("huge_lilypad"); 
 Block.createBlock("huge_lilypad", [{name: "huge_lilypad", texture: [["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0]], inCreative: true}], BLOCK_TYPE_LEAVES);
const huge_lilypad = new ICRender.CollisionShape();
huge_lilypad.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.huge_lilypad, 0, huge_lilypad);
Block.setShape(BlockID.huge_lilypad, 0, 0, 0, 1, 1/16, 1, 0);
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.huge_lilypad){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.huge_lilypad, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});
Block.registerDropFunction(BlockID.huge_lilypad, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.huge_lilypad, 1, 0]);
	return drop;
});
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if(dimensionId== TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
if(Math.random() < 0.3){
coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.huge_lilypad, 0);
} 
} 
}
});
	
	
	
	
	
	
	




// file: Core/Block/flowers.js




IDRegistry.genItemID("flower1");
Item.createItem("flower1", "Двойной красный гладиолус", {name: "flower1", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower1"); 
 Block.createBlock("flower1", [{name: "Голубой цветок", texture: [["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower1", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower1", 0);
render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID.flower1, -1, render);
Block.setBlockShape(BlockID.flower1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower1){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower2");
Item.createItem("flower2", "Аконит", {name: "flower2", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower2"); 
 Block.createBlock("flower2", [{name: "Голубой цветок", texture: [["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower2", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower2", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower2, -1, render);
Block.setBlockShape(BlockID.flower2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower2){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});
  
IDRegistry.genItemID("flower3");
Item.createItem("flower3", "Двойной оранжевый космос", {name: "flower3", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower3"); 
  Block.createBlock("flower3", [{name: "Голубой цветок", texture: [["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower3", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower3", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower3, -1, render);
Block.setBlockShape(BlockID.flower3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower3){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower4");
Item.createItem("flower4", "Алое", {name: "flower4", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower4"); 
  Block.createBlock("flower4", [{name: "Голубой цветок", texture: [["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower4", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower4", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower4, -1, render);
Block.setBlockShape(BlockID.flower4, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower4){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower5");
Item.createItem("flower5", "Желтый мак", {name: "flower5", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower5"); 
  Block.createBlock("flower5", [{name: "Голубой цветок", texture: [["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower5", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower5", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower5, -1, render);
Block.setBlockShape(BlockID.flower5, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower5){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower6");
Item.createItem("flower6", "Эхинацея", {name: "flower6", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower6"); 
  Block.createBlock("flower6", [{name: "Голубой цветок", texture: [["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower6", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower6", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower6, -1, render);
Block.setBlockShape(BlockID.flower6, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower6){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower7");
Item.createItem("flower7", "Двойное дно боярышника", {name: "flower7", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower7"); 
  Block.createBlock("flower7", [{name: "Голубой цветок", texture: [["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower7", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower7", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower7, -1, render);
Block.setBlockShape(BlockID.flower7, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower7){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower8");
Item.createItem("flower8", "Маковое голубое дно", {name: "flower8", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower8"); 
  Block.createBlock("flower8", [{name: "Голубой цветок", texture: [["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower8", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower8", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower8, -1, render);
Block.setBlockShape(BlockID.flower8, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower8){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower9");
Item.createItem("flower9", "Темное осто", {name: "flower9", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower9"); 
  Block.createBlock("flower9", [{name: "Голубой цветок", texture: [["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower9", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower9", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower9, -1, render);
Block.setBlockShape(BlockID.flower9, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower9){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x,coords.y,coords.z)==2){
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0);
}}});

Block.registerDropFunction(BlockID.flower1, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower1, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower2, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower2, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower3, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower3, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower4, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower4, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower5, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower5, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower6, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower6, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower7, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower7, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower8, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower8, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower9, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower9, 1, 0]);
	return drop;
});




// file: Core/Block/Leaves.js

IDRegistry.genBlockID("time_leaves");
Block.createBlock("time_leaves", [{
	name: "Time Leaves",
	texture: [["time_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("mining_leaves");
Block.createBlock("mining_leaves", [{
	name: "Mining Leaves",
	texture: [["mining_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("sorting_leaves");
Block.createBlock("sorting_leaves", [{
	name: "Sorting Leaves",
	texture: [["sorting_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("transformation_leaves");
Block.createBlock("transformation_leaves", [{
	name: "Transformation Leaves",
	texture: [["transformation_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);



/*
const time_leaves = new ICRender.CollisionShape();
time_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.time_leaves, 0, time_leaves);
Block.setShape(BlockID.time_leaves, 0, 0, 0, 1, 1/16, 1, 0);

const mining_leaves = new ICRender.CollisionShape();
mining_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mining_leaves, 0, mining_leaves);
Block.setShape(BlockID.mining_leaves, 0, 0, 0, 1, 1/16, 1, 0);

const sorting_leaves = new ICRender.CollisionShape();
sorting_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.sorting_leaves, 0, sorting_leaves);
Block.setShape(BlockID.sorting_leaves, 0, 0, 0, 1, 1/16, 1, 0);

const transformation_leaves = new ICRender.CollisionShape();
transformation_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.transformation_leaves, 0, transformation_leaves);
Block.setShape(BlockID.transformation_leaves, 0, 0, 0, 1, 1/16, 1, 0);
*/





// file: Core/Dimensions/THE TWILIGHT FOREST/Flat - Raised/Tw Flat.js

if(__config__.access("Dimensions Biome Flat") == true){
var TwilightForest = new Dimensions.CustomDimension("TwilightForest", 28427); 
TwilightForest.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 70, 
            yConversion: [[.0, 0], [0, 0]],
            material: {base: 1, surface: {id: 3, data: 0, width:4}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));


}












//overword//
/*
PortalUtils.newPortalBlock("twPortalOu", ["TwilightForest_portal", 0], {type: "h-plane", frameId: 2}, true);
var shapeTwOu = new PortalShape();
shapeTwOu.setPortalId(BlockID.twPortalOu);
shapeTwOu.setFrameIds(BlockID.twPortalOu);
shapeTwOu.setMinSize(2, 3);

Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTwOu.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTwOu.buildPortal(rect, false);      
   }
}); 
    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortalOu) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortalOu, [2]);
    }
}); 

Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortalOu && Player.getDimension().id != 0) {
    Dimensions.transfer(Player.get(), 0);
   shapeTwOu.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortalOu && Player.getDimension().id != 0)
       Dimensions.transfer(Player.get(), 0);   
      shapeTwOu.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});
*/














/*
function setStructureWorld(name, coords, rotation){
let stru = FileTools.ReadJSON(__dir__+"/objects/"+name);
for(let i in stru){
switch(rotation || 0){
case 0:
var x1 = stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 1:
var x1 = stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
case 2:
var x1 = -stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 3:
var x1 = -stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
}
World.setBlock(x1+coords.x, y1+coords.y, z1+coords.z, stru[i].id, stru[i].data);
}
}




Callback.addCallback("PreProcessChunk", function(chunkX, chunkZ, random, dimension){
if(dimension == TwilightForest.id){
    for(let i = 0;i <= random.nextInt(14)+2;i++){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(4+i), 96, chunkZ*16 + random.nextInt(4+i));
if(World.getBlock(coords.x, coords.y+1, coords.z).id==0)World.setBlock(coords.x, coords.y+1, coords.z, 31, random.nextInt(2));
}
let r = random.nextInt(1000);
if(r == 1){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
Utility.setStruc("structure2", coords);
gen.fillChest(coords.x, coords.y, coords.z);
}else if(r <= 3){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
DungeonCore.setStructure("structure1", coords.x, coords.y, coords.z);
gen.fillChest(coords.x, coords.y+2, coords.z);
}else if(r <= 8){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("cottage.json", coords, 0);
}else if(r <= 30){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("chest.json", coords, 0);
gen.fillChestSid(coords.x, coords.y+8, coords.z, random);
}else if(r <= 830){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("oak_"+(random.nextInt(1)+1)+".json", coords, random.nextInt(3));
}
}
});
*/







// file: Core/Dimensions/THE TWILIGHT FOREST/Flat - Raised/Tw Raised.js

if(__config__.access("Dimensions Biome Flat") == false){
var TwilightForest   = new Dimensions.CustomDimension("TwilightForest", 2006); 
let biomeTF = Dimensions.newGenerator({
    layers: [
        {
            minY: 2, 
            maxY: 75, 
            yConversion: [[0, 0]],
            material: {base: 9}
        },
        {
            minY: 0, 
            maxY: 82, 
            yConversion: [[.7, 1], [1, -0.5]],
            material: {base: 1, surface: {id: 3, data: 0, width:3}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        },
        {
            minY: 2, 
            maxY: 4, 
            yConversion: [[.7, 1]],
            material: {base: 7}
        },
    ]
});
TwilightForest.setGenerator(biomeTF);
}












//overword//
/*
PortalUtils.newPortalBlock("twPortalOu", ["TwilightForest_portal", 0], {type: "h-plane", frameId: 2}, true);
var shapeTwOu = new PortalShape();
shapeTwOu.setPortalId(BlockID.twPortalOu);
shapeTwOu.setFrameIds(BlockID.twPortalOu);
shapeTwOu.setMinSize(2, 3);

Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTwOu.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTwOu.buildPortal(rect, false);      
   }
}); 
    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortalOu) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortalOu, [2]);
    }
}); 

Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortalOu && Player.getDimension().id != 0) {
    Dimensions.transfer(Player.get(), 0);
   shapeTwOu.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortalOu && Player.getDimension().id != 0)
       Dimensions.transfer(Player.get(), 0);   
      shapeTwOu.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});
*/














/*
function setStructureWorld(name, coords, rotation){
let stru = FileTools.ReadJSON(__dir__+"/objects/"+name);
for(let i in stru){
switch(rotation || 0){
case 0:
var x1 = stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 1:
var x1 = stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
case 2:
var x1 = -stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 3:
var x1 = -stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
}
World.setBlock(x1+coords.x, y1+coords.y, z1+coords.z, stru[i].id, stru[i].data);
}
}




Callback.addCallback("PreProcessChunk", function(chunkX, chunkZ, random, dimension){
if(dimension == TwilightForest.id){
    for(let i = 0;i <= random.nextInt(14)+2;i++){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(4+i), 96, chunkZ*16 + random.nextInt(4+i));
if(World.getBlock(coords.x, coords.y+1, coords.z).id==0)World.setBlock(coords.x, coords.y+1, coords.z, 31, random.nextInt(2));
}
let r = random.nextInt(1000);
if(r == 1){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
Utility.setStruc("structure2", coords);
gen.fillChest(coords.x, coords.y, coords.z);
}else if(r <= 3){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
DungeonCore.setStructure("structure1", coords.x, coords.y, coords.z);
gen.fillChest(coords.x, coords.y+2, coords.z);
}else if(r <= 8){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("cottage.json", coords, 0);
}else if(r <= 30){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("chest.json", coords, 0);
gen.fillChestSid(coords.x, coords.y+8, coords.z, random);
}else if(r <= 830){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("oak_"+(random.nextInt(1)+1)+".json", coords, random.nextInt(3));
}
}
});
*/







// file: Core/Dimensions/THE TWILIGHT FOREST/Portal.js


PortalUtils.newPortalBlock("twPortal", ["TwilightForest_portal", 0], {type: "h-plane", frameId: 2}, true);
var shapeTw = new PortalShape();
shapeTw.setPortalId(BlockID.twPortal);
shapeTw.setFrameIds(BlockID.twPortal);
shapeTw.setMinSize(2, 3);
Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTw.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTw.buildPortal(rect, false);      
   }
}); 
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortal, [2]);
    }
}); 
Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != TwilightForest.id) {
    Dimensions.transfer(Player.get(), TwilightForest.id);
   shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != TwilightForest.id)
       Dimensions.transfer(Player.get(), TwilightForest.id);   
      shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});




//
Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==264 && block.id== BlockID.twBlockPortal) {
 
 
  World.setBlock(coords.x+1, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z, 2, 0);

World.setBlock(coords.x, coords.y, coords.z, BlockID.twPortal, 0);
World.setBlock(coords.x, coords.y-1, coords.z, 0, 0);
World.setBlock(coords.x-1, coords.y, coords.z, BlockID.twPortal, 0);
World.setBlock(coords.x-1, coords.y-1, coords.z, 0, 0);
World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.twPortal, 0);
World.setBlock(coords.x-1, coords.y-1, coords.z-1, 0, 0);
World.setBlock(coords.x, coords.y, coords.z-1, BlockID.twPortal, 0);
World.setBlock(coords.x, coords.y-1, coords.z-1, 0, 0);

Entity.spawn(coords.x, coords.y+1, coords.z, 93); 
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
}
});













// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Town.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId== TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
	World.setBlock(coords.x,coords.y,  coords.z, 2, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.hexibiscus, 0);
	} 
} 
}
});




Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.007){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
	 World.setBlock(coords.x,coords.y,  coords.z+1, 4, 0);
World.setBlock(coords.x+1,coords.y,  coords.z+1, 4, 0);  
World.setBlock(coords.x-1,coords.y,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+3, 4, 0);

World.setBlock(coords.x,coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x,coords.y+2, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+3, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+4, coords.z, 97, 3);
World.setBlock(coords.x,coords.y+5, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+5, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+6, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+7, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+8, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+10, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+11, coords.z, 97, 2);
World.setBlock(coords.x,coords.y+12, coords.z, 97, 2);

World.setBlock(coords.x-1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+3,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x-1,coords.y+5,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+6,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z+4, 101, 0);  

World.setBlock(coords.x-1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z+4, 101, 0);  
//СОНГЫ ЭТАЖ
World.setBlock(coords.x+2,coords.y+11,  coords.z, 48, 0);  
World.setBlock(coords.x+2,coords.y+12,  coords.z, 48, 0);  

World.setBlock(coords.x-2,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z, 97, 2);  

World.setBlock(coords.x+2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-1,coords.y+10,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+3, 4, 0);

//лестница
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 4, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z+2, 4, 0);
World.setBlock(coords.x,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+4,  coords.z+2, 4, 0);
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+6,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+7,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+8,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+9,  coords.z+1, 4, 0);
	} 
} 
}
});





// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Swammer.js


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId== TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.008){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){
	World.setBlock(coords.x+5, coords.y, coords.z+3, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z+2, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z+1, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z-1, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z-2, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z-3, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z+4, 4, 0);
//
World.setBlock(coords.x+4, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x+2, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x+1, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-1, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-2, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-3, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-4, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z-4, 4, 0);
//
World.setBlock(coords.x-5, coords.y, coords.z-3, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z-2, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z-1, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+1, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+2, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+3, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+4, 4, 0);
//
World.setBlock(coords.x-4, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x-3, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x-2, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x-1, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+1, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+2, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+3, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+4, coords.y, coords.z+4, 4, 0);
//
World.setBlock(coords.x, coords.y, coords.z-2, 4, 0);
World.setBlock(coords.x, coords.y, coords.z-1, 4, 0);
World.setBlock(coords.x, coords.y, coords.z, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+1, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+2, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+3, 4, 0);




	
	
	
	World.setBlock(coords.x+5, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+3, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+2, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+1, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-1, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-2, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-3, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+4, 4, 0);
//
World.setBlock(coords.x+4, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x+2, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-1, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-2, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-3, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-4, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-4, 4, 0);
//
World.setBlock(coords.x-5, coords.y+1, coords.z-3, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-2, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-1, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+1, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+2, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+3, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+4, 4, 0);
//
World.setBlock(coords.x-4, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x-3, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x-2, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x-1, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+2, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+3, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+4, coords.y+1, coords.z+4, 4, 0);
//
World.setBlock(coords.x, coords.y+1, coords.z-2, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+2, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+3, 4, 0)





;
//log
World.setBlock(coords.x+5, coords.y, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z-4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x, coords.y, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+1, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+2, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+3, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+4, coords.z-4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x-5, coords.y, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z-4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x-5, coords.y, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z+4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x, coords.y, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+1, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+2, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+3, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+4, coords.z+4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x+5, coords.y, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z+4, BlockID.twCanopyLog, 0);
//
//
World.setBlock(coords.x+5, coords.y+4, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z-3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x+4, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+3, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+3, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z-2, BlockID.tw_planks_canopy, 0);
	World.setBlock(coords.x, coords.y+4, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+4, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+4, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+4, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+3, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y+3, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+4, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+3, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x-5, coords.y+3, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x-4, coords.y+3, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y+3, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+3, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
	World.setBlock(coords.x+3, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
	World.setBlock(coords.x+4, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
//flash
World.setBlock(coords.x+1, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x+2, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x+3, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-4, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x+4, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x-1, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x-2, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x-3, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x-4, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);


World.setBlock(coords.x+1, coords.y+1, coords.z, 54, 0);
World.setBlock(coords.x-4, coords.y+1, coords.z+3, 54, 0);






	
	
	
	
} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Tree/Canopy.js




Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.5){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){
	World.setBlock(coords.x, coords.y-2, coords.z, BlockID.twCanopyLog, 0);
	World.setBlock(coords.x, coords.y-1, coords.z, BlockID.twCanopyLog, 0);
	World.setBlock(coords.x, coords.y, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+4, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+5, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+6, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+7, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+8, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+9, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+11, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+14, coords.z, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x, coords.y+11, coords.z+1, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+11, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+12, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+14, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+15, coords.z+2, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x+1, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+11, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z+1, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z+2, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x, coords.y+12, coords.z-1, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+12, coords.z-2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z-2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z-3, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+14, coords.z-3, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+15, coords.z-3, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x-1, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-2, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-2, coords.y+11, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-2, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+13, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+15, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z-1, BlockID.twCanopyLog, 0);
//leaves
World.setBlock(coords.x-5, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-4, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-3, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-2, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-2, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-1, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+1, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+4, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-6, 18, 0);

World.setBlock(coords.x+5, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-5, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-4, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-3, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-2, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-1, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+1, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+2, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+3, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+4, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+5, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+6, 18, 0);

World.setBlock(coords.x+5, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+4, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+3, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+1, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-1, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-2, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-3, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-4, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-5, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+6, 18, 0);

World.setBlock(coords.x-6, coords.y+13, coords.z+5, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+4, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+3, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+2, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+1, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-1, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-2, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-3, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-4, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-5, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-6, 18, 0);

World.setBlock(coords.x-5, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-4, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-2, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-1, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+1, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+3, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-5, 18, 0);

World.setBlock(coords.x+4, coords.y+14, coords.z-4, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-3, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-2, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-1, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+1, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+2, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+3, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+4, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+5, 18, 0);

World.setBlock(coords.x+3, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x+1, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-1, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-2, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-4, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+5, 18, 0);

World.setBlock(coords.x-5, coords.y+14, coords.z+4, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+3, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+2, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+1, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-1, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-2, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-3, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-4, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-5, 18, 0);

World.setBlock(coords.x-4, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x-3, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x-2, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x-1, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x+1, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x+2, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z-4, 18, 0);

World.setBlock(coords.x+3, coords.y+15, coords.z-3, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z-2, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z-1, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+1, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+2, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+3, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+4, 18, 0);

World.setBlock(coords.x+2, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x+1, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-1, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-2, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-3, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z+4, 18, 0);

World.setBlock(coords.x-4, coords.y+15, coords.z+3, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z+2, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z+1, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-1, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-2, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-3, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-4, 18, 0);
//flassh
World.setBlock(coords.x-3, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-3, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-2, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-1, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+1, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+2, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+3, 18, 0);




//World.setBlock(coords.x+1, coords.y+16, coords.z+1, 18, 0);
/*
World.setBlock(coords.x+2, coords.y+16, coords.z-+1 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-+2 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+3 18, 0);
*/
} 
} 
}
});





// file: Shared.js

ModAPI.registerAPI("TwilightForestAPI", {
    UIbuttons: UIbuttons,
    TwilightForest: TwilightForest,
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("TwilightForestAPI shared with name TwilightForestAPI", "API");




