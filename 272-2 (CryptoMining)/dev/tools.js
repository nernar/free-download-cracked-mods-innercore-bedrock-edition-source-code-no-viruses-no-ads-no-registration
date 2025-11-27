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

