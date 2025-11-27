/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: test.js

var radius = {
	wood:0,
	stone:2,
	iron:4,
	gold:4,
	diamond:6,
	}

Item.registerUseFunctionForID(291,function(coords,item,block){
	for(var x = -radius.stone;x < radius.stone; x++){
	for(var z = -radius.stone;z < radius.stone;z++){
	if(World.getBlock(coords.x+x,coords.y,coords.z+z).id==2){
		World.setBlock(coords.x+x,coords.y,coords.z+z,60);
	}}}})
	
Item.registerUseFunctionForID(292,function(coords,item,block){
	for(var x = -radius.stone;x < radius.iron; x++){
	for(var z = -radius.stone;z < radius.iron;z++){
	if(World.getBlock(coords.x+x,coords.y,coords.z+z).id==2){
		World.setBlock(coords.x+x,coords.y,coords.z+z,60);
	}}}})
	
Item.registerUseFunctionForID(294,function(coords,item,block){
	for(var x = -radius.stone;x < radius.gold;x++){
	for(var z = -radius.stone;z < radius.gold;z++){
	if(World.getBlock(coords.x+x,coords.y,coords.z+z).id==2){
		World.setBlock(coords.x+x,coords.y,coords.z+z,60);
	}}}})
	
Item.registerUseFunctionForID(293,function(coords,item,block){
	for(var x = -radius.stone;x < radius.diamond; x++){
	for(var z = -radius.stone;z < radius.diamond;z++){
	if(World.getBlock(coords.x+x,coords.y,coords.z+z).id==2){
		World.setBlock(coords.x+x,coords.y,coords.z+z,60);
	}}}})




