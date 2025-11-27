//dependencies: palamod, paladium-smeltery\\

//LumberJack Job\\
const regWoodMachine = function(id, name, tex, meta, stairs, block, data){
  id = "Wood " + id;

IDRegistry.genBlockID(id);
Block.createBlockWithRotation(id, [{name: "Wood " + name, texture: [[tex, 0]], inCreative: true}]);


  let i = 0;

  const render = [];
  const group = [];

  for(i = 4; i--;){
    render[i] = new ICRender.Model();
    group[i] = ICRender.getGroup("Wood" + i);
    group[i].add(BlockID[id], i);
  }

  const model = [];
  let mesh;

  for(i = 12; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture(tex, meta);
    mesh.importFromFile(__dir__ + "LumberJack/model/" + i + ".obj", "obj", null);
    model[i] = new BlockRenderer.Model(mesh);
  }

  render[0].addEntry(model[0]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true),
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true)
  ));
  render[0].addEntry(model[4]).asCondition(0, 0, -1, group[2], 0);
  render[0].addEntry(model[7]).asCondition(0, 0, -1, group[3], 0);
  render[0].addEntry(model[8]).asCondition(0, 0, 1, group[2], 0);
  render[0].addEntry(model[11]).asCondition(0, 0, 1, group[3], 0);

  render[1].addEntry(model[1]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true),
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true)
  ));
  render[1].addEntry(model[5]).asCondition(0, 0, 1, group[2], 0);
  render[1].addEntry(model[6]).asCondition(0, 0, 1, group[3], 0);
  render[1].addEntry(model[9]).asCondition(0, 0, -1, group[2], 0);
  render[1].addEntry(model[10]).asCondition(0, 0, -1, group[3], 0);

  render[2].addEntry(model[2]).setCondition(ICRender.AND(
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true),
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true)
  ));
  render[2].addEntry(model[4]).asCondition(-1, 0, 0, group[0], 0);
  render[2].addEntry(model[5]).asCondition(-1, 0, 0, group[1], 0);
  render[2].addEntry(model[8]).asCondition(1, 0, 0, group[0], 0);
  render[2].addEntry(model[9]).asCondition(1, 0, 0, group[1], 0);

  render[3].addEntry(model[3]).setCondition(ICRender.AND(
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true),
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true)
  ));
  render[3].addEntry(model[7]).asCondition(1, 0, 0, group[0], 0);
  render[3].addEntry(model[6]).asCondition(1, 0, 0, group[1], 0);
  render[3].addEntry(model[11]).asCondition(-1, 0, 0, group[0], 0);
  render[3].addEntry(model[10]).asCondition(-1, 0, 0, group[1], 0);

  for(i = 4; i--;){
    BlockRenderer.setStaticICRender(BlockID[id], i, render[i]);
  }

}

regWoodMachine("Machine", "Machine", "Machine", 0, 53, 5, 0);

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	opaque: true,
	lightlevel:15,
    lightopacity: 0 
});

IDRegistry.genBlockID("SpecialWood1");
Block.createBlock("SpecialWood1", [{name: "Special Wood 1", texture: [["GlowWoodTop", 0], ["GlowWoodTop", 0], ["GlowWoodSide", 0], ["GlowWoodSide", 0], ["GlowWoodSide", 0], ["GlowWoodSide", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);

//levels\\

var LumberJack = 0;
var LumberJackLevel = 0;
var Farmer = 0;
var FarmerLevel = 0;

Callback.addCallback("DestroyBlock", function(pos, block, item){
if (block.id == 59) {
    Farmer += 5;
 Game.tipMessage("you won 5 xp for farmer job [xp: " +Farmer +"]");
    }
});
        if(Farmer === 10){
        alert('test');
        }