
IDRegistry.genItemID("terraformingstaff");
Item.createItem("terraformingstaff", "§5 Посох терраформирования §r\n Уничтожает блоки", {name: "terraformingstaff", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fireleavseeds){
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z-1, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y, coords.relative.z-1, 0, 0);



World.setBlock (coords.relative.x, coords.relative.y+1, coords.relative.z, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y+1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y+1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y+1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y+1, coords.relative.z-1, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y+1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y+1, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y+1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y+1, coords.relative.z-1, 0, 0);



World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z-1, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z-1, 0, 0);

}
});























IDRegistry.genItemID("bloodstaff");
Item.createItem("bloodstaff", "§5 Пиропосох §r\n Создает огненные шары", {name: "bloodstaff", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.bloodstaff){


var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);

}});

Recipes.addShaped({id: ItemID.bloodstaff, count: 1, data: 0}, [ " ab", " aa", "a  "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);





































