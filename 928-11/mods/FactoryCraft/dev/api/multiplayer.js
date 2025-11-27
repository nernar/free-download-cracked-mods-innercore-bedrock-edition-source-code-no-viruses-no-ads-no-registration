Callback.addCallback("LevelDisplayed", function(){
Network.addClientPacket("fc.particle", function(packetData) {
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});
Network.addClientPacket("fc.particles", function(arr) {
	if(Player.getDimension() == arr.d)
	for(let i in arr.p){
		let packetData = arr.p[i];
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
   }
});
});

Network.addClientPacket("fc.message", function(packetData) {
    Game.message(packetData);
});
var Mp = {
	spawnParticles(arr, dimension){
		var players = Network.getConnectedPlayers();
		for(let i in players){
			 let client = Network.getClientForPlayer(players[i]);
			 if(client)
			 	client.send("fc.particles", {p: arr, d: dimension});
		}
	},
    message: function (player, text){
        var client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("fc.message", text);
        }
    },
    spawnParticle: function (type, x, y, z, vx, vy, vz, ax, ay, az){
            vx = vx || 0;
            vy = vy || 0;
            vz = vz || 0;
            ax = ax || 0;
            ay = ay || 0;
            az = az || 0;
            var players = Network.getConnectedPlayers();
            for(var i in players){
                var client = Network.getClientForPlayer(players[i]);
                if(client){
                    client.send("fc.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
             
                }
            }
        
    }
};
