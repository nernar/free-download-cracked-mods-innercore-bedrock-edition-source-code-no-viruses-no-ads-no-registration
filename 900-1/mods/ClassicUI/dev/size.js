function setSizeElement(obj, scale, height){
	if(obj.type == "text"){
		obj.font = obj.font || {};
		obj.font.size = obj.font.size || 20;
		obj.font.size *= scale;
	}else if(obj.type == "frame"){
		if(obj.width)
			obj.width *= scale;
		if(obj.height)
			obj.height *= scale;
	}else{
		if(obj.type == "slot")
			obj.size = obj.size || 60;
		else
			obj.size = obj.size || 20;
		obj.size *= scale;
	
		if(obj.width)
			obj.width *= scale;
		if(obj.height)
			obj.height *= scale;
		if(obj.scale)
			obj.scale *= scale;
	}
	
	if(obj.x)
		obj.x = obj.x / 1000 * (1000 * scale);
	if(obj.y)
		obj.y = obj.y / height * (height * scale);
}

function setSize(content, scale, height){
	let elements = content.elements;
	for(let i in elements)
		setSizeElement(elements[i], scale, height);
	let drawing = content.drawing;
	for(let i in drawing)
		setSizeElement(drawing[i], scale, height);
}

function getSize(ui, obj, func){
	obj = obj || ui.getContent();
	func = func || function(){};
	let scrollX = 0;
	let scrollY = 0;
	let minX = 9999999999999;
	let minY = 9999999999999;
	let u = new UI.Window();
	for(let i in obj.elements){
		let e = obj.elements[i];
		let element = com.zhekasmirnov.innercore.api.mod.ui.elements.ElementFactory.construct(u, e);
		try{
			element.onSetup();
			let rect = element.elementRect;
			scrollY = Math.max(scrollY, rect.bottom);
			scrollX = Math.max(scrollX, rect.right);
			minY = Math.min(minY, e.y);
			minX = Math.min(minX, e.x);
			func(e);
		}catch(e){}
	}

	for(let i in obj.drawing){
		let e = obj.drawing[i];
		if(e.type == "bitmap" && e.bitmap != "gui_ground"){
			let bitmap = com.zhekasmirnov.innercore.api.mod.ui.TextureSource.instance.get(e.bitmap);
			scrollY = Math.max(scrollY, e.y+(e.height||bitmap.getHeight())*(e.scale||1));
			scrollX = Math.max(scrollX, e.x+(e.width||bitmap.getWidth())*(e.scale||1));
			minY = Math.min(minY, e.y);
			minX = Math.min(minX, e.x);
			func(e);
		}
	}
	return {
		scrollX: scrollX,
		scrollY: scrollY,
		minX: minX,
		minY: minY,
		width: scrollX - minX,
		height: scrollY - minY
	};
}

function transfer(content, x, y){
	let elements = content.elements;
	for(let i in elements){
		let e = elements[i];
		e.x+=x;
		e.y+=y;
	}
	let drawing = content.drawing;
	for(let i in drawing){
		let e = drawing[i];
		e.x+=x;
		e.y+=y;
	}
}

let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getTextWidth(text, size){
	return new Font({size:size}).getTextWidth(text, 1);
}