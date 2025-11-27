IDRegistry.genItemID("swiftWolfRendingGale");
Item.createItem("swiftWolfRendingGale", "Swift Wolf's Rending Gale", {name: "swiftWolfRendingGale", meta: 0}, {stack: 1});

SetDescription(ItemID.swiftWolfRendingGale, "§3On pedestal: shoots ligthning into nearest hostle creature every 1 sec.");

Rings.addPedestalFunction(ItemID.swiftWolfRendingGale, function(tile){
  if(World.getThreadTime()%15 == 0){
    for(i in evilList){
      let entity = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, evilList[i], 20);
      if(entity){
        let crd = Entity.getPosition(entity);
        Entity.spawn(crd.x, crd.y, crd.z, 93);
      }
    }
  }
});