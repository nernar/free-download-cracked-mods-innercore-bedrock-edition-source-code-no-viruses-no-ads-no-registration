    var pos = Player.getPosition()

var random = function(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
	if(floor > max){
		floor=floor-min;
		return floor;
	}
	return floor;
};

var BLOCK_TYPE_OLD_TREE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 1.9,
    explosionres: 1,
    opaque: true
});

var BLOCK_TYPE_ORE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3,
    opaque: true
}, "ore");

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

var BLOCK_TYPE_BASE = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 0.1,
    explosionres: 1,
    opaque: true
});