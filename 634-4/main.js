/*
*ТЕКСТУРКИ НЕ МОИ НО КОД МОЙ ТАК ЧТО
*НЕ ДОКАПЫВАЙТЕСЬ
*————————————————
*НАСЧЁТ НЕБРЕЖНОГО КОДА, ВЫ ВООБЩЕ
*В ЧУЖОЙ КОД ЛЕЗИТЕ И ПОТОМ ЕЩЕ
*ГОВОРИТЕ ТИПА КОД КРИВОЙ! И ВООБЩЕ
*ЭТО МОЙ МОД ТАКЧТО УЙДИТЕ ОТСЮДА!
*/


IDRegistry.genBlockID("elevator");
Block.createBlock("elevator", [{name: "Elevator", texture: [["elevator", 0]], inCreative: true}]);
Translation.addTranslation("Elevator", {"ru": "Лифт"});
IDRegistry.genBlockID("megadiamond");
Block.createBlock("megadiamond", [{name: "Compressed diamond block", texture: [["mega_diamond", 0]], inCreative: true}]);
Translation.addTranslation("Compressed diamond block", {"ru": "Сжатый алмазный блок"});

Recipes.addShaped({id: BlockID.elevator, count: 1, data: 0}, 
["xbx","bab","xbx"],
['a', 426, 0, 'x', 265, 0, 'b', BlockID.megadiamond, 0]
);
Recipes.addShaped({id: BlockID.megadiamond, count: 1, data: 0}, 
["aaa","aaa","aaa"],
['a', 57, 0]
);

TileEntity.registerPrototype(BlockID.elevator, {
redstone: function(params){
if(params.power > 2){
Commands.exec("/effect @a levitation 2 " + params.power+ " true");
return false;
}}});