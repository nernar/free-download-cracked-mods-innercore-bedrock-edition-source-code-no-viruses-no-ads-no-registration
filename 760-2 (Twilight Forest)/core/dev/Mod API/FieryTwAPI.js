const MOD_NAME = " Twilight Forest"
let _inventory_open = false
// API
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fuctions
Callback.addCallback('NativeGuiChanged', function(screenName) {
  if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
    _inventory_open = true;
  else
    _inventory_open = false;
});

const setinfo = {
  setNameMod: function(id) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + MOD_NAME;
        return name;
      })
    });
  },
  addComment: function(id, info) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + Native.Color.AQUA + Translation.translate(info);
        return name;
      })
    });
  },
  setDropIngot: function(id,number,MinExtra,MaxExtra){
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" +Native.Color.GREEN +Translation.translate("Số Lượng Rơi:") + ' ' + number + "\n§9" + Native.Color.AQUA + Translation.translate("Thả thêm ngẫu nhiên:")  + ' ' +MinExtra + "-" + MaxExtra;
        return name;
      })
    });
  },
  setConsumes: function(id, number) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + Native.Color.RED + Translation.translate("Tiêu thụ cho sự nóng chảy") + ' ' + number + Translation.translate("uses")
        return name;
      })
    });
  }
}
//core
let RegistryOre = {
  Ores: {},
  pick: {},
  /*
  params is blockId dropItem hasXP
  example
  RegistryOre.RegistryOreMelter(BlockID.randomOre,{
    id: BlockID.randomOre,
    out: ItemID.cooky,
    xp:{
      hasXp: true,
      minOut: 1,
      maxOut: 5
    }
  })
  */
  RegistryOreMelter: function(id, params) {
    this.Ores[id] = params
  },
  getAllOreMelter: function() {
    return this.Ores
  },
  getOreMeltee: function(id) {
    return this.Ores[id]
  },
  isOreMelter: function(id) {
    let oreMelter = this.getAllOreMelter()
    for (let block in oreMelter) {
      if (block == id) return true
    }
    return false
  },
  RegistryPickMelter: function(id){
    this.pick[id] = id
  },
  getAllPickMelter: function(){
    return this.pick
  },
  isPickMelter: function(id){
    let melter = this.getAllOreMelter();
    for(pick in melter){
      if(pick == id) return true
    }
    return false
  }
}

RegistryOre.RegistryOreMelter(14, {
  id: 14,
  out: 266,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})

RegistryOre.RegistryOreMelter(15, {
  id: 15,
  out: 265,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})


RegistryOre.RegistryOreMelter(16, {
  id: 16,
  out: 253,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})

RegistryOre.RegistryOreMelter(56, {
  id: 56,
  out: 264,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})







