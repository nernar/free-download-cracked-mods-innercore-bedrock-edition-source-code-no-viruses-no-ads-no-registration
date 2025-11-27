var LoadingAnimation = {targetUIs: [{content: TabList.body, container: BrowserUI.container, win: BrowserUI.window.getWindowForTab(6)}], running: false, step: 0, time: 0, guiElement: null, clearUi: function () {
    for (var i in this.targetUIs) {
        var win = this.targetUIs[i].win;
        var elements = this.targetUIs[i].content.elements;
        for (var name in elements) {
            elements[name] = null;
        }
        if (win) {
            win.forceRefresh();
        }
    }
}, clearUpdateUi: function () {
    var win = BrowserUI.window.getWindowForTab(7);
    var elements = TabUpdate.body.elements;
    for (var name in elements) {
        elements[name] = null;
    }
    if (win) {
        win.forceRefresh();
    }
}, start: function () {
    this.guiElement = {type: "text", x: 500, y: 125, text: "\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7", font: fonts.loadingAnimation};
    for (var i in this.targetUIs) {
        this.targetUIs[i].content.elements._loading = this.guiElement;
    }
    if (!this.running) {
        this.step = 0;
        this.time = 0;
        this.running = true;
        inThread(function () {
            while (LoadingAnimation.running) {
                LoadingAnimation.animate();
                java.lang.Thread.sleep(20);
            }
        });
    }
}, stop: function () {
    TabList.body.elements._loading = null;
    this.running = false;
}, showFailed: function () {
    this.running = false;
    TabList.body.elements._loading.text = locale.update_fail;
}, animate: function () {
    var t = java.lang.System.currentTimeMillis();
    if (t - this.time > 100) {
        this.time = t;
        this.step++;
        if (this.step > 9) {
            this.step = 0;
        }
        var text = "\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7";
        text = text.substr(0, this.step) + "|" + text.substr(this.step + 1);
        for (var i in this.targetUIs) {
            this.targetUIs[i].container.setText("_loading", text);
        }
    }
}};

