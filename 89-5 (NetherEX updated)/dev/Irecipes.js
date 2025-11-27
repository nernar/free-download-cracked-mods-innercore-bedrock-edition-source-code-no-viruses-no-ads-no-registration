Recipes.addShaped({id: ItemID.BackCryst, count: 1, data: 0}, [
 "oco",
 "cdc",
 "oco"
 ], ["d", ItemID.RimeCryst, 0, "c", ItemID.Amethyst, 0]);

Recipes.addFurnaceFuel(ItemID.SItem, 200);
Recipes.addFurnaceFuel(ItemID.Netherbrickf, 1200);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.WitherBoneBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Witherdust, 0]);

Recipes.addShaped({id: BlockID.WBoneBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: BlockID.PiNetherrack, count: 4, data: 0}, [
    "ooo",
    "oxx",
    "odd"
], ['x', BlockID.SSmNetherrack, 0, 'd', BlockID.SmNetherrack, 0]);

Recipes.addShaped({id: BlockID.SmNetherrack, count: 2, data: 0}, [
    "ooo",
    "ooo",
    "oxx"
], ['x', 87, 0]);

Recipes.addShaped({id: BlockID.SSmNetherrack, count: 2, data: 0}, [
    "ooo",
    "ooo",
    "oxx"
], ['x', BlockID.SmNetherrack, 0]);

Recipes.addShaped({id: BlockID.AmethystBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Amethyst, 0]);

Recipes.addShaped({id: BlockID.RimeBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.RimeCryst, 0]);

Recipes.addShaped({id: BlockID.NBf, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Netherbrickf, 0]);

Recipes.addShaped({id: BlockID.NBg, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickGl, 0]);

Recipes.addShaped({id: BlockID.NBi, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickIcy, 0]);

Recipes.addShaped({id: BlockID.NBl, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickLi, 0]);

//FUR
Recipes.addFurnace(88, BlockID.soulGlass, 0);
//FUREND
Recipes.addShaped({id: BlockID.BasaltBrick, count: 1, data: 0}, [
    "ooo",
    "oxx",
    "oxx"
], ['x', BlockID.BasaltBlock, 0]);

Recipes.addShaped({id: BlockID.BasaltSmooth, count: 2, data: 0}, [
    "ooo",
    "oxx",
    "oxx"
], ['x', BlockID.BasaltBrick, 0]);

Recipes.addShaped({id: BlockID.BasaltPillar, count: 4, data: 0}, [
    "ooo",
    "odo",
    "oxo"
], ['x', BlockID.BasaltBrick, 0,'d', BlockID.BasaltSmooth, 0]);

Recipes.addShaped({id: ItemID.convertorSilver, count: 1, data: 0}, [
 "vcv",
 "cdc",
 "vcv"
 ], ["d", ItemID.circuitBasic, 0, "v", ItemID.nuggetSilver, 0, "c", ItemID.cableSilver0, 0]);
 
Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
Recipes.addFurnace(BlockID.oreSilvern, ItemID.ingotSilver, 0);
Recipes.addFurnace(BlockID.oreSilvere, ItemID.ingotSilver, 0);
});