


IDRegistry.genBlockID("mob_grinder");
Block.createBlock("mob_grinder", [{
    name: "Redstone mob grinder", 
    texture: [
["mob_grinder", 0]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

Recipes.addShaped({id: BlockID.mob_grinder, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 331, -1, "b", 265, -1, "c", 276, -1]);


var evilMobs = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62, 103,104,105,106,107,108,109,110,111,112,113,114,115,116,118];

TileEntity.registerPrototype(BlockID.mob_grinder,{
	defaultValues: {
  damage: 100,
  range: 3,
  power:false,
  progress: 0,
  kill:0
  },
	tick:function(){
	
if(this.data.power==true){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){


Entity.damageEntity(ent, 10000);
}}}},  
  
  
  
redstone: function(params){
        if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }
    
    });


 
