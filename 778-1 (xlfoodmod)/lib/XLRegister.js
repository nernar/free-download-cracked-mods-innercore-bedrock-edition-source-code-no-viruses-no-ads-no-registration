LIBRARY({
    name:"XLRegister",
    version: 1,
    shared: false,
    api: "CoreEngine"
});

IMPORT("SoundAPI");

Block.createSpecialType({
    base: 59,
    opaque: false,
    rendertype: 6,
    lightopacity: 0,
    destroytime: 0,
    sound: "grass"
}, "crop");

Block.createSpecialType({
    base: 92,
    destroytime: 0.5,
    explosionres: 0.5,
    sound: "cloth"
}, "cake");

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GrassDrop(dropItem){
    Block.registerDropFunction(31, function (coords, id, data){
        return [[ItemID[dropItem], 1, 0]];
    });
}

function PlaySound(file, volume){
    var Sounds = new Sound();
    switch(randomInt(1, 4)){
        case 1: Sounds.setSource(file + "1.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 2: Sounds.setSource(file + "2.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 3: Sounds.setSource(file + "3.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 4: Sounds.setSource(file + "4.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
    }
}

let XLRegistry = {
    Items: function(id, name){
        IDRegistry.genItemID(id);
        Item.createItem(id, name, {name: id, meta: 0});
        Item.addCreativeGroup("XLItems", Translation.translate("XL Items"),[
            ItemID[id]
        ]);
    },
    Foods: function(id, name, food, stack){
        if(stack){
            IDRegistry.genItemID(id);
            Item.createFoodItem(id, name, {name: id, meta:0}, {food: food});
            Item.addCreativeGroup("XLFoods", Translation.translate("XL Foods"),[
                ItemID[id]
            ]);
        } else {
            IDRegistry.genItemID(id);
            Item.createFoodItem(id, name, {name: id, meta:0}, {food: food, stack: 64});
            Item.addCreativeGroup("XLFoods", Translation.translate("XL Foods"),[
               ItemID[id]
            ]);
            Item.registerUsingCompleteFunction(id, function(){
                Player.addItemToInventory(ItemID.bowl, 1, 0);
            });
            Item.onUsingComplete(ItemID[id]);
        }
    },
    Cakes: function(id, name, food, pizza){
        if(!pizza){
            //ITEM
            IDRegistry.genItemID(id);
            Item.createItem(id, name, {name: id, meta:0});
            Item.addCreativeGroup("XLFoods", Translation.translate("XL Foods"),[
                ItemID[id]
            ]);
            //BLOCK
            IDRegistry.genBlockID(id);
            Block.createBlock(id, [
                {name: name, texture: [[id + "_bottom", 0], [id + "_top", 0], [id + "_side", 0]], inCreative: false}
            ], "cake");
            Block.setShape(BlockID[id], 0.0625, 0, 0.0625, 0.9375, 0.5, 0.9375);
            Block.registerDropFunction(id, function (coords, id, data){
                return null;
            });
            for(var i = 1; i <= 6; i++){
                let Id = id + i;
                IDRegistry.genBlockID(Id);
                Block.createBlock(Id, [
                    {name: Id, texture: [[id + "_bottom", 0], [id + "_top", 0], [id + "_side", 0], [id + "_side", 0], [id + "_inner", 0], [id + "_side", 0]], inCreative: false}
                ], "cake");
                Block.setShape(BlockID[Id], 0.0625*(2*i+1), 0, 0.0625, 0.9375, 0.5, 0.9375);
                Block.registerDropFunction(Id, function (coords, id, data){
                    return null;
                });
            };
            Callback.addCallback("ItemUse", function(coords, item, block){
                let c = coords;
                let hunger = Player.getHunger();
                if(item.id == ItemID[id]){
                    World.setBlock(c.x, c.y+1, c.z, BlockID[id], 0);
                    PlaySound("cloth", 0.5);
                    Player.decreaseCarriedItem(1);
                }
                if(hunger < 20){
                    if(block.id == BlockID[id]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "1"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "1"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "2"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "2"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "3"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "3"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "4"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "4"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "5"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "5"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "6"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "6"]){
                        World.setBlock(c.x, c.y, c.z, 0, 0);
                        Player.setHunger(hunger + food / 7);
                    }
                }
            });
        } else {
            //ITEM
            IDRegistry.genItemID(id);
            Item.createItem(id, name, {name: id, meta:0});
            Item.addCreativeGroup("XLFoods", Translation.translate("XL Foods"),[
                ItemID[id]
            ]);
            //BLOCK
            IDRegistry.genBlockID(id);
            Block.createBlock(id, [
                {name: name, texture: [[id + "_bottom", 0], [id + "_top", 0], [id + "_side", 0]], inCreative: false}
            ], "cake");
            Block.setShape(BlockID[id], 0.0625, 0, 0.0625, 0.9375, 0.1875, 0.9375);
            Block.registerDropFunction(id, function (coords, id, data){
                return null;
            });
            for(var i = 1; i <= 6; i++){
                let Id = id + i;
                IDRegistry.genBlockID(Id);
                Block.createBlock(Id, [
                    {name: Id, texture: [[id + "_bottom", 0], [id + "_top", 0], [id + "_side", 0], [id + "_side", 0], [id + "_inner", 0], [id + "_side", 0]], inCreative: false}
                ], "cake");
                Block.setShape(BlockID[Id], 0.0625*(2*i+1), 0, 0.0625, 0.9375, 0.1875, 0.9375);
                Block.registerDropFunction(Id, function (coords, id, data){
                    return null;
                });
            };
            Callback.addCallback("ItemUse", function(coords, item, block){
                let c = coords;
                let hunger = Player.getHunger();
                if(item.id == ItemID[id]){
                    World.setBlock(c.x, c.y+1, c.z, BlockID[id], 0);
                    PlaySound("cloth", 0.5);
                    Player.decreaseCarriedItem(1);
                }
                if(hunger < 20){
                    if(block.id == BlockID[id]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "1"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "1"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "2"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "2"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "3"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "3"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "4"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "4"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "5"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "5"]){
                        World.setBlock(c.x, c.y, c.z, BlockID[id + "6"], 0);
                        Player.setHunger(hunger + food / 7);
                    } else if(block.id == BlockID[id + "6"]){
                        World.setBlock(c.x, c.y, c.z, 0, 0);
                        Player.setHunger(hunger + food / 7);
                    }
                }
            });
        }
    },
    Seeds: function(id, name, age, food){
        if(food){
            IDRegistry.genItemID(id);
            Item.createFoodItem(id, name, {name: id, meta:0}, {food: 1});
            Item.addCreativeGroup("XLSeeds", Translation.translate("XL Seeds"),[
                ItemID[id]
            ]);
        } else {
            IDRegistry.genItemID(id + "_seeds");
            Item.createItem(id + "_seeds", name, {name: id + "_seeds", meta: 0});
            Item.addCreativeGroup("XLSeeds", Translation.translate("XL Seeds"),[
                ItemID[id + "_seeds"]
            ]);
        }
        //BLOCK
        for(var i = 0; i <= age; i++){
            let Id = id + "_plant_stage" + i;
            IDRegistry.genBlockID(Id);
            Block.createBlock(Id, [
                {name: Id, texture: [[Id, 0]], inCreative: false}
            ], "crop");
            Block.setBlockShape(BlockID[Id], {x: 0, y: 0, z: 0}, {x: 1, y: 0.001, z: 1});
            BlockRenderer.addRenderCallback(Id, function (api, coords){	
                api.renderBoxId(coords.x, coords.y, coords.z, 0.2499, 0.01, 0, 0.25, 0.99, 1, Id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.2499, 1, 0.99, 0.25, Id, 0);	
                api.renderBoxId(coords.x, coords.y, coords.z, 0.7499, 0.01, 0, 0.75, 0.99, 1, Id, 0);	
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.7499, 1, 0.99, 0.75, Id, 0);										
            });
            BlockRenderer.enableCustomRender(Id);
            if(i != age){
                Callback.addCallback("ItemUse", function(coords, item, block){ 
                    let c = coords;
                    if(item.id == 858 && block.id == BlockID[Id]){
                        Player.decreaseCarriedItem(1);
                        for (var i = 0; i < 16; i++) {
                            var px = c.x + Math.random();
                            var pz = c.z + Math.random();
                            var py = c.y + Math.random();
                            Particles.addParticle(37, px, py, pz, 0, 0, 0);
                        }
                        if(Math.random() <= 0.4){
                            World.setBlock(c.x, c.y, c.z, BlockID[id + "_plant_stage" + age], 0);
                        }
                    }
                });
            } else if(i = age){
                Callback.addCallback("ItemUse", function(coords, item, block){ 
                    let c = coords;
                    if(item.id == 858 && block.id == BlockID[Id]){
                        World.setBlock(c.x, c.y, c.z, BlockID[Id], 0);
                    }
                });
            }
        }
    },
    Drinks: function(id, name, food, eatid, effects, time){
        IDRegistry.genItemID(id);
        Item.createFoodItem(id, name, {name: id, meta:0}, {food: food});
        Item.addCreativeGroup("XLFoods", Translation.translate("XL Foods"),[
            ItemID[id]
        ]);
        Item.registerUsingCompleteFunction(id, function(){
            for(var keys in effects){
                Entity.addEffect(Player.get(), keys, effects[keys], time);
            }
            Player.addItemToInventory(ItemID[eatid], 1, 0);
        });
        Item.onUsingComplete(ItemID[id]);
    },
    Juices: function(id, name, food){
        IDRegistry.genItemID(id);
        Item.createFoodItem(id, name, {name: id, meta:0}, {food: food});
        Item.addCreativeGroup("XLFoods", Translation.translate("XL Foods"),[
            ItemID[id]
        ]);
        Item.registerUsingCompleteFunction(id, function(){
            Player.addItemToInventory(374, 1, 0);
        });
        Item.onUsingComplete(ItemID[id]);
    },
    Drops: function(block, age, seed, ripe){
        for(var i = 0; i <= age-1; i++){
            Block.registerDropFunction(block + i, function (coords, id, data){
                return [[ItemID[seed], 1, 0]];
            });
            Block.registerNeighbourChangeFunction(block + i, function (coords, block, changeCoords, region){
                if(region.getBlockId(coords.x, coords.y-1, coords.z) != 60){
                    World.destroyBlock(coords.x, coords.y, coords.z, true);
                }
            });
        }
        Block.registerDropFunction(block + age, function (coords, id, data){
            return [[ItemID[seed], randomInt(0, 3), 0], [ItemID[ripe], 1, 0]];
        });
        Block.registerNeighbourChangeFunction(block + age, function (coords, block, changeCoords, region){
            if(region.getBlockId(coords.x, coords.y-1, coords.z) != 60){
                World.destroyBlock(coords.x, coords.y, coords.z, true);
            }
        });
    },
    Grows: function(block, level){
        Block.setRandomTickCallback(BlockID[block + level], function(x, y, z, id, data, region) { 
            if(Math.random() < 0.2 && region.getLightLevel(x, y, z) >= 9){
                World.setBlock(x, y, z, BlockID[block + (level+1)], 0);
            }
        });
    },
    Plants: function(seed, blockId){
        Callback.addCallback("ItemUse", function(coords, item, block){ 
            let c = coords;
            if((item.id == ItemID[seed] && block.id == 60) && World.getBlockID(c.x, c.y+1, c.z) == 0){
                World.setBlock(c.x, c.y+1, c.z, BlockID[blockId + "0"], 0);
                PlaySound("grass", 0.5);
                Player.decreaseCarriedItem(1);
            }
        });
    },
    DropOnGrass: function(){
        switch(randomInt(1, 80)){
            case 1: GrassDrop("corn_seeds");
                    break;
            case 2: GrassDrop("onion");
                    break;
            case 3: GrassDrop("rice");
                    break;
            case 4: GrassDrop("strawberry_seeds");
                    break;
            case 5: GrassDrop("cucumber_seeds");
                    break;
            case 6: GrassDrop("lettuce_seeds");
                    break;
            case 7: GrassDrop("pepper_seeds");
                    break;
            case 8: GrassDrop("tomato_seeds");
                    break;
            case 9: GrassDrop("lemon_seeds");
                    break;
            case 10: GrassDrop("pineapple_seeds");
                    break;
            default: break;
        }
    },
    FurnaceRecipes: function(iId, rId, exp){
        if(isNaN(iId)){
            Recipes.addFurnace(ItemID[iId], ItemID[rId], 0);
        } else {
            Recipes.addFurnace(iId, ItemID[rId], 0);
        }
        Callback.addCallback("DestroyBlockStart", function(coords, block, player){
            if(block.id == 61 || block.id == 62){
                const contain = World.getContainer(coords.x, coords.y, coords.z);
                const result = contain.getSlot(2);
                if(result.id != 0){
                    Player.addItemToInventory(result.id, result.count, 0);
                    const orb = (exp*result.count)|0;
                    ToolAPI.dropOreExp(coords, orb, orb, true);
                    contain.setSlot(2, 0, 0, 0);
                } else {
                    return null;
                }
            }
        });
    }
}

EXPORT("XLRegistry", XLRegistry);