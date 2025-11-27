/*
┏━┓┏━┓╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋
┃┃┗┛┃┃╋╋╋╋╋╋╋╋╋┃┃╋╋╋╋╋╋╋╋
┃┏┓┏┓┣┳━┓┏━━┳━━┫┗━┳━━┳┓┏┓
┃┃┃┃┃┣┫┏┓┫┃━┫┏━┫┏┓┃┃━┫┗┛┃
┃┃┃┃┃┃┃┃┃┃┃━┫┗━┫┃┃┃┃━┫┃┃┃
┗┛┗┛┗┻┻┛┗┻━━┻━━┻┛┗┻━━┻┻┻┛
by NikuJagajaga
*/

IMPORT("energylib");


const ag = android.graphics;

(function(){
  const down = FileTools.ReadImage(__dir__ + "res/gui/chem_triangle_down.png");
  const matrix = new ag.Matrix();
  matrix.preScale(1, -1);
  const up = new ag.Bitmap.createBitmap(down, 0, 0, 15, 8, matrix, false);
  UI.TextureSource.put("chem_triangle_up", up);
  matrix.postRotate(90);
  const right = new ag.Bitmap.createBitmap(down, 0, 0, 15, 8, matrix, false);
  UI.TextureSource.put("chem_triangle_right", right);
  const back = ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
  const cvs = new ag.Canvas(back);
  const paint = new ag.Paint();
  paint.setColor(ag.Color.BLACK);
  cvs.drawRect(0, 0, 16, 16, paint);
  UI.TextureSource.put("chem_back", back);
})();


Callback.addCallback("PostLoaded", function(){
  const EU = EnergyTypeRegistry.getEnergyType("Eu");
  const RF = EnergyTypeRegistry.getEnergyType("RF");
  if(EU){
    ICRender.getGroup("ic-wire").add(BlockID.decomposer, 0);
    ICRender.getGroup("ic-wire").add(BlockID.synthesiser, -1);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.decomposer, EU);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.synthesiser, EU);
  }
  if(RF){
    ICRender.getGroup("rf-wire").add(BlockID.decomposer, 0);
    ICRender.getGroup("rf-wire").add(BlockID.synthesiser, -1);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.decomposer, RF);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.synthesiser, RF);
  }
  ICRender.getGroup("item-pipe").add(BlockID.decomposer, 0);
  ICRender.getGroup("item-pipe").add(BlockID.synthesiser, -1);
});