IMPORT("RecipeTileEntityLib");
IMPORT("ToolLib");
IMPORT("ChargeItem");
IMPORT("EnhancedRecipes");
IMPORT("RegisterFunction");

const Color = android.graphics.Color;
const Bitmap = android.graphics.Bitmap;
const Canvas = android.graphics.Canvas;
const Paint = android.graphics.Paint;
const ColorFilter = android.graphics.PorterDuffColorFilter;
const PorterDuff = android.graphics.PorterDuff;
const Thread = java.lang.Thread;

let player = 0;
Callback.addCallback("LevelLoaded", function(){
    player = Player.get();
})


const SHammer = {

    bitmaps: {
        handle: FileTools.ReadImage(__dir__ + "texture-source/handle.png"),
        hammer: FileTools.ReadImage(__dir__ + "texture-source/hammer.png"),
        excavator: FileTools.ReadImage(__dir__ + "texture-source/excavator.png")
    },

    genTexture: function(key, color, type){
        const path = __dir__ + "resources/res/items-opaque/tools/s" + type + "_" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bitmap = this.bitmaps.handle.copy(Bitmap.Config.ARGB_8888, true);
        const canvas = new Canvas(bitmap);
        const paint = new Paint();
        paint.setColorFilter(new ColorFilter(Color.parseColor(color), PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(this.bitmaps[type], 0, 0, paint);
        const file = new java.io.File(path);
        file.getParentFile().mkdirs();
        file.createNewFile();
        FileTools.WriteImage(path, bitmap);
        return {name: ("s" + type + "_" + key)};
    },

    convertToolMaterial: function(base, range){
        const material = ToolAPI.toolMaterials[base];
        return material ? {
            level: material.level,
            durability: material.durability * 6,
            efficiency: material.efficiency * 0.6 | 0,
            damage: material.damage + 3,
            range: range || 1
        } : null;
    },

    addRecipe: function(result, mask, source){
        mask.push("ssss_");
        source.s = VanillaItemID.stick;
        for(let key in source){
            source[key] = {id: source[key]};
        }
        RecipeTE.addShapeRecipe("shammer_table", result, mask.join(""), source);
    },

    addBasicTools: function(key, name, color, recipeItem, toolMaterial){
        const hammer = IDRegistry.genItemID("shammer_" + key);
        const excavator = IDRegistry.genItemID("sexcavator_" + key);
        if(typeof toolMaterial !== "object"){
            toolMaterial = this.convertToolMaterial(toolMaterial || key);
            if(!toolMaterial){
                return;
            }
        }
        this.genTexture(key, color, "hammer");
        this.genTexture(key, color, "excavator");
        Item.createItem("shammer_" + key, name + " Hammer", {name: "shammer_" + key}, {stack: 1});
        Item.createItem("sexcavator_" + key, name + " Excavator", {name: "sexcavator_" + key}, {stack: 1});
        Item.addCreativeGroup("sparks_hammer", "Hammers", [hammer]);
        Item.addCreativeGroup("sparks_excavator", "Excavators", [excavator]);
        ToolLib.setTool(hammer, toolMaterial, ToolType.sparks_hammer);
        ToolLib.setTool(excavator, toolMaterial, ToolType.sparks_excavator);
        this.addRecipe(hammer, ["aaaaa", "aaaaa"], {a: recipeItem});
        this.addRecipe(excavator, ["_aaa_", "aaaaa"], {a: recipeItem});
        Item.addRepairItemIds(hammer, [recipeItem.id || recipeItem]);
        Item.addRepairItemIds(excavator, [recipeItem.id || recipeItem]);
    }

};