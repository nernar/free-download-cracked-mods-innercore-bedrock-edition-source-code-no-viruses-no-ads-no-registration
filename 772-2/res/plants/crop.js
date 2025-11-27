
//food
fuctionsNature.setFood("bean", "bean", "bean", 3)

fuctionsNature.setFood("eggplant", "eggplant", "eggplant", 5)

fuctionsNature.setFood("cucumber", "cucumber", "cucumber", 4)

fuctionsNature.setFood("tomato", "tomato", "tomato", 4)

fuctionsNature.setFood("wintersquash", "wintersquash", "wintersquash", 6)

fuctionsNature.setFood("zucchini", "zucchini", "zucchini", 5)

fuctionsNature.setFood("okra", "okra", "okra", 3)

fuctionsNature.setFood("pineapple", "pineapple", "pineapple", 6)

fuctionsNature.setFood("cauliflower", "cauliflower", "cauliflower", 5)
//sed

fuctionsNature.setSeed("beanseed", "bean seed", "beanseed", "bean_crop", { 60: true })

fuctionsNature.setSeed("eggplantseed", "eggplant seed", "eggplantseed", "eggplant_crop", { 60: true })

fuctionsNature.setSeed("cucumberseed", "cucumber seed", "cucumberseed", "cucumber_crop", { 60: true })

fuctionsNature.setSeed("tomatoseed", "tomato seed", "tomatoseed", "tomato_crop", { 60: true })

fuctionsNature.setSeed("wintersquashseed", "wintersquash seed", "wintersquashseed", "wintersquash_crop", { 60: true })

fuctionsNature.setSeed("zucchiniseed", "zucchini seed", "zucchiniseed", "zucchini_crop", { 60: true })

fuctionsNature.setSeed("okraseed", "okra seed", "okraseed", "okra_crop", { 60: true })

fuctionsNature.setSeed("pineappleseed", "pineapple seed", "pineappleseed", "pineapple_crop", { 60: true })

fuctionsNature.setSeed("cauliflowerseed", "cauliflower seed", "cauliflowerseed", "cauliflower_crop", { 60: true })


//craft 
fuctionsNature.setCraftSeed("beanseed", ItemID.bean)

fuctionsNature.setCraftSeed("eggplantseed", ItemID.eggplant)

fuctionsNature.setCraftSeed("cucumberseed", ItemID.cucumber)

fuctionsNature.setCraftSeed("tomatoseed", ItemID.tomato)

fuctionsNature.setCraftSeed("wintersquashseed", ItemID.wintersquash)

fuctionsNature.setCraftSeed("zucchiniseed", ItemID.zucchini)

fuctionsNature.setCraftSeed("okraseed", ItemID.okra)

fuctionsNature.setCraftSeed("pineappleseed", ItemID.pineapple)

fuctionsNature.setCraftSeed("cauliflowerseed", ItemID.cauliflower)
//crop
PlantsBlock.setBlockCrop("bamboCrop", "bambo Crop", "bambooshootcrop", 0.1, { 2: true }, 4, { id: BlockID.bamboCrop, data: 0 }, { id: 418, data: 0 }, true)

PlantsBlock.setCropClick("bean_crop", "bean_crop", "beancrop", 0.2, { id: ItemID.beanseed, data: 0 }, { id: ItemID.bean, data: 0, amount: 5, random: true }, 5, { 60: true }, 1, debug)

PlantsBlock.setCropClick("eggplant_crop", "eggplant_crop", "eggplantcrop", 0.2, { id: ItemID.eggplantseed, data: 0 }, { id: ItemID.eggplant, data: 0, amount: 4, random: true }, 6, { 60: true }, 1, debug)

PlantsBlock.setCropClick("cucumber_crop", "cucumber_crop", "cucumbercrop", 0.2, { id: ItemID.cucumberseed, data: 0 }, { id: ItemID.cucumber, data: 0, amount: 1, random: false }, 4, { 60: true }, 1, debug)

PlantsBlock.setCropClick("tomato_crop", "tomato_crop", "tomatocrop", 0.2, { id: ItemID.tomatoseed, data: 0 }, { id: ItemID.tomato, data: 0, amount: 4, random: true }, 6, { 60: true }, 1, debug)

PlantsBlock.setCropClick("wintersquash_crop", "wintersquash_crop", "wintersquashcrop", 0.2, { id: ItemID.wintersquashseed, data: 0 }, { id: ItemID.wintersquash, data: 0, amount: 1, random: false }, 4, { 60: true }, 1, debug)

PlantsBlock.setCropClick("zucchini_crop", "zucchini_crop", "zucchinicrop", 0.2, { id: ItemID.zucchiniseed, data: 0 }, { id: ItemID.zucchini, data: 0, amount: 1, random: false }, 4, { 60: true }, 1, debug)

PlantsBlock.setCropClick("okra_crop", "okra_crop", "okracrop", 0.2, { id: ItemID.okraseed, data: 0 }, { id: ItemID.okra, data: 0, amount: 4, random: true }, 6, { 60: true }, 1, debug)

PlantsBlock.setCropClick("pineapple_crop", "pineapple_crop", "pineapplecrop", 0.2, { id: ItemID.pineappleseed, data: 0 }, { id: ItemID.pineapple, data: 0, amount: 1, random: false }, 7, { 60: true }, 2, debug)

PlantsBlock.setCropClick("cauliflower_crop", "cauliflower_crop", "cauliflowercrop", 0.2, { id: ItemID.cauliflower, data: 0 }, { id: ItemID.cauliflowerseed, data: 0, amount: 1, random: false }, 7, { 60: true }, 1, debug)


//drops
fuctionsNature.setGardenBlock("ganderBlock1","garden1",debug,{2:true})

fuctionsNature.setGardenBlock("ganderBlock2","garden2",debug,{2:true})

fuctionsNature.setGardenBlock("ganderBlock3","garden3",debug,{2:true})

//generation
fuctionsNature.setGenerationBerry({
  7: 10,
  3: 1
}, { 2: true }, 90, "bamboCrop", 1)

fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([27,155,28,156,29,157,31,5,133,19,32,33,160,161,132],10),{2:true},500,"ganderBlock1",4)

fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([35,163,36,164,1,128,129,3,131],10),{2:true},500,"ganderBlock2",4)

fuctionsNature.setGenerationBerry(fuctionsNature.setBiomes([21,149,23,151,22],10),{2:true},500,"ganderBlock3",4)
Callback.addCallback("DestroyBlock", function(coords, block, player) {
  let blockDrop = { 2: true, 31: true, 175: true }
  if (blockDrop[block.id] && Math.random() < 0.1) {
    let drop = fuctionsNature.getDropsSeeds()
    World.drop(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, drop[Math.floor(Math.random() * drop.length)], Math.floor(Math.random() * 3), 0);
  }
});