var entitySummonedZombie = new MobHelper.Creature(20, {
    HP: 20,
    IDm: "summonedZombie",
    Renderr: new Render(3),
    Skin: "entity/zombie.png",
    Name: "Summoned Zombie",
    Hitbox: { w: 0.8, h: 1.4 },
    Loot: [{ id: 367, count: 1, data: 0 }],
    SpawnChance: 0.0
});