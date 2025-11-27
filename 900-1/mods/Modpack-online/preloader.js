/*let Textures = com.zhekasmirnov.innercore.api.mod.ui.TextureSource.instance;

Textures.put("innercore/ui/ic_loading_background_art.png", Textures.get("background_innercore_loaded"))*/



let Files = com.zhekasmirnov.innercore.utils.FileTools;
Files.writeBitmap(Files.DIR_PACK+"/assets/innercore/ui/ic_loading_background_art.png", Files.readFileAsBitmap(__dir__+"gui/background_innercore_loaded.jpg"));