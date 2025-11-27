Translation.addTranslation("Mechanic Crossbow Tower", {
    ru: "Механический арбалет"
});

IDRegistry.genBlockID("machineMechanicTowerCrossbow");
Block.createBlockWithRotation("machineMechanicTowerCrossbow", [
	{
	    name: "Mechanic Crossbow Tower", texture: [
           ["block_machine_wooden", 0], ["block_machine_wooden", 0],
           ["block_machine_wooden", 0], ["block_mechanic_crossbow", 0],
           ["block_machine_wooden", 0], ["block_machine_wooden", 0]
	    ], inCreative: true
	},
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.machineMechanicTowerCrossbow, "stone");
TileEntity.registerPrototype(BlockID.machineMechanicTowerCrossbow, {
  defaultValues: {
      progress: 0,
      active: true
  },
  getConfig() {
      return {
          time: 60
      }
  },
  click(id, count, data, coords, player) {
      let item = Entity.getCarriedItem(player);
      if(ItemType.is(item.id, "wrench"))
          this.data.active = !this.data.active;
  },
  tick() {
      if (!this.data.active) 
      	return
      Mp.spawnParticle(Native.ParticleType.redstone, this.x+Math.random(), this.y+Math.random(), this.z+Math.random(), 0, .0001);
      if (World.getThreadTime() % this.getConfig().time == 0)
      	this.MechanicDeploy();
  },
  MechanicDeploy() {
  	
  		let all = Entity.getAll();
  		for(let i in all){
  			if(Entity.getDimension(all[i])!=this.dimension)
  				return;
  			if(Network.getConnectedPlayers().indexOf(all[i]) == -1 && !FactAPI.constants.NotKill[Entity.getType(all[i])])
  				if(Entity.getDistanceToCoords(all[i], { x: this.x, y: this.y, z: this.z }) < 10){
  					let crd = Entity.getPosition(all[i]);
  					//Particles.line(Native.ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
  					Entity.damageEntity(all[i], 5);
  					return;
  				}
  		}
		
  }
});