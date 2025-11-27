function generateOreTexture(material, background, data, color, type){
	var c = android.graphics.Color.parseColor(color);
    material = material.toLowerCase();
    var template_dir = __dir__ + "templates/ores/";
    var output_tools_dir = __dir__ + "res/images/terrain-atlas/ores/"+material+"/";
    var name = "ore_" + material + "_" + background + "_" + data + ".png";
    if(!new java.io.File(output_tools_dir + name).exists()){
    	//setLoadingTip("[AlTech]: Generate ores textures: "+ FixName(material));
        var template = android.graphics.BitmapFactory.decodeFile(template_dir + type + ".png");
        var back = android.graphics.BitmapFactory.decodeFile(template_dir + "back/" + background + ".png");
 
        var bitmap = new android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        var canvas = new android.graphics.Canvas(bitmap);
        
        var paint = new android.graphics.Paint();
        paint.setColorFilter(new android.graphics.PorterDuffColorFilter(c, android.graphics.PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(back, 0, 0,  null);
        canvas.drawBitmap(template, 0, 0, paint);
 
        var file = new java.io.File(output_tools_dir + name);
        file.getParentFile().mkdirs();
        file.createNewFile();
        var fos = new java.io.FileOutputStream(output_tools_dir+ name);
        bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
        
        loadTextures = true;
    }
};

function dropFunction(ID, name, drop_type, level){
    Block.registerDropFunction(ID, function(coords, id, data, lvl, enchant){
    	if(ID == BlockID["ore"+name+"_stone"]) var ID2 = BlockID["ore"+name+"_cobblestone"] || ID;
        var drop = [];
        var dt = drop_type;
        if(lvl>=level){
        	if(enchant.silk){
			    return [[ID, 1, 0]];
		    }
        	if(!dt.exp && !ID2){
        	    return [[ID, 1, 0]]; 
            }else if(dt.exp){
		        ToolAPI.dropOreExp(coords, dt.exp[0], dt.exp[1], enchant.experience);
		        var count = random(dt.count[0], dt.count[1]) + random(0, enchant.fortune);
		        for (var a = 0; a < count; a++){
			        drop.push([dt.id, 1, 0]);
	            }
                return drop;
            }else if(ID2){
            	return [[ID2, 1, 0]];
            }
               
        }else{
            return []
        }
    });
}

//============================

function RegisterOre(name, resource, rarity, params, back_type){
	
	if(Base.Ores.Vanila[name]){
		var v = Base.Ores.Vanila[name];
	}else{
		var v = params;
	}
	
		var ids = [];
		
		for(var k in Base.backTypes){
			if(!back_type || back_type != "ALL"){
				for(var kk in back_type){
			        if(back_type[kk] != k) continue;
			    }
			}
			
			var s = Base.backTypes[k];
			var level = v.level + ToolAPI.getBlockDestroyLevel(s.id);
			
			var sound = "stone";
			if(s.type == "dirt"){
                sound = "gravel";
			}
			
			var special_type = {
			     base: s.id, 
                 opaque: true,
                 renderlayer: 0,
                 destroytime: level,
                 redstoneconsumer: false, 
                 lightopacity: 15, 
                 lightlevel: 0, 
                 explosionres: 15, 
                 sound: s.sound || sound,
                 solid: true,
	             translucency: 0
            };
            generateOreTexture(name.toLowerCase(), k, 0, v.color, v.type);
            var n = "ore"+name+"_"+k;
            var ID = IDRegistry.genBlockID(n);
            ids.push(ID);
		    Block.createBlock(n, [{name: name+" ore", texture: [["ore_" + name.toLowerCase()+"_"+k, 0]], inCreative: true}], special_type);
            ToolAPI.registerBlockMaterial(ID, s.type);
            Block.setDestroyLevel(n, level);
            ToolLib.addBlockDropOnExplosion(n);
            dropFunction(ID, name, resource, level);
            if(resource) Recipes.addFurnace(ID, resource.id, resource.data || 0);
            if(s.physic) RegisterPhysicBlock(ID);
        }
        Base.Ores[name] = {back_type: back_type || "ALL", resource: resource, rarity: rarity, ids: ids};
        Item.addCreativeGroup("ores"+name, Translation.translate(name + "ores"), ids);
}