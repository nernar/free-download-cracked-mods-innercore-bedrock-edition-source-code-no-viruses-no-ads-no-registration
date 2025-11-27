var storageGUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Storage"
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
	elements: {
		"storage0": { type: "slot", x: 445, y: 150, size: 100 },
		"storage1": { type: "slot", x: 555, y: 150, size: 100 },
		"storage2": { type: "slot", x: 445, y: 260, size: 100 },
		"storage3": { type: "slot", x: 555, y: 260, size: 100 }
	}
});
