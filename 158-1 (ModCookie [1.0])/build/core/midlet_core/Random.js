var Random={
	
	/*
		Random
			- Модуль MidletCore для работы со случайными значениями
		Dump>>
			Random.float(min,max);
			Random.integer(min,max);
			Random.string();
			Random.array(count_of_elements,type_of_elements,~min~,~max~);
			Random.choice(array);
		×==========================================×
		>>TODO: random string as (min,max,code,encoding)
	*/
	
	float:function(min,max){
		a=((Math.random()*(max-min))+min);
		return a
	},
	integer:function(min,max){
		a=Math.round((Math.random()*max)+min);
		return a
	},
	string:function(){
		function gen(){
			return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
		}
		return gen()+gen()+'_'+gen()+'_'+gen()+'_'+gen()+'_'+gen()+gen()+gen();
	},
	array:function(count,type,min,max){
		get=[];
		for(vari=0;i<count;i++){
			if(type=="string"){
				get.push(Random.string());
			}
			if(type=="float"){
				get.push(Random.float(min,max));
			}
			if(type=="integer"){
				get.push(Random.integer(min,max));
			}
		}
		return get
	},
	choice:function(mass){
		i=mass.length;
		return mass[Random.integer(0,i)]
	}
};