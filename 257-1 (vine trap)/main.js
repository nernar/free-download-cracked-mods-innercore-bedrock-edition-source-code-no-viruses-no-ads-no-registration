IDRegistry.genBlockID("vinetrap");
Block.createBlock("vinetrap", [{name: "Vine Trap", texture: [["vinetrap", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.vinetrap, "plant");
Block.setDestroyTime(BlockID.vinetrap, 0.2);
const render = new ICRender.CollisionShape();
render.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.vinetrap, 0, render);
Block.setShape(BlockID.vinetrap, 0, 15/16, 0, 1, 1, 1, 0);
Recipes.addShaped({id: BlockID.vinetrap}, ["aaa"], ["a", 106, 0]);