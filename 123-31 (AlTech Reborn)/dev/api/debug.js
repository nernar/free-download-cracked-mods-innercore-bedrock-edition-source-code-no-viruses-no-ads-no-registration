if(Config.debug){
var lasttime = -1;
var frame = 0;
Callback.addCallback('LevelDisplayed', function () {
Updatable.addUpdatable({
	update: function(){
		var t = Debug.sysTime();
		if(frame++ % 20 == 0){
			if(lasttime != -1){
				tps = 1000 / (t - lasttime) * 20;
				Game.tipMessage(Math.round(tps * 10) / 10 + "tps");
			}
			lasttime = t;
		}
	}
});
});

Item.registerUseFunction(263, function(c, item, block){
	Debug.message("ID: "+block.id+", data:"+block.data+", level:"+ToolAPI.getBlockDestroyLevel(block.id));
});

Item.registerUseFunction(264, function(c, item, block){
	//Debug.message(ToolAPI.getBlockDestroyLevel(block.id));
for(var k in Base.backTypes){
    	    var bt = Base.backTypes[k];
            var name = "Diamond";
            if(!bt.data) bt.data = 0;
            if(World.getBlockID(c.x, c.y, c.z) == bt.id && World.getBlockData(c.x, c.y, c.z) == bt.data){
                World.setBlock(c.x, c.y, c.z, BlockID["ore"+name+"_"+k], 0);
            }
        }
});
}