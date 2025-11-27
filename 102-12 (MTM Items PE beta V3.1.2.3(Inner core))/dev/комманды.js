Callback.addCallback("NativeCommand", function (str) {
if(str=="/meteor"){
    var pos = Player.getPosition()
		pos = GenerationUtils.findSurface(pos.x, pos.y, pos.z);
		if(World.getBlockID(pos.x, pos.y+1, pos.z) == 0){
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-7, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-8, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-7, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-7, pos.z, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z-1, BlockID.block_zoli, 0);
 mz = Entity.spawn(pos.x+1.5, pos.y-5, pos.z-.5, 32);
Entity.setSkin(mz, "mob/мзомби.png")
Entity.setMaxHealth (mz, 100)
Entity.setHealth (mz, 100)
World.setBlock(pos.x, pos.y-6, pos.z-1, BlockID.block_zoli, 0);
 mc = Entity.spawn(pos.x+.5, pos.y-5, pos.z-.5, 33);
Entity.setSkin(mc, "mob/мкрипер.png")
Entity.setMaxHealth (mc, 100)
Entity.setHealth (mc, 100)
	if(Math.random() < .4){
World.explode(pos.x, pos.y, pos.z, 7, true);
World.setBlock(pos.x, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z, BlockID.block_zoli, 0);
 ms = Entity.spawn(pos.x+1.5, pos.y-8, pos.z+.5, 34);
Entity.setSkin(ms, "mob/мскелет.png")
Entity.setMaxHealth (ms, 100)
Entity.setHealth (ms, 100)
World.setBlock(pos.x+1, pos.y-9, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-9, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-10, pos.z-1, BlockID.block_zoli, 0);
	if(Math.random() < .5){
World.setBlock(pos.x+1, pos.y-10, pos.z, BlockID.antratcit, 0);
World.setBlock(pos.x, pos.y-10, pos.z-1, BlockID.antratcit, 0);
}
World.setBlock(pos.x, pos.y-11, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-11, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x-1, pos.y-11, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-11, pos.z, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-11, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z+1, BlockID.block_zoli, 0);
}
PlaySoundFile("crash.ogg");
	Game.message(ChatColor.GREEN + "Метеорит упал под игроком");
}
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/Dezar"){
	Game.message(ChatColor.BROWN + "Печеньки:)");
Player.addItemToInventory (357, 64, 0);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/IQ Master"){
	Game.message("О привет-_-");
Player.addItemToInventory (325, 1, 1);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/miha"){
	Game.message(ChatColor.RED + "Пасхалочка обнаружена(!!!TRIGGERED!!!)");
Player.addItemToInventory (268, 64, 0);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/Donate"){
	Game.message(ChatColor.GREEN + "Передай привет Turbo Blastiajaj1001001101010101101");
Player.addItemToInventory (ItemID.mezhgalakticheskaia_valuta, 5, 0);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/Kitron"){
	Game.message(ChatColor.RED + "1001001101010101101");
Player.addItemToInventory (ItemID.otsilka, 1, 0);
}
});