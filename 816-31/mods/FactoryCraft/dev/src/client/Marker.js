FactAPI.Marker={
	crd:{length:0},
	load:function(x,y,z){
		if(!FactAPI.Marker.crd[x+":"+y+":"+z]){
			if(FactAPI.Marker.crd.length>=4)FactAPI.Marker.clearList();
			FactAPI.Marker.crd[x+":"+y+":"+z]={x:x,y:y,z:z}
			FactAPI.Marker.crd.length++;
		}
	},
	
	clearList:function(){
		FactAPI.Marker.crd=null;
		FactAPI.Marker.crd={length:0}
	},
	
	checkNearest:function(x,y,z){
		for(var i in FactAPI.Marker.crd){
			var p=FactAPI.Marker.crd[i];
			if(p.y==y&&((Math.abs(p.x-x)==1&&p.z-z==0)||(Math.abs(p.z-z)==1&&p.x-x==0)))return true
		}
		return false;
	},
	
	getHeighMap: function(){
		var crds =[];
		for(var i in FactAPI.Marker.crd){
			if(i!="length")crds.push(FactAPI.Marker.crd[i])
		}
		return {
			minX: Math.min(crds[0].x,crds[1].x,crds[2].x,crds[3].x),
			maxX: Math.max(crds[0].x,crds[1].x,crds[2].x,crds[3].x),
			
			minY: Math.min(crds[0].y,crds[1].y,crds[2].y,crds[3].y),
			maxY: Math.max(crds[0].y,crds[1].y,crds[2].y,crds[3].y),
			
			minZ: Math.min(crds[0].z,crds[1].z,crds[2].z,crds[3].z),
			maxZ: Math.max(crds[0].z,crds[1].z,crds[2].z,crds[3].z),
		}
	}
}