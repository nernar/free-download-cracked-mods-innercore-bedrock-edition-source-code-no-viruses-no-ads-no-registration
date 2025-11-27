//сообщение в чате при входе в игру
alert("Iridium Meteors PE by Gojsjs(V2.3)");
//сообщение в чате при входе на мир
Callback.addCallback("LevelLoaded", function(){ 
	Game.message(ChatColor.GREEN + "Iridium Meteors PE by Gojsjs(V2.2)");//не ну а че пусть знают с какими модами играют))))
});
//либа для проигрывания звука падения
importLib("SoundAPI","*");
var falling = 0;
Callback.addCallback("PostLoaded", function(){
Callback.addCallback("NativeCommand", function (str) {
if(str=="/IridiumMeteor"){
    var pos = Player.getPosition()
		pos = GenerationUtils.findSurface(pos.x, pos.y, pos.z);
		if(World.getBlockID(pos.x, pos.y+1, pos.z) == 0){
	Game.message(ChatColor.GREEN + "Метеорит упал под игроком");
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-7, pos.z, BlockID.oreIridium, 0);
World.setBlock(pos.x+1, pos.y-7, pos.z, BlockID.oreIridium, 0);
	if(Math.random() < .4){//срендий метеорит
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
World.setBlock(pos.x, pos.y-9, pos.z, BlockID.oreIridium, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.oreIridium, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.oreIridium, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z, BlockID.oreIridium, 0);
}
PlaySoundFile("crash.ogg");//да звук громкия, я знаю
}
}
});
Callback.addCallback("tick", function()
{
		if (World.getThreadTime() % 2 == 0){//ну думаю каждые 2 тика не такая уж и большая нагрузка
    falling += 1;
			falling += Math.random() * 2;
		if (falling > 40000){
		falling = 0;
    var pos = Player.getPosition()
    var randomX = parseInt(Math.random() * 200);
    var randomZ = parseInt(Math.random() * 200);
		pos = GenerationUtils.findSurface(pos.x-100+randomX, pos.y, pos.z-100+randomZ);
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-7, pos.z, BlockID.oreIridium, 0);
World.setBlock(pos.x+1, pos.y-7, pos.z, BlockID.oreIridium, 0);
	if(Math.random() < .4){//срендий метеорит
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
World.setBlock(pos.x, pos.y-9, pos.z, BlockID.oreIridium, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.oreIridium, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.oreIridium, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z, BlockID.oreIridium, 0);
}
PlaySoundFile("crash.ogg");//да звук громкия, я знаю
}
}
});
});