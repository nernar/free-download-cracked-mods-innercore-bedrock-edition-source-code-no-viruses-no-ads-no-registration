var cFuelEffPct = Config.cobbleFurnaceFuelEff
var cRecipesEffPct = Config.cobbleFurnaceRecEff
var cMaxTemp = Config.cobbleFurnaceMaxTemp
var cTimer = Config.cobbleFurnaceTimer

//mechs
IDRegistry.genBlockID("compactedfurnace");
Block.createBlockWithRotation("compactedfurnace", [
	{name: "Cobb furnace", texture: [["compacted_stone", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ], ["furnace", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.compactedfurnace, "stone");
Block.setDestroyLevel(BlockID.compactedfurnace, 2);
ToolAPI.registerBlockMaterial(BlockID.compactedfurnace, "stone", 2, true);
MachineRenderer.setStandartModel(BlockID.compactedfurnace, [["compacted_stone", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ], ["furnace", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ]], true)
MachineRenderer.registerRenderModel(BlockID.compactedfurnace, 0, [["compacted_stone", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ], ["furnace", 1], ["compacted_stone", 0 ], ["compacted_stone", 0 ]], true)
	
IDRegistry.genBlockID("compactedcobblestone");
Block.createBlock("compactedcobblestone", [
{name: "Cobb furnace block", texture: [["compacted_stone", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.compactedcobblestone, "stone");
Block.setDestroyLevel(BlockID.compactedcobblestone, 2);
ToolAPI.registerBlockMaterial(BlockID.compactedcobblestone, "stone", 2, true);

Block.registerDropFunction("compactedfurnace", function(coords, id, data, level){ 
	if(level>=1){
		return [[id, 1, data]]
	}
	return []
})

Block.registerDropFunction("compactedcobblestone", function(coords, id, data, level){ 
	if(level>=1){
		return [[id, 1, data]]
	}
	return []
})

var c = BlockID.compactedcobblestone;

var compactedfurnacestruct = [[
[-1, 0, 0, [c]],
[-1, 0, 1, [c]],
[-1, 0, 2, [c]],
[1, 0, 0, [c]],
[1, 0, 1, [c]],
[1, 0, 2, [c]],
[0, 0, 2, [c]],

[-1, 1, 1, [c]],
[1, 1, 1, [c]],
[0, 1, 2, [c]],
[0, 1, 0, [c]],

[-1, 2, 1, [c]],
[1, 2, 1, [c]],
[0, 2, 2, [c]],
[0, 2, 0, [c]],

[-1, 3, 1, [c]],
[1, 3, 1, [c]],
[0, 3, 2, [c]],
[0, 3, 0, [c]],

[-1, 4, 1, [c]],
[1, 4, 1, [c]],
[0, 4, 2, [c]],
[0, 4, 0, [c]],

[0, 0, 1, [0]],
[0, 1, 1, [0]],
[0, 2, 1, [0]],
[0, 3, 1, [0]],
[0, 4, 1, [0]],
[0, 5, 1, [0]]
]];

var cfguicon = {
	standart: {
		header:{
			text:{
				text: "Промышленная каменная печь"
			}
		},
		inventory: {standart: true},
		background: {standart:true}
	},
	drawing: [
		{type: "bitmap", bitmap:"fire_background", x:436, y:280, scale:3},
		{type: "bitmap", bitmap:"furnace_bar_background", x:460, y:200, scale: 4},
		{type: "bitmap", bitmap:"furnace_bar_background", x:610, y:200, scale: 4},
		{type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
	],
	elements:{
		"slot1":{type: "slot", x: 330, y: 200, size:60},
		"slot2":{type: "slot", x: 390, y: 200, size:60},
		"slot3":{type: "slot", x: 550, y:200, size:60, visual:true, bitmap:"geothermal_liquid_slot"},
		"slot4":{type: "slot", x: 700, y: 200, size:60},
		"slot5":{type: "slot", x: 760, y: 200, size:60},
		"slot6":{type: "slot", x: 360, y: 270, size:60},
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
}

var cfgui = new UI.StandartWindow(cfguicon);

var compactedfurnacecon = FurnaceTemplate(cFuelEffPct, cMaxTemp, cRecipesEffPct, cfgui, cTimer)
MAPI.Rotate(compactedfurnacestruct);
MAPI.Register(compactedfurnacecon, compactedfurnacestruct);
TileEntity.registerPrototype(BlockID.compactedfurnace, compactedfurnacecon); 