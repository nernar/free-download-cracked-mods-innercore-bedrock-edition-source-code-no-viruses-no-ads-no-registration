IMPORT("ToolLib");
IMPORT("PhysicBlocks");

var loadTextures = false;

var round = function(num, x){
	var multiplier = Math.pow(10, x);
	return Math.floor(num * multiplier) / multiplier;
}

var rollPercentage = function(pr, seed){
	if(seed){
		var r = new java.util.Random(seed);
		return pr>=r.nextInt(100);
    }
    return pr>=round(Math.random()*100, 2);
}
var random = function(min, max, seed){
	if(seed){
	    var r = new java.util.Random(seed).nextInt(100) / 100;
	    return Math.floor(r * (max - min + 1)) + min;
	}
	return Math.floor(java.lang.Math.random() * (max - min + 1)) + min;
}

Callback.addCallback("PostLoaded", function(){
    if(loadTextures){
    	UI.getContext().finish();
    }
})

//RegisterPhysicBlock(88, true);