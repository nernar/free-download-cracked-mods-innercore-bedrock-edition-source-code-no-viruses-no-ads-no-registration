ScribleAnimation.addAnimation('recipe', function (r, p) {
	if (p == 200) {
		r.rotationX = 0.15;
		r.rotationY = 0.15;
	}
	if (p) {
		r.rotationY *= 1.025;
		r.getPart("body.rotPart").setRotation(0, r.rotationY, 0)
	}
	if (p > 80 && p < 120) {
		r.getPart("body.rotPart").setOffset(0, -(120-p)/5, 0);
	}
	if (p > 64 && p < 80) {
		r.rotationX *= 1.07;
		r.getPart("body.rotPart").setRotation(r.rotationX, r.rotationY, 0)
	}
	if (p < 64) {
		r.rotationX *= 1.07;
		r.getPart("body.rotPart").setRotation(r.rotationX, r.rotationY, 0)
	}
})