let ClientTickHandler = (function (ClientTickHandler) {
    ClientTickHandler.ticksWithLexicaOpen = 0;
    ClientTickHandler.pageFlipTicks = 0;
    ClientTickHandler.ticksInGame = 0;
    if (!Game.isDedicatedServer()) {
        new UpdatableClass(function () {
            ClientTickHandler.ticksInGame++;
        }).load(true);
    }
    return ClientTickHandler;
}({}));

