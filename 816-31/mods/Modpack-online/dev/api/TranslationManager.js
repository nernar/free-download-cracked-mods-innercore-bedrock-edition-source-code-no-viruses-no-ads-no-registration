function TranslationManager(){
	let translations = {};
	let default_lang = "en";
	
	this.add = function(key, lang, translate){
		translations[key] = translations[key] || {};
		translations[key][lang] = translate;
	}
	
	this.setDefaultLang = function(lang){
		default_lang = lang;
	}
	
	this.translate = function(key){
		let lang = Translation.getLanguage();
		let translate = this.get(key);
		if(!translate) return key;
		return translate[lang] || translate[default_lang] || key;
	}
	
	this.get = function(key){
		return translations[key];
	}
	
	this.can = function(key){
		return !!this.get(key);
	}
}