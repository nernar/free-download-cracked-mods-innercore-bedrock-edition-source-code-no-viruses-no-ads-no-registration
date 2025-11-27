IMPORT("RegionGuard");
IMPORT("BlockEngine");
__config__.checkAndRestore({
    nuke: false
});
var IC2NetworkPackets = requireGlobal("IC2NetworkPackets");
var Ma = requireGlobal("MachineRegistry");
var ICT = requireGlobal("ICTool");
var SM = requireGlobal("SoundManager");
{ //удаление пакета ic2
    var moddedServer = Network.getServer();
    var field = moddedServer.getClass().getDeclaredField("onPacketReceivedListenerMap");
    field.setAccessible(true);
    field.get(moddedServer).remove(IC2NetworkPackets.demontage);
}
Network.addServerPacket(IC2NetworkPackets.demontage, function (client, data) {
    // Валидация данных с клиента на всякий случай
    if (typeof (data.x) == "number" && typeof (data.y) == "number" && typeof (data.z) == "number") {
        var player = client.getPlayerUid();
        // Проверка на дальность нахождения игрока и на приват
        if (Entity.getDistanceToCoords(player, data) <= 10 && RegionGuard.canMember(player, data.x, data.z)) {
            var region = WorldRegion.getForActor(player);
            var blockID = region.getBlockId(data);
            if (Ma.isMachine(blockID)) {
                var item = new ItemStack(Entity.getCarriedItem(player));
                if (ICT.isUseableWrench(item, 10)) {
                    var tileEntity = (region.getTileEntity(data) || region.addTileEntity(data));
                    if (!tileEntity)
                        return;
                    var drop = tileEntity.adjustDrop(new ItemStack(tileEntity.blockID, 1, 0));
                    TileEntity.destroyTileEntity(tileEntity);
                    region.setBlock(data, 0, 0);
                    region.dropAtBlock(data.x, data.y, data.z, drop);
                    ICT.useWrench(item, 10, player);
                    SM.playSoundAtBlock(tileEntity, "Wrench.ogg", 1);
                }
            }
        }
    }
});
var LaserShot = requireGlobal("LaserShot");
{
    var orginal_1 = LaserShot.prototype.destroyBlock;
    LaserShot.prototype.destroyBlock = function (x, y, z, block) {
        var self = this;
        if (RegionGuard.canMember(self.player, x, z)) { // Добавление проверки на приват
            orginal_1.apply(self, arguments);
        }
    };
}
LaserShot.prototype.checkBlock = function (x, y, z) {
    var self = this;
    var block = self.region.getBlock(x, y, z); // Исправление мультиплеера
    if (ToolAPI.getBlockMaterialName(block.id) == "unbreaking") {
        self.power = 0;
    }
    else if (block.id > 0 && block.id != 50 && block.id != 51) {
        self.destroyBlock(x, y, z, block);
    }
};
if (__config__.getBool("nuke")) {
    TileEntity.registerPrototype(BlockID.nuke, {});
    Recipes.removeWorkbenchRecipe(BlockID.nuke, 1, 0);
    Recipes.removeWorkbenchRecipe(BlockID.nuke, 1, 0);
}
