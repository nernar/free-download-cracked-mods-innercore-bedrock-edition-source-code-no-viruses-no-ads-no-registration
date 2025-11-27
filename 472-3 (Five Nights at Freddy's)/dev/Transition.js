function Transition(obj) {
    this.fps = 60;
    this.frames = [];
    this.__compareVectorPoint = function (index, request) {
        var frame = this.frames[index], center = frame[5] / 2, speedest = 1;
        frame[7] == Transition.Vector.CENTER && (request < center ? (speedest = 2 * (request / center)) : (speedest = 2 * (frame[5] - request) / center));
        frame[7] == Transition.Vector.START && (speedest = 2 * ((frame[5] - request) / frame[5]));
        frame[7] == Transition.Vector.END && (speedest = 2 * (request / frame[5]));
        this.addPoint(frame[0] * speedest, frame[1] * speedest, frame[2] * speedest, frame[3] * speedest, frame[4] * speedest);
    };
    this.addFrame = function (x, y, z, yaw, pitch, duration, vector) {
        var request = this.fps * (duration > 0 ? duration : 1 / this.fps);
        this.frames.push(vector + "" != "undefined" ? [x / request, y / request, z / request, yaw / request, pitch / request, request, 1000 / this.fps, vector] : [x / request, y / request, z / request, yaw / request, pitch / request, request, 1000 / this.fps]);
    };
    this.addPoint = function (x, y, z, yaw, pitch) {
        this.point[0] += x;
        this.point[1] += y;
        this.point[2] += z;
        this.point[3] += yaw;
        this.point[4] += pitch;
    };
    this.getRelativePoint = function () {
        return {x: this.point[0] - this.starting[0], y: this.point[1] - this.starting[1], x: this.point[2] - this.starting[2], yaw: this.point[3] - this.starting[3], pitch: this.point[4] - this.starting[4]};
    };
    this.setPoint = function (x, y, z, yaw, pitch) {
        this.point = [x, y, z, yaw, pitch];
    };
    this.setFramesPerSecond = function (limit) {
        this.fps = limit <= 240 ? limit : 60;
    };
    this.start = function () {
        if (!this.entity) {
            return log("Transition", "Entity is not defined");
        }
        if (!this.starting) {
            return log("Transition", "Start point not setted up");
        }
        if (this.__thread == null) {
            var builder = this;
            this.__thread = new java.lang.Thread(function () {
                var point = (builder.point = builder.starting.slice());
                if (builder.__start) {
                    builder.__start(builder);
                }
                Entity.setMobile(builder.entity, false);
                for (var index = 0; index < builder.frames.length; index++) {
                    var frame = builder.frames[index];
                    for (var request = 0; request < frame[5]; request++) {
                        builder.__compareVectorPoint(index, request);
                        Entity.setPosition(builder.entity, point[0], point[1], point[2]);
                        Entity.setLookAngle(builder.entity, point[3], point[4]);
                        if (builder.__frame) {
                            builder.__frame(builder, index, request);
                        }
                        if (builder.__thread) {
                            builder.__thread.sleep(frame[6]);
                        } else {
                            (index = builder.frames.length) && (request = frame[5]);
                        }
                    }
                }
                Entity.setMobile(builder.entity, true);
                if (builder.__finish) {
                    builder.__finish(builder);
                }
                delete builder.__thread;
            });
            this.__thread.start();
        }
    };
    this.stop = function () {
        if (this.__thread) {
            delete this.__thread;
        }
    };
    this.isStarted = function () {
        return this.__thread + "" != "undefined";
    };
    this.withFrom = function (x, y, z, yaw, pitch) {
        this.starting = [x, y, z, yaw, pitch];
    };
    this.withEntity = function (entity) {
        this.entity = entity;
    };
    this.withOnStartListener = function (listener) {
        this.__start = listener;
    };
    this.withOnFrameListener = function (listener) {
        this.__frame = listener;
    };
    this.withOnFinishListener = function (listener) {
        this.__finish = listener;
    };
    this.withFrames = function (frames) {
        for (var i = 0; i < frames.length; i++) {
            this.addFrame(frames[i][0], frames[i][1], frames[i][2], frames[i][3], frames[i][4], frames[i][5], frames[i][6]);
        }
    };
    if (obj) {
        typeof obj == "object" && this.withFrames(obj);
        typeof obj == "number" && this.withEntity(obj);
    }
}
Transition.Vector = {DISABLED: 0, CENTER: 1, START: 2, END: 3};

