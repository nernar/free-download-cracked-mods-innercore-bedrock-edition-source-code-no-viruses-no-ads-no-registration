Callback.addCallback("tick", function () {
    let j = 0;
    CFMState.playerState.sort(function (a, b) {
        return a.duration - b.duration;
    });
    for (let i = 0; i < CFMState.playerState.length; i++) {
        let id = CFMState.playerState[i].id;
        let state = CFMState.states[CFMState.playerState[i].id];
        if (CFMState.playerState[i].duration <= 0) {
            state.clear(CFMState.playerState[i]);
        } else {
            CFMState.playerState[i].duration--;
            j++;
            state.tick(CFMState.playerState[i]);
        }
    }
});
var CFMState = {};
CFMState.states = {};
CFMState.playerState = [];
CFMState.register = function (stateSpec) {
    CFMState.states[stateSpec.id] = stateSpec;
};
CFMState.StateSpec = function (obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            this[i] = obj[i];
        }
    }
};
CFMState.StateSpec.prototype = {id: "test", name: {zh: "\u5174\u594b", en: "Happy"}, slot: {id: ItemID.coffeeworkshop$kbqn, data: 0}, produce: {zh: "\u4eca\u5929\u5929\u6c14\u771f\u597d\uff01", en: "It is a good day!"}, start: function () {
}, tick: function () {
    Entity.addEffect(Player.get(), MobEffect.movementSpeed, 6, 5);
}, clear: function () {
}};
CFMState.register(new CFMState.StateSpec());
CFMState.register(new CFMState.StateSpec({id: "relax", name: {zh: "\u653e\u677e", en: "Relax"}, slot: {id: ItemID.coffeeworkshop$nt, data: 0}, produce: {zh: "\u4eca\u5929\u5929\u6c14\u4e0d\u9519\uff01", en: "It is a good day!"}, tick: function () {
    Entity.addEffect(Player.get(), MobEffect.movementSpeed, 6, 5);
}}));
CFMState.addState = function (id, level, duration, data) {
    Debug.message(id);
    if (CFMState.playerState.find(function (value) {
        if (value.id === id) {
            value.duration += duration;
            return true;
        }
    })) {
        return;
    }
    let state = CFMState.states[id];
    let specObj = {id: id, level: level, duration: duration, data: data};
    CFMState.playerState.push(specObj);
    state.start(specObj);
};

