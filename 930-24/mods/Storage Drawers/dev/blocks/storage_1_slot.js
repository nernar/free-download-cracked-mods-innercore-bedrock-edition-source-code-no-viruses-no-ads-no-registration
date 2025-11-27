let BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 4,
	sound: "wood"
});

Translation.addTranslation("Oak Drawers 1x1", {
	ru: "Основной Ящик 1x1"
});
Translation.addTranslation("Oak Drawers 1x2", {
	ru: "Основной Ящик 1x2"
});
Translation.addTranslation("Oak Drawers 2x2", {
	ru: "Основной Ящик 2x2"
});

IDRegistry.genBlockID("oakDrawer");
Block.createBlockWithRotation("oakDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer");
Block.createBlockWithRotation("brichDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer");
Block.createBlockWithRotation("acaciaDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer");
Block.createBlockWithRotation("bigDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer");
Block.createBlockWithRotation("spruceDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer");
Block.createBlockWithRotation("jungleDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer, ModelType.full);
DrawerAPI.register(BlockID.oakDrawer, 2048);

DrawerAPI.setModel(BlockID.brichDrawer, ModelType.full);
DrawerAPI.register(BlockID.brichDrawer, 2048);

DrawerAPI.setModel(BlockID.acaciaDrawer, ModelType.full);
DrawerAPI.register(BlockID.acaciaDrawer, 2048);

DrawerAPI.setModel(BlockID.bigDrawer, ModelType.full);
DrawerAPI.register(BlockID.bigDrawer, 2048);

DrawerAPI.setModel(BlockID.spruceDrawer, ModelType.full);
DrawerAPI.register(BlockID.spruceDrawer, 2048);

DrawerAPI.setModel(BlockID.jungleDrawer, ModelType.full);
DrawerAPI.register(BlockID.jungleDrawer, 2048);

IDRegistry.genBlockID("oakDrawer_helf");
Block.createBlockWithRotation("oakDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer_helf");
Block.createBlockWithRotation("brichDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer_helf");
Block.createBlockWithRotation("acaciaDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer_helf");
Block.createBlockWithRotation("bigDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer_helf");
Block.createBlockWithRotation("spruceDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer_helf");
Block.createBlockWithRotation("jungleDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);


DrawerAPI.setModel(BlockID.oakDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.oakDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.brichDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.brichDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.acaciaDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.acaciaDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.bigDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.bigDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.spruceDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.spruceDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.jungleDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.jungleDrawer_helf, 1024, StorageType.slot_helf_1);

IDRegistry.genBlockID("oakDrawer1x2");
Block.createBlockWithRotation("oakDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 2], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer1x2");
Block.createBlockWithRotation("brichDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 2], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer1x2");
Block.createBlockWithRotation("acaciaDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 2], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer1x2");
Block.createBlockWithRotation("bigDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 2], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer1x2");
Block.createBlockWithRotation("spruceDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 2], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer1x2");
Block.createBlockWithRotation("jungleDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 2], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.oakDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.brichDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.brichDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.acaciaDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.acaciaDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.bigDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.bigDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.spruceDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.spruceDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.jungleDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.jungleDrawer1x2, 1024, StorageType.slot_2);

IDRegistry.genBlockID("oakDrawer1x2_helf");
Block.createBlockWithRotation("oakDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 2], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer1x2_helf");
Block.createBlockWithRotation("brichDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 2], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer1x2_helf");
Block.createBlockWithRotation("acaciaDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 2], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer1x2_helf");
Block.createBlockWithRotation("bigDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 2], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer1x2_helf");
Block.createBlockWithRotation("spruceDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 2], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer1x2_helf");
Block.createBlockWithRotation("jungleDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 2], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.oakDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.brichDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.brichDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.acaciaDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.acaciaDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.bigDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.bigDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.spruceDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.spruceDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.jungleDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.jungleDrawer1x2_helf, 1024, StorageType.slot_helf_2);

IDRegistry.genBlockID("oakDrawer2x2");
Block.createBlockWithRotation("oakDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 4], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer2x2");
Block.createBlockWithRotation("brichDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 4], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer2x2");
Block.createBlockWithRotation("acaciaDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 4], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer2x2");
Block.createBlockWithRotation("bigDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 4], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer2x2");
Block.createBlockWithRotation("spruceDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 4], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer2x2");
Block.createBlockWithRotation("jungleDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 4], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.oakDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.brichDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.brichDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.acaciaDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.acaciaDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.bigDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.bigDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.spruceDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.spruceDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.jungleDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.jungleDrawer2x2, 512, StorageType.slot_4);

IDRegistry.genBlockID("oakDrawer2x2_helf");
Block.createBlockWithRotation("oakDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 4], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer2x2_helf");
Block.createBlockWithRotation("brichDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 4], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer2x2_helf");
Block.createBlockWithRotation("acaciaDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 4], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer2x2_helf");
Block.createBlockWithRotation("bigDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 4], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer2x2_helf");
Block.createBlockWithRotation("spruceDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 4], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer2x2_helf");
Block.createBlockWithRotation("jungleDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 4], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.oakDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.brichDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.brichDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.acaciaDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.acaciaDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.bigDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.bigDrawer2x2_helf, 512, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.spruceDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.spruceDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.jungleDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.jungleDrawer2x2_helf, 128, StorageType.slot_helf_4);

Item.addCreativeGroup("drawer", "Drawer", DrawerAPI.drawers);
