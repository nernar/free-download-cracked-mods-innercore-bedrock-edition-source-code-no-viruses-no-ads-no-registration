const HallucinationWindow = new Window({content: {type: "image", id: "hallucination", scale: "fit_xy"}, hooks: {onInit: function (scope) {
    var animation = new android.graphics.drawable.AnimationDrawable();
    animation.setOneShot(false);
    for (var i = 0; i < 4; i++) {
        var bitmap = ImageFactory.getBitmap("hallucination" + i), drawable = new android.graphics.drawable.BitmapDrawable(bitmap);
        animation.addFrame(drawable, 75);
    }
    scope.findWidgetById("hallucination").setResource(animation);
    scope.animation = animation;
}, onShow: function (scope) {
    scope.animation.start();
    handle(function () {
        scope.hide();
    }, random(1, 3) * 300);
}, onHide: function (scope) {
    scope.animation.stop();
}}});
const CreepyStartWindow = new Window({content: {type: "image", id: "container", scale: "fit_xy"}, hooks: {onShow: function (scope) {
    scope.findWidgetById("container").setResource("creepyStart0");
}}});
CreepyStartWindow.setup = function () {
    CreepyStartWindow.findWidgetById("container").setResource("creepyStart1");
};
const CreepyStartScene = new Scene({game: {tick: 500}, hooks: {onRun: function (scope) {
    scope.handle(function () {
        CreepyStartWindow.show();
    });
}, onTick: function (scope) {
    if (scope.tick == 19) {
        scope.handle(function () {
            CreepyStartWindow.setup();
        });
    } else {
        if (scope.tick == 20) {
            scope.finish();
        }
    }
}, onFinish: function (scope) {
    EnterScene.run(function () {
        CreepyStartWindow.hide();
    });
}}});
const CreepyEndWindow = new Window({content: {type: "image", resource: "creepyEnd", scale: "fit_xy"}});
const CreepyEndScene = new Scene({game: {tick: 1000}, hooks: {onRun: function (scope) {
    scope.handle(function () {
        CreepyEndWindow.show();
        bassScreamSound.play();
    });
}, onTick: function (scope) {
    scope.handle(function () {
        context.finish();
    });
}}});
const OverlayWindow = new Window({content: {type: "frame", children: {type: "frame", id: "container", background: "black", params: "match", alpha: 0}}});
OverlayWindow.setAlpha = function (alpha) {
    OverlayWindow.findWidgetById("container").setAlpha(alpha);
};
OverlayWindow.translate = function (time, post) {
    var view = OverlayWindow.findWidgetById("container").view, animate = android.view.animation.AlphaAnimation(0, 1);
    animate.setDuration(time || 1500);
    handle(function () {
        try {
            post && post();
        }
        catch (e) {
            reportError(e);
        }
        var animate = android.view.animation.AlphaAnimation(1, 0);
        animate.setDuration(time || 1500);
        handle(function () {
            OverlayWindow.setAlpha(0);
        }, time || 1500);
        view.startAnimation(animate);
    }, time || 1500);
    view.startAnimation(animate);
    OverlayWindow.setAlpha(255);
};

