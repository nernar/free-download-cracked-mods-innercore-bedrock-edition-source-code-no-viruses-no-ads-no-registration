

ToolAPI.addToolMaterial("obsidian", {
  durability: 1360,
  level: 4,
  efficiency: 20,
  damage: 5,
  enchantability: 15,
  repairMaterial: 49
});



ToolType.ObsidianPickaxeType = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 3,
  blockTypes: ["stone"],
  useItem: function(coords, item, block, player) {
    if (RegistryOre.isOreMelter(block.id) && ToolAPI.getToolLevel(item.id) >= ToolAPI.getBlockDestroyLevel(block.id)) {
      let enchant = ToolAPI.getEnchantExtraData();
      let ore = RegistryOre.getOreMeltee(block.id)

      ToolAPI.dropOreExp(coords, ore.xp.minOut, ore.xp.maxOut, enchant.experience);
      World.drop(
        coords.x + Math.random(),
        coords.y + Math.random(),
        coords.z + Math.random(),
        ore.out,
        random(2,3) + Math.floor(Math.random() * (enchant.fortune * 1.5)),
        0
      )


      for (var i = 0; i < 8; i++) {
        Particles.addParticle(
          10,
          coords.x + Math.random(),
          coords.y + Math.random(),
          coords.z + Math.random(),
          0,
          0,
          0
        )
        Particles.addParticle(
          8,
          coords.x + Math.random(),
          coords.y + Math.random(),
          coords.z + Math.random(),
          0,
          0,
          0
        )
      }

      ToolLib.breakCarriedTool(1, player)
      World.setBlock(coords.x, coords.y, coords.z, 0, 0);
      World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.stone", 1, 0.8);

    }
  }

}


IDRegistry.genItemID("fiery_pickaxe");
Item.createItem("fiery_pickaxe", "Fiery Pickaxe", {
  name: "fiery_pickaxe"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.fiery_pickaxe, "obsidian",
  ToolType.ObsidianPickaxeType);

Item.setGlint(ItemID.fiery_pickaxe, true)
RegistryOre.RegistryPickMelter(ItemID.fiery_pickaxe)


setinfo.addComment(ItemID.fiery_pickaxe, "Ấn Vào Block Ore Gold, Iron")
setinfo.setDropIngot(ItemID.fiery_pickaxe,2,0,1)
setinfo.setConsumes(ItemID.fiery_pickaxe,1)
