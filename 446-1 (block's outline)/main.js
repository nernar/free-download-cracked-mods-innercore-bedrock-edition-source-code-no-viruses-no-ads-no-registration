const res = __config__.getNumber("resolution") | 0;
const color = android.graphics.Color[__config__.getString("color")] || android.graphics.Color.WHITE;

const bmp = new android.graphics.Bitmap.createBitmap(res * 4, res * 2, android.graphics.Bitmap.Config.ARGB_8888);
const cvs = new android.graphics.Canvas(bmp);
const paint = new android.graphics.Paint();

paint.setColor(color);
paint.setStyle(android.graphics.Paint.Style.STROKE);
paint.setStrokeWidth(1);

cvs.drawRect(res * 1, res * 0, res * 2 - 1, res * 1 - 1, paint);
cvs.drawRect(res * 2, res * 0, res * 3 - 1, res * 1 - 1, paint);
cvs.drawRect(res * 0, res * 1, res * 1 - 1, res * 2 - 1, paint);
cvs.drawRect(res * 1, res * 1, res * 2 - 1, res * 2 - 1, paint);
cvs.drawRect(res * 2, res * 1, res * 3 - 1, res * 2 - 1, paint);
cvs.drawRect(res * 3, res * 1, res * 4 - 1, res * 2 - 1, paint);
FileTools.WriteImage(__dir__ + "res/model/blocks_outline.png", bmp);

const render = new Render({skin: "model/blocks_outline.png", scale: 16 / res * 1.02});
render.setPart("body", [{
	type: "box",
	uv: {x: 0, y: 0},
	coords: {x: res / 2, y: -res / 2 + 24, z: -res / 2},
	size: {x: res, y: res, z: res}
}], {width: res * 4, height: res * 2});

const anim = new Animation.Base();
anim.describe({render: render.getID()});

const getPointed = ModAPI.requireGlobal("Player.getPointed");
Callback.addCallback("tick", function(){
	const point = getPointed();
	const c = point.pos;
	if(c.x == 0 && c.y == 0 && c.z == 0){
		anim.destroy();
		return;
	}
	anim.setPos(c.x - 0.01, c.y - 0.01, c.z - 0.01);
	anim.load();
});