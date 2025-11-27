var Level = ModAPI.requireGlobal("Level");
var player = Player.get();
var player_max_health = Entity.getMaxHealth(player);
var particle = new Particles.ParticleEmitter(0, 0, 0);

var manastorage = {
    items: {},
    registerItem: function (identifier, storage) {
        this.items[identifier] = storage;
    },
    getItem: function (identifier) {
        return this.items[identifier] || null;
    }
};