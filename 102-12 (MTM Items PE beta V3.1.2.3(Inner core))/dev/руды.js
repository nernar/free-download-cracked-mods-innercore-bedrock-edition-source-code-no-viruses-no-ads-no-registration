//руды премдеты
IDRegistry.genItemID("rybin");
Item.createItem("rybin", "Рубин", {name: "рубин", meta: 0}, {});
IDRegistry.genItemID("sera");
Item.createItem("sera", "Сера", {name: "сера", meta: 0}, {});
IDRegistry.genItemID("pepel");
Item.createItem("pepel", "Пепел", {name: "зола", meta: 0}, {});
IDRegistry.genItemID("nitrat_kaliia");
Item.createItem("nitrat_kaliia", "Калиевая селитра", {name: "нитрат_калия", meta: 0}, {});
//руды блоки
IDRegistry.genBlockID("antratcit");
Block.createBlock("antratcit", [{name: "Антрацитовая руда", texture: [["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0]], inCreative: true}], RYD);
IDRegistry.genBlockID("sernaia_ryda");
Block.createBlock("sernaia_ryda", [{name: "Серная руда", texture: [["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0]], inCreative: true}], RYDA);
IDRegistry.genBlockID("rybinovaia_ryda");
Block.createBlock("rybinovaia_ryda", [{name: "Рубиновая руда", texture: [["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0]], inCreative: true}], BLOCK_TYPE_RYB);
IDRegistry.genBlockID("meteoritovaia_ryyda");
Block.createBlock("meteoritovaia_ryyda", [{name: "Метеоритовая руда", texture: [["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0]], inCreative: true}], BLOCK_TYPE_STAL);
//генерация руд
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genAnthracite) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 50);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.antratcit, 0, 3);
}
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genSulfur) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.sernaia_ryda, 0, 3);
}
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genRuby) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rybinovaia_ryda, 0, 2);
}
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genMeteoriteOre) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 50, 150); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.meteoritovaia_ryyda, 0, 2);
}
}});