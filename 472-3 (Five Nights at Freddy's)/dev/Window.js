var Ui = {Display: {WIDTH: context.getWindowManager().getDefaultDisplay().getWidth(), HEIGHT: context.getWindowManager().getDefaultDisplay().getHeight(), DENSITY: context.getResources().getDisplayMetrics().density, FILL: android.view.ViewGroup.LayoutParams.FILL_PARENT, MATCH: android.view.ViewGroup.LayoutParams.MATCH_PARENT, WRAP: android.view.ViewGroup.LayoutParams.WRAP_CONTENT}, Orientate: {HORIZONTAL: android.widget.LinearLayout.HORIZONTAL, VERTICAL: android.widget.LinearLayout.VERTICAL}, Scale: {CENTER: android.widget.ImageView.ScaleType.CENTER, CROP: android.widget.ImageView.ScaleType.CENTER_CROP, INSIDE: android.widget.ImageView.ScaleType.CENTER_INSIDE, FIT_CENTER: android.widget.ImageView.ScaleType.FIT_CENTER, FIT_END: android.widget.ImageView.ScaleType.FIT_END, FIT_START: android.widget.ImageView.ScaleType.FIT_START, FIT_XY: android.widget.ImageView.ScaleType.FIT_XY, MATRIX: android.widget.ImageView.ScaleType.MATRIX}, Gravity: {BOTTOM: android.view.Gravity.BOTTOM, CENTER: android.view.Gravity.CENTER, FILL: android.view.Gravity.FILL, RIGHT: android.view.Gravity.RIGHT, LEFT: android.view.Gravity.LEFT, TOP: android.view.Gravity.TOP, NO: android.view.Gravity.NO_GRAVITY, parse: function (str) {
    for (var i in this) {
        if (typeof this[i] == "number") {
            eval(i + " = this[i]");
        }
    }
    return eval(str.toUpperCase());
}}, Color: {BLACK: android.graphics.Color.BLACK, WHITE: android.graphics.Color.WHITE, RED: android.graphics.Color.RED, GREEN: android.graphics.Color.GREEN, BLUE: android.graphics.Color.BLUE, YELLOW: android.graphics.Color.YELLOW, CYAN: android.graphics.Color.CYAN, MAGENTA: android.graphics.Color.MAGENTA, GRAY: android.graphics.Color.GRAY, LTGRAY: android.graphics.Color.LTGRAY, DKGRAY: android.graphics.Color.DKGRAY, TRANSPARENT: android.graphics.Color.TRANSPARENT, parse: function (str) {
    return android.graphics.Color.parseColor(str);
}}, Direction: {INHERIT: android.view.View.LAYOUT_DIRECTION_INHERIT, LOCALE: android.view.View.LAYOUT_DIRECTION_LOCALE, LTR: android.view.View.LAYOUT_DIRECTION_LTR, RTL: android.view.View.LAYOUT_DIRECTION_RTL}, Visibility: {VISIBLE: android.view.View.VISIBLE, INVISIBLE: android.view.View.INVISIBLE, GONE: android.view.View.GONE}};
Ui.getFontSize = function (size) {
    return Math.round(this.getX(size) / this.Display.DENSITY);
};
Ui.getFontMargin = function () {
    return this.getY(7);
};
Ui.getX = function (x) {
    return x > 0 ? Math.round(this.Display.WIDTH / (1280 / x)) : x;
};
Ui.getY = function (y) {
    return y > 0 ? Math.round(this.Display.HEIGHT / (720 / y)) : y;
};
Ui.getLayoutParams = function (width, height, direction, margins) {
    var width = this.getX(width), height = this.getY(height);
    var params = android.view.ViewGroup.LayoutParams(width, height != null ? height : width);
    if (margins) {
        params.setMargins(this.getX(margins[0]), this.getY(margins[1]), this.getX(margins[2]), this.getY(margins[3]));
    }
    if (direction) {
        params.setLayoutDirection(direction);
    }
    return params;
};
Ui.getEmptyDrawable = function () {
    return new android.graphics.drawable.ColorDrawable();
};
Ui.vibrate = function (time) {
    handle(function () {
        context.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(time);
    });
};
function Window(params) {
    var count = Window.instances.push(this);
    this.width = this.height = Ui.Display.MATCH;
    this.x = this.y = this.gravity = 0;
    this.id = "window" + count;
    this.isTouchable = true;
    this.isShowed = false;
    this.setOnInitializationListener = function (action) {
        this.__init = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.applyParams = function (params) {
        if (params instanceof Widget) {
            this.setWidget(params);
        } else {
            for (var item in params) {
                var param = params[item];
                switch (item) {
                  case "hooks":
                  case "actions":
                  case "listeners":
                    param.onInit && this.setOnInitializationListener(param.onInit);
                    param.onUpdate && this.setOnUpdateListener(param.onUpdate);
                    param.onCreate && this.setOnCreateListener(param.onCreate);
                    param.onRemove && this.setOnRemoveListener(param.onRemove);
                    param.onShow && this.setOnShowListener(param.onShow);
                    param.onHide && this.setOnHideListener(param.onHide);
                    break;
                  case "content":
                  case "views":
                    this.setContent(param);
                    break;
                  case "x":
                    this.setX(param);
                    break;
                  case "y":
                    this.setY(param);
                    break;
                  case "place":
                  case "position":
                  case "location":
                    if (Array.isArray(param)) {
                        this.setPosition(param[0], param[1]);
                    } else {
                        if (typeof param != "object") {
                            this.setPosition(param, param);
                        } else {
                            this.setPosition(param.x, param.y);
                        }
                    }
                    break;
                  case "touchable":
                  case "touch":
                    this.setTouchable(param);
                    break;
                  case "gravity":
                    this.setGravity(param);
                    break;
                  case "width":
                    this.setWidth(param);
                    break;
                  case "height":
                    this.setHeight(param);
                    break;
                  case "params":
                  case "sizes":
                    if (Array.isArray(param)) {
                        this.setParams(param[0], param[1]);
                    } else {
                        if (typeof param != "object") {
                            this.setParams(param, param);
                        } else {
                            this.setParams(param.width || param.x, param.height || param.y);
                        }
                    }
                    break;
                }
            }
        }
    };
    this.findWidgetById = function (id, widget) {
        !widget && (widget = this.widget);
        if (widget.id == id) {
            return widget;
        }
        if (!widget.childrens) {
            return widget.id == id ? widget : undefined;
        }
        for (var i = 0; i < widget.childrens.length; i++) {
            var child = widget.childrens[i];
            if (id == child.id) {
                return child;
            }
            if (child.childrens) {
                var result = this.findWidgetById(id, child);
                if (result) {
                    return result;
                }
            }
        }
    };
    this.reset = function () {
        Window.instances.splice(count - 1, 1);
        this.window && this.remove();
    };
    this.setOnCreateListener = function (action) {
        this.__create = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.create = function () {
        var scope = this;
        if (this.window) {
            return;
        }
        this.widget.setVisibility("gone");
        this.__create && this.widget.view.post(function () {
            scope.__create(scope);
        });
        this.window = new android.widget.PopupWindow(this.widget.view, this.width, this.height);
        this.window.setTouchable(false);
        this.window.showAtLocation(context.getWindow().getDecorView(), this.gravity, this.x, this.y);
    };
    this.setOnRemoveListener = function (action) {
        this.__remove = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.remove = function () {
        this.window.dismiss();
        delete this.window;
        this.__remove && this.__remove(this);
    };
    this.setWidth = function (width) {
        typeof width != "undefined" && (this.width = Ui.getX(width));
        this.window && this.update();
    };
    this.setHeight = function (height) {
        typeof height != "undefined" && (this.height = Ui.getY(height));
        this.window && this.update();
    };
    this.setParams = function (width, height) {
        typeof width == "string" && (width = Ui.Display[width.toUpperCase()]);
        typeof height == "string" && (height = Ui.Display[height.toUpperCase()]);
        typeof width != "undefined" && (this.width = Ui.getX(width));
        typeof height != "undefined" && (this.height = Ui.getY(height));
        this.window && this.update();
    };
    this.setTouchable = function (touchable) {
        this.isTouchable = touchable;
        this.window && this.update();
    };
    this.setX = function (x) {
        typeof x != "undefined" && (this.x = Ui.getX(x));
        this.window && this.update();
    };
    this.setY = function (y) {
        typeof y != "undefined" && (this.y = Ui.getY(y));
        this.window && this.update();
    };
    this.setPosition = function (x, y) {
        typeof x != "undefined" && (this.x = Ui.getX(x));
        typeof y != "undefined" && (this.y = Ui.getY(y));
        this.window && this.update();
    };
    this.setGravity = function (gravity) {
        if (typeof gravity == "number") {
            this.gravity = gravity;
        } else {
            this.gravity = Ui.Gravity.parse(gravity.toUpperCase());
        }
        this.window && (this.remove(), this.create());
    };
    this.setWidget = function (widget) {
        this.widget = widget;
        this.window && this.update();
    };
    this.setContent = function (content) {
        if (Array.isArray(content)) {
            this.setWidget(new Widget({type: "linear", childrens: content}));
        } else {
            this.setWidget(new Widget(content));
        }
    };
    this.setOnUpdateListener = function (action) {
        this.__update = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.update = function () {
        if (this.window) {
            this.window.update(this.x, this.y, this.width, this.height);
            this.window.setContentView(this.widget.view);
            this.window.setTouchable(this.isTouchable);
            this.__update && this.__update(this);
        }
    };
    this.setOnShowListener = function (action) {
        this.__show = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.show = function (post) {
        var scope = this;
        if (!this.window) {
            return;
        }
        this.isTouchable && this.window.setTouchable(true);
        this.update();
        this.isShowed = true;
        this.__show && this.widget.view.post(function () {
            scope.__show(scope);
            post && scope.handle(post);
        });
        this.widget.setVisibility("visible");
    };
    this.setOnHideListener = function (action) {
        this.__hide = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.hide = function () {
        var scope = this;
        if (!this.window) {
            return;
        }
        this.isTouchable && this.window.setTouchable(false);
        this.update();
        this.isShowed = false;
        this.__hide && this.widget.view.post(function () {
            scope.__hide(scope);
        });
        this.widget.setVisibility("gone");
    };
    params && this.applyParams(params);
    this.__init && this.__init(this);
}
Window.instances = [];
Window.dismiss = function () {
    Window.instances.forEach(function (i) {
        i.window && i.remove();
    });
};

