// [果石块]Granite Gem Block
IDRegistry.genBlockID("apgemBlock");
Block.createBlock("apgemBlock",[{name:"Apgem Block",texture:[["apgem_block",0]],inCreative:true}],"stone");
ToolAPI.registerBlockMaterial(BlockID.apgemBlock,"stone",1,true);
Block.setDestroyLevel("apgemBlock",1);

// [果石]Apgem
IDRegistry.genItemID("apgem");
Item.createItem("apgem","Apgem",{name:"apgem"});

Callback.addCallback("PreLoaded",function(){
    Recipe.addRecipe("ApgemAltar",[{id:ItemID.appleGreen,count:1,data:0}],[{id:ItemID.apgem,count:1,data:0}],{energy:800});
    Recipe.addRecipe("ApgemAltar",[{id:260              ,count:1,data:0}],[{id:ItemID.apgem,count:1,data:0}],{energy:800});
    
    Recipes.addShapeless({id:ItemID.apgem,count:9,data:0},[{id:BlockID.apgemBlock,data:0}]);
    Recipes.addShaped({id:BlockID.apgemBlock,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.apgem,0]);
});