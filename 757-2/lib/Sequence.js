LIBRARY({name: "Sequence", version: 1, shared: true, api: "AdaptedScript", dependencies: ["Retention:4"]});
IMPORT("Retention:4");
let Sequence = function (obj) {
    if (obj !== undefined) {
        for (let element in obj) {
            this[element] = obj[element];
        }
    }
    let count = Sequence.instances++;
    this.id = "sequence" + count;
};
Sequence.prototype.getThread = function () {
    return this.thread !== undefined ? this.thread : null;
};
Sequence.prototype.getSynchronizeTime = function () {
    return this.between !== undefined ? this.between : 5;
};
Sequence.prototype.setSynchronizeTime = function (ms) {
    this.between = Number(ms);
};
Sequence.prototype.getPriority = function () {
    return this.priority !== undefined ? this.priority : 8;
};
Sequence.prototype.setPriority = function (priority) {
    this.priority = Number(priority);
    let thread = this.getThread();
    thread && thread.setPriority(this.getPriority());
};
Sequence.prototype.setFixedCount = function (count) {
    this.count = Number(count);
};
Sequence.prototype.getFixedCount = function () {
    return this.count !== undefined ? this.count : 1;
};
Sequence.prototype.setReportingEnabled = function (enabled) {
    this.reporting = Boolean(enabled);
};
Sequence.prototype.isReportingEnabled = function () {
    return this.reporting !== undefined ? this.reporting : true;
};
Sequence.prototype.sync = function (active) {
    let sequence = this;
    handle(function () {
        if (sequence.completed === undefined) {
            if (sequence.updated === true) {
                sequence.update && sequence.update.call(sequence, sequence.count === undefined ? sequence.index : sequence.index / sequence.count * 100, sequence.index);
                delete sequence.updated;
            }
            sequence.tick && sequence.tick(sequence.index, Date.now() - active, active);
            sequence.sync && sequence.sync(active);
            return;
        }
        if (sequence.completed === true) {
            sequence.complete && sequence.complete.call(sequence, Date.now() - active, active);
        }
        delete sequence.completed;
        delete sequence.index;
    }, this.getSynchronizeTime());
};
Sequence.prototype.execute = function (value) {
    if (this.getThread() !== null) {
        MCSystem.throwException("Sequence[" + this.id + "] are already executing");
    }
    this.index = 0;
    this.thread = new Object();
    let sequence = this;
    handle(function () {
        let active = Date.now(), next;
        sequence.create && sequence.create.call(sequence, value, active);
        sequence.thread = handleThread(function () {
            tryout(function () {
                if (sequence.uncount !== undefined) {
                    sequence.count = sequence.uncount.call(sequence, value);
                    sequence.require();
                }
                while ((next = sequence.next.call(sequence, value, sequence.index)) !== undefined) {
                    if (sequence.isInterrupted()) {
                        Interface.sleepMilliseconds(1);
                    }
                    sequence.index = sequence.process.call(sequence, next, value, sequence.index);
                    sequence.require();
                }
                sequence.completed = true;
            }, function (e) {
                sequence.completed = false;
                handle(function () {
                    sequence.cancel && sequence.cancel.call(sequence, e);
                });
            });
            delete sequence.thread;
            if (sequence.uncount !== undefined) {
                delete sequence.count;
            }
            delete sequence.updated;
        }, sequence.getPriority());
        sequence.sync && sequence.sync(active);
    });
};
Sequence.prototype.require = function (index, count) {
    if (index !== undefined) {
        this.index = index;
    }
    if (count !== undefined) {
        this.count = count;
    }
    this.updated = true;
};
Sequence.prototype.shrink = function (addition) {
    if (addition !== undefined) {
        this.count += addition;
    }
    this.updated = true;
};
Sequence.prototype.next = function (value, index) {
    if (index >= this.getFixedCount()) {
        return undefined;
    }
    return ++index;
};
Sequence.prototype.process = function (element, value, index) {
    MCSystem.throwException("Sequence.process must be overwritten");
};
Sequence.prototype.cancel = function (error) {
    if (error && error.message != "java.lang.InterruptedException: null") {
        if (this.isReportingEnabled()) {
            reportError(error);
        }
    }
};
Sequence.prototype.interrupt = function () {
    if (!this.isInterrupted()) {
        let thread = this.getThread();
        thread && thread.interrupt();
    }
};
Sequence.prototype.isInterrupted = function () {
    let thread = this.getThread();
    return thread && thread.isInterrupted();
};
Sequence.prototype.assureYield = function (thread) {
    if (this.getThread() === null) {
        return false;
    }
    while (this.getThread() !== null) {
        if (thread === undefined) {
            java.lang.Thread.yield();
        } else {
            thread.yield();
        }
    }
    return true;
};
Sequence.instances = 0;
EXPORT("Sequence", Sequence);

