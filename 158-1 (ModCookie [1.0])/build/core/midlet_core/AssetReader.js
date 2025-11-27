var AssetReader={
	readJSON:function(path){
		return FileTools.ReadJSON(__dir__+"assets/pack/"+path);
	}
};