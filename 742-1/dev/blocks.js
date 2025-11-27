/*
// Blocks, Glass Bottle Block

IDRegistry.genBlockID("glass_bottle_block");

Block.createBlock("glass_bottle_block", [{
  name: "Garrafa de Vidro (Bloco)", texture: [["kapok_block", 0]], inCreative: true
}],
  Block.createSpecialType({
    base: 20,
    opaque: false,
    sound: "glass",
    material: 20,
    destroytime: 0.3,
    explosionres: 0.3
  })
);

var params = {
  invertV: false,
  noRebuild: true,
  scale: [16, 16, 16]
}

var mesh = new RenderMesh()

mesh.importFromFile(mod_path_slash+'res/terrain-atlas/Bottle/Bottle.obj', 'obj', params)

mesh.rebuild()

var render = new ICRender.Model();
render.addEntry(mesh);

try {
  print('cau.le BlockID:', BlockID.glass_bottle_block)
} catch (e) {}

try {
  print('cau.le render:', render)
} catch (e) {}
*/

/*
newBlockRenderer.setStaticICRendersetStaticICRender(BlockID.glass_bottle_block, -1, render)
newBlockRenderer.setCustomCollisionShape(BlockID.glass_bottle_block, -1, render)
*/

// Blocks, Kapok Block

newToolAPI.addBlockMaterial("kapok", 1)

IDRegistry.genBlockID("kapok_block");

var color_names = ['White', 'Orange', 'Magenta', 'Light Blue', 'Yellow', 'Lime', 'Pink', 'Gray', 'Light Gray', 'Cyan', 'Purple', 'Blue', 'Brown', 'Green', 'Red', 'Black']

var pt_color_names = ['Branco', 'Laranja', 'Magenta', 'Azul Claro', 'Amarelo', 'Verde Limão', 'Rosa', 'Cinza', 'Cinza Claro', 'Ciano', 'Roxo', 'Azul', 'Marrom', 'Verde', 'Vermelho', 'Preto']

var kapok_blocks = [];
var inutilizable_kapok_blocks = []

for (var i = 0; i < 16; i++) {
  kapok_blocks.push({name: "Bloco de Tufo de Sumaúma {color}".replaceOnce('{color}', pt_color_names[i]), texture: [["kapok_block", i]], inCreative: true})
  inutilizable_kapok_blocks.push({name: "Bloco de Tufo de Sumaúma {color}".replaceOnce('{color}', pt_color_names[i]), texture: [["kapok_block", i]], inCreative: true})
};

Block.createBlock("kapok_block", kapok_blocks,
  Block.createSpecialType({
    base: 35,
    opaque: false,
    sound: "cloth",
    material: 35,
    destroytime: 0.8,
    explosionres: 0.8
  })
);

newToolAPI.registerBlockMaterial(BlockID.kapok_block, "kapok");

// newToolAPI.addToolMaterial('shears', material)

// objectToString.print('addToolMaterial:',newToolAPI.addToolMaterial.toString())

newToolAPI.addToolMaterial('shears', {
  "level": 1,
  "durability": 238,
  "damage": 0,
  "efficiency": 6
})

var materials = ['kapok']

for (var key in Object.keys(materials.toObject())) {
  if (parseInt(key).toString() == key) {} else {
    try {
      delete materials[key];
    } catch (e) {
      // pass
    }
  }
}

function setMaxDamage() {
  return null;
}

// ItemRegistry = newItemRegistry;

newToolAPI.registerTool = newToolAPI.registerTool.toString()

newToolAPI.registerTool = String(newToolAPI.registerTool).split('ItemRegistry.')

newToolAPI.registerTool = newToolAPI.registerTool.join('')

var rTFun;

eval('rTFun = ' + String(newToolAPI.registerTool))

newToolAPI.registerTool = rTFun

// objectToString.print('registerTool:', newToolAPI.registerTool)

try {
  newToolAPI.registerTool(359, 'shears', materials)
} catch (e) {
  print('registerTool error:', e)
}

/*
IDRegistry.genBlockID("shearable_kapok_block");

Block.createBlock("shearable_kapok_block", [
	{name: "Block ".concat(randomInt(1000001, 9999998)), texture: [["shearable_kapok_block", 0]], inCreative: true}],
	Block.createSpecialType({
	  base: 35,
		flammable: true,
		opaque: false,
		sound: "cloth",
		lightopacity: 0,
		lightlevel: 0,
		destroytime: stdt(2),
		explosionres: 0.8
	})
);
*/

this.ToolAPI = null

ToolAPI = newToolAPI

// objectToString.print(Object.keys(Block))

// newToolAPI.registerBlockMaterial(BlockID.shearable_kapok_block, "wool");

var to_print = ['blockMaterials', 'toolMaterials', 'toolData', 'blockData']
/*
to_print.forEach(function(key) {
  print(key+': '.concat(JSON.stringify(ToolAPI[key])) || 'nothing')
})
*/

Object.keys(ToolAPI).forEach(function(key) {
  if (JSON.stringify(to_print).indexOf(key) == -1 && key.indexOf('material') != -1) {
    // print(key.concat(': ', JSON.stringify(ToolAPI[key])))
  }
})

// objectToString.print('getLanguage:', Translation.getLanguage())

/*
destroytime: 0.4,
		explosionres: 0.8
*/