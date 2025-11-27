var Action = function (params) {
    var count = Action.instances.push(this);
    this.id = "action" + count;
    this.tick = this.real = 0;
    this.isActive = false;
    this.sleep = 50;
    this.await = 1;
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
        for (var item in params) {
            var param = params[item];
            switch (item) {
              case "hooks":
              case "actions":
              case "listeners":
                param.onInit && this.setOnInitializationListener(param.onInit);
                param.onExecute && this.setOnExecuteListener(param.onExecute);
                param.onCancel && this.setOnCancelListener(param.onFinish);
                param.onPause && this.setOnPauseListener(param.onPause);
                param.onDestroy && this.setOnDestroyListener(param.onDestroy);
                param.onComplete && this.setAction(param.onComplete);
                break;
              case "action":
              case "complete":
                this.setAction(param);
                break;
              case "condition":
                this.setCondition(param);
                break;
              case "cancel":
                this.setOnCancelListener(param);
                break;
              case "tick":
                this.setTickTime(param);
                break;
              case "await":
              case "sleep":
                this.setAwait(param);
                break;
            }
        }
    };
    this.setAction = function (action) {
        this.__action = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setCondition = function (condition) {
        this.__condition = function (scope) {
            try {
                return condition();
            }
            catch (e) {
                reportError(e);
                return false;
            }
        };
    };
    this.setAwait = function (time) {
        this.await = time;
    };
    this.create = function () {
        var scope = this;
        if (this.thread) {
            return;
        }
        this.tick = this.real = 0;
        this.thread = new java.lang.Thread(function () {
            while (scope && scope.thread && scope.sleep > 0) {
                try {
                    if (scope.isActive) {
                        scope.tick == 0 && java.lang.Thread.sleep(scope.sleep);
                        (scope.tick++, scope.real += scope.sleep);
                        if (scope.tick >= scope.await && scope.await >= 0) {
                            scope.complete();
                        } else {
                            if (scope.__condition && scope.__condition(scope)) {
                                java.lang.Thread.sleep(scope.sleep);
                            } else {
                                scope.cancel();
                            }
                        }
                    } else {
                        java.lang.Thread.sleep(1);
                    }
                }
                catch (e) {
                    reportError(e);
                }
            }
        });
        this.thread.start();
        this.__create && this.__create(this);
        return this;
    };
    this.execute = function () {
        var scope = this;
        this.isActive = true;
        this.tick = this.real = 0;
        this.__execute && this.__execute(this);
        log("Action", "Executing " + this.id);
    };
    this.setTickTime = function (time) {
        typeof time == "number" && (this.sleep = time);
    };
    this.pause = function (time) {
        var scope = this;
        this.isActive = false;
        time && handle(function () {
            scope.isActive = true;
        }, time);
        this.__pause && this.__pause(this);
    };
    this.cancel = function () {
        this.isActive = false;
        this.__cancel && this.__cancel(this);
        this.tick = this.real = 0;
        log("Action", "Cancelling " + this.id);
    };
    this.complete = function () {
        this.isActive = false;
        this.__action && this.__action(this);
        this.tick = this.real = 0;
        log("Action", "Completing " + this.id);
    };
    this.destroy = function () {
        delete this.thread;
        this.isActive = false;
        this.tick = this.real = 0;
        Action.instances.splice(count - 1, 1);
        this.__destroy && this.__destroy(this);
    };
    this.setOnExecuteListener = function (action) {
        this.__execute = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnPauseListener = function (action) {
        this.__pause = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnCancelListener = function (action) {
        this.__cancel = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnDestroyListener = function (action) {
        this.__destroy = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
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
    params && this.applyParams(params);
    this.__init && this.__init(this);
};
Action.instances = [];
Action.prepare = function () {
    Action.instances.forEach(function (i) {
        i.sleep > 0 && i.create();
    });
};
Action.destroy = function () {
    Action.instances.forEach(function (i) {
        i.thread && i.destroy();
    });
};

