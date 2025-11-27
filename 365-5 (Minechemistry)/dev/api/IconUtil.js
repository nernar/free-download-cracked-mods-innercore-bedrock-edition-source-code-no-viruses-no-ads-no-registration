const IconUtil = {

    bitmaps: {
        elem_tube: FileTools.ReadImage(__dir__ + "texture-source/elem_tube.png"),
        elem_gas: FileTools.ReadImage(__dir__ + "texture-source/elem_gas.png"),
        elem_liquid: FileTools.ReadImage(__dir__ + "texture-source/elem_liquid.png"),
        elem_solid: FileTools.ReadImage(__dir__ + "texture-source/elem_solid.png"),
        mol_tube: FileTools.ReadImage(__dir__ + "texture-source/mol_tube.png"),
        mol_inside: FileTools.ReadImage(__dir__ + "texture-source/mol_inside.png"),
        ingot: FileTools.ReadImage(__dir__ + "texture-source/ingot.png")
    },

    genElement: function(symbol, color, type){
        const path = __dir__ + "res/items-opaque/element/chem_element" + symbol + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        const font = new UI.Font(Color.WHITE, 1, 0.5);
        paint.setColorFilter(new ColorFilter(color, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps["elem_" + type], 0, 0, paint);
        cvs.drawBitmap(this.bitmaps.elem_tube, 0, 0, null);
        font.drawText(cvs, 0, 8, symbol, 8);
        this.writeImage(path, bmp);
    },
/*
    genMolecule: function(key, color1, color2){
        const path = __dir__ + "res/items-opaque/molecule/chem_" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        if(!color1 || !color2){
            const hash = new java.lang.String(key).hashCode();
            color1 = Color.rgb(new java.util.Random(hash).nextFloat(), new java.util.Random(hash).nextFloat() * 2, new java.util.Random(hash).nextFloat() * 3);
            color2 = Color.rgb(new java.util.Random(hash).nextFloat() * 4, new java.util.Random(hash).nextFloat() * 5, new java.util.Random(hash).nextFloat() * 6);
        }
        paint.setColorFilter(new ColorFilter(color1, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps.mol_pass1, 0, 0, paint);
        paint.setColorFilter(new ColorFilter(color2, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps.mol_pass2, 0, 0, paint);
        cvs.drawBitmap(this.bitmaps.mol_tube, 0, 0, null);
        this.writeImage(path, bmp);
    },
*/

    genMolecule: function(key, color){
        const path = __dir__ + "res/items-opaque/molecule/" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        paint.setColorFilter(new ColorFilter(color, PorterDuff.Mode.SRC_IN));
        cvs.drawBitmap(this.bitmaps.mol_inside, 0, 0, paint);
        cvs.drawBitmap(this.bitmaps.mol_tube, 0, 0, null);
        this.writeImage(path, bmp);
    },

    genIngot: function(key, color){
        const path = __dir__ + "res/items-opaque/ingot/ingot" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bmp = new Bitmap.createBitmap(16, 16, Bitmap.Config.ARGB_8888);
        const cvs = new Canvas(bmp);
        const paint = new Paint();
        paint.setColorFilter(new ColorFilter(color, PorterDuff.Mode.MULTIPLY));
        cvs.drawBitmap(this.bitmaps.ingot, 0, 0, paint);
        this.writeImage(path, bmp);
    },

    writeImage: function(path, bmp){
        setLoadingTip("[Minechemistry]: generating textures...");
        const file = new java.io.File(path);
        file.getParentFile().mkdirs();
        file.createNewFile();
        FileTools.WriteImage(path, bmp);
    }

};