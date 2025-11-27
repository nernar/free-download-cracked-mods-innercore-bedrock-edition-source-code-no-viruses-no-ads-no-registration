function buildShuttle(x, y, z) {
    World.setBlock(x - 2, y - 2, z - 1, GLOWSTONE_ID, 0);
    World.setBlock(x - 2, y - 2, z, GLOWSTONE_ID, 0);
    World.setBlock(x - 1, y - 2, z - 1, IRON_ID, 0);
    World.setBlock(x - 1, y - 2, z, IRON_ID, 0);
    World.setBlock(x, y - 2, z - 1, IRON_ID, 0);
    World.setBlock(x, y - 2, z, IRON_ID, 0);
    World.setBlock(x + 1, y - 2, z - 1, IRON_ID, 0);
    World.setBlock(x + 1, y - 2, z, IRON_ID, 0);
    World.setBlock(x + 2, y - 2, z - 1, GLOWSTONE_ID, 0);
    World.setBlock(x + 2, y - 2, z, GLOWSTONE_ID, 0);
    World.setBlock(x - 2, y - 1, z - 1, IRON_ID, 0);
    World.setBlock(x - 2, y - 1, z, IRON_ID, 0);
    World.setBlock(x - 1, y - 1, z - 1, IRON_ID, 0);
    World.setBlock(x - 1, y - 1, z, IRON_ID, 0);
    World.setBlock(x, y - 1, z - 1, OBSIDIAN_ID, 0);
    World.setBlock(x, y - 1, z, IRON_ID, 0);
    World.setBlock(x + 1, y - 1, z - 1, IRON_ID, 0);
    World.setBlock(x + 1, y - 1, z, IRON_ID, 0);
    World.setBlock(x + 2, y - 1, z - 1, IRON_ID, 0);
    World.setBlock(x + 2, y - 1, z, IRON_ID, 0);
    World.setBlock(x - 1, y, z - 1, IRON_ID, 0);
    World.setBlock(x - 1, y, z, IRON_ID, 0);
    World.setBlock(x + 1, y, z - 1, IRON_ID, 0);
    World.setBlock(x + 1, y, z, IRON_ID, 0);
    World.setBlock(x, y, z - 1, OBSIDIAN_ID, 0);
    World.setBlock(x, y, z, BlockID.cockpit, 0);
    World.setBlock(x - 1, y + 1, z - 1, IRON_ID, 0);
    World.setBlock(x + 1, y + 1, z - 1, IRON_ID, 0);
    World.setBlock(x, y + 1, z - 1, OBSIDIAN_ID, 0);
    World.setBlock(x, y + 1, z, GLASS_ID, 0);
    World.setBlock(x - 1, y + 2, z - 1, IRON_ID, 0);
    World.setBlock(x + 1, y + 2, z - 1, IRON_ID, 0);
    World.setBlock(x, y + 2, z - 1, OBSIDIAN_ID, 0);
    World.setBlock(x, y + 2, z, GLASS_ID, 0);
    World.setBlock(x, y + 3, z - 1, IRON_ID, 0);
}

