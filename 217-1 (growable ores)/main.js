const Reed = {

  get: {},

  speed: __config__.getNumber("GrowthSpeed"),
  length: __config__.getNumber("MaxLength"),

  flag1: false,
  flag2: false,

  register: function(id, meta, name, chance, count, base, stone){
    id = "oreg_" + id;

    IDRegistry.genBlockID(id);
    Block.createBlock(id, [{name: "", texture: [[id, meta]]}]);
    Block.setDestroyTime(id, 0);

    let render = new ICRender.CollisionShape();
    render.addEntry().addBox(1, 1, 1, 0, 0, 0);
    BlockRenderer.setCustomCollisionShape(BlockID[id], 0, render);
    render = new ICRender.Model();
    const model = BlockRenderer.createModel();
    model.addBox(0.5, 0, 0, 0.5, 1, 1, BlockID[id], 0);
    model.addBox(0, 0, 0.5, 1, 1, 0.5, BlockID[id], 0);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID[id], 0, render);

    IDRegistry.genItemID(id);
    Item.createItem(id, name + " Reed", {name: id, meta: meta});

    Item.registerUseFunction(id, function(c, item, block){
      (block.id == BlockID.oreg_block || block.id == BlockID[id]) && c.side == 1 &&
        World.setBlock(c.x, c.y+1, c.z, BlockID[id]) &
        Player.decreaseCarriedItem();
    });

    Block.registerDropFunction(id, function(){
      return [[ItemID[id], 1]];
    });

    this.get[BlockID[id]] = chance * this.speed;

    base.data || (base.data = 0);
    Callback.addCallback("PostLoaded", function(){
      Recipes.addShaped({id: base.id, data: base.data},
        {1: ["a"], 4: ["aa", "aa"], 8: ["aaa", "aoa", "aaa"]}[count], [
        "a", ItemID[id], 0
      ]);
      stone ?
        Recipes.addShaped({id: ItemID[id]},
          ["aba", "aca", "aba"], [
          "a", 338, 0,
          "b", base.id, base.data,
          "c", stone, 0
        ]) :
        Recipes.addShaped({id: ItemID[id]},
          ["aba", "aba", "aba"], [
          "a", 338, 0,
          "b", base.id, base.data,
        ]);
    });

  }

};


Callback.addCallback("DestroyBlock", function(c){
  const reed = World.getBlockID(c.x, c.y+1, c.z);
  if(reed in Reed.get){
    while(World.getBlockID(c.x, ++c.y, c.z) == reed){
      World.destroyBlock(c.x, c.y, c.z, true);
    }
  }
});

Reed.register("coal", 0, "Coal Ore", 0.1, 8, {id: 263}, 1);
Reed.register("iron", 0, "Iron Ore", 0.05, 8, {id: 265}, 1);
Reed.register("gold", 0, "Gold Ore", 0.03, 8, {id: 266}, 1);
Reed.register("red", 0, "Redstone Ore", 0.1, 1, {id: 331}, 1);
Reed.register("lapis", 0, "Lapis Lazuli Ore", 0.1, 4, {id: 351, data: 4}, 1);
Reed.register("dia", 0, "Diamond Ore", 0.01, 8, {id: 264}, 1);
Reed.register("emerald", 0, "Emerald Ore", 0.01, 8, {id: 388}, 1);
Reed.register("quartz", 0, "Nether Quartz Ore", 0.1, 4, {id: 406}, 87);
Reed.register("clay", 0, "Clay", 0.1, 1, {id: 337}, 82);
Reed.register("obsidian", 0, "Obsidian", 0.05, 4, {id: 49});
Reed.register("ender", 0, "Ender", 0.03, 8, {id: 368});
Reed.register("glow", 0, "Glowstone", 0.05, 1, {id: 348});
Reed.register("blaze", 0, "Blaze", 0.05, 8, {id: 377});

Recipes.addShaped({id: 82},
  ["aa", "aa"], [
  "a", ItemID.oreg_clay, 0
]);
Recipes.addFurnace(ItemID.oreg_clay, 336);

ModAPI.addAPICallback("ICore", function(){
  Reed.flag1 ||
    Reed.register("copper", 0, "Copper Ore", 0.05, 8, {id: ItemID.ingotCopper}, 1) &
    Reed.register("tin", 0, "Tin Ore", 0.05, 8, {id: ItemID.ingotTin}, 1);
  Reed.flag2 ||
    Reed.register("lead", 0, "Lead Ore", 0.03, 8, {id: ItemID.ingotLead}, 1) &
    Reed.register("iridium", 0, "Iridium Ore", 0.01, 8, {id: ItemID.iridiumChunk}, 1);
  Reed.register("uran", 0, "Uranium Ore", 0.03, 4, {id: ItemID.uranium238}, 1);
  Reed.flag1 = Reed.flag2 = true;
});

ModAPI.addAPICallback("ForestryAPI", function(){
  Reed.flag1 ||
    Reed.register("copper", 1, "Copper Ore", 0.05, 8, {id: ItemID.ingotCopper}, 1) &
    Reed.register("tin", 1, "Tin Ore", 0.05, 8, {id: ItemID.ingotTin}, 1);
  Reed.register("apatite", 1, "Apatite Ore", 0.1, 4, {id: ItemID.apatite}, 1);
  Reed.flag1 = true;
});

ModAPI.addAPICallback("ThermalExpansionAPI", function(){
  Reed.flag1 ||
    Reed.register("copper", 2, "Copper Ore", 0.05, 8, {id: ItemID.ingotCopper}, 1) &
    Reed.register("tin", 2, "Tin Ore", 0.05, 8, {id: ItemID.ingotTin}, 1);
  Reed.flag2 ||
    Reed.register("lead", 2, "Lead Ore", 0.03, 8, {id: ItemID.ingotLead}, 1) &
    Reed.register("iridium", 2, "Iridium Ore", 0.01, 8, {id: ItemID.ingotIridium}, 1);
  Reed.register("alumi", 2, "Aluminum Ore", 0.03, 8, {id: ItemID.ingotAluminum}, 1);
  Reed.register("nickel", 2, "Nickel Ore", 0.03, 8, {id: ItemID.ingotNickel}, 1);
  Reed.register("silver", 2, "Silver Ore", 0.03, 8, {id: ItemID.ingotSilver}, 1);
  Reed.register("platinum", 2, "Platinum Ore", 0.01, 8, {id: ItemID.ingotPlatinum}, 1);
  Reed.register("mithril", 2, "Mithril Ore", 0.01, 8, {id: ItemID.ingotMithril}, 1);
  Reed.flag1 = Reed.flag2 = true;
});


IDRegistry.genBlockID("oreg_block");
Block.createBlock("oreg_block", [{name: "Growing Block", texture: [["oreg_block", 0]], inCreative: true}]);
Block.setDestroyTime("oreg_block", 2);
ToolAPI.registerBlockMaterial(BlockID.oreg_block, "dirt");
Recipes.addShaped({id: BlockID.oreg_block, count: 8},
  ["abc", "def", "ghi"], [
  "a", 351, 15,
  "b", 263, -1,
  "c", 3, 0,
  "d", 338, 0,
  "e", 265, 0,
  "f", 331, 0,
  "g", 264, 0,
  "h", 266, 0,
  "i", 351, 4
]);

Block.setRandomTickCallback(BlockID.oreg_block, function(x, y, z){
  const reed = World.getBlockID(x, y+1, z);
  if(Math.random() < (Reed.get[reed] || 0)){
    let length = 0;
    while(World.getBlockID(x, ++y, z) == reed && ++length <= Reed.length);
    length < Reed.length && !World.getBlockID(x, y, z) &&
      World.setBlock(x, y, z, reed);
  }
});