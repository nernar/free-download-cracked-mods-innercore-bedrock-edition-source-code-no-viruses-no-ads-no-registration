importLib("UMTCore", "*");
//importLib("plantModel", "*");

IDRegistry.genItemID("um_盐碎矿");
Item.createItem("um_盐碎矿","Salt Debris",
{name:"um_盐矿碎片", meta:   0  });
Sieve.dust(ItemID.salt,2.5,30);

Sieve.gravel(ItemID.um_盐碎矿,2.5,30);

Sieve.dirt(ItemID.strawberry_seed,2.5,3);
Sieve.dirt(ItemID.raspberry_seed,2.5,3);
Sieve.dirt(ItemID.cranberry_seed,2.5,3);
Sieve.dirt(ItemID.blueberry_seed,2.5,3);
Sieve.dirt(ItemID.blackberry_seed,2.5,3);
Sieve.dirt(ItemID.candleberryseed,2.5,3);
Sieve.dirt(ItemID.grape_seed,2.5,3);
Sieve.dirt(ItemID.cucumber_seed,2.5,3);
Sieve.dirt(ItemID.onion_seed,2.5,3);
Sieve.dirt(ItemID.cabbage_seed,2.5,3);
Sieve.dirt(ItemID.tomato_seed,2.5,3);
Sieve.dirt(ItemID.tomato_seed,2.5,3);
Sieve.dirt(ItemID.bellpepper_seed,2.5,3);
Sieve.dirt(ItemID.garlic_seed,2.5,3);
Sieve.dirt(ItemID.lettuce_seed,2.5,3);
Sieve.dirt(ItemID.coffee_seed,2.5,3);
Sieve.dirt(ItemID.peas_seed,2.5,3);
Sieve.dirt(ItemID.chili_pepper_seed,2.5,3);
Sieve.dirt(ItemID.spice_leaf_seed,2.5,3);
Sieve.dirt(ItemID.corn_seed,2.5,3);
Sieve.dirt(ItemID.peppercorn_seed,2.5,3);

Sieve.sand(ItemID.appleSapling,10,5);
Recipes.addFurnace(ItemID.um_盐碎矿,ItemID.salt, 0);


/*IDRegistry.genBlockID("um_test"); 
Block.createBlock("um_test", [
	{name: "testBlock", texture: 
[["empty", 0], ["empty", 0], 
["um_test",0], ["um_test", 0], 
["um_test", 0], ["um_test",0]], inCreative: true}
]) ;

Model.plant(BlockID.um_test);*/