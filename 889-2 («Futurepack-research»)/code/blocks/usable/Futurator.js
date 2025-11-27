/*
var Gen0mesh = new RenderMesh(); 
Gen0mesh.setBlockTexture("Futurator1",0); 
Gen0mesh.importFromFile(__dir__+"/models/Futurator.obj","obj",null); 
IDRegistry.genBlockID("future_generator"); 
Block.createBlock("future_generator", [ 
 {name: "Coal Generator", texture: [["Futurator1", 0],["Futurator1", 1],["Futurator1", 2],["Futurator1", 3],["Futurator1", 4],["Futurator1", 5]], inCreative: true} 
]); 
var Gen0render = new ICRender.Model(); 
Gen0render.addEntry(new BlockRenderer.Model(Gen0mesh)); 
BlockRenderer.setStaticICRender(BlockID.future_generator,0,Gen0render);

*/

var FuturatorMesh = new RenderMesh();
FuturatorMesh.setBlockTexture("Futurator1",0);
FuturatorMesh.importFromFile(__dir__+"/models/Futurator.obj","obj",null);
IDRegistry.genBlockID("future_generator");
Block.createBlock("future_generator", [
    {name: "Generator", texture: [["Futurator1", 0],["Futurator1", 0],["Futurator1", 0],["Futurator1", 0],["Futurator1", 0],["Futurator1", 0]], inCreative: true}
]);
var FuturatorRender = new ICRender.Model();
FuturatorRender.addEntry(new BlockRenderer.Model(FuturatorMesh));
BlockRenderer.setStaticICRender(BlockID.future_generator,0,FuturatorRender);


Recipes.addShaped({id: BlockID.future_generator, count: 1, data: 0},
	["iii", "spn", "ioi"],
	['i', 265, 0, 'n', ItemID.neon_ingot, 0, 'p', VanillaBlockID.piston, 0, 'o', VanillaBlockID.furnace, 0, 's', ItemID.coppercoil, 0]
);



let FutureGenUI = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Генератор будущего")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
   /*" {type: "button",x: 268,y: 190, bitmap: "coalGener",scale: 3.8},     {type: "button", x:550 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:690 ,y: 70, bitmap:"en_noy",scale : 3}*/
    ],
    elements:{
    	coaldraw:
    	{type:"slot",x:355,y:120,size:70, bitmap:"coalGener"},
    	energiaSlotiche:
    {type: "slot", x:268,y: 190, bitmap:"futockslot",scale : 3.8, direction: 1}, 
    	energy:    	{type:"scale",x:455,y:260,scale:70,direction:1,bitmap: "energiabar"},  Fire : {type: "scale", x:550 ,y: 70, bitmap:"fire_scale_1",scale : 3, direction: 1},slotcoal : {type: "slot", x:690,y: 70,size:70}, 
    	ELECTRIC: {type: "text", x: 565, y: 113, width: 100, height: 30, text: "Space Joule" },
    	coordsButton1: { 
type: "button", 
x: 300, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].x -= 1; 
alert(JSON.stringify("x: "+content.elements["coalGener"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].x += 1; 
alert(JSON.stringify("x: "+content.elements["coalGener"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].y += 1; 
alert(JSON.stringify("y: "+content.elements["coalGener"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].y -= 1; 
alert(JSON.stringify("y "+content.elements["coalGener"].y)); 
}}},
coordsButton5: { 
type: "button", 
x: 550, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].size -= 1; 
alert(JSON.stringify("size: "+content.elements["coalGener"].size)); 
}}},
coordsButton6: { 
type: "button", 
x: 550, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].size += 1; 
alert(JSON.stringify("size: "+content.elements["coalGener"].size)); 
}}}
    }
  }
);

TileEntity.registerPrototype(BlockID.future_generator, {
   useNetworkItemContainer: true,
   defaultValues: {
   },

   tick: function(container, window, content, data) {
      this.container.sendChanges();
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return FutureGenUI;
},
});
