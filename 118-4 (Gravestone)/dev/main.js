var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 4
});

IDRegistry.genBlockID("cobbleGrave");
Block.createBlock("cobbleGrave", [
	{name: "Grave", texture: [["cobblestone", 0]], inCreative: true}
],BLOCK_TYPE_STONE);

var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.cobbleGrave, 0, render);
var model = BlockRenderer.createModel();

model.addBox (7/16, 0, 7/16, 9/16, 1, 9/16,  4, 0);
model.addBox (7/16, 9/16, 3/16, 9/16, 10/16, 13/16,  4, 0);

render.addEntry(model);

Translation.addTranslation("Grave", {ru: "Крест"});
var items=[];
Saver.addSavesScope("grave",
	function read(scope){
		if(scope&&scope.item)items = scope.item;
	},
	
	function save(){
		return {item:items};
	}
);
function getSurface(x,yy,z){
	for(let y = yy; y>0; y--){
		if(World.getBlock(x,y-1,z).id!=0){
			return y;
		}
	}
	return false;
}
Callback.addCallback("EntityDeath",function(e){
	if(e==Player.get()){
		var y = getSurface(Math.floor(Player.getPosition().x),Math.floor(Player.getPosition().y),Math.floor(Player.getPosition().z));
		if(y){
			items.push({coord:{x:Math.floor(Player.getPosition().x),y:y,z:Math.floor(Player.getPosition().z)},item:[]});
		World.setBlock(Math.floor(Player.getPosition().x),y,Math.floor(Player.getPosition().z),BlockID.cobbleGrave);
		for(let i =0; i<4; i++){
			var item = Player.getArmorSlot (i);
			if(item.count>0){
				items[items.length-1].item.push({
					id:item.id,
					data:item.data,
					count:item.count
				});
				Player.setArmorSlot(i, 0,0,0);
			}
		}
		for(let i = 9; i<45; i++){
			var item = Player.getInventorySlot(i);
			if(item.count>0){
				items[items.length-1].item.push({
					id:item.id,
					data:item.data,
					count:item.count
				});
				Player.setInventorySlot (i, 0,0,0);
			}
		}
		}
	}
});
Callback.addCallback("DestroyBlock",function(coords, block, player){
	if(block.id==BlockID.cobbleGrave){
		for(let i in items){
			if(items[i].coord.x==coords.x&&items[i].coord.y==coords.y&&items[i].coord.z==coords.z){
				//Game.message(coords.x+" "+coords.y+" "+coords.z);
				//Game.message(items[i].coord.x+" "+items[i].coord.y+" "+items[i].coord.z);
				for(let b in items[i].item){
					var item = items[i].item[b];
					World.drop(coords.x, coords.y, coords.z, item.id, item.count, item.data);
				}
				items[i].coord.y=1000;
			break;
			}
			
		}
	}
});
