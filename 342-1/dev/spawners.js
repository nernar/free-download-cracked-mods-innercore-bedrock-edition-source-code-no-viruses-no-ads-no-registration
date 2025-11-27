/*TileEntity.registerPrototype(BlockID.cometspawner1, {
 
 tick: function(){
 	if(rand = 0.0005){
 	Entity.spawnCustom("CometSlime", this.x, this.y + 1, this.z);
 }
 }
 });
 
 
 TileEntity.registerPrototype(BlockID.cometspawner, {
 
 tick: function(){
 	if(rand = 0.0005){
 	Entity.spawnCustom("CometUnicorn", this.x, this.y + 1, this.z); 
 }
 }
 });
 */
 
 
 
 
 Block.setRandomTickCallback(BlockID.cometspawner, function(x, y, z, id, data) { 
    Entity.spawnCustom("CometSlime", x, y + 1, z); 
    });
    
    Block.setRandomTickCallback(BlockID.cometspawner1, function(x, y, z, id, data) { 
    Entity.spawnCustom("CometUnicorn", x, y + 1, z); 
    });
    
    
    
 
 
 
 
 
 
 
 