IDRegistry.genItemID("MinerLineExplosive");
Item.createItem("MinerLineExplosive", "Miner Line Explosive", {
  name: "explosive_line_drilling",
  meta: 0
});

Recipes.addShaped({
  id: ItemID.MinerLineExplosive,
  count: 2,
  data: 0
}, [
	" v ",
	"gsg",
	" s"
], ['s', 289, 0, 'g', 339, 0,'v',318,0]);

IDRegistry.genItemID("MinerLineExplosive3x3");
Item.createItem("MinerLineExplosive3x3", "Miner Line Explosive 3x3", {
  name: "explosive_line_drilling_3x3",
  meta: 0
});

Recipes.addShaped({
  id: ItemID.MinerLineExplosive3x3,
  count: 2,
  data: 0
}, [
	" v ",
	"sss",
	"ggg"
], ['s', 289, 0, 'g', 339, 0,'v',318,0]);

Recipes.addShaped({
  id: ItemID.MinerLineExplosive3x3,
  count: 1,
  data: 0
}, [
	"   ",
	"sss",
	"   "
], ['s', ItemID.MinerLineExplosive, 0]);


IDRegistry.genItemID("MinerLineExplosive4x4");
Item.createItem("MinerLineExplosive4x4", "Miner Line Explosive 4x4", {
  name: "explosive_line_drilling_4x4",
  meta: 0
});

Recipes.addShaped({
  id: ItemID.MinerLineExplosive4x4,
  count: 2,
  data: 0
}, [
	"vvv",
	"sss",
	"ggg"
], ['s', 289, 0, 'g', 339, 0,'v',318,0]);

Recipes.addShaped({
  id: ItemID.MinerLineExplosive4x4,
  count: 1,
  data: 0
}, [
	"   ",
	"ss ",
	"   "
], ['s', ItemID.MinerLineExplosive3x3, 0]);

Item.registerUseFunction(ItemID.MinerLineExplosive, function(coords, item, block,player) {
  let radius = 0
  let leg = 16
  let xi = yi = zi = radius
  let xv = yv = zv = -radius
  switch (coords.side) {
    case 1:
      yv = -leg
      break;
    case 0:
      yi = leg
      break;
    case 2:
      zi = leg
      break;
    case 3:
      zv = -leg
      break;
    case 4:
      xi = leg
      break;
    case 5:
      xv = -leg
      break;
  
  }
  let vec = {
    x: xv,
    y: yv,
    z: zv
  }
  let vec2 = {
    x: xi,
    y: yi,
    z: zi
  }
  tonelApi.destroyBlocks(coords, vec, vec2, true)
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
})

Item.registerUseFunction(ItemID.MinerLineExplosive3x3, function(coords, item, block,player) {
  let radius = 1
  let leg = 16
  let xi = yi = zi = radius
  let xv = yv = zv = -radius
  switch (coords.side) {
    case 1:
      yv = -leg
      break;
    case 0:
      yi = leg
      break;
    case 2:
      zi = leg
      break;
    case 3:
      zv = -leg
      break;
    case 4:
      xi = leg
      break;
    case 5:
      xv = -leg
      break;
  
  }
  let vec = {
    x: xv,
    y: yv,
    z: zv
  }
  let vec2 = {
    x: xi,
    y: yi,
    z: zi
  }
  tonelApi.destroyBlocks(coords, vec, vec2, true)
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
})

Item.registerUseFunction(ItemID.MinerLineExplosive4x4, function(coords, item, block,player) {
    let radius = 2
    let leg = 16
    let xi = yi = zi = radius
    let xv = yv = zv = -radius
    switch (coords.side) {
      case 1:
        yv = -leg
        break;
      case 0:
        yi = leg
        break;
      case 2:
        zi = leg
        break;
      case 3:
        zv = -leg
        break;
      case 4:
        xi = leg
        break;
      case 5:
        xv = -leg
        break;
  
    }
    let vec = {
      x: xv,
      y: yv,
      z: zv
    }
    let vec2 = {
      x: xi,
      y: yi,
      z: zi
    }
    tonelApi.destroyBlocks(coords, vec, vec2, true)
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
})
