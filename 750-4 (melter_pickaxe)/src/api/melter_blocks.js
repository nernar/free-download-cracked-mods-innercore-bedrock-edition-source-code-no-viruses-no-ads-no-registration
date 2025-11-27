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
    maxOut: 2
  }
})

