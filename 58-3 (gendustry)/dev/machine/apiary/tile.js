IDRegistry.genBlockID("indApiary");
Block.createBlock("indApiary", [{name: "Industrial Apiary", texture: [["indApiary", 1], ["indApiary", 0], ["indApiary", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.indApiary, "stone");
ICRender.getGroup("rf-wire").add(BlockID.indApiary, -1); 

TileEntity.registerPrototype(BlockID.indApiary,{
  getGuiScreen: function(){
    return apiaryGUI;
  },
  defaultValues: {
    energy: 0,
    progress: 0,
    progressMax: 0,
    progressCycle: 0
  },
  OUTPUT: ["slotProduct0", "slotProduct1", "slotProduct2", "slotProduct3", "slotProduct4", "slotProduct5", "slotProduct6", "slotProduct7", "slotProduct8"],
  getTransportSlots: function(){
    return {
      input: ["slot2"],
      output: this.OUTPUT
    };
  },
  tick: function(){
    const x = this.x;
    const y = this.y;
    const z = this.z;
    const s1 = this.container.getSlot("slot1");
    const s2 = this.container.getSlot("slot2");
    const upg = {};
    let energy = 20;
    let slotUpg, min4, min8;
    for(let i = 4; i--;){
      slotUpg = this.container.getSlot("slotUpg" + i);
      min4 = Math.min(slotUpg.count, 4);
      min8 = Math.min(slotUpg.count, 8);
      switch(slotUpg.id){
        case ItemID.upgLight:
          upg.light = true;
          energy *= 1.05;
          break;
        case ItemID.upgFlower:
          upg.flower = min8;
          for(let j = min8; j--;)energy *= 1.1;
          break;
        case ItemID.upgAuto:
          upg.auto = true;
          energy *= 1.1;
          break;
        case ItemID.upgSeal:
          upg.seal = true;
          energy *= 1.05;
          break;
        case ItemID.upgLife:
          upg.life = min4;
          for(let j = min4; j--;)energy *= 1.05;
          break;
        case ItemID.upgSky:
          upg.sky = true;
          energy *= 1.05;
          break;
        case ItemID.upgTerritory:
          upg.territory = min4;
          for(let j = min4; j--;)energy *= 1.05;
          break;
        case ItemID.upgSieve:
          upg.sieve = true;
          energy *= 1.25;
          break;
        case ItemID.upgProduct:
          upg.product = min8;
          for(let j = min8; j--;)energy *= 1.2;
          break;
        case ItemID.upgGen:
          upg.gen = true;
          energy *= 2;
          break;
        case ItemID.upgPollen:
          upg.pollen = true;
          energy *= 1.3;
          break;
        case ItemID.upgDry:
          upg.humidity = -min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgHumidify:
          upg.humidity = min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgHeat:
          upg.temp = min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgCool:
          upg.temp = -min8;
          for(let j = min8; j--;)energy *= 1.25;
          break;
        case ItemID.upgHell:
          upg.biome = 8;
          energy *= 1.5;
          break;
        case ItemID.upgPlain:
          upg.biome = 1;
          energy *= 1.2;
          break;
        case ItemID.upgJungle:
          upg.biome = 21;
          energy *= 1.2;
          break;
        case ItemID.upgDesert:
          upg.biome = 2;
          energy *= 1.2;
          break;
        case ItemID.upgWinter:
          upg.biome = 5;
          energy *= 1.2;
          break;
        case ItemID.upgOcean:
          upg.biome = 0;
          energy *= 1.2;
          break;
      }
    }
    this.data.biome_override = "biome" in upg?upg.biome:World.getBiome(this.x, this.z);
    energy = energy|0;

    this.house || (this.house = new FAPI.BeeHouse(this, {
      slotPrincess: "slot1",
      slotDrone: "slot2",
      produceSlots: this.OUTPUT,
      slotPrincessOut: this.OUTPUT,
      slotDronesOut: this.OUTPUT
    }, new FAPI.ModifierList([])));

    this.house.getHumidity = function(){
      let value = FAPI.BiomeHelper.getBiomeHumidity(this.data.biome_override);
      for(let i = upg.humidity<0?-upg.humidity:upg.humidity; i--;)value *= upg.humidity<0?0.75:1.25;
      return value|0;
    };
    this.house.getClimate = function(){
      let value = FAPI.BiomeHelper.getBiomeClimate(this.data.biome_override);
      for(let i = upg.temp<0?-upg.temp:upg.temp; i--;)value *= upg.temp<0?0.75:1.25;
      return value|0;
    };

    this.data.energy >= energy &&
      (this.data.energy -= energy)&
      this.house.tick(new FAPI.ModifierList([{
        getProductionModifier: function(){
          if(upg.pollen)return 0;
          let value = 0.5;
          for(let i = upg.product; i--;)value *= 1.2;
          return value;
        },
        getGeneticDecay: function(){
          return upg.gen?0:1;
        },
        getLifespanModifier: function(){
          let value = 1;
          for(let i = upg.life; i--;)value *= 2/3;
          return value;
        },
        isSealed: function(){
          return upg.seal;
        },
        isSelfLighted: function(){
          return (World.getLightLevel(x, y, z) >= 12 || upg.light) && (World.canSeeSky(x, y, z) || upg.sky);
        }
      }]));

    if(upg.auto && World.getThreadTime()%128 == 0){
      let slot;
      for(let i = 9; i--;){
        slot = this.container.getSlot("slotProduct" + i);
        switch(FAPI.BeeRegistry.getBeeTypeByID(slot.id)){
          case 0:
            !s1.id && (
              s1.id = slot.id,
              s1.data = slot.data,
              s1.count = 1,
              slot.id = slot.data = slot.count = 0
            );
            break;
          case 1:
            (!s2.id || s2.id == slot.id && s2.data == slot.data && s2.count+slot.count <= 64) && (
              s2.id = slot.id,
              s2.data = slot.data,
              s2.count += slot.count,
              slot.id = slot.data = slot.count = 0
            );
            break;
        }
      }
    }

    this.container.validateAll();
    this.container.getGuiContent() &&
      this.container.setScale("energy", this.data.energy / 10000) &
      this.container.setScale("progress", this.data.progress / this.data.progressMax) &
      this.container.setText("text1", "Climate: " + this.house.getClimate() + "  Humidity: " + this.house.getHumidity()) &
      this.container.setText("text2", this.house.error || "");
  },
  energyTick: function(type, src){
    this.data.energy += src.get(10000 - this.data.energy);
  }
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.indApiary, RF);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.indApiary},
    ["aba", "aca", "ded"], [
    "a", 20, 0,
    "b", ItemID.beeReceptacle, 0,
    "c", ItemID.sturdyMachine, 0,
    "d", ItemID.gearBronze, 0,
    "e", 33, -1
  ]);
});