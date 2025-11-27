//этот код не дает особую нагрузки поэтому просто про него забудь
function createFurnitureWood(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createFurnitureLight(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_LIGHT);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: 0}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
}
function createFurnitureStone(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createFurnitureStal(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_STAL);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createFurnitureStoneRotation(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId){
IDRegistry.genBlockID(stringId);
Block.createBlockWithRotation(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: 0}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel>0){
		return [[itemId, 1, 0]]; 
	}else{
		return [[0,0,0]];
	}
	
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createCherry(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_SAZHENETC);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createSazhenetc(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_SAZHENETC);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createKamen(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_KAMEN);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createFurnitureWoo(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createKame(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_KAMEN);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createKam(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_KAMEN);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}