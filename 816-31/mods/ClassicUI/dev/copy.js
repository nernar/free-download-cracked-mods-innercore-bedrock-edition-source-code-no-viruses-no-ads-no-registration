let copys = ["number", "string", "boolean", "function"];
const MAX_COPY = 50;
function copyArray(obj, count){
	if(count !== undefined) count++;
	if(count >= MAX_COPY) return;
	let result = [];
	for(let key in obj){
		let element = obj[key];
		let value;
		if(copys.indexOf(typeof element) != -1)
			value = element;
		else if(Array.isArray(element))
			value = copyArray(element, count||0);
		else
			value = copyObject(element, count||0);
		if(value === undefined) return;
		result[key] = value;
	}
	return result;
}
function copyObject(obj, count){
	if(count !== undefined) count++;
	if(count >= MAX_COPY) return;
	let result = {};
	for(let key in obj){
		let element = obj[key];
		let value;
		if(copys.indexOf(typeof element) != -1)
			value = element;
		else if(Array.isArray(element))
			value = copyArray(element, count||0);
		else
			value = copyObject(element, count||0);
		if(value === undefined) return;
		result[key] = value;
	}
	return result;
};
const BLACK_LIST = {};
function copy(value, id){
	let returned;
	if(Array.isArray(value)){
		returned = copyArray(value);
	}else if(copys.indexOf(typeof value) != -1)
		returned = value;
	else
		returned = copyObject(value);
	if(id !== undefined && returned === undefined){
		BLACK_LIST[id] = true;
		return value;
	}
	return returned;
}

function copyArrayLegacy(obj){
	let result = [];
	for(let key in obj){
		let element = obj[key];
		if(copys.indexOf(typeof element) != -1)
			result[key] = element;
		else if(Array.isArray(element))
			result[key] = copyArrayLegacy(element);
		else
			result[key] = copyObjectLegacy(element);
	}
	return result;
}
function copyObjectLegacy(obj){
	let result = {};
	for(let key in obj){
		let element = obj[key];
		if(copys.indexOf(typeof element) != -1)
			result[key] = element;
		else if(Array.isArray(element))
			result[key] = copyArrayLegacy(element);
		else
			result[key] = copyObjectLegacy(element);
	}
	return result;
};