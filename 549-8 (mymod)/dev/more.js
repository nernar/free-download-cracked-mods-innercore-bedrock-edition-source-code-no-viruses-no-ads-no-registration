//коробка
IDRegistry.genBlockID("box");
Block.createBlock("box", [
     {name: "box", texture: [["box", 0], ["box", 0], ["box", 0], ["box", 0], ["box", 0], ["box", 0]], inCreative: true}]);
//бутылка
IDRegistry.genItemID("bottle");
Item.createItem("bottle", "bottle", {name: "bottle", meta: 0}, {});
//пыльца
IDRegistry.genItemID("pollen");
Item.createFoodItem("pollen", "pollen", {name: "vat", meta: 0}, {
isTech: false,
stack: 64,
food: 8
});
IDRegistry.genItemID("sigara");
Item.createFoodItem("sigara", "sigareta", {name: "sigareta", meta: 0}, {
isTech: false,
stack: 64,
food: 4
});
var narkos = new CustomBiome("organic_blue")
 // цвет неба
 .setSkyColor(0xFF00FF)
 // цвет травы
 .setGrassColor(0xFF00FF)
 // цвет листвы
 .setFoliageColor(0xFF00FF)
 // поверхностный блок
 // .setCoverBlock(2, 0)
 // слой блоков под поверхностью
 .setSurfaceBlock(3, 0)
 // блок заливки под поверхностным слоем
 .setFillingBlock(1, 0);

Callback.addCallback("GenerateBiomeMap", function(x, z, rand, dimensionId, chunkSeed, worldSeed) {
 (x *= 16, z *= 16);
 // проходка по блокам чанка
 for (var xs = x; xs < x + 16; xs++)
     for (var zs = z; zs < z + 16; zs++)
      // генерация случайного шума на основе сида и текущих координат
      if (GenerationUtils.getPerlinNoise(xs, 0, zs, worldSeed, 0.025, 3) < 0.3)
    // установка биома (любого) на координаты
    World.setBiomeMap(xs, zs, narkos.id);
});
