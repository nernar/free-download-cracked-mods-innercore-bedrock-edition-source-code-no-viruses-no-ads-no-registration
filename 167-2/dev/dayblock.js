IDRegistry.genBlockID("dayredblock");
Block.createBlockWithRotation("dayredblock", [{name: "time set day block", texture: [["daytime", 0], ["daytime", 0], ["daytime", 0], ["daytime", 0], ["daytime", 0], ["daytime", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.dayredblock, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 266, -1, 'a', 151, -1, 'c', 406, -1, 'b', 404, -1]);

TileEntity.registerPrototype(BlockID.dayredblock, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWorldTime(0) }
}});



IDRegistry.genBlockID("nighttime");
Block.createBlockWithRotation("nighttime", [{name: "time set night block", texture: [["nighttime", 0], ["nighttime", 0], ["nighttime", 0], ["nighttime", 0], ["nighttime", 0], ["nighttime", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.nighttime, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 263, -1, 'a', 151, -1, 'c', 406, -1, 'b', 404, -1]);

TileEntity.registerPrototype(BlockID.nighttime, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWorldTime(13800) }
}});



IDRegistry.genBlockID("weatherrain");
Block.createBlockWithRotation("weatherrain", [{name: "no work", texture: [["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0]], inCreative: true}], "opaque");

TileEntity.registerPrototype(BlockID.weatherrain, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWeather(4) }
}});



IDRegistry.genBlockID("weatherclear");
Block.createBlockWithRotation("weatherclear", [{name: "weather clear block", texture: [["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.weatherclear, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 123, -1, 'a', 251, -1, 'c', 325, 8, 'b', 404, -1]);

TileEntity.registerPrototype(BlockID.weatherclear, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWeather(1) }
}});

IDRegistry.genBlockID("grinder");
Block.createBlockWithRotation("grinder", [{name: "mob grinder", texture: [["grinder", 0], ["grinder", 0], ["grinder", 0], ["grinder", 0], ["grinder", 0], ["grinder", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.grinder, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 267, -1, 'a', 251, -1, 'c', 145, -1, 'b', 152, -1]);





var evilMobs = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];

TileEntity.registerPrototype(BlockID.grinder,{
	defaultValues: {
  damage: 100,
  range: 7
  },
redstone: function(params){ 
if(params.power >1){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){
Entity.damageEntity(ent, 100);
this.data.exp += 3;}}}}});

