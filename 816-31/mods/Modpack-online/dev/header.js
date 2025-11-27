let TextureSource = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.TextureSource').instance;
function StringToBitmap(encodedString){
	try{
		encodeByte = android.util.Base64.decode(encodedString, 0);
		bitmap = android.graphics.BitmapFactory.decodeByteArray(encodeByte, 0, encodeByte.length);
		return bitmap;
	}catch(e){
		return null;
	}
}
function loadTexture(name, texture){
	TextureSource.put(name, StringToBitmap(texture));
}

let Files = com.zhekasmirnov.innercore.utils.FileTools;
Files.writeBitmap(Files.DIR_PACK+"/assets/innercore/ui/ic_loading_background_art.png", Files.readFileAsBitmap(__dir__+"gui/ic_loading_background_art.png"));