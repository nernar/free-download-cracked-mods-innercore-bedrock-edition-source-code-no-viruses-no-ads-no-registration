IDRegistry.genBlockID("magma");
Block.createBlock("magma", [{name: "Magma block", texture: [["magma", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.magma, "stone");
Block.setDestroyLevel("magma", 1);

