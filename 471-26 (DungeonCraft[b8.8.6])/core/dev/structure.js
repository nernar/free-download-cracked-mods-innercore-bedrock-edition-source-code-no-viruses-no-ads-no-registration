let Structure = {biomeList: {winter: [12, 13, 26, 30, 31, 34, 140, 158], mountains: [3, 13, 17, 19, 22, 28, 31, 33, 20, 34, 131, 162, 165], plain: [1, 129], forests: [4, 5, 21, 27, 29, 32, 23, 132, 30, 133, 158, 149, 155, 157, 160, 151, 156, 161], desert: [2, 130], ocean: [0, 24], noOcean: [1, 2, 3, 4, 5, 6, 12, 14, 21, 27, 29, 32, 35, 36, 38, 39, 23, 10, 19, 22, 28, 31, 33, 20, 129, 130, 34, 131, 162, 132, 30, 133, 158, 134, 149, 155, 157, 160, 163, 165, 151, 156, 161, 164, 166, 167], all: []}, registerGeneration: function (type, obj) {
    if (type == "over_world") {
        let stru = new DungeonCore.advanced(obj.name);
        if (obj.prot) {
            stru.setPrototype(obj.prot);
        }
        Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ, random) {
            if (random.nextInt(obj.random) <= 1) {
                let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
                if (obj.biomes.indexOf(BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z)) || obj.biomes.length == 0) {
                    stru.setStructure(coords.x, coords.y, coords.z, BlockSource.getCurrentWorldGenRegion(), {random: random});
                }
            }
        });
    } else {
        if (type == "nether") {
            obj.minY = obj.minY || 50;
            obj.maxY = obj.maxY || 100;
            Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ, random) {
                if (random.nextInt(obj.random) <= 1) {
                    let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), random.nextInt((obj.maxY - obj.minY)) + obj.minY, chunkZ * 16 + random.nextInt(16));
                    stru.setStructure(coords.x, coords.y, coords.z, BlockSource.getCurrentWorldGenRegion(), {random: random});
                }
            });
        } else {
            if (type == "end") {
                let stru = new DungeonCore.advanced(obj.name);
                if (obj.prot) {
                    stru.setPrototype(obj.prot);
                }
                Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ, random) {
                    if (random.nextInt(obj.random) <= 1) {
                        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
                        if (World.getBlockID(coords.x, coords.y, coords.z) != 0 && ((coords.x >= 1000 || coords.x <= -1000) || (coords.z >= 1000 || coords.z <= -1000))) {
                            stru.setStructure(coords.x, coords.y, coords.z, BlockSource.getCurrentWorldGenRegion(), {random: random});
                        }
                    }
                });
            }
        }
    }
}};
var StructureGrobnisa = new DungeonCore.advanced("grobnisa");
StructureGrobnisa.setPrototype({setBlock: function (x, y, z, id, data, identifier, blockSource, state, packet) {
    if (Math.random() <= 0.5) {
        switch (id) {
          case 4:
            blockSource.setBlock(x, y, z, 48, 0);
            break;
          case 98:
            blockSource.setBlock(x, y, z, 98, 1);
            break;
          case 139:
            blockSource.setBlock(x, y, z, 139, 8);
            break;
        }
    }
}});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2300) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        StructureGrobnisa.setStructure(coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x, coords.y + 2, coords.z - 2);
        Item2.fillChest(coords.x, coords.y + 2, coords.z + 3);
        Item2.fillChest(coords.x + 2, coords.y + 2, coords.z - 2);
        Item2.fillChest(coords.x + 4, coords.y + 2, coords.z + 3);
    }
});
var StructureGrobnisa2 = new DungeonCore.advanced("grobnisa2");
StructureGrobnisa2.setPrototype({isSetBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    return false;
}, setBlock: function (x, y, z, id, data, identifier, blockSource, state, packet) {
    if (Math.random() <= 0.5) {
        switch (id) {
          case 4:
            blockSource.setBlock(x, y, z, 48, 0);
            return;
            break;
          case 98:
            blockSource.setBlock(x, y, z, 98, 1);
            return;
            break;
          case 139:
            blockSource.setBlock(x, y, z, 139, 8);
            return;
            break;
        }
    }
    blockSource.setBlock(x, y, z, id, data);
}});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2825) <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        StructureGrobnisa2.setStructure(coords.x, coords.y, coords.z);
        Item6.fillChest(coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x + 3, coords.y + 4, coords.z - 3);
        Item2.fillChest(coords.x - 3, coords.y + 4, coords.z - 3);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2600) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("structure", coords.x, coords.y + 1, coords.z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2350) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("bawna", coords.x, coords.y, coords.z);
        Item3.fillChest(coords.x, coords.y + 1, coords.z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(1850) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("ruin", coords.x, coords.y, coords.z);
        Item3.fillChest(coords.x - 1, coords.y + 1, coords.z + 1);
        Item2.fillChest(coords.x + 1, coords.y + 10, coords.z);
    }
});
var StructurePiramid = new DungeonCore.advanced("piramida");
StructurePiramid.setPrototype({setBlock: function (x, y, z, id, data, identifier, blockSource, state, packet) {
    if (Math.random() <= 0.5) {
        switch (id) {
          case 4:
            blockSource.setBlock(x, y, z, 48, 0);
            break;
        }
    }
}});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(3500) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        StructurePiramid.setStructure(coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x + 3, coords.y + 1, coords.z + 3);
        Item2.fillChest(coords.x + 3, coords.y + 1, coords.z - 3);
        Item2.fillChest(coords.x - 3, coords.y + 1, coords.z + 3);
        Item2.fillChest(coords.x - 3, coords.y + 1, coords.z - 3);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(1500) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("chest)", coords.x, coords.y, coords.z);
        Item5.fillChest(coords.x, coords.y + 1, coords.z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(1500) <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        DungeonCore.setStructure("dc2_sektant", coords.x, coords.y, coords.z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(1000) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("dc2_xram", coords.x, coords.y, coords.z);
        Item3.fillChest(coords.x, coords.y + 1, coords.z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(1500) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("dc2_xram2", coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x, coords.y + 1, coords.z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2000) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("teleport_rai", coords.x, coords.y, coords.z);
        Item3.fillChest(coords.x, coords.y, coords.z);
    }
});
function isSetBlock(x, y, z, id, data, identifier, region, state, packet) {
    if (id == 4) {
        switch (packet.random.nextInt(2)) {
          case 1:
            region.setBlock(x, y, z, 48, 0);
            return false;
            break;
          case 2:
            region.setBlock(x, y, z, 4, 0);
            return false;
            break;
        }
    }
    if (id == 44) {
        switch (packet.random.nextInt(2)) {
          case 1:
            region.setBlock(x, y, z, 44, 3);
            return false;
            break;
          case 2:
            region.setBlock(x, y, z, 139, 1);
            return false;
            break;
        }
    }
    return true;
}
let GuardianTempleGl = new DungeonCore.advanced("guardian_temple.gl");
let GuardianTempleDescent = new DungeonCore.advanced("guardian_temple.descent");
let GuardianTemplePassageX = new DungeonCore.advanced("guardian_temple.passageX");
let GuardianTemplePassageZ = new DungeonCore.advanced("guardian_temple.passageZ");
let GuardianTempleRoom1 = new DungeonCore.advanced("guardian_temple.room1");
let roomchange = 60;
function genBlock(x, y, z, region, random) {
    if (region.getBlockId(x, y + 1, z) == 54) {
        let cont = World.getContainer(x, y, z, region);
        for (let i = 0; i < cont.getSize(); i++) {
            cont.clearSlot(i);
        }
    }
    switch (random.nextInt(3)) {
      case 1:
        region.setBlock(x, y + 1, z, 54);
        Item6.fillChest(x, y + 1, z, region);
        break;
      case 2:
        region.setBlock(x, y + 1, z, BlockID.manaStorage);
        break;
      case 3:
        break;
    }
}
GuardianTempleGl.setPrototype({isSetBlock: isSetBlock, after: function (x, y, z, region, packet) {
    packet.room = packet.random.nextInt(16) + 6;
    packet.now = 0;
}, before: function (x, y, z, region, packet) {
    region.setBlock(x, y + 1, z, 54);
    Item6.fillChest(x, y + 1, z, region);
    if (packet.random.nextInt(100) <= 60) {
        GuardianTempleDescent.setStructure(x, y - 15, z, region, packet);
    }
}});
GuardianTemplePassageX.setPrototype({isSetBlock: isSetBlock, before: function (x, y, z, region, packet) {
    region.spawnEntity(x, y + 1, z, "dc:ancient_guardian");
}});
GuardianTemplePassageZ.setPrototype({isSetBlock: isSetBlock, before: function (x, y, z, region, packet) {
    region.spawnEntity(x, y + 1, z, "dc:ancient_guardian");
}});
GuardianTempleDescent.setPrototype({isSetBlock: isSetBlock, before: function (x, y, z, region, packet) {
    if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
        packet.now++;
        GuardianTemplePassageX.setStructure(x + 3, y, z, region, packet);
        GuardianTempleRoom1.setStructure(x + 17, y, z, region, packet);
    } else {
        if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
            packet.now++;
            GuardianTemplePassageX.setStructure(x - 12, y, z, region, packet);
            GuardianTempleRoom1.setStructure(x - 17, y, z, region, packet);
        } else {
            if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
                packet.now++;
                GuardianTemplePassageZ.setStructure(x, y, z + 3, region, packet);
                GuardianTempleRoom1.setStructure(x, y, z + 17, region, packet);
            } else {
                if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
                    packet.now++;
                    GuardianTemplePassageZ.setStructure(x, y, z - 12, region, packet);
                    GuardianTempleRoom1.setStructure(x, y, z - 17, region, packet);
                }
            }
        }
    }
}});
GuardianTempleRoom1.setPrototype({isSetBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    if (id == 4) {
        switch (packet.random.nextInt(2)) {
          case 1:
            region.setBlock(x, y, z, 48, 0);
            return false;
            break;
          case 2:
            region.setBlock(x, y, z, 4, 0);
            return false;
            break;
        }
    }
    return true;
}, before: function (x, y, z, region, packet) {
    genBlock(x, y, z, region, packet.random);
    if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
        packet.now++;
        GuardianTemplePassageX.setStructure(x + 5, y, z, region, packet);
        GuardianTempleRoom1.setStructure(x + 19, y, z, region, packet);
    } else {
        if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
            packet.now++;
            GuardianTemplePassageX.setStructure(x - 14, y, z, region, packet);
            GuardianTempleRoom1.setStructure(x - 19, y, z, region, packet);
        } else {
            if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
                packet.now++;
                GuardianTemplePassageZ.setStructure(x, y, z + 5, region, packet);
                GuardianTempleRoom1.setStructure(x, y, z + 19, region, packet);
            } else {
                if (packet.random.nextInt(100) <= roomchange && packet.now <= packet.room) {
                    packet.now++;
                    GuardianTemplePassageZ.setStructure(x, y, z - 14, region, packet);
                    GuardianTempleRoom1.setStructure(x, y, z - 19, region, packet);
                }
            }
        }
    }
}});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2000) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        GuardianTempleGl.setStructure(coords.x, coords.y, coords.z, BlockSource.getCurrentWorldGenRegion(), {random: random});
    }
});
let DesertTreasury = new DungeonCore.advanced("desert_treasury");
DesertTreasury.setPrototype({setBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    Utility.setSpawnerEntity(x, y, z, "minecraft:pillager", region);
}});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2000) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        if (World.getBlockID(coords.x, coords.y, coords.z) == 12) {
            DesertTreasury.setStructure(coords.x, coords.y, coords.z);
            GeneraterDesert.fillChest(coords.x, coords.y + 1, coords.z);
        }
    }
});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2500) <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        DungeonCore.setStructure("bawna_ada", coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x, coords.y + 7, coords.z);
        Item2.fillChest(coords.x - 2, coords.y + 11, coords.z + 2);
        Item2.fillChest(coords.x + 2, coords.y + 11, coords.z + 2);
        Item2.fillChest(coords.x - 2, coords.y + 11, coords.z - 2);
        Item2.fillChest(coords.x + 2, coords.y + 11, coords.z - 2);
    }
});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2000) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("cokrovewnisa", coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x, coords.y + 2, coords.z);
    }
});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(2000) <= 1) {
        let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
        DungeonCore.setStructure("labirint_ada", coords.x, coords.y, coords.z);
        Item2.fillChest(coords.x - 5, coords.y + 1, coords.z - 2);
        Item2.fillChest(coords.x - 4, coords.y + 1, coords.z);
        Item2.fillChest(coords.x + 3, coords.y + 1, coords.z + 4);
        Item2.fillChest(coords.x + 4, coords.y + 1, coords.z - 5);
    }
});
let NetherPiramida = new DungeonCore.advanced("piramida_ada");
NetherPiramida.setPrototype({isSetBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    return false;
}, setBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    region.setBlock(x, y, z, id, data);
}});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ, random, id) {
    if (random.nextInt(500) <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 87) {
            NetherPiramida.setStructure(coords.x, coords.y, coords.z);
            Item2.fillChest(coords.x, coords.y, coords.z);
        }
    }
});
let NetherChest = new DungeonCore.advanced("nether_chest");
NetherChest.setPrototype({setBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    Utility.setSpawnerEntity(x, y, z, "minecraft:wither_skeleton", region);
}});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ, random) {
    if (random.nextInt(800) <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y, coords.z) == 87) {
            NetherChest.setStructure(coords.x, coords.y, coords.z);
            Item2.fillChest(coords.x, coords.y + 1, coords.z);
        }
    }
});
Structure.registerGeneration("end", {name: "cokroviwnisa_end", random: 1000, prot: {before: function (x, y, z, region, packet) {
    Item2.fillChest(x, y + 1, z, region);
}}});
Structure.registerGeneration("end", {name: "name", random: 1000, prot: {before: function (x, y, z, region, packet) {
    Item2.fillChest(x, y + 1, z, region);
}}});
Structure.registerGeneration("end", {name: "ruin_end", random: 1000, prot: {isSetBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    if (id == 206) {
        return false;
        region.setBlock(x, y, z, 121, 0);
    } else {
        return true;
    }
}}});
let EndBawna = new DungeonCore.advanced("end_gl_2");
let EndRoom = new DungeonCore.advanced("end_room");
EndBawna.setPrototype({before: function (x, y, z, region, packet) {
    EndRoom.setStructure(x + 10, y + packet.random.nextInt(3) + 1, z, region, packet);
    if (packet.random.nextInt(100) <= 50) {
        EndRoom.setStructure(x - 10, y + packet.random.nextInt(3) + 1, z, region, packet);
    }
    if (packet.random.nextInt(100) <= 50) {
        EndRoom.setStructure(x, y + packet.random.nextInt(3) + 1, z + 10, region, packet);
    }
    if (packet.random.nextInt(100) <= 50) {
        EndRoom.setStructure(x, y + packet.random.nextInt(3) + 1, z - 10, region, packet);
    }
}});
EndRoom.setPrototype({setBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    Utility.setSpawnerEntity(x, y, z, "minecraft:shulker", region);
    if (id == 54) {
        GeneraterEnd.fillChest(x, y, z);
    }
}});
Structure.registerGeneration("end", {name: "end_gl", random: 2000, prot: {setBlock: function (x, y, z, id, data, identifier, region, state, packet) {
    Utility.setSpawnerEntity(x, y, z, "minecraft:shulker", region);
}, before: function (x, y, z, region, packet) {
    EndBawna.setStructure(x, y + packet.random.nextInt(10) + 9, z, region, packet);
}}});

