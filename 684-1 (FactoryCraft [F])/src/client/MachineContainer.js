FactAPI.machineContainer = {
	addItemToContainer: function (container, item, size,prefix,index) {
		if (!size) { s = 28 } else { s = size }
		!prefix?prefix="":null;
		for (var index = index?index:1; index <= s; index++) {
		var slot = container.getSlot("slot"+prefix + index);
		if ((slot.id == item.id && slot.data == item.data) || slot.id == 0) {
			if (slot.count <= Item.getMaxStack(item.id)) {
			var maxcount = Item.getMaxStack(item.id) - slot.count;
			if(item.count<=maxcount){
				container.setSlot("slot" + prefix+index, item.id, slot.count + item.count, item.data);
				container.validateAll();
				return false
			}
			if(item.count>maxcount){
				container.setSlot("slot" + prefix+index, item.id, slot.count + maxcount, item.data);
				container.validateAll();
				item.count-=maxcount;
			}
			}
		}
		}
		return item.count
	},
	isItemInContainer: function (container, item, size,prefix,index) {
		if (!size) { s = 28 } else { s = size }
		!prefix?prefix="":null;
		for (var index =index?index:1; index <= s; index++) {
		var slot = container.getSlot("slot"+prefix + index);
		if (slot.id == item.id&& (slot.data == item.data||item.data==-1)) {
			item.count = Math.max(item.count-slot.count,0)
		}
		}
		if(item.count==0)return true
		return false
	},
	giveItemFromContainer: function (container, item, size,prefix,index) {
		if (!size) { s = 28 } else { s = size }
		!prefix?prefix="":null;
		for (var index = index?index:1; index < s; index++) {
			var slot = container.getSlot("slot"+prefix + index);
			if (slot.id == item.id&& (slot.data == item.data||item.data==-1)) {
				if (slot.count >= item.count) {
					container.setSlot("slot" +prefix+ index, item.id, slot.count - item.count, item.data);
					container.validateAll();
					return true
				}
				if (slot.count < item.count){
					item.count-=slot.count;
					container.setSlot("slot" +prefix+ index, item.id, 0, item.data);
					container.validateAll();
				}
			}
		}
		return false
	}
}