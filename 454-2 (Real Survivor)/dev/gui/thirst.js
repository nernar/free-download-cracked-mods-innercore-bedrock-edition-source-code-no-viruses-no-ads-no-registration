let ThirstUI = new UI.Window({
    location: {
        x: 60,
		y: 25,
        width: 50,
		height: 50
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "icon": {type: "image", x: 0, y: 0, width: 400, height: 400, bitmap: "thirst_icon", scale: 1},
        "info": {type: "text", x: 450, y: 80, text: "100%", font: {color: android.graphics.Color.WHITE, size: 200}}
    }
});