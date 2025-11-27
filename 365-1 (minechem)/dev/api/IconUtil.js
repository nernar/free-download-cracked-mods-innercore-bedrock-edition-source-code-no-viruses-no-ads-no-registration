const IconUtil = {

  charWidth: {
    73: 4,
    102: 5,
    105: 2,
    107: 5,
    108: 3,
    116: 4
  },

  color: {
    darkblue: "#0000ff",
    blue: "#0080ff",
    lightblue: "#00ffff",
    orange: "#ff7f00",
    yellow: "#ffff00",
    pink: "#ff00ff",
    red: "#ff0000",
    green: "#00ff00",
    bluegreen: "#00ff7f",
    lightgreen: "#85ff00"
  },

  bitmap: {
    ascii: FileTools.ReadImage(__dir__ + "res/material/ascii.png"),
    tube1: FileTools.ReadImage(__dir__ + "res/material/tube1.png"),
    tube2: FileTools.ReadImage(__dir__ + "res/material/tube2.png"),
    solid: FileTools.ReadImage(__dir__ + "res/material/solid.png"),
    liquid: FileTools.ReadImage(__dir__ + "res/material/liquid.png"),
    gas: FileTools.ReadImage(__dir__ + "res/material/gas.png"),
    molecule1: FileTools.ReadImage(__dir__ + "res/material/molecule1.png"),
    molecule2: FileTools.ReadImage(__dir__ + "res/material/molecule2.png")
  },

  genElement: function(symbol, color, type){
    const path = __dir__ + "res/items-opaque/element/element_" + symbol + ".png";
    if(FileTools.isExists(path)){
      return;
    }
    const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
    const cvs = new ag.Canvas(bmp);
    const paint = new ag.Paint();
    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor(this.color[color]), ag.PorterDuff.Mode.SRC_IN));
    cvs.drawBitmap(this.bitmap[type], 0, 0, paint);
    cvs.drawBitmap(this.bitmap.tube1, 0, 0, null);
    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor("black"), ag.PorterDuff.Mode.SRC_IN));
    let code = x = y = pos = 0;
    let rect;
    for(let i = 0; i < symbol.length; i++){
      code = symbol.charCodeAt(i);
      x = (code & 15) * 8;
      y = (code / 16 | 0) * 8;
      rect = new ag.Rect(x, y, x + 8, y + 8);
      cvs.drawBitmap(this.bitmap.ascii, rect, new ag.Rect(pos, 1, pos + 8, 9), paint);
      cvs.drawBitmap(this.bitmap.ascii, rect, new ag.Rect(pos, 0, pos + 8, 8), null);
      pos += this.charWidth[code] || 6;
    }
    FileTools.WriteImage(path, bmp);
  },

  genMolecule: function(key, colors){
    const path = __dir__ + "res/items-opaque/molecule/molecule_" + key + ".png";
    if(FileTools.isExists(path)){
      return;
    }
    const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
    const cvs = new ag.Canvas(bmp);
    const paint = new ag.Paint();
    colors || (colors = this.getColors(key));

    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor(colors[0]), ag.PorterDuff.Mode.SRC_IN));
    cvs.drawBitmap(this.bitmap.molecule1, 0, 0, paint);
    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor(colors[1]), ag.PorterDuff.Mode.SRC_IN));
    cvs.drawBitmap(this.bitmap.molecule2, 0, 0, paint);
    cvs.drawBitmap(this.bitmap.tube2, 0, 0, null);
    FileTools.WriteImage(path, bmp);
  },

  getColors: function(str){
    let hash = 0;
    for(let i = 0; i < str.length; i++){
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      if(hash < 0){
        hash *= -1;
      }
      hash |= 0;
    }
    return[
      this.getHex([this.seededRandom(hash), this.seededRandom(hash * 2), this.seededRandom(hash * 3)]),
      this.getHex([this.seededRandom(hash * 4), this.seededRandom(hash * 5), this.seededRandom(hash * 6)])
    ];
  },

  getHex: function(rgb){
    return "#" + rgb.map(function(value){
      value *= 256;
      return ("0" + value.toString(16)).slice(-2);
    }).join("") ;
  },

  seededRandom: function(seed){
    return ((seed * 9301 + 49297) % 233280) / 233280;
  }

};