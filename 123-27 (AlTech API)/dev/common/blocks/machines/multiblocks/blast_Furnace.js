var bFuelEffPct = Config.blastFurnaceFuelEff
var bRecipesEffPct = Config.blastFurnaceRecEff
var bMaxTemp = Config.blastFurnaceMaxTemp
var bTimer = Config.blastFurnaceTimer

//mechs
IDRegistry.genBlockID("blastfurnace");
Block.createBlockWithRotation("blastfurnace", [
	{name: "Blast furnace", texture: [["blast_furnace_block", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ], ["blast_furnace", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blastfurnace, "stone");
Block.setDestroyLevel(BlockID.blastfurnace, 3);
ToolAPI.registerBlockMaterial(BlockID.blastfurnace, "stone", 3, true);
MachineRenderer.setStandartModel(BlockID.blastfurnace, [["blast_furnace_block", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ], ["blast_furnace", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ]], true)
MachineRenderer.registerRenderModel(BlockID.blastfurnace, 0, [["blast_furnace_block", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ], ["blast_furnace", 1], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ]], true)
	
IDRegistry.genBlockID("bronzeblock");
Block.createBlock("bronzeblock", [
	{name: "Blast furnace block", texture: [["blast_furnace_block", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bronzeblock, "stone");
Block.setDestroyLevel(BlockID.blastfurnace, 3);
ToolAPI.registerBlockMaterial(BlockID.bronzeblock, "stone", 3, true); 
	
Block.registerDropFunction("blastfurnace", function(coords, id, data, level){ 
	if(level>=2){
		return [[id, 1, data]]
	}
	return []
})
	
Block.registerDropFunction("bronzeblock", function(coords, id, data, level){ 
	if(level>=2){
		return [[id, 1, data]]
	}
	return []
})
	
var b = BlockID.bronzeblock;

var blastfurnacestruct = [[	
   [0, -1, 1, [b]], 
   [0, -1, 0, [b]],
   [0, -1, -1, [b]],
   
   [1, -1, 1, [b]],
   [1, -1, 0, [b]],
   [1, -1, -1, [b]],
   
   [2, -1, 1, [b]],
   [2, -1, 0, [b]],
   [2, -1, -1, [b]],
   
   [0, 0, 1, [b]], 
   [0, 0, -1, [b]],
   
   [1, 0, 1, [b]],
   [1, 0, 0, [0]],
   [1, 0, -1, [b]],
   
   [2, 0, 1, [b]],
   [2, 0, 0, [b]],
   [2, 0, -1, [b]],
   
   [0, 1, 1, [b]], 
   [0, 1, 0, [b]],
   [0, 1, -1, [b]],
   
   [1, 1, 1, [b]],
   [1, 1, 0, [0]],
   [1, 1, -1, [b]],
   
   [2, 1, 1, [b]],
   [2, 1, 0, [b]],
   [2, 1, -1, [b]],
   
   [0, 2, 1, [b]], 
   [0, 2, 0, [b]],
   [0, 2, -1, [b]],
   
   [1, 2, 1, [b]],
   [1, 2, 0, [0]],
   [1, 2, -1, [b]],
   
   [2, 2, 1, [b]],
   [2, 2, 0, [b]],
   [2, 2, -1, [b]]
]]

var bfgui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Доменная печь"
			},
color: android.graphics.Color.rgb(0x5a, 0x11, 0x00)
		},
		inventory: {
			standart: true
		},
		background: {
	  color: android.graphics.Color.rgb(0xa2, 0x3c, 0x00)
		}
	},
	drawing: [
        {type: "bitmap", bitmap:"fire_background", x:436, y:280, scale:3},
        {type: "bitmap", bitmap:"furnace_bar_background", x:460, y:200, scale: 4},
        {type: "bitmap", bitmap:"furnace_bar_background", x:610, y:200, scale: 4},
        {type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
    ],
	elements:{
        "slot1":{type: "slot", x: 330, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot2":{type: "slot", x: 390, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot3":{type: "slot", x: 550, y:200, size:60, visual:true, bitmap:"geothermal_liquid_slot"},
        "slot4":{type: "slot", x: 700, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot5":{type: "slot", x: 760, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot6":{type: "slot", x: 360, y: 270, size:60, bitmap:"BronzeSlot"},
        "progbar1":{type: "scale", x:460, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
        "progbar2":{type: "scale", x:610, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
        "fire":{type: "scale", x:436, y:280, direction:1, bitmap: "fire_scale", scale:3},
        "temp":{type: "text", x:480, y:300, width:30, height:10, text: ""},
        "struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
        "sec":{type: "text", x:500, y:100, width:8, height:3, text: ""},
        "needTemp":{type: "text", x:500, y:120, width:8, height:3, text: ""},
        "secLeft":{type: "text", x:500, y:140, width:8, height:3, text: ""},
        "result":{type: "text", x:500, y:160, width:8, height:3, text: ""},
    }
});

var blastfurnacecon = FurnaceTemplate(bFuelEffPct, bMaxTemp, bRecipesEffPct, bfgui, bTimer)
MAPI.Rotate(blastfurnacestruct);
MAPI.Register(blastfurnacecon, blastfurnacestruct);
TileEntity.registerPrototype(BlockID.blastfurnace, blastfurnacecon)