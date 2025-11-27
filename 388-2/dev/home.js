//Спасибо Максиму Подшивалову
var ppos = null;
 
Callback.addCallback("NativeCommand", function(cmd){
    if(cmd == "/sethome"){
		Game.message("Точка дома установлена.");
        ppos = Player.getPosition();
    }
    if(cmd == "/home"){
        if(ppos !== null){
            //Телепортирует домой
			Game.message("Телепортация прошла успешно");
			Player.setPosition(ppos.x, ppos.y, ppos.z);
        }else
      
		Game.message("Дом не установлен.");
		
    }
});
 
Saver.addSavesScope("Home",
function read(scope){
    ppos = scope || null;
},
function save(){
    return ppos;
});
