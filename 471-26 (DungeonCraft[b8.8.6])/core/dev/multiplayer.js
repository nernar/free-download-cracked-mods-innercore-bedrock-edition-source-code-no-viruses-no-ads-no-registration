Network.addClientPacket("dc.particle", function (packetData) {
    if (__config__.getBool("game.particles") == true && Math.random() * 100 <= __config__.getNumber("game.particlesCount")) {
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
    }
});
Network.addClientPacket("dc.message", function (packetData) {
    Game.message(packetData);
});
var Mp = {message: function (player, text) {
    var client = Network.getClientForPlayer(player);
    if (client != null) {
        client.send("dc.message", text);
    }
}, spawnParticle: function (type, x, y, z, vx, vy, vz, ax, ay, az) {
    vx = vx || 0;
    vy = vy || 0;
    vz = vz || 0;
    ax = ax || 0;
    ay = ay || 0;
    az = az || 0;
    var players = Network.getConnectedPlayers();
    for (var i in players) {
        var client = Network.getClientForPlayer(players[i]);
        if (client) {
            client.send("dc.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
        }
    }
}};

