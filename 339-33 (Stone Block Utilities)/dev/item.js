IMPORT("ToolType"); 


var Random = {
    Float:function(min,max){
        var result = ((Math.random()*max)+min);
        return result;
    },
    Int:function(min,max){
        var result = Math.round((Math.random()*max)+min);
        return result;
    }
};


IDRegistry.genItemID("stonepebble");
Item.createItem("stonepebble", "Stone Pebble", {name: "stone_tablee", meta: 0}, {stack: 64});
Recipes.addShaped({id: 4, count: 1, data: 0}, 
["aao",
 "aao",
 "ooo"
], ['a', ItemID.stonepebble, 0]);

Block.setDestroyTime(1, 0.5); 
Block.registerDropFunction(1, function (coords, id, data, diggingLevel) {
if(diggingLevel == 0){return[[ItemID.stonepebble,
Random.Int(1,3), 0]];}else{return;} 
});
Callback.addCallback("DestroyBlockStart", function(coords, block, player){
if(Player.getCarriedItem ().id == 0 && (block.id == 1)){
Block.setDestroyTime (block.id, 1); // new time
}
else if(block.id == 1){
Block.setDestroyTime (block.id, 5); // default time
}
});


IDRegistry.genItemID("stonestick");
Item.createItem("stonestick", "Stone Stick",
{name: "stonestick", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.stonestick, count: 4, data: 0}, 
["ooa",
 "oao",
 "aoo"
], ['a', 4, 0]);


IDRegistry.genItemID("stonehook");
Item.createItem("stonehook", "Stone Crook", 
{name: "stonehook", meta: 0}, 
{stack: 1});
Recipes.addShaped({id: ItemID.stonehook, count: 1, data: 0}, 
["aao",
 "aoo",
 "aoo"
], ['a', ItemID.stonestick, 0]);
Item.setMaxDamage(ItemID.stonehook,200);
ToolAPI.addToolMaterial("stone", {durability: 280, level: 1, efficiency: 1, damage: 2, enchantability: 4});
ToolAPI.setTool(ItemID["stonehook"], "stone", ToolType.shovel);
Callback.addCallback("DestroyBlock", function(c,id){
    
        var it = Player.getCarriedItem();
        if(id.id==18&&
            (Player.getCarriedItem().id==ItemID.stonehook)
            ){
        if(Math.random()*100<10
                ){
                    World.drop(c.x,c.y,c.z,6,1);    
                }else if(
                Math.random()*100<6
                )
                    World.drop(c.x,c.y,c.z,280,1);  
                }else if(
                Math.random()*100<5
                ){
                    World.drop(c.x,c.y,c.z,260,1);  
                }
}); 
Block.registerDropFunctionForID(3, function(coords, id, data, level){
	        if(Player.getCarriedItem().id==ItemID.stonehamme){
			 return [[6, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];  }
				 });



IDRegistry.genItemID("stonehamme"); Item.createItem("stonehamme", "Stone Hammer", 
{name: "stonehamme", meta: 0}, 
 {stack: 1});
 Recipes.addShaped({id: ItemID.stonehamme, count: 1, data: 0}, 
["oao",
 "oba",
 "boo"
], ['a', 4, 0, 'b', ItemID.stonestick, 0]);    
Item.setMaxDamage(ItemID.stonehamme, 475);      
ToolAPI.setTool(ItemID.stonehamme, "stone", ToolType.pickaxe);
Block.registerDropFunctionForID(1, function(coords, id, data, level){ 
if(Player.getCarriedItem().id==ItemID.stonehamme
){ 
return [[4, 1, 0]]; 
}else if(level == 0){ 
return[[ItemID.stonepebble, Random.Int(1,4), 0]]; 
}else{ 
return [[id, 1, data]]; 
} 
});


            
         Block.registerDropFunctionForID(4, function(coords, id, data, level){ 
            if(Player.getCarriedItem().id==ItemID.stonehamme){
		     return [[13, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];
				 } 
				 });
         Block.registerDropFunctionForID(13, function(coords, id, data, level){  
		    if(Player.getCarriedItem().id==ItemID.stonehamme){
			 return [[3, 1, 0]];  }else if(Math.random()*100<8){  return [[318,1,0]];  }else{
			     return [[id, 1, data]];
				 } 
				 });
         Block.registerDropFunctionForID(2, function(coords, id, data, level){  
            if(Player.getCarriedItem().id==ItemID.stonehamme){
	         return [[3, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];
				 } 
				 });
         Block.registerDropFunctionForID(3, function(coords, id, data, level){
	        if(Player.getCarriedItem().id==ItemID.stonehamme){
			 return [[12, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];  }
				 });


