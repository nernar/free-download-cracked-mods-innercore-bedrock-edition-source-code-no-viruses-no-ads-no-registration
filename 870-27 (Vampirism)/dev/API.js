IMPORT("SoundAPI");

Callback.addCallback('LevelDisplayed', function () {
    Game.message(Native.Color.GREEN + '[VAMPIRISM] MOD LOADED!');
});
Callback.addCallback('ServerPlayerLoaded', function(player) {
    VM.createPlayers();
});
Network.addClientPacket("Vampirism.message", function(data){
    if (data.type == 'default') {
        Game.message(data.text);
    } else if (data.type == 'tip') {
        Game.tipMessage(data.text);
    }
});
Network.addClientPacket("Vampirism.playSound", function(data) {
    let sound = new Sound(data.fileName + ".ogg");
    if (!sound.isPlaying()) {
        sound.play();
    }
});
Network.addClientPacket("Vampirism.display", function(data) {
    BLOOD_SCALE.setDisplay(data.status);
});

function decreaseCarriedItem(count, player) {
    let item = Entity.getCarriedItem(player);
    if (item) {
        Entity.setCarriedItem(player, item.id, item.count-count, item.data, item.extra);
    }
}

let BloodManager = {
    bloodLvlUp:function(value, player) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        let bloodLevel = scale.getValue() + value;
        if (bloodLevel <= 20) {
            scale.setValue(bloodLevel);
        } else {
            scale.setValue(20);
        }
    },
    bloodLvlDown:function(value, player) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        let bloodLevel = scale.getValue() - value;
        if (bloodLevel <= 20) {
            scale.setValue(bloodLevel);
        } else {
            scale.setValue(20);
        }
    },
    bloodLvlSet:function(value, player) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        scale.setValue(value);
    },
    bloodBottleDataUp:function(item, value, player, slot) {
        if (slot == undefined) slot = null;
        if (!slot) {
            Entity.setCarriedItem(player, item.id, item.count, item.data+value, item.extra);
        } else {
            let actor = new PlayerActor(player);
            actor.setInventorySlot(slot, item.id, item.count, item.data+value, item.extra);
        }
    },
    bloodBottleDataDown:function(item, value, player, slot) {
        if (slot == undefined) slot = null;
        if (!slot) {
            Entity.setCarriedItem(player, item.id, item.count, item.data-value, item.extra);
        } else {
            let actor = new PlayerActor(player);
            actor.setInventorySlot(slot, item.id, item.count, item.data-value, item.extra);
        }
    },
    setScaleVisible:function(player, status) {
        let client = Network.getClientForPlayer(player);
        if (client) {
            client.send("Vampirism.display", {
                status: status
            });
        }
    }
};

let VM = {
    players: {},
    BM: BloodManager,
    
    getPlayer: function(player) {
        if (this.players[player] !== undefined) {
            return this.players[player];
        } else {
            return false;
        }
    },
    createPlayers: function() {
        let players = Network.getConnectedPlayers();
        players.forEach(function(item, index, array) {
            if (!VM.getPlayer(item)) {
                VM.players[item] = {};
                VM.players[item]['infected'] = false;
                VM.players[item]['level'] = 0;
            }
        });
    },
    playerInfection: function(player, addEffects) {
        this.players[player]['infected'] = true;
        if (addEffects) {
            Entity.addEffect(player, 9, 2, 300);
            Entity.addEffect(player, 2, 1, 200);
        }
        this.sendClientMessage(player, "default", Translation.translate("You feel tired and nauseous. I wonder if there will be side effects from your actions? It is worth waiting."));
    },
    playerUpgradeLvL: function(player) {
        this.players[player]['level'] += 1;
        this.sendClientMessage(player, "default", Native.Color.RED+Translation.translate("Your vampire level has been upgraded to ") + this.players[player]['level'] + '!');
    },
    playerReset: function(player) {
        this.players[player]['infected'] = false;
        this.players[player]['level'] = 0;
    },
    sendClientMessage: function(player, type, text) {
        let client = Network.getClientForPlayer(player);
        if (client) {
            client.send("Vampirism.message", {
                type: type,
                text: text
            });
        }
    },
    playSound:function(coords, range, player, file) {
        let dimension = new PlayerActor(player).getDimension();
        new NetworkConnectedClientList().setupDistancePolicy(coords.x, coords.y, coords.z, dimension, range).send("Vampirism.playSound", {
            fileName: file
        });
	}
};

Saver.addSavesScope("Vampirism",
    function read(data) {
        if (!data.players) {} 
        else {
            VM.players = data.players;
        }
    },
    function save() {
        return {
            players: VM.players
        };
    }
);
ModAPI.registerAPI("VampirismAPI", VM);