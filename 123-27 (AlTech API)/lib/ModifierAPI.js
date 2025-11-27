LIBRARY({
	name: "ModifierAPI",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

let ModifierAPI = {
	modifiers: {},
	globalModifiers: {},
	entities: {},
	ids: 1,
	reg: function(key, obj){
		if(!obj.data) obj.data = {}
		if(!obj.tick) obj.tick = function(){}
		
		if(obj.changed){ 
            let _changed = obj.changed
            obj.changed = function(args){ 
                _changed(args)
            }
        }else{
        	obj.changed = function(){}
        }
        
		if(obj.destroy){ 
            let _destroy = obj.destroy
            obj.destroy = function(){ 
                _destroy()
                delete obj
            }
        }else{
        	obj.destroy = function(){
        	    delete obj
            }
        }
		
		if(obj.init){ 
            let _init = obj.init
            obj.init = function(args){ 
                obj.data = args
                _init()
                return obj
            }
        }else{
        	obj.init = function(args){
        	    obj.data = args
        	    return obj
            }
        }
 
		this.modifiers[key] = obj
	},
	add: function(e, key, args){
		if(this.entities[e] && this.entities[e][key]){
			let id = this.entities[e][key]
            return id
        }
		let obj = this.modifiers[key].init(args)
		obj.data.entity = e
		obj.data.name = key
		this.globalModifiers[this.ids] = obj
		let id = this.ids
		if(!this.entities[e]){ this.entities[e] = {}; this.entities[e][key] = id }else this.entities[e][key] = id
		this.ids ++ 
		return id
	},
	remove: function(e, key){
		let id = this.entities[e][key]
		this.globalModifiers[id].destroy()
		delete this.globalModifiers[id]
		delete id
	},
	change: function(id, args){
		this.globalModifiers[id].changed(args)
		return this.globalModifiers[id].data
	},
	purge: function(e){
		if(this.entities[e]){ for(var keys in this.entities[e]){
		    this.remove(e, keys)
		} delete this.entities[e] }
	}
}

Callback.addCallback("tick", function(){
	try{ for(var keys in ModifierAPI.globalModifiers){
		ModifierAPI.globalModifiers[keys].tick()
	} }catch(e){}
	if(Entity.getHealth(Player.get()) <= 0) ModifierAPI.purge(Player.get())
})

Callback.addCallback("EntityRemoved", function (e) {
    ModifierAPI.purge(e)
});
Callback.addCallback("EntityDeath", function (e) {
    ModifierAPI.purge(e)
});

Saver.addSavesScope("EntityModifiers", 
    function read(scope){
        for(var keys in scope.params){
        	let arr = scope.params[keys]
        	ModifierAPI.add(arr.entity, arr.name, arr)
        }
    },
    function save(){
    	let arr = []
    	for(var keys in ModifierAPI.globalModifiers){
    	    arr.push(ModifierAPI.globalModifiers[keys].data)
        }
        return {params: arr}
    }
);
Callback.addCallback("LevelLeft", function(){
	ModifierAPI.globalModifiers ={}
})

EXPORT("ModifierAPI", ModifierAPI)