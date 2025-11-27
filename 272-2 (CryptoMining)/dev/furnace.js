let RenderData = {};

const regFurnace=function(id, name, speed){
  id = id+"_furnace";
  name = name+" Furnace";

  IDRegistry.genBlockID(id);
  Block.createBlockWithRotation(id, [{name: name, texture: [[id, 0], [id, 0], [id, 0], [id, 1], [id, 0], [id, 0]], inCreative:  true}]);
  ToolAPI.registerBlockMaterial(BlockID[id], "stone");
  Block.setDestroyTime(BlockID[id], 5);

  RenderData[BlockID[id]] = [];
  let render1, render2;
  const tex1 = [
    [[id, 0], [id, 0], [id, 0], [id, 1], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 1], [id, 0], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 0], [id, 1]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 1], [id, 0]]
  ];
  const tex2 = [
    [[id, 0], [id, 0], [id, 0], [id, 2], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 2], [id, 0], [id, 0], [id, 0]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 0], [id, 2]],
    [[id, 0], [id, 0], [id, 0], [id, 0], [id, 2], [id, 0]]
  ];
  for(let i = 0; i < 4; i++){
    render1 = new ICRender.Model();
    render1.addEntry(BlockRenderer.createTexturedBlock(tex1[i]));
    BlockRenderer.enableCoordMapping(BlockID[id], i, render1);
    render2 = new ICRender.Model();
    render2.addEntry(BlockRenderer.createTexturedBlock(tex2[i]));
    RenderData[BlockID[id]].push(render2);
  }

  TileEntity.registerPrototype(BlockID[id], {
    getGuiScreen: function(){
      return new UI.StandartWindow({
        standart: {
          header: {text: {text: name}},
          inventory: {standart: true},
          background: {standart: true}
        },
        drawing: [
          {type: "bitmap", x: 492, y: 137, bitmap: "burn_0", scale: 3.2},
          {type: "bitmap", x: 555, y: 135, bitmap: "prog_0", scale: 3.2},
          {type: "bitmap", x: 2000, y: 200, bitmap: "lava_0", scale: 3.2}
        ],
        elements: {
          "scaleBurn": {type: "scale", x: 490, y: 135, direction: 1, value: 0, bitmap: "burn_1", scale: 3.2},
          "scaleProg": {type: "scale", x: 555, y: 135, value: 0, bitmap: "prog_1", scale: 3.2},
          "scaleLava": {type: "scale", x: 2000, y: 200, direction: 1, value: 0, bitmap: "lava_1", scale: 3.2},
          "slotUpgrade0": {type: "slot", x: 340, y: 60},
          "slotUpgrade1": {type: "slot", x: 340, y: 120},
          "slotUpgrade2": {type: "slot", x: 340, y: 180},
          "slotSource1": {type: "slot", x: 480, y: 60},
          "slotFuel1": {type: "slot", x: 480, y: 200},
          "slotResult1": {type: "slot", x: 640, y: 130},
          "slotSource2": {type: "slot", x: 2000, y: 60},
          "slotFuel2": {type: "slot", x: 2000, y: 200},
          "slotResult2": {type: "slot", x: 2000, y: 130}
        }
      });
    },
    defaultValues: {
      max: 0,
      burn: 0,
      progress: 0
    },
    init: function(){
      this.liquidStorage.setLimit("lava", 4);
    },
    addTransportedItem: function(self, item){
      let add = 0;
      const n = this.getUpg(ID("storage"))?2:1;
      const s = this.container.getSlot("slotSource"+n);
      const f = this.container.getSlot("slotFuel"+n);
      if(Recipes.getFuelBurnDuration(item.id, item.data)){
        if(this.checkUp(f, item)){
          add = Math.min(item.count, 64-f.count);
          f.id = item.id;
          f.data = item.data;
          f.count += add;
          item.count -= add;
          if(!item.count)return;
        }
      }
      else if(this.checkUp(s, item)){
        add = Math.min(item.count, 64-s.count);
        s.id = item.id;
        s.data = item.data;
        s.count += add;
        item.count -= add;
        if(!item.count)return;
      }
    },
    getTransportSlots: function(){
      return{
        input: ["slotSource1", "slotSource2", "slotFuel1", "slotFuel2"],
        output: ["slotResult1", "slotResult2"]
      };
    },
    checkUp: function(s1, s2, double){
      double = double?2:1;
      return !s1.id||s1.id==s2.id&&s1.data==s2.data&&s1.count<=64-double;
    },
    shiftItem: function(s1, s2){
      s2.count && this.checkUp(s1, s2) &&
        (s1.id = s2.id, s1.data = s2.data, s1.count++, s2.count--)&
        this.container.validateSlot("slotSource2")&
        this.container.validateSlot("slotFuel2")&
        this.container.validateSlot("slotResult1");
    },
    dumpItem: function(s){
      s.count &&
        World.drop(this.x+.5, this.y+.5, this.z+.5, s.id, s.count, s.data)&
        (s.id = s.count = s.data = 0);
    },
    getUpg: function(id){
      let slot;
      for(let i = 3; i--;){
        slot = this.container.getSlot("slotUpgrade"+i);
        if(slot.id == id){
          return slot;
          break;
        }
      }
    },
    activate: function(){
      const block = World.getBlock(this.x, this.y, this.z);
      BlockRenderer.mapAtCoords(this.x, this.y, this.z, RenderData[block.id][block.data]);
    },
    tick: function(){
      const scare = this.data.burn/this.data.max;
      this.container.setScale("scaleBurn", isNaN(scare)?0:scare);
      this.container.setScale("scaleLava", this.liquidStorage.getAmount("lava")/4);
      this.container.setScale("scaleProg", this.data.progress);
      const s1 = this.container.getSlot("slotSource1");
      const f1 = this.container.getSlot("slotFuel1");
      const r1 = this.container.getSlot("slotResult1");
      const s2 = this.container.getSlot("slotSource2");
      const f2 = this.container.getSlot("slotFuel2");
      const r2 = this.container.getSlot("slotResult2");
      const rec = Recipes.getFurnaceRecipeResult(s1.id);

      const content = this.container.getGuiContent();
      const storage = this.getUpg(ID("storage"));
      const liquid = this.getUpg(ID("liquid"));
      if(content){
        content.elements.slotSource2.x = content.elements.slotFuel2.x = storage?420:2000;
        content.elements.slotResult2.x = storage?700:2000;
        content.drawing[4].x = content.elements.scaleLava.x = liquid?555:2000;
      }

      storage?
        this.shiftItem(s1, s2)&this.shiftItem(f1, f2)&this.shiftItem(r2, r1):
        this.dumpItem(s2)&this.dumpItem(f2)&this.dumpItem(r2);

      let empty;
      if(liquid){
        if(LiquidRegistry.getItemLiquid(f1.id, f1.data) == "lava" && this.liquidStorage.getAmount("lava") <= 3){
          empty=LiquidRegistry.getEmptyItem(f1.id, f1.data);
          this.liquidStorage.addLiquid("lava", 1);
          f1.id = empty.id;
          f1.data = empty.data;
        }
      }
      else this.liquidStorage.setAmount("lava", 0);

      if(this.data.burn > 0)this.data.burn -= speed;
      else{
        if(this.data.max){
          this.data.max = 0;
          BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        }
        if(rec){
          const fuel = this.getUpg(ID("fuel"));
          const fuel1 = this.getUpg(ID("fuel1"));
          if(this.liquidStorage.getAmount("lava")){
            this.liquidStorage.getLiquid("lava", .01);
            this.data.burn = this.data.max = fuel||fuel1?400:200;
            this.activate();
            fuel && ++fuel.data == 128 && (fuel.id = fuel.data = fuel.count = 0);
          }
          else{
            let time = Recipes.getFuelBurnDuration(f1.id, f1.data);
            if(time){
              if(LiquidRegistry.getItemLiquid(f1.id, f1.data) == "lava" && f1.count == 1){
                empty = LiquidRegistry.getEmptyItem(f1.id, f1.data);
                f1.id = empty.id;
                f1.data = empty.data;
              }
              else f1.count--;
              this.container.validateSlot("slotFuel1");
              if(fuel || fuel1){
                time *= 2;
                fuel && ++fuel.data == 128 && (fuel.id = fuel.data = fuel.count = 0);
              }
              this.data.burn = this.data.max = time;
              this.activate();
            }
            else this.data.burn = this.data.max = 0;
          }
        }
      }

      if(this.data.burn && rec){
        const ore = this.getUpg(ID("ore"));
        const ore1 = this.getUpg(ID("ore1"));
        const oreCheck = ORE.indexOf(s1.id) != -1 && (ore||ore1);
        if(this.checkUp(r1, rec, oreCheck)){
          this.data.progress += speed/200;
          if(this.data.progress >= 1){
            this.data.progress = 0;
            r1.id = rec.id;
            r1.data = rec.data;
            r1.count++;
            if(oreCheck){
              r1.count++;
              ore && ++ore.data == 512 && (ore.id = ore.data = ore.count = 0);
            }
            s1.count--;
            this.container.validateSlot("slotSource1");
          }
        }
      }
      else this.data.progress = 0;

    }
  });

};

regFurnace("bitcoin", "Bitcoin", 34);
regFurnace("wondercoin", "Wondercoin", 23);
regFurnace("ethereum", "Ethereum", 28);
regFurnace("arkcoin", "Arkcoin", 25);
regFurnace("cosmocash", "Cosmocash", 22);
regFurnace("augur", "Augur", 20);
regFurnace("lisk", "Lisk", 19);
regFurnace("firecoin", "Firecoin", 17);
regFurnace("zerocash", "Zerocash", 15);
regFurnace("dashcoin", "Dashcoin", 14);
regFurnace("monero", "Monero", 12);
regFurnace("ripple", "Ripple", 11);
regFurnace("windcoin", "Windcoin", 7);
regFurnace("litecoin", "Litecoin", 4);
regFurnace("dogecoin", "Dogecoin", 3);
regFurnace("peercoin", "Peercoin", 1);
regFurnace("concoin", "Concoin", 26);
regFurnace("buzcoin", "Buzcoin", 2);
regFurnace("mooncoin", "Mooncoin", 42);
regFurnace("marscoin", "Marscoin", 54);


const ORE = [
  14, 
  15, 
  16,
  56,
  129,
  BlockID.bitcoin,
  BlockID.ethereum,
  BlockID.concoin,
  BlockID.arkcoin,
  BlockID.wondercoin,
  BlockID.cosmocash,
  BlockID.augur,
  BlockID.lisk,
  BlockID.firecoin,
  BlockID.zerocash,
  BlockID.dashcoin,
  BlockID.monero,
  BlockID.ripple,
  BlockID.windcoin,
  BlockID.litecoin,
  BlockID.dogecoin,
  BlockID.buzcoin,
  BlockID.peercoin,
  BlockID.mooncoin,
  BlockID.marscoin,
  BlockID.oreCopper, 
  BlockID.oreTin, 
  BlockID.oreLead, 
  BlockID.oreAluminum, 
  BlockID.oreNickel, 
  BlockID.orePlatinum, 
  BlockID.oreIridium, 
  BlockID.oreMithril, 
  BlockID.orecoppere, 
  BlockID.draconiumOre, 
  BlockID.draconiumOreNether, 
  BlockID.draconiumOreEnd
];

const regItem = function(tex, name, meta){
  tex = "crypto_"+tex;
  const id = tex+(meta||"");
  IDRegistry.genItemID(id);
  Item.createItem(id, name+" Upgrade", {name: tex, meta: meta}, {stack: 1});
};

const ID = function(str){
  str = "crypto_"+str;
  return ItemID[str] || BlockID[str];
};

regItem("fuel", "Fuel Efficiency");
regItem("fuel", "Advanced Fuel Efficiency", 1);
regItem("ore", "Ore Processing");
regItem("ore", "Advanced Ore Processing", 1);
regItem("storage", "Storage");
regItem("liquid", "Liquid");

Item.setMaxDamage(ID("fuel"), 128);
Item.setMaxDamage(ID("ore"), 512);

Recipes.addShaped({id: ID("fuel")}, ["aba", "bcb", "aba"], ["a", 22, 0, "b", 368, 0, "c", 263, 0]);
Recipes.addShaped({id: ID("fuel1")}, ["aba", "cdc", "aca"], ["a", 264, 0, "b", 370, 0, "c", 381, 0, "d", ID("fuel"), 0]);
Recipes.addShaped({id: ID("ore")}, ["aaa", "aba", "aca"], ["a", 1, 0, "b", 318, 0, "c", 33, -1]);
Recipes.addShaped({id: ID("ore1")}, ["aba", "cdc", "aba"], ["a", 264, 0, "b", 33, -1, "c", 49, 0, "d", ID("ore"), 0]);
Recipes.addShaped({id: ID("liquid")}, ["aoa", "bcb", "aba"], ["a", 265, 0, "b", 20, 0, "c", 325, 0]);
Recipes.addShaped({id: ID("storage")}, ["aba", "bcb", "aba"], ["a", 1, 0, "b", 20, 0, "c", 54, 0]);
    
Recipes.addShaped({id:BlockID.bitcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.bitcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.wondercoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.wondercoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.ethereum_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.ethereum,0,'b',61,0]);
Recipes.addShaped({id:BlockID.arkcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.arkcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.cosmocash_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.cosmocash,0,'b',61,0]);
Recipes.addShaped({id:BlockID.augur_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.augur,0,'b',61,0]);
Recipes.addShaped({id:BlockID.lisk_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.lisk,0,'b',61,0]);
Recipes.addShaped({id:BlockID.firecoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.firecoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.zerocash_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.zerocash,0,'b',61,0]);
Recipes.addShaped({id:BlockID.dashcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.dashcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.monero_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.monero,0,'b',61,0]);
Recipes.addShaped({id:BlockID.ripple_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.ripple,0,'b',61,0]);
Recipes.addShaped({id:BlockID.windcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.windcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.litecoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.litecoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.dogecoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.dogecoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.peercoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.peercoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.concoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.concoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.buzcoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.buzcoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.mooncoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.mooncoin,0,'b',61,0]);
Recipes.addShaped({id:BlockID.marscoin_furnace,count:1,data:0},["aaa","aba","aaa"],['a',ItemID.marscoin,0,'b',61,0]);
