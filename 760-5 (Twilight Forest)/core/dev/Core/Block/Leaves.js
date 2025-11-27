IDRegistry.genBlockID("time_leaves");
Block.createBlock("time_leaves", [{
	name: "Time Leaves",
	texture: [["time_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("mining_leaves");
Block.createBlock("mining_leaves", [{
	name: "Mining Leaves",
	texture: [["mining_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("sorting_leaves");
Block.createBlock("sorting_leaves", [{
	name: "Sorting Leaves",
	texture: [["sorting_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("transformation_leaves");
Block.createBlock("transformation_leaves", [{
	name: "Transformation Leaves",
	texture: [["transformation_leaves", 0]],
	inCreative: true
}], BLOCK_TYPE_LEAVES);



/*
const time_leaves = new ICRender.CollisionShape();
time_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.time_leaves, 0, time_leaves);
Block.setShape(BlockID.time_leaves, 0, 0, 0, 1, 1/16, 1, 0);

const mining_leaves = new ICRender.CollisionShape();
mining_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mining_leaves, 0, mining_leaves);
Block.setShape(BlockID.mining_leaves, 0, 0, 0, 1, 1/16, 1, 0);

const sorting_leaves = new ICRender.CollisionShape();
sorting_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.sorting_leaves, 0, sorting_leaves);
Block.setShape(BlockID.sorting_leaves, 0, 0, 0, 1, 1/16, 1, 0);

const transformation_leaves = new ICRender.CollisionShape();
transformation_leaves.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.transformation_leaves, 0, transformation_leaves);
Block.setShape(BlockID.transformation_leaves, 0, 0, 0, 1, 1/16, 1, 0);
*/

