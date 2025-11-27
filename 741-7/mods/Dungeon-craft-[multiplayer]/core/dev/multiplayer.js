Network.addClientPacket("dc.particle", function (packetData) {
    if (config.game.particles == true && Math.random() * 100 <= config.game.particlesCount) {
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
    }
});
Network.addClientPacket("dc.message", function (packetData) {
    Game.message(packetData);
});
Network.addClientPacket("dc.tip_message", function (packetData) {
    Game.tipMessage(packetData);
});
var Mp = {message: function (player, text) {
    var client = Network.getClientForPlayer(player);
    if (client != null) {
        client.send("dc.message", text);
        Debug.message("message player - " + player + " text: " + text);
    } else {
        Debug.message("[error]message player - " + player);
    }
}, tipMessage: function (player, text) {
    var client = Network.getClientForPlayer(player);
    if (client != null) {
        client.send("dc.tip_message", text);
        Debug.message("message player - " + player + " text: " + text);
    } else {
        Debug.message("[error]message player - " + player);
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
            Debug.message("spawn particle");
        } else {
            Debug.message("[error]spawn particle");
        }
    }
}};

