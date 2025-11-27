Callback.addCallback("ItemUse", function (coords, item, block) {
    if(item.id == 318 && block.id == 1){
        
    if(Math.random()<=0.1)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.kusok_kremnya, 1, 0);
    Player.decreaseCarriedItem()};
    
    if(Math.random()<=0.065)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.ostryi_kusok_kremnya, 1, 0);
    Player.decreaseCarriedItem()};
    
    if(Math.random()<=0.08)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.oskolok_kremnya, 1, 0);
    Player.decreaseCarriedItem()};
}});


Callback.addCallback("ItemUse", function (coords, item, block) {
    if(item.id == 352 && block.id == 1){
        
    if(Math.random()<=0.1)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.kost_igla, 1, 0);
    Player.decreaseCarriedItem()};

}});