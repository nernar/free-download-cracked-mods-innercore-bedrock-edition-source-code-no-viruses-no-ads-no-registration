Callback.addCallback("EntityDeath", function(entity){//этот код не однотипный и тут разный дроп с разных мобов
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
}
else if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
}
else if(Entity.getType(entity) == 35){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zyb_payka, soul);
}
else if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
     var sou = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zyb_payka, soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.otravlennii_zyb_payka, sou);
}
else if(Entity.getType(entity) == 36){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, soul);
     World.drop(coords.x, coords.y, coords.z, 352, soul);
}
else if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
     var sou = parseInt(Math.random() * 2);
     var u = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, u);
     World.drop(coords.x, coords.y, coords.z, ItemID.gniloi_tkanevii_shlem, sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkanevaia_kyrtka, sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilie_tkanevie_ponozhi, sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilie_tkanevie_botinki, sou);
}
else if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
}
else if(Entity.getType(entity) == 15){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.prochnaia_tkan, soul);
}
else if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.prochnaia_tkan, soul);
}
else if(Entity.getType(entity) == 14){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
        if(!primal_core){
     World.drop(coords.x, coords.y, coords.z, 334, soul);
}
if(primal_core){
     World.drop(coords.x, coords.y, coords.z, ItemID.pelt_animal, soul);
}
}
else if(Entity.getType(entity) == 13){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
        if(!primal_core){
     World.drop(coords.x, coords.y, coords.z, 334, soul);
}
if(primal_core){
     World.drop(coords.x, coords.y, coords.z, ItemID.pelt_animal, soul);
}
}
else if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.siroe_miaso_kraia, soul);
}
else if(Entity.getType(entity) == 55){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.siroe_miaso_kraia, soul);
}
else if(Entity.getType(entity) == 49){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ship_strazha, soul);
}
else if(Entity.getType(entity) == 50){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ship_drevnego_strazha, soul);
}
else if(Entity.getType(entity) == 16){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, 40, soul);
}
else if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, soul);
}
else if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, soul);
}
else if(Entity.getType(entity) == 53){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 21);
     var oul = parseInt(Math.random() * 6);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.cheshyia_drakona_kraia, 5+oul);
     World.drop(coords.x, coords.y, coords.z, ItemID.siroe_miaso_kraia, soul);
}
});