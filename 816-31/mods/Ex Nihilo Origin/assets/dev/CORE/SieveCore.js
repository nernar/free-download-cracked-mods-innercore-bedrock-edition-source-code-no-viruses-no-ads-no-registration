var dirt = [
    [ItemID.ex_stoneSmall, 0, 2, 4, 100],
    [ItemID.ex_seedsGrass, 0, 1, 1, 7],
    [ItemID.ex_seedsOak, 0, 1, 1, 1],
    [295, 0, 1, 2, 7],
    [361, 0, 1, 1, 7],
    [362, 0, 1, 1, 7],
    [ItemID.ex_seedsDarkOak, 0, 1, 1, 2],
    [ItemID.ex_seedsBirch, 0, 1, 1, 2],
    [ItemID.ex_seedsSpruce, 0, 1, 1, 1],
    [ItemID.ex_seedsAcacia, 0, 1, 1, 2],
          //ex_seedsAcacia
    [ItemID.ex_seedsPotato, 0, 1, 1, 2],
    [ItemID.ex_seedsCarrot, 0, 1, 1, 2],
    [ItemID.ex_seedsCanes, 0, 1, 1, 7]
];
var gravel = [
    [263, 0, 1, 4, 13],
    [318, 0, 1, 3, 25],
    [ItemID.ex_Ironbroken, 0, 1, 4, 15],
    [ItemID.ex_Aluminumbroken, 0, 1, 4, 10],
    [ItemID.ex_Nickelbroken, 0, 1, 4, 6],
    [ItemID.ex_Goldbroken, 0, 1, 4, 6],
    [VanillaItemID.lapis_lazuli, 0, 1, 2, 5],
    [ItemID.ex_Platinumbroken, 0, 1, 4, 1],
    [388, 0, 1, 1, 1],
    [264, 0, 1, 1, 1]
];
var sand = [
    [ItemID.ex_seedsCactus, 0, 1, 1, 2],
    [ItemID.ex_seedsJungle, 0, 1, 1, 3],
    [ItemID.ex_Ironcrushed, 0, 1, 4, 16],
    [ItemID.ex_Aluminumcrushed, 0, 1, 4, 10],
    [ItemID.ex_Nickelcrushed, 0, 1, 4, 9],
    [ItemID.ex_Goldcrushed, 0, 1, 4, 11],
    [ItemID.ex_Platinumcrushed, 0, 1, 4, 3],
    [351, 3, 1, 2, 3],
    [ItemID.ex_spores, 0, 1, 2, 1]
];
var dust = [
    [858, 0, 1, 4, 20],
    [ItemID.ex_Ironpowered, 0, 1, 4, 15],
    [ItemID.ex_Goldpowered, 0, 1, 4, 9],
    [ItemID.ex_Aluminumpowered, 0, 1, 4, 10],
    [ItemID.ex_Nickelpowered, 0, 1, 4, 9],
    [ItemID.ex_Platinumpowered, 0, 1, 4, 3],
    [331, 0, 1, 3, 14],
    [289, 0, 1, 3, 7],
    [348, 0, 1, 3, 6],
    [377, 0, 1, 3, 5]
];
var soulsand = [
    [406, 0, 1, 6, 33],
    [372, 0, 1, 2, 5],
    [370, 0, 1, 1, 2]
];
var netherGravel = [
    [ItemID.ex_netherIronbroken, 0, 1, 4, 17],
    [ItemID.ex_netherGoldbroken, 0, 1, 4, 17],
    [ItemID.ex_netherNickelbroken, 0, 1, 4, 10],
    [ItemID.ex_netherPlatinumbroken, 0, 1, 4, 5],
    [ItemID.ex_netherAluminumbroken, 0, 1, 4, 7],
    [ItemID.ex_netherPlatinumbroken, 0, 1, 4, 2]
];
var enderGravel = [
    [ItemID.ex_enderIronbroken, 0, 1, 4, 17],
    [ItemID.ex_enderGoldbroken, 0, 1, 4, 17],
    [ItemID.ex_enderNickelbroken, 0, 1, 4, 10],
    [ItemID.ex_enderPlatinumbroken, 0, 1, 4, 5],
    [ItemID.ex_enderAluminumbroken, 0, 1, 4, 7]
];
var coarsesalt = [
    [ItemID.ex_IronDustSalts, 0, 1, 4, 17],
    [ItemID.ex_GoldDustSalts, 0, 1, 4, 17],
    [ItemID.ex_NickelDustSalts, 0, 1, 4, 10],
    [ItemID.ex_PlatinumDustSalts, 0, 1, 4, 5],
    [ItemID.ex_AluminumDustSalts, 0, 1, 4, 7]
];

var Sieve = {
	sieve: {},
	addSievedBlock: function(id, object) {
		Sieve.sieve[id] = object
	},
	addSieved: function(block, id, data, min, max, chance) {
		if (!this[block]) {
			this[block] = {}
		}
		this[block][id] = {
			data: data,
			dropmin: min,
			dropmax: max,
			chance: chance
		}
	}
};
