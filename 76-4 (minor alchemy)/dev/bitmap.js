const getColor = function(cv, str){
  const increase = (cv % 0x240000 + 1) / 0x2400;
  const decrease = 0x100 - increase;
  let r = g = b = 0x00;
  cv < 0x240000 ? (r = increase) :
  cv < 0x480000 ? (r = decrease, g = increase) :
  cv < 0x6c0000 ? (g = decrease, b = increase) :
  cv < 0x900000 ? (r = increase, b = 0xff) :
  cv < 0xb40000 ? (r = 0xff, g = increase, b = decrease) :
  cv < 0xd80000 ? (r = decrease, g = 0xff, b = increase) :
  cv < 0xfc0000 ? (r = increase, g = b = 0xff) :
  (r = g = b = 0xff);
  if(str){
    return ("0" + (r & 0xff).toString(16)).slice(-2) + ("0" + (g & 0xff).toString(16)).slice(-2) + ("0" + (b & 0xff).toString(16)).slice(-2);
  }
  return (r & 0xff) << 16 | (g & 0xff) << 8 | (b & 0xff);
};

const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
let flag = false;


const genTex = function(type, shaft){
  const ag = android.graphics;
  const temp = ag.BitmapFactory.decodeFile(__dir__ + "res/temp/" + type + ".png");
  let path;
  let bmp;
  let cvs;
  let paint;
  let file;

  for(let i = 29; i--;){
    path = __dir__ + "res/items-opaque/" + type + "/minor_" + type + "_" + i + ".png";
    if(!new java.io.File(path).exists()){
      bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
      cvs = new ag.Canvas(bmp);
      paint = new ag.Paint();
      file = new java.io.File(path);

      paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor("#" + getColor(0x90000 * i + 1, true)), ag.PorterDuff.Mode.MULTIPLY));
      cvs.drawBitmap(temp, 0, 0, paint);

      shaft && cvs.drawBitmap(ag.BitmapFactory.decodeFile(__dir__ + "res/temp/shaft_" + type + ".png"), 0, 0, null);

      file.getParentFile().mkdirs();
      file.createNewFile();
      bmp.compress(ag.Bitmap.CompressFormat.PNG, 100, new java.io.FileOutputStream(path));
      setLoadingTip("[Minor Alchemy]: Generate items textures.");
      flag || ((flag = true) & alert("[Minor Alchemy]: Textures were generated.\nPlease restart InnerCore."));
    }
  }

};


genTex("aec");
genTex("sword", true);
genTex("shovel", true);
genTex("pickaxe", true);
genTex("axe", true);
genTex("hoe", true);