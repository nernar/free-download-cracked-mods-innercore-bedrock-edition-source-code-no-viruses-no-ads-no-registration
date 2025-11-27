
  
  var ST = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 1,
    opaque: true
});

var MaSH = Block.createSpecialType({
    base: 1,
    destroytime: 3
});


IDRegistry.genBlockID("ironfurnace");
Block.createBlockWithRotation("ironfurnace", [{name: "???????? ????", texture: [["42", 0], ["42", 0], ["42", 0], ["ironfurnacerenderfront", 0], ["42", 0], ["42", 0]], inCreative: true}], MaSH);
ToolAPI.registerBlockMaterial(BlockID.ironfurnace, "stone");

Recipes.addShaped({id: BlockID.ironfurnace, count: 1, data: 0}, [ "aba", "aca", "ada"], ['a', ItemID.ironplate, 0, 'b', ItemID.mcfurnace, 0, 'c', 173, 0, 'd', ItemID.mcsoed, 0]);


  
  




  




































