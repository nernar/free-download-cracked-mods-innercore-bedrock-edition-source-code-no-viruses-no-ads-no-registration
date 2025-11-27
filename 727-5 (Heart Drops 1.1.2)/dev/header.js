//сообщения
if(__config__.getBool("message")){
alert("«Heart Drops» by Maksim Pomazuev");
Callback.addCallback("LevelLoaded", function(){ 
	Game.message("§d«Heart Drops» by Maksim Pomazuev")
});};

//функция рандома
function getRandomInt(min, max){
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
};

//config
var config = __config__.getBool("particles");

//Перевод
Translation.addTranslation("Heart", {ru: "Сердце", es: "Corazón", pt: "Coração", zh: "心"});

Translation.addTranslation("Golden Heart", {ru: "Золотое Сердце", es: "Corazón de Oro", pt: "Coração de Ouro", zh: "金心"});

Translation.addTranslation("Crystal Heart", {ru: "Хрустальное Сердце", es: "Corazon de Cristal", pt: "Coração de Cristal", zh: "水晶心"});

Translation.addTranslation("Heart", {ru: "Сердца", es: "Corazones", pt: "Corações", zh: "心"});

//массив id эффектов
var effects = [1, 3, 5, 8, 10, 11, 12, 13, 16, 21];