Launch({
	Level:ModAPI.requireGlobal("Level"),
	Particles:ModAPI.requireGlobal("Particles"),
	FactAPI:{
		getAPILevel: function(){
			return 4;
		}
	},
	Random: {
		float: function (min, max){
			return ((Math.random() * (max - min)) + min);
		},
		integer: function (min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},
		string: function () {
			function gen() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return gen() + gen() + '_' + gen() + '_' + gen() + '_' + gen() + '_' + gen() + gen() + gen();
		},
		choice: function (array) {
			var i = array.length;
			return array[Random.integer(0, i)]
		}
	},
	Options:{
		theme:__config__.getBool("options.light theme"),
		rendering:__config__.getBool("options.liquid renders"),
		beta:__config__.getBool("options.enable beta content")
	},
	print:alert
})