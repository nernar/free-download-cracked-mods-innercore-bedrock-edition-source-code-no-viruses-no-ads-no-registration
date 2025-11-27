//dependencies: palamod, palaJobs\\

IDRegistry.genItemID("pattern_socket");
Item.createItem("pattern_socket", "Socket Pattern", {name: "pattern_socket"});
Recipes.addShaped({id: ItemID.pattern_socket}, ["ab", "ba"], ["a", 5, -1, "b", 280, 0]);

IDRegistry.genBlockID("GrinderFrame");
Block.createBlock("GrinderFrame", [
    {name: "Grinder Frame", texture: [["GrinderFrame", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.GrinderFrame, "metal");

IDRegistry.genBlockID("GrinderCasing");
Block.createBlock("GrinderCasing", [
    {name: "Grinder Casing", texture: [["GrinderCasing", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.GrinderCasing, "metal");

IDRegistry.genBlockID("PaladiumGrinder");
Block.createBlockWithRotation("PaladiumGrinder", [
    {
        name: "Paladium Grinder",
        texture:
         [["PaladiumGrinder", 1], 
         ["PaladiumGrinder", 1], 
         ["PaladiumGrinder", 1], 
         ["PaladiumGrinder", 0], 
         ["PaladiumGrinder", 1], 
         ["PaladiumGrinder", 1]],
        inCreative: true
    }
]);

var PaladiumGrinder=new UI.StandartWindow({standart:{header:{text:{text:"Paladium Grinder"}},
inventory:{standart:true},
background:{standart:true}},
	drawing: [
		{type: "bitmap", x: 750, y: 600, bitmap: "grinder_line", scale: 4}
	],
elements:{}
});

TileEntity.registerPrototype(BlockID.PaladiumGrinder,{click: function(id){
if(World.getBlockID(this.x,this.y-1,this.z)==BlockID.GrinderFrame){
return false;
} else{
alert("grinder is not complete");
return true;
}
},
getGuiScreen:function(){return PaladiumGrinder}});