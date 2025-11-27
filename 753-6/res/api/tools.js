var Tool = {
  crookDrop: [296, 295, 287, 288, 280],
  CrookrareDrop: [361, 362, 392, 260],
  addDropCrook(idItem, type) {
    if (type == "n" || type == "normal" || type == 1) {
      this.crookDrop.push(idItem)
    }
    if (type == "r" || type == "rare" || type == 2) {
      this.CrookrareDrop.push(idItem)
    }
  },
  getDropsCrook(type) {
    if (type == "n" || type == "normal" || type == 1) {
      return this.crookDrop
    }
    if (type == "r" || type == "rare" || type == 2) {
      return this.CrookrareDrop
    }
  }
}



ToolType.crook = {
  isWeapon: false,
  damage: 2,
  blockTypes: ["fibre", "plant"],
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant) {
    if (block.id == 18) return 0.08;
    if (block.id == 161) return 0.05;
    let material = ToolAPI.getBlockMaterialName(block.id);
    if (material == "fibre" || material == "plant") {
      return 0;
    }
    return destroyTime;
  },
  useItem: function(coords, item, block, player) {
    if (ToolAPI.getBlockMaterialName(block.id) == "plant") {
      let n = Tool.getDropsCrook("n")
      let r = Tool.getDropsCrook("r")
      let region = BlockSource.getDefaultForActor(player);
      World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.grass", 1, 0.8);
      if (Math.random() * 100 >= 80) {
        region.spawnDroppedItem(coords.x, coords.y, coords.z, r[Math.floor(Math.random() * r.length)], 1, 0);
      } else if (Math.random() * 100 >= 60) {
        region.spawnDroppedItem(coords.x, coords.y, coords.z, n[Math.floor(Math.random() * n.length)], 1, 0);
      } else if (Math.random() * 100 > 95) {
        World.destroyBlock(coords.x, coords.y, coords.z, false)
        World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.grass", 1, 0.8);
      }
      ToolLib.breakCarriedTool(1, player);
    }

  }
}

ToolType.hammer = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 3,
  blockTypes: ["stone", "dirt"],
  onDestroy: function(item, coords, block, player) {
    let radius = 1
    let x = y = z = radius

    switch (coords.side) {
      case 5:
        x = 0;
        break
      case 4:
        x = 0;
        break
      case 3:
        z = 0;
        break
      case 2:
        z = 0;
        break
      case 1:
        y = 0;
        break
      case 0:
        y = 0;
        break
    }
    for (var cx = coords.x - x; cx <= coords.x + x; cx++) {
      for (var cy = coords.y - y; cy <= coords.y + y; cy++) {
        for (var cz = coords.z - z; cz <= coords.z + z; cz++) {
          let material = ToolAPI.getBlockMaterialName(World.getBlockID(cx, cy, cz));
          if (World.getBlockID(cx, cy, cz) != 0 || World.getBlockID(cx, cy, cz) != 7) {
            if (material == "stone" || material == "dirt") {
              World.destroyBlock(cx, cy, cz, true);
            }
          }
        }
      }
    }
    ToolLib.breakCarriedTool(1, player);

  }
}