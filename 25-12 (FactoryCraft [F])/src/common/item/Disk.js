Translation.addTranslation("Energy Disk", {
	ru: "Энергетический диск"
});
Translation.addTranslation("Item Disk", {
	ru: "Предметный диск"
});
Translation.addTranslation("Liquid Disk", {
	ru: "Жидкостный диск"
});

IDRegistry.genItemID("diskEnergy");
IDRegistry.genItemID("diskItem");
IDRegistry.genItemID("diskLiquid");

Item.createItem("diskEnergy", "Energy Disk", { name: "disk_energy", meta: 0 });
Item.createItem("diskItem", "Item Disk", { name: "disk_item", meta: 0 });
Item.createItem("diskLiquid", "Liquid Disk", { name: "disk_liquid", meta: 0 });

Recipes.addShaped({ id: ItemID.diskEnergy, count: 1, data: 0 }, [
	" b ",
	"cac"
],[
	'a', ItemID.factoryBattery, 0,
	'b', ItemID.crystalQuantium, 0,
	'c', 265,0
]);
Recipes.addShaped({ id: ItemID.diskItem, count: 1, data: 0 }, [
	" b ",
	"cac"
],[
	'a', 58, 0,
	'b', ItemID.crystalQuantium, 0,
	'c', 265,0
]);
Recipes.addShaped({ id: ItemID.diskLiquid, count: 1, data: 0 }, [
	" b ",
	"cac"
],[
	'a', 325, 0,
	'b', ItemID.crystalQuantium, 0,
	'c', 265,0
]);

var UI_disk_item = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Terminal/Терминал"
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		}
	],
	elements: {
		"slot1": {type: "slot", x: 370, y: 60, size: 70},
		"slot2": {type: "slot", x: 440, y: 60, size: 70},
		"slot3": {type: "slot", x: 510, y: 60, size: 70},
		"slot4": {type: "slot", x: 580, y: 60, size: 70},
		"slot5": {type: "slot", x: 650, y: 60, size: 70},
		"slot6": {type: "slot", x: 720, y: 60, size: 70},
		"slot7": {type: "slot", x: 790, y: 60, size: 70},
		"slot8": {type: "slot", x: 370, y: 130, size: 70},
		"slot9": {type: "slot", x: 440, y: 130, size: 70},
		"slot10": {type: "slot", x: 510, y: 130, size: 70},
		"slot11": {type: "slot", x: 580, y: 130, size: 70},
		"slot12": {type: "slot", x: 650, y: 130, size: 70},
		"slot13": {type: "slot", x: 720, y: 130, size: 70},
		"slot14": {type: "slot", x: 790, y: 130, size: 70},
		"slot15": {type: "slot", x: 370, y: 200, size: 70},
		"slot16": {type: "slot", x: 440, y: 200, size: 70},
		"slot17": {type: "slot", x: 510, y: 200, size: 70},
		"slot18": {type: "slot", x: 580, y: 200, size: 70},
		"slot19": {type: "slot", x: 650, y: 200, size: 70},
		"slot20": {type: "slot", x: 720, y: 200, size: 70},
		"slot21": {type: "slot", x: 790, y: 200, size: 70},
		"slot22": {type: "slot", x: 370, y: 270, size: 70},
		"slot23": {type: "slot", x: 440, y: 270, size: 70},
		"slot24": {type: "slot", x: 510, y: 270, size: 70},
		"slot25": {type: "slot", x: 580, y: 270, size: 70},
		"slot26": {type: "slot", x: 650, y: 270, size: 70},
		"slot27": {type: "slot", x: 720, y: 270, size: 70},
		"slot28": {type: "slot", x: 790, y: 270, size: 70},
		
		"infoText":{type: "text", x: 370, y:30 , text: "Connection: Disk Drive >> Item Disk", height: 30 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});
