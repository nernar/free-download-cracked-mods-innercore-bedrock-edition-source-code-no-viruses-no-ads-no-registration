Callback.addCallback("NativeCommand",function (comm){ 
if(comm=="//gm0"){Commands.exec("/gamemode 0");}
if(comm=="//gm1"){Commands.exec("/gamemode 1");}
if(comm=="//cl"){Commands.exec("/clear @a");}
if(comm=="//cleff"){Commands.exec("/effects @a clear");}
if(comm=="//h"){Game.message("\n//gm0 | //gm1 - переключает режимы игры.\n//cl - чистит инвентарь.\n//cleff - чистит эффекты.\n//h - выводит всё это\nСоздатель мода - uhmDenis");}
});