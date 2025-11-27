var EnergyUI = new UI.Window({
    location: {
        x: 5,
        y: 25,
		width: 50,
		height: 50
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "icon": {type: "image", x: 0, y: 0, width: 400, height: 400, bitmap: "energy_icon", scale: 1},
        "info": {type: "text", x: 450, y: 80, text: "", font: {color: android.graphics.Color.WHITE, size: 200}}
    }
});
//elements["name"].text =
