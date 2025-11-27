LIBRARY({name: "DungeonCraftAPI", version: 1, api: "CoreEngine"});
var dungeon = {cube3x3: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube3x3Empty: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube3x3WallZ: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z - 1, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube3x3WallX: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y - 1, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y + 1, posZ.z, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube5x5: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube5x5Empty: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x + 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube6x6: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}, cube6x6Empty: function (reg) {
    var posX = reg.coordsX;
    var posY = reg.coordsY;
    var posZ = reg.coordsZ;
    var kokni = reg.plusY;
    var kokni1 = reg.Y;
    if (kokni == true) {
        posY.y += kokni1;
    }
    if (kokni == false) {
        posY.y -= kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x += kokni3;
    }
    if (kokni2 == false) {
        posX.x -= kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z += kokni5;
    }
    if (kokni4 == false) {
        posZ.z -= kokni5;
    }
    World.setBlock(posX.x + 3, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 3, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z + 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z + 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z - 1, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z - 2, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 3, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z + 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 1, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 1, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x + 2, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    World.setBlock(posX.x - 2, posY.y, posZ.z - 3, reg.cubeID, reg.cubeData);
    if (kokni == true) {
        posY.y -= kokni1;
    }
    if (kokni == false) {
        posY.y += kokni1;
    }
    var kokni2 = reg.plusX;
    var kokni3 = reg.X;
    if (kokni2 == true) {
        posX.x -= kokni3;
    }
    if (kokni2 == false) {
        posX.x += kokni3;
    }
    var kokni4 = reg.plusZ;
    var kokni5 = reg.Z;
    if (kokni4 == true) {
        posZ.z -= kokni5;
    }
    if (kokni4 == false) {
        posZ.z += kokni5;
    }
}};
EXPORT("dungeon", dungeon);

