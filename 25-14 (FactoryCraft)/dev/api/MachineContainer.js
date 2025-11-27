FactAPI.machineContainer = {
	addItemToContainer: function (container, item, size,prefix,index) {
		let s = size || 28;
		prefix = prefix||"";
		for (let index = index?index:1; index <= s; index++) {
			let slot = container.getSlot("slot"+prefix + index);
			if ((slot.id == item.id && slot.data == item.data) || slot.id == 0) {
				if (slot.count <= Item.getMaxStack(item.id)) {
					let maxcount = Item.getMaxStack(item.id) - slot.count;
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
	isItemInContainer(container, item, size,prefix,index) {
		let s = size || 28;
		prefix = prefix||"";
		for (let index =index?index:1; index <= s; index++) {
			let slot = container.getSlot("slot"+prefix + index);
			if (slot.id == item.id&& (slot.data == item.data||item.data==-1))
				item.count = Math.max(item.count-slot.count,0);
		}
		if(item.count==0)
			return true
		return false
	},
	giveItemFromContainer(container, item, size,prefix,index) {
		let s = size || 28;
		prefix = prefix||"";
		for (let index = index?index:1; index < s; index++) {
			let slot = container.getSlot("slot"+prefix + index);
			if (slot.id == item.id&& (slot.data == item.data||item.data==-1)) {
				if (slot.count >= item.count) {
					container.setSlot("slot" +prefix+ index, item.id, slot.count - item.count, item.data);
					container.validateAll();
					return true;
				}
				if (slot.count < item.count){
					item.count-=slot.count;
					container.setSlot("slot" +prefix+ index, item.id, 0, item.data);
					container.validateAll();
				}
			}
		}
		return false;
	}
}