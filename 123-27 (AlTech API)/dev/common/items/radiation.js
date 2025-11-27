ModifierAPI.reg("radiation", {
	destroy: function(){
		//alert("destroy")
		Custom_StopSoundFile("geiger.wav")
	},
    tick: function(){
    	if(this.data.stack <= 0){
    	    ModifierAPI.remove(this.entity, this.name)
            if(this) this.destroy()
        }
    	let stack = this.data.stack
        let entity = this.data.entity
        if(stack >= 5){ if(World.getWorldTime() % 69 * 20 == 0){ Custom_PlaySoundFile("geiger.wav") }}else Custom_StopSoundFile("geiger.wav")
        if(stack < 10 && World.getWorldTime() % 280 == 0){ 
             if(rollPercentage(40))  Entity.addEffect(entity, 2, 0, 10 * 20)
             if(rollPercentage(40))  Entity.addEffect(entity, 4, 0, 10 * 20)
             if(rollPercentage(40)) Entity.addEffect(entity, 18, 0, 10 * 20)
             if(rollPercentage(40)) Entity.addEffect(entity, 17, 0, 10 * 20)
             if(rollPercentage(25)) Entity.addEffect(entity, 9, 1, 8 * 20)
             if(rollPercentage(25)) Entity.addEffect(entity, 15, 1, 2 * 20)
        }
        if(stack >= 10){
        	let coeff = stack / 10
        	if(World.getWorldTime() % 300 == 0 && rollPercentage(coeff * 40)) Entity.addEffect(entity, 2, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff * 2)) * 20) //slow
            if(World.getWorldTime() % 310 == 0 && rollPercentage(coeff * 40)) Entity.addEffect(entity, 4, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff * 2)) * 20) //ystalost
            if(World.getWorldTime() % 320 == 0 && rollPercentage(coeff * 40)) Entity.addEffect(entity, 18, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff * 2)) * 20) //slabost
            if(World.getWorldTime() % 110 == 0 && rollPercentage(coeff * 10)) Entity.setHealth(entity, Math.round(Entity.getHealth(entity) - Entity.getMaxHealth(entity) * 0.1 * coeff)) //damage
            if(World.getWorldTime() % 330 == 0 && rollPercentage(coeff * 25)) Entity.addEffect(entity, 9, 1, (8 + Math.round(coeff * 2)) * 20) //toshnota
            if(World.getWorldTime() % 120 == 0 && rollPercentage(coeff * 25)) Entity.addEffect(entity, 15, 1, 3 * 20) //slepota
            if(World.getWorldTime() % 240 == 0 && rollPercentage(coeff * 20)) Entity.addEffect(entity, 17, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff)) * 20) //hunger
            if(World.getWorldTime() % 150 == 0 && rollPercentage(coeff * 20)) Entity.addEffect(entity, 19, 0 + Math.round(coeff * 0.25), (6 + Math.round(coeff)) * 20) //poison
        }
        
        this.data.isWane++
        if(this.data.isWane >= 100) this.data.stack = this.data.stack-=0.01
        //if(World.getWorldTime()%20==0) Debug.message("Stack :" + this.data.stack)
    }
})

let A = ATMat
const Radiation = {
	items: [],
	blocks: [],
	armor: {
		hazmat: {
            set: [
		        ItemID.hazmatHelmet,
		        ItemID.hazmatChestplate,
		        ItemID.hazmatLeggings,
		        ItemID.rubberBoots],
		    resistange: 100
		},
		nano: {
            set: [
		        ItemID.nanoHelmet,
		        ItemID.nanoChestplate,
		        ItemID.nanoLeggings,
		        ItemID.nanoBoots],
		    resistange: 100
		},
		quantium: {
			set: [
			    ItemID.quantumHelmet,
		        ItemID.quantumChestplate,
		        ItemID.quantumLeggings,
		        ItemID.quantumBoots],
		    resistange: 100
		},
		lead: {
			set: [
			    ItemID.leadHelmet,
		        ItemID.leadChestplate,
		        ItemID.leadLeggings,
		        ItemID.leadBoots],
		    resistange: 50
		}
	},
	inventory: {},
	world: {},
	
	createItemsBase: function(){
		let base = A.createBase()
		for(var k1 in base){
			for(var k2 in base[k1]){
				let obj = base[k1][k2]
				//alert(k1 + ", " + obj.mat)
				if(k1 != 14 && k1 != 15 && k1 != 29 && A.materials[obj.mat].rad) this.items[obj.id] = {id: obj.id, c: obj.c || 1, rad: A.materials[obj.mat].rad}
			}
		}
		for(var k1 in A.tools){
			for(var k2 in A.tools[k1]){
				let obj = A.tools[k1][k2]
				if(A.materials[k1].rad) this.items[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[k1].rad}
			}
		}
		for(var keys in A.ores){
			let obj = A.ores[keys]
			if(A.materials[obj.type].rad) this.items[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.type].rad}
		}
	},
	
	createBlocksBase: function(){
		for(var keys in A.ores){
			let obj = A.ores[keys]
			if(A.materials[obj.type].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.type].rad}
		}
		for(var keys in A.blocks){
			let obj = A.blocks[keys]
			if(A.materials[obj.mat].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.mat].rad}
		}
		for(var keys in A.machineBlocks){
			let obj = A.machineBlocks[keys]
			if(A.materials[obj.mat].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.mat].rad}
		}
		for(var keys in A.smallOres){
			let obj = A.smallOres[keys]
			if(A.materials[obj.mat].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.mat].rad}
		}
	},
	
	resistange: function(){
		let resistange = 1
		for(var keys in this.armor){
			let base = this.armor[keys]
			for(var i = 0; i < 4; i++){
				//alert(base.set[i])
			    if(Player.getArmorSlot(i).id == base.set[i]){
				    //alert(base.set[i] + ", " + base.resistange / 100 * percents[i])
				    resistange -= base.resistange / 100 * 0.25
				}
			}
		}
		//alert(resistange)
		return resistange
	},
	
	checkInventory: function(){
		//this.inventory = []
		//Debug.message("check")
		if(this.i < 45){
			//Debug.message(this.i +", " + Player.getInventorySlot(this.i).id)
			if(!this.inventory[this.i]){
			        let item = Player.getInventorySlot(this.i)
			        let base = this.items[item.id]
			        if(base) this.inventory[this.i] = {key: item.id, count: item.count}
			}
			this.i++
			//alert(this.i)
		}else this.i = 9;
	},
	
	checkBlocks: function(){
		/*this.x = -this.r; if(this.x < this.r){
            this.y = -this.r; if(this.y < this.r){
                 this.z = -this.r; if(this.z < this.r){
                    if((this.x * this.x) + (this.y * this.y) + (this.z * this.z) <= (this.r * this.r)){
                    	for(var keys in 
                    	if(World.getBlockID(Player.getPosition().x + this.x, Player.getPosition().y + this.y, Player.getPosition().z + this.z)*/
        let r = 5
        for(var x = -r; x < r; x++){
            for(var y = -r; y < r; y++) {
                for(var z = -r; z < r; z++){
                    if((x * x) + (y * y) + (z * z) <= (r * r)){
                    	let sx = Player.getPosition().x + x
                        let sy = Player.getPosition().y + y
                        let sz = Player.getPosition().z + z
                    	if(!this.world[sx + "$" + sy + "$" + sz]){
                    	    let id = World.getBlockID(sx, sy, sz)
                    	    let base = this.blocks[id]
                            if(base) this.world[sx + "$" + sy + "$" + sz] = {key: id, coords: {x: sx, y: sy, z: sz}, dimension: Player.getDimension()} 
                        }
                    }
                }
            }
        }
	}
}
//alert(JSON.stringify(Player.getArmorSlot)
for(var keys in Player){
    //alert(keys)
}

if(Config.radiation) Radiation.createItemsBase()
if(Config.radiation) Radiation.createBlocksBase()

if(Config.radiation){ for(var keys in Radiation.blocks){
	let base = Radiation.blocks[keys]
    Item.registerUseFunction(base.id, function(coords, item, b){
	    let c = coords.relative
	    if(World.getBlockID(c.x, c.y, c.z) == 0){ World.setBlock(c.x, c.y, c.z, base.id); Radiation.world[c.x + "$" + c.y + "$" + c.z] = {key: keys, coords: {x: c.x, y: c.y, z: c.z}, dimension: Player.getDimension()}; }
    })
}}

if(Config.radiation){ Callback.addCallback("tick", function(){
	//if(World.getWorldTime()%40==0) ModifierAPI.add(Player.get(), "radiation", {stack: 5})
	//Entity.addEffect(Player.get(), 2, 2, 10000)
	if(World.getWorldTime() % 5 == 0) Radiation.checkInventory()
	if(World.getWorldTime() % 200 == 0) Radiation.checkBlocks()
	if(Radiation.resistange() && World.getWorldTime() % 20 == 0){
        for(var keys in Radiation.inventory){
        	let inv = Radiation.inventory[keys]
            if(!inv) continue
            //Debug.message("Item")
        	let base = Radiation.items[inv.key]
            if(Player.getInventorySlot(keys).id != base.id){ delete Radiation.inventory[keys]; break }
            inv.count = Player.getInventorySlot(keys).count
            //alert("Count: "+inv.count)
            let eID = ModifierAPI.entities[Player.get()]
            let rad = base.rad * base.c * inv.count / 10
            rad = rad * Radiation.resistange()
            //alert(Radiation.resistange())
                if(!eID){ ModifierAPI.add(Player.get(), "radiation", {stack: rad, isWane: 0}) }else{ ModifierAPI.change(eID["radiation"]).stack += rad; ModifierAPI.change(eID["radiation"]).isWane = 0 } 
         }
     }
     if(Radiation.resistange() && World.getWorldTime() % 40 == 0){
     	for(var keys in Radiation.world){
     	    let block = Radiation.world[keys]
             if(!block) continue
             if(block.dimension != Player.getDimension()) continue
             let base = Radiation.blocks[block.key]
             //Debug.message("Block")
             let range = Math.round((Math.abs(Player.getPosition().x - block.coords.x) + Math.abs(Player.getPosition().y - block.coords.y) + Math.abs(Player.getPosition().z - block.coords.z)) / 3)
             //alert("Range: "+range)
             //alert(block.coords.x + ", " + block.coords.y + ", " + block.coords.z)
             if(range > 16) continue
             if(World.getBlockID(block.coords.x, block.coords.y, block.coords.z) != base.id){ delete Radiation.world[keys]; break }
             let eID = ModifierAPI.entities[Player.get()]
             let rad = base.rad * base.c / range * 2 / 20
             rad = rad * Radiation.resistange()
                if(!eID){ ModifierAPI.add(Player.get(), "radiation", {stack: rad, isWane: 0}) }else{ ModifierAPI.change(eID["radiation"]).stack += rad; ModifierAPI.change(eID["radiation"]).isWane = 0 } 
         }
     }
})}

if(Config.radiation){ Saver.addSavesScope("RadObjectes", 
    function read(scope){
        Radiation.world = scope.blocks || {}
        Radiation.inv = scope.inv || {}
    },
    function save(){
        return {blocks: Radiation.world, inv: Radiation.inv}
    }
)}
Callback.addCallback("LevelLeft", function(){
	Radiation.world = {}
	Radiation.inv = {}
})


