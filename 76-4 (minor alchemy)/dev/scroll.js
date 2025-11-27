const ENC = [
  {
    name: "Protection",
    weight: 10,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Fire Protection",
    weight: 5,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Feather Falling",
    weight: 5,
    target: ["boots"],
    conflict: [2]
  },
  {
    name: "Blast Protection",
    weight: 2,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Projectile Protection",
    weight: 5,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Thorns",
    weight: 1,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [5]
  },
  {
    name: "Respiration",
    weight: 2,
    target: ["helmet"],
    conflict: [6]
  },
  {
    name: "Aqua Affinity",
    weight: 2,
    target: ["boots"],
    conflict: [7],
    nonlvl: true
  },
  {
    name: "Depth Strider",
    weight: 2,
    target: ["helmet"],
    conflict: [8]
  },
  {
    name: "Sharpness",
    weight: 10,
    target: ["sword", "axe"],
    conflict: [9, 10, 11]
  },
  {
    name: "Smite",
    weight: 5,
    target: ["sword", "axe"],
    conflict: [9, 10, 11]
  },
  {
    name: "Bane of Arthoropods",
    weight: 5,
    target: ["sword", "axe"],
    conflict: [9, 10, 11]
  },
  {
    name: "Knockback",
    weight: 5,
    target: ["sword"],
    conflict: [12]
  },
  {
    name: "Fire Aspect",
    weight: 2,
    target: ["sword"],
    conflict: [13]
  },
  {
    name: "Looting",
    weight: 2,
    target: ["sword"],
    conflict: [14]
  },
  {
    name: "Efficiency",
    weight: 10,
    target: ["shovel", "pickaxe", "axe", "shears"],
    conflict: [15]
  },
  {
    name: "Silk Touch",
    weight: 1,
    target: ["shovel", "pickaxe", "axe"],
    conflict: [16, 18],
    nonlvl: true
  },
  {
    name: "Unbreaking",
    weight: 5,
    target: ["helmet", "chestplate", "leggings", "boots", "sword", "shovel", "pickaxe", "axe", "hoe", "bow", "fishing", "shears", "carrot"],
    conflict: [17]
  },
  {
    name: "Fortune",
    weight: 2,
    target: ["shovel", "pickaxe", "axe"],
    conflict: [16, 18]
  },
  {
    name: "Power",
    weight: 10,
    target: ["bow"],
    conflict: [19]
  },
  {
    name: "Punch",
    weight: 2,
    target: ["bow"],
    conflict: [20]
  },
  {
    name: "Flame",
    weight: 2,
    target: ["bow"],
    conflict: [21],
    nonlvl: true
  },
  {
    name: "Infinity",
    weight: 1,
    target: ["bow"],
    conflict: [22],
    nonlvl: true
  },
  {
    name: "Luck of the Sea",
    weight: 2,
    target: ["fishing"],
    conflict: [23]
  },
  {
    name: "Lure",
    weight: 2,
    target: ["fishing"],
    conflict: [24]
  }
];


IDRegistry.genItemID("scrollPack");
Item.createItem("scrollPack", "Scroll Package", {name: "scrollPack"});
IDRegistry.genItemID("encScroll");
Item.createItem("encScroll", "Enchantment Scroll", {name: "encScroll"}, {isTech: true});
Recipes.addShaped({id: ItemID.scrollPack}, ["aaa", "bcb", "aaa"], ["a", 339, 0, "b", 57, 0, "c", 54, 0]);

Item.registerNameOverrideFunction(ItemID.encScroll, function(item, name){
  return name + "\n§7" + ENC[item.data].name;
});

Item.registerUseFunction("scrollPack", function(c){
  let count = 0;
  let i = 0;
  Player.decreaseCarriedItem();
  for(i = 9; i < 45; i++){
    Player.getInventorySlot(i).id || (count++);
  }
  for(i = 0; i < 25; i++){
    count-->0?
      Player.addItemToInventory(ItemID.encScroll, 1, i):
      World.drop(c.x, c.y + 1, c.z, ItemID.encScroll, 1, i);
  }
});