Recipes.addShaped({id: ItemID.soulofthedeapths, count: 2, data: 0}, [
    "xaz",
    "sdf",
    "ghj"
], ['x', ItemID.goldred, 0, 'a', ItemID.obsidianore, 0, 'z', ItemID.flintclay, 0, 's', BlockID.clavel, 0, 'd', ItemID.diamondgold, 0, 'f', BlockID.cland, 0, 'g', ItemID.ironcoal, 0, 'h', BlockID.soulnetherrack, 0, 'j', ItemID.ironred, 0]);

Recipes.addShaped({id: ItemID.stickmesh, count: 1, data: 0}, [
    "xzx",
    "zzz",
    "xzx"
], ['x',5, 0, 'z', 280, 0]);

Recipes.addShaped({id: ItemID.sifterbasicfixed, count: 4, data: 0}, [
    "xzx",
    "zcz",
    "xzx"
], ['x',5, 0, 'z', 280, 0, 'c', ItemID.stickmesh, 0]);

Recipes.addShaped({id: ItemID.siftermodified, count: 1, data: 0}, [
    "xzx",
    "zcz",
    "xzx"
], ['x', 17, 0, 'z', 101, 0, 'c', ItemID.stickmesh, 0]);

Recipes.addShaped({id: 263, count: 2, data: 0}, [
    "xz"
], ['x', ItemID.ironcoal, 0, 'z', 263, 0]);

Recipes.addShaped({id: 263, count: 2, data: 1}, [
    "xz"
], ['x', ItemID.ironcoal, 0, 'z', 263, 1]);

Recipes.addShaped({id: 152, count: 1, data: 0}, [
    "xxz",
    "xx"
], ['x', 331, 0, 'z', ItemID.ironred, 0]);

Recipes.addShaped({id: 331, count: 3, data: 0}, [
    "x"
], ['x', ItemID.ironred, 0]);

Recipes.addShaped({id: ItemID.flintclay, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', BlockID.clavel, 0]);

Recipes.addShaped({id: 318, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', 13, 0]);

Recipes.addShaped({id: ItemID.obsidianore, count: 3, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', 49, 0]);

Recipes.addShaped({id: 152, count: 1, data: 0}, [
    " x ",
    "xzx"
], ['x', 331, 0, 'z', ItemID.goldred, 0]);

Recipes.addShaped({id: 331, count: 4, data: 0}, [
    " x "
], ['x', ItemID.goldred, 0]);

Recipes.addShaped({id: 266, count: 2, data: 0}, [
    " x "
], ['x', ItemID.goldenslag, 0]);

Recipes.addShaped({id: 331, count: 6, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', ItemID.goldred, 0]);

Recipes.addShaped({id: 49, count: 1, data: 0}, [
    "xx ",
    "xx "
], ['x', ItemID.obsidianore, 0]);

Recipes.addShaped({id: 264, count: 1, data: 0}, [
    "x"
], ['x', ItemID.diamondgold, 0]);

Recipes.addShaped({id: 331, count: 5, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', ItemID.ironred, 0]);

Recipes.addShaped({id: BlockID.clavel, count: 2, data: 0}, [
    "xax",
    "axa",
    "xax"
], ['x', 13, 0, 'a', 82, 0]);

Recipes.addShaped({id: BlockID.soulnetherrack, count: 8, data: 0}, [
    "xax",
    "axa",
    "xax"
], ['x', 87, 0, 'a', 88, 0]);

Recipes.addShaped({id: BlockID.nethercobble, count: 8, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['x', 4, 0, 'a', BlockID.kakkatzhan, 0]);

Recipes.addShaped({id: BlockID.netherstonebrick, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.netherstone, 0]);

Recipes.addShaped({id: BlockID.netherstonebrickglow, count: 8, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['x', BlockID.netherstonebrick, 0, 'a', 348, 0]);

Recipes.addShaped({id: BlockID.cland, count: 2, data: 0}, [
    "xax",
    "axa",
    "xax"
], ['x', 12, 0, 'a', 82, 0]);

//furnace

Recipes.addFurnace(ItemID.ironred, 265, 0);
Recipes.addFurnace(ItemID.ironcoal, 265, 0);
Recipes.addFurnace(ItemID.goldred, 266, 0);
Recipes.addFurnace(ItemID.diamondgold, ItemID.goldenslag, 0);
Recipes.addFurnace(BlockID.clayore, 337, 0);
Recipes.addFurnace(BlockID.soulnetherrack, BlockID.kakkatzhan, 0);
Recipes.addFurnace(BlockID.nethercobble, BlockID.netherstone, 0);
Recipes.addFurnace(BlockID.cland, BlockID.bricglass, 0);

//toolsCraft

Recipes.addShaped({id: ItemID.nethersword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.nethershovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.netherpik, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.netherax, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.netherscythe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addFurnaceFuel(ItemID.soulofthedeapths, 0, 12800);
Recipes.addFurnaceFuel(ItemID.ironcoal, 0, 1600);

Recipes.addShaped({id: ItemID.lapiditepulp, count: 2, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', ItemID.lapis_lotus, 0]);

Recipes.addShaped({id: VanillaItemID.lapis_lazuli, count: 1, data: 0}, [
    " a ",
    "aaa",
    " a "
], ['a', ItemID.lapiditepulp, 0]);

Recipes.addShaped({id: ItemID.reinforcedsword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedshovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedpickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedaxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedhoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.obsidianore, count: 4, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', 49, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: ItemID.flintclay, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', BlockID.clavel, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: 331, count: 6, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', ItemID.ironred, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: 318, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', 13, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: 331, count: 7, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', ItemID.goldred, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: ItemID.lapiditepulp, count: 2, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', ItemID.lapis_lotus, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});