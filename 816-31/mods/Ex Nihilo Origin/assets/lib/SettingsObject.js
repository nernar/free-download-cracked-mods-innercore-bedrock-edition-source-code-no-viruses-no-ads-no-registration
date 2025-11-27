/*
Автор: Reider ___
Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода, за исключением имеени библиотеки(которое используется для импорта в мод)
    3.Явное копирование кода

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.
    группа - https://vk.com/club186544580
*/
LIBRARY({
	name: "SettingsObject",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

function Settings(path){
	let obj = {};
	
	this.pars = function(file){
		let lines = file.split("\n");
		for(let i in lines){
			let arr = lines[i].split(":");
			obj[arr[0]] = arr[1];
		}
	}
	this.update = function(){
		if(path)
			this.pars(FileTools.ReadText(path));
	}
	try{
	this.update();
	}catch(e){
 }
	this.getObject = function(){
		return obj;
	}
	this.setObject = function(obj_new){
		obj = obj_new;
		return this
	}
	this.is = function(name){
		return !!obj[name];
	}
	this.get = function(name){
		return obj[name] || "0";
	}
	this.set = function(name, value){
		obj[name] = ""+value;
		return this;
	}
	this.toString = function(){
		let file = "";
		let keys = Object.keys(obj);
		for(let i in keys)
			file+=keys[i]+":"+obj[keys[i]]+"\n";
		return file
	}
	this.save = function(path_new){
		if(path_new || path)
			FileTools.WriteText(path_new || path, this.toString(), false);
		return this;
	}
}

let horizon_path = "/storage/emulated/0/games/horizon/";

let MinecraftSetting = new Settings(horizon_path+"minecraftpe/options.txt");

EXPORT("SettingReader", Settings);
EXPORT("MinecraftSetting", MinecraftSetting);
EXPORT("Minecraft", new Settings("/storage/emulated/0/games/com.mojang/minecraftpe/options.txt") || MinecraftSetting);
EXPORT("horizon_path", horizon_path)
