// [远古石砖]Ancient Bricks
IDRegistry.genBlockID("ancientBricks");
Block.createBlock("ancientBricks",[
    {name:"Ancient Bricks",texture:[["ancient_bricks",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.ancientBricks,"stone",1,true);
Apple.registerStoneBricks(BlockID.ancientBricks,2,0);
Block.setDestroyLevel("ancientBricks",1);

// [果石石砖]Apgem Bricks
IDRegistry.genBlockID("apgemBricks");
Block.createBlock("apgemBricks",[
    {name:"Apgem Bricks",texture:[["apgem_bricks",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.apgemBricks,"stone",1,true);
Apple.registerStoneBricks(BlockID.apgemBricks,4,0);
Block.setDestroyLevel("apgemBricks",1);

Callback.addCallback("PreLoaded",function(){
    Recipe.addRecipe("ApgemAltar",[{id:98                   ,count:1,data:-1}],[{id:BlockID.apgemBricks,count:1,data:0}],{energy:100});
    Recipe.addRecipe("ApgemAltar",[{id:BlockID.ancientBricks,count:1,data:0 }],[{id:BlockID.apgemBricks,count:1,data:0}],{energy:100});
});

// [镀金果石石砖]Gilded Apgem Bricks
IDRegistry.genBlockID("gildedApgemBricks");
Block.createBlock("gildedApgemBricks",[
    {name:"Gilded Apgem Bricks",texture:[["gilded_apgem_bricks",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.gildedApgemBricks,"stone",1,true);
Apple.registerStoneBricks(BlockID.gildedApgemBricks,6,0);
Block.setDestroyLevel("gildedApgemBricks",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.gildedApgemBricks,count:2,data:0},["ab","ba"],["a",266,0,"b",BlockID.apgemBricks,0]);
});