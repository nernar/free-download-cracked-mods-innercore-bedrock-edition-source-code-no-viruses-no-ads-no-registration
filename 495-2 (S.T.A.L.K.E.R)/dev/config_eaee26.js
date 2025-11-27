const kozhanka = {id: "kozhanka", name: "\u041a\u043e\u0436\u0430\u043d\u043a\u0430", texture: {name: "kurtka"}, armor: 1, durability: 10, type: ARMOR_TYPE_ARMOR};
const zara = {id: "zara", name: "\u041a\u043e\u043c\u0431\u0438\u043d\u0435\u0437\u043e\u043d \"\u0417\u0430\u0440\u044f\"", texture: {name: "zara"}, armor: 3, durability: 10, type: ARMOR_TYPE_ARMOR};
const protivogaz = {id: "protivogaz", name: "\u041f\u0440\u043e\u0442\u0438\u0432\u043e\u0433\u0430\u0437", texture: {name: "protivogaz", model: "zara"}, armor: 3, durability: 10, type: ARMOR_TYPE_HELMET};
const exo = {id: "exo", name: "\u042d\u043a\u0437\u043e\u0441\u043a\u0435\u043b\u0435\u0442", texture: {name: "exo"}, armor: 20, durability: 100, type: ARMOR_TYPE_FULLARMOR};
const chnza = {id: "chnza", name: "\u0427\u041d-\u0417\u0430", texture: {name: "chn_za"}, armor: 18, durability: 80, type: ARMOR_TYPE_FULLARMOR};
var ARMORS = [kozhanka, zara, protivogaz, exo, chnza];
for (var i = 0; i < ARMORS.length; i++) {
    StalkerDev.addGun(ARMORS[i]);
}

