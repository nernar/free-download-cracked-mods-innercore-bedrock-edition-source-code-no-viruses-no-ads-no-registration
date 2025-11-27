// file: main.js

//main

// file: header.js

//header

// file: blocks.js

IDRegistry.genBlockID("InvisibilityBLK");
IDRegistry.genBlockID("SpeedBLK");
IDRegistry.genBlockID("RegenBLK");
IDRegistry.genBlockID("FlyBLK");
IDRegistry.genBlockID("NightVBLK");
IDRegistry.genBlockID("AbsorptionBLK");
IDRegistry.genBlockID("HasteBLK");
IDRegistry.genBlockID("SaturBLK");
IDRegistry.genBlockID("JumpBBLK");
IDRegistry.genBlockID("StrengthBLK");

Block.createSpecialType(
    {
        base: 1,
        solid: true,
        destroytime: 10000,
        explosionres: 100,
        lightopacity: 1,
        renderlayer: 2
    },
    "BasicFX"
);

function FxBlock(id, fxname, texture)
{
    Block.createBlock(
        id,
        [
            {
                name: "Effect Block | " + fxname,
                texture: [[texture, 0]],
                inCreative: true
            },
            "BasicFX"
        ]
    );
}

function clckFxBlock(id, fx)
{
    Block.registerClickFunction(id, function(coords, item, block, player){
        if (Entity.getHealth(player) > 10)
        {
            Game.message("Get Effect!");
            Commands.exec("/effect @p " + fx + " 30 1 true")
            Entity.damageEntity(player, 10);
        }
        else
        {
            Game.message("Not enough HP!");
        }
    });
}

function recFxBlock(id, exitem)
{
    Recipes.addShaped({id: id, count: 1, data: 0}, [
        "a", 
        "x", 
        "a"
    ],  ['x', exitem, -1, 'a', VanillaBlockID.iron_block, -1]); 
}

FxBlock("InvisibilityBLK", "Invisibility", "inv_blk");
FxBlock("SpeedBLK", "Speed", "speed_blk");
FxBlock("RegenBLK", "Regeneration", "regen_blk");
FxBlock("FlyBLK", "Levitation", "fly_blk");
FxBlock("NightVBLK", "Night Vision", "nightv_blk");
FxBlock("AbsorptionBLK", "Absorption", "absorp_blk");
FxBlock("HasteBLK", "Haste", "haste_blk");
FxBlock("SaturBLK", "Saturation", "satur_blk");
FxBlock("JumpBBLK", "Jump Boost", "jumpb_blk");
FxBlock("StrengthBLK", "Strength", "strength_blk");

clckFxBlock("InvisibilityBLK", "invisibility");
clckFxBlock("SpeedBLK", "speed");
clckFxBlock("RegenBLK", "regeneration");
clckFxBlock("FlyBLK", "levitation");
clckFxBlock("NightVBLK", "night_vision");
clckFxBlock("AbsorptionBLK", "absorption");
clckFxBlock("HasteBLK", "haste");
clckFxBlock("SaturBLK", "saturation");
clckFxBlock("JumpBBLK", "jump_boost");
clckFxBlock("StrengthBLK", "strength");

recFxBlock(BlockID.InvisibilityBLK, VanillaItemID.iron_ingot);
recFxBlock(BlockID.SpeedBLK, VanillaBlockID.redstone_block);
recFxBlock(BlockID.RegenBLK, VanillaItemID.gold_ingot);
recFxBlock(BlockID.FlyBLK, VanillaItemID.diamond);
recFxBlock(BlockID.NightVBLK, VanillaItemID.iron_nugget);
recFxBlock(BlockID.AbsorptionBLK, VanillaItemID.emerald);
recFxBlock(BlockID.HasteBLK, VanillaBlockID.diamond_block);
recFxBlock(BlockID.SaturBLK, VanillaItemID.golden_apple);
recFxBlock(BlockID.JumpBBLK, VanillaItemID.rabbit_foot);
recFxBlock(BlockID.StrengthBLK, VanillaItemID.diamond_sword);