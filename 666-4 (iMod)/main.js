/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 12
*/



// file: other.js

const BitmapFactory = android.graphics.BitmapFactory;
const Bitmap = android.graphics.Bitmap;

const Timer = java.util.Timer;
const TimerTask = java.util.TimerTask;

const JAVA_ANIMATOR = android.animation.ValueAnimator;
const JAVA_HANDLER = android.os.Handler;
const LOOPER_THREAD = android.os.Looper;
const JAVA_HANDLER_THREAD = new JAVA_HANDLER(LOOPER_THREAD.getMainLooper());

var InnerCore_pack = FileTools.ReadJSON(__packdir__ + 'manifest.json');

Callback['com.ulalald.asd'] = Callback['com.ulalald.asd'] || [];
Callback['com.ulalald.asd.ddd'] = false;
const mod = FileTools.ReadJSON(__dir__ + 'mod.info');
Callback['com.ulalald.asd'].push(mod);
Callback.addCallback("LevelLoaded", function () {
	//Game.tipMessage('§c' + mod.name + '\n§a' + mod.version)
	if (!Callback['com.ulalald.asd.ddd']) {
		Game.tipMessage(Callback['com.ulalald.asd'].map(function (elem) {
			return '§c' + elem.name + '   §a' + elem.version;
		}).join('\n'))
		Callback['com.ulalald.asd.ddd'] = true;
	}
});
Callback.addCallback("LevelLeft", function () {
	Callback['com.ulalald.asd.ddd'] = false;
});

var levelloaded = false;

const searchItem = function (id, data, list, reverse) {
	if(typeof(data) != "number")data = -1;
	if(typeof(id) != "number")id = -1;
	if(reverse){
		if(list){
			var itemsList = [];
			for (var i = 35; i >= 0; i--) {
				var item = Player.getInventorySlot(i);
				if ((item.id == id || (id == -1 && item.id != 0)) && (item.data == data || data == -1)) {
					itemsList.push({
						id: item.id,
						data: item.data,
						extra: item.extra,
						count: item.count,
						slot: i
					})
				}
			}
			return itemsList;
		} else for (var i = 35; i >= 0; i--) {
			var item = Player.getInventorySlot(i);
			if ((item.id == id || (id == -1 && item.id != 0)) && (item.data == data || data == -1)) {
				return {
					id: item.id,
					data: item.data,
					extra: item.extra,
					count: item.count,
					slot: i
				}
			}
		}
	} else {
		if(list){
			var itemsList = [];
			for (var i = 0; i <= 35; i++) {
				var item = Player.getInventorySlot(i);
				if ((item.id == id || (id == -1 && item.id != 0)) && (item.data == data || data == -1)) {
					itemsList.push({
						id: item.id,
						data: item.data,
						extra: item.extra,
						count: item.count,
						slot: i
					})
				}
			}
			return itemsList;
		} else for (var i = 0; i <= 35; i++) {
			var item = Player.getInventorySlot(i);
			if ((item.id == id || (id == -1 && item.id != 0)) && (item.data == data || data == -1)) {
				return {
					id: item.id,
					data: item.data,
					extra: item.extra,
					count: item.count,
					slot: i
				}
			}
		}
	}
}

const getPointed = ModAPI.requireGlobal("Player.getPointed");

/*const setTimeout = function (func, ticks) {
	var upd = {
		ticks: 0,
		update: function () {
			this.ticks++
			if (this.ticks >= ticks) {
				func();
				this.remove = true
			}
		}
	};
	Updatable.addUpdatable(upd);
}

const setInterval = function (func, ticks, _first) {
	if (_first && func()) return;
	var upd = {
		ticks: 0,
		update: function () {
			this.ticks++
			if (this.ticks >= ticks) {
				this.ticks = 0;
				if (func()) this.remove = true;
			}
		}
	};
	Updatable.addUpdatable(upd);
	return upd;
}

const clearInterval = function (upd) {
	if (upd && upd == {} && upd.remove) {
		upd.remove = true;
	}
}*/

const log = function (text) {
	if (levelloaded) {
		Game.message(text);
	};
	Logger.Log(text, mod.name + " Log");
}

//const devLogs = [];
var __dev = __config__.getBool("dev");
const devLog = function (text) {
	if (!__dev) return;
	if (levelloaded) {
		Game.message(text);
	};
	Logger.Log(text, mod.name + " devLog");
}

Callback.addCallback("LevelLoaded", function () {
	levelloaded = true
})

Callback.addCallback("LevelLeft", function () {
	levelloaded = false
});

var _LevelDisplayed = false;
Callback.addCallback("LevelDisplayed", function () {
	_LevelDisplayed = true;
});
Callback.addCallback("LevelLeft", function () {
	_LevelDisplayed = false;
});

var _inventory_open = false;
Callback.addCallback('NativeGuiChanged', function (screenName) {
	if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
		_inventory_open = true;
	else
		_inventory_open = false;
});

const mod_tip = function (id) {
	if (BlockID[id]) id = Block.convertBlockToItemId(id);
	Callback.addCallback('PostLoaded', function () {
		var _func = Item.nameOverrideFunctions[id];
		Item.registerNameOverrideFunction(id, function (item, name) {
			if (_func) name = _func(item, name);
			if (_inventory_open) name += "\n§9" + mod.name;
			return name;
		})
	});
}

const items_vanilla = [6, 27, 28, 30, 32, 37, 38, 39, 40, 50, 69, 76, 102, 106, 111, 126, 175, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511];

const blocks_vanilla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255];

const items_and_blocks_vanilla = items_vanilla.concat(blocks_vanilla);

var all_items = items_vanilla;

var all_blocks = blocks_vanilla;

var all_items_and_blocks;


Callback.addCallback("ModsLoaded", function () {
	for (var i in ItemID) {
		all_items.push(ItemID[i]);
	};
	for (var i in BlockID) {
		all_blocks.push(BlockID[i]);
	};
	all_items_and_blocks = all_items.concat(all_blocks);
	//log(all_items_and_blocks);
});

const allParams = function (json, fullParams) {
	if (typeof (json) != "object") return json;
	var params = '{\n';
	for (var key in json) {
		if (fullParams) {
			params += key + ' : ' + allParams(json[key], true) + '\n';
		} else {
			params += key + ' : ' + json[key] + '\n';
		}
	}
	params += '}';
	return params;
}

const JSONlength = function (json) {
	var length = 0;
	for (var i in json) {
		length++
	}
	return length;
}

const setCharAt = function (str, index, chr) {
	if (index > str.length - 1) return str;
	return str.substr(0, index) + chr + str.substr(index + chr.length);
}

const jSetInterval = function (__fun, __mil) {
	var timer = new Timer();
	var task = new TimerTask({
		run: function () {
			if (__fun()) timer.cancel();
		}
	})
	timer.scheduleAtFixedRate(task, 0, __mil);
	return timer;
}

const jSetTimeout = function (__fun, __mil) {
	var timer = new Timer();
	var task = new TimerTask({
		run: function () {
			__fun();
		}
	})
	timer.schedule(task, __mil);
	return timer;
}

const jClearInterval = function (__interval) {
	if (__interval && __interval.cancel) __interval.cancel();
}

const sides = [
	[1, 0, 0],
	[-1, 0, 0],
	[0, 0, 1],
	[0, 0, -1],
	[0, 1, 0],
	[0, -1, 0]
];

/*const drop = function (x, y, z, id, count, data, extra) {
	var container = new UI.Container();
	var item = container.getSlot("asd");
	item.id = Number(id);
	item.count = Number(count);
	item.data = Number(data);
	item.extra = extra;
	container.dropAt(x, y, z);
}*/

const onCallbacks = {};

function onCallback(name, func) {
	if (!onCallbacks[name]) {
		onCallbacks[name] = [];
		Callback.addCallback(name, function (a, b, c, d, e, f, g, h) {
			for (var i in onCallbacks[name]) {
				var res = onCallbacks[name][i](a, b, c, d, e, f, g, h);
				if (res == "delete") onCallbacks[name].splice(i, 1);
			}
		});
	}
	onCallbacks[name].push(func);
	return onCallbacks[name].length - 1;
}

const setTimeout = function (func, _ticks) {
	var ticks__ = 0;
	return {
		id: onCallback('tick', function () {
			ticks__++;
			if (ticks__ >= _ticks) {
				func()
				return 'delete';
			}
		}),
		name: 'tick'
	}
}

const setInterval = function (func, _ticks, _first) {
	if (_first && func()) return;
	var ticks__ = 0;
	return {
		id: onCallback('tick', function () {
			ticks__++;
			if (ticks__ >= _ticks) {
				ticks__ = 0;
				if (func()) return 'delete';
			}
		}),
		name: 'tick'
	}
}

const setTimeoutLocal = function (func, _ticks) {
	var ticks__ = 0;
	return {
		id: onCallback('LocalTick', function () {
			ticks__++;
			if (ticks__ >= _ticks) {
				func()
				return 'delete';
			}
		}),
		name: 'LocalTick'
	}
}

const setIntervalLocal = function (func, _ticks, _first) {
	if (_first && func()) return;
	var ticks__ = 0;
	return {
		id: onCallback('LocalTick', function () {
			ticks__++;
			if (ticks__ >= _ticks) {
				if (func()) return 'delete';
			}
		}),
		name: 'LocalTick'
	}
}

const clearInterval = function (upd) {
	if (upd && upd.id >= 0) {
		onCallbacks[upd.name].splice(upd.id, 1);
		upd = false;
	}
}

function _randomInt(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

function _random(min, max) {
	return Math.random() * (max - min) + min;
}

function _find_block_y(coords) {
	for (var i = coords.y; i >= 0; i--) {
		if (World.getBlock(coords.x, i, coords.z).id != 0) return i;
	}
}

function rotateBitmap(__bitmap, __angle) {
	var matrix = new android.graphics.Matrix();
	matrix.postRotate(__angle);
	if (typeof (__bitmap) == 'string') {
		var options = new BitmapFactory.Options();
		options.inPreferredConfig = Bitmap.Config.ARGB_8888;
		__bitmap = BitmapFactory.decodeFile(__dir__ + __bitmap, options);
	}
	return Bitmap.createBitmap(__bitmap, 0, 0, __bitmap.getWidth(), __bitmap.getHeight());
}

const cts = function (coords) {
	if (typeof (coords) != "object") return null;
	return coords.x + "," + coords.y + "," + coords.z;
}

const createBitmap = function(__bitmap){
	if (typeof (__bitmap) == 'string') {
		var options = new BitmapFactory.Options();
		options.inPreferredConfig = Bitmap.Config.ARGB_8888;
		__bitmap = BitmapFactory.decodeFile(__dir__ + __bitmap, options);
		return Bitmap.createBitmap(__bitmap, 0, 0, __bitmap.getWidth(), __bitmap.getHeight());
	}
}

const cutBitmap = function(__bitmap, x, y, width, height){
	if (typeof (__bitmap) == 'string') {
		var options = new BitmapFactory.Options();
		options.inPreferredConfig = Bitmap.Config.ARGB_8888;
		__bitmap = BitmapFactory.decodeFile(__dir__ + __bitmap, options);
	}
	return Bitmap.createBitmap(__bitmap, x, y, width, height);
}

if (!Object.assign) {
	Object.defineProperty(Object, 'assign', {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function (target, firstSource) {
			'use strict';
			if (target === undefined || target === null) {
				throw new TypeError('Cannot convert first argument to object');
			}

			var to = Object(target);
			for (var i = 1; i < arguments.length; i++) {
				var nextSource = arguments[i];
				if (nextSource === undefined || nextSource === null) {
					continue;
				}

				var keysArray = Object.keys(Object(nextSource));
				for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
					var nextKey = keysArray[nextIndex];
					var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
					if (desc !== undefined && desc.enumerable) {
						to[nextKey] = nextSource[nextKey];
					}
				}
			}
			return to;
		}
	});
}

const newSides = [
	[0, -1, 0],
	[0, 1, 0],
	[0, 0, -1],
	[0, 0, 1],
	[-1, 0, 0],
	[1, 0, 0]
]

const createAnim = function(_values, _duration, _updateFunc){
	var animation = JAVA_ANIMATOR.ofInt(_values);
	animation.setDuration(_duration);
	if(_updateFunc)animation.addUpdateListener({
		onAnimationUpdate : function(updatedAnim){
			_updateFunc(updatedAnim.getAnimatedValue(), updatedAnim);
		}
	});
	JAVA_HANDLER_THREAD.post({
		run: function(){
			animation.start();
		}
	})
	return animation;
}

const stopAnim = function(_animation){
	if(_animation && _animation.end && _animation.isStarted())JAVA_HANDLER_THREAD.post({
		run: function(){
			_animation.end();
		}
	})
}

const numberWithCommas = function(_num) {
    return _num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




// file: header.js

IMPORT('SoundAPI');
const JAVA_URL = java.net.URL;
const BufferedReader = java.io.BufferedReader;
const InputStreamReader = java.io.InputStreamReader;
const Uri = android.net.Uri;

const modId = 666;

var tempdata = {};
Callback.addCallback('LevelLeft', function(){
    tempdata = {};
});

function getUrlContent(_url){
    var isError = {data: undefined};
    try {
        var input;
        var inputOpened = true;
        result = '';
        jSetTimeout(function(){//522;
            if(result.length == 0 && !isError.data){
                alert('Your internet connection is very slow\nIf you do not want to see this message and want make loading faster then change "changelogEnabled" to "false" in iMod config file');
            }
        }, 5000);
        var _URL_ = new JAVA_URL(_url);
        input = new BufferedReader(new InputStreamReader(_URL_.openStream()));
        while (inputOpened) {
            inputLine = input.readLine();
            if (inputLine) {
                result += inputLine + '\n';
            } else {
                input.close();
                return {data: result.substr(0, result.length - 1)};
            }
        }
        return {error:'408 Request Timeout'};
    } catch (e) {
        isError.data = e;
        Logger.Log('Changelog Error: ' + JSON.stringify(e), 'iMod');
        return {error: e};
    }
}

var currentVersion = Number(FileTools.ReadText(__dir__ + 'versionId.txt'));
var lastVersion = Number(getUrlContent('https://icmods.mineprogramming.org/api/version?id=' + modId).data) || currentVersion;
if(currentVersion < lastVersion) alert('Hey, new version of iMod is available for downloading please update!');

Callback.addCallback("PreLoaded", function () {
    dungeonLoot.push({id: 264, count: [1, 3], data: 0, extra: null, chance: 30});
    dungeonLoot.push({id: 266, count: [1, 5], data: 0, extra: null, chance: 50});
    dungeonLoot.push({id: 265, count: [2, 6], data: 0, extra: null, chance: 70});
    dungeonLoot.push({id: 263, count: [5, 10], data: 0, extra: null, chance: 80});
})

Network.addClientPacket("iMod.message", function(packetData) {
    Game.message(packetData.text);
});
Network.addClientPacket("iMod.tipmessage", function(packetData) {
    Game.tipMessage(packetData.text);
});




// file: blocks/radio.js

IDRegistry.genBlockID("iMod_radio");
Block.createBlockWithRotation("iMod_radio", [
	{
		name: "Radio",
		texture: [
            ['i_radio_side', 0],
            ['i_radio_side', 0],
            ['i_radio_side', 0],
            ['i_radio', 0],
            ['i_radio_side', 0],
            ['i_radio_side', 0]
        ],
		inCreative: true
	}
]);
mod_tip(BlockID["iMod_radio"]);

var noteParticles = [Particles.registerParticleType({
	texture: "Note",
	size: [0.7, 1],
    lifetime: [40, 40],
    color: [200, 110, 210, 1],
	render: 2,
	acceleration: [0, 0.001, 0]
}),Particles.registerParticleType({
	texture: "Note",
	size: [0.7, 1],
	lifetime: [40, 40],
    color: [110, 220, 130, 1],
	render: 2,
	acceleration: [0, 0.001, 0]
}),Particles.registerParticleType({
	texture: "Note",
	size: [0.7, 1],
	lifetime: [40, 40],
    color: [110, 220, 210, 1],
	render: 2,
	acceleration: [0, 0.001, 0]
}),Particles.registerParticleType({
	texture: "Note",
	size: [0.7, 1],
	lifetime: [40, 40],
    color: [220, 55, 55, 1],
	render: 2,
	acceleration: [0, 0.001, 0]
})]

var radioBoxes = [
    [0.1,0,0.3,0.9,0.5,0.7],
    [0.1,0,0.3,0.9,0.5,0.7],
    [0.3,0,0.1,0.7,0.5,0.9],
    [0.3,0,0.1,0.7,0.5,0.9]
]
for (var izxc = 0; izxc < 4; izxc++) {
    var render = new ICRender.Model();
    var _radioBox = radioBoxes[izxc];
    render.addEntry(new BlockRenderer.Model(_radioBox[0], _radioBox[1], _radioBox[2], _radioBox[3], _radioBox[4], _radioBox[5], BlockID.iMod_radio, izxc))
    Block.setShape(BlockID.iMod_radio, _radioBox[0], _radioBox[1], _radioBox[2], _radioBox[3], _radioBox[4], _radioBox[5], izxc);
	BlockRenderer.enableCoordMapping(BlockID.iMod_radio, izxc, render);
}

var radios = [];
var soundList = FileTools.GetListOfFiles(__dir__ + 'sounds');
for(var i = 0; i < soundList.length; i++){
    var splited = (soundList[i] + '').split('/');
    radios.push(splited[splited.length - 1]);
}
var maxRadio = radios.length - 1;
TileEntity.registerPrototype(BlockID.iMod_radio, {
	useNetworkItemContainer: true,
    defaultValues:{
        currentRadio: 0,
        radioPlay: false,
        ticks: 0
    },
    init: function(){
        this.data.radioPlay = false;
    },
    click: function(id, count, data, coords, player, extra){
        if(Entity.getSneaking(player)){
            this.stopMusic();
            this.data.radioPlay = false;
            return false;
        }
        this.setRadio(this.data.currentRadio + 1);
        return true;
    },
    /* getRadio: function(_id){
        var thisData = tempdata[cts(this)];
        if(!thisData) {
            thisData = tempdata[cts(this)] = [];
            for(var i in radios){
                var sound = new Sound(radios[i]);
                sound.setInBlock(this.x, this.y, this.z, 30);
                var ths = this;
                sound.setOnCompletion(function(){
                    ths.setRadio(i + 1);
                })
                thisData.push(sound)
            }
        }
        return thisData[_id] || {stop: function(){}, play: function(){}};
    }, */
    setRadio: function(_id){
        if(_id >= maxRadio) _id = 0;
        this.data.currentRadio = _id;
        this.playMusic(radios[_id]);
        this.data.radioPlay = true;
    },
    playMusic: function(name){
        this.sendPacket('playMusic', {name: name})
    },
    stopMusic: function(){
        this.sendPacket('stopMusic', {})
    },
    tick: function(){
        this.data.ticks++;
        if(this.data.radioPlay && this.data.ticks%25 == 0){
			/* var emitter = new Particles.ParticleEmitter(this.x + 0.5 + Math.random()/10, this.y + 0.6, this.z + 0.5 + Math.random()/10);
			emitter.setEmitRelatively(true);
            emitter.emit(noteParticles[_randomInt(0,3)], 0, 0, 0, 0); */
            this.sendPacket('emitParticle', {i: _randomInt(0,3)})
        }
    },
    /* destroy: function(){
        this.stopMusic();
    }, */
    events: {
        nextRadio: function(){
            this.setRadio(this.data.currentRadio + 1);
        },
        requireDownloading: function(packetData, packetExtra, connectedClient) {
            //alert('Donwloading required: ' + packetData.name);
            alert('Other players do not have this music: ' + packetData.name);
            //this.sendResponse("donwload", {data: FileTools.ReadText(__dir__ + 'sounds/' + packetData.name), name: packetData.name});
        },
        stopMusic: function(){
            this.stopMusic();
        },
        playCurrentMusic: function(){
            this.setRadio(this.data.currentRadio);
        }
    },
    client: {
        unload: function(){
            if(this.currentSound){
                this.currentSound.stop();
                this.currentSound = null;
            }
        },
        currentSound: null,
        downloading: false,
        playMusic: function(name){
            //alert('Play music: ' + name);
            if(this.currentSound)this.currentSound.stop();
            if(!FileTools.isExists(__dir__+"sounds/"+name)){
                //alert('Require downloading');
                this.downloading = true;
                this.sendPacket('stopMusic', {});
                this.sendPacket('requireDownloading', {name: name});
                return;
            }
            var sound = new Sound(name);
            sound.setInBlock(this.x, this.y, this.z, 30);
            var ths = this;
            sound.setOnCompletion(function(){
                ths.sendPacket('nextRadio', {});
            });
            sound.play();
            this.currentSound = sound;
        },
        stopMusic: function(packetData, packetExtra){
            if(this.currentSound){
                this.currentSound.stop();
                this.currentSound = null;
            }
        },
        events: {
            playMusic: function(packetData, packetExtra) {
                this.playMusic(packetData.name);
            },
            stopMusic: function(packetData, packetExtra){
                if(this.currentSound){
                    this.currentSound.stop();
                    this.currentSound = null;
                }
            },
            emitParticle: function(packetData, packetExtra){
                var emitter = new Particles.ParticleEmitter(this.x + 0.5 + Math.random()/10, this.y + 0.6, this.z + 0.5 + Math.random()/10);
                emitter.setEmitRelatively(true);
                emitter.emit(noteParticles[packetData.i], 0, 0, 0, 0);
            },
            donwload: function(packetData, packetExtra){
                //alert('Donwloading success! ' + packetData.name);
                if(packetData.data){
                    FileTools.WriteText(__dir__ + 'sounds/' + packetData.name, packetData.data);
                    if(this.downloading){
                        this.sendPacket('playCurrentMusic', {});
                        this.downloading = false;
                    }
                }
            }
        }
    }
});




// file: blocks/dungeon_block.js

IDRegistry.genBlockID("iMod_dungeon_block");
Block.createBlock("iMod_dungeon_block", [
	{
		name: "Dungeon Block",
		texture: [
            ['dungeon_block', 0]
        ],
		inCreative: true
	}
], 'opaque');
mod_tip(BlockID["iMod_dungeon_block"]);

IDRegistry.genBlockID("iMod_easter_dungeon_block");
Block.createBlock("iMod_easter_dungeon_block", [
	{
		name: "Dungeon Block",
		texture: [
            ['easter_dungeon_block', 0],
            ['dungeon_block', 0]
        ],
		inCreative: true
	}
], 'opaque');
mod_tip(BlockID["iMod_easter_dungeon_block"]);

Block.registerDropFunction('iMod_easter_dungeon_block', function(){
    return [[BlockID.iMod_dungeon_block, 1, 0]];
})




// file: blocks/radio_tower.js

IDRegistry.genBlockID("iMod_radio_tower");
Block.createBlock("iMod_radio_tower", [
	{
		name: "Radio Tower",
		texture: [
            ['iMod_radio_tower', 0]
        ],
		inCreative: true
	}
]);
mod_tip(BlockID["iMod_radio_tower"]);

(function(){
    var render = new ICRender.Model();
    render.addEntry(new BlockRenderer.Model(0,0,0,1,1,1, BlockID.iMod_radio_tower, 0));
    //Block.setShape(BlockID.iMod_radio, _radioBox[0], _radioBox[1], _radioBox[2], _radioBox[3], _radioBox[4], _radioBox[5], izxc);
	BlockRenderer.enableCoordMapping(BlockID.iMod_radio_tower, 0, render);
})();

var structures = [];

Saver.addSavesScope("iModRadioTower",
	function read(scope){
		structures = scope && scope.structures ? scope.structures : [];
	},

	function save(){
		return {structures: structures};
	}
);

function getStructure(coords){
    for(var i in structures){
        for(var k in structures[i]){
            var _coords = structures[i][k];
            if(_coords.x == coords.x && _coords.y == coords.y && _coords.z == coords.z) return i;
        }
    }
}

Network.addClientPacket("iMod.mapRadioTower", function(packetData) {
    var coords = packetData.coords;
    var currentDim = BlockSource.getDefaultForActor(Network.getClient().getPlayerUid()).getDimension();
    if(currentDim != packetData.dimension) return;

    var render = new ICRender.Model();
    var model = BlockRenderer.createModel();
    model.addBox(0.3,0,0.3,0.7,0.6,0.7, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0]]);
    model.addBox(0.4,0.6,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0]]/* 'iMod_radio_tower_centre' */);
    render.addEntry(model);
    BlockRenderer.mapAtCoords(coords.x, coords.y - 1, coords.z, render);

    render = new ICRender.Model();
    model = BlockRenderer.createModel();
    model.addBox(0.4,0,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0]]/* 'iMod_radio_tower_centre' */);
    render.addEntry(model);
    BlockRenderer.mapAtCoords(coords.x, coords.y, coords.z, render);

    render = new ICRender.Model();
    model = BlockRenderer.createModel();
    model.addBox(0.4,0,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0]]);
    render.addEntry(model);
    BlockRenderer.mapAtCoords(coords.x, coords.y + 1, coords.z, render);
});

Network.addClientPacket("iMod.unmapRadioTower", function(packetData) {
    var centreBlock = packetData.coords;

    BlockRenderer.unmapAtCoords(centreBlock.x, centreBlock.y - 1, centreBlock.z);
    BlockRenderer.unmapAtCoords(centreBlock.x, centreBlock.y, centreBlock.z);
    BlockRenderer.unmapAtCoords(centreBlock.x, centreBlock.y + 1, centreBlock.z);
});

Block.registerPlaceFunction('iMod_radio_tower', function(coords, item, block, player, blocksource){
	coords = World.canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
	var relBlock = blocksource.getBlockId(coords.x, coords.y, coords.z);
    if (relBlock != 0 && relBlock != 9 && relBlock != 11) return;
    var playerr = new PlayerActor(player);
    blocksource.setBlock(coords.x, coords.y, coords.z, BlockID.iMod_radio_tower, 0);
    //Player.decreaseCarriedItem(1);
    var selectedSlot = playerr.getSelectedSlot();
    var itemInSelectedSlot = playerr.getInventorySlot(selectedSlot);
    itemInSelectedSlot.count > 1 ? playerr.setInventorySlot(selectedSlot, itemInSelectedSlot.id, itemInSelectedSlot.count - 1, itemInSelectedSlot.data, itemInSelectedSlot.extra || null) : playerr.setInventorySlot(selectedSlot, 0,0,0,null);
    var centreBlock = coords;
    var structure = true;
    if(blocksource.getBlockId(coords.x, coords.y + 1, coords.z) != BlockID.iMod_radio_tower){
        if(blocksource.getBlockId(coords.x, coords.y - 2, coords.z) == BlockID.iMod_radio_tower){
            if(getStructure({x: coords.x, y: coords.y - 2, z: coords.z}) >= 0) return;
            centreBlock = {x: coords.x, y: coords.y - 1, z: coords.z};
        } else {
            structure = false;
        }
    } else {
        if(getStructure({x: coords.x, y: coords.y + 1, z: coords.z}) >= 0) return;
    }
    if(blocksource.getBlockId(coords.x, coords.y - 1, coords.z) != BlockID.iMod_radio_tower){
        if(blocksource.getBlockId(coords.x, coords.y + 2, coords.z) == BlockID.iMod_radio_tower){
            if(getStructure({x: coords.x, y: coords.y + 2, z: coords.z}) >= 0) return;
            centreBlock = {x: coords.x, y: coords.y + 1, z: coords.z};
        } else {
            structure = false;
        }
    } else {
        if(getStructure({x: coords.x, y: coords.y - 1, z: coords.z}) >= 0) return;
    }
    if(structure){
        structures.push([{x: centreBlock.x, y: centreBlock.y - 1, z: centreBlock.z}, {x: centreBlock.x, y: centreBlock.y, z: centreBlock.z}, {x: centreBlock.x, y: centreBlock.y + 1, z: centreBlock.z}]);
        Network.sendToAllClients("iMod.mapRadioTower", {
            coords: centreBlock,
            dimension: blocksource.getDimension()
        });
    }
});

Block.registerDropFunction('iMod_radio_tower', function(coords){
    if((structureId = getStructure(coords)) >= 0) {
        var centreBlock = structures[structureId][1];
        Network.sendToAllClients("iMod.unmapRadioTower", {
            coords: centreBlock
        });
        structures.splice(structureId, 1);
    }
    return [[BlockID.iMod_radio_tower, 1, 0]]
})

Callback.addCallback('ItemUse', function (coords, item, block, asd, player) {
    if(item.id != BlockID.iMod_radio_tower && block.id == BlockID.iMod_radio_tower && (structureId = getStructure(coords)) >= 0){
        Game.prevent();
        var centreCoords = structures[structureId][1];
        var ctsCentreCoords = cts(centreCoords);
        if(!sortedDungeons[ctsCentreCoords] || !sortedDungeons[ctsCentreCoords][0])sortedDungeons[ctsCentreCoords] = dungeons.sort(function(a,b){
            return Entity.getDistanceBetweenCoords(centreCoords, a) - Entity.getDistanceBetweenCoords(centreCoords, b);
        })
        var __coords = sortedDungeons[ctsCentreCoords][0];
        var client = Network.getClientForPlayer(player);
        client.send("iMod.message", {text: "you just used stick!"});
        var text;
        if(__coords) text = 'Nearest dungeon located at: ' + __coords.x + ', ' + __coords.y + ', ' + __coords.z;
        else text = 'Dungeon not found';
        client.send("iMod.message", {text: text});
    }
})

Network.addClientPacket("iMod.initRadioTowers", function(packetData) {
    for(var i in packetData.coords){
        var coords = packetData.coords[i];
        var render = new ICRender.Model();
        var model = BlockRenderer.createModel();
        model.addBox(0.3,0,0.3,0.7,0.6,0.7, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0]]);
        model.addBox(0.4,0.6,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0]]/* 'iMod_radio_tower_centre' */);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(coords.x, coords.y - 1, coords.z, render);

        render = new ICRender.Model();
        model = BlockRenderer.createModel();
        model.addBox(0.4,0,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0]]/* 'iMod_radio_tower_centre' */);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(coords.x, coords.y, coords.z, render);

        render = new ICRender.Model();
        model = BlockRenderer.createModel();
        model.addBox(0.4,0,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0]]);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(coords.x, coords.y + 1, coords.z, render);
    }
});

Network.addServerPacket("iMod.clientInit", function(client, data) {
    var coords = [];
    for(var i in structures){
        var centreBlock = structures[i][1];
        coords.push(centreBlock);
    }
    client.send("iMod.initRadioTowers", {coords: coords});
});

Callback.addCallback('LevelDisplayed', function(){
    for(var i in structures){
        var centreBlock = structures[i][1];
        
        var render = new ICRender.Model();
        var model = BlockRenderer.createModel();
        model.addBox(0.3,0,0.3,0.7,0.6,0.7, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0], ['iMod_radio_tower_down', 0]]);
        model.addBox(0.4,0.6,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0]]/* 'iMod_radio_tower_centre' */);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(centreBlock.x, centreBlock.y - 1, centreBlock.z, render);

        render = new ICRender.Model();
        model = BlockRenderer.createModel();
        model.addBox(0.4,0,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0], ['iMod_radio_tower_centre', 0]]/* 'iMod_radio_tower_centre' */);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(centreBlock.x, centreBlock.y, centreBlock.z, render);

        render = new ICRender.Model();
        model = BlockRenderer.createModel();
        model.addBox(0.4,0,0.4,0.6,1,0.6, [['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up2', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0], ['iMod_radio_tower_up', 0]]);
        render.addEntry(model);
        BlockRenderer.mapAtCoords(centreBlock.x, centreBlock.y + 1, centreBlock.z, render);
    }
})

IDRegistry.genItemID("iMod_test_item2");
Item.createItem("iMod_test_item2", "Radio tower tester", {
	name: "iMod_test_item2"
}, {
	stack: 1
});
mod_tip(ItemID["iMod_test_item2"]);
Item.registerUseFunction('iMod_test_item2', function(coords){
    alert(getStructure(coords));
});




// file: blocks/carpet.js

IDRegistry.genBlockID("iMod_carpet");
Block.createBlockWithRotation("iMod_carpet", [
	{
		name: "Carpet",
		texture: [
            ['iMod_carpet', 0],
            ['iMod_carpet_side', 0]
        ],
		inCreative: true
	}
]);
mod_tip(BlockID["iMod_carpet"]);

Item.registerIconOverrideFunction(BlockID.iMod_carpet, function(){
    return {name:'iMod_item_carpet', data: 0};
})

for(var ka = 0; ka < 4; ka++){
    var render = new ICRender.Model();
    var _pis = [Math.PI,0,Math.PI/2,Math.PI*1.5];
    var _renderMesh = new RenderMesh('carpet.obj', 'obj');
    _renderMesh.rotate(0, _pis[ka], 0);
    _renderMesh.setBlockTexture('iModcarpet', 0);
    _renderMesh.scale(0.5,1,0.5);
    //_renderMesh.translate(2,0,1.375);
    render.addEntry(new BlockRenderer.Model(_renderMesh))
    Block.setShape(BlockID.iMod_carpet,0,0,0,1,1/16,1, ka);
	BlockRenderer.setStaticICRender(BlockID.iMod_carpet, ka, render);
}

/* Block.registerPlaceFunction('iMod_carpet', function(coords, item, block){
	coords = World.canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
	var relBlock = World.getBlock(coords.x, coords.y, coords.z);
    if (relBlock.id != 0 && relBlock.id != 9 && relBlock.id != 11) return;
    World.setBlock(coords.x, coords.y, coords.z, BlockID.iMod_carpet, 0);
    Player.decreaseCarriedItem(1);
}) */




// file: other/dungeon.js

var dungeonChance = __config__.getNumber('dungeonChance');

var dungeons = [];
var sortedDungeons = {};

Saver.addSavesScope("iModDungeons",
	function read(scope){
		dungeons = scope && scope.dungeons ? scope.dungeons : [];
		sortedDungeons = scope && scope.sortedDungeons ? scope.sortedDungeons : {};
	},

	function save(){
		return {dungeons: dungeons, sortedDungeons: sortedDungeons};
	}
);

var dungeonSize = 13;
var dungeonHeight = 6

var mainStructure = [];

var dungeonLoot = [];

for(var x = 0; x < dungeonSize; x++){
    for(var y = 0; y < dungeonHeight; y++){
        for(var z = 0; z < dungeonSize; z++){
            var centre = Math.floor(dungeonSize/2);
            if(x == centre && z == centre && y == 0)
                mainStructure.push({id: BlockID.iMod_easter_dungeon_block, data: 0, coords: {x: x, y: y, z: z}});
            else if(((x == 0 || x == dungeonSize - 1 || x == centre) || (y == 0 || y == dungeonHeight - 1) || (z == 0 || z == dungeonSize - 1 || z == centre)) && !(x >= centre - 1 && x <= centre + 1 && z >= centre - 1 && z <= centre + 1 && y > 0 && y < 3))
                mainStructure.push({id: BlockID.iMod_dungeon_block, data: 0, coords: {x: x, y: y, z: z}});
            else
                mainStructure.push({id: 0, data: 0, coords: {x: x, y: y, z: z}});
        }
    }
}

var dungeonRooms = [];

dungeonRooms.push([{
    id: 146, 
    data: 0, 
    coords:{x:0,y:0,z:0}, 
    func: function(coords, random){
        var container = World.getContainer(coords.x, coords.y, coords.z);
        if(!container) return;
        var slots = container.slots ? [].concat(container.slots) : (function(){var __slots = []; for(var i = 0; i < container.getSize(); i++) __slots.push(i); return __slots})();
        //alert(slots);
        for(var i in dungeonLoot){
            if(random.nextInt(100) <= dungeonLoot[i].chance){
                var count = _randomInt(dungeonLoot[i].count[0], dungeonLoot[i].count[1]);
                for(var k = 0; k < count; k++){
                    var slotID =slots.length - 1 == 0 ? 0 : random.nextInt(slots.length - 1);
                    var slot = slots[slotID];
                    var slotItem = container.getSlot(slot);
                    var iterations = 0;
                    while((slotItem = container.getSlot(slot)).id != 0 && slotItem.id != dungeonLoot[i].id && iterations <= slots.length){
                        slot = slots[slotID = (slotID + 1 >= slots.length ? 0 : slotID + 1)];
                        iterations++;
                    }
                    if(iterations >= slots.length) return;
                    //slots.splice(slots.indexOf(slot), 1);
                    container.setSlot(slot, dungeonLoot[i].id, slotItem.count + 1, dungeonLoot[i].data, dungeonLoot[i].extra);
                }
            }
        }
    }
}]);

dungeonRooms.push([{
    id: 0, 
    data: 0, 
    coords:{x:0,y:0,z:0}, 
    func: function(coords, random){
        var _coords = [[1,0], [-1,0], [0,-1], [0,1]];
        for(var i in _coords){
            Entity.spawn(coords.x + _coords[i][0], coords.y, coords.z + _coords[i][1], 32);
        }
    }
}]);

(function tntRoom(){
    var room = [];
    for(var x = -1; x <= 1; x++){
        for(var z = -1; z <= 1; z++){
            room.push({coords:{x: x, y: -2, z: z}, id:BlockID.iMod_dungeon_block, data:0});
            room.push({coords:{x: x, y: -1, z: z}, id:46, data:0});
            room.push({coords:{x: x, y: 0, z: z}, id:72, data:0});
        }
    }
    dungeonRooms.push(room);
})();

function spawnDungeon(coords, random){
    for(var i in mainStructure){
        World.setBlock(coords.x + mainStructure[i].coords.x, coords.y + mainStructure[i].coords.y, coords.z + mainStructure[i].coords.z, mainStructure[i].id, mainStructure[i].data);   
    }
    treasuteRooms = 0;
    for(var i = 0; i <= 1; i++){
        for(var j = 0; j <= 1; j++){
            var room = dungeonRooms[roomId = _randomInt(0, dungeonRooms.length - 1)/* dungeonRooms.length - 1 == 0 ? 0 : random.nextInt(dungeonRooms.length - 1) */];
            if(roomId == 0)treasuteRooms++;
            if(i == 1 && j == 1 && treasuteRooms == 0)room = dungeonRooms[0];
            for(var k in room){
                var coordss = {x: parseInt(coords.x + dungeonSize/2*i + 3 + room[k].coords.x), y: parseInt(coords.y + 1 + room[k].coords.y), z: parseInt(coords.z + dungeonSize/2*j + 3 + room[k].coords.z)};
                World.setBlock(coordss.x, coordss.y, coordss.z, room[k].id, room[k].data);
                if(room[k].func) room[k].func(coordss, random);
            }
        }
    }
    dungeons.push({x: coords.x + dungeonSize/2, y: coords.y, z: coords.z + dungeonSize/2});
}

World.addGenerationCallback("GenerateChunk", function(chunkX, chunkZ, random){
    if(random.nextInt(100) > dungeonChance) return;
    var coords = {x: chunkX*16 + random.nextInt(16), y: 10 + random.nextInt(10), z: chunkZ*16 + random.nextInt(16)};
    //alert(cts(coords));
    spawnDungeon(coords, random);
}, "iMod_dungeon");

IDRegistry.genItemID("iMod_test_item");
Item.createItem("iMod_test_item", "Dungeon creator", {
	name: "iMod_test_item"
}, {
	stack: 1
});
mod_tip(ItemID["iMod_test_item"]);
Item.registerUseFunction('iMod_test_item', function(coords){
    spawnDungeon(coords, java.util.Random());
});




// file: items/craft_items.js

IDRegistry.genItemID("iMod_coil");
Item.createItem("iMod_coil", "Coil", {
	name: "iMod_coil"
}, {
	stack: 64
});
mod_tip(ItemID["iMod_coil"]);

IDRegistry.genItemID("iMod_wire");
Item.createItem("iMod_wire", "Wire", {
	name: "iMod_wire"
}, {
	stack: 64
});
mod_tip(ItemID["iMod_wire"]);

IDRegistry.genItemID("iMod_plate");
Item.createItem("iMod_plate", "Plate", {
	name: "iMod_plate"
}, {
	stack: 64
});
mod_tip(ItemID["iMod_plate"]);

IDRegistry.genItemID("iMod_antenna");
Item.createItem("iMod_antenna", "Antenna", {
	name: "iMod_antenna"
}, {
	stack: 64
});
mod_tip(ItemID["iMod_antenna"]);

IDRegistry.genItemID("iMod_speaker");
Item.createItem("iMod_speaker", "Speaker", {
	name: "iMod_speaker"
}, {
	stack: 64
});
mod_tip(ItemID["iMod_speaker"]);

Callback.addCallback("PreLoaded", function () {
    dungeonLoot.push({id: ItemID["iMod_coil"], count: [1, 3], data: 0, extra: null, chance: 80});
    dungeonLoot.push({id: ItemID["iMod_wire"], count: [1, 3], data: 0, extra: null, chance: 40});
    dungeonLoot.push({id: ItemID["iMod_antenna"], count: [1, 3], data: 0, extra: null, chance: 40});
    dungeonLoot.push({id: ItemID["iMod_speaker"], count: [1, 3], data: 0, extra: null, chance: 40});
})




// file: items/clock.js

IDRegistry.genItemID("iMod_clock");
Item.createItem("iMod_clock", "Enchanted Clock", {
	name: "iMod_clock"
}, {
	stack: 1
});
mod_tip(ItemID["iMod_clock"]);
Item.setGlint(ItemID.iMod_clock, true);

var maxModes = 3
var _cooldown = 60;
Item.registerUseFunction(ItemID.iMod_clock, function(coords, item, block, player){
	if(!item.extra){
		item.extra = new ItemExtraData();
	}
	var playerr = new PlayerActor(player);
    var client = Network.getClientForPlayer(player);
	var timestamp = Math.floor(Date.now() / 1000);
	if(Entity.getSneaking(player)){
		var mode = item.extra.getInt('mode', 1) + 1;
		if(mode > 3) mode = 1;
		item.extra.putInt('mode', mode);
		client.send('iMod.tipmessage', {text: 'Time skipping set to: ' + (5*mode) + ' secconds'});
	} else if((cooldown = timestamp - item.extra.getInt('cooldown', timestamp - _cooldown)) >= _cooldown) {
		var _thread = java.lang.Thread.currentThread();
		var mode = item.extra.getInt('mode', 1);
		item.extra.putInt('cooldown', timestamp);
		_thread.sleep(5000*mode);
	} else {
		client.send('iMod.tipmessage', {text: '§cCooldown: ' + (_cooldown - cooldown) + ' sec'});
	}
    var selectedSlot = playerr.getSelectedSlot();
    playerr.setInventorySlot(selectedSlot, item.id, item.count, item.data, item.extra);
})

Callback.addCallback("PreLoaded", function () {
    dungeonLoot.push({id: ItemID["iMod_clock"], count: [1, 1], data: 0, extra: null, chance: 15});
})

IDRegistry.genItemID("iMod_clock2");
Item.createItem("iMod_clock2", "Clock", {
	name: "iMod_clock"
}, {
	stack: 1
});
mod_tip(ItemID["iMod_clock2"]);




// file: items/compass.js

IDRegistry.genItemID("iMod_compass");
Item.createItem("iMod_compass", "Compass", {
	name: "iMod_compass"
}, {
	stack: 1
});
mod_tip(ItemID["iMod_compass"]);

Item.registerUseFunction('iMod_compass', function(coords, item, block, player){
    var coords = Player.getPosition();
    var client = Network.getClientForPlayer(player);
    client.send('iMod.tipmessage', {text: parseInt(coords.x) + ' ' + parseInt(coords.y) + ' ' + parseInt(coords.z)});
})




// file: crafts.js

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({id: BlockID["iMod_radio"], count: 1, data: 0}, [
        "ppa",
        "scs",
        "pwp"
    ], ['p', ItemID.iMod_plate, 0, 'a', ItemID.iMod_antenna, 0, 's', ItemID.iMod_speaker, 0, 'c', ItemID.iMod_coil, 0, 'w', ItemID.iMod_wire, 0]);

    Recipes.addShaped({id: ItemID["iMod_clock2"], count: 1, data: 0}, [
        " g ",
        "gsg",
        " g "
    ], ['g', 266, 0, 's', 160, -1]);

    Recipes.addShaped({id: ItemID["iMod_compass"], count: 1, data: 0}, [
        "rir",
        "igi",
        "rir"
    ], ['i', 265, 0, 'g', 160, -1, 'r', 331, 0]);

    Recipes.addShaped({id: ItemID["iMod_coil"], count: 1, data: 0}, [
        "www",
        "wiw",
        "www"
    ], ['i', 265, 0, 'w', ItemID.iMod_wire, 0]);
    
    Recipes.addShaped({id: ItemID["iMod_wire"], count: 1, data: 0}, [
        " s ",
        " i ",
        " s "
    ], ['i', 265, 0, 's', 341, 0]);

    Recipes.addShaped({id: ItemID["iMod_plate"], count: 1, data: 0}, [
        " i ",
        "iii",
        " i "
    ], ['i', 265, 0]);

    Recipes.addShaped({id: ItemID["iMod_speaker"], count: 1, data: 0}, [
        "rir",
        "iii",
        "rir"
    ], ['i', 265, 0, 'r', 331, 0]);

    Recipes.addShaped({id: ItemID["iMod_antenna"], count: 1, data: 0}, [
        "rir",
        " i ",
        " i "
    ], ['i', 265, 0, 'r', 331, 0]);

    Recipes.addShaped({id: BlockID["iMod_radio_tower"], count: 1, data: 0}, [
        "rir",
        "iii",
        "rir"
    ], ['i', 265, 0, 'r', 331, 0]);

    Recipes.addShaped({id: BlockID["iMod_carpet"], count: 1, data: 0}, [
        "ccc",
        "ccc",
        "ccc"
    ], ['c', 171, -1]);
});




// file: shared.js

var iMod = {
    addDungeonLoot: function(loot){
        loot = {id: loot.id, count: loot.count, data: loot.data, extra: loot.extra || null, chance: loot.chance || 100};
        dungeonLoot.push(loot);
    },
    addDungeonRoom: function(room){
        dungeonRooms.push(room);
    }
};

ModAPI.registerAPI("iModAPI", {
    iMod: iMod,
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("iModAPI Loaded", "API");




