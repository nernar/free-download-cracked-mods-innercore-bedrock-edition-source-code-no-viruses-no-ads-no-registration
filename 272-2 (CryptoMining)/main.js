/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 11
*/



// file: cryptovalute.js

IMPORT("dimensions");
IMPORT("Random");
IMPORT("ToolType");
IMPORT("SoundAPI");
IDRegistry.genItemID("oneDollar");
Item.createItem("oneDollar", "One Dollar", {name: "us1dollar"}, {});
IDRegistry.genItemID("twoDollar");
Item.createItem("twoDollar", "Two Dollars", {name: "us2dollar"}, {});
IDRegistry.genItemID("fiveDollar");
Item.createItem("fiveDollar", "Five Dollars", {name: "us5dollar"}, {});
IDRegistry.genItemID("tenDollar");
Item.createItem("tenDollar", "Ten Dollars", {name: "us10dollar"}, {});
IDRegistry.genItemID("twentyDollar");
Item.createItem("twentyDollar", "Twenty Dollars", {name: "us20dollar"}, {});
IDRegistry.genItemID("fiftyDollar");
Item.createItem("fiftyDollar", "Fifty Dollars", {name: "us50dollar"}, {});
IDRegistry.genItemID("oneHandredDollar");
Item.createItem("oneHandredDollar", "One Handred Dollars", {name: "us100dollar"}, {});

IDRegistry.genItemID("bitcoin");
Item.createItem("bitcoin", "Bitcoin", {name: "bitcoin", meta: 0}, {});
IDRegistry.genItemID("wondercoin");
Item.createItem("wondercoin", "Wondercoin", {name: "wondercoin", meta: 0}, {});
IDRegistry.genItemID("ethereum");
Item.createItem("ethereum", "Ethereum", {name: "ethereum", meta: 0}, {});
IDRegistry.genItemID("arkcoin");
Item.createItem("arkcoin", "Arkcoin", {name: "arkcoin", meta: 0}, {});
IDRegistry.genItemID("cosmocash");
Item.createItem("cosmocash", "Cosmocash", {name: "cosmocash", meta: 0}, {});
IDRegistry.genItemID("augur");
Item.createItem("augur", "Augur", {name: "augur", meta: 0}, {});
IDRegistry.genItemID("lisk");
Item.createItem("lisk", "Lisk", {name: "lisk", meta: 0}, {});
IDRegistry.genItemID("firecoin");
Item.createItem("firecoin", "Firecoin", {name: "firecoin", meta: 0}, {});
IDRegistry.genItemID("zerocash");
Item.createItem("zerocash", "Zerocash", {name: "zerocash", meta: 0}, {});
IDRegistry.genItemID("dashcoin");
Item.createItem("dashcoin", "Dashcoin", {name: "dashcoin", meta: 0}, {});
IDRegistry.genItemID("monero");
Item.createItem("monero", "Monero", {name: "monero", meta: 0}, {});
IDRegistry.genItemID("ripple");
Item.createItem("ripple", "Ripple", {name: "ripple", meta: 0}, {});
IDRegistry.genItemID("windcoin");
Item.createItem("windcoin", "Windcoin", {name: "windcoin", meta: 0}, {});
IDRegistry.genItemID("litecoin");
Item.createItem("litecoin", "Litecoin", {name: "litecoin", meta: 0}, {});
IDRegistry.genItemID("dogecoin");
Item.createItem("dogecoin", "Dogecoin", {name: "dogecoin", meta: 0}, {});
IDRegistry.genItemID("peercoin");
Item.createItem("peercoin", "Peercoin", {name: "peercoin", meta: 0}, {});
IDRegistry.genItemID("concoin");
Item.createItem("concoin", "Concoin", {name: "concoin", meta: 0}, {});
IDRegistry.genItemID("buzcoin");
Item.createItem("buzcoin", "Buzcoin", {name: "buzcoin", meta: 0}, {});
IDRegistry.genItemID("mooncoin");
Item.createItem("mooncoin", "Mooncoin", {name: "mooncoin", meta: 0}, {});
IDRegistry.genItemID("marscoin");
Item.createItem("marscoin", "Marscoin", {name: "marscoin", meta: 0}, {});
var BLOCK_TYPE_CRYPTO = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 5,
    explosionres: 90
}, "stone");
var BLOCK_TYPE_DOLLAR = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 0,
    explosionres: 2
}, "wood");
IDRegistry.genBlockID("oneDollarStack");
Block.createBlock("oneDollarStack", [
{name: "One Dollar Stack", texture: [["us_dollar_stack", 1], ["us_dollar_stack", 1], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.oneDollarStack, "wood", 3, true);
Block.registerDropFunction("oneDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.oneDollar, 9, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("twoDollarStack");
Block.createBlock("twoDollarStack", [
{name: "Two Dollars Stack", texture: [["us_dollar_stack", 2], ["us_dollar_stack", 2], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.twoDollarStack, "wood", 3, true);
Block.registerDropFunction("twoDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.twoDollar, 9, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("fiveDollarStack");
Block.createBlock("fiveDollarStack", [
{name: "Five Dollars Stack", texture: [["us_dollar_stack", 5], ["us_dollar_stack", 5], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.fiveDollarStack, "wood", 3, true);
Block.registerDropFunction("fiveDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.fiveDollar, 9, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("tenDollarStack");
Block.createBlock("tenDollarStack", [
{name: "Ten Dollars Stack", texture: [["us_dollar_stack", 10], ["us_dollar_stack", 10], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.tenDollarStack, "wood", 3, true);
Block.registerDropFunction("tenDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.tenDollar, 9, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("twentyDollarStack");
Block.createBlock("twentyDollarStack", [
{name: "Twenty Dollars Stack", texture: [["us_dollar_stack", 20], ["us_dollar_stack", 20], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.twentyDollarStack, "wood", 3, true);
Block.registerDropFunction("twentyDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.twentyDollar, 9, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("fiftyDollarStack");
Block.createBlock("fiftyDollarStack", [
{name: "Fifty Dollars Stack", texture: [["us_dollar_stack", 50], ["us_dollar_stack", 50], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.fiftyDollarStack, "wood", 3, true);
Block.registerDropFunction("fiftyDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.fiftyDollar, 9, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("oneHandredDollarStack");
Block.createBlock("oneHandredDollarStack", [
{name: "One Handred Dollars Stack", texture: [["us_dollar_stack", 100], ["us_dollar_stack", 100], ["us_dollar_stack", 0]], inCreative: true}
], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.oneHandredDollarStack, "wood", 3, true);
Block.registerDropFunction("oneHandredDollarStack", function(coords, blockID, blockData, level, enchant){
if(level > -1){
    return [[ItemID.oneHandredDollar, 9, 0]]
}
return [];
}, 3);

IDRegistry.genBlockID("bitcoin");
Block.createBlock("bitcoin", [
{name: "Bitcoin", texture: [["bitcoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.bitcoin, "stone", 3, true);
Block.registerDropFunction("bitcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.bitcoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("wondercoin");
Block.createBlock("wondercoin", [
{name: "Wondercoin", texture: [["wondercoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.wondercoin, "stone", 3, true);
Block.registerDropFunction("wondercoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.wondercoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("ethereum");
Block.createBlock("ethereum", [
{name: "Ethereum", texture: [["ethereum_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.ethereum, "stone", 3, true);
Block.registerDropFunction("ethereum", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.ethereum, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("arkcoin");
Block.createBlock("arkcoin", [
{name: "Arkcoin", texture: [["arkcoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.arkcoin, "stone", 3, true);
Block.registerDropFunction("arkcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.arkcoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("cosmocash");
Block.createBlock("cosmocash", [
{name: "Cosmocash", texture: [["cosmocash_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.cosmocash, "stone", 3, true);
Block.registerDropFunction("cosmocash", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.cosmocash, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("augur");
Block.createBlock("augur", [
{name: "Augur", texture: [["augur_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.augur, "stone", 3, true);
Block.registerDropFunction("augur", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.augur, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("lisk");
Block.createBlock("lisk", [
{name: "Lisk", texture: [["lisk_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.lisk, "stone", 3, true);
Block.registerDropFunction("lisk", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.lisk, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("firecoin");
Block.createBlock("firecoin", [
{name: "Firecoin", texture: [["firecoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.firecoin, "stone", 3, true);
Block.registerDropFunction("firecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.firecoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("zerocash");
Block.createBlock("zerocash", [
{name: "Zerocash", texture: [["zerocash_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.zerocash, "stone", 3, true);
Block.registerDropFunction("zerocash", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.zerocash, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("dashcoin");
Block.createBlock("dashcoin", [
{name: "Dashcoin", texture: [["dashcoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.dashcoin, "stone", 3, true);
Block.registerDropFunction("dashcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.dashcoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("monero");
Block.createBlock("monero", [
{name: "Monero", texture: [["monero_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.monero, "stone", 3, true);
Block.registerDropFunction("monero", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.monero, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("ripple");
Block.createBlock("ripple", [
{name: "Ripple", texture: [["ripple_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.ripple, "stone", 3, true);
Block.registerDropFunction("ripple", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.ripple, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("windcoin");
Block.createBlock("windcoin", [
{name: "Windcoin", texture: [["windcoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.windcoin, "stone", 3, true);
Block.registerDropFunction("windcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.windcoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("litecoin");
Block.createBlock("litecoin", [
{name: "Litecoin", texture: [["litecoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.litecoin, "stone", 3, true);
Block.registerDropFunction("litecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.litecoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("dogecoin");
Block.createBlock("dogecoin", [
{name: "Dogecoin", texture: [["dogecoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.dogecoin, "stone", 3, true);
Block.registerDropFunction("dogecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.dogecoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("peercoin");
Block.createBlock("peercoin", [
{name: "Peercoin", texture: [["peercoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.peercoin, "stone", 3, true);
Block.registerDropFunction("peercoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.peercoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("concoin");
Block.createBlock("concoin", [
{name: "Concoin", texture: [["concoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.concoin, "stone", 3, true);
Block.registerDropFunction("concoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.concoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("buzcoin");
Block.createBlock("buzcoin", [
{name: "Buzcoin", texture: [["buzcoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.buzcoin, "stone", 3, true);
Block.registerDropFunction("buzcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.buzcoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("mooncoin");
Block.createBlock("mooncoin", [
{name: "Mooncoin", texture: [["mooncoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.mooncoin, "stone", 3, true);
Block.registerDropFunction("mooncoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.mooncoin, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("marscoin");
Block.createBlock("marscoin", [
{name: "Marscoin", texture: [["marscoin_ore", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.marscoin, "stone", 3, true);
Block.registerDropFunction("marscoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    return [[ItemID.marscoin, 1, 0]]
}
return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<5;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 16);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bitcoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<20;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 46);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.peercoin, 1, 4);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<18;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 40);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.litecoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<14;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 30);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dashcoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<6;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 20);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ethereum, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<15;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 34);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.monero, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<12;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 24);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.augur, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<13;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 26);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lisk, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<14;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 28);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.zerocash, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<17;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 36);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ripple, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<19;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 43);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dogecoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<6;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 18);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.wondercoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<8;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 20);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.cosmocash, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<16;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 28);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.firecoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<12;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 38);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.windcoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<7;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 18);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.arkcoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<12;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 20);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.concoin, 1, 3);
}
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
for(var i=0;i<21;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 43);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.buzcoin, 1, 3);
}
}
)

Recipes.addShaped({id:BlockID.bitcoin,count:1,data:0},["aa","aa"],['a',ItemID.bitcoin,0]);
Recipes.addShaped({id:ItemID.bitcoin,count:4,data:0},["b"],['b',BlockID.bitcoin,0]);
Recipes.addShaped({id:BlockID.ethereum,count:1,data:0},["aa","aa"],['a',ItemID.ethereum,0]);
Recipes.addShaped({id:ItemID.ethereum,count:4,data:0},["b"],['b',BlockID.ethereum,0]);
Recipes.addShaped({id:BlockID.concoin,count:1,data:0},["aa","aa"],['a',ItemID.concoin,0]);
Recipes.addShaped({id:ItemID.concoin,count:4,data:0},["b"],['b',BlockID.concoin,0]);
Recipes.addShaped({id:BlockID.arkcoin,count:1,data:0},["aa","aa"],['a',ItemID.arkcoin,0]);
Recipes.addShaped({id:ItemID.arkcoin,count:4,data:0},["b"],['b',BlockID.arkcoin,0]);
Recipes.addShaped({id:BlockID.wondercoin,count:1,data:0},["aa","aa"],['a',ItemID.wondercoin,0]);
Recipes.addShaped({id:ItemID.wondercoin,count:4,data:0},["b"],['b',BlockID.wondercoin,0]);
Recipes.addShaped({id:BlockID.cosmocash,count:1,data:0},["aa","aa"],['a',ItemID.cosmocash,0]);
Recipes.addShaped({id:ItemID.cosmocash,count:4,data:0},["b"],['b',BlockID.cosmocash,0]);
Recipes.addShaped({id:BlockID.augur,count:1,data:0},["aa","aa"],['a',ItemID.augur,0]);
Recipes.addShaped({id:ItemID.augur,count:4,data:0},["b"],['b',BlockID.augur,0]);
Recipes.addShaped({id:BlockID.lisk,count:1,data:0},["aa","aa"],['a',ItemID.lisk,0]);
Recipes.addShaped({id:ItemID.lisk,count:4,data:0},["b"],['b',BlockID.lisk,0]);
Recipes.addShaped({id:BlockID.firecoin,count:1,data:0},["aa","aa"],['a',ItemID.firecoin,0]);
Recipes.addShaped({id:ItemID.firecoin,count:4,data:0},["b"],['b',BlockID.firecoin,0]);
Recipes.addShaped({id:BlockID.zerocash,count:1,data:0},["aa","aa"],['a',ItemID.zerocash,0]);
Recipes.addShaped({id:ItemID.zerocash,count:4,data:0},["b"],['b',BlockID.zerocash,0]);
Recipes.addShaped({id:BlockID.dashcoin,count:1,data:0},["aa","aa"],['a',ItemID.dashcoin,0]);
Recipes.addShaped({id:ItemID.dashcoin,count:4,data:0},["b"],['b',BlockID.dashcoin,0]);
Recipes.addShaped({id:BlockID.monero,count:1,data:0},["aa","aa"],['a',ItemID.monero,0]);
Recipes.addShaped({id:ItemID.monero,count:4,data:0},["b"],['b',BlockID.monero,0]);
Recipes.addShaped({id:BlockID.ripple,count:1,data:0},["aa","aa"],['a',ItemID.ripple,0]);
Recipes.addShaped({id:ItemID.ripple,count:4,data:0},["b"],['b',BlockID.ripple,0]);
Recipes.addShaped({id:BlockID.windcoin,count:1,data:0},["aa","aa"],['a',ItemID.windcoin,0]);
Recipes.addShaped({id:ItemID.windcoin,count:4,data:0},["b"],['b',BlockID.windcoin,0]);
Recipes.addShaped({id:BlockID.litecoin,count:1,data:0},["aa","aa"],['a',ItemID.litecoin,0]);
Recipes.addShaped({id:ItemID.litecoin,count:4,data:0},["b"],['b',BlockID.litecoin,0]);
Recipes.addShaped({id:BlockID.dogecoin,count:1,data:0},["aa","aa"],['a',ItemID.dogecoin,0]);
Recipes.addShaped({id:ItemID.dogecoin,count:4,data:0},["b"],['b',BlockID.dogecoin,0]);
Recipes.addShaped({id:BlockID.buzcoin,count:1,data:0},["aa","aa"],['a',ItemID.buzcoin,0]);
Recipes.addShaped({id:ItemID.buzcoin,count:4,data:0},["b"],['b',BlockID.buzcoin,0]);
Recipes.addShaped({id:BlockID.peercoin,count:1,data:0},["aa","aa"],['a',ItemID.peercoin,0]);
Recipes.addShaped({id:ItemID.peercoin,count:4,data:0},["b"],['b',BlockID.peercoin,0]);
Recipes.addShaped({id:BlockID.mooncoin,count:1,data:0},["aa","aa"],['a',ItemID.mooncoin,0]);
Recipes.addShaped({id:ItemID.mooncoin,count:4,data:0},["b"],['b',BlockID.mooncoin,0]);
Recipes.addShaped({id:BlockID.marscoin,count:1,data:0},["aa","aa"],['a',ItemID.marscoin,0]);
Recipes.addShaped({id:ItemID.marscoin,count:4,data:0},["b"],['b',BlockID.marscoin,0]);
    
Recipes.addShaped({id:BlockID.oneDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.oneDollar,0]);
Recipes.addShaped({id:ItemID.oneDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.oneDollarStack,0]);
Recipes.addShaped({id:BlockID.twoDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.twoDollar,0]);
Recipes.addShaped({id:ItemID.twoDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.twoDollarStack,0]);
Recipes.addShaped({id:BlockID.fiveDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.fiveDollar,0]);
Recipes.addShaped({id:ItemID.fiveDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.fiveDollarStack,0]);
Recipes.addShaped({id:BlockID.tenDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.tenDollar,0]);
Recipes.addShaped({id:ItemID.tenDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.tenDollarStack,0]);
Recipes.addShaped({id:BlockID.twentyDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.twentyDollar,0]);
Recipes.addShaped({id:ItemID.twentyDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.twentyDollarStack,0]);
Recipes.addShaped({id:BlockID.fiftyDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.fiftyDollar,0]);
Recipes.addShaped({id:ItemID.fiftyDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.fiftyDollarStack,0]);
Recipes.addShaped({id:BlockID.oneHandredDollarStack,count:1,data:0},["aaa","aaa","aaa"],['a',ItemID.oneHandredDollar,0]);
Recipes.addShaped({id:ItemID.oneHandredDollar,count:9,data:0},["aaa","aba","aaa"],['b',BlockID.oneHandredDollarStack,0]);
    
    




// file: tools.js

IDRegistry.genItemID("bitcoinPickaxe");
Item.createItem("bitcoinPickaxe", "Bitcoin Pickaxe", {name: "bitcoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("bitcoin", {durability: 3400, level: 4, efficiency: 34, damage: 8, enchantability: 1});
ToolAPI.setTool(ItemID.bitcoinPickaxe, "bitcoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bitcoinPickaxe)
{
Entity.addEffect(Player.get(), 3, 180, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("wondercoinPickaxe");
Item.createItem("wondercoinPickaxe", "Wondercoin Pickaxe", {name: "wondercoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("wondercoin", {durability: 2300, level: 4, efficiency: 23, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.wondercoinPickaxe, "wondercoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.wondercoinPickaxe)
{
Entity.addEffect(Player.get(), 2, 80, 80, false,false);
Entity.addEffect(Player.get(), 11, 80, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("ethereumPickaxe");
Item.createItem("ethereumPickaxe", "Ethereum Pickaxe", {name: "ethereum_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ethereum", {durability: 2800, level: 4, efficiency: 28, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.ethereumPickaxe, "ethereum", ToolType.pickaxe);
IDRegistry.genItemID("arkcoinPickaxe");
Item.createItem("arkcoinPickaxe", "Arkcoin Pickaxe", {name: "arkcoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("arkcoin", {durability: 2500, level: 4, efficiency: 25, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.arkcoinPickaxe, "arkcoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.arkcoinPickaxe)
{
Entity.addEffect(Player.get(), 5, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("cosmocashPickaxe");
Item.createItem("cosmocashPickaxe", "Cosmocash Pickaxe", {name: "cosmocash_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("cosmocash", {durability: 2200, level: 4, efficiency: 22, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.cosmocashPickaxe, "cosmocash", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cosmocashPickaxe)
{
World.setWorldTime (0 + Math.random() * 20000000);
ToolAPI.breakCarriedTool(16);
}
});
IDRegistry.genItemID("augurPickaxe");
Item.createItem("augurPickaxe", "Augur Pickaxe", {name: "augur_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("augur", {durability: 2000, level: 4, efficiency: 20, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.augurPickaxe, "augur", ToolType.pickaxe);
IDRegistry.genItemID("liskPickaxe");
Item.createItem("liskPickaxe", "Lisk Pickaxe", {name: "lisk_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("lisk", {durability: 1900, level: 4, efficiency: 19, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.liskPickaxe, "lisk", ToolType.pickaxe);
IDRegistry.genItemID("firecoinPickaxe");
Item.createItem("firecoinPickaxe", "Firecoin Pickaxe", {name: "firecoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("firecoin", {durability: 1700, level: 4, efficiency: 17, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.firecoinPickaxe, "firecoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.firecoinPickaxe)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
Entity.addEffect(Player.get(), 12, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("zerocashPickaxe");
Item.createItem("zerocashPickaxe", "Zerocash Pickaxe", {name: "zerocash_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("zerocash", {durability: 1500, level: 3, efficiency: 15, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.zerocashPickaxe, "zerocash", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zerocashPickaxe)
{
Entity.addEffect(Player.get(), 16, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("dashcoinPickaxe");
Item.createItem("dashcoinPickaxe", "Dashcoin Pickaxe", {name: "dashcoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dashcoin", {durability: 1400, level: 3, efficiency: 14, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.dashcoinPickaxe, "dashcoin", ToolType.pickaxe);
IDRegistry.genItemID("moneroPickaxe");
Item.createItem("moneroPickaxe", "Monero Pickaxe", {name: "monero_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("monero", {durability: 1200, level: 3, efficiency: 12, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.moneroPickaxe, "monero", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.moneroPickaxe)
{
World.explode(coords.x, coords.y-1, coords.z, 1, true);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("ripplePickaxe");
Item.createItem("ripplePickaxe", "Ripple Pickaxe", {name: "ripple_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ripple", {durability: 1100, level: 3, efficiency: 11, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.ripplePickaxe, "ripple", ToolType.pickaxe);
IDRegistry.genItemID("windcoinPickaxe");
Item.createItem("windcoinPickaxe", "Windcoin Pickaxe", {name: "windcoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("windcoin", {durability: 700, level: 3, efficiency: 7, damage: 2, enchantability: 1});
ToolAPI.setTool(ItemID.windcoinPickaxe, "windcoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.windcoinPickaxe)
{
Entity.setVelocity (Player.get(), 0, 0.5, 0) 
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("litecoinPickaxe");
Item.createItem("litecoinPickaxe", "Litecoin Pickaxe", {name: "litecoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("litecoin", {durability: 400, level: 3, efficiency: 4, damage: 2, enchantability: 1});
ToolAPI.setTool(ItemID.litecoinPickaxe, "litecoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.litecoinPickaxe)
{
Player.addExperience (2);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("dogecoinPickaxe");
Item.createItem("dogecoinPickaxe", "Dogecoin Pickaxe", {name: "dogecoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dogecoin", {durability: 300, level: 3, efficiency: 3, damage: 2, enchantability: 1});
ToolAPI.setTool(ItemID.dogecoinPickaxe, "dogecoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dogecoinPickaxe)
{
Entity.addEffect(Player.get(), 23, 20, 40, false,false);
ToolAPI.breakCarriedTool(2);
}
});
IDRegistry.genItemID("peercoinPickaxe");
Item.createItem("peercoinPickaxe", "Peercoin Pickaxe", {name: "peercoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("peercoin", {durability: 100, level: 3, efficiency: 1, damage: 2, enchantability: 1});
ToolAPI.setTool(ItemID.peercoinPickaxe, "peercoin", ToolType.pickaxe);
IDRegistry.genItemID("concoinPickaxe");
Item.createItem("concoinPickaxe", "Concoin Pickaxe", {name: "concoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("concoin", {durability: 2600, level: 4, efficiency: 26, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.concoinPickaxe, "concoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.concoinPickaxe)
{
Entity.addEffect(Player.get(), 1, 40, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("buzcoinPickaxe");
Item.createItem("buzcoinPickaxe", "Buzcoin Pickaxe", {name: "buzcoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("buzcoin", {durability: 200, level: 3, efficiency: 2, damage: 2, enchantability: 1});
ToolAPI.setTool(ItemID.buzcoinPickaxe, "buzcoin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.buzcoinPickaxe)
{
Entity.addEffect(Player.get(), 10, 40, 80, false,false);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("mooncoinPickaxe");
Item.createItem("mooncoinPickaxe", "Mooncoin Pickaxe", {name: "mooncoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("mooncoin", {durability: 4200, level: 4, efficiency: 42, damage: 8, enchantability: 1});
ToolAPI.setTool(ItemID.mooncoinPickaxe, "mooncoin", ToolType.pickaxe);
Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
var blockID = World.getBlockID(xx, yy, zz);
var material = ToolAPI.getBlockMaterial(blockID) || {};
if(World.getBlockID(xx, yy, zz) !== 7 &&  material.name == "stone" &&item.id==ItemID.mooncoinPickaxe){
World.destroyBlock(xx, yy, zz, true);}}}};});
IDRegistry.genItemID("marscoinPickaxe");
Item.createItem("marscoinPickaxe", "Marscoin Pickaxe", {name: "marscoin_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("marscoin", {durability: 5400, level: 4, efficiency: 54, damage: 9, enchantability: 1});
ToolAPI.setTool(ItemID.marscoinPickaxe, "marscoin", ToolType.pickaxe);
Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 2;
var Y = 2;
var Z = 2;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
var blockID = World.getBlockID(xx, yy, zz);
var material = ToolAPI.getBlockMaterial(blockID) || {};
if(World.getBlockID(xx, yy, zz) !== 7 &&  material.name == "stone" &&item.id==ItemID.marscoinPickaxe){
World.destroyBlock(xx, yy, zz, true);}}}};});

IDRegistry.genItemID("bitcoinShovel");
Item.createItem("bitcoinShovel", "Bitcoin Shovel", {name: "bitcoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bitcoinShovel, "bitcoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bitcoinShovel)
{
Entity.addEffect(Player.get(), 3, 180, 180, false,false);
ToolAPI.breakCarriedTool(16);
}
});
IDRegistry.genItemID("wondercoinShovel");
Item.createItem("wondercoinShovel", "Wondercoin Shovel", {name: "wondercoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.wondercoinShovel, "wondercoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.wondercoinShovel)
{
Entity.addEffect(Player.get(), 2, 80, 80, false,false);
Entity.addEffect(Player.get(), 11, 80, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("ethereumShovel");
Item.createItem("ethereumShovel", "Ethereum Shovel", {name: "ethereum_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.ethereumShovel, "ethereum", ToolType.shovel);
IDRegistry.genItemID("arkcoinShovel");
Item.createItem("arkcoinShovel", "Arkcoin Shovel", {name: "arkcoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.arkcoinShovel, "arkcoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.arkcoinShovel)
{
Entity.addEffect(Player.get(), 5, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("cosmocashShovel");
Item.createItem("cosmocashShovel", "Cosmocash Shovel", {name: "cosmocash_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.cosmocashShovel, "cosmocash", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cosmocashShovel)
{
World.setWorldTime (0 + Math.random() * 20000);
ToolAPI.breakCarriedTool(16);
}
});
IDRegistry.genItemID("augurShovel");
Item.createItem("augurShovel", "Augur Shovel", {name: "augur_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.augurShovel, "augur", ToolType.shovel);
IDRegistry.genItemID("liskShovel");
Item.createItem("liskShovel", "Lisk Shovel", {name: "lisk_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.liskShovel, "lisk", ToolType.shovel);
IDRegistry.genItemID("firecoinShovel");
Item.createItem("firecoinShovel", "Firecoin Shovel", {name: "firecoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.firecoinShovel, "firecoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.firecoinShovel)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
Entity.addEffect(Player.get(), 12, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("zerocashShovel");
Item.createItem("zerocashShovel", "Zerocash Shovel", {name: "zerocash_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.zerocashShovel, "zerocash", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zerocashShovel)
{
Entity.addEffect(Player.get(), 16, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("dashcoinShovel");
Item.createItem("dashcoinShovel", "Dashcoin Shovel", {name: "dashcoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dashcoinShovel, "dashcoin", ToolType.shovel);
IDRegistry.genItemID("moneroShovel");
Item.createItem("moneroShovel", "Monero Shovel", {name: "monero_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.moneroShovel, "monero", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.moneroShovel)
{
World.explode(coords.x, coords.y-1, coords.z, 1, true);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("rippleShovel");
Item.createItem("rippleShovel", "Ripple Shovel", {name: "ripple_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.rippleShovel, "ripple", ToolType.shovel);
IDRegistry.genItemID("windcoinShovel");
Item.createItem("windcoinShovel", "Windcoin Shovel", {name: "windcoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.windcoinShovel, "windcoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.windcoinShovel)
{
Entity.setVelocity (Player.get(), 0, 0.5, 0) 
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("litecoinShovel");
Item.createItem("litecoinShovel", "Litecoin Shovel", {name: "litecoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.litecoinShovel, "litecoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.litecoinShovel)
{
Player.addExperience (2);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("dogecoinShovel");
Item.createItem("dogecoinShovel", "Dogecoin Shovel", {name: "dogecoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dogecoinShovel, "dogecoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dogecoinShovel)
{
Entity.addEffect(Player.get(), 23, 20, 40, false,false);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("peercoinShovel");
Item.createItem("peercoinShovel", "Peercoin Shovel", {name: "peercoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.peercoinShovel, "peercoin", ToolType.shovel);
IDRegistry.genItemID("concoinShovel");
Item.createItem("concoinShovel", "Concoin Shovel", {name: "concoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.concoinShovel, "concoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.concoinShovel)
{
Entity.addEffect(Player.get(), 1, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("buzcoinShovel");
Item.createItem("buzcoinShovel", "Buzcoin Shovel", {name: "buzcoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.buzcoinShovel, "buzcoin", ToolType.shovel);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.buzcoinShovel)
{
Entity.addEffect(Player.get(), 10, 40, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("mooncoinShovel");
Item.createItem("mooncoinShovel", "Mooncoin Shovel", {name: "mooncoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.mooncoinShovel, "mooncoin", ToolType.shovel);
Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
var blockID = World.getBlockID(xx, yy, zz);
var material = ToolAPI.getBlockMaterial(blockID) || {};
if(World.getBlockID(xx, yy, zz) !== 7 &&  material.name == "dirt" &&item.id==ItemID.mooncoinShovel){
World.destroyBlock(xx, yy, zz, true);}}}};});
IDRegistry.genItemID("marscoinShovel");
Item.createItem("marscoinShovel", "Marscoin Shovel", {name: "marscoin_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.marscoinShovel, "marscoin", ToolType.shovel);
Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 2;
var Y = 2;
var Z = 2;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
var blockID = World.getBlockID(xx, yy, zz);
var material = ToolAPI.getBlockMaterial(blockID) || {};
if(World.getBlockID(xx, yy, zz) !== 7 &&  material.name == "dirt" &&item.id==ItemID.marscoinShovel){
World.destroyBlock(xx, yy, zz, true);}}}};});

IDRegistry.genItemID("bitcoinAxe");
Item.createItem("bitcoinAxe", "Bitcoin Axe", {name: "bitcoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bitcoinAxe, "bitcoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bitcoinAxe)
{
Entity.addEffect(Player.get(), 3, 180, 180, false,false);
ToolAPI.breakCarriedTool(16);
}
});
IDRegistry.genItemID("wondercoinAxe");
Item.createItem("wondercoinAxe", "Wondercoin Axe", {name: "wondercoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.wondercoinAxe, "wondercoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.wondercoinAxe)
{
Entity.addEffect(Player.get(), 2, 80, 80, false,false);
Entity.addEffect(Player.get(), 11, 80, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("ethereumAxe");
Item.createItem("ethereumAxe", "Ethereum Axe", {name: "ethereum_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.ethereumAxe, "ethereum", ToolType.axe);
IDRegistry.genItemID("arkcoinAxe");
Item.createItem("arkcoinAxe", "Arkcoin Axe", {name: "arkcoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.arkcoinAxe, "arkcoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.arkcoinAxe)
{
Entity.addEffect(Player.get(), 5, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("cosmocashAxe");
Item.createItem("cosmocashAxe", "Cosmocash Axe", {name: "cosmocash_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.cosmocashAxe, "cosmocash", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cosmocashAxe)
{
World.setWorldTime (0 + Math.random() * 20000);
ToolAPI.breakCarriedTool(16);
}
});
IDRegistry.genItemID("augurAxe");
Item.createItem("augurAxe", "Augur Axe", {name: "augur_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.augurAxe, "augur", ToolType.axe);
IDRegistry.genItemID("liskAxe");
Item.createItem("liskAxe", "Lisk Axe", {name: "lisk_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.liskAxe, "lisk", ToolType.axe);
IDRegistry.genItemID("firecoinAxe");
Item.createItem("firecoinAxe", "Firecoin Axe", {name: "firecoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.firecoinAxe, "firecoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.firecoinAxe)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
Entity.addEffect(Player.get(), 12, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("zerocashAxe");
Item.createItem("zerocashAxe", "Zerocash Axe", {name: "zerocash_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.zerocashAxe, "zerocash", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zerocashAxe)
{
Entity.addEffect(Player.get(), 16, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("dashcoinAxe");
Item.createItem("dashcoinAxe", "Dashcoin Axe", {name: "dashcoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dashcoinAxe, "dashcoin", ToolType.axe);
IDRegistry.genItemID("moneroAxe");
Item.createItem("moneroAxe", "Monero Axe", {name: "monero_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.moneroAxe, "monero", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.moneroAxe)
{
World.explode(coords.x, coords.y-1, coords.z, 1, true);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("rippleAxe");
Item.createItem("rippleAxe", "Ripple Axe", {name: "ripple_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.rippleAxe, "ripple", ToolType.axe);
IDRegistry.genItemID("windcoinAxe");
Item.createItem("windcoinAxe", "Windcoin Axe", {name: "windcoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.windcoinAxe, "windcoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.windcoinAxe)
{
Entity.setVelocity (Player.get(), 0, 0.5, 0) 
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("litecoinAxe");
Item.createItem("litecoinAxe", "Litecoin Axe", {name: "litecoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.litecoinAxe, "litecoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.litecoinAxe)
{
Player.addExperience (2);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("dogecoinAxe");
Item.createItem("dogecoinAxe", "Dogecoin Axe", {name: "dogecoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dogecoinAxe, "dogecoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dogecoinAxe)
{
Entity.addEffect(Player.get(), 23, 20, 40, false,false);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("peercoinAxe");
Item.createItem("peercoinAxe", "Peercoin Axe", {name: "peercoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.peercoinAxe, "peercoin", ToolType.axe);
IDRegistry.genItemID("concoinAxe");
Item.createItem("concoinAxe", "Concoin Axe", {name: "concoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.concoinAxe, "concoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.concoinAxe)
{
Entity.addEffect(Player.get(), 1, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("buzcoinAxe");
Item.createItem("buzcoinAxe", "Buzcoin Axe", {name: "buzcoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.buzcoinAxe, "buzcoin", ToolType.axe);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.buzcoinAxe)
{
Entity.addEffect(Player.get(), 10, 40, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("mooncoinAxe");
Item.createItem("mooncoinAxe", "Mooncoin Axe", {name: "mooncoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.mooncoinAxe, "mooncoin", ToolType.axe);
Callback.addCallback("DestroyBlock", function(coords, block, player){
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
if(item.id==ItemID.mooncoinAxe&&getBlock==17||item.id==ItemID.mooncoinAxe&&getBlock==162){
for(var xx = -5; xx <=5; xx++){
for(var yy = -10; yy <=20; yy++){
for(var zz = -5; zz <=5; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 18||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 161) {
ToolAPI.breakCarriedTool(4);
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});
IDRegistry.genItemID("marscoinAxe");
Item.createItem("marscoinAxe", "Marscoin Axe", {name: "marscoin_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.marscoinAxe, "marscoin", ToolType.axe);
Callback.addCallback("DestroyBlock", function(coords, block, player){
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
if(item.id==ItemID.marscoinAxe&&getBlock==17||item.id==ItemID.marscoinAxe&&getBlock==162){
for(var xx = -5; xx <=5; xx++){
for(var yy = -20; yy <=40; yy++){
for(var zz = -5; zz <=5; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 18||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 161) {
ToolAPI.breakCarriedTool(4);
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});

IDRegistry.genItemID("bitcoinSword");
Item.createItem("bitcoinSword", "Bitcoin Sword", {name: "bitcoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bitcoinSword, "bitcoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bitcoinSword)
{
Entity.addEffect(Player.get(), 3, 180, 180, false,false);
ToolAPI.breakCarriedTool(16);
Player.addLevel (-1);
}
});
IDRegistry.genItemID("wondercoinSword");
Item.createItem("wondercoinSword", "Wondercoin Sword", {name: "wondercoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.wondercoinSword, "wondercoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.wondercoinSword)
{
Entity.addEffect(Player.get(), 2, 80, 80, false,false);
Entity.addEffect(Player.get(), 11, 80, 80, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("ethereumSword");
Item.createItem("ethereumSword", "Ethereum Sword", {name: "ethereum_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.ethereumSword, "ethereum", ToolType.sword);
IDRegistry.genItemID("arkcoinSword");
Item.createItem("arkcoinSword", "Arkcoin Sword", {name: "arkcoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.arkcoinSword, "arkcoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.arkcoinSword)
{
Entity.addEffect(Player.get(), 5, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("cosmocashSword");
Item.createItem("cosmocashSword", "Cosmocash Sword", {name: "cosmocash_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.cosmocashSword, "cosmocash", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cosmocashSword)
{
World.setWorldTime (0 + Math.random() * 20000);
ToolAPI.breakCarriedTool(16);
}
});
IDRegistry.genItemID("augurSword");
Item.createItem("augurSword", "Augur Sword", {name: "augur_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.augurSword, "augur", ToolType.sword);
IDRegistry.genItemID("liskSword");
Item.createItem("liskSword", "Lisk Sword", {name: "lisk_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.liskSword, "lisk", ToolType.sword);
IDRegistry.genItemID("firecoinSword");
Item.createItem("firecoinSword", "Firecoin Sword", {name: "firecoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.firecoinSword, "firecoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.firecoinSword)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
Entity.addEffect(Player.get(), 12, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("zerocashSword");
Item.createItem("zerocashSword", "Zerocash Sword", {name: "zerocash_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.zerocashSword, "zerocash", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zerocashSword)
{
Entity.addEffect(Player.get(), 16, 80, 180, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("dashcoinSword");
Item.createItem("dashcoinSword", "Dashcoin Sword", {name: "dashcoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dashcoinSword, "dashcoin", ToolType.sword);
IDRegistry.genItemID("moneroSword");
Item.createItem("moneroSword", "Monero Sword", {name: "monero_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.moneroSword, "monero", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.moneroSword)
{
World.explode(coords.x, coords.y-1, coords.z, 1, true);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("rippleSword");
Item.createItem("rippleSword", "Ripple Sword", {name: "ripple_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.rippleSword, "ripple", ToolType.sword);
IDRegistry.genItemID("windcoinSword");
Item.createItem("windcoinSword", "Windcoin Sword", {name: "windcoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.windcoinSword, "windcoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.windcoinSword)
{
Entity.setVelocity (Player.get(), 0, 0.5, 0) 
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("litecoinSword");
Item.createItem("litecoinSword", "Litecoin Sword", {name: "litecoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.litecoinSword, "litecoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.litecoinSword)
{
Player.addExperience (2);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("dogecoinSword");
Item.createItem("dogecoinSword", "Dogecoin Sword", {name: "dogecoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dogecoinSword, "dogecoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dogecoinSword)
{
Entity.addEffect(Player.get(), 23, 20, 40, false,false);
ToolAPI.breakCarriedTool(4);
}
});
IDRegistry.genItemID("peercoinSword");
Item.createItem("peercoinSword", "Peercoin Sword", {name: "peercoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.peercoinSword, "peercoin", ToolType.sword);
IDRegistry.genItemID("concoinSword");
Item.createItem("concoinSword", "Concoin Sword", {name: "concoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.concoinSword, "concoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.concoinSword)
{
Entity.addEffect(Player.get(), 1, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("buzcoinSword");
Item.createItem("buzcoinSword", "Buzcoin Sword", {name: "buzcoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.buzcoinSword, "buzcoin", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.buzcoinSword)
{
Entity.addEffect(Player.get(), 10, 40, 40, false,false);
ToolAPI.breakCarriedTool(8);
}
});
IDRegistry.genItemID("mooncoinSword");
Item.createItem("mooncoinSword", "Mooncoin Sword", {name: "mooncoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.mooncoinSword, "mooncoin", ToolType.sword);
IDRegistry.genItemID("marscoinSword");
Item.createItem("marscoinSword", "Marscoin Sword", {name: "marscoin_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.marscoinSword, "marscoin", ToolType.sword);





// file: backpacks.js

importLib("BackpackAPI", '*');
IDRegistry.genItemID("bitcoinBackpack");
Item.createItem("bitcoinBackpack", "Bitcoin Backpack", {name: "bitcoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.bitcoinBackpack, {
	slots: 68,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("wondercoinBackpack");
Item.createItem("wondercoinBackpack", "Wondercoin Backpack", {name: "wondercoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.wondercoinBackpack, {
	slots: 46,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("ethereumBackpack");
Item.createItem("ethereumBackpack", "Etherum Backpack", {name: "ethereum_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.ethereumBackpack, {
	slots: 56,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("arkcoinBackpack");
Item.createItem("arkcoinBackpack", "Arkcoin Backpack", {name: "arkcoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.arkcoinBackpack, {
	slots: 50,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("cosmocashBackpack");
Item.createItem("cosmocashBackpack", "Cosmocash Backpack", {name: "cosmocash_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.cosmocashBackpack, {
	slots: 42,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("augurBackpack");
Item.createItem("augurBackpack", "Augur Backpack", {name: "augur_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.augurBackpack, {
	slots: 40,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("liskBackpack");
Item.createItem("liskBackpack", "Lisk Backpack", {name: "lisk_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.liskBackpack, {
	slots: 38,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("firecoinBackpack");
Item.createItem("firecoinBackpack", "Firecoin Backpack", {name: "firecoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.firecoinBackpack, {
	slots: 34,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("zerocashBackpack");
Item.createItem("zerocashBackpack", "Zerocash Backpack", {name: "zerocash_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.zerocashBackpack, {
	slots: 30,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("dashcoinBackpack");
Item.createItem("dashcoinBackpack", "dashcoin Backpack", {name: "dashcoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.dashcoinBackpack, {
	slots: 28,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("moneroBackpack");
Item.createItem("moneroBackpack", "Monero Backpack", {name: "monero_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.moneroBackpack, {
	slots: 26,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("rippleBackpack");
Item.createItem("rippleBackpack", "Ripple Backpack", {name: "ripple_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.rippleBackpack, {
	slots: 22,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("windcoinBackpack");
Item.createItem("windcoinBackpack", "Windcoin Backpack", {name: "windcoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.windcoinBackpack, {
	slots: 14,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("litecoinBackpack");
Item.createItem("litecoinBackpack", "Litecoin Backpack", {name: "litecoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.litecoinBackpack, {
	slots: 8,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("dogecoinBackpack");
Item.createItem("dogecoinBackpack", "Dogecoin Backpack", {name: "dogecoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.dogecoinBackpack, {
	slots: 6,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("peercoinBackpack");
Item.createItem("peercoinBackpack", "Peercoin Backpack", {name: "peercoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.peercoinBackpack, {
	slots: 2,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("concoinBackpack");
Item.createItem("concoinBackpack", "Concoin Backpack", {name: "concoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.concoinBackpack, {
	slots: 52,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("buzcoinBackpack");
Item.createItem("buzcoinBackpack", "Buzcoin Backpack", {name: "buzcoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.buzcoinBackpack, {
	slots: 4,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("mooncoinBackpack");
Item.createItem("mooncoinBackpack", "Mooncoin Backpack", {name: "mooncoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.mooncoinBackpack, {
	slots: 84,
	slotsCenter: true,
	inRow: 9
});
IDRegistry.genItemID("marscoinBackpack");
Item.createItem("marscoinBackpack", "Marscoin Backpack", {name: "marscoin_backpack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.marscoinBackpack, {
	slots: 108,
	slotsCenter: true,
	inRow: 9
});




// file: cryptoconstruct.js

IDRegistry.genItemID("bitcoinPickaxePart");
Item.createItem("bitcoinPickaxePart", "Bitcoin Pickaxe Part", {name: "bitcoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.bitcoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.bitcoin,0]);
IDRegistry.genItemID("wondercoinPickaxePart");
Item.createItem("wondercoinPickaxePart", "Wondercoin Pickaxe Part", {name: "wondercoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.wondercoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.wondercoin,0]);
IDRegistry.genItemID("ethereumPickaxePart");
Item.createItem("ethereumPickaxePart", "Ethereum Pickaxe Part", {name: "ethereum_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.ethereumPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.ethereum,0]);
IDRegistry.genItemID("arkcoinPickaxePart");
Item.createItem("arkcoinPickaxePart", "Arkcoin Pickaxe Part", {name: "arkcoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.arkcoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.arkcoin,0]);
IDRegistry.genItemID("cosmocashPickaxePart");
Item.createItem("cosmocashPickaxePart", "Cosmocash Pickaxe Part", {name: "cosmocash_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.cosmocashPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.cosmocash,0]);
IDRegistry.genItemID("augurPickaxePart");
Item.createItem("augurPickaxePart", "Augur Pickaxe Part", {name: "augur_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.augurPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.augur,0]);
IDRegistry.genItemID("liskPickaxePart");
Item.createItem("liskPickaxePart", "Lisk Pickaxe Part", {name: "lisk_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.liskPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.lisk,0]);
IDRegistry.genItemID("firecoinPickaxePart");
Item.createItem("firecoinPickaxePart", "Firecoin Pickaxe Part", {name: "firecoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.firecoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.firecoin,0]);
IDRegistry.genItemID("zerocashPickaxePart");
Item.createItem("zerocashPickaxePart", "Zerocash Pickaxe Part", {name: "zerocash_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.zerocashPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.zerocash,0]);
IDRegistry.genItemID("dashcoinPickaxePart");
Item.createItem("dashcoinPickaxePart", "Dashcoin Pickaxe Part", {name: "dashcoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dashcoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.dashcoin,0]);
IDRegistry.genItemID("moneroPickaxePart");
Item.createItem("moneroPickaxePart", "Monero Pickaxe Part", {name: "monero_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.moneroPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.monero,0]);
IDRegistry.genItemID("ripplePickaxePart");
Item.createItem("ripplePickaxePart", "Ripple Pickaxe Part", {name: "ripple_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.ripplePickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.ripple,0]);
IDRegistry.genItemID("windcoinPickaxePart");
Item.createItem("windcoinPickaxePart", "Windcoin Pickaxe Part", {name: "windcoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.windcoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.windcoin,0]);
IDRegistry.genItemID("litecoinPickaxePart");
Item.createItem("litecoinPickaxePart", "Litecoin Pickaxe Part", {name: "litecoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.litecoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.litecoin,0]);
IDRegistry.genItemID("dogecoinPickaxePart");
Item.createItem("dogecoinPickaxePart", "Dogecoin Pickaxe Part", {name: "dogecoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dogecoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.dogecoin,0]);
IDRegistry.genItemID("peercoinPickaxePart");
Item.createItem("peercoinPickaxePart", "Peercoin Pickaxe Part", {name: "peercoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.peercoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.peercoin,0]);
IDRegistry.genItemID("concoinPickaxePart");
Item.createItem("concoinPickaxePart", "Concoin Pickaxe Part", {name: "concoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.concoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.concoin,0]);
IDRegistry.genItemID("buzcoinPickaxePart");
Item.createItem("buzcoinPickaxePart", "Buzcoin Pickaxe Part", {name: "buzcoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.buzcoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.buzcoin,0]);
IDRegistry.genItemID("mooncoinPickaxePart");
Item.createItem("mooncoinPickaxePart", "Mooncoin Pickaxe Part", {name: "mooncoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.mooncoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.mooncoin,0]);
IDRegistry.genItemID("marscoinPickaxePart");
Item.createItem("marscoinPickaxePart", "Marscoin Pickaxe Part", {name: "marscoin_pickaxe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.marscoinPickaxePart,count:1,data:0},["aao","oaa","ooa"],['a',ItemID.marscoin,0]);

IDRegistry.genItemID("bitcoinShovelPart");
Item.createItem("bitcoinShovelPart", "Bitcoin Shovel Part", {name: "bitcoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.bitcoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.bitcoin,0]);
IDRegistry.genItemID("wondercoinShovelPart");
Item.createItem("wondercoinShovelPart", "Wondercoin Shovel Part", {name: "wondercoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.wondercoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.wondercoin,0]);
IDRegistry.genItemID("ethereumShovelPart");
Item.createItem("ethereumShovelPart", "Ethereum Shovel Part", {name: "ethereum_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.ethereumShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.ethereum,0]);
IDRegistry.genItemID("arkcoinShovelPart");
Item.createItem("arkcoinShovelPart", "Arkcoin Shovel Part", {name: "arkcoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.arkcoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.arkcoin,0]);
IDRegistry.genItemID("cosmocashShovelPart");
Item.createItem("cosmocashShovelPart", "Cosmocash Shovel Part", {name: "cosmocash_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.cosmocashShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.cosmocash,0]);
IDRegistry.genItemID("augurShovelPart");
Item.createItem("augurShovelPart", "Augur Shovel Part", {name: "augur_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.augurShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.augur,0]);
IDRegistry.genItemID("liskShovelPart");
Item.createItem("liskShovelPart", "Lisk Shovel Part", {name: "lisk_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.liskShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.lisk,0]);
IDRegistry.genItemID("firecoinShovelPart");
Item.createItem("firecoinShovelPart", "Firecoin Shovel Part", {name: "firecoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.firecoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.firecoin,0]);
IDRegistry.genItemID("zerocashShovelPart");
Item.createItem("zerocashShovelPart", "Zerocash Shovel Part", {name: "zerocash_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.zerocashShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.zerocash,0]);
IDRegistry.genItemID("dashcoinShovelPart");
Item.createItem("dashcoinShovelPart", "Dashcoin Shovel Part", {name: "dashcoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dashcoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.dashcoin,0]);
IDRegistry.genItemID("moneroShovelPart");
Item.createItem("moneroShovelPart", "Monero Shovel Part", {name: "monero_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.moneroShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.monero,0]);
IDRegistry.genItemID("rippleShovelPart");
Item.createItem("rippleShovelPart", "Ripple Shovel Part", {name: "ripple_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.rippleShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.ripple,0]);
IDRegistry.genItemID("windcoinShovelPart");
Item.createItem("windcoinShovelPart", "Windcoin Shovel Part", {name: "windcoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.windcoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.windcoin,0]);
IDRegistry.genItemID("litecoinShovelPart");
Item.createItem("litecoinShovelPart", "Litecoin Shovel Part", {name: "litecoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.litecoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.litecoin,0]);
IDRegistry.genItemID("dogecoinShovelPart");
Item.createItem("dogecoinShovelPart", "Dogecoin Shovel Part", {name: "dogecoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dogecoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.dogecoin,0]);
IDRegistry.genItemID("peercoinShovelPart");
Item.createItem("peercoinShovelPart", "Peercoin Shovel Part", {name: "peercoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.peercoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.peercoin,0]);
IDRegistry.genItemID("concoinShovelPart");
Item.createItem("concoinShovelPart", "Concoin Shovel Part", {name: "concoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.concoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.concoin,0]);
IDRegistry.genItemID("buzcoinShovelPart");
Item.createItem("buzcoinShovelPart", "Buzcoin Shovel Part", {name: "buzcoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.buzcoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.buzcoin,0]);
IDRegistry.genItemID("mooncoinShovelPart");
Item.createItem("mooncoinShovelPart", "Mooncoin Shovel Part", {name: "mooncoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.mooncoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.mooncoin,0]);
IDRegistry.genItemID("marscoinShovelPart");
Item.createItem("marscoinShovelPart", "Marscoin Shovel Part", {name: "marscoin_shovel_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.marscoinShovelPart,count:1,data:0},["oao","aaa","oao"],['a',ItemID.marscoin,0]);

IDRegistry.genItemID("bitcoinAxePart");
Item.createItem("bitcoinAxePart", "Bitcoin Axe Part", {name: "bitcoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.bitcoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.bitcoin,0]);
IDRegistry.genItemID("wondercoinAxePart");
Item.createItem("wondercoinAxePart", "Wondercoin Axe Part", {name: "wondercoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.wondercoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.wondercoin,0]);
IDRegistry.genItemID("ethereumAxePart");
Item.createItem("ethereumAxePart", "Ethereum Axe Part", {name: "ethereum_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.ethereumAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.ethereum,0]);
IDRegistry.genItemID("arkcoinAxePart");
Item.createItem("arkcoinAxePart", "Arkcoin Axe Part", {name: "arkcoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.arkcoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.arkcoin,0]);
IDRegistry.genItemID("cosmocashAxePart");
Item.createItem("cosmocashAxePart", "Cosmocash Axe Part", {name: "cosmocash_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.cosmocashAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.cosmocash,0]);
IDRegistry.genItemID("augurAxePart");
Item.createItem("augurAxePart", "Augur Axe Part", {name: "augur_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.augurAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.augur,0]);
IDRegistry.genItemID("liskAxePart");
Item.createItem("liskAxePart", "Lisk Axe Part", {name: "lisk_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.liskAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.lisk,0]);
IDRegistry.genItemID("firecoinAxePart");
Item.createItem("firecoinAxePart", "Firecoin Axe Part", {name: "firecoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.firecoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.firecoin,0]);
IDRegistry.genItemID("zerocashAxePart");
Item.createItem("zerocashAxePart", "Zerocash Axe Part", {name: "zerocash_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.zerocashAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.zerocash,0]);
IDRegistry.genItemID("dashcoinAxePart");
Item.createItem("dashcoinAxePart", "Dashcoin Axe Part", {name: "dashcoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dashcoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.dashcoin,0]);
IDRegistry.genItemID("moneroAxePart");
Item.createItem("moneroAxePart", "Monero Axe Part", {name: "monero_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.moneroAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.monero,0]);
IDRegistry.genItemID("rippleAxePart");
Item.createItem("rippleAxePart", "Ripple Axe Part", {name: "ripple_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.rippleAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.ripple,0]);
IDRegistry.genItemID("windcoinAxePart");
Item.createItem("windcoinAxePart", "Windcoin Axe Part", {name: "windcoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.windcoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.windcoin,0]);
IDRegistry.genItemID("litecoinAxePart");
Item.createItem("litecoinAxePart", "Litecoin Axe Part", {name: "litecoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.litecoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.litecoin,0]);
IDRegistry.genItemID("dogecoinAxePart");
Item.createItem("dogecoinAxePart", "Dogecoin Axe Part", {name: "dogecoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dogecoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.dogecoin,0]);
IDRegistry.genItemID("peercoinAxePart");
Item.createItem("peercoinAxePart", "Peercoin Axe Part", {name: "peercoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.peercoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.peercoin,0]);
IDRegistry.genItemID("concoinAxePart");
Item.createItem("concoinAxePart", "Concoin Axe Part", {name: "concoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.concoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.concoin,0]);
IDRegistry.genItemID("buzcoinAxePart");
Item.createItem("buzcoinAxePart", "Buzcoin Axe Part", {name: "buzcoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.buzcoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.buzcoin,0]);
IDRegistry.genItemID("mooncoinAxePart");
Item.createItem("mooncoinAxePart", "Mooncoin Axe Part", {name: "mooncoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.mooncoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.mooncoin,0]);
IDRegistry.genItemID("marscoinAxePart");
Item.createItem("marscoinAxePart", "Marscoin Axe Part", {name: "marscoin_axe_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.marscoinAxePart,count:1,data:0},["aao","aaa","ooo"],['a',ItemID.marscoin,0]);

IDRegistry.genItemID("bitcoinSwordPart");
Item.createItem("bitcoinSwordPart", "Bitcoin Sword Part", {name: "bitcoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.bitcoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.bitcoin,0]);
IDRegistry.genItemID("wondercoinSwordPart");
Item.createItem("wondercoinSwordPart", "Wondercoin Sword Part", {name: "wondercoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.wondercoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.wondercoin,0]);
IDRegistry.genItemID("ethereumSwordPart");
Item.createItem("ethereumSwordPart", "Ethereum Sword Part", {name: "ethereum_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.ethereumSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.ethereum,0]);
IDRegistry.genItemID("arkcoinSwordPart");
Item.createItem("arkcoinSwordPart", "Arkcoin Sword Part", {name: "arkcoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.arkcoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.arkcoin,0]);
IDRegistry.genItemID("cosmocashSwordPart");
Item.createItem("cosmocashSwordPart", "Cosmocash Sword Part", {name: "cosmocash_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.cosmocashSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.cosmocash,0]);
IDRegistry.genItemID("augurSwordPart");
Item.createItem("augurSwordPart", "Augur Sword Part", {name: "augur_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.augurSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.augur,0]);
IDRegistry.genItemID("liskSwordPart");
Item.createItem("liskSwordPart", "Lisk Sword Part", {name: "lisk_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.liskSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.lisk,0]);
IDRegistry.genItemID("firecoinSwordPart");
Item.createItem("firecoinSwordPart", "Firecoin Sword Part", {name: "firecoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.firecoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.firecoin,0]);
IDRegistry.genItemID("zerocashSwordPart");
Item.createItem("zerocashSwordPart", "Zerocash Sword Part", {name: "zerocash_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.zerocashSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.zerocash,0]);
IDRegistry.genItemID("dashcoinSwordPart");
Item.createItem("dashcoinSwordPart", "Dashcoin Sword Part", {name: "dashcoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dashcoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.dashcoin,0]);
IDRegistry.genItemID("moneroSwordPart");
Item.createItem("moneroSwordPart", "Monero Sword Part", {name: "monero_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.moneroSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.monero,0]);
IDRegistry.genItemID("rippleSwordPart");
Item.createItem("rippleSwordPart", "Ripple Sword Part", {name: "ripple_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.rippleSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.ripple,0]);
IDRegistry.genItemID("windcoinSwordPart");
Item.createItem("windcoinSwordPart", "Windcoin Sword Part", {name: "windcoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.windcoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.windcoin,0]);
IDRegistry.genItemID("litecoinSwordPart");
Item.createItem("litecoinSwordPart", "Litecoin Sword Part", {name: "litecoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.litecoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.litecoin,0]);
IDRegistry.genItemID("dogecoinSwordPart");
Item.createItem("dogecoinSwordPart", "Dogecoin Sword Part", {name: "dogecoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.dogecoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.dogecoin,0]);
IDRegistry.genItemID("peercoinSwordPart");
Item.createItem("peercoinSwordPart", "Peercoin Sword Part", {name: "peercoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.peercoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.peercoin,0]);
IDRegistry.genItemID("concoinSwordPart");
Item.createItem("concoinSwordPart", "Concoin Sword Part", {name: "concoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.concoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.concoin,0]);
IDRegistry.genItemID("buzcoinSwordPart");
Item.createItem("buzcoinSwordPart", "Buzcoin Sword Part", {name: "buzcoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.buzcoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.buzcoin,0]);
IDRegistry.genItemID("mooncoinSwordPart");
Item.createItem("mooncoinSwordPart", "Mooncoin Sword Part", {name: "mooncoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.mooncoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.mooncoin,0]);
IDRegistry.genItemID("marscoinSwordPart");
Item.createItem("marscoinSwordPart", "Marscoin Sword Part", {name: "marscoin_sword_part", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.marscoinSwordPart,count:1,data:0},["ooa","oao","aoo"],['a',ItemID.marscoin,0]);

IDRegistry.genItemID("toolHand");
Item.createItem("toolHand", "Tool Hand", {name: "crypto_stick", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.toolHand,count:1,data:0},["ooa","oao","aoo"],['a',280,0]);
IDRegistry.genItemID("swordHand");
Item.createItem("swordHand", "Sword Hand", {name: "crypto_hand", meta: 0}, {stack: 1});
Recipes.addShaped({id:ItemID.swordHand,count:1,data:0},["aoo","oao","aoa"],['a',280,0]);

Recipes.addShaped({id:ItemID.bitcoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.bitcoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.wondercoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.wondercoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.ethereumPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.ethereumPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.arkcoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.arkcoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.cosmocashPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.cosmocashPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.augurPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.augurPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.liskPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.liskPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.firecoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.firecoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.zerocashPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.zerocashPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.dashcoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.dashcoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.moneroPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.moneroPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.ripplePickaxe,count:1,data:0},["oa","bo"],['a',ItemID.ripplePickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.windcoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.windcoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.litecoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.litecoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.dogecoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.dogecoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.peercoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.peercoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.concoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.concoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.buzcoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.buzcoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.mooncoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.mooncoinPickaxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.marscoinPickaxe,count:1,data:0},["oa","bo"],['a',ItemID.marscoinPickaxePart,0,'b',ItemID.toolHand,0]);

Recipes.addShaped({id:ItemID.bitcoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.bitcoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.wondercoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.wondercoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.ethereumShovel,count:1,data:0},["oa","bo"],['a',ItemID.ethereumShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.arkcoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.arkcoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.cosmocashShovel,count:1,data:0},["oa","bo"],['a',ItemID.cosmocashShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.augurShovel,count:1,data:0},["oa","bo"],['a',ItemID.augurShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.liskShovel,count:1,data:0},["oa","bo"],['a',ItemID.liskShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.firecoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.firecoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.zerocashShovel,count:1,data:0},["oa","bo"],['a',ItemID.zerocashShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.dashcoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.dashcoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.moneroShovel,count:1,data:0},["oa","bo"],['a',ItemID.moneroShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.rippleShovel,count:1,data:0},["oa","bo"],['a',ItemID.rippleShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.windcoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.windcoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.litecoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.litecoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.dogecoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.dogecoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.peercoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.peercoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.concoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.concoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.buzcoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.buzcoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.mooncoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.mooncoinShovelPart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.marscoinShovel,count:1,data:0},["oa","bo"],['a',ItemID.marscoinShovelPart,0,'b',ItemID.toolHand,0]);

Recipes.addShaped({id:ItemID.bitcoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.bitcoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.wondercoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.wondercoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.ethereumAxe,count:1,data:0},["oa","bo"],['a',ItemID.ethereumAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.arkcoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.arkcoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.cosmocashAxe,count:1,data:0},["oa","bo"],['a',ItemID.cosmocashAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.augurAxe,count:1,data:0},["oa","bo"],['a',ItemID.augurAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.liskAxe,count:1,data:0},["oa","bo"],['a',ItemID.liskAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.firecoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.firecoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.zerocashAxe,count:1,data:0},["oa","bo"],['a',ItemID.zerocashAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.dashcoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.dashcoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.moneroAxe,count:1,data:0},["oa","bo"],['a',ItemID.moneroAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.rippleAxe,count:1,data:0},["oa","bo"],['a',ItemID.rippleAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.windcoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.windcoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.litecoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.litecoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.dogecoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.dogecoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.peercoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.peercoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.concoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.concoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.buzcoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.buzcoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.mooncoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.mooncoinAxePart,0,'b',ItemID.toolHand,0]);
Recipes.addShaped({id:ItemID.marscoinAxe,count:1,data:0},["oa","bo"],['a',ItemID.marscoinAxePart,0,'b',ItemID.toolHand,0]);

Recipes.addShaped({id:ItemID.bitcoinSword,count:1,data:0},["oa","bo"],['a',ItemID.bitcoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.wondercoinSword,count:1,data:0},["oa","bo"],['a',ItemID.wondercoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.ethereumSword,count:1,data:0},["oa","bo"],['a',ItemID.ethereumSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.arkcoinSword,count:1,data:0},["oa","bo"],['a',ItemID.arkcoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.cosmocashSword,count:1,data:0},["oa","bo"],['a',ItemID.cosmocashSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.augurSword,count:1,data:0},["oa","bo"],['a',ItemID.augurSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.liskSword,count:1,data:0},["oa","bo"],['a',ItemID.liskSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.firecoinSword,count:1,data:0},["oa","bo"],['a',ItemID.firecoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.zerocashSword,count:1,data:0},["oa","bo"],['a',ItemID.zerocashSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.dashcoinSword,count:1,data:0},["oa","bo"],['a',ItemID.dashcoinSwordPart,0,'b',ItemID.swordlHand,0]);
Recipes.addShaped({id:ItemID.moneroSword,count:1,data:0},["oa","bo"],['a',ItemID.moneroSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.rippleSword,count:1,data:0},["oa","bo"],['a',ItemID.rippleSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.windcoinSword,count:1,data:0},["oa","bo"],['a',ItemID.windcoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.litecoinSword,count:1,data:0},["oa","bo"],['a',ItemID.litecoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.dogecoinSword,count:1,data:0},["oa","bo"],['a',ItemID.dogecoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.peercoinSword,count:1,data:0},["oa","bo"],['a',ItemID.peercoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.concoinSword,count:1,data:0},["oa","bo"],['a',ItemID.concoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.buzcoinSword,count:1,data:0},["oa","bo"],['a',ItemID.buzcoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.mooncoinSword,count:1,data:0},["oa","bo"],['a',ItemID.mooncoinSwordPart,0,'b',ItemID.swordHand,0]);
Recipes.addShaped({id:ItemID.marscoinSword,count:1,data:0},["oa","bo"],['a',ItemID.marscoinSwordPart,0,'b',ItemID.swordHand,0]);

Recipes.addShaped({id:ItemID.bitcoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.bitcoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.wondercoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.wondercoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.ethereumBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.ethereum,0,'b',54,0]);
Recipes.addShaped({id:ItemID.arkcoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.arkcoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.cosmocashBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.cosmocash,0,'b',54,0]);
Recipes.addShaped({id:ItemID.augurBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.augur,0,'b',54,0]);
Recipes.addShaped({id:ItemID.liskBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.lisk,0,'b',54,0]);
Recipes.addShaped({id:ItemID.firecoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.firecoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.zerocashBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.zerocash,0,'b',54,0]);
Recipes.addShaped({id:ItemID.dashcoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.dashcoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.moneroBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.monero,0,'b',54,0]);
Recipes.addShaped({id:ItemID.rippleBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.ripple,0,'b',54,0]);
Recipes.addShaped({id:ItemID.windcoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.windcoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.litecoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.litecoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.dogecoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.dogecoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.peercoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.peercoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.concoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.concoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.buzcoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.buzcoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.mooncoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.mooncoin,0,'b',54,0]);
Recipes.addShaped({id:ItemID.marscoinBackpack,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.marscoin,0,'b',54,0]);




// file: moon.js

var BLOCK_TYPE_MOON = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 1,
	explosionres: 1
}, "stone");
IDRegistry.genBlockID("turfMoon");
Block.createBlock("turfMoon", [{name: "Moon turf", texture: [["turfMoon", 0]], inCreative: true}], BLOCK_TYPE_MOON);
ToolAPI.registerBlockMaterial(BlockID.turfMoon, "dirt", 3, true);
Block.registerDropFunction("turfMoon", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	return [[BlockID.turfMoon, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("stoneMoon");
Block.createBlock("stoneMoon", [{name: "Moon stone", texture: [["stoneMoon", 0]], inCreative: true}], BLOCK_TYPE_MOON);
ToolAPI.registerBlockMaterial(BlockID.stoneMoon, "stone", 3, true);
Block.registerDropFunction("stoneMoon", function(coords, blockID, blockData, level, enchant){
if(level > 1){
	return [[BlockID.stoneMoon, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("dirtMoon");
Block.createBlock("dirtMoon", [{name: "Moon dirt", texture: [["dirtMoon", 0]], inCreative: true}], BLOCK_TYPE_MOON);
ToolAPI.registerBlockMaterial(BlockID.dirtMoon, "dirt", 3, true);
Block.registerDropFunction("dirtMoon", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	return [[BlockID.dirtMoon, 1, 0]]
}
return [];
}, 3);

var Moon = new Dimension({
    name: "Moon",
    
    generation: { 
	layers: [
		
		{
			range: [0, 60], 
			noise: { 
				octaves: { 
					count: 8, 
					weight: [0.51,0.51/2,0.51/4,0.51/8,0.51/16],
					scale: [0.01, 0.02, 0.04,0.08,0.16]
				}
			},
			gradient: [
				[.1,1],[.1,1],[1, -1]
			], 
			
			terrain: {
				base: BlockID.stoneMoon,
				cover:{
					height:4,
					top: BlockID.dirtMoon,
					block: BlockID.turfMoon
				}
			},
		},
		
		
		{
			 range: [0, 60], 
			 noise: { 
			 	octaves: { 
					count: 3, 
					weight: [0.55,0.55/2,0.55/4],
					scale: [0.005, 0.01, 0.02] 
				} 
			}, 
			gradient: [
				[.1,.3],[.1,5],[.1,.7],[1, -1]
			], 
			
			terrain: {
				base: BlockID.stoneMoon,
				cover:{
					height:4,
					top: BlockID.dirtMoon,
					block: BlockID.turfMoon
				}
			},
		},
		
		
		]
},
    callbacks: {
       tick: function() { 
       	if (World.getThreadTime() % 8 == 0){
World.setWorldTime (20000);
	if(Math.random() < .02){
    var pos = Player.getPosition()
    var randomX = parseInt(Math.random() * 200);
    var randomZ = parseInt(Math.random() * 200);
		pos = GenerationUtils.findSurface(pos.x-100+randomX, pos.y, pos.z-100+randomZ);
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z, BlockID.mooncoin, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, BlockID.mooncoin, 0);
	if(Math.random() < .4){
World.explode(pos.x, pos.y, pos.z, 7, true);
World.setBlock(pos.x, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.mooncoin, 0);
World.setBlock(pos.x, pos.y-11, pos.z+1, BlockID.mooncoin, 0);
World.setBlock(pos.x, pos.y-11, pos.z, BlockID.mooncoin, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z, BlockID.mooncoin, 0);
}
PlaySoundFile("crash.ogg")
}
}
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("MoonChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
    }
    });

var MoonTs = new TransferSequence(Moon);
MoonTs.setPortalTimeout(40);

MoonTs.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

MoonTs.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("Moon_portal", ["Crypto_portal", 0], MoonTs.getPortal(), {type: "full", frameId: 0}, true);
MoonTs.setPortalTiles(BlockID.Moon_portal);





var shape = new PortalShape();
shape.setPortalId(BlockID.Moon_portal);
shape.setFrameIds(0);
shape.setMinSize(1, 1);

MoonTs.setPortalBuilder(shape.getBuilder());

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id ==BlockID.cosmocash || block.id == BlockID.Moon_portal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.Moon_portal, [4]);
    }
});

TileEntity.registerPrototype(BlockID.cosmocash, {
	
	tick: function(){
		var wgb = World.getBlockID;
		
        var blc1 = wgb(this.x+1,this.y,this.z);
		var blc2 = wgb(this.x-1,this.y,this.z);
        var blc3 = wgb(this.x,this.y,this.z+1);
        var blc4 = wgb(this.x,this.y,this.z-1);
        var blc5 = wgb(this.x+1,this.y,this.z+1);
        var blc6 = wgb(this.x+1,this.y,this.z-1);
        var blc7 = wgb(this.x-1,this.y,this.z+1);
        var blc8 = wgb(this.x-1,this.y,this.z-1);
        var blc9 = wgb(this.x+2,this.y,this.z);
        var blc10 = wgb(this.x-2,this.y,this.z);
        var blc11 = wgb(this.x+2,this.y-1,this.z);
        var blc12 = wgb(this.x-2,this.y-1,this.z);
        var blc13 = wgb(this.x,this.y,this.z+2);
        var blc14 = wgb(this.x,this.y,this.z-2);
        var blc15 = wgb(this.x,this.y-1,this.z+2);
        var blc16 = wgb(this.x,this.y-1,this.z-2);
        var blc16 = wgb(this.x+1,this.y+1,this.z);
		var blc17 = wgb(this.x-1,this.y+1,this.z);
        var blc18 = wgb(this.x,this.y+1,this.z+1);
        var blc19 = wgb(this.x,this.y+1,this.z-1);
        var blc20 = wgb(this.x+1,this.y+1,this.z+1);
        var blc21 = wgb(this.x+1,this.y+1,this.z-1);
        var blc22 = wgb(this.x-1,this.y+1,this.z+1);
        var blc23 = wgb(this.x-1,this.y+1,this.z-1);
        var blc24 = wgb(this.x+1,this.y+3,this.z);
		var blc25 = wgb(this.x-1,this.y+3,this.z);
        var blc26 = wgb(this.x,this.y+3,this.z+1);
        var blc27 = wgb(this.x,this.y+3,this.z-1);
        var blc28 = wgb(this.x+1,this.y+3,this.z+1);
        var blc29 = wgb(this.x+1,this.y+3,this.z-1);
        var blc30 = wgb(this.x-1,this.y+3,this.z+1);
        var blc31 = wgb(this.x-1,this.y+3,this.z-1);
        var blc32 = wgb(this.x+1,this.y+2,this.z);
		var blc33 = wgb(this.x-1,this.y+2,this.z);
        var blc34 = wgb(this.x,this.y+2,this.z+1);
        var blc35 = wgb(this.x,this.y+2,this.z-1);
        var blc36 = wgb(this.x+1,this.y+2,this.z+1);
        var blc37 = wgb(this.x+1,this.y+2,this.z-1);
        var blc38 = wgb(this.x-1,this.y+2,this.z+1);
        var blc39 = wgb(this.x-1,this.y+2,this.z-1);
        var blc40 = wgb(this.x+1,this.y+4,this.z);
		var blc41 = wgb(this.x-1,this.y+4,this.z);
        var blc42 = wgb(this.x,this.y+4,this.z+1);
        var blc43 = wgb(this.x,this.y+4,this.z-1);
        var blc44 = wgb(this.x,this.y+4,this.z);
        var blc45 = wgb(this.x,this.y+5,this.z);
        var blc46 = wgb(this.x,this.y+6,this.z);
        
	if(blc1 == 42 && blc2 == 42 && blc3 == 42 && blc4 == 42 && blc5 == 42 && blc6 == 42 && blc7 == 42 && blc8 == 42 && blc9 == 42 && blc10 == 42 && blc11 == 42 && blc12 == 42 && blc13 == 42 && blc14 == 42 && blc15 == 42 && blc16 == 42 &&blc17 == 42 && blc18 == 42 && blc19 == 42 && blc20 == 42 && blc21 == 42 && blc22 == 42 && blc23 == 42 && blc24 == 42 && blc25 == 42 && blc26 == 42 && blc27 == 42 && blc28 == 42 && blc29 == 42 && blc30 == 42 && blc31 == 42 && blc32 == 20 && blc33 == 20 && blc34 == 20 && blc35 == 20 && blc36 == 42 && blc37 == 42 && blc38 == 42 && blc39 == 42 && blc40 == 42 && blc41 == 42 && blc42 == 42 && blc43 == 42 && blc44 == 42 && blc45 == 42 && blc46 == 42){
		World.setBlock (this.x, this.y+1, this.z, BlockID.Moon_portal, 0);
		World.setBlock (this.x, this.y+2, this.z, BlockID.Moon_portal, 0);
		World.setBlock (this.x, this.y+3, this.z, BlockID.Moon_portal, 0);
		}
	}
});




// file: mars.js

var BLOCK_TYPE_MARS = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 1
}, "stone");
IDRegistry.genBlockID("turfMars");
Block.createBlock("turfMars", [{name: "Mars turf", texture: [["turfMars", 0]], inCreative: true}], BLOCK_TYPE_MARS);
ToolAPI.registerBlockMaterial(BlockID.turfMars, "dirt", 3, true);
Block.registerDropFunction("turfMars", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	return [[BlockID.turfMars, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("stoneMars");
Block.createBlock("stoneMars", [{name: "Mars stone", texture: [["stoneMars", 0]], inCreative: true}], BLOCK_TYPE_MARS);
ToolAPI.registerBlockMaterial(BlockID.stoneMars, "stone", 3, true);
Block.registerDropFunction("stoneMars", function(coords, blockID, blockData, level, enchant){
if(level > 1){
	return [[BlockID.stoneMars, 1, 0]]
}
return [];
}, 3);
IDRegistry.genBlockID("dirtMars");
Block.createBlock("dirtMars", [{name: "Mars dirt", texture: [["dirtMars", 0]], inCreative: true}], BLOCK_TYPE_MARS);
ToolAPI.registerBlockMaterial(BlockID.dirtMars, "dirt", 3, true);
Block.registerDropFunction("dirtMars", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	return [[BlockID.dirtMars, 1, 0]]
}
return [];
}, 3);

var Mars = new Dimension({
    name: "Mars",
    
    generation: { 
	layers: [
		
		{
			range: [0, 70], 
			noise: { 
				octaves: { 
					count: 8, 
					weight: [0.51,0.51/2,0.51/4,0.51/8,0.51/16],
					scale: [0.01, 0.02, 0.04,0.08,0.16]
				}
			},
			gradient: [
				[.1,1],[.1,1],[1, -1]
			], 
			
			terrain: {
				base: BlockID.stoneMars,
				cover:{
					height:4,
					top: BlockID.dirtMars,
					block: BlockID.turfMars
				}
			},
		},
		
		
		{
			 range: [0, 70], 
			 noise: { 
			 	octaves: { 
					count: 3, 
					weight: [0.55,0.55/2,0.55/4],
					scale: [0.005, 0.01, 0.02] 
				} 
			}, 
			gradient: [
				[.1,.3],[.1,5],[.1,.7],[1, -1]
			], 
			
			terrain: {
				base: BlockID.stoneMars,
				cover:{
					height:4,
					top: BlockID.dirtMars,
					block: BlockID.turfMars
				}
			},
		},
		
		
		]
},
    callbacks: {
       tick: function() { 
       	if (World.getThreadTime() % 8 == 0){
World.setWorldTime (20000);
	if(Math.random() < .02){
    var pos = Player.getPosition()
    var randomX = parseInt(Math.random() * 200);
    var randomZ = parseInt(Math.random() * 200);
		pos = GenerationUtils.findSurface(pos.x-100+randomX, pos.y, pos.z-100+randomZ);
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z, BlockID.marscoin, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, BlockID.marscoin, 0);
	if(Math.random() < .4){
World.explode(pos.x, pos.y, pos.z, 7, true);
World.setBlock(pos.x, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.marscoin, 0);
World.setBlock(pos.x, pos.y-11, pos.z+1, BlockID.marscoin, 0);
World.setBlock(pos.x, pos.y-11, pos.z, BlockID.marscoin, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z, BlockID.marscoin, 0);
}
PlaySoundFile("crash.ogg")
}
}
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("MoonChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
    }
    });

var MarsTs = new TransferSequence(Mars);
MarsTs.setPortalTimeout(40);

MarsTs.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

MarsTs.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("Mars_portal", ["Crypto_portal", 0], MarsTs.getPortal(), {type: "full", frameId: 0}, true);
MarsTs.setPortalTiles(BlockID.Mars_portal);





var shape = new PortalShape();
shape.setPortalId(BlockID.Mars_portal);
shape.setFrameIds(0);
shape.setMinSize(1, 1);

MarsTs.setPortalBuilder(shape.getBuilder());

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id ==BlockID.mooncoin || block.id == BlockID.Mars_portal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.Mars_portal, [4]);
    }
});

TileEntity.registerPrototype(BlockID.mooncoin, {
	
	tick: function(){
		var wgb = World.getBlockID;
		
        var blc1 = wgb(this.x+1,this.y,this.z);
		var blc2 = wgb(this.x-1,this.y,this.z);
        var blc3 = wgb(this.x,this.y,this.z+1);
        var blc4 = wgb(this.x,this.y,this.z-1);
        var blc5 = wgb(this.x+1,this.y,this.z+1);
        var blc6 = wgb(this.x+1,this.y,this.z-1);
        var blc7 = wgb(this.x-1,this.y,this.z+1);
        var blc8 = wgb(this.x-1,this.y,this.z-1);
        var blc9 = wgb(this.x+2,this.y,this.z);
        var blc10 = wgb(this.x-2,this.y,this.z);
        var blc11 = wgb(this.x+2,this.y-1,this.z);
        var blc12 = wgb(this.x-2,this.y-1,this.z);
        var blc13 = wgb(this.x,this.y,this.z+2);
        var blc14 = wgb(this.x,this.y,this.z-2);
        var blc15 = wgb(this.x,this.y-1,this.z+2);
        var blc16 = wgb(this.x,this.y-1,this.z-2);
        var blc16 = wgb(this.x+1,this.y+1,this.z);
		var blc17 = wgb(this.x-1,this.y+1,this.z);
        var blc18 = wgb(this.x,this.y+1,this.z+1);
        var blc19 = wgb(this.x,this.y+1,this.z-1);
        var blc20 = wgb(this.x+1,this.y+1,this.z+1);
        var blc21 = wgb(this.x+1,this.y+1,this.z-1);
        var blc22 = wgb(this.x-1,this.y+1,this.z+1);
        var blc23 = wgb(this.x-1,this.y+1,this.z-1);
        var blc24 = wgb(this.x+1,this.y+3,this.z);
		var blc25 = wgb(this.x-1,this.y+3,this.z);
        var blc26 = wgb(this.x,this.y+3,this.z+1);
        var blc27 = wgb(this.x,this.y+3,this.z-1);
        var blc28 = wgb(this.x+1,this.y+3,this.z+1);
        var blc29 = wgb(this.x+1,this.y+3,this.z-1);
        var blc30 = wgb(this.x-1,this.y+3,this.z+1);
        var blc31 = wgb(this.x-1,this.y+3,this.z-1);
        var blc32 = wgb(this.x+1,this.y+2,this.z);
		var blc33 = wgb(this.x-1,this.y+2,this.z);
        var blc34 = wgb(this.x,this.y+2,this.z+1);
        var blc35 = wgb(this.x,this.y+2,this.z-1);
        var blc36 = wgb(this.x+1,this.y+2,this.z+1);
        var blc37 = wgb(this.x+1,this.y+2,this.z-1);
        var blc38 = wgb(this.x-1,this.y+2,this.z+1);
        var blc39 = wgb(this.x-1,this.y+2,this.z-1);
        var blc40 = wgb(this.x+1,this.y+5,this.z);
		var blc41 = wgb(this.x-1,this.y+5,this.z);
        var blc42 = wgb(this.x,this.y+5,this.z+1);
        var blc43 = wgb(this.x,this.y+5,this.z-1);
        var blc44 = wgb(this.x,this.y+5,this.z);
        var blc45 = wgb(this.x,this.y+6,this.z);
        var blc46 = wgb(this.x,this.y+7,this.z);
        var blc47 = wgb(this.x+1,this.y+4,this.z);
		var blc48 = wgb(this.x-1,this.y+4,this.z);
        var blc49 = wgb(this.x,this.y+4,this.z+1);
        var blc50 = wgb(this.x,this.y+4,this.z-1);
        var blc51 = wgb(this.x+1,this.y+4,this.z+1);
        var blc52 = wgb(this.x+1,this.y+4,this.z-1);
        var blc53 = wgb(this.x-1,this.y+4,this.z+1);
        var blc54 = wgb(this.x-1,this.y+4,this.z-1);
        
	if(blc1 == 42 && blc2 == 42 && blc3 == 42 && blc4 == 42 && blc5 == 42 && blc6 == 42 && blc7 == 42 && blc8 == 42 && blc9 == 42 && blc10 == 42 && blc11 == 42 && blc12 == 42 && blc13 == 42 && blc14 == 42 && blc15 == 42 && blc16 == 42 &&blc17 == 42 && blc18 == 42 && blc19 == 42 && blc20 == 42 && blc21 == 42 && blc22 == 42 && blc23 == 42 && blc24 == 42 && blc25 == 42 && blc26 == 42 && blc27 == 42 && blc28 == 42 && blc29 == 42 && blc30 == 42 && blc31 == 42 && blc32 == 20 && blc33 == 20 && blc34 == 20 && blc35 == 20 && blc36 == 42 && blc37 == 42 && blc38 == 42 && blc39 == 42 && blc40 == 42 && blc41 == 42 && blc42 == 42 && blc43 == 42 && blc44 == 42 && blc45 == 42 && blc46 == 42 && blc47 == 42 && blc48 == 42 && blc49 == 42 && blc50 == 42 && blc51 == 42 && blc52 == 42 && blc53 == 42 && blc54 == 42){
		World.setBlock (this.x, this.y+1, this.z, BlockID.Mars_portal, 0);
		World.setBlock (this.x, this.y+2, this.z, BlockID.Mars_portal, 0);
		World.setBlock (this.x, this.y+3, this.z, BlockID.Mars_portal, 0);
		World.setBlock (this.x, this.y+4, this.z, BlockID.Mars_portal, 0);
		}
	}
});




// file: trade.js

IDRegistry.genBlockID("cryptoTrade");
Block.createBlockWithRotation("cryptoTrade", [
    {name: "Crypto-Currency Exchanger", texture: [["trader_bottom", 0], ["trader_top", 0], ["trader_side", 0], ["trader_front", 0], ["trader_side", 0], ["trader_side", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
Recipes.addShaped({id:BlockID.cryptoTrade,count:1,data:0},["aaa","aba","aca"],['a',265,0,'b',ItemID.peercoin,0,'c',337,0]);
var guicryptotrade = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Crypto-Currency Exchanger"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 625, y: 145, bitmap: "trade_dollar", scale: 2.0},
        {type: "bitmap", x: 525, y: 150, bitmap: "trade_scale", scale: 3.8},
    ],
    elements: {
        "slotSource": {
            type: "slot", 
            x: 450, 
            y: 150
        }
    }
});
TileEntity.registerPrototype(BlockID.cryptoTrade, {
     defaultValues: {
     },
     tick: function(){
         if(this.container.getSlot("slotSource").id == ItemID.bitcoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 34, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.peercoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.buzcoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 2, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.dogecoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 3, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.litecoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.dollar, 4, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.windcoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 7, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.ripple &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 11, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.monero &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 12, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.dashcoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 14, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.zerocash &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 15, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.firecoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 17, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.lisk &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 19, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.augur &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 20, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.cosmocash &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 22, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.wondercoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 23, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.concoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 25, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.arkcoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 26, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.ethereum &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 28, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.mooncoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 42, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.marscoin &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 54, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.oneDollar &&
             this.container.getSlot("slotSource").count == 2
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.twoDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.twoDollar &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 2, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.oneDollar &&
             this.container.getSlot("slotSource").count == 5
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.fiveDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.fiveDollar &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneDollar, 5, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.fiveDollar &&
             this.container.getSlot("slotSource").count == 2
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.tenDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.tenDollar &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.fiveDollar, 2, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.tenDollar &&
             this.container.getSlot("slotSource").count == 2
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.twentyDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.twentyDollar &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.tenDollar, 2, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.tenDollar &&
             this.container.getSlot("slotSource").count == 5
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.fiftyDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.fiftyDollar &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.tenDollar, 5, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.fiftyDollar &&
             this.container.getSlot("slotSource").count == 2
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.oneHandredDollar, 1, 0);
         }
         if(this.container.getSlot("slotSource").id == ItemID.oneHandredDollar &&
             this.container.getSlot("slotSource").count == 1
         ){
            this.container.clearSlot("slotSource");
            Player.addItemToInventory (ItemID.fiftyDollar, 2, 0);
         }
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return guicryptotrade; 
     }
});

IDRegistry.genBlockID("shop");
Block.createBlockWithRotation("shop", [
    {name: "Shop", texture: [["trader_bottom", 0], ["trader_top", 0], ["trader_side", 0], ["shop_front", 0], ["trader_side", 0], ["trader_side", 0]], inCreative: true}
], BLOCK_TYPE_CRYPTO);
Recipes.addShaped({id:BlockID.shop,count:1,data:0},["aaa","aba","aca"],['a',265,0,'b',ItemID.dollar,0,'c',337,0]);
var guicryptoshop = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Shop"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 525, y: 45, bitmap: "trade_diamond", scale: 4.0},
        {type: "bitmap", x: 425, y: 50, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 525, y: 120, bitmap: "trade_emerald", scale: 4.0},
        {type: "bitmap", x: 425, y: 125, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 525, y: 195, bitmap: "trade_iron_ingot", scale: 4.0},
        {type: "bitmap", x: 425, y: 200, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 525, y: 270, bitmap: "trade_gold_ingot", scale: 4.0},
        {type: "bitmap", x: 425, y: 275, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 525, y: 345, bitmap: "trade_lapis_lazuri", scale: 4.0},
        {type: "bitmap", x: 425, y: 350, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 525, y: 420, bitmap: "trade_redstone_dust", scale: 4.0},
        {type: "bitmap", x: 425, y: 425, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 825, y: 45, bitmap: "trade_quartz", scale: 4.0},
        {type: "bitmap", x: 725, y: 50, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 825, y: 120, bitmap: "trade_coal", scale: 4.0},
        {type: "bitmap", x: 725, y: 125, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 825, y: 195, bitmap: "trade_saddle", scale: 4.0},
        {type: "bitmap", x: 725, y: 200, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 825, y: 270, bitmap: "trade_name_tag", scale: 4.0},
        {type: "bitmap", x: 725, y: 275, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 825, y: 345, bitmap: "trade_dragons_breath", scale: 4.0},
        {type: "bitmap", x: 725, y: 350, bitmap: "trade_scale", scale: 3.8},
        {type: "bitmap", x: 825, y: 420, bitmap: "trade_elytra", scale: 4.0},
        {type: "bitmap", x: 725, y: 425, bitmap: "trade_scale", scale: 3.8},
    ],
    elements: {
        "slotSource1": {
            type: "slot", 
            x: 350, 
            y: 50
        },
        "slotSource2": {
            type: "slot", 
            x: 350, 
            y: 125
        },
        "slotSource3": {
            type: "slot", 
            x: 350, 
            y: 200
        },
        "slotSource4": {
            type: "slot", 
            x: 350, 
            y: 275
        },
        "slotSource5": {
            type: "slot", 
            x: 350, 
            y: 350
        },
        "slotSource6": {
            type: "slot", 
            x: 350, 
            y: 425
        },
        "slotSource7": {
            type: "slot", 
            x: 650, 
            y: 50
        },
        "slotSource8": {
            type: "slot", 
            x: 650, 
            y: 125
        },
        "slotSource9": {
            type: "slot", 
            x: 650, 
            y: 200
        },
        "slotSource10": {
            type: "slot", 
            x: 650, 
            y: 275
        },
        "slotSource11": {
            type: "slot", 
            x: 650, 
            y: 350
        },
        "slotSource12": {
            type: "slot", 
            x: 650, 
            y: 425
        }
    }
});
TileEntity.registerPrototype(BlockID.shop, {
     defaultValues: {
     },
     tick: function(){
         if(this.container.getSlot("slotSource1").id == ItemID.dollar &&
             this.container.getSlot("slotSource1").count == 24
         ){
            this.container.clearSlot("slotSource2");
            Player.addItemToInventory (264, 1, 0);
         }
         if(this.container.getSlot("slotSource2").id == ItemID.dollar &&
             this.container.getSlot("slotSource2").count == 26
         ){
            this.container.clearSlot("slotSource2");
            Player.addItemToInventory (388, 1, 0);
         }
         if(this.container.getSlot("slotSource3").id == ItemID.dollar &&
             this.container.getSlot("slotSource3").count == 6
         ){
            this.container.clearSlot("slotSource3");
            Player.addItemToInventory (265, 1, 0);
         }
         if(this.container.getSlot("slotSource4").id == ItemID.dollar &&
             this.container.getSlot("slotSource4").count == 18
         ){
            this.container.clearSlot("slotSource4");
            Player.addItemToInventory (266, 1, 0);
         }
         if(this.container.getSlot("slotSource5").id == ItemID.dollar &&
             this.container.getSlot("slotSource5").count == 4
         ){
            this.container.clearSlot("slotSource5");
            Player.addItemToInventory (351, 1, 4);
         }
         if(this.container.getSlot("slotSource6").id == ItemID.dollar &&
             this.container.getSlot("slotSource6").count == 3
         ){
            this.container.clearSlot("slotSource6");
            Player.addItemToInventory (331, 1, 0);
         }
         if(this.container.getSlot("slotSource7").id == ItemID.dollar &&
             this.container.getSlot("slotSource7").count == 4
         ){
            this.container.clearSlot("slotSource7");
            Player.addItemToInventory (406, 1, 0);
         }
         if(this.container.getSlot("slotSource8").id == ItemID.dollar &&
             this.container.getSlot("slotSource8").count == 1
         ){
            this.container.clearSlot("slotSource8");
            Player.addItemToInventory (263, 1, 0);
         }
         if(this.container.getSlot("slotSource9").id == ItemID.dollar &&
             this.container.getSlot("slotSource9").count == 36
         ){
            this.container.clearSlot("slotSource9");
            Player.addItemToInventory (329, 1, 0);
         }
         if(this.container.getSlot("slotSource10").id == ItemID.dollar &&
             this.container.getSlot("slotSource10").count == 26
         ){
            this.container.clearSlot("slotSource10");
            Player.addItemToInventory (421, 1, 0);
         }
         if(this.container.getSlot("slotSource11").id == ItemID.dollar &&
             this.container.getSlot("slotSource11").count == 48
         ){
            this.container.clearSlot("slotSource11");
            Player.addItemToInventory (437, 1, 0);
         }
         if(this.container.getSlot("slotSource12").id == ItemID.dollar &&
             this.container.getSlot("slotSource12").count == 62
         ){
            this.container.clearSlot("slotSource12");
            Player.addItemToInventory (444, 1, 0);
         }
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return guicryptoshop; 
     }
});




// file: guideapi.js

const GuideAPI = {
    guides: {},
    container: new UI.Container(),
    nextLink: null,
    preLink: null,
    openedGuide: null,

    registerGuide: function (unique, params) {
        this.guides[unique] = params;

        if(params.item){
            Item.registerUseFunction(params.item, function () {
                GuideAPI.openGuide(unique);
            });
        }
    },

    openGuide: function (unique) {
        let guide = this.guides[unique];
        if(guide) {
            this.openedGuide = guide;
            GuideAPI.openPage(guide.pages.default);
        }

    },

    openPage: function (page) {
        GuideAPI.nextLink = page.nextLink;
        GuideAPI.preLink = page.preLink;
		let guide = this.openedGuide;
		
        function addLinks(elements) {
            if(GuideAPI.nextLink) {
                elements["nextLink"] = {type: "button", x: 910, y: UI.getScreenHeight() - 45, bitmap: (guide.textures && guide.textures.nextLink) || "next_page", scale: 3, clicker: {
                        onClick: function () {
                            GuideAPI.arrowClick(GuideAPI.nextLink)
                        }
                    }
                };
            }

            if(GuideAPI.preLink) {
                elements["preLink"] = {type: "button", x: 50, y: UI.getScreenHeight() - 45, bitmap: (guide.textures && guide.textures.preLink) || "pre_page", scale: 3, clicker: {
                        onClick: function () {
                            GuideAPI.arrowClick(GuideAPI.preLink)
                        }
                    }
                };
            }
        }

        if(this.container.isOpened()){
            let content = this.container.getGuiContent().elements;

            for(let i in content){
                if(i !== "close")
                    content[i] = null;
            }

            if(page.right) page.right.controller(page.right, content, this.container, "right");
            if(page.left) page.left.controller(page.left, content, this.container, "left");
            addLinks(content)
			
			for(let key in this.center_text){
				var elem = this.container.getElement(key);
				let defaultX = elem.x;
				
				elem.x += 450 / 2 - elem.elementRect.width();
				alert("elem alignment " + elem.x);
			}
        }else {
            let elements = {
                "close": {type: "closeButton", x: 930, y: 10, bitmap: (guide.textures && guide.textures.close) || "btn_close", scale: 3},
                "close3": {type: "button", x: 500, y: 10, bitmap: (guide.textures && guide.textures.close) || "btn_close", scale: 3}
            };
            let guideGUI = new UI.StandartWindow({
                standart: {
                    background: {
                        bitmap: (guide.textures && guide.textures.background) || "guide_background",
                        color: android.graphics.Color.argb(256, 0, 0, 0),
                    }
                },
                drawing: [

                ],
                elements: elements
            });
			
			if(guide.debug)
				guideGUI.setDebugEnabled(true);

            if(page.right) page.right.controller(page.right, elements, this.container, "right");
            if(page.left) page.left.controller(page.left, elements, this.container, "left");
            addLinks(elements);

            this.container.openAs(guideGUI);
        }
    },

    arrowClick: function (link) {
        GuideAPI.openPage(GuideAPI.openedGuide.pages[link]);
    }
};

const GuideHelper = {

    drawTextArray: function (array, x, y, globalSize, elements, section) {
        for(let i in array){
            let line = array[i];
			let alignment = line.alignment;
			let text = line.text;
            let size = line.size || globalSize;
			let maxCharsInLine = Math.floor(310 / (size / 2));
			let separators = 0;
			
			if(text.length > maxCharsInLine){
				for(let ch = 0;ch <= text.length;ch++){
					if(ch == 0 || ch % maxCharsInLine !== 0)
						continue;
					
					text = text.slice(0, ch) + "\n" + text.slice(ch, text.length);
					separators++;
				}
			}
			
			let xp = x;
			
			elements[section + "_" + i] = {type: "text", x: x, y: y, text: text, font: {color: line.color || android.graphics.Color.BLACK, size: size, bold: line.bold || false, underline: line.underline || false}, multiline: true};
			
			if(line.link){
				elements[section + "_" + i].clicker = {
					onClick: function(){
						GuideAPI.openPage(GuideAPI.openedGuide.pages[line.link]);
					}
				};
			}
			
            y += size * (separators > 0 ? separators + 2 : 1) + 5;
        }
    }

};

const PageControllers = {
	
    BASIC_PAGE: function (params, elements, container, section) {
        let globalSize = params.size || 13;

        if(section === "left")
            GuideHelper.drawTextArray(params.elements, 50, 40, globalSize, elements, section);
		else
            GuideHelper.drawTextArray(params.elements, 550, 40, globalSize, elements, section);
    },
	
	ITEM_PAGE: function (params, elements, container, section) {
        let globalSize = params.size || 13;
		let items = params.items;
		if(items){
			let centerX = (section == "right" ? 450 : 500) / 2 - (items.length * 60);
			for(let index in items){
				let item = items[index];
				if(item.id){
					let data = item.data || 0;
					let x = section === "right" ? 660 : 140;
					
					elements["slot_" + index + "_" + section] = {type: "slot", x: index == 0 ? x : x + centerX, y: index == 0 ? 50 : 250, size: index == 0 ? 200 : 60, visual: true, bitmap: "slot_empty"};
					let slot = container.getSlot("slot_" + index + "_" + section);
					slot.id = item.id;
					slot.data = data;
					slot.count = 1;
					
					if(index > 0)
						centerX += 60;
				}
			}
		}
		
		if(section === "left")
            GuideHelper.drawTextArray(params.elements, 50, items && items.length > 1 ? 310: 260, globalSize, elements, section);
		else
			GuideHelper.drawTextArray(params.elements, 550, items && items.length > 1 ? 310: 260, globalSize, elements, section);
    },
	
	OTO_RECIPE_PAGE: function (params, elements, container, section) {
		let globalSize = params.size || 13;
		let yp = 65;
		let xp = section == "left" ? 50 : 550;
		elements["oto_title_" + section] = {type: "text", x: xp, y: 40, text: params.title || "Furnace Recipe", font: {color: android.graphics.Color.BLACK, size: 20}};
		
		if(params.recipes){
			for(let key in params.recipes){
				let recipe = params.recipes[key];
				
				elements["slotInput_"+ key +"_" + section] = {type: "slot", x: xp, y: yp, size: 70, visual: true, bitmap: "slot_empty"};
				let slot_input = container.getSlot("slotInput_"+ key +"_" + section);
				
				elements["oto_bar_" + key + "_" + section] = {type: "image", x: xp + 70, y: yp + 10, bitmap: params.bar_texture || "furnace_bar_guide", scale: 3.2};
				
				elements["slotOutput_"+ key +"_" + section] = {type: "slot", x: xp + 140, y: yp, size: 70, visual: true, bitmap: "slot_empty"};
				let slot_output = container.getSlot("slotOutput_"+ key +"_" + section);
				
				if(params.type === 0){
					slot_input.id = recipe.input.id;
					slot_input.data = recipe.input.data || 0;
					slot_input.count = recipe.input.count || 1;
					
					slot_output.id = recipe.output.id;
					slot_output.data = recipe.output.data || 0;
					slot_output.count = recipe.output.count || 1;
				}else {
					slot_input.id = recipe.id || 0;
					slot_input.data = recipe.data || 0;
					slot_input.count = recipe.count || 1;
					
					var result = Recipes.getFurnaceRecipeResult(recipe.id, "iron");
					
					if(result){
						slot_output.id = result.id;
						slot_output.data = result.data;
						slot_output.count = 1;
					}
				}
				
				yp += 80;
			}
		}
		
		if(params.elements)
			GuideHelper.drawTextArray(params.elements, xp, yp, globalSize, elements, section);
		
	},

	GRID_3x3_PAGE: function (params, elements, container, section) {
		let globalSize = params.size || 13;
		let yp = 65;
		let xp = section == "left" ? 50 : 550;
		elements["grid_3x3_title_" + section] = {type: "text", x: xp, y: 50, text: params.title || "Workbench Recipe", font: {color: android.graphics.Color.BLACK, size: 20}};
		
		if(params.recipes){
			for(let key in params.recipes){
				let recipe = params.recipes[key];
				
				for(let i = 0; i < 3; i++){
					for(let k = 0; k < 3; k++){
						elements["slotInput_" + "_" + i + "_" + k + "_ "+ key +"_" + section] = {type: "slot", x: xp + i * 60 + 5, y: yp + k * 60 + 5, size: 60, visual: true};
						let slot = container.getSlot("slotInput_" + "_" + i + "_" + k + "_ "+ key +"_" + section);
						if(recipe.grid[i] && recipe.grid[k][i]){
							let item = recipe.materials[recipe.grid[k][i]];
							if(item){
								slot.id = item.id;
								slot.data = item.data || 0;
								slot.count = item.count || 1;
							}
						}
						
					}
				}
				
				elements["grid_3x3_bar_" + key + "_" + section] = {type: "image", x: xp + 195, y: yp + 65, bitmap: params.bar_texture || "furnace_bar_guide", scale: 3.2};
				
				elements["grid_3x3_slotOutput_"+ key +"_" + section] = {type: "slot", x: xp + 270, y: yp + 65, size: 60, visual: true};
				let slot_output = container.getSlot("grid_3x3_slotOutput_"+ key +"_" + section);
				let result = recipe.result;
				
				if(result){
					slot_output.id = result.id;
					slot_output.data = result.data || 0;
					slot_output.count = result.count || 1;
				}
				
				yp += 195;
			}
		}
		
		if(params.elements)
			GuideHelper.drawTextArray(params.elements, xp, yp, globalSize, elements, section);
		
	},
	
	ITEM_GRID_PAGE: function (params, elements, container, section) {
		let globalSize = params.size || 13;
		let yp = 65;
		let xp = section == "left" ? 40 : 550;
		let item_size = params.item_size || 60;
		let columns = params.columns || 6;
		elements["grid_page_title_" + section] = {type: "text", x: xp, y: 50, text: params.title || "Grid Page", font: {color: android.graphics.Color.BLACK, size: 20}};
		
		if(params.items){
			let padding = (530 - item_size * columns) / columns + item_size;
			let xp2 = xp;
			let it = 0;
			for(let index in params.items){
				let item = params.items[index];
				
				elements["grid_page_"+ index +"_" + section] = {type: "slot", x: xp2, y: yp, size: item_size, visual: true, bitmap: "slot_empty"};
				
				if(item.link){
					elements["grid_page_"+ index +"_" + section].clicker = {
						onClick: function(){
							GuideAPI.openPage(GuideAPI.openedGuide.pages[item.link]);
						}
					};
				}else if(item.clicker){
					elements["grid_page_"+ index +"_" + section].clicker = item.clicker;
				}
				
				let slot = container.getSlot("grid_page_"+ index +"_" + section);
				slot.id = item.id;
				slot.data = item.data || 0;
				slot.count = item.count || 1;
				
				if(it == columns || index == params.items.length - 1){
					xp2 = xp;
					yp += item_size + 10;
					it = 0;
				}else {
					xp2 += padding;
					it++;
				}
			}
		}
		
		if(params.elements)
			GuideHelper.drawTextArray(params.elements, xp, yp, globalSize, elements, section);
		
	}
	
};

ModAPI.registerAPI("GuideAPI", {
	GuideAPI: GuideAPI,
	GuideHelper: GuideHelper,
	PageControllers: PageControllers
});




// file: guide.js

ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers; 

IDRegistry.genItemID("cryptoGuide"); 
Item.createItem("cryptoGuide", "Crypto-Currency Prices", {name: "crypto_guide", meta: 0}, {stack: 1}); 
Recipes.addShaped({id:ItemID.cryptoGuide,count:1,data:0},["ab"],['a',340,0,'b',ItemID.dollar,0]);

GuideAPI.registerGuide("guideCrypto", { 
item: ItemID.cryptoGuide, 
debug: false, 
textures: { 
background: "crypto_guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "close", 
}, 
pages: { 
"default": { 
left: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Crypto-Currency Prices", size: 22, bold: true},
{text: "", size: 5},
{text: "Marscoin - 54 USD", size: 18},
{text: "Mooncoin - 42 USD", size: 18},
{text: "Bitcoin - 34 USD", size: 18},
{text: "Ethereum - 28 USD", size: 18},
{text: "Concoin - 26 USD", size: 18},
{text: "Arkcoin - 25 USD", size: 18},
{text: "Wondercoin - 23 USD", size: 18},
{text: "Cosmocash - 22 USD", size: 18},
{text: "Augur - 20 USD", size: 18},
{text: "Lisk - 19 USD", size: 18},
{text: "Firecoin - 17 USD", size: 18},
{text: "Zerocash - 15 USD", size: 18},
{text: "Dashcoin - 14 USD", size: 18},
{text: "Monero - 12 USD", size: 18},
{text: "Ripple - 11 USD", size: 18},
{text: "Windcoin - 7 USD", size: 18},
{text: "Litecoin - 4 USD", size: 18},
{text: "Dogecoin - 3 USD", size: 18},
{text: "Buzcoin - 2 USD", size: 18},
{text: "Peercoin - 1 USD", size: 18},
] 
}, 
right: { 
controller: PageControllers.BASIC_PAGE, 
elements: [
{text: "Shop Prices", size: 22, bold: true},
{text: "", size: 5},
{text: "Diamond - 24 USD", size: 18},
{text: "Emerald - 26 USD", size: 18},
{text: "Iron Ingot - 6 USD", size: 18},
{text: "Gold Ingot - 18 USD", size: 18},
{text: "Lapis Lazuri - 4 USD", size: 18},
{text: "Redstone Dust - 3 USD", size: 18},
{text: "Quartz - 4 USD", size: 18},
{text: "Coal - 1 USD", size: 18},
{text: "Saddle - 36 USD", size: 18},
{text: "Nametag - 26 USD", size: 18},
{text: "Dragon's Breath - 48 USD", size: 18},
{text: "Elytra - 62 USD", size: 18},
] 
}
}
}
}); 
});




// file: furnace.js

let RenderData = {};

const regFurnace=function(id, name, speed){
  id = id+"_furnace";
  name = name+" Furnace";

  IDRegistry.genBlockID(id);
  Block.createBlockWithRotation(id, [{name: name, texture: [[id, 0], [id, 0], [id, 0], [id, 1], [id, 0], [id, 0]], inCreative:  true}]);
  ToolAPI.registerBlockMaterial(BlockID[id], "stone");
  Block.setDestroyTime(BlockID[id], 5);

  RenderData[BlockID[id]] = [];
  let render1, render2;
  const tex1 = [
    [[id, 0], [id, 0], [id, 0], [id, 1], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 1], [id, 0], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 0], [id, 1]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 1], [id, 0]]
  ];
  const tex2 = [
    [[id, 0], [id, 0], [id, 0], [id, 2], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 2], [id, 0], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 0], [id, 2]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 2], [id, 0]]
  ];
  for(let i = 0; i < 4; i++){
    render1 = new ICRender.Model();
    render1.addEntry(BlockRenderer.createTexturedBlock(tex1[i]));
    BlockRenderer.enableCoordMapping(BlockID[id], i, render1);
    render2 = new ICRender.Model();
    render2.addEntry(BlockRenderer.createTexturedBlock(tex2[i]));
    RenderData[BlockID[id]].push(render2);
  }

  TileEntity.registerPrototype(BlockID[id], {
    getGuiScreen: function(){
      return new UI.StandartWindow({
        standart: {
          header: {text: {text: name}},
          inventory: {standart: true},
          background: {standart: true}
        },
        drawing: [
          {type: "bitmap", x: 492, y: 137, bitmap: "burn_0", scale: 3.2},
          {type: "bitmap", x: 555, y: 135, bitmap: "prog_0", scale: 3.2},
          {type: "bitmap", x: 2000, y: 200, bitmap: "lava_0", scale: 3.2}
        ],
        elements: {
          "scaleBurn": {type: "scale", x: 490, y: 135, direction: 1, value: 0, bitmap: "burn_1", scale: 3.2},
          "scaleProg": {type: "scale", x: 555, y: 135, value: 0, bitmap: "prog_1", scale: 3.2},
          "scaleLava": {type: "scale", x: 2000, y: 200, direction: 1, value: 0, bitmap: "lava_1", scale: 3.2},
          "slotUpgrade0": {type: "slot", x: 340, y: 60},
          "slotUpgrade1": {type: "slot", x: 340, y: 120},
          "slotUpgrade2": {type: "slot", x: 340, y: 180},
          "slotSource1": {type: "slot", x: 480, y: 60},
          "slotFuel1": {type: "slot", x: 480, y: 200},
          "slotResult1": {type: "slot", x: 640, y: 130},
          "slotSource2": {type: "slot", x: 2000, y: 60},
          "slotFuel2": {type: "slot", x: 2000, y: 200},
          "slotResult2": {type: "slot", x: 2000, y: 130}
        }
      });
    },
    defaultValues: {
      max: 0,
      burn: 0,
      progress: 0
    },
    init: function(){
      this.liquidStorage.setLimit("lava", 4);
    },
    addTransportedItem: function(self, item){
      let add = 0;
      const n = this.getUpg(ID("storage"))?2:1;
      const s = this.container.getSlot("slotSource"+n);
      const f = this.container.getSlot("slotFuel"+n);
      if(Recipes.getFuelBurnDuration(item.id, item.data)){
        if(this.checkUp(f, item)){
          add = Math.min(item.count, 64-f.count);
          f.id = item.id;
          f.data = item.data;
          f.count += add;
          item.count -= add;
          if(!item.count)return;
        }
      }
      else if(this.checkUp(s, item)){
        add = Math.min(item.count, 64-s.count);
        s.id = item.id;
        s.data = item.data;
        s.count += add;
        item.count -= add;
        if(!item.count)return;
      }
    },
    getTransportSlots: function(){
      return{
        input: ["slotSource1", "slotSource2", "slotFuel1", "slotFuel2"],
        output: ["slotResult1", "slotResult2"]
      };
    },
    checkUp: function(s1, s2, double){
      double = double?2:1;
      return !s1.id||s1.id==s2.id&&s1.data==s2.data&&s1.count<=64-double;
    },
    shiftItem: function(s1, s2){
      s2.count && this.checkUp(s1, s2) &&
        (s1.id = s2.id, s1.data = s2.data, s1.count++, s2.count--)&
        this.container.validateSlot("slotSource2")&
        this.container.validateSlot("slotFuel2")&
        this.container.validateSlot("slotResult1");
    },
    dumpItem: function(s){
      s.count &&
        World.drop(this.x+.5, this.y+.5, this.z+.5, s.id, s.count, s.data)&
        (s.id = s.count = s.data = 0);
    },
    getUpg: function(id){
      let slot;
      for(let i = 3; i--;){
        slot = this.container.getSlot("slotUpgrade"+i);
        if(slot.id == id){
          return slot;
          break;
        }
      }
    },
    activate: function(){
      const block = World.getBlock(this.x, this.y, this.z);
      BlockRenderer.mapAtCoords(this.x, this.y, this.z, RenderData[block.id][block.data]);
    },
    tick: function(){
      const scare = this.data.burn/this.data.max;
      this.container.setScale("scaleBurn", isNaN(scare)?0:scare);
      this.container.setScale("scaleLava", this.liquidStorage.getAmount("lava")/4);
      this.container.setScale("scaleProg", this.data.progress);
      const s1 = this.container.getSlot("slotSource1");
      const f1 = this.container.getSlot("slotFuel1");
      const r1 = this.container.getSlot("slotResult1");
      const s2 = this.container.getSlot("slotSource2");
      const f2 = this.container.getSlot("slotFuel2");
      const r2 = this.container.getSlot("slotResult2");
      const rec = Recipes.getFurnaceRecipeResult(s1.id);

      const content = this.container.getGuiContent();
      const storage = this.getUpg(ID("storage"));
      const liquid = this.getUpg(ID("liquid"));
      if(content){
        content.elements.slotSource2.x = content.elements.slotFuel2.x = storage?420:2000;
        content.elements.slotResult2.x = storage?700:2000;
        content.drawing[4].x = content.elements.scaleLava.x = liquid?555:2000;
      }

      storage?
        this.shiftItem(s1, s2)&this.shiftItem(f1, f2)&this.shiftItem(r2, r1):
        this.dumpItem(s2)&this.dumpItem(f2)&this.dumpItem(r2);

      let empty;
      if(liquid){
        if(LiquidRegistry.getItemLiquid(f1.id, f1.data) == "lava" && this.liquidStorage.getAmount("lava") <= 3){
          empty=LiquidRegistry.getEmptyItem(f1.id, f1.data);
          this.liquidStorage.addLiquid("lava", 1);
          f1.id = empty.id;
          f1.data = empty.data;
        }
      }
      else this.liquidStorage.setAmount("lava", 0);

      if(this.data.burn > 0)this.data.burn -= speed;
      else{
        if(this.data.max){
          this.data.max = 0;
          BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        }
        if(rec){
          const fuel = this.getUpg(ID("fuel"));
          const fuel1 = this.getUpg(ID("fuel1"));
          if(this.liquidStorage.getAmount("lava")){
            this.liquidStorage.getLiquid("lava", .01);
            this.data.burn = this.data.max = fuel||fuel1?400:200;
            this.activate();
            fuel && ++fuel.data == 128 && (fuel.id = fuel.data = fuel.count = 0);
          }
          else{
            let time = Recipes.getFuelBurnDuration(f1.id, f1.data);
            if(time){
              if(LiquidRegistry.getItemLiquid(f1.id, f1.data) == "lava" && f1.count == 1){
                empty = LiquidRegistry.getEmptyItem(f1.id, f1.data);
                f1.id = empty.id;
                f1.data = empty.data;
              }
              else f1.count--;
              this.container.validateSlot("slotFuel1");
              if(fuel || fuel1){
                time *= 2;
                fuel && ++fuel.data == 128 && (fuel.id = fuel.data = fuel.count = 0);
              }
              this.data.burn = this.data.max = time;
              this.activate();
            }
            else this.data.burn = this.data.max = 0;
          }
        }
      }

      if(this.data.burn && rec){
        const ore = this.getUpg(ID("ore"));
        const ore1 = this.getUpg(ID("ore1"));
        const oreCheck = ORE.indexOf(s1.id) != -1 && (ore||ore1);
        if(this.checkUp(r1, rec, oreCheck)){
          this.data.progress += speed/200;
          if(this.data.progress >= 1){
            this.data.progress = 0;
            r1.id = rec.id;
            r1.data = rec.data;
            r1.count++;
            if(oreCheck){
              r1.count++;
              ore && ++ore.data == 512 && (ore.id = ore.data = ore.count = 0);
            }
            s1.count--;
            this.container.validateSlot("slotSource1");
          }
        }
      }
      else this.data.progress = 0;

    }
  });

};

regFurnace("bitcoin", "Bitcoin", 34);
regFurnace("wondercoin", "Wondercoin", 23);
regFurnace("ethereum", "Ethereum", 28);
regFurnace("arkcoin", "Arkcoin", 25);
regFurnace("cosmocash", "Cosmocash", 22);
regFurnace("augur", "Augur", 20);
regFurnace("lisk", "Lisk", 19);
regFurnace("firecoin", "Firecoin", 17);
regFurnace("zerocash", "Zerocash", 15);
regFurnace("dashcoin", "Dashcoin", 14);
regFurnace("monero", "Monero", 12);
regFurnace("ripple", "Ripple", 11);
regFurnace("windcoin", "Windcoin", 7);
regFurnace("litecoin", "Litecoin", 4);
regFurnace("dogecoin", "Dogecoin", 3);
regFurnace("peercoin", "Peercoin", 1);
regFurnace("concoin", "Concoin", 26);
regFurnace("buzcoin", "Buzcoin", 2);
regFurnace("mooncoin", "Mooncoin", 42);
regFurnace("marscoin", "Marscoin", 54);


const ORE = [
  14, 
  15, 
  16,
  56,
  129,
  BlockID.bitcoin,
  BlockID.ethereum,
  BlockID.concoin,
  BlockID.arkcoin,
  BlockID.wondercoin,
  BlockID.cosmocash,
  BlockID.augur,
  BlockID.lisk,
  BlockID.firecoin,
  BlockID.zerocash,
  BlockID.dashcoin,
  BlockID.monero,
  BlockID.ripple,
  BlockID.windcoin,
  BlockID.litecoin,
  BlockID.dogecoin,
  BlockID.buzcoin,
  BlockID.peercoin,
  BlockID.mooncoin,
  BlockID.marscoin,
  BlockID.oreCopper, 
  BlockID.oreTin, 
  BlockID.oreLead, 
  BlockID.oreAluminum, 
  BlockID.oreNickel, 
  BlockID.orePlatinum, 
  BlockID.oreIridium, 
  BlockID.oreMithril, 
  BlockID.orecoppere, 
  BlockID.draconiumOre, 
  BlockID.draconiumOreNether, 
  BlockID.draconiumOreEnd
];

const regItem = function(tex, name, meta){
  tex = "crypto_"+tex;
  const id = tex+(meta||"");
  IDRegistry.genItemID(id);
  Item.createItem(id, name+" Upgrade", {name: tex, meta: meta}, {stack: 1});
};

const ID = function(str){
  str = "crypto_"+str;
  return ItemID[str] || BlockID[str];
};

regItem("fuel", "Fuel Efficiency");
regItem("fuel", "Advanced Fuel Efficiency", 1);
regItem("ore", "Ore Processing");
regItem("ore", "Advanced Ore Processing", 1);
regItem("storage", "Storage");
regItem("liquid", "Liquid");

Item.setMaxDamage(ID("fuel"), 128);
Item.setMaxDamage(ID("ore"), 512);

Recipes.addShaped({id: ID("fuel")}, ["aba", "bcb", "aba"], ["a", 22, 0, "b", 368, 0, "c", 263, 0]);
Recipes.addShaped({id: ID("fuel1")}, ["aba", "cdc", "aca"], ["a", 264, 0, "b", 370, 0, "c", 381, 0, "d", ID("fuel"), 0]);
Recipes.addShaped({id: ID("ore")}, ["aaa", "aba", "aca"], ["a", 1, 0, "b", 318, 0, "c", 33, -1]);
Recipes.addShaped({id: ID("ore1")}, ["aba", "cdc", "aba"], ["a", 264, 0, "b", 33, -1, "c", 49, 0, "d", ID("ore"), 0]);
Recipes.addShaped({id: ID("liquid")}, ["aoa", "bcb", "aba"], ["a", 265, 0, "b", 20, 0, "c", 325, 0]);
Recipes.addShaped({id: ID("storage")}, ["aba", "bcb", "aba"], ["a", 1, 0, "b", 20, 0, "c", 54, 0]);
    
Recipes.addShaped({id:BlockID.bitcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.bitcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.wondercoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.wondercoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.ethereum_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.ethereum,0,'b',61,0]);
Recipes.addShaped({id:BlockID.arkcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.arkcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.cosmocash_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.cosmocash,0,'b',61,0]);
Recipes.addShaped({id:BlockID.augur_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.augur,0,'b',61,0]);
Recipes.addShaped({id:BlockID.lisk_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.lisk,0,'b',61,0]);
Recipes.addShaped({id:BlockID.firecoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.firecoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.zerocash_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.zerocash,0,'b',61,0]);
Recipes.addShaped({id:BlockID.dashcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.dashcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.monero_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.monero,0,'b',61,0]);
Recipes.addShaped({id:BlockID.ripple_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.ripple,0,'b',61,0]);
Recipes.addShaped({id:BlockID.windcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.windcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.litecoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.litecoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.dogecoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.dogecoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.peercoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.peercoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.concoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.concoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.buzcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.buzcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.mooncoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.mooncoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.marscoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.marscoin,0,'b',61,0]);




// file: achievments.js

alert("CryptoMining - by JamesLong");
var AchievementAPI;

ModAPI.addAPICallback("AchievementsAPI", function (api) {
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "CryptoCurrency",
        name: "Crypto-Currency",
        width: 250,
        height: 2000,
        size: 125,
        bgTexture: "crypto_background_1",
        icon: {
            id: ItemID.bitcoin
        }
    });
}); 


ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "first",
        name: {
            text: "I am Crypto-Miner!",
            translate: "achievements.CryptoCurrency.first.title"
        },
        description: {
            text: "Mine you first Peercoin",
            translate: "achievements.CryptoCurrency.first.description"
        },
        column: 2,
        row: 1,
        item: {
            id: ItemID.peercoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "buzcoin",
        name: {
            text: "Mmm, heart? BUZOVA?",
            translate: "achievements.CryptoCurrency.buzcoin.title"
        },
        description: {
            text: "Mine you first Buzcoin",
            translate: "achievements.CryptoCurrency.buzcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 1,
        item: {
            id: ItemID.buzcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "dogecoin",
        name: {
            text: "DOGE! Gav, gav!",
            translate: "achievements.CryptoCurrency.dogecoin.title"
        },
        description: {
            text: "Mine you first Dogecoin",
            translate: "achievements.CryptoCurrency.dogecoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 2,
        item: {
            id: ItemID.dogecoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "litecoin",
        name: {
            text: "Hmm, it's glowing!",
            translate: "achievements.CryptoCurrency.litecoin.title"
        },
        description: {
            text: "Mine you first Litecoin",
            translate: "achievements.CryptoCurrency.litecoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 3,
        item: {
            id: ItemID.litecoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "windcoin",
        name: {
            text: "It's wind!",
            translate: "achievements.CryptoCurrency.windcoin.title"
        },
        description: {
            text: "Mine you first Windcoin",
            translate: "achievements.CryptoCurrency.windcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 4,
        item: {
            id: ItemID.windcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "ripple",
        name: {
            text: "Ripple? What means it?",
            translate: "achievements.CryptoCurrency.ripple.title"
        },
        description: {
            text: "Mine you first Ripple",
            translate: "achievements.CryptoCurrency.ripple.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 5,
        item: {
            id: ItemID.ripple
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "monero",
        name: {
            text: "Monero, 12 dollars? WHAT?",
            translate: "achievements.CryptoCurrency.monero.title"
        },
        description: {
            text: "Mine you first Monero",
            translate: "achievements.CryptoCurrency.monero.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 6,
        item: {
            id: ItemID.monero
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "dashcoin",
        name: {
            text: "Dash... mmm...",
            translate: "achievements.CryptoCurrency.dashcoin.title"
        },
        description: {
            text: "Mine you first Dashcoin",
            translate: "achievements.CryptoCurrency.dashcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 7,
        item: {
            id: ItemID.dashcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "zerocash",
        name: {
            text: "ZERO!!",
            translate: "achievements.CryptoCurrency.zerocash.title"
        },
        description: {
            text: "Mine you first Zerocash",
            translate: "achievements.CryptoCurrency.zerocash.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 8,
        item: {
            id: ItemID.zerocash
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "firecoin",
        name: {
            text: "I must mine fire!",
            translate: "achievements.CryptoCurrency.firecoin.title"
        },
        description: {
            text: "Mine you first Firecoin",
            translate: "achievements.CryptoCurrency.firecoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 9,
        item: {
            id: ItemID.firecoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "lisk",
        name: {
            text: "Lisk, It's strange!",
            translate: "achievements.CryptoCurrency.lisk.title"
        },
        description: {
            text: "Mine you first Lisk",
            translate: "achievements.CryptoCurrency.lisk.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 10,
        item: {
            id: ItemID.lisk
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "augur",
        name: {
            text: "Augur, au, au!",
            translate: "achievements.CryptoCurrency.augur.title"
        },
        description: {
            text: "Mine you first Augur",
            translate: "achievements.CryptoCurrency.augur.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 11,
        item: {
            id: ItemID.augur
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "cosmocash",
        name: {
            text: "Cosmos?",
            translate: "achievements.CryptoCurrency.cosmocash.title"
        },
        description: {
            text: "Mine you first Cosmocash",
            translate: "achievements.CryptoCurrency.cosmocash.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 12,
        item: {
            id: ItemID.cosmocash
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "moon",
        name: {
            text: "Take samples!",
            translate: "achievements.CryptoCurrency.moon.title"
        },
        description: {
            text: "Go to the Moon, and mine moon dirt",
            translate: "achievements.CryptoCurrency.moon.description"
        },
    parent: {
    unique: "cosmocash"
    },
        strongDependence: true,
        type: "goal",
        column: 4,
        row: 12,
        item: {
            id: BlockID.dirtMoon
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "mooncoin",
        name: {
            text: "Crypto-Currency, again..",
            translate: "achievements.CryptoCurrency.mooncoin.title"
        },
        description: {
            text: "Find meteors, and mine it!",
            translate: "achievements.CryptoCurrency.mooncoin.description"
        },
    parent: {
    unique: "moon"
    },
        strongDependence: true,
        type: "challenge",
        column: 4,
        row: 13,
        item: {
            id: ItemID.mooncoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "mars",
        name: {
            text: "Take samples again!",
            translate: "achievements.CryptoCurrency.mars.title"
        },
        description: {
            text: "Go to the Mars, and mine mars dirt",
            translate: "achievements.CryptoCurrency.mars.description"
        },
    parent: {
    unique: "mooncoin"
    },
        strongDependence: true,
        type: "goal",
        column: 4,
        row: 14,
        item: {
            id: BlockID.dirtMars
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "marscoin",
        name: {
            text: "Crypto-Currency again, again, again..",
            translate: "achievements.CryptoCurrency.marscoin.title"
        },
        description: {
            text: "Find meteors and mine it!",
            translate: "achievements.CryptoCurrency.marscoin.description"
        },
    parent: {
    unique: "mooncoin"
    },
        strongDependence: true,
        type: "challenge",
        column: 4,
        row: 15,
        item: {
            id: ItemID.marscoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "wondercoin",
        name: {
            text: "It's very heavy!",
            translate: "achievements.CryptoCurrency.wondercoin.title"
        },
        description: {
            text: "Mine you first Wondercoin",
            translate: "achievements.CryptoCurrency.wondercoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 13,
        item: {
            id: ItemID.wondercoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "arkcoin",
        name: {
            text: "Strength!",
            translate: "achievements.CryptoCurrency.arkcoin.title"
        },
        description: {
            text: "Mine you first Arkcoin",
            translate: "achievements.CryptoCurrency.arkcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 14,
        item: {
            id: ItemID.arkcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "concoin",
        name: {
            text: "Vladimir Ivanov",
            translate: "achievements.CryptoCurrency.concoin.title"
        },
        description: {
            text: "Mine you first Concoin",
            translate: "achievements.CryptoCurrency.concoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 15,
        item: {
            id: ItemID.concoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "ethereum",
        name: {
            text: "It's perfect!",
            translate: "achievements.CryptoCurrency.ethereum.title"
        },
        description: {
            text: "Mine you first Ethereum",
            translate: "achievements.CryptoCurrency.ethereum.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 16,
        item: {
            id: ItemID.ethereum
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "bitcoin",
        name: {
            text: "BITCOIN!!!",
            translate: "achievements.CryptoCurrency.bitcoin.title"
        },
        description: {
            text: "Mine you first Bitcoin",
            translate: "achievements.CryptoCurrency.bitcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 17,
        item: {
            id: ItemID.bitcoin
        }
    });
});

//callbacks

Block.registerDropFunction("bitcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "bitcoin");
    return [[ItemID.bitcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("wondercoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "wondercoin");
    return [[ItemID.wondercoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("ethereum", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "ethereum");
    return [[ItemID.ethereum, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("arkcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "arkcoin");
    return [[ItemID.arkcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("cosmocash", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "cosmocash");
    return [[ItemID.cosmocash, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("augur", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "augur");
    return [[ItemID.augur, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("lisk", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "lisk");
    return [[ItemID.lisk, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("firecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "firecoin");
    return [[ItemID.firecoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("zerocash", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "zerocash");
    return [[ItemID.zerocash, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dashcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "dashcoin");
    return [[ItemID.dashcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("monero", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "monero");
    return [[ItemID.monero, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("ripple", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "ripple");
    return [[ItemID.ripple, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("windcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "windcoin");
    return [[ItemID.windcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("litecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "litecoin");
    return [[ItemID.litecoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dogecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "dogecoin");
    return [[ItemID.dogecoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("peercoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "first");
    return [[ItemID.peercoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("concoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "concoin");
    return [[ItemID.concoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("buzcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "buzcoin");
    return [[ItemID.buzcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dirtMoon", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	AchievementAPI.give("CryptoCurrency", "moon");
	return [[BlockID.dirtMoon, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("mooncoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "mooncoin");
    return [[ItemID.mooncoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dirtMars", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	AchievementAPI.give("CryptoCurrency", "mars");
	return [[BlockID.dirtMars, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("marscoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "marscoin");
    return [[ItemID.marscoin, 1, 0]]
}
return [];
}, 3);







