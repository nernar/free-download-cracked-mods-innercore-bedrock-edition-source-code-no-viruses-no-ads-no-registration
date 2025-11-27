ToolType.debug = {
  isWeapon: false,
  damage: 100000,
  blockTypes: ["fibre", "plant", "stone", "dirt"],
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant) {
    return 0;
  },
  useItem: function(coords, item, block, player) {



    Game.message("block:" + block.id + ", data:" + block.data + ',side:' + coords.side+",light:"+World.getLightLevel(coords.x,coords.y,coords.z)+",rotation:"+getBlockRotation(player,false))
    

  }
}

IDRegistry.genItemID("debug");
Item.createItem("debug", "debug", {
  name: "iron_stick"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.debug, "diamond", ToolType.debug);

setinfo.setNameMod(ItemID.debug)
setinfo.addComment(ItemID.debug, "you not can get this")
