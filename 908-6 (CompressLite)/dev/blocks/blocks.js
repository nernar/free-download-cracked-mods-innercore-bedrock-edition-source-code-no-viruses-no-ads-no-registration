//Compress Lite 0.4 Beta "Compact Update"



/*дубовые доски*/

var oak1 = ["planks_oak1", "planks_oak2", "planks_oak3", "planks_oak4", "planks_oak5", "planks_oak6", "planks_oak7", "planks_oak8"]
var oak2 = ["planks_oak1", "planks_oak2", "planks_oak3", "planks_oak4", "planks_oak5", "planks_oak6", "planks_oak7", "planks_oak8"]
var oak3 = ["planks_oak1", "planks_oak2", "planks_oak3", "planks_oak4", "planks_oak5", "planks_oak6", "planks_oak7", "planks_oak8"]
var oak4 = ["planks_oak1", "planks_oak2", "planks_oak3", "planks_oak4", "planks_oak5", "planks_oak6", "planks_oak7", "planks_oak8"]
var oak5 = ["planks_oak1", "planks_oak2", "planks_oak3", "planks_oak4", "planks_oak5", "planks_oak6", "planks_oak7", "planks_oak8"]
var oak6 = ["planks_oak1", "planks_oak2", "planks_oak3", "planks_oak4", "planks_oak5", "planks_oak6", "planks_oak7", "planks_oak8"]
for (var i in oak1, oak2, oak3, oak4, oak5, oak6) {

	IDRegistry.genBlockID(oak1[i]);
	Block.createBlockWithRotation(oak1[i], [
		{ name: oak1[i], texture: [[oak1[i], 0], [oak2[i], 0], [oak3[i], 0], [oak4[i], 0], [oak5[i], 0], [oak6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("Oakgroup", Translation.translate("Group of compressed oak planks"), [
	BlockID.planks_oak1,
	BlockID.planks_oak2,
	BlockID.planks_oak3,
	BlockID.planks_oak4,
	BlockID.planks_oak5,
	BlockID.planks_oak6,
	BlockID.planks_oak7,
	BlockID.planks_oak8
]);



/*еловые доски*/

var spruce1 = ["planks_spruce1", "planks_spruce2", "planks_spruce3", "planks_spruce4", "planks_spruce5", "planks_spruce6", "planks_spruce7", "planks_spruce8"]
var spruce2 = ["planks_spruce1", "planks_spruce2", "planks_spruce3", "planks_spruce4", "planks_spruce5", "planks_spruce6", "planks_spruce7", "planks_spruce8"]
var spruce3 = ["planks_spruce1", "planks_spruce2", "planks_spruce3", "planks_spruce4", "planks_spruce5", "planks_spruce6", "planks_spruce7", "planks_spruce8"]
var spruce4 = ["planks_spruce1", "planks_spruce2", "planks_spruce3", "planks_spruce4", "planks_spruce5", "planks_spruce6", "planks_spruce7", "planks_spruce8"]
var spruce5 = ["planks_spruce1", "planks_spruce2", "planks_spruce3", "planks_spruce4", "planks_spruce5", "planks_spruce6", "planks_spruce7", "planks_spruce8"]
var spruce6 = ["planks_spruce1", "planks_spruce2", "planks_spruce3", "planks_spruce4", "planks_spruce5", "planks_spruce6", "planks_spruce7", "planks_spruce8"]
for (var i in spruce1, spruce2, spruce3, spruce4, spruce5, spruce6) {

	IDRegistry.genBlockID(spruce1[i]);
	Block.createBlockWithRotation(spruce1[i], [
		{ name: spruce1[i], texture: [[spruce1[i], 0], [spruce2[i], 0], [spruce3[i], 0], [spruce4[i], 0], [spruce5[i], 0], [spruce6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("sprucegroup", Translation.translate("A group of compressed spruce boards"), [
	BlockID.planks_spruce1,
	BlockID.planks_spruce2,
	BlockID.planks_spruce3,
	BlockID.planks_spruce4,
	BlockID.planks_spruce5,
	BlockID.planks_spruce6,
	BlockID.planks_spruce7,
	BlockID.planks_spruce8
]);



/*берёзовые доски*/

var birch1 = ["planks_birch1", "planks_birch2", "planks_birch3", "planks_birch4", "planks_birch5", "planks_birch6", "planks_birch7", "planks_birch8"]
var birch2 = ["planks_birch1", "planks_birch2", "planks_birch3", "planks_birch4", "planks_birch5", "planks_birch6", "planks_birch7", "planks_birch8"]
var birch3 = ["planks_birch1", "planks_birch2", "planks_birch3", "planks_birch4", "planks_birch5", "planks_birch6", "planks_birch7", "planks_birch8"]
var birch4 = ["planks_birch1", "planks_birch2", "planks_birch3", "planks_birch4", "planks_birch5", "planks_birch6", "planks_birch7", "planks_birch8"]
var birch5 = ["planks_birch1", "planks_birch2", "planks_birch3", "planks_birch4", "planks_birch5", "planks_birch6", "planks_birch7", "planks_birch8"]
var birch6 = ["planks_birch1", "planks_birch2", "planks_birch3", "planks_birch4", "planks_birch5", "planks_birch6", "planks_birch7", "planks_birch8"]
for (var i in birch1, birch2, birch3, birch4, birch5, birch6) {

	IDRegistry.genBlockID(birch1[i]);
	Block.createBlockWithRotation(birch1[i], [
		{ name: birch1[i], texture: [[birch1[i], 0], [birch2[i], 0], [birch3[i], 0], [birch4[i], 0], [birch5[i], 0], [birch6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("birchgroup", Translation.translate("Group of compressed birch boards"), [
	BlockID.planks_birch1,
	BlockID.planks_birch2,
	BlockID.planks_birch3,
	BlockID.planks_birch4,
	BlockID.planks_birch5,
	BlockID.planks_birch6,
	BlockID.planks_birch7,
	BlockID.planks_birch8
]);



/*Джунгливые доски*/

var jungle1 = ["planks_jungle1", "planks_jungle2", "planks_jungle3", "planks_jungle4", "planks_jungle5", "planks_jungle6", "planks_jungle7", "planks_jungle8"]
var jungle2 = ["planks_jungle1", "planks_jungle2", "planks_jungle3", "planks_jungle4", "planks_jungle5", "planks_jungle6", "planks_jungle7", "planks_jungle8"]
var jungle3 = ["planks_jungle1", "planks_jungle2", "planks_jungle3", "planks_jungle4", "planks_jungle5", "planks_jungle6", "planks_jungle7", "planks_jungle8"]
var jungle4 = ["planks_jungle1", "planks_jungle2", "planks_jungle3", "planks_jungle4", "planks_jungle5", "planks_jungle6", "planks_jungle7", "planks_jungle8"]
var jungle5 = ["planks_jungle1", "planks_jungle2", "planks_jungle3", "planks_jungle4", "planks_jungle5", "planks_jungle6", "planks_jungle7", "planks_jungle8"]
var jungle6 = ["planks_jungle1", "planks_jungle2", "planks_jungle3", "planks_jungle4", "planks_jungle5", "planks_jungle6", "planks_jungle7", "planks_jungle8"]
for (var i in jungle1, jungle2, jungle3, jungle4, jungle5, jungle6) {

	IDRegistry.genBlockID(jungle1[i]);
	Block.createBlockWithRotation(jungle1[i], [
		{ name: jungle1[i], texture: [[jungle1[i], 0], [jungle2[i], 0], [jungle3[i], 0], [jungle4[i], 0], [jungle5[i], 0], [jungle6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("junglegroup", Translation.translate("A group of compressed jungle boards"), [
	BlockID.planks_jungle1,
	BlockID.planks_jungle2,
	BlockID.planks_jungle3,
	BlockID.planks_jungle4,
	BlockID.planks_jungle5,
	BlockID.planks_jungle6,
	BlockID.planks_jungle7,
	BlockID.planks_jungle8
]);


/*Акации доски*/

var acacia1 = ["planks_acacia1", "planks_acacia2", "planks_acacia3", "planks_acacia4", "planks_acacia5", "planks_acacia6", "planks_acacia7", "planks_acacia8"]
var acacia2 = ["planks_acacia1", "planks_acacia2", "planks_acacia3", "planks_acacia4", "planks_acacia5", "planks_acacia6", "planks_acacia7", "planks_acacia8"]
var acacia3 = ["planks_acacia1", "planks_acacia2", "planks_acacia3", "planks_acacia4", "planks_acacia5", "planks_acacia6", "planks_acacia7", "planks_acacia8"]
var acacia4 = ["planks_acacia1", "planks_acacia2", "planks_acacia3", "planks_acacia4", "planks_acacia5", "planks_acacia6", "planks_acacia7", "planks_acacia8"]
var acacia5 = ["planks_acacia1", "planks_acacia2", "planks_acacia3", "planks_acacia4", "planks_acacia5", "planks_acacia6", "planks_acacia7", "planks_acacia8"]
var acacia6 = ["planks_acacia1", "planks_acacia2", "planks_acacia3", "planks_acacia4", "planks_acacia5", "planks_acacia6", "planks_acacia7", "planks_acacia8"]
for (var i in acacia1, acacia2, acacia3, acacia4, acacia5, acacia6) {

	IDRegistry.genBlockID(acacia1[i]);
	Block.createBlockWithRotation(acacia1[i], [
		{ name: acacia1[i], texture: [[acacia1[i], 0], [acacia2[i], 0], [acacia3[i], 0], [acacia4[i], 0], [acacia5[i], 0], [acacia6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("acaciagroup", Translation.translate("Group of compressed acacia boards"), [
	BlockID.planks_acacia1,
	BlockID.planks_acacia2,
	BlockID.planks_acacia3,
	BlockID.planks_acacia4,
	BlockID.planks_acacia5,
	BlockID.planks_acacia6,
	BlockID.planks_acacia7,
	BlockID.planks_acacia8
]);



/*Тёмный дуб доски*/

var big_oak1 = ["planks_big_oak1", "planks_big_oak2", "planks_big_oak3", "planks_big_oak4", "planks_big_oak5", "planks_big_oak6", "planks_big_oak7", "planks_big_oak8"]
var big_oak2 = ["planks_big_oak1", "planks_big_oak2", "planks_big_oak3", "planks_big_oak4", "planks_big_oak5", "planks_big_oak6", "planks_big_oak7", "planks_big_oak8"]
var big_oak3 = ["planks_big_oak1", "planks_big_oak2", "planks_big_oak3", "planks_big_oak4", "planks_big_oak5", "planks_big_oak6", "planks_big_oak7", "planks_big_oak8"]
var big_oak4 = ["planks_big_oak1", "planks_big_oak2", "planks_big_oak3", "planks_big_oak4", "planks_big_oak5", "planks_big_oak6", "planks_big_oak7", "planks_big_oak8"]
var big_oak5 = ["planks_big_oak1", "planks_big_oak2", "planks_big_oak3", "planks_big_oak4", "planks_big_oak5", "planks_big_oak6", "planks_big_oak7", "planks_big_oak8"]
var big_oak6 = ["planks_big_oak1", "planks_big_oak2", "planks_big_oak3", "planks_big_oak4", "planks_big_oak5", "planks_big_oak6", "planks_big_oak7", "planks_big_oak8"]
for (var i in big_oak1, big_oak2, big_oak3, big_oak4, big_oak5, big_oak6) {

	IDRegistry.genBlockID(big_oak1[i]);
	Block.createBlockWithRotation(big_oak1[i], [
		{ name: big_oak1[i], texture: [[big_oak1[i], 0], [big_oak2[i], 0], [big_oak3[i], 0], [big_oak4[i], 0], [big_oak5[i], 0], [big_oak6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("bigoakgroup", Translation.translate("A group of compressed dark oak planks"), [
	BlockID.planks_big_oak1,
	BlockID.planks_big_oak2,
	BlockID.planks_big_oak3,
	BlockID.planks_big_oak4,
	BlockID.planks_big_oak5,
	BlockID.planks_big_oak6,
	BlockID.planks_big_oak7,
	BlockID.planks_big_oak8
]);



/*Багровые доски*/

var crimson1 = ["planks_crimson1", "planks_crimson2", "planks_crimson3", "planks_crimson4", "planks_crimson5", "planks_crimson6", "planks_crimson7", "planks_crimson8"]
var crimson2 = ["planks_crimson1", "planks_crimson2", "planks_crimson3", "planks_crimson4", "planks_crimson5", "planks_crimson6", "planks_crimson7", "planks_crimson8"]
var crimson3 = ["planks_crimson1", "planks_crimson2", "planks_crimson3", "planks_crimson4", "planks_crimson5", "planks_crimson6", "planks_crimson7", "planks_crimson8"]
var crimson4 = ["planks_crimson1", "planks_crimson2", "planks_crimson3", "planks_crimson4", "planks_crimson5", "planks_crimson6", "planks_crimson7", "planks_crimson8"]
var crimson5 = ["planks_crimson1", "planks_crimson2", "planks_crimson3", "planks_crimson4", "planks_crimson5", "planks_crimson6", "planks_crimson7", "planks_crimson8"]
var crimson6 = ["planks_crimson1", "planks_crimson2", "planks_crimson3", "planks_crimson4", "planks_crimson5", "planks_crimson6", "planks_crimson7", "planks_crimson8"]
for (var i in crimson1, crimson2, crimson3, crimson4, crimson5, crimson6) {

	IDRegistry.genBlockID(crimson1[i]);
	Block.createBlockWithRotation(crimson1[i], [
		{ name: crimson1[i], texture: [[crimson1[i], 0], [crimson2[i], 0], [crimson3[i], 0], [crimson4[i], 0], [crimson5[i], 0], [crimson6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("crimsongroup", Translation.translate("A group of compressed crimson boards"), [
	BlockID.planks_crimson1,
	BlockID.planks_crimson2,
	BlockID.planks_crimson3,
	BlockID.planks_crimson4,
	BlockID.planks_crimson5,
	BlockID.planks_crimson6,
	BlockID.planks_crimson7,
	BlockID.planks_crimson8
]);


/*Искажённые доски*/

var warped1 = ["planks_warped1", "planks_warped2", "planks_warped3", "planks_warped4", "planks_warped5", "planks_warped6", "planks_warped7", "planks_warped8"]
var warped2 = ["planks_warped1", "planks_warped2", "planks_warped3", "planks_warped4", "planks_warped5", "planks_warped6", "planks_warped7", "planks_warped8"]
var warped3 = ["planks_warped1", "planks_warped2", "planks_warped3", "planks_warped4", "planks_warped5", "planks_warped6", "planks_warped7", "planks_warped8"]
var warped4 = ["planks_warped1", "planks_warped2", "planks_warped3", "planks_warped4", "planks_warped5", "planks_warped6", "planks_warped7", "planks_warped8"]
var warped5 = ["planks_warped1", "planks_warped2", "planks_warped3", "planks_warped4", "planks_warped5", "planks_warped6", "planks_warped7", "planks_warped8"]
var warped6 = ["planks_warped1", "planks_warped2", "planks_warped3", "planks_warped4", "planks_warped5", "planks_warped6", "planks_warped7", "planks_warped8"]
for (var i in warped1, warped2, warped3, warped4, warped5, warped6) {

	IDRegistry.genBlockID(warped1[i]);
	Block.createBlockWithRotation(warped1[i], [
		{ name: warped1[i], texture: [[warped1[i], 0], [warped2[i], 0], [warped3[i], 0], [warped4[i], 0], [warped5[i], 0], [warped6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("warpedgroup", Translation.translate("A group of compressed distorted boards"), [
	BlockID.planks_warped1,
	BlockID.planks_warped2,
	BlockID.planks_warped3,
	BlockID.planks_warped4,
	BlockID.planks_warped5,
	BlockID.planks_warped6,
	BlockID.planks_warped7,
	BlockID.planks_warped8
]);



/*Дуб дерево*/

var oak_log_top1 = ["stripped_oak_log_top1", "stripped_oak_log_top2", "stripped_oak_log_top3", "stripped_oak_log_top4", "stripped_oak_log_top5", "stripped_oak_log_top6", "stripped_oak_log_top7", "stripped_oak_log_top8"]
var oak_log_top2 = ["stripped_oak_log_top1", "stripped_oak_log_top2", "stripped_oak_log_top3", "stripped_oak_log_top4", "stripped_oak_log_top5", "stripped_oak_log_top6", "stripped_oak_log_top7", "stripped_oak_log_top8"]
var oak_log_top3 = ["stripped_oak_log_top1", "stripped_oak_log_top2", "stripped_oak_log_top3", "stripped_oak_log_top4", "stripped_oak_log_top5", "stripped_oak_log_top6", "stripped_oak_log_top7", "stripped_oak_log_top8"]
var oak_log_top4 = ["stripped_oak_log_top1", "stripped_oak_log_top2", "stripped_oak_log_top3", "stripped_oak_log_top4", "stripped_oak_log_top5", "stripped_oak_log_top6", "stripped_oak_log_top7", "stripped_oak_log_top8"]
var oak_log_top5 = ["stripped_oak_log_top1", "stripped_oak_log_top2", "stripped_oak_log_top3", "stripped_oak_log_top4", "stripped_oak_log_top5", "stripped_oak_log_top6", "stripped_oak_log_top7", "stripped_oak_log_top8"]
var oak_log_top6 = ["stripped_oak_log_top1", "stripped_oak_log_top2", "stripped_oak_log_top3", "stripped_oak_log_top4", "stripped_oak_log_top5", "stripped_oak_log_top6", "stripped_oak_log_top7", "stripped_oak_log_top8"]
for (var i in oak_log_top1, oak_log_top2, oak_log_top3, oak_log_top4, oak_log_top5, oak_log_top6) {

	IDRegistry.genBlockID(oak_log_top1[i]);
	Block.createBlockWithRotation(oak_log_top1[i], [
		{ name: oak_log_top1[i], texture: [[oak_log_top1[i], 0], [oak_log_top2[i], 0], [oak_log_top3[i], 0], [oak_log_top4[i], 0], [oak_log_top5[i], 0], [oak_log_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("oak_log_topgroup", Translation.translate("Compressed Oak Tree Group"), [
	BlockID.stripped_oak_log_top1,
	BlockID.stripped_oak_log_top2,
	BlockID.stripped_oak_log_top3,
	BlockID.stripped_oak_log_top4,
	BlockID.stripped_oak_log_top5,
	BlockID.stripped_oak_log_top6,
	BlockID.stripped_oak_log_top7,
	BlockID.stripped_oak_log_top8
]);


/*Ель дерево*/

var spruce_log_top1 = ["stripped_spruce_log_top1", "stripped_spruce_log_top2", "stripped_spruce_log_top3", "stripped_spruce_log_top4", "stripped_spruce_log_top5", "stripped_spruce_log_top6", "stripped_spruce_log_top7", "stripped_spruce_log_top8"]
var spruce_log_top2 = ["stripped_spruce_log_top1", "stripped_spruce_log_top2", "stripped_spruce_log_top3", "stripped_spruce_log_top4", "stripped_spruce_log_top5", "stripped_spruce_log_top6", "stripped_spruce_log_top7", "stripped_spruce_log_top8"]
var spruce_log_top3 = ["stripped_spruce_log_top1", "stripped_spruce_log_top2", "stripped_spruce_log_top3", "stripped_spruce_log_top4", "stripped_spruce_log_top5", "stripped_spruce_log_top6", "stripped_spruce_log_top7", "stripped_spruce_log_top8"]
var spruce_log_top4 = ["stripped_spruce_log_top1", "stripped_spruce_log_top2", "stripped_spruce_log_top3", "stripped_spruce_log_top4", "stripped_spruce_log_top5", "stripped_spruce_log_top6", "stripped_spruce_log_top7", "stripped_spruce_log_top8"]
var spruce_log_top5 = ["stripped_spruce_log_top1", "stripped_spruce_log_top2", "stripped_spruce_log_top3", "stripped_spruce_log_top4", "stripped_spruce_log_top5", "stripped_spruce_log_top6", "stripped_spruce_log_top7", "stripped_spruce_log_top8"]
var spruce_log_top6 = ["stripped_spruce_log_top1", "stripped_spruce_log_top2", "stripped_spruce_log_top3", "stripped_spruce_log_top4", "stripped_spruce_log_top5", "stripped_spruce_log_top6", "stripped_spruce_log_top7", "stripped_spruce_log_top8"]
for (var i in spruce_log_top1, spruce_log_top2, spruce_log_top3, spruce_log_top4, spruce_log_top5, spruce_log_top6) {

	IDRegistry.genBlockID(spruce_log_top1[i]);
	Block.createBlockWithRotation(spruce_log_top1[i], [
		{ name: spruce_log_top1[i], texture: [[spruce_log_top1[i], 0], [spruce_log_top2[i], 0], [spruce_log_top3[i], 0], [spruce_log_top4[i], 0], [spruce_log_top5[i], 0], [spruce_log_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("spruce_log_topgroup", Translation.translate("Compressed Spruce Tree Group"), [
	BlockID.stripped_spruce_log_top1,
	BlockID.stripped_spruce_log_top2,
	BlockID.stripped_spruce_log_top3,
	BlockID.stripped_spruce_log_top4,
	BlockID.stripped_spruce_log_top5,
	BlockID.stripped_spruce_log_top6,
	BlockID.stripped_spruce_log_top7,
	BlockID.stripped_spruce_log_top8
]);



/*Берёза дерево*/

var birch_log_top1 = ["stripped_birch_log_top1", "stripped_birch_log_top2", "stripped_birch_log_top3", "stripped_birch_log_top4", "stripped_birch_log_top5", "stripped_birch_log_top6", "stripped_birch_log_top7", "stripped_birch_log_top8"]
var birch_log_top2 = ["stripped_birch_log_top1", "stripped_birch_log_top2", "stripped_birch_log_top3", "stripped_birch_log_top4", "stripped_birch_log_top5", "stripped_birch_log_top6", "stripped_birch_log_top7", "stripped_birch_log_top8"]
var birch_log_top3 = ["stripped_birch_log_top1", "stripped_birch_log_top2", "stripped_birch_log_top3", "stripped_birch_log_top4", "stripped_birch_log_top5", "stripped_birch_log_top6", "stripped_birch_log_top7", "stripped_birch_log_top8"]
var birch_log_top4 = ["stripped_birch_log_top1", "stripped_birch_log_top2", "stripped_birch_log_top3", "stripped_birch_log_top4", "stripped_birch_log_top5", "stripped_birch_log_top6", "stripped_birch_log_top7", "stripped_birch_log_top8"]
var birch_log_top5 = ["stripped_birch_log_top1", "stripped_birch_log_top2", "stripped_birch_log_top3", "stripped_birch_log_top4", "stripped_birch_log_top5", "stripped_birch_log_top6", "stripped_birch_log_top7", "stripped_birch_log_top8"]
var birch_log_top6 = ["stripped_birch_log_top1", "stripped_birch_log_top2", "stripped_birch_log_top3", "stripped_birch_log_top4", "stripped_birch_log_top5", "stripped_birch_log_top6", "stripped_birch_log_top7", "stripped_birch_log_top8"]
for (var i in birch_log_top1, birch_log_top2, birch_log_top3, birch_log_top4, birch_log_top5, birch_log_top6) {

	IDRegistry.genBlockID(birch_log_top1[i]);
	Block.createBlockWithRotation(birch_log_top1[i], [
		{ name: birch_log_top1[i], texture: [[birch_log_top1[i], 0], [birch_log_top2[i], 0], [birch_log_top3[i], 0], [birch_log_top4[i], 0], [birch_log_top5[i], 0], [birch_log_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("birch_log_topgroup", Translation.translate("Compressed Birch tree group"), [
	BlockID.stripped_birch_log_top1,
	BlockID.stripped_birch_log_top2,
	BlockID.stripped_birch_log_top3,
	BlockID.stripped_birch_log_top4,
	BlockID.stripped_birch_log_top5,
	BlockID.stripped_birch_log_top6,
	BlockID.stripped_birch_log_top7,
	BlockID.stripped_birch_log_top8
]);



/*Джунгливое дерево*/

var jungle_log_top1 = ["stripped_jungle_log_top1", "stripped_jungle_log_top2", "stripped_jungle_log_top3", "stripped_jungle_log_top4", "stripped_jungle_log_top5", "stripped_jungle_log_top6", "stripped_jungle_log_top7", "stripped_jungle_log_top8"]
var jungle_log_top2 = ["stripped_jungle_log_top1", "stripped_jungle_log_top2", "stripped_jungle_log_top3", "stripped_jungle_log_top4", "stripped_jungle_log_top5", "stripped_jungle_log_top6", "stripped_jungle_log_top7", "stripped_jungle_log_top8"]
var jungle_log_top3 = ["stripped_jungle_log_top1", "stripped_jungle_log_top2", "stripped_jungle_log_top3", "stripped_jungle_log_top4", "stripped_jungle_log_top5", "stripped_jungle_log_top6", "stripped_jungle_log_top7", "stripped_jungle_log_top8"]
var jungle_log_top4 = ["stripped_jungle_log_top1", "stripped_jungle_log_top2", "stripped_jungle_log_top3", "stripped_jungle_log_top4", "stripped_jungle_log_top5", "stripped_jungle_log_top6", "stripped_jungle_log_top7", "stripped_jungle_log_top8"]
var jungle_log_top5 = ["stripped_jungle_log_top1", "stripped_jungle_log_top2", "stripped_jungle_log_top3", "stripped_jungle_log_top4", "stripped_jungle_log_top5", "stripped_jungle_log_top6", "stripped_jungle_log_top7", "stripped_jungle_log_top8"]
var jungle_log_top6 = ["stripped_jungle_log_top1", "stripped_jungle_log_top2", "stripped_jungle_log_top3", "stripped_jungle_log_top4", "stripped_jungle_log_top5", "stripped_jungle_log_top6", "stripped_jungle_log_top7", "stripped_jungle_log_top8"]
for (var i in jungle_log_top1, jungle_log_top2, jungle_log_top3, jungle_log_top4, jungle_log_top5, jungle_log_top6) {

	IDRegistry.genBlockID(jungle_log_top1[i]);
	Block.createBlockWithRotation(jungle_log_top1[i], [
		{ name: jungle_log_top1[i], texture: [[jungle_log_top1[i], 0], [jungle_log_top2[i], 0], [jungle_log_top3[i], 0], [jungle_log_top4[i], 0], [jungle_log_top5[i], 0], [jungle_log_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("jungle_log_topgroup", Translation.translate("Compressed Jungle Tree Group"), [
	BlockID.stripped_jungle_log_top1,
	BlockID.stripped_jungle_log_top2,
	BlockID.stripped_jungle_log_top3,
	BlockID.stripped_jungle_log_top4,
	BlockID.stripped_jungle_log_top5,
	BlockID.stripped_jungle_log_top6,
	BlockID.stripped_jungle_log_top7,
	BlockID.stripped_jungle_log_top8
]);


/*Акация дерево*/

var acacia_log_top1 = ["stripped_acacia_log_top1", "stripped_acacia_log_top2", "stripped_acacia_log_top3", "stripped_acacia_log_top4", "stripped_acacia_log_top5", "stripped_acacia_log_top6", "stripped_acacia_log_top7", "stripped_acacia_log_top8"]
var acacia_log_top2 = ["stripped_acacia_log_top1", "stripped_acacia_log_top2", "stripped_acacia_log_top3", "stripped_acacia_log_top4", "stripped_acacia_log_top5", "stripped_acacia_log_top6", "stripped_acacia_log_top7", "stripped_acacia_log_top8"]
var acacia_log_top3 = ["stripped_acacia_log_top1", "stripped_acacia_log_top2", "stripped_acacia_log_top3", "stripped_acacia_log_top4", "stripped_acacia_log_top5", "stripped_acacia_log_top6", "stripped_acacia_log_top7", "stripped_acacia_log_top8"]
var acacia_log_top4 = ["stripped_acacia_log_top1", "stripped_acacia_log_top2", "stripped_acacia_log_top3", "stripped_acacia_log_top4", "stripped_acacia_log_top5", "stripped_acacia_log_top6", "stripped_acacia_log_top7", "stripped_acacia_log_top8"]
var acacia_log_top5 = ["stripped_acacia_log_top1", "stripped_acacia_log_top2", "stripped_acacia_log_top3", "stripped_acacia_log_top4", "stripped_acacia_log_top5", "stripped_acacia_log_top6", "stripped_acacia_log_top7", "stripped_acacia_log_top8"]
var acacia_log_top6 = ["stripped_acacia_log_top1", "stripped_acacia_log_top2", "stripped_acacia_log_top3", "stripped_acacia_log_top4", "stripped_acacia_log_top5", "stripped_acacia_log_top6", "stripped_acacia_log_top7", "stripped_acacia_log_top8"]
for (var i in acacia_log_top1, acacia_log_top2, acacia_log_top3, acacia_log_top4, acacia_log_top5, acacia_log_top6) {

	IDRegistry.genBlockID(acacia_log_top1[i]);
	Block.createBlockWithRotation(acacia_log_top1[i], [
		{ name: acacia_log_top1[i], texture: [[acacia_log_top1[i], 0], [acacia_log_top2[i], 0], [acacia_log_top3[i], 0], [acacia_log_top4[i], 0], [acacia_log_top5[i], 0], [acacia_log_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("acacia_log_topgroup", Translation.translate("Compressed Acacia tree group"), [
	BlockID.stripped_acacia_log_top1,
	BlockID.stripped_acacia_log_top2,
	BlockID.stripped_acacia_log_top3,
	BlockID.stripped_acacia_log_top4,
	BlockID.stripped_acacia_log_top5,
	BlockID.stripped_acacia_log_top6,
	BlockID.stripped_acacia_log_top7,
	BlockID.stripped_acacia_log_top8
]);


/*Тёмный дуб дерево*/

var dark_oak_log_top1 = ["stripped_dark_oak_log_top1", "stripped_dark_oak_log_top2", "stripped_dark_oak_log_top3", "stripped_dark_oak_log_top4", "stripped_dark_oak_log_top5", "stripped_dark_oak_log_top6", "stripped_dark_oak_log_top7", "stripped_dark_oak_log_top8"]
var dark_oak_log_top2 = ["stripped_dark_oak_log_top1", "stripped_dark_oak_log_top2", "stripped_dark_oak_log_top3", "stripped_dark_oak_log_top4", "stripped_dark_oak_log_top5", "stripped_dark_oak_log_top6", "stripped_dark_oak_log_top7", "stripped_dark_oak_log_top8"]
var dark_oak_log_top3 = ["stripped_dark_oak_log_top1", "stripped_dark_oak_log_top2", "stripped_dark_oak_log_top3", "stripped_dark_oak_log_top4", "stripped_dark_oak_log_top5", "stripped_dark_oak_log_top6", "stripped_dark_oak_log_top7", "stripped_dark_oak_log_top8"]
var dark_oak_log_top4 = ["stripped_dark_oak_log_top1", "stripped_dark_oak_log_top2", "stripped_dark_oak_log_top3", "stripped_dark_oak_log_top4", "stripped_dark_oak_log_top5", "stripped_dark_oak_log_top6", "stripped_dark_oak_log_top7", "stripped_dark_oak_log_top8"]
var dark_oak_log_top5 = ["stripped_dark_oak_log_top1", "stripped_dark_oak_log_top2", "stripped_dark_oak_log_top3", "stripped_dark_oak_log_top4", "stripped_dark_oak_log_top5", "stripped_dark_oak_log_top6", "stripped_dark_oak_log_top7", "stripped_dark_oak_log_top8"]
var dark_oak_log_top6 = ["stripped_dark_oak_log_top1", "stripped_dark_oak_log_top2", "stripped_dark_oak_log_top3", "stripped_dark_oak_log_top4", "stripped_dark_oak_log_top5", "stripped_dark_oak_log_top6", "stripped_dark_oak_log_top7", "stripped_dark_oak_log_top8"]
for (var i in dark_oak_log_top1, dark_oak_log_top2, dark_oak_log_top3, dark_oak_log_top4, dark_oak_log_top5, dark_oak_log_top6) {

	IDRegistry.genBlockID(dark_oak_log_top1[i]);
	Block.createBlockWithRotation(dark_oak_log_top1[i], [
		{ name: dark_oak_log_top1[i], texture: [[dark_oak_log_top1[i], 0], [dark_oak_log_top2[i], 0], [dark_oak_log_top3[i], 0], [dark_oak_log_top4[i], 0], [dark_oak_log_top5[i], 0], [dark_oak_log_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("dark_oak_log_topgroup", Translation.translate("Compressed Dark Oak tree Group"), [
	BlockID.stripped_dark_oak_log_top1,
	BlockID.stripped_dark_oak_log_top2,
	BlockID.stripped_dark_oak_log_top3,
	BlockID.stripped_dark_oak_log_top4,
	BlockID.stripped_dark_oak_log_top5,
	BlockID.stripped_dark_oak_log_top6,
	BlockID.stripped_dark_oak_log_top7,
	BlockID.stripped_dark_oak_log_top8
]);



/*Багровое дерево*/

var crimson_stem_top1 = ["stripped_crimson_stem_top1", "stripped_crimson_stem_top2", "stripped_crimson_stem_top3", "stripped_crimson_stem_top4", "stripped_crimson_stem_top5", "stripped_crimson_stem_top6", "stripped_crimson_stem_top7", "stripped_crimson_stem_top8"]
var crimson_stem_top2 = ["stripped_crimson_stem_top1", "stripped_crimson_stem_top2", "stripped_crimson_stem_top3", "stripped_crimson_stem_top4", "stripped_crimson_stem_top5", "stripped_crimson_stem_top6", "stripped_crimson_stem_top7", "stripped_crimson_stem_top8"]
var crimson_stem_top3 = ["stripped_crimson_stem_top1", "stripped_crimson_stem_top2", "stripped_crimson_stem_top3", "stripped_crimson_stem_top4", "stripped_crimson_stem_top5", "stripped_crimson_stem_top6", "stripped_crimson_stem_top7", "stripped_crimson_stem_top8"]
var crimson_stem_top4 = ["stripped_crimson_stem_top1", "stripped_crimson_stem_top2", "stripped_crimson_stem_top3", "stripped_crimson_stem_top4", "stripped_crimson_stem_top5", "stripped_crimson_stem_top6", "stripped_crimson_stem_top7", "stripped_crimson_stem_top8"]
var crimson_stem_top5 = ["stripped_crimson_stem_top1", "stripped_crimson_stem_top2", "stripped_crimson_stem_top3", "stripped_crimson_stem_top4", "stripped_crimson_stem_top5", "stripped_crimson_stem_top6", "stripped_crimson_stem_top7", "stripped_crimson_stem_top8"]
var crimson_stem_top6 = ["stripped_crimson_stem_top1", "stripped_crimson_stem_top2", "stripped_crimson_stem_top3", "stripped_crimson_stem_top4", "stripped_crimson_stem_top5", "stripped_crimson_stem_top6", "stripped_crimson_stem_top7", "stripped_crimson_stem_top8"]
for (var i in crimson_stem_top1, crimson_stem_top2, crimson_stem_top3, crimson_stem_top4, crimson_stem_top5, crimson_stem_top6) {

	IDRegistry.genBlockID(crimson_stem_top1[i]);
	Block.createBlockWithRotation(crimson_stem_top1[i], [
		{ name: crimson_stem_top1[i], texture: [[crimson_stem_top1[i], 0], [crimson_stem_top2[i], 0], [crimson_stem_top3[i], 0], [crimson_stem_top4[i], 0], [crimson_stem_top5[i], 0], [crimson_stem_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("crimson_stem_topgroup", Translation.translate("Compressed Crimson tree group"), [
	BlockID.stripped_crimson_stem_top1,
	BlockID.stripped_crimson_stem_top2,
	BlockID.stripped_crimson_stem_top3,
	BlockID.stripped_crimson_stem_top4,
	BlockID.stripped_crimson_stem_top5,
	BlockID.stripped_crimson_stem_top6,
	BlockID.stripped_crimson_stem_top7,
	BlockID.stripped_crimson_stem_top8
]);


/*Искажённое дерево*/

var warped_stem_top1 = ["stripped_warped_stem_top1", "stripped_warped_stem_top2", "stripped_warped_stem_top3", "stripped_warped_stem_top4", "stripped_warped_stem_top5", "stripped_warped_stem_top6", "stripped_warped_stem_top7", "stripped_warped_stem_top8"]
var warped_stem_top2 = ["stripped_warped_stem_top1", "stripped_warped_stem_top2", "stripped_warped_stem_top3", "stripped_warped_stem_top4", "stripped_warped_stem_top5", "stripped_warped_stem_top6", "stripped_warped_stem_top7", "stripped_warped_stem_top8"]
var warped_stem_top3 = ["stripped_warped_stem_top1", "stripped_warped_stem_top2", "stripped_warped_stem_top3", "stripped_warped_stem_top4", "stripped_warped_stem_top5", "stripped_warped_stem_top6", "stripped_warped_stem_top7", "stripped_warped_stem_top8"]
var warped_stem_top4 = ["stripped_warped_stem_top1", "stripped_warped_stem_top2", "stripped_warped_stem_top3", "stripped_warped_stem_top4", "stripped_warped_stem_top5", "stripped_warped_stem_top6", "stripped_warped_stem_top7", "stripped_warped_stem_top8"]
var warped_stem_top5 = ["stripped_warped_stem_top1", "stripped_warped_stem_top2", "stripped_warped_stem_top3", "stripped_warped_stem_top4", "stripped_warped_stem_top5", "stripped_warped_stem_top6", "stripped_warped_stem_top7", "stripped_warped_stem_top8"]
var warped_stem_top6 = ["stripped_warped_stem_top1", "stripped_warped_stem_top2", "stripped_warped_stem_top3", "stripped_warped_stem_top4", "stripped_warped_stem_top5", "stripped_warped_stem_top6", "stripped_warped_stem_top7", "stripped_warped_stem_top8"]
for (var i in warped_stem_top1, warped_stem_top2, warped_stem_top3, warped_stem_top4, warped_stem_top5, warped_stem_top6) {

	IDRegistry.genBlockID(warped_stem_top1[i]);
	Block.createBlockWithRotation(warped_stem_top1[i], [
		{ name: warped_stem_top1[i], texture: [[warped_stem_top1[i], 0], [warped_stem_top2[i], 0], [warped_stem_top3[i], 0], [warped_stem_top4[i], 0], [warped_stem_top5[i], 0], [warped_stem_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("warped_stem_topgroup", Translation.translate("Compressed group of distorted tree"), [
	BlockID.stripped_warped_stem_top1,
	BlockID.stripped_warped_stem_top2,
	BlockID.stripped_warped_stem_top3,
	BlockID.stripped_warped_stem_top4,
	BlockID.stripped_warped_stem_top5,
	BlockID.stripped_warped_stem_top6,
	BlockID.stripped_warped_stem_top7,
	BlockID.stripped_warped_stem_top8
]);



/*Булыжник*/

var cobblestone1 = ["cobblestone1", "cobblestone2", "cobblestone3", "cobblestone4", "cobblestone5", "cobblestone6", "cobblestone7", "cobblestone8"]
var cobblestone2 = ["cobblestone1", "cobblestone2", "cobblestone3", "cobblestone4", "cobblestone5", "cobblestone6", "cobblestone7", "cobblestone8"]
var cobblestone3 = ["cobblestone1", "cobblestone2", "cobblestone3", "cobblestone4", "cobblestone5", "cobblestone6", "cobblestone7", "cobblestone8"]
var cobblestone4 = ["cobblestone1", "cobblestone2", "cobblestone3", "cobblestone4", "cobblestone5", "cobblestone6", "cobblestone7", "cobblestone8"]
var cobblestone5 = ["cobblestone1", "cobblestone2", "cobblestone3", "cobblestone4", "cobblestone5", "cobblestone6", "cobblestone7", "cobblestone8"]
var cobblestone6 = ["cobblestone1", "cobblestone2", "cobblestone3", "cobblestone4", "cobblestone5", "cobblestone6", "cobblestone7", "cobblestone8"]
for (var i in cobblestone1, cobblestone2, cobblestone3, cobblestone4, cobblestone5, cobblestone6) {

	IDRegistry.genBlockID(cobblestone1[i]);
	Block.createBlockWithRotation(cobblestone1[i], [
		{ name: cobblestone1[i], texture: [[cobblestone1[i], 0], [cobblestone2[i], 0], [cobblestone3[i], 0], [cobblestone4[i], 0], [cobblestone5[i], 0], [cobblestone6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("cobblestonegroup", Translation.translate("Compressed Cobblestone Group"), [
	BlockID.cobblestone1,
	BlockID.cobblestone2,
	BlockID.cobblestone3,
	BlockID.cobblestone4,
	BlockID.cobblestone5,
	BlockID.cobblestone6,
	BlockID.cobblestone7,
	BlockID.cobblestone8
]);

/*блок угля*/

var coal_block1 = ["coal_block1", "coal_block2", "coal_block3", "coal_block4", "coal_block5", "coal_block6", "coal_block7", "coal_block8"]
var coal_block2 = ["coal_block1", "coal_block2", "coal_block3", "coal_block4", "coal_block5", "coal_block6", "coal_block7", "coal_block8"]
var coal_block3 = ["coal_block1", "coal_block2", "coal_block3", "coal_block4", "coal_block5", "coal_block6", "coal_block7", "coal_block8"]
var coal_block4 = ["coal_block1", "coal_block2", "coal_block3", "coal_block4", "coal_block5", "coal_block6", "coal_block7", "coal_block8"]
var coal_block5 = ["coal_block1", "coal_block2", "coal_block3", "coal_block4", "coal_block5", "coal_block6", "coal_block7", "coal_block8"]
var coal_block6 = ["coal_block1", "coal_block2", "coal_block3", "coal_block4", "coal_block5", "coal_block6", "coal_block7", "coal_block8"]
for (var i in coal_block1, coal_block2, coal_block3, coal_block4, coal_block5, coal_block6) {

	IDRegistry.genBlockID(coal_block1[i]);
	Block.createBlockWithRotation(coal_block1[i], [
		{ name: coal_block1[i], texture: [[coal_block1[i], 0], [coal_block2[i], 0], [coal_block3[i], 0], [coal_block4[i], 0], [coal_block5[i], 0], [coal_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("coal_blockgroup", Translation.translate("Compressed Coal block group"), [
	BlockID.coal_block1,
	BlockID.coal_block2,
	BlockID.coal_block3,
	BlockID.coal_block4,
	BlockID.coal_block5,
	BlockID.coal_block6,
	BlockID.coal_block7,
	BlockID.coal_block8
]);



/*земля*/

var dirt1 = ["dirt1", "dirt2", "dirt3", "dirt4", "dirt5", "dirt6", "dirt7", "dirt8"]
var dirt2 = ["dirt1", "dirt2", "dirt3", "dirt4", "dirt5", "dirt6", "dirt7", "dirt8"]
var dirt3 = ["dirt1", "dirt2", "dirt3", "dirt4", "dirt5", "dirt6", "dirt7", "dirt8"]
var dirt4 = ["dirt1", "dirt2", "dirt3", "dirt4", "dirt5", "dirt6", "dirt7", "dirt8"]
var dirt5 = ["dirt1", "dirt2", "dirt3", "dirt4", "dirt5", "dirt6", "dirt7", "dirt8"]
var dirt6 = ["dirt1", "dirt2", "dirt3", "dirt4", "dirt5", "dirt6", "dirt7", "dirt8"]
for (var i in dirt1, dirt2, dirt3, dirt4, dirt5, dirt6) {

	IDRegistry.genBlockID(dirt1[i]);
	Block.createBlockWithRotation(dirt1[i], [
		{ name: dirt1[i], texture: [[dirt1[i], 0], [dirt2[i], 0], [dirt3[i], 0], [dirt4[i], 0], [dirt5[i], 0], [dirt6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("dirtgroup", Translation.translate("Compressed Earth Group"), [
	BlockID.dirt1,
	BlockID.dirt2,
	BlockID.dirt3,
	BlockID.dirt4,
	BlockID.dirt5,
	BlockID.dirt6,
	BlockID.dirt7,
	BlockID.dirt8
]);


/*Гравий*/

var gravel1 = ["gravel1", "gravel2", "gravel3", "gravel4", "gravel5", "gravel6", "gravel7", "gravel8"]
var gravel2 = ["gravel1", "gravel2", "gravel3", "gravel4", "gravel5", "gravel6", "gravel7", "gravel8"]
var gravel3 = ["gravel1", "gravel2", "gravel3", "gravel4", "gravel5", "gravel6", "gravel7", "gravel8"]
var gravel4 = ["gravel1", "gravel2", "gravel3", "gravel4", "gravel5", "gravel6", "gravel7", "gravel8"]
var gravel5 = ["gravel1", "gravel2", "gravel3", "gravel4", "gravel5", "gravel6", "gravel7", "gravel8"]
var gravel6 = ["gravel1", "gravel2", "gravel3", "gravel4", "gravel5", "gravel6", "gravel7", "gravel8"]
for (var i in gravel1, gravel2, gravel3, gravel4, gravel5, gravel6) {

	IDRegistry.genBlockID(gravel1[i]);
	Block.createBlockWithRotation(gravel1[i], [
		{ name: gravel1[i], texture: [[gravel1[i], 0], [gravel2[i], 0], [gravel3[i], 0], [gravel4[i], 0], [gravel5[i], 0], [gravel6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("gravelgroup", Translation.translate("Compressed Gravel group"), [
	BlockID.gravel1,
	BlockID.gravel2,
	BlockID.gravel3,
	BlockID.gravel4,
	BlockID.gravel5,
	BlockID.gravel6,
	BlockID.gravel7,
	BlockID.gravel8
]);

/*диорит*/

var stone_diorite1 = ["stone_diorite1", "stone_diorite2", "stone_diorite3", "stone_diorite4", "stone_diorite5", "stone_diorite6", "stone_diorite7", "stone_diorite8"]
var stone_diorite2 = ["stone_diorite1", "stone_diorite2", "stone_diorite3", "stone_diorite4", "stone_diorite5", "stone_diorite6", "stone_diorite7", "stone_diorite8"]
var stone_diorite3 = ["stone_diorite1", "stone_diorite2", "stone_diorite3", "stone_diorite4", "stone_diorite5", "stone_diorite6", "stone_diorite7", "stone_diorite8"]
var stone_diorite4 = ["stone_diorite1", "stone_diorite2", "stone_diorite3", "stone_diorite4", "stone_diorite5", "stone_diorite6", "stone_diorite7", "stone_diorite8"]
var stone_diorite5 = ["stone_diorite1", "stone_diorite2", "stone_diorite3", "stone_diorite4", "stone_diorite5", "stone_diorite6", "stone_diorite7", "stone_diorite8"]
var stone_diorite6 = ["stone_diorite1", "stone_diorite2", "stone_diorite3", "stone_diorite4", "stone_diorite5", "stone_diorite6", "stone_diorite7", "stone_diorite8"]
for (var i in stone_diorite1, stone_diorite2, stone_diorite3, stone_diorite4, stone_diorite5, stone_diorite6) {

	IDRegistry.genBlockID(stone_diorite1[i]);
	Block.createBlockWithRotation(stone_diorite1[i], [
		{ name: stone_diorite1[i], texture: [[stone_diorite1[i], 0], [stone_diorite2[i], 0], [stone_diorite3[i], 0], [stone_diorite4[i], 0], [stone_diorite5[i], 0], [stone_diorite6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("stone_dioritegroup", Translation.translate("Compressed Diorite group"), [
	BlockID.stone_diorite1,
	BlockID.stone_diorite2,
	BlockID.stone_diorite3,
	BlockID.stone_diorite4,
	BlockID.stone_diorite5,
	BlockID.stone_diorite6,
	BlockID.stone_diorite7,
	BlockID.stone_diorite8
]);


/*гранит*/

var stone_granite1 = ["stone_granite1", "stone_granite2", "stone_granite3", "stone_granite4", "stone_granite5", "stone_granite6", "stone_granite7", "stone_granite8"]
var stone_granite2 = ["stone_granite1", "stone_granite2", "stone_granite3", "stone_granite4", "stone_granite5", "stone_granite6", "stone_granite7", "stone_granite8"]
var stone_granite3 = ["stone_granite1", "stone_granite2", "stone_granite3", "stone_granite4", "stone_granite5", "stone_granite6", "stone_granite7", "stone_granite8"]
var stone_granite4 = ["stone_granite1", "stone_granite2", "stone_granite3", "stone_granite4", "stone_granite5", "stone_granite6", "stone_granite7", "stone_granite8"]
var stone_granite5 = ["stone_granite1", "stone_granite2", "stone_granite3", "stone_granite4", "stone_granite5", "stone_granite6", "stone_granite7", "stone_granite8"]
var stone_granite6 = ["stone_granite1", "stone_granite2", "stone_granite3", "stone_granite4", "stone_granite5", "stone_granite6", "stone_granite7", "stone_granite8"]
for (var i in stone_granite1, stone_granite2, stone_granite3, stone_granite4, stone_granite5, stone_granite6) {

	IDRegistry.genBlockID(stone_granite1[i]);
	Block.createBlockWithRotation(stone_granite1[i], [
		{ name: stone_granite1[i], texture: [[stone_granite1[i], 0], [stone_granite2[i], 0], [stone_granite3[i], 0], [stone_granite4[i], 0], [stone_granite5[i], 0], [stone_granite6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("stone_granitegroup", Translation.translate("Compressed granite group"), [
	BlockID.stone_granite1,
	BlockID.stone_granite2,
	BlockID.stone_granite3,
	BlockID.stone_granite4,
	BlockID.stone_granite5,
	BlockID.stone_granite6,
	BlockID.stone_granite7,
	BlockID.stone_granite8
]);



/*андезит*/

var stone_andesite1 = ["stone_andesite1", "stone_andesite2", "stone_andesite3", "stone_andesite4", "stone_andesite5", "stone_andesite6", "stone_andesite7", "stone_andesite8"]
var stone_andesite2 = ["stone_andesite1", "stone_andesite2", "stone_andesite3", "stone_andesite4", "stone_andesite5", "stone_andesite6", "stone_andesite7", "stone_andesite8"]
var stone_andesite3 = ["stone_andesite1", "stone_andesite2", "stone_andesite3", "stone_andesite4", "stone_andesite5", "stone_andesite6", "stone_andesite7", "stone_andesite8"]
var stone_andesite4 = ["stone_andesite1", "stone_andesite2", "stone_andesite3", "stone_andesite4", "stone_andesite5", "stone_andesite6", "stone_andesite7", "stone_andesite8"]
var stone_andesite5 = ["stone_andesite1", "stone_andesite2", "stone_andesite3", "stone_andesite4", "stone_andesite5", "stone_andesite6", "stone_andesite7", "stone_andesite8"]
var stone_andesite6 = ["stone_andesite1", "stone_andesite2", "stone_andesite3", "stone_andesite4", "stone_andesite5", "stone_andesite6", "stone_andesite7", "stone_andesite8"]
for (var i in stone_andesite1, stone_andesite2, stone_andesite3, stone_andesite4, stone_andesite5, stone_andesite6) {

	IDRegistry.genBlockID(stone_andesite1[i]);
	Block.createBlockWithRotation(stone_andesite1[i], [
		{ name: stone_andesite1[i], texture: [[stone_andesite1[i], 0], [stone_andesite2[i], 0], [stone_andesite3[i], 0], [stone_andesite4[i], 0], [stone_andesite5[i], 0], [stone_andesite6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("stone_andesitegroup", Translation.translate("Compressed andesite group"), [
	BlockID.stone_andesite1,
	BlockID.stone_andesite2,
	BlockID.stone_andesite3,
	BlockID.stone_andesite4,
	BlockID.stone_andesite5,
	BlockID.stone_andesite6,
	BlockID.stone_andesite7,
	BlockID.stone_andesite8
]);




/*песок*/

var sand1 = ["sand1", "sand2", "sand3", "sand4", "sand5", "sand6", "sand7", "sand8"]
var sand2 = ["sand1", "sand2", "sand3", "sand4", "sand5", "sand6", "sand7", "sand8"]
var sand3 = ["sand1", "sand2", "sand3", "sand4", "sand5", "sand6", "sand7", "sand8"]
var sand4 = ["sand1", "sand2", "sand3", "sand4", "sand5", "sand6", "sand7", "sand8"]
var sand5 = ["sand1", "sand2", "sand3", "sand4", "sand5", "sand6", "sand7", "sand8"]
var sand6 = ["sand1", "sand2", "sand3", "sand4", "sand5", "sand6", "sand7", "sand8"]
for (var i in sand1, sand2, sand3, sand4, sand5, sand6) {

	IDRegistry.genBlockID(sand1[i]);
	Block.createBlockWithRotation(sand1[i], [
		{ name: sand1[i], texture: [[sand1[i], 0], [sand2[i], 0], [sand3[i], 0], [sand4[i], 0], [sand5[i], 0], [sand6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("sandgroup", Translation.translate("Compressed Sand Group"), [
	BlockID.sand1,
	BlockID.sand2,
	BlockID.sand3,
	BlockID.sand4,
	BlockID.sand5,
	BlockID.sand6,
	BlockID.sand7,
	BlockID.sand8
]);



/*красный песок*/

var red_sand1 = ["red_sand1", "red_sand2", "red_sand3", "red_sand4", "red_sand5", "red_sand6", "red_sand7", "red_sand8"]
var red_sand2 = ["red_sand1", "red_sand2", "red_sand3", "red_sand4", "red_sand5", "red_sand6", "red_sand7", "red_sand8"]
var red_sand3 = ["red_sand1", "red_sand2", "red_sand3", "red_sand4", "red_sand5", "red_sand6", "red_sand7", "red_sand8"]
var red_sand4 = ["red_sand1", "red_sand2", "red_sand3", "red_sand4", "red_sand5", "red_sand6", "red_sand7", "red_sand8"]
var red_sand5 = ["red_sand1", "red_sand2", "red_sand3", "red_sand4", "red_sand5", "red_sand6", "red_sand7", "red_sand8"]
var red_sand6 = ["red_sand1", "red_sand2", "red_sand3", "red_sand4", "red_sand5", "red_sand6", "red_sand7", "red_sand8"]
for (var i in red_sand1, red_sand2, red_sand3, red_sand4, red_sand5, red_sand6) {


	IDRegistry.genBlockID(red_sand1[i]);
	Block.createBlockWithRotation(red_sand1[i], [
		{ name: red_sand1[i], texture: [[red_sand1[i], 0], [red_sand2[i], 0], [red_sand3[i], 0], [red_sand4[i], 0], [red_sand5[i], 0], [red_sand6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("red_sandgroup", Translation.translate("Compressed Red Sand Group"), [
	BlockID.red_sand1,
	BlockID.red_sand2,
	BlockID.red_sand3,
	BlockID.red_sand4,
	BlockID.red_sand5,
	BlockID.red_sand6,
	BlockID.red_sand7,
	BlockID.red_sand8
]);



/*песок душ*/

var soul_sand1 = ["soul_sand1", "soul_sand2", "soul_sand3", "soul_sand4", "soul_sand5", "soul_sand6", "soul_sand7", "soul_sand8"]
var soul_sand2 = ["soul_sand1", "soul_sand2", "soul_sand3", "soul_sand4", "soul_sand5", "soul_sand6", "soul_sand7", "soul_sand8"]
var soul_sand3 = ["soul_sand1", "soul_sand2", "soul_sand3", "soul_sand4", "soul_sand5", "soul_sand6", "soul_sand7", "soul_sand8"]
var soul_sand4 = ["soul_sand1", "soul_sand2", "soul_sand3", "soul_sand4", "soul_sand5", "soul_sand6", "soul_sand7", "soul_sand8"]
var soul_sand5 = ["soul_sand1", "soul_sand2", "soul_sand3", "soul_sand4", "soul_sand5", "soul_sand6", "soul_sand7", "soul_sand8"]
var soul_sand6 = ["soul_sand1", "soul_sand2", "soul_sand3", "soul_sand4", "soul_sand5", "soul_sand6", "soul_sand7", "soul_sand8"]
for (var i in soul_sand1, soul_sand2, soul_sand3, soul_sand4, soul_sand5, soul_sand6) {

	IDRegistry.genBlockID(soul_sand1[i]);
	Block.createBlockWithRotation(soul_sand1[i], [
		{ name: soul_sand1[i], texture: [[soul_sand1[i], 0], [soul_sand2[i], 0], [soul_sand3[i], 0], [soul_sand4[i], 0], [soul_sand5[i], 0], [soul_sand6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("soul_sandgroup", Translation.translate("Compressed Sand Shower Group"), [
	BlockID.soul_sand1,
	BlockID.soul_sand2,
	BlockID.soul_sand3,
	BlockID.soul_sand4,
	BlockID.soul_sand5,
	BlockID.soul_sand6,
	BlockID.soul_sand7,
	BlockID.soul_sand8
]);


/*почва душ*/

var soul_soil1 = ["soul_soil1", "soul_soil2", "soul_soil3", "soul_soil4", "soul_soil5", "soul_soil6", "soul_soil7", "soul_soil8"]
var soul_soil2 = ["soul_soil1", "soul_soil2", "soul_soil3", "soul_soil4", "soul_soil5", "soul_soil6", "soul_soil7", "soul_soil8"]
var soul_soil3 = ["soul_soil1", "soul_soil2", "soul_soil3", "soul_soil4", "soul_soil5", "soul_soil6", "soul_soil7", "soul_soil8"]
var soul_soil4 = ["soul_soil1", "soul_soil2", "soul_soil3", "soul_soil4", "soul_soil5", "soul_soil6", "soul_soil7", "soul_soil8"]
var soul_soil5 = ["soul_soil1", "soul_soil2", "soul_soil3", "soul_soil4", "soul_soil5", "soul_soil6", "soul_soil7", "soul_soil8"]
var soul_soil6 = ["soul_soil1", "soul_soil2", "soul_soil3", "soul_soil4", "soul_soil5", "soul_soil6", "soul_soil7", "soul_soil8"]
for (var i in soul_soil1, soul_soil2, soul_soil3, soul_soil4, soul_soil5, soul_soil6) {

	IDRegistry.genBlockID(soul_soil1[i]);
	Block.createBlockWithRotation(soul_soil1[i], [
		{ name: soul_soil1[i], texture: [[soul_soil1[i], 0], [soul_soil2[i], 0], [soul_soil3[i], 0], [soul_soil4[i], 0], [soul_soil5[i], 0], [soul_soil6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("soul_soilgroup", Translation.translate("Compressed group soil of souls"), [
	BlockID.soul_soil1,
	BlockID.soul_soil2,
	BlockID.soul_soil3,
	BlockID.soul_soil4,
	BlockID.soul_soil5,
	BlockID.soul_soil6,
	BlockID.soul_soil7,
	BlockID.soul_soil8
]);


/*снег*/

var snow1 = ["snow1", "snow2", "snow3", "snow4", "snow5", "snow6", "snow7", "snow8"]
var snow2 = ["snow1", "snow2", "snow3", "snow4", "snow5", "snow6", "snow7", "snow8"]
var snow3 = ["snow1", "snow2", "snow3", "snow4", "snow5", "snow6", "snow7", "snow8"]
var snow4 = ["snow1", "snow2", "snow3", "snow4", "snow5", "snow6", "snow7", "snow8"]
var snow5 = ["snow1", "snow2", "snow3", "snow4", "snow5", "snow6", "snow7", "snow8"]
var snow6 = ["snow1", "snow2", "snow3", "snow4", "snow5", "snow6", "snow7", "snow8"]
for (var i in snow1, snow2, snow3, snow4, snow5, snow6) {

	IDRegistry.genBlockID(snow1[i]);
	Block.createBlockWithRotation(snow1[i], [
		{ name: snow1[i], texture: [[snow1[i], 0], [snow2[i], 0], [snow3[i], 0], [snow4[i], 0], [snow5[i], 0], [snow6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("snowgroup", Translation.translate("Compressed Snow group"), [
	BlockID.snow1,
	BlockID.snow2,
	BlockID.snow3,
	BlockID.snow4,
	BlockID.snow5,
	BlockID.snow6,
	BlockID.snow7,
	BlockID.snow8
]);



/*эндерняк*/

var end_stone1 = ["end_stone1", "end_stone2", "end_stone3", "end_stone4", "end_stone5", "end_stone6", "end_stone7", "end_stone8"]
var end_stone2 = ["end_stone1", "end_stone2", "end_stone3", "end_stone4", "end_stone5", "end_stone6", "end_stone7", "end_stone8"]
var end_stone3 = ["end_stone1", "end_stone2", "end_stone3", "end_stone4", "end_stone5", "end_stone6", "end_stone7", "end_stone8"]
var end_stone4 = ["end_stone1", "end_stone2", "end_stone3", "end_stone4", "end_stone5", "end_stone6", "end_stone7", "end_stone8"]
var end_stone5 = ["end_stone1", "end_stone2", "end_stone3", "end_stone4", "end_stone5", "end_stone6", "end_stone7", "end_stone8"]
var end_stone6 = ["end_stone1", "end_stone2", "end_stone3", "end_stone4", "end_stone5", "end_stone6", "end_stone7", "end_stone8"]
for (var i in end_stone1, end_stone2, end_stone3, end_stone4, end_stone5, end_stone6) {

	IDRegistry.genBlockID(end_stone1[i]);
	Block.createBlockWithRotation(end_stone1[i], [
		{ name: end_stone1[i], texture: [[end_stone1[i], 0], [end_stone2[i], 0], [end_stone3[i], 0], [end_stone4[i], 0], [end_stone5[i], 0], [end_stone6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("end_stonegroup", Translation.translate("Compressed ender stone group"), [
	BlockID.end_stone1,
	BlockID.end_stone2,
	BlockID.end_stone3,
	BlockID.end_stone4,
	BlockID.end_stone5,
	BlockID.end_stone6,
	BlockID.end_stone7,
	BlockID.end_stone8
]);



/*сушённый ламинарий*/

var dried_kelp_top1 = ["dried_kelp_top1", "dried_kelp_top2", "dried_kelp_top3", "dried_kelp_top4", "dried_kelp_top5", "dried_kelp_top6", "dried_kelp_top7", "dried_kelp_top8"]
var dried_kelp_top2 = ["dried_kelp_top1", "dried_kelp_top2", "dried_kelp_top3", "dried_kelp_top4", "dried_kelp_top5", "dried_kelp_top6", "dried_kelp_top7", "dried_kelp_top8"]
var dried_kelp_top3 = ["dried_kelp_top1", "dried_kelp_top2", "dried_kelp_top3", "dried_kelp_top4", "dried_kelp_top5", "dried_kelp_top6", "dried_kelp_top7", "dried_kelp_top8"]
var dried_kelp_top4 = ["dried_kelp_top1", "dried_kelp_top2", "dried_kelp_top3", "dried_kelp_top4", "dried_kelp_top5", "dried_kelp_top6", "dried_kelp_top7", "dried_kelp_top8"]
var dried_kelp_top5 = ["dried_kelp_top1", "dried_kelp_top2", "dried_kelp_top3", "dried_kelp_top4", "dried_kelp_top5", "dried_kelp_top6", "dried_kelp_top7", "dried_kelp_top8"]
var dried_kelp_top6 = ["dried_kelp_top1", "dried_kelp_top2", "dried_kelp_top3", "dried_kelp_top4", "dried_kelp_top5", "dried_kelp_top6", "dried_kelp_top7", "dried_kelp_top8"]
for (var i in dried_kelp_top1, dried_kelp_top2, dried_kelp_top3, dried_kelp_top4, dried_kelp_top5, dried_kelp_top6) {

	IDRegistry.genBlockID(dried_kelp_top1[i]);
	Block.createBlockWithRotation(dried_kelp_top1[i], [
		{ name: dried_kelp_top1[i], texture: [[dried_kelp_top1[i], 0], [dried_kelp_top2[i], 0], [dried_kelp_top3[i], 0], [dried_kelp_top4[i], 0], [dried_kelp_top5[i], 0], [dried_kelp_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("dried_kelp_topgroup", Translation.translate("Compressed group of dried kelp"), [
	BlockID.dried_kelp_top1,
	BlockID.dried_kelp_top2,
	BlockID.dried_kelp_top3,
	BlockID.dried_kelp_top4,
	BlockID.dried_kelp_top5,
	BlockID.dried_kelp_top6,
	BlockID.dried_kelp_top7,
	BlockID.dried_kelp_top8
]);



/*Блок пшеницы*/

var hay_block_side1 = ["hay_block_side1", "hay_block_side2", "hay_block_side3", "hay_block_side4", "hay_block_side5", "hay_block_side6", "hay_block_side7", "hay_block_side8"]
var hay_block_side2 = ["hay_block_side1", "hay_block_side2", "hay_block_side3", "hay_block_side4", "hay_block_side5", "hay_block_side6", "hay_block_side7", "hay_block_side8"]
var hay_block_side3 = ["hay_block_side1", "hay_block_side2", "hay_block_side3", "hay_block_side4", "hay_block_side5", "hay_block_side6", "hay_block_side7", "hay_block_side8"]
var hay_block_side4 = ["hay_block_side1", "hay_block_side2", "hay_block_side3", "hay_block_side4", "hay_block_side5", "hay_block_side6", "hay_block_side7", "hay_block_side8"]
var hay_block_side5 = ["hay_block_side1", "hay_block_side2", "hay_block_side3", "hay_block_side4", "hay_block_side5", "hay_block_side6", "hay_block_side7", "hay_block_side8"]
var hay_block_side6 = ["hay_block_side1", "hay_block_side2", "hay_block_side3", "hay_block_side4", "hay_block_side5", "hay_block_side6", "hay_block_side7", "hay_block_side8"]
for (var i in hay_block_side1, hay_block_side2, hay_block_side3, hay_block_side4, hay_block_side5, hay_block_side6) {

	IDRegistry.genBlockID(hay_block_side1[i]);
	Block.createBlockWithRotation(hay_block_side1[i], [
		{ name: hay_block_side1[i], texture: [[hay_block_side1[i], 0], [hay_block_side2[i], 0], [hay_block_side3[i], 0], [hay_block_side4[i], 0], [hay_block_side5[i], 0], [hay_block_side6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("hay_block_sidegroup", Translation.translate("Compressed Wheat Block Group"), [
	BlockID.hay_block_side1,
	BlockID.hay_block_side2,
	BlockID.hay_block_side3,
	BlockID.hay_block_side4,
	BlockID.hay_block_side5,
	BlockID.hay_block_side6,
	BlockID.hay_block_side7,
	BlockID.hay_block_side8
]);



/*блок арбуза*/

var melon_side1 = ["melon_side1", "melon_side2", "melon_side3", "melon_side4", "melon_side5", "melon_side6", "melon_side7", "melon_side8"]
var melon_side2 = ["melon_side1", "melon_side2", "melon_side3", "melon_side4", "melon_side5", "melon_side6", "melon_side7", "melon_side8"]
var melon_side3 = ["melon_side1", "melon_side2", "melon_side3", "melon_side4", "melon_side5", "melon_side6", "melon_side7", "melon_side8"]
var melon_side4 = ["melon_side1", "melon_side2", "melon_side3", "melon_side4", "melon_side5", "melon_side6", "melon_side7", "melon_side8"]
var melon_side5 = ["melon_side1", "melon_side2", "melon_side3", "melon_side4", "melon_side5", "melon_side6", "melon_side7", "melon_side8"]
var melon_side6 = ["melon_side1", "melon_side2", "melon_side3", "melon_side4", "melon_side5", "melon_side6", "melon_side7", "melon_side8"]
for (var i in melon_side1, melon_side2, melon_side3, melon_side4, melon_side5, melon_side6) {

	IDRegistry.genBlockID(melon_side1[i]);
	Block.createBlockWithRotation(melon_side1[i], [
		{ name: melon_side1[i], texture: [[melon_side1[i], 0], [melon_side2[i], 0], [melon_side3[i], 0], [melon_side4[i], 0], [melon_side5[i], 0], [melon_side6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("melon_sidegroup", Translation.translate("Compressed Watermelon Block Group"), [
	BlockID.melon_side1,
	BlockID.melon_side2,
	BlockID.melon_side3,
	BlockID.melon_side4,
	BlockID.melon_side5,
	BlockID.melon_side6,
	BlockID.melon_side7,
	BlockID.melon_side8
]);



/*железная руда*/

var iron_ore1 = ["iron_ore1", "iron_ore2", "iron_ore3", "iron_ore4", "iron_ore5", "iron_ore6", "iron_ore7", "iron_ore8"]
var iron_ore2 = ["iron_ore1", "iron_ore2", "iron_ore3", "iron_ore4", "iron_ore5", "iron_ore6", "iron_ore7", "iron_ore8"]
var iron_ore3 = ["iron_ore1", "iron_ore2", "iron_ore3", "iron_ore4", "iron_ore5", "iron_ore6", "iron_ore7", "iron_ore8"]
var iron_ore4 = ["iron_ore1", "iron_ore2", "iron_ore3", "iron_ore4", "iron_ore5", "iron_ore6", "iron_ore7", "iron_ore8"]
var iron_ore5 = ["iron_ore1", "iron_ore2", "iron_ore3", "iron_ore4", "iron_ore5", "iron_ore6", "iron_ore7", "iron_ore8"]
var iron_ore6 = ["iron_ore1", "iron_ore2", "iron_ore3", "iron_ore4", "iron_ore5", "iron_ore6", "iron_ore7", "iron_ore8"]
for (var i in iron_ore1, iron_ore2, iron_ore3, iron_ore4, iron_ore5, iron_ore6) {

	IDRegistry.genBlockID(iron_ore1[i]);
	Block.createBlockWithRotation(iron_ore1[i], [
		{ name: iron_ore1[i], texture: [[iron_ore1[i], 0], [iron_ore2[i], 0], [iron_ore3[i], 0], [iron_ore4[i], 0], [iron_ore5[i], 0], [iron_ore6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("iron_oregroup", Translation.translate("Compressed Iron Ore Group"), [
	BlockID.iron_ore1,
	BlockID.iron_ore2,
	BlockID.iron_ore3,
	BlockID.iron_ore4,
	BlockID.iron_ore5,
	BlockID.iron_ore6,
	BlockID.iron_ore7,
	BlockID.iron_ore8
]);


/*золотая руда*/

var gold_ore1 = ["gold_ore1", "gold_ore2", "gold_ore3", "gold_ore4", "gold_ore5", "gold_ore6", "gold_ore7", "gold_ore8"]
var gold_ore2 = ["gold_ore1", "gold_ore2", "gold_ore3", "gold_ore4", "gold_ore5", "gold_ore6", "gold_ore7", "gold_ore8"]
var gold_ore3 = ["gold_ore1", "gold_ore2", "gold_ore3", "gold_ore4", "gold_ore5", "gold_ore6", "gold_ore7", "gold_ore8"]
var gold_ore4 = ["gold_ore1", "gold_ore2", "gold_ore3", "gold_ore4", "gold_ore5", "gold_ore6", "gold_ore7", "gold_ore8"]
var gold_ore5 = ["gold_ore1", "gold_ore2", "gold_ore3", "gold_ore4", "gold_ore5", "gold_ore6", "gold_ore7", "gold_ore8"]
var gold_ore6 = ["gold_ore1", "gold_ore2", "gold_ore3", "gold_ore4", "gold_ore5", "gold_ore6", "gold_ore7", "gold_ore8"]
for (var i in gold_ore1, gold_ore2, gold_ore3, gold_ore4, gold_ore5, gold_ore6) {

	IDRegistry.genBlockID(gold_ore1[i]);
	Block.createBlockWithRotation(gold_ore1[i], [
		{ name: gold_ore1[i], texture: [[gold_ore1[i], 0], [gold_ore2[i], 0], [gold_ore3[i], 0], [gold_ore4[i], 0], [gold_ore5[i], 0], [gold_ore6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("gold_oregroup", Translation.translate("Compressed Gold Ore Group"), [
	BlockID.gold_ore1,
	BlockID.gold_ore2,
	BlockID.gold_ore3,
	BlockID.gold_ore4,
	BlockID.gold_ore5,
	BlockID.gold_ore6,
	BlockID.gold_ore7,
	BlockID.gold_ore8
]);



/*железный блок*/

var iron_block1 = ["iron_block1", "iron_block2", "iron_block3", "iron_block4", "iron_block5", "iron_block6", "iron_block7", "iron_block8"]
var iron_block2 = ["iron_block1", "iron_block2", "iron_block3", "iron_block4", "iron_block5", "iron_block6", "iron_block7", "iron_block8"]
var iron_block3 = ["iron_block1", "iron_block2", "iron_block3", "iron_block4", "iron_block5", "iron_block6", "iron_block7", "iron_block8"]
var iron_block4 = ["iron_block1", "iron_block2", "iron_block3", "iron_block4", "iron_block5", "iron_block6", "iron_block7", "iron_block8"]
var iron_block5 = ["iron_block1", "iron_block2", "iron_block3", "iron_block4", "iron_block5", "iron_block6", "iron_block7", "iron_block8"]
var iron_block6 = ["iron_block1", "iron_block2", "iron_block3", "iron_block4", "iron_block5", "iron_block6", "iron_block7", "iron_block8"]
for (var i in iron_block1, iron_block2, iron_block3, iron_block4, iron_block5, iron_block6) {

	IDRegistry.genBlockID(iron_block1[i]);
	Block.createBlockWithRotation(iron_block1[i], [
		{ name: iron_block1[i], texture: [[iron_block1[i], 0], [iron_block2[i], 0], [iron_block3[i], 0], [iron_block4[i], 0], [iron_block5[i], 0], [iron_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("iron_blockgroup", Translation.translate("Compressed Iron Block Group"), [
	BlockID.iron_block1,
	BlockID.iron_block2,
	BlockID.iron_block3,
	BlockID.iron_block4,
	BlockID.iron_block5,
	BlockID.iron_block6,
	BlockID.iron_block7,
	BlockID.iron_block8
]);



/*золотой блок*/

var gold_block1 = ["gold_block1", "gold_block2", "gold_block3", "gold_block4", "gold_block5", "gold_block6", "gold_block7", "gold_block8"]
var gold_block2 = ["gold_block1", "gold_block2", "gold_block3", "gold_block4", "gold_block5", "gold_block6", "gold_block7", "gold_block8"]
var gold_block3 = ["gold_block1", "gold_block2", "gold_block3", "gold_block4", "gold_block5", "gold_block6", "gold_block7", "gold_block8"]
var gold_block4 = ["gold_block1", "gold_block2", "gold_block3", "gold_block4", "gold_block5", "gold_block6", "gold_block7", "gold_block8"]
var gold_block5 = ["gold_block1", "gold_block2", "gold_block3", "gold_block4", "gold_block5", "gold_block6", "gold_block7", "gold_block8"]
var gold_block6 = ["gold_block1", "gold_block2", "gold_block3", "gold_block4", "gold_block5", "gold_block6", "gold_block7", "gold_block8"]
for (var i in gold_block1, gold_block2, gold_block3, gold_block4, gold_block5, gold_block6) {

	IDRegistry.genBlockID(gold_block1[i]);
	Block.createBlockWithRotation(gold_block1[i], [
		{ name: gold_block1[i], texture: [[gold_block1[i], 0], [gold_block2[i], 0], [gold_block3[i], 0], [gold_block4[i], 0], [gold_block5[i], 0], [gold_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("gold_blockgroup", Translation.translate("Compressed group of the golden block"), [
	BlockID.gold_block1,
	BlockID.gold_block2,
	BlockID.gold_block3,
	BlockID.gold_block4,
	BlockID.gold_block5,
	BlockID.gold_block6,
	BlockID.gold_block7,
	BlockID.gold_block8
]);


/*эмеральдовый блок*/

var emerald_block1 = ["emerald_block1", "emerald_block2", "emerald_block3", "emerald_block4", "emerald_block5", "emerald_block6", "emerald_block7", "emerald_block8"]
var emerald_block2 = ["emerald_block1", "emerald_block2", "emerald_block3", "emerald_block4", "emerald_block5", "emerald_block6", "emerald_block7", "emerald_block8"]
var emerald_block3 = ["emerald_block1", "emerald_block2", "emerald_block3", "emerald_block4", "emerald_block5", "emerald_block6", "emerald_block7", "emerald_block8"]
var emerald_block4 = ["emerald_block1", "emerald_block2", "emerald_block3", "emerald_block4", "emerald_block5", "emerald_block6", "emerald_block7", "emerald_block8"]
var emerald_block5 = ["emerald_block1", "emerald_block2", "emerald_block3", "emerald_block4", "emerald_block5", "emerald_block6", "emerald_block7", "emerald_block8"]
var emerald_block6 = ["emerald_block1", "emerald_block2", "emerald_block3", "emerald_block4", "emerald_block5", "emerald_block6", "emerald_block7", "emerald_block8"]
for (var i in emerald_block1, emerald_block2, emerald_block3, emerald_block4, emerald_block5, emerald_block6) {

	IDRegistry.genBlockID(emerald_block1[i]);
	Block.createBlockWithRotation(emerald_block1[i], [
		{ name: emerald_block1[i], texture: [[emerald_block1[i], 0], [emerald_block2[i], 0], [emerald_block3[i], 0], [emerald_block4[i], 0], [emerald_block5[i], 0], [emerald_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("emerald_blockgroup", Translation.translate("Compressed group of the emerald block"), [
	BlockID.emerald_block1,
	BlockID.emerald_block2,
	BlockID.emerald_block3,
	BlockID.emerald_block4,
	BlockID.emerald_block5,
	BlockID.emerald_block6,
	BlockID.emerald_block7,
	BlockID.emerald_block8
]);



/*алмазный блок*/

var diamond_block1 = ["diamond_block1", "diamond_block2", "diamond_block3", "diamond_block4", "diamond_block5", "diamond_block6", "diamond_block7", "diamond_block8"]
var diamond_block2 = ["diamond_block1", "diamond_block2", "diamond_block3", "diamond_block4", "diamond_block5", "diamond_block6", "diamond_block7", "diamond_block8"]
var diamond_block3 = ["diamond_block1", "diamond_block2", "diamond_block3", "diamond_block4", "diamond_block5", "diamond_block6", "diamond_block7", "diamond_block8"]
var diamond_block4 = ["diamond_block1", "diamond_block2", "diamond_block3", "diamond_block4", "diamond_block5", "diamond_block6", "diamond_block7", "diamond_block8"]
var diamond_block5 = ["diamond_block1", "diamond_block2", "diamond_block3", "diamond_block4", "diamond_block5", "diamond_block6", "diamond_block7", "diamond_block8"]
var diamond_block6 = ["diamond_block1", "diamond_block2", "diamond_block3", "diamond_block4", "diamond_block5", "diamond_block6", "diamond_block7", "diamond_block8"]
for (var i in diamond_block1, diamond_block2, diamond_block3, diamond_block4, diamond_block5, diamond_block6) {

	IDRegistry.genBlockID(diamond_block1[i]);
	Block.createBlockWithRotation(diamond_block1[i], [
		{ name: diamond_block1[i], texture: [[diamond_block1[i], 0], [diamond_block2[i], 0], [diamond_block3[i], 0], [diamond_block4[i], 0], [diamond_block5[i], 0], [diamond_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("diamond_blockgroup", Translation.translate("Compressed Diamond Block Group"), [
	BlockID.diamond_block1,
	BlockID.diamond_block2,
	BlockID.diamond_block3,
	BlockID.diamond_block4,
	BlockID.diamond_block5,
	BlockID.diamond_block6,
	BlockID.diamond_block7,
	BlockID.diamond_block8
]);

/*лазуритный блок*/

var lapis_block1 = ["lapis_block1", "lapis_block2", "lapis_block3", "lapis_block4", "lapis_block5", "lapis_block6", "lapis_block7", "lapis_block8"]
var lapis_block2 = ["lapis_block1", "lapis_block2", "lapis_block3", "lapis_block4", "lapis_block5", "lapis_block6", "lapis_block7", "lapis_block8"]
var lapis_block3 = ["lapis_block1", "lapis_block2", "lapis_block3", "lapis_block4", "lapis_block5", "lapis_block6", "lapis_block7", "lapis_block8"]
var lapis_block4 = ["lapis_block1", "lapis_block2", "lapis_block3", "lapis_block4", "lapis_block5", "lapis_block6", "lapis_block7", "lapis_block8"]
var lapis_block5 = ["lapis_block1", "lapis_block2", "lapis_block3", "lapis_block4", "lapis_block5", "lapis_block6", "lapis_block7", "lapis_block8"]
var lapis_block6 = ["lapis_block1", "lapis_block2", "lapis_block3", "lapis_block4", "lapis_block5", "lapis_block6", "lapis_block7", "lapis_block8"]
for (var i in lapis_block1, lapis_block2, lapis_block3, lapis_block4, lapis_block5, lapis_block6) {

	IDRegistry.genBlockID(lapis_block1[i]);
	Block.createBlockWithRotation(lapis_block1[i], [
		{ name: lapis_block1[i], texture: [[lapis_block1[i], 0], [lapis_block2[i], 0], [lapis_block3[i], 0], [lapis_block4[i], 0], [lapis_block5[i], 0], [lapis_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("lapis_blockgroup", Translation.translate("Compressed group of the lapis lazuli block"), [
	BlockID.lapis_block1,
	BlockID.lapis_block2,
	BlockID.lapis_block3,
	BlockID.lapis_block4,
	BlockID.lapis_block5,
	BlockID.lapis_block6,
	BlockID.lapis_block7,
	BlockID.lapis_block8
]);

/*Незеритовый блок*/

var netherite_block1 = ["netherite_block1", "netherite_block2", "netherite_block3", "netherite_block4", "netherite_block5", "netherite_block6", "netherite_block7", "netherite_block8"]
var netherite_block2 = ["netherite_block1", "netherite_block2", "netherite_block3", "netherite_block4", "netherite_block5", "netherite_block6", "netherite_block7", "netherite_block8"]
var netherite_block3 = ["netherite_block1", "netherite_block2", "netherite_block3", "netherite_block4", "netherite_block5", "netherite_block6", "netherite_block7", "netherite_block8"]
var netherite_block4 = ["netherite_block1", "netherite_block2", "netherite_block3", "netherite_block4", "netherite_block5", "netherite_block6", "netherite_block7", "netherite_block8"]
var netherite_block5 = ["netherite_block1", "netherite_block2", "netherite_block3", "netherite_block4", "netherite_block5", "netherite_block6", "netherite_block7", "netherite_block8"]
var netherite_block6 = ["netherite_block1", "netherite_block2", "netherite_block3", "netherite_block4", "netherite_block5", "netherite_block6", "netherite_block7", "netherite_block8"]
for (var i in netherite_block1, netherite_block2, netherite_block3, netherite_block4, netherite_block5, netherite_block6) {

	IDRegistry.genBlockID(netherite_block1[i]);
	Block.createBlockWithRotation(netherite_block1[i], [
		{ name: netherite_block1[i], texture: [[netherite_block1[i], 0], [netherite_block2[i], 0], [netherite_block3[i], 0], [netherite_block4[i], 0], [netherite_block5[i], 0], [netherite_block6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("netherite_blockgroup", Translation.translate("Compressed group of a non-cerite block"), [
	BlockID.netherite_block1,
	BlockID.netherite_block2,
	BlockID.netherite_block3,
	BlockID.netherite_block4,
	BlockID.netherite_block5,
	BlockID.netherite_block6,
	BlockID.netherite_block7,
	BlockID.netherite_block8
]);



/*Незерек*/

var netherrack1 = ["netherrack1", "netherrack2", "netherrack3", "netherrack4", "netherrack5", "netherrack6", "netherrack7", "netherrack8"]
var netherrack2 = ["netherrack1", "netherrack2", "netherrack3", "netherrack4", "netherrack5", "netherrack6", "netherrack7", "netherrack8"]
var netherrack3 = ["netherrack1", "netherrack2", "netherrack3", "netherrack4", "netherrack5", "netherrack6", "netherrack7", "netherrack8"]
var netherrack4 = ["netherrack1", "netherrack2", "netherrack3", "netherrack4", "netherrack5", "netherrack6", "netherrack7", "netherrack8"]
var netherrack5 = ["netherrack1", "netherrack2", "netherrack3", "netherrack4", "netherrack5", "netherrack6", "netherrack7", "netherrack8"]
var netherrack6 = ["netherrack1", "netherrack2", "netherrack3", "netherrack4", "netherrack5", "netherrack6", "netherrack7", "netherrack8"]
for (var i in netherrack1, netherrack2, netherrack3, netherrack4, netherrack5, netherrack6) {

	IDRegistry.genBlockID(netherrack1[i]);
	Block.createBlockWithRotation(netherrack1[i], [
		{ name: netherrack1[i], texture: [[netherrack1[i], 0], [netherrack2[i], 0], [netherrack3[i], 0], [netherrack4[i], 0], [netherrack5[i], 0], [netherrack6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("netherrackgroup", Translation.translate("Compressed group netherrack"), [
	BlockID.netherrack1,
	BlockID.netherrack2,
	BlockID.netherrack3,
	BlockID.netherrack4,
	BlockID.netherrack5,
	BlockID.netherrack6,
	BlockID.netherrack7,
	BlockID.netherrack8
]);


/*Сжатый кварц*/

var quartz_block_top1 = ["quartz_block_top1", "quartz_block_top2", "quartz_block_top3", "quartz_block_top4", "quartz_block_top5", "quartz_block_top6", "quartz_block_top7", "quartz_block_top8"]
var quartz_block_top2 = ["quartz_block_top1", "quartz_block_top2", "quartz_block_top3", "quartz_block_top4", "quartz_block_top5", "quartz_block_top6", "quartz_block_top7", "quartz_block_top8"]
var quartz_block_top3 = ["quartz_block_top1", "quartz_block_top2", "quartz_block_top3", "quartz_block_top4", "quartz_block_top5", "quartz_block_top6", "quartz_block_top7", "quartz_block_top8"]
var quartz_block_top4 = ["quartz_block_top1", "quartz_block_top2", "quartz_block_top3", "quartz_block_top4", "quartz_block_top5", "quartz_block_top6", "quartz_block_top7", "quartz_block_top8"]
var quartz_block_top5 = ["quartz_block_top1", "quartz_block_top2", "quartz_block_top3", "quartz_block_top4", "quartz_block_top5", "quartz_block_top6", "quartz_block_top7", "quartz_block_top8"]
var quartz_block_top6 = ["quartz_block_top1", "quartz_block_top2", "quartz_block_top3", "quartz_block_top4", "quartz_block_top5", "quartz_block_top6", "quartz_block_top7", "quartz_block_top8"]
for (var i in quartz_block_top1, quartz_block_top2, quartz_block_top3, quartz_block_top4, quartz_block_top5, quartz_block_top6) {

	IDRegistry.genBlockID(quartz_block_top1[i]);
	Block.createBlockWithRotation(quartz_block_top1[i], [
		{ name: quartz_block_top1[i], texture: [[quartz_block_top1[i], 0], [quartz_block_top2[i], 0], [quartz_block_top3[i], 0], [quartz_block_top4[i], 0], [quartz_block_top5[i], 0], [quartz_block_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("quartz_block_topgroup", Translation.translate("Compressed Quartz block group"), [
	BlockID.quartz_block_top1,
	BlockID.quartz_block_top2,
	BlockID.quartz_block_top3,
	BlockID.quartz_block_top4,
	BlockID.quartz_block_top5,
	BlockID.quartz_block_top6,
	BlockID.quartz_block_top7,
	BlockID.quartz_block_top8
]);


/*Красный незер кирпич*/

var red_nether_brick1 = ["red_nether_brick1", "red_nether_brick2", "red_nether_brick3", "red_nether_brick4", "red_nether_brick5", "red_nether_brick6", "red_nether_brick7", "red_nether_brick8"]
var red_nether_brick2 = ["red_nether_brick1", "red_nether_brick2", "red_nether_brick3", "red_nether_brick4", "red_nether_brick5", "red_nether_brick6", "red_nether_brick7", "red_nether_brick8"]
var red_nether_brick3 = ["red_nether_brick1", "red_nether_brick2", "red_nether_brick3", "red_nether_brick4", "red_nether_brick5", "red_nether_brick6", "red_nether_brick7", "red_nether_brick8"]
var red_nether_brick4 = ["red_nether_brick1", "red_nether_brick2", "red_nether_brick3", "red_nether_brick4", "red_nether_brick5", "red_nether_brick6", "red_nether_brick7", "red_nether_brick8"]
var red_nether_brick5 = ["red_nether_brick1", "red_nether_brick2", "red_nether_brick3", "red_nether_brick4", "red_nether_brick5", "red_nether_brick6", "red_nether_brick7", "red_nether_brick8"]
var red_nether_brick6 = ["red_nether_brick1", "red_nether_brick2", "red_nether_brick3", "red_nether_brick4", "red_nether_brick5", "red_nether_brick6", "red_nether_brick7", "red_nether_brick8"]
for (var i in red_nether_brick1, red_nether_brick2, red_nether_brick3, red_nether_brick4, red_nether_brick5, red_nether_brick6) {

	IDRegistry.genBlockID(red_nether_brick1[i]);
	Block.createBlockWithRotation(red_nether_brick1[i], [
		{ name: red_nether_brick1[i], texture: [[red_nether_brick1[i], 0], [red_nether_brick2[i], 0], [red_nether_brick3[i], 0], [red_nether_brick4[i], 0], [red_nether_brick5[i], 0], [red_nether_brick6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("red_nether_brickgroup", Translation.translate("Compressed group of red hell bricks"), [
	BlockID.red_nether_brick1,
	BlockID.red_nether_brick2,
	BlockID.red_nether_brick3,
	BlockID.red_nether_brick4,
	BlockID.red_nether_brick5,
	BlockID.red_nether_brick6,
	BlockID.red_nether_brick7,
	BlockID.red_nether_brick8
]);

/*незер кирпич*/

var nether_brick1 = ["nether_brick1", "nether_brick2", "nether_brick3", "nether_brick4", "nether_brick5", "nether_brick6", "nether_brick7", "nether_brick8"]
var nether_brick2 = ["nether_brick1", "nether_brick2", "nether_brick3", "nether_brick4", "nether_brick5", "nether_brick6", "nether_brick7", "nether_brick8"]
var nether_brick3 = ["nether_brick1", "nether_brick2", "nether_brick3", "nether_brick4", "nether_brick5", "nether_brick6", "nether_brick7", "nether_brick8"]
var nether_brick4 = ["nether_brick1", "nether_brick2", "nether_brick3", "nether_brick4", "nether_brick5", "nether_brick6", "nether_brick7", "nether_brick8"]
var nether_brick5 = ["nether_brick1", "nether_brick2", "nether_brick3", "nether_brick4", "nether_brick5", "nether_brick6", "nether_brick7", "nether_brick8"]
var nether_brick6 = ["nether_brick1", "nether_brick2", "nether_brick3", "nether_brick4", "nether_brick5", "nether_brick6", "nether_brick7", "nether_brick8"]
for (var i in nether_brick1, nether_brick2, nether_brick3, nether_brick4, nether_brick5, nether_brick6) {

	IDRegistry.genBlockID(nether_brick1[i]);
	Block.createBlockWithRotation(nether_brick1[i], [
		{ name: nether_brick1[i], texture: [[nether_brick1[i], 0], [nether_brick2[i], 0], [nether_brick3[i], 0], [nether_brick4[i], 0], [nether_brick5[i], 0], [nether_brick6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("nether_brickgroup", Translation.translate("Compressed Hell Brick Group"), [
	BlockID.nether_brick1,
	BlockID.nether_brick2,
	BlockID.nether_brick3,
	BlockID.nether_brick4,
	BlockID.nether_brick5,
	BlockID.nether_brick6,
	BlockID.nether_brick7,
	BlockID.nether_brick8
]);

/*блок кости*/

var bone_block_top1 = ["bone_block_top1", "bone_block_top2", "bone_block_top3", "bone_block_top4", "bone_block_top5", "bone_block_top6", "bone_block_top7", "bone_block_top8"]
var bone_block_top2 = ["bone_block_top1", "bone_block_top2", "bone_block_top3", "bone_block_top4", "bone_block_top5", "bone_block_top6", "bone_block_top7", "bone_block_top8"]
var bone_block_top3 = ["bone_block_top1", "bone_block_top2", "bone_block_top3", "bone_block_top4", "bone_block_top5", "bone_block_top6", "bone_block_top7", "bone_block_top8"]
var bone_block_top4 = ["bone_block_top1", "bone_block_top2", "bone_block_top3", "bone_block_top4", "bone_block_top5", "bone_block_top6", "bone_block_top7", "bone_block_top8"]
var bone_block_top5 = ["bone_block_top1", "bone_block_top2", "bone_block_top3", "bone_block_top4", "bone_block_top5", "bone_block_top6", "bone_block_top7", "bone_block_top8"]
var bone_block_top6 = ["bone_block_top1", "bone_block_top2", "bone_block_top3", "bone_block_top4", "bone_block_top5", "bone_block_top6", "bone_block_top7", "bone_block_top8"]
for (var i in bone_block_top1, bone_block_top2, bone_block_top3, bone_block_top4, bone_block_top5, bone_block_top6) {

	IDRegistry.genBlockID(bone_block_top1[i]);
	Block.createBlockWithRotation(bone_block_top1[i], [
		{ name: bone_block_top1[i], texture: [[bone_block_top1[i], 0], [bone_block_top2[i], 0], [bone_block_top3[i], 0], [bone_block_top4[i], 0], [bone_block_top5[i], 0], [bone_block_top6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("bone_block_topgroup", Translation.translate("Compressed Bone Block Group"), [
	BlockID.bone_block_top1,
	BlockID.bone_block_top2,
	BlockID.bone_block_top3,
	BlockID.bone_block_top4,
	BlockID.bone_block_top5,
	BlockID.bone_block_top6,
	BlockID.bone_block_top7,
	BlockID.bone_block_top8
]);



/*губка*/

var sponge1 = ["sponge1", "sponge2", "sponge3", "sponge4", "sponge5", "sponge6", "sponge7", "sponge8"]
var sponge2 = ["sponge1", "sponge2", "sponge3", "sponge4", "sponge5", "sponge6", "sponge7", "sponge8"]
var sponge3 = ["sponge1", "sponge2", "sponge3", "sponge4", "sponge5", "sponge6", "sponge7", "sponge8"]
var sponge4 = ["sponge1", "sponge2", "sponge3", "sponge4", "sponge5", "sponge6", "sponge7", "sponge8"]
var sponge5 = ["sponge1", "sponge2", "sponge3", "sponge4", "sponge5", "sponge6", "sponge7", "sponge8"]
var sponge6 = ["sponge1", "sponge2", "sponge3", "sponge4", "sponge5", "sponge6", "sponge7", "sponge8"]
for (var i in sponge1, sponge2, sponge3, sponge4, sponge5, sponge6) {

	IDRegistry.genBlockID(sponge1[i]);
	Block.createBlockWithRotation(sponge1[i], [
		{ name: sponge1[i], texture: [[sponge1[i], 0], [sponge2[i], 0], [sponge3[i], 0], [sponge4[i], 0], [sponge5[i], 0], [sponge6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("spongegroup", Translation.translate("Compressed group of sponges"), [
	BlockID.sponge1,
	BlockID.sponge2,
	BlockID.sponge3,
	BlockID.sponge4,
	BlockID.sponge5,
	BlockID.sponge6,
	BlockID.sponge7,
	BlockID.sponge8
]);


/*Блок лавы*/

var lava_placeholder1 = ["lava_placeholder1", "lava_placeholder2", "lava_placeholder3", "lava_placeholder4", "lava_placeholder5", "lava_placeholder6", "lava_placeholder7", "lava_placeholder8"]
var lava_placeholder2 = ["lava_placeholder1", "lava_placeholder2", "lava_placeholder3", "lava_placeholder4", "lava_placeholder5", "lava_placeholder6", "lava_placeholder7", "lava_placeholder8"]
var lava_placeholder3 = ["lava_placeholder1", "lava_placeholder2", "lava_placeholder3", "lava_placeholder4", "lava_placeholder5", "lava_placeholder6", "lava_placeholder7", "lava_placeholder8"]
var lava_placeholder4 = ["lava_placeholder1", "lava_placeholder2", "lava_placeholder3", "lava_placeholder4", "lava_placeholder5", "lava_placeholder6", "lava_placeholder7", "lava_placeholder8"]
var lava_placeholder5 = ["lava_placeholder1", "lava_placeholder2", "lava_placeholder3", "lava_placeholder4", "lava_placeholder5", "lava_placeholder6", "lava_placeholder7", "lava_placeholder8"]
var lava_placeholder6 = ["lava_placeholder1", "lava_placeholder2", "lava_placeholder3", "lava_placeholder4", "lava_placeholder5", "lava_placeholder6", "lava_placeholder7", "lava_placeholder8"]
for (var i in lava_placeholder1, lava_placeholder2, lava_placeholder3, lava_placeholder4, lava_placeholder5, lava_placeholder6) {

	IDRegistry.genBlockID(lava_placeholder1[i]);
	Block.createBlockWithRotation(lava_placeholder1[i], [
		{ name: lava_placeholder1[i], texture: [[lava_placeholder1[i], 0], [lava_placeholder2[i], 0], [lava_placeholder3[i], 0], [lava_placeholder4[i], 0], [lava_placeholder5[i], 0], [lava_placeholder6[i], 0]], inCreative: true }]);
}

Item.addCreativeGroup("lava_placeholdergroup", Translation.translate("Compressed group of lava blocks"), [
	BlockID.lava_placeholder1,
	BlockID.lava_placeholder2,
	BlockID.lava_placeholder3,
	BlockID.lava_placeholder4,
	BlockID.lava_placeholder5,
	BlockID.lava_placeholder6,
	BlockID.lava_placeholder7,
	BlockID.lava_placeholder8
]);

//Молодец что дошёл сюда//