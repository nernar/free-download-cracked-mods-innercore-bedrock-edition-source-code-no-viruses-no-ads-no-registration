

Recipes.addShapeless(
	{id: ItemID.verevka_iz_volokna, count: 1, data: 0},
	
	[{id: ItemID.rast_volokno, data: 0}, {id: ItemID.rast_volokno, data: 0}, {id: ItemID.rast_volokno, data: 0}]
);




Callback.addCallback("PreLoaded", function(){
  var material = [ItemID.nozh_palka_volokno, 
ItemID.nozh_palka_kozha,
ItemID.nozh_palka_loza,
ItemID.nozh_kost_volokno,
ItemID.nozh_kost_loza,
ItemID.nozh_kost_kozha];  
    
for(var i=0; i<7; i++){
	ICTool.addRecipe({id: ItemID.verevka_iz_kozhi, count: 3, data: 0}, [{id: 334, data: 0}], material[i]);
    ICTool.addRecipe({id: ItemID.verevka_iz_lozy, count: 2, data: 0}, [{id: 106, data: 0}], material[i]);
	}})  ;

