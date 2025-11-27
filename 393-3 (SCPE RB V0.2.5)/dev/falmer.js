IDRegistry.genItemID("falmerWaraxe");
Item.createItem("falmerWaraxe", "Falmer war axe", {name: "falmerWaraxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.falmerWaraxe, true);
ToolAPI.addToolMaterial("falmerWaraxe", {durability: 700, level: 3, efficiency: 2, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.falmerWaraxe, "falmerWaraxe", ToolType.sword);
IDRegistry.genItemID("falmerSword");
Item.createItem("falmerSword", "Falmer sword", {name: "falmerSword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.falmerSword, true);
ToolAPI.addToolMaterial("falmerSword", {durability: 700, level: 3, efficiency: 2, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.falmerSword, "falmerSword", ToolType.sword);
ShootLib.addGun({id: "falmerBow", name: "Falmer bow", ammo: "falmerArrow", accuracy: 1, recoil: 3, rate: 1, texture: {name: "falmerBow", meta: 0}, shotType: ShotType.NORMAL, buttonType: ButtonType.TOUCH, bullet: {speed: 10, count: 1, entity: Native.EntityType.ARROW, damage: 5}, fov: {level: 5}, sounds: {shot: "BowShoot.ogg", empty: "BowGun.ogg", reload: "reload/BowReload.ogg"}});
ShootLib.addAmmo({id: "falmerArrow", name: "Falmer arrow", texture: {name: "falmerArrow", meta: 0}});

