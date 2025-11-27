var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	opaque: true
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ // блок этого типа будет абсолютно прозрачен для света и сам будет слабо светиться
   lightlevel: 15,
   destroytime: 1
 });
 
 var BLOCK_TYPE_STAND = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	base: 5,
	opaque: true,
	lightlevel:15
});