let arr = [];
let Ritual = {
    lvl1: function(result, craft, description){
    arr.push({r: result, c:craft,  d:description});
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        
        if(item.id == ItemID.bookk){
        var b = BlockSource.getDefaultForActor(player);
        if(b.getBlockId(coords.x, coords.y, coords.z) == BlockID.rityalPedestal){
            if(b.getBlockId(coords.x+2, coords.y, coords.z+2) == BlockID.rityalPedestal){
                if(b.getBlockId(coords.x-2, coords.y, coords.z+2) == BlockID.rityalPedestal){
                     if(b.getBlockId(coords.x+2, coords.y, coords.z-2) == BlockID.rityalPedestal){
                         if(b.getBlockId(coords.x-2, coords.y, coords.z-2) == BlockID.rityalPedestal){
        if(b.getBlockId(coords.x+3, coords.y, coords.z) == BlockID.rityalPedestal){
            if(b.getBlockId(coords.x-3, coords.y, coords.z) == BlockID.rityalPedestal){
                if(b.getBlockId(coords.x, coords.y, coords.z+3) == BlockID.rityalPedestal){
                     if(b.getBlockId(coords.x, coords.y, coords.z-3) == BlockID.rityalPedestal){ 
    if(TileEntity.getTileEntity(coords.x+2, coords.y, coords.z+2, b).data.item.id == craft.item1){
    if(TileEntity.getTileEntity(coords.x-2, coords.y, coords.z+2, b).data.item.id == craft.item1){
    if(TileEntity.getTileEntity(coords.x+2, coords.y, coords.z-2, b).data.item.id == craft.item1){
    if(TileEntity.getTileEntity(coords.x-2, coords.y, coords.z-2, b).data.item.id == craft.item1){
        if(TileEntity.getTileEntity(coords.x+3, coords.y, coords.z, b).data.item.id == craft.item2){
        if(TileEntity.getTileEntity(coords.x-3, coords.y, coords.z, b).data.item.id == craft.item2){
        if(TileEntity.getTileEntity(coords.x, coords.y, coords.z-3, b).data.item.id == craft.item2){
        if(TileEntity.getTileEntity(coords.x, coords.y, coords.z+3, b).data.item.id == craft.item2){
            if(TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).data.item.id <= 0){
        let d = MagicCore.getValue(player);
        if(d.Aspects>=description.aspects){
        if(d.magis>=description.magis){
            TileEntity.getTileEntity(coords.x, coords.y, coords.z, b).animation(result);
            TileEntity.getTileEntity(coords.x+3, coords.y, coords.z, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x-3, coords.y, coords.z, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x, coords.y, coords.z+3, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x, coords.y, coords.z-3, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x+2, coords.y, coords.z+2, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x-2, coords.y, coords.z+2, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x+2, coords.y, coords.z-2, b).destroyAnimation();
            TileEntity.getTileEntity(coords.x-2, coords.y, coords.z-2, b).destroyAnimation();
            d.Aspects -= description.aspects;
            if(Math.random()<=0.5){
                        if(d.AspectsNow + 500 <= d.AspectsMax){
                            d.AspectsNow+=500;
                        }else{
                            d.AspectsNow=d.AspectsMax;
                        }        
                        MagicCore.setParameters(player, d);   
    }
    }else{
        PlayerAC.message(player, Translation.translate("This ritual requires a minimum of magic ")+description.magis+Translation.translate(" level"));
    }
    }else{
PlayerAC.message(player, Translation.translate("This ritual requires a minimum ")+description.aspects+Translation.translate(" aspects"));
        
    }
   } 
    }
}
}
}
}
} 
} 
} 
                      }
                 } 
             } 
         }
                         }
                     }
                 } 
             } 
         }
        } 
    });
   }
};
Translation.addTranslation("This ritual requires a minimum of magic ", {ru: "Для этого ритуала нужно минимум magic "});
Translation.addTranslation(" level", {ru: " уровня"});
Translation.addTranslation("This ritual requires a minimum ", {ru: "Для этого ритуала нужно минимум "});
Translation.addTranslation(" aspects", {ru: " аспектов"});
ModAPI.addAPICallback("RecipeViewer", function(api){
    Callback.addCallback("PostLoaded", function(){
        let RV = api.Core;
        let recipeList = [];
        for(var i in arr){
            recipeList.push({
                magis: arr[i].d.magis,
                aspects: arr[i].d.aspects,
                input: [
                    {id: arr[i].c.item2, count: 0, data: 0},
                    {id: arr[i].c.item2, count: 0, data: 0},
                    {id: arr[i].c.item2, count: 0, data: 0},
                    {id: arr[i].c.item2, count: 0, data: 0},
                    {id: arr[i].c.item1, count: 0, data: 0},
                    {id: arr[i].c.item1, count: 0, data: 0},
                    {id: arr[i].c.item1, count: 0, data: 0},
                    {id: arr[i].c.item1, count: 0, data: 0}
                ],
                output: [
                    {id: arr[i].r.id, count: 1, data: arr[i].r.data}
                ]
            });
        }
        RV.registerRecipeType("ritual1", {
            title: "ритуал 1 уровня/ritul 1 lvl",
            contents: {
                icon: BlockID.rityalPedestal,
                params: {slot: "_default_slot_light"},
                drawing: [],
                elements: {
                    output0: {x: 440, y: 150, size: 120},
                    input0: {x: 440, y: 0, size: 120},
                    input1: {x: 440, y: 300, size: 120}, 
                    input2: {x: 590, y: 150, size: 120},
                    input3: {x: 290, y: 150, size: 120},
                    
                    input4: {x: 315, y: 25, size: 100},
                    input5: {x: 315, y: 300, size: 100},
                    input6: {x: 590, y: 25, size: 100},
                    input7: {x: 590, y: 300, size: 100},
                    text: {type: "text", x: 50, y: 450, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("text").onBindingUpdated("text", "magic: "+data.magis+", aspects: "+data.aspects);
            }
        });
    });
});
Callback.addCallback("PostLoaded", function (){
Ritual.lvl1({
    id: ItemID.Gem,
    data: 0
},{
    item1: ItemID.dustDiamond,
    item2: ItemID.breakGem
},{
    aspects: 500, 
    magis: 10
});
})