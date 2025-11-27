Recipes.addShaped({id: ItemID.goldcrown, count: 1, data: 0},
 [" a ",
 "aba",
 "a a"], ["a", ItemID.pixi_iron, 0, "b", ItemID.ironcrown, 0]);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.gener, count: 1, data: 0}, [
		"xcx",
		"cbc",
		"xcx"
	], ['x', 265, 0, 'c', ItemID.darkshard, 0, 'b', 331, 0]);
});

Recipes.addShaped({id: ItemID.fireballwand, count: 1, data: 0},
 [" cb",
 " ac",
 "a  "], ["a", 369, 0, "c", ItemID.burnplate, 0, "b", ItemID.burncor, 0]);

Recipes.addShaped({id: ItemID.berserker_chestplate, count: 1, data: 0},
 ["c c",
 "bcb",
 "cbc"], ["c", ItemID.bloodskale, 0, "b", ItemID.bloodbone, 0]);

Recipes.addShaped({id: ItemID.berserker_helmet, count: 1, data: 0},
 ["cbc",
 " c ",
 "cbc"], ["c", ItemID.bloodskale, 0, "b", ItemID.bloodbone, 0]);

Recipes.addShaped({id: ItemID.clearknife, count: 4, data: 0},
 ["  b",
 "cb ",
 "cc "], ["c", 265, 0, "b", 352, 0]);

Recipes.addShaped({id: ItemID.bloodknife, count: 2, data: 0},
 ["  c",
 " b ",
 "a  "], ["a", ItemID.bloodbone, 0, "c", ItemID.bloodskale, 0, "b", ItemID.clearknife, 0]);

Recipes.addShaped({id: ItemID.boltknife, count: 2, data: 0},
 [" cc",
 "cbc",
 "ac "], ["a", ItemID.oceanium, 0, "c", 351, 4, "b", ItemID.clearknife, 0]);

Recipes.addShaped({id: ItemID.blo0, count: 1, data: 0}, [
"   ",
" b",
"i  "
], ["i", ItemID.soul_vita, 0, "b", ItemID.bulatsword, -1] );

Recipes.addShaped({id: ItemID.blo1, count: 1, data: 0}, [
"ixi",
"cbc",
"ixi"
], ["b", ItemID.blo0, -1, "c", ItemID.soul_vita, 0, "i", 265, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blo2, count: 1, data: 0}, [
"iii",
"xbx",
"xxx"
], ["b", ItemID.blo1, -1, "i", ItemID.soul_vita, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blo3, count: 1, data: 0}, [
"ccc",
"xbx",
"cic"
], ["b", ItemID.blo2, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.blo4, count: 1, data: 0}, [
"xix",
"cbc",
"xix"
], ["b", ItemID.blo3, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.pixi_iron, count: 2, data: 0}, [
"i i",
"xix",
"i i"
], ["i", 265, 0, "x", ItemID.pixi, 0] );

Recipes.addShaped({id: ItemID.oceanium, count: 2, data: 0}, [
"xxx",
"ixi",
"xxx"
], ["i", 265, 0, "x", ItemID.otear, 0] );

Recipes.addShaped({id: ItemID.bulatsword, count: 2, data: 0}, [
" x ",
" x ",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_pickaxe, count: 2, data: 0}, [
"   ",
"xxx",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_axe, count: 2, data: 0}, [
"   ",
" xx",
" ix"
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_shovel, count: 2, data: 0}, [
"   ",
" x ",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_hoe, count: 2, data: 0}, [
"   ",
" xx",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.simplewings, count: 1, data: 0}, [
"x x",
"sts",
"x x"
], ["t", ItemID.sky_shard, 0, "x", ItemID.pixi, 0, "s", 334, 0] );

Recipes.addShaped({id: ItemID.ecristal, count: 1, data: 0}, [
" c ",
"cbc",
" c "
], ["b", 264, 0, "c", ItemID.pixi, 0] );

Recipes.addShaped({id: ItemID.etear, count: 1, data: 0}, [
"   ",
"cb ",
"   "
], ["b", 370, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.efeather, count: 1, data: 0}, [
"   ",
"cb",
"   "
], ["b", 288, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.eslime, count: 1, data: 0}, [
"   ",
"cb ",
"   "
], ["b", 341, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.enchanted_soul, count: 1, data: 0}, [
"   ",
"cbc",
" c "
], ["b", ItemID.soul_vita, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.hleather, count: 1, data: 0}, [
"iii",
"xix",
"iii"
], ["i", 334, 0, "x", 265, 0] );

Recipes.addShaped({id: ItemID.ushman_chestplate, count: 1, data: 0}, [
"i i",
"ibi",
"xix"
], ["b", ItemID.enchanted_soul, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.shelom_helmet, count: 1, data: 0}, [
"   ",
"xbx",
"i i"
], ["b", ItemID.etear, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.ichigi_boots, count: 1, data: 0}, [
"   ",
"xbx",
"i i"
], ["b", ItemID.efeather, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.latnitsa_leggings, count: 1, data: 0}, [
"xbx",
"i i",
"i i"
], ["b", ItemID.eslime, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.burnplate, count: 1, data: 0}, [
"cbc",
"bcb",
"cbc"
], ["b", ItemID.hellore, 0, "c", 265, 0] );

Recipes.addShaped({id: ItemID.burncor, count: 1, data: 0}, [
"cbc",
"bxb",
"cbc"
], ["b", ItemID.burnplate, 0, "c", 266, 0, "x", ItemID.burncr, 0] );

Recipes.addShaped({id: BlockID.burnblock, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.hellstonebar, 0]);

Recipes.addShaped({id: ItemID.hellstonebar, count: 8, data: 0}, [
 "   ",
 " c ",
 "   "
], ["c", BlockID.burnblock, 0]);

Recipes.addShaped({id: BlockID.ironfence, count: 2, data: 0}, [
 " c ",
 " c ",
 " c "
], ["c", 265, 0]);

Recipes.addShaped({id: BlockID.diamondfence, count: 3, data: 0}, [
 " c ",
 " c ",
 " c "
], ["c", 264, 0]);

Recipes.addShaped({id: BlockID.goldfence, count: 2, data: 0}, [
 " c ",
 " c ",
 " c "
], ["c", 266, 0]);

Recipes.addShaped({id: BlockID.portalblock, count: 3, data: 0}, [
 "cxc",
 "xbx",
 "cxc"
], ["b", ItemID.skull, 0, "c", ItemID.bloodbone, 0, "x", ItemID.bloodskale, 0]);

Recipes.addShaped({id: ItemID.skull, count: 1, data: 0}, [
 "ctc",
 "tbt",
 "ctc"
], ["b", ItemID.darkshard, 0, "c", 367, 0, "t", 352, 0]);

Recipes.addShaped({id: ItemID.normalwings, count: 1, data: 0}, [
 "ctc",
 "tbt",
 "ctc"
], ["b", ItemID.simplewings, -1, "c", ItemID.shardwings, 0, "t", ItemID.pixi, 0]);

Recipes.addShaped({id: BlockID.pixi_brick, count: 8, data: 0}, [
 "ccc",
 "cbc",
 "ccc"
], ["b", ItemID.pixi, 0, "c", 45, 0]);

Recipes.addShaped({id: ItemID.blop0, count: 1, data: 0}, [
"   ",
" b",
"i  "
], ["i", ItemID.soul_vita, 0, "b", ItemID.pixi_pickaxe, -1] );

Recipes.addShaped({id: ItemID.blop1, count: 1, data: 0}, [
"ixi",
"cbc",
"ixi"
], ["b", ItemID.blop0, -1, "c", ItemID.soul_vita, 0, "i", 265, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blop2, count: 1, data: 0}, [
"iii",
"xbx",
"xxx"
], ["b", ItemID.blop1, -1, "i", ItemID.soul_vita, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blop3, count: 1, data: 0}, [
"ccc",
"xbx",
"cic"
], ["b", ItemID.blop2, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.blop4, count: 1, data: 0}, [
"xix",
"cbc",
"xix"
], ["b", ItemID.blop3, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.siren_bok, count: 1, data: 0}, [
"xix",
"ibi",
"xix"
], ["b", 340, 0, "i", ItemID.pixi, 0, "x", ItemID.otear, 0] );

Recipes.addShaped({id: ItemID.key, count: 1, data: 0}, [
" ib",
"ici",
"ci "
], ["i", ItemID.darkshard, 0, "b", ItemID.skull, 0, "c", ItemID.drod, 0] );

Recipes.addShaped({id: ItemID.terribl_helmet, count: 1, data: 0}, [
"bib",
"i i",
"   "
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.terribl_chestplate, count: 1, data: 0}, [
"b b",
"ibi",
"bib"
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.terribl_leggings, count: 1, data: 0}, [
"ibi",
"b b",
"i i"
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.terribl_boots, count: 1, data: 0}, [
"   ",
"i i",
"b b"
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.drod, count: 1, data: 0}, [
"ibi",
" b ",
"ibi"
], ["i", 49, 0, "b", ItemID.darkshard, 0] );