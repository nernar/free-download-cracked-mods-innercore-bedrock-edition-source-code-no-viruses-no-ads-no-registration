IDRegistry.genItemID("constructorMine");
Item.createItem("constructorMine", "Mine Constructor Packet", {
  name: "constructor_packet",
  meta: 0
});

setinfo.setStructureInfo(ItemID.constructorMine,"mine",{height: 30,level: 1})

Recipes.addShaped({
  id: ItemID.constructorMine,
  count: 1,
  data: 0
}, [
	" g ",
	"sbs",
	" g "
], ['s', 65, 0, 'g', 5, 0,'b',4,0]);


Item.registerUseFunction(ItemID.constructorMine, function(coords, item, block,player) {
  let leg = 30
  let vec = {x: 0,y: 0,z: 0}
  let vecMine = {x: 0,y: 0,z: 0}
  switch (coords.side) {
    case 1:
      vec.y = -leg
      break;
    case 0:
      vecMine.y = leg
      break;
  }
  if(coords.side == 0 || coords.side == 1){
    tonelApi.setBlocksFormX(coords,vec,vecMine,{id:4,data:0})
    tonelApi.setBlocks(coords,vec,vecMine,{id:65,data: getBlockRotation(player,false )})
  }
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
});

IDRegistry.genItemID("constructorMineN2");
Item.createItem("constructorMineN2", "Mine N2 Constructor Packet", {
  name: "constructor_packet",
  meta: 0
});

setinfo.setStructureInfo(ItemID.constructorMineN2, "mine", { height: 60, level: 2 })

Recipes.addShaped({
  id: ItemID.constructorMineN2,
  count: 1,
  data: 0
}, [
	"cgc",
	"sbs",
	"cgc"
], ['s', 65, 0, 'g', 98, 0, 'b', 4, 0,'c',17,0]);

Item.registerUseFunction(ItemID.constructorMineN2, function(coords, item, block, player) {
  let leg = 60
  let radius = 2
  let radius2 = 1
  let vec = { x: 0, y: 0, z: 0 }
  let vecMine = { x: 0, y: 0, z: 0 }
  switch (coords.side) {
    case 1:
      vec.y = -leg
      break;
    case 0:
      vecMine.y = leg
      vec.y = -2
      break;
  }
  let vectorWit = { x: -radius, y: vec.y, z: -radius }
  let vectorMineWit = { x: radius, y: vecMine.y, z: radius }
  let vectorWit2 = { x: -radius2, y: vec.y, z: -radius2 }
  let vectorMineWit2 = { x: radius2, y: vecMine.y, z: radius2 }
  if (coords.side == 0 || coords.side == 1) {
    tonelApi.setBlocks(coords, vectorWit, vectorMineWit, { id: 98, data: 0})
    tonelApi.setBlocks(coords, vectorWit2, vectorMineWit2, { id: 0, data: 0 })
    
    tonelApi.setBlocksFormX3(coords, vec, vecMine,{block1: {id:65,data: 4},block2: {id:65,data: 5},block3: {id:65,data: 2},block4: {id:65,data: 3}},true,{id: 17,data:0})
    tonelApi.quietBlock(coords,vec,vecMine,{id:17,data:0},2)
    tonelApi.quietBlockTorch(coords,vec,vecMine,{block1: {id:50,data:2},block2: {id:50,data:2},block3: {id:50,data:1},block4: {id:50,data:1}},1,4)
  }
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
});

