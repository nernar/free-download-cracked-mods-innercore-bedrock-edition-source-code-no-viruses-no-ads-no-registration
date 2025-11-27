var primal_core = null
ModAPI.addAPICallback("primal_api", function(api){
  primal_core = api;
});
var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 42,
	destroytime: 3,
	opaque: true
});
var RYDA = Block.createSpecialType({
	base: 15,
	solid: true,
	destroytime: 4,
	opaque: true
});
var RYD = Block.createSpecialType({
	base: 16,
	solid: true,
	destroytime: 3.3,
	opaque: true
});
var BLOCK_TYPE_STAL = Block.createSpecialType({
	base: 42,
	destroytime: 4,
	opaque: true
});
var BLOCK_TYPE_RYBU = Block.createSpecialType({
	base: 42,
	destroytime: 15,
	opaque: true
});
var BLOCK_TYPE_RYB = Block.createSpecialType({
	base: 42,
	destroytime: 12,
	opaque: true
});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	base: 5,
	opaque: true,
	lightlevel:15
});
var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	destroytime: 2,
	opaque: true
});
var BLOCK_TYPE_LISTVA = Block.createSpecialType({
	base: 18,
	destroytime: 0.2,
	opaque: true
});
var BLOCK_TYPE_SAZHENETC = Block.createSpecialType({
	base: 6,
	destroytime: 0.1,
	rendertype: 0,
	opaque: true
});
var BLOCK_TYPE_KOKOS = Block.createSpecialType({
	base: 5,
	destroytime: 0.45,
	opaque: true
});
var BLOCK_TYPE_KAMEN = Block.createSpecialType({
	destroytime: 0.1,
	rendertype: 0,
	opaque: true
});
var BLOCK_TYPE_ZOLA = Block.createSpecialType({
	destroytime: 0.5,
	opaque: true
});