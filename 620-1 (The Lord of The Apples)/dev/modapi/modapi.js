Saver.addSavesScope("LoA",
    function read(scope){
		Fruit = scope.demon_fruit || "";
        DemonEnable = scope.demon_enable || false;
    },
    function save(){
        return {
			demon_fruit:Fruit,
			demon_enable:DemonEnable
		}
    }
);

ModAPI.registerAPI("LoA",{
    Apple:Apple,
    Recipe:Recipe,

	requireGlobal:function(command){
		return eval(command);
	}
});