/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 19
*/



// file: print.js

Item.old = {}
Item.old.createFoodItem = Item.createFoodItem


var createFoodItem = function(namedID, name, texture, params) {
  var id = namedID
  var ret;
  
  ret = Item.createItem(namedID, name, texture, params)
  Item.setUseAnimation(id, 1)
  Item.setMaxUseDuration(id, 33)
  Item.setCategory(id, 4)
  
  var hunger_to_recover = 1;

  if (params.hasOwnProperty('food')) {
    hunger_to_recover = params['food']
  }
  
  Item.registerUsingCompleteFunction(namedID, function(item, player) {
    var item_instance = item
    food_eaten = false

    getCallback().invokeCallback("FoodEaten", hunger_to_recover, 0, player)
    
    var current_player = new PlayerActor(player)
    
    var new_hunger = current_player.getHunger() + hunger_to_recover

    if (new_hunger < 20) {
      current_player.setHunger(new_hunger)
    } else {
      current_player.setHunger(20)
    }
  })
  
  return ret
}

Item.createFoodItem = createFoodItem

try {
  alert('cau.le BlockRenderer: '+BlockRenderer.setStaticICRendersetStaticICRender.toString())
} catch (e) {}

var newBlockRenderer = BlockRenderer

String.prototype.old_replace = String.prototype.replace

String.prototype.replace = function(old, New, count) {
  var str = this;

  var stred_count;

  if (count == null) {
    stred_count = ''
  } else {
    if (String(count) === String(Number.MAX_VALUE)) {
      count = 'Number.MAX_VALUE'
    } else if (String(count).includes('e+')) {
      var max_divs = [Number.MAX_VALUE / count]

      if (String(max_divs[0]).includes('e+')) {
        for (var i = 0; i < 9; i++) {
          if (!String(max_divs[max_divs.length - 1]).includes('e+')) {
            break
          }

          max_divs.push(Number.MAX_VALUE / Number(max_divs[max_divs.length - 1]))
        }
      }
      
      for (var i = 1; i < max_divs.length; i++) {
        if (max_divs[i] == max_divs[0]) {
          max_divs.length = i + 1;
          break;
        }
      }
      
      console.log(max_divs)
      
      var cac = 'Number.MAX_VALUE / ('.repeat(max_divs.length-1) + 'Number.MAX_VALUE / ' + String(max_divs[max_divs.length - 1]) + ')'.repeat(max_divs.length-1)
      
      count = cac
    }

    stred_count = String(count)

    eval('count = ' +stred_count)

    stred_count = ', '+stred_count
  }

  var _ = {}

  if (count == 0) {
    count = '0'
  }

  _['new'] = New || ''; _.old = old || ''; _.count = count || -1;

  if (_.count == '0') {
    _.count = 0
  }

  if (_.count == -1) {
    str = str.split(_.old)
    str = str.join(_.new)
  } else if (_.count > -1) {
    var new_str = str

    try {
      eval('new_str = new_str.old_replace(_.old, _.new); '.repeat(_.count))
    } catch (e) {
      function requote(text) {
        return text.old_replace(/'/g, "\\'")
      }

      if (e == 'RangeError: Invalid count value' || e == 'RangeError: Invalid string length') {
        if (console.hasOwnProperty('warn')) {
          console.warn(new RangeError("Warning in「'"+requote(str)+"'.replace('"+requote(_.old)+"', '"+requote(_.new)+"'"+stred_count+")」the value of count, aka 3rd argument, is way too big"))
        } else {
          try {
            alert("Warning in「'"+requote(str)+"'.replace('"+requote(_.old)+"', '"+requote(_.new)+"'"+stred_count+")」the value of count, aka 3rd argument, is way too big (alert)")
          } catch (e) {
            if (e instanceof ReferenceError) {
              print("Warning in「'"+requote(str)+"'.replace('"+requote(_.old)+"', '"+requote(_.new)+"'"+stred_count+")」the value of count, aka 3rd argument, is way too big (print)")
            } else {
              throw e
            }
          }
        }

        new_str = str.split(_.old)
        new_str = new_str.join(_.new)
      } else {
        throw e
      }
    }

    str = new_str
  } else {
    throw new RangeError('count, aka 3rd argument, must be -1 or greater')
  }

  return str
}

String.prototype.replaceOnce = function(to_find, to_rep) {
  if (typeof to_find === 'object') {
    if (to_find.toString().startsWith('/')) {
      to_find = to_find.toString().split('/')
      
      to_find.shift()
      
      if (to_find[to_find.length-1] == 'g') {
        to_find.pop()
      }
      
      to_find = to_find.join('/')
    }
  }
  
  return this.old_replace(to_find, to_rep)
}

var old_old_stringify = JSON.stringify

var old_stringify = old_old_stringify

var html_entities = {
  decode: function(to_dec) {
    function dd(str) {
      return str.old_replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    }

    var entities = {
      '&nbsp;': dd('&#160;'),
      '&sect;': dd('&#167;'),
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&quot;': '"',
      '&apos;': "'",
      '&cent;': '¢',
      '&pound;': '£',
      '&yen;': '¥',
      '&euro;': '€',
      '&copy;': '©',
      '&reg;': '®'
    }

    if (Object.keys(entities).indexOf(to_dec) != -1) {
      return entities[to_dec]
    } else {
      return dd(to_dec)
    }
  }
}

html_entities.encode = function(to_enc) {
  var nbsp = html_entities.decode('&#160;')
  this['section sign'] = html_entities.decode('&#167;')

  var entities = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "\"": "&quot;",
    "'": "&apos;",
    "¢": "&cent;",
    "£": "&pound;",
    "¥": "&yen;",
    "€": "&euro;",
    "©": "&copy;",
    "®": "&reg;"
  }

  entities[nbsp] = "&nbsp;"
  entities[this['section sign']] = '&sect;'

  if (Object.keys(entities).indexOf(to_enc) != -1) {
    return entities[to_enc]
  } else {
    var str = to_enc

    var buf = [];

    for (var i = str.length-1; i >= 0; i--) {
      buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }

    return buf.join('');
  }
}

var old_html_entities = {
  decode: html_entities.decode,
  encode: html_entities.encode
}

html_entities.decode = function(text) {
  if (text.length > 1) {
    var split_text = text.split(';')
    
    if (split_text.length == 2 && split_text[1] == '') {
      return old_html_entities.decode(text)
    } else {
      var joined_text = split_text.join(',')
      
      var to_decode = []
      
      for (var i = split_text.length; i--; ) {
        var value = split_text[i]
        
        if (value.includes('&')) {
          for (var i2 = value.split('&').length; i2--; ) {
            var value2 = value.split('&')[i2]
            var old_value2 = value2;
            
            if (text.includes('&'+value2+';')) {
              value2 = '&'+value2+';'
              to_decode.push(value2)
            }
            
            if (joined_text.includes(old_value2+',')) {
              joined_text = joined_text.replaceOnce(old_value2+',', '{'+String(to_decode.length-1)+'}')
            }
          }
        }
      }
      
      for (var i = 0; i < to_decode.length; i++) {
        var val = to_decode[i]
        
        var dec_val = old_html_entities.decode(val)
        
        joined_text = joined_text.split('&{'+String(i)+'}').join(dec_val)
      }
    }

    return joined_text
  } else {
    return old_html_entities.decode(text)
  }
}

html_entities.encode = function(text) {
  if (text.length > 1) {
    var split_text = text.split('')

    for (var i = 0; i < split_text.length; i++) {
      var char = split_text[i]

      if (!old_html_entities.encode(char).includes('#')) {
        split_text[i] = old_html_entities.encode(char)
      }
    }
    return split_text.join('')
  } else {
    return old_html_entities.encode(text)
  }
}

var sect = html_entities.decode('&sect;')

alert('sect: '+sect)

var subarray;
subarray = function(arr, start, end) {
  var array; array = arr; var length = array.length; array = array.slice(0, length); array.length = length;

  if (['start', ':'].indexOf(String(start).toLowerCase()) != -1) {
    start = 0
  }

  if (['end', ':'].indexOf(String(end).toLowerCase()) != -1) {
    end = length
  }
  return array.slice(start, end)
}

var __print__;
__print__ = alert

var isArray = function(data) {
  return data instanceof Array;
};

var print;

print = function(stuff_to_print) {
  var sep_different = false;
  
  var sep = ' '
  
  function try_sep(args) {
    if (sep_different) return subarray(args, 'start', 'end');

    if (args[0] == sect+'sep'+sect) {
      sep = String(args[1]);
      sep_different = true
      return subarray(args, 2, 'end')
    }

    return subarray(args, 'start', 'end');
  }

  var hargs = []

  var to_print = ''

  var objectToString = false;

  for (var i = 0; i < arguments.length; i++) {
    var argument = arguments[i]

    hargs[i] = argument
  }

  hargs = subarray(hargs, 'start', 'end')

  hargs = try_sep(hargs)

  // console.log(hargs)

  if (String(hargs[0]) == sect+'objectToString'+sect) {
    hargs = subarray(hargs, 1, 'end')
    objectToString = true
  } else {
    hargs = subarray(hargs, 'start', 'end')
  }

  if (!sep_different) {
    hargs = try_sep(hargs)
  }

  // console.log(hargs)

  for (index in hargs) {
    var arg = hargs[index]

    /*
    var do_print = true
    if (''.concat(arg) === 'undefined' && isArray(arg) == false) {
      for (var i2 in hargs) {
        var harg = hargs[i2]
        if (isArray(harg)) {
          do_print = false;
          break;
        }
      }
      if (do_print) {
        __print__('<<'+old_stringify(hargs)+'>>')
      }
    }
    */

    var arg_to_add = ''

    if (parseInt(''.concat(index)) == index) {
      // console.log(arg)

      if (typeof arg === 'string') {
        arg_to_add = arg
      } else if (isArray(arg)) {
        if (objectToString) {
          arg_to_add = old_stringify(arg)
        } else {
          arg_to_add = arg.toString()
        }
      } else if (typeof arg === 'object') {
        if (objectToString) {
          arg_to_add = JSON.stringify(arg)
        } else {
          if (arg === null) {
            arg_to_add = 'null'
          } else {
            arg_to_add = arg.toString()
          }
        }
      } else if (typeof arg === 'number') {
        arg_to_add = arg.toString()
      } else {
        arg_to_add = ''.concat(arg)
      }
    }

    to_print += String(arg_to_add + sep)
  }

  to_print = to_print.substr(0, to_print.length - sep.length)

  function rtrim(x) {
    // This implementation removes whitespace from the right side
    // of the input string.
    return x.old_replace(/\s+$/gm, '');
  }

  to_print = rtrim(to_print)

  __print__(to_print)
}



// print(sect+'objectToString'+sect, sect+'sep'+sect, ' - ', 'cu', 'doido', ['a1', 'b', 'c'])

var objectToString = {
  'print': null
}

objectToString.print = function(stuff_to_print) {
  var args = [sect+'objectToString'+sect]

  var to_apply = '"'+sect+'objectToString'+sect+'"'

  if (arguments.length > 0) {
    to_apply += ', '
  }

  for (index in arguments) {
    if (parseInt(''.concat(index)) == index) {
      to_apply += 'arguments['.concat(index, '], ')
      //__print__('arguments['.concat(index, ']:', '"'+String(arguments[index]).replace('"', '\"')+'"'))
    }
  }

  to_apply = to_apply.substr(0, to_apply.length - 2)

  if (arguments.length < 2) {
    to_apply = 'arguments[0]'
    if (arguments.length == 0) {
      to_print = ''
    }
  }

  // __print__('print(' + to_apply + ') /* a */')

  eval('print(' + to_apply + ')');
}

// objectToString.print(['a', 'b'])

print('setInterval type:', typeof setInterval)




// file: stringify.js

var try_stringify = function(obj) {
	return null;
}

JSON.stringify  = function(dict) {
	if (!dict) return undefined;
	
	if (isArray(dict)) return old_old_stringify(dict) || '[]';
	
	var new_dict = {}
	
	Object.keys(dict).forEach( function(key) {
		new_dict[key] = dict[key]
	})
	
	var key = null;
	
	var to_return = null;
	
	try {
		to_return = old_stringify(new_dict)
	} catch (e) {
		// print(e)
		
		if (Object.keys(new_dict).length == 0) {
			to_return = old_old_stringify(new_dict) || '{}'
		} else {
			var string = ''; Object.keys(new_dict).forEach( function(key) {
				var value = null; success = true;
				try {
				 value = new_dict[key];
				} catch (e) {
					success = false;
				}
				
				if (success && value != null) try {
					var comma = ',\n';
					
					if (Object.keys(new_dict) == Object.keys(new_dict)[Object.keys(new_dict).length - 1]) {
						comma = ''
					}
					
					if (typeof value == 'string') {
						value = "'"+old_value.replace("'", "\\'")+"'"
					} else if (typeof value == 'object') {
						value = old_old_stringify(value)
					}
					
					string = '\t' + string + key + ': '.concat(value) + comma;
				} catch (e) {}
			})
			
			string = '{' + string + '}'; to_return = string;
		}
	}
	
	return to_return
}

var try_stringify = function(obj) {
	to_return = null;
	
	try {
		to_return = old_stringify(obj)
	} catch (e) {
		to_return = old_old_stringify(obj)
	}
	
	return to_return;
}

/* print(JSON.stringify({null: null})) */




// file: getNameByID.js

var dont_include = "vars|__variable_name__|dont_include|___|____key____|this_clone"

var vars = {};

var this_clone = Object(this)

for (__variable_name__ in this_clone) {
  if (dont_include.indexOf(__variable_name__) != -1 || '|'.indexOf(__variable_name__) != -1) {} else {
    if (this_clone[__variable_name__] == this_clone) {} else {
      vars[__variable_name__] = this_clone[__variable_name__]
    }
	}
}

delete this.this_clone;

var old_vars = vars;

try {
  vars = old_stringify(vars)
} catch (e) {
  print('old_stringify error:', e)
  vars = JSON.stringify(vars)
}

if (vars.indexOf('TYPE_') != -1) {
  vars = old_vars;
}

/*
          if (old_stringify(Object.keys(___.value)).indexOf("TYPE_") != -1) {
            for (key in Object.keys(___.value)) {
              if (key.indexOf('TYPE_') == 0) {
                var getValue; ___.getValue = getValue; delete this_clone.getValue;

                eval('___["getValue"] = function() {return ___.value["'+key.replace('"', '\\"')+'"]};');

                if (___.value.hasOwnProperty(___.getValue())) {
                  objectToString.print('lóóf:', ___.value[___.getValue()])
                }
              }
            }
          }
          
*/

delete this.vars; delete this.old_vars;




// file: first.js

/*
var rec;
  
rec = WRAP_JAVA("public static void main (String arg []){\n  Object result;\n  result = com.zhekasmirnov.innercore.api.mod.adaptedscript.AdaptedScriptAPI$PlayerActor;\n  \n  System.out.println(\"hello world >)>\");\n  System.out.println(result);\n}")

alert('rec: '.concat(rec))
*/

var newFileTools = FileTools

var newCommands = Commands

var newIDRegistry = IDRegistry

// alert('Native exists: '.concat(this.hasOwnProperty('Native')))

// alert('Item exists: '.concat(this.hasOwnProperty('Item')))

var newItem = Item

this.iR = null;

try {
  iR = ItemRegistry
} catch (e) {}

this.ItemRegistry = iR

var newIMPORT;
var pass;

try {
  newIMPORT = IMPORT
} catch (e) {
  try {
    alert('newIMPORT error: '.concat(e))
  } catch (e2) {
    console.log('newIMPORT error: '.concat(e))
    console.log('(newIMPORT) error number 2: '.concat(e2))
  }
  
  delete newIMPORT
}

var newPlayerActor = PlayerActor

var newPlayer = Player;

var newEntity = Entity;

var newToolAPI = ToolAPI;

Object.prototype.merge = function(other_objects) {
  var new_object = {};

  for (var attrname in this) {
    new_object[attrname] = this[attrname];
  }

  for (var index in arguments) {
    var arg = arguments[index]
    if (typeof arg === 'object') {} else {
      var arg_stuff = [''.concat(arg),
        arg]
      arg = {}

      arg[arg_stuff[0]] = arg_stuff[1]

      new_object[Object.keys(arg)[0]] = arg[Object.keys(arg)[0]]
    }

    if (typeof arg === 'object') {
      for (var attrname in arg) {
        new_object[attrname] = arg[attrname];
      }
    }
  }

  return new_object;
}

if (Object.hasOwnProperty('assign') == false) {
  Object.assign = function(stuff_to_assign) {
    var new_args = arguments;

    // .log(new_args)

    //new_args = new_args.slice(1, new_args.length);

    to_return = arguments[0].merge.apply(this, new_args)

    return to_return
  }
}

var newCallback;

var newWorld = World

var newItemID = ItemID

var newBlockID = BlockID

var vanilla_ids = [VanillaItemID, VanillaBlockID, VanillaTileID]

var newVanillaItemID = VanillaItemID
var newVanillaBlockID = VanillaBlockID

try {
  newCallback = Callback
} catch (e) {
  try {
    alert('newCallback error: '.concat(e))
  } catch (e2) {
    console.log('newCallback error: '.concat(e))
    console.log('error number 2: '.concat(e2))
  }
}

var newNetwork = Network

var getModID = function(to_get) {
  var to_return;

  if (!to_get) {
    to_get = 'Item'
  }
  
  var assign = false;
  var to_assign;
  
  if ('Item' != to_get && 'Block' != to_get) {
    to_get = 'Item'
    assign = true
  }

  try {
    eval('to_return = '+to_get+'ID');
    
    // eval('to_return = BlockID');
    
    to_assign = '{rep}ID';
    
    // print('return: {rep}ID'.replace('{rep}', to_get));
  } catch (e) {
    try {
      eval('to_return = Mod'+to_get+'ID');
      
      // eval('to_return = ModBlockID');
      
      to_assign = 'Mod{rep}ID';
      
      // print('return: Mod{rep}ID'.replace('{rep}', to_get));
    } catch (e2) {}
  }

  if (to_return == null) {
    eval('to_return = new'+to_get+'ID');
    
    // eval('to_return = newBlockID');
    
    to_assign = 'new{rep}ID';
    
    // print('return: new{rep}ID'.replace('{rep}', to_get));
  }
  
  if (assign) {
    eval('to_return = Object.assign('+to_assign.replace('{rep}', 'Item')+', '+to_assign.replace('{rep}', 'Block')+')');
  }
  
  return to_return;
}

var newItemRegistry = ItemRegistry

if (newItemRegistry == null) {
  newItemRegistry = function() {
    return null;
  }
  
  newItemRegistry = newItem;
  
  if (!newItemRegistry.hasOwnProperty('setMaxDamage')) {
    newItemRegistry['setMaxDamage'] = function() {}
  }
}

// alert('newItemRegistry: '.concat(JSON.stringify(newItemRegistry) || newItemRegistry.toString()))

this.IDRegistry = null

var IDRegistry;

IDRegistry = newIDRegistry

var newGame = Game


var model = BlockRenderer.createModel();

alert('addBox: '.concat(model.addBox.toString()))




// file: dirs.js

var mod_path = __dir__; var mod_path_slash = mod_path;

var modpack_path = __packdir__; var modpack_path_slash = modpack_path;

if (mod_path.endsWith('/') == false) mod_path_slash = mod_path+'/';

if (modpack_path.endsWith('/') == false) modpack_path_slash = modpack_path+'/';




// file: functions.js

/*
function __alert__() {
  var to_run = _alert_; if (to_run != null) delete a._alert_; try {
    delete _alert_
  } catch (e) {alert(e)};
  arg = arguments[0];
  return to_run(arg) || 'https://cauascp-shafou.000webhostapp.com/'
}

*/

/*
alert = function() {
  var url = arguments[0]
window.open(url);
}
*/

// alert(__alert__('oen'))

// Functions, isArray

var isArray = function(data) {
  return data instanceof Array;
};
// Functions, replace
function replace(str, to_find, to_rep, times) {
  if (!times) times = Number.POSITIVE_INFINITY;

  var count = 0;

  var split_str = []

  var new_str = ''

  eval('split_str = str.match(/.{1,'+ to_find.length +'}/g)')

  split_str = split_str || []

  if (split_str.length == 0) {
    return str;
  } else if (split_str.length > 0) {
    print(split_str.length);

    return new_str;
  }
}

// Functions, RandomInt

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Functions, Object.values

var ov_res;

Object.values = function(a) {
  var res = null;
  res = Object.keys(a).map(function(key){return a[key]})
  // print('['+res.join(', ')+']')
  ov_res = res
  return ov_res
}

// Functions, secondsToDestroyTime/stdt

function secondsToDestroyTime(seconds) {
  return seconds / 5
}

var stdt = secondsToDestroyTime

// Functions, error

function error([array]) {
  text = text.join(' ')
  text = 'Error: "' + text + '".'
  print(text)
  throw text
}

// Functions, randomInt

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Functions, percentage

function percentage(per, If, Else, proximity) {
  if (typeof Else != 'function') {
    if (typeof proximity === 'undefined') {
      proximity = Else
    } else {
      error(["multiple 'proximity' argument"])
    }
  }
  if (typeof proximity === 'number') {
    if (proximity >= 0 && proximity <= 9) {
      proximity /= 10
    } else {
      error(["argument 'proximity' must be between 0 and 9 not", proximity])
    }
  } else if (typeof proximity === 'undefined') {
    proximity = 0
  } else {
    var n = ' '
    var type = String(typeof proximity).substr(1, 1)
    var vowel_sounds = 'ox'
    var find = vowel_sounds.search(type)
    if (find > -1) n = 'n '
    error(["argument 'proximity' must be a number not a" + n, typeof proximity])
  }
  var p = Math.random() * 100
  if (p <= per + proximity) {
    If()
    // print(p)
  } else {
    if (typeof Else === 'function') Else()
  }
}

// Functions, stringToBytes

function stringToBytes(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }

  if (result.length == 1) result = result[0]

  return result;
}

// Functions, coordinatesRange

function coordinatesRange (a, b, c, no, range) {
  if (no != null && no != undefined) {
    if (no.startsWith('range=')) {
      for (var i = 0; i < no.replace('range=', '').length; i++) {
        var char = no.replace('range=', '')[i]
    
        if (Number.isNaN(Number(char))) {
          break
        }
      }
    
      no = no.substring(0, 'range='.length+i+1)
    
      eval(no);
    }
  }

  if (!range && range !== 0) {
    range = 1
  }

  var hend = []

  var result = [];
  result.length = 3; //n=2

  function combine(input, len, start) {
    if (len === 0) {
      if (result[0].startsWith('a') && result[1].startsWith('b') && result[2].startsWith('c')) {
        hend.push(result.join(', '))
      }
      return;

    }
    for (var i = start; i <= input.length - len; i++) {
      result[result.length - len] = input[i];

      combine(input, len-1, i+1);
    }
  }
  
  var array = ["a", "b", "c"];

  for (var i = 1; i < range+1; i++) {
    for (var i2 = 0; i2 < 3; i2++) {
      var text = array[i2]

      //print(text+'+'+String(i));

      array.push(text+'+'+String(i))
      array.push(text+'-'+String(i))
    }
  }

  combine(array, result.length, 0);

  hend = JSON.stringify(hend).split('"')

  var hhend = '['

  for (var i = 0; i < hend.length; i++) {
    // print(hend[i])
    if (hend[i] != ',' && !'[]'.includes(hend[i])) {
      hhend += '['+hend[i]+'], '
    }
  }

  eval('hend = '+hhend+']')

  return hend
}

// Functions, file exists

String.prototype.exists = function(Return) {
  function __exists__(str, Return) {
    var ret = Return;

    if (ret == undefined || ret == null) ret = true;
    
    _('import', 'java.io.File')
    
    var file = new cau_get('File')(str)
    
    var to_return = file.exists()
    
    if (ret) {
      return to_return
    }
    
    cau_clear()
  }

  return __exists__.call(null, this, Return);
}

// Functions, isFile

String.prototype.isFile = function(Return) {
  function __isFile__(str, Return) {
    var ret = Return;

    if (ret == undefined || ret == null) ret = true;
    
    _('import', 'java.io.File')
    
    var file = new cau_get('File')(str)
    
    var to_return = false
    
    if (file.exists()) {
      to_return = file.isFile()
    }
    
    if (ret) {
      return to_return
    }
    
    cau_clear()
  }

  return __isFile__.call(null, this, Return);
}

// Functions, isDirectory

String.prototype.isDirectory = function(Return) {
  function __isDirectory__(str, Return) {
    var ret = Return;

    if (ret == undefined || ret == null) ret = true;
    
    _('import', 'java.io.File')
    
    var file = new cau_get('File')(str)
    
    var to_return = false
    
    if (file.exists()) {
      to_return = file.isDirectory()
    }
    
    if (ret) {
      return to_return
    }
    
    cau_clear()
  }

  return __isDirectory__.call(null, this, Return);
}

// Functions, read

var cau_java = {}

if (!String.prototype.replaceOnce) {
  String.prototype.replaceOnce = String.prototype.replace
}

var _rand_ = String(12507 + Math.floor(Math.random() * 99999-12507))

function read_exception(exception_name) {
  return {type: 'read_exception', name: String(exception_name)}
}

function is_read_exception(arg) {
  var type;
  
  try {
    type = arg.type
  } catch (e) {}
  
  if (type != null && type == 'read_exception') {
    return true
  } else {
    return false
  }
}

function read(path) {
  _('import', 'java.io.BufferedReader')
  _('import', 'java.io.FileReader')
  
  // print('cau_java:', JSON.stringify(cau_java))
  
  var br;
  var text = ''
  
  // print('cau.br:', cau_get('BufferedReader'))
  
  try {
    br = new cau_get('BufferedReader')(new cau_get('FileReader')(path))
    var line=''
    
    while ((line = br.readLine()) != null) {
      text += line + '\n'
    }
  } catch (e) {
    if (!path.exists()) {
      return read_exception('does_not_exists')
    } else if (!path.isFile()) {
      return read_exception('is_not_file')
    }
  } finally {
    try {
      br.close()
      
      cau_clear()
      
      return text
    } catch (e2) {
      print('br.close error:', e2)
    }
  }
}

function _() {
  // print(arguments);
  var text = Object.values(arguments).join('§¢cau.split['+_rand_+']¢§')
  
  text = text.replaceOnce('§¢cau.split['+_rand_+']¢§', ' = ')
  
  text = text.split('§¢cau.split['+_rand_+']¢§').join(', ')
  
  if (text.includes(', ')) {
    text = text.replaceOnce(arguments[0]+' = ', arguments[0]+' = [')+']'
  } else{
    // print(arguments[1]);
    text = text.replaceOnce(arguments[0]+' = ', arguments[0]+' = [')+', "'+arguments[1].split('.')[arguments[1].split('.').length - 1]+'"]'
  }
  
  var cau_import;
  var cau_get;
  
  // var arg1 = '"'+arguments[1].split('.')[arguments[1].split('.').length - 1]+'"'
  
  if (text.indexOf('get') == 0) {
    // print('old_text:', text)
    
    text = 'get = [null, '+'"'+arguments[1].split('.')[arguments[1].split('.').length - 1]+'"'+']'
  }
  
  // print('cau_'+text);
  
  eval('cau_'+text)
  
  if (cau_import != null) {
    cau_java[cau_import[1]] = cau_import[0]
    
    // ..log(cau_java);
  } else if (cau_get != null) {
    if (arguments[2] || arguments.length == 1) {
      var le = arguments.length - 1
      
      if (le < 0) {
        le = 0
      }
      
      throw new Error('Get mode must have only 1 segment not '+String(le))
    }
    
    // cau_get[0] = null; cau_get[1] = arguments[1]
    
    var to_return;
    
    to_return = cau_java[cau_get[1]]
    
    // print(to_return)
    
    return to_return;
  }
}

function cau_get() {
  var to_eval = "to_return = _('get'" // 'FileReader')
  
  for (var i = 0; i < arguments.length; i++) {
    to_eval += ', "'+arguments[i]+'"'
  }
  
  to_eval += ')'
  
  var to_return;
  
  eval(to_eval)
  
  // print(to_eval);
  
  return to_return
}

function cau_clear() {
  cau_java = {}
}

// Functions, write

function write(path, text) {
  var success = [true,
    true]
  var writer = new java.io.PrintWriter(path)
  text.split('\n').forEach(function(line, index) {
    try {
      writer.println(line)
    } catch(e) {
      success = [false, e]
    }
  })
  try {
    writer.close()
  } catch(e) {}

  return success;
}

// Functions, tryOrPrintError

Object.prototype.tryOrPrintError = function() {
  var to_return = [null,
    null]

  function to_run(first, second, parent) {
    try {
      to_return[0] = first()
    } catch(e) {
      if (second != null) to_return[1] = second();

      var first_name = first.name;
      var parent_name = ''
      if (first_name == '') {
        first_name = 'first function'
      }

      print('got error: "'.concat(e)+'" trying to run "'+first_name+'"');
    }
  }

  if (this.length == 1) this[1] = null;

  to_run.call(null, this[0], this[1], this);

  return to_return
}

/*
var test_bb = [function() {print(ture)}];

var test = [function() {print(ture)}];

var test_cc = [function() {print(ture)}];

test.tryOrPrintError();
*/

var transform_intos = []

var saturations = {}

var foods = {}

// Functions, addFood

function addFood(id, name, texture, huger_to_recover, stack, transform_into, saturation, always_edible) {
  var to_return;

  old_id = String(id)

  id = 'caua_vegan_edible_food_'.concat(id)
  if (id.startsWith('caua_vegan_edible_food_')) {
    var inedible_id;

    var inedible_numeric_id;

    IDRegistry.genItemID(id)


    IDRegistry.genItemID('caua_vegan_edible_food_'+old_id)

    /*
  	var genItemID = function() {//
  		IDRegistry.genItemID(id)
  	}
  	function returnError() {
  		eval('var error; var tt_ret = false; try { error = e} catch (e2) {}; if (error != null) tt_ret = true; return tt_ret;')
  	}
  	var got_error = [genItemID, returnError].tryOrPrintError()
  	print('got_error: '.concat(got_error))
  	*/

    if (always_edible == null || always_edible === undefined) always_edible = false;

    print('always_edible:', always_edible)

    var isTech = !always_edible;

    if (!stack) stack = 64;

    var numeric_id = getModID('Item')[id]

    Item.createFoodItem(id, name, texture, {
      food: huger_to_recover, isTech: isTech, stack: stack
    });

    var texture2 = texture; // texture2['meta'] = 1;

    // objectToString.print(ItemID)

    /*
  	var createFoodItem = function() {//
  		Item.createFoodItem(id,name,texture,{food:huger_to_recover,isTech:isTech,stack:stack});
  	}
  	// [createFoodItem].tryOrPrintError()
  	*/

    if (!transform_into) {} else {
      transform_intos.push([numeric_id, transform_into])
      objectToString.print('transform_intos:', transform_intos)
    }
    /*
    Callback.addCallback("FoodEaten", function() {
      Player.decreaseCarriedItem()

      if (!transform_into) {} else {
        //
      }
    }
    })
    */

    /*
    print('inedible: '.concat(foods[old_id]['inedible']))
    print('edible: '.concat(foods[old_id]['edible']))
    */

    if (always_edible == false) {
      inedible_id = 'caua_vegan_inedible_food_'+old_id

      IDRegistry.genItemID(inedible_id)

      /*
      Object.keys(ItemID).forEach(function(item_key) {
        if (item_key.indexOf('inedible') != -1 && item_key.indexOf(old_id)) {
          print('item id found:', item_key, ItemID[item_key])

          inedible_numeric_id = ItemID[item_key]
        }
      })
      */
      inedible_numeric_id = ItemID[inedible_id]
      if (inedible_numeric_id == null) {
        // print('item id not found :( , edible item name and id:', name, numeric_id)
        to_return = numeric_id
      } else {
        // print('inedible_numeric_id:', inedible_numeric_id)
        try {
          Item.createItem(inedible_id, name, texture2, {
            stack: stack
          });
        } catch (e) {
          print('make inedible item error:', e)
        }

        foods[old_id] = {
          edible: numeric_id,
          inedible: inedible_numeric_id
        };
        
        if (typeof saturation === 'Number') {
          saturations[numeric_id] = saturation
        }
        
        foods[old_id]['type'] = 'food'
        
        to_return = inedible_numeric_id
      }
    } else {
      foods[old_id] = {
          edible: numeric_id,
          inedible: null
        };
        
        if (typeof saturation === 'Number') {
          saturations[numeric_id] = saturation
        }
        
        foods[old_id]['type'] = 'food'
      
      to_return = numeric_id
    }

    to_return = to_return || null;

  } else {
    print('id doesn\'t starts with "caua.vegan.mod$" 😔')
  }
  return to_return || null;
}

// Functions, addDrink

function addDrink(id, name, texture, huger_to_recover, stack, transform_into, saturation, always_drinkable) {
  var to_return = addFood(id, name, texture, huger_to_recover, stack, transform_into, saturation, always_drinkable)
  
  foods[''.concat(id)].type = 'drink'
  
  newItem.setUseAnimation(foods[''.concat(id)].edible, 2)
  
  return to_return
}

// Functions, returnID

String.prototype.returnID = function(parent) {
  var str = this;
  var to_return;

  if (!parent) {
    if (typeof VanillaTileID !== 'undefined') {
      to_return = VanillaTileID[str]
    }

    if (!to_return) {
      to_return = VanillaItemID[str]
    }

    if (!to_return) {
      to_return = VanillaBlockID[str]
    }
  } else {
    eval('to_return = '+parent+'["'+str.replace('"', '\\"')+'"]')
  }

  // print('to_return:', to_return)

  return to_return;
}

// Functions, makeAllCoordinatesAround

var makeAllCoordinatesAround = makeAllCoordinatesAround || function(position, max) {
  var args = [arguments[0],
    arguments[1]];
  var position,
  max
  args.forEach(function(value) {
    if (typeof value === 'undefined') {} else {
      if (typeof value === 'object') {
        position = value
      } else if (typeof value === 'number') {
        max = value
      } else {
        /*
        class newTypeError extends Error {
          constructor(message) {
            super(message); // (1)
            this.name = "TypeError"; // (2)
          }
        }
        throw new newTypeError(" argument type must be 'object' or 'number' not '".concat(typeof value, "'."))
        */

        throw TypeError
      }
    }
  })

  if (!max) max = 6;
  if (!position) position = makeCoord(getCoordinate('x'), getCoordinate('y'), getCoordinate('z'));

  var negative_between_coordinates = makeBetweenCoordinates(makeCoord(position.x, position.y, position.z), makeCoord(position.x - max, position.y - max, position.y - max))

  var positive_between_coordinates = makeBetweenCoordinates(makeCoord(position.x, position.y, position.z), makeCoord(position.x + max, position.y + max, position.y + max))

  var between_coordinates = negative_between_coordinates.slice()

  between_coordinates.concat(position)

  return between_coordinates
}

// Functions, getCallback

function getCallback() {
  var _ = {
    'current': {
      'callback': null
    }};

  try {
    _.current.callback = Callback;
  } catch (e) {
    _.current.callback = newCallback;
  }

  return _.current.callback;
}

// Functions, repeat

if (!String.prototype.repeat) {
  print('repeat doesn\'t exist!')
  String.prototype.repeat = function(count) {
    // 'use strict';
    if (this == null) {
      throw new TypeError('não é possível converter ' + this + ' para um objeto');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('o núm. de repetições não pode ser negativo');
    }
    if (count == Infinity) {
      throw new RangeError('o núm. de repetições deve ser menor que infinito');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }

    // Ao Garantir que count seja um inteiro de 31 bits nos dá uma grande otimização
    // na parte principal. Porém, navegadores atuais (de agosto de 2014 pra cá)
    // não conseguem mais manipular strings de 1 << 28 chars ou maiores, então:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('o núm. de repetições não deve estourar o tamanho máx. de uma string');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}

// Functions, runCommand

var commands_to_run = []

function runCommand(command, to_eval, At) {
  command = ''.concat(command)

  var At = At || null;

  if (to_eval != null) {
    if (typeof to_eval === 'string') {
      if (to_eval.startsWith('At')) {
        var without_at_te = to_eval.replaceOnce('At', ''); without_at_te = without_at_te.trimStart()

        eval('At ' + without_at_te)
      }
    }
  }

  var new_at;

  if (isArray(At)) {
    new_at = {}

    new_at.x = At[0]; new_at.y = At[1]; new_at.z = At[2];
  }

  if (new_at != null) {
    At = new_at
  }

  var index = commands_to_run.length

  commands_to_run[commands_to_run.length] = command;

  var add = {
    start: '',
    end: ''
  }

  if (typeof At === 'object' && At != null) {
    add.start = 'At';
    add.end = ', x, y, z'.replace('x', 'Number('+String(At.x)+')').replace('y', 'Number('+String(At.y)+')').replace('z', 'Number('+String(At.z)+')');
  }

  eval('newCommands.exec'+add.start+'(command'+add.end+')')
}

// Functions, cauStrip

function cauStrip(str, sep) {
  if (!sep) {
    sep = ' '
  }

  var _ = {}; _.sep = sep,
  _.str = str

  var to_return;

  if (sep = ' ' && typeof String.prototype.trim !== 'undefined') {
    to_return = str.trim(sep)

    // print('trim')
  } else {
    var sep = _.sep
    var str = _.str

    str = str.split(sep)
    var new_str = []

    for (var i = 0; i < str.length; i++) {
      var char = str[i]

      if (char == '') {} else {
        new_str.push(char)
      }
    }

    to_return = new_str.join(sep)

    // print('stripped')
  }

  return to_return
}

function __getTime__() {
  var date = new Date;
  return date.getTime();
}

// Functions, setTimeout

var to_wait = {
  first_time: null,
  milliseconds: null,
  'function': null,
}

var setTimeout, __setTimeout__;

__setTimeout__ = function(foo, milliseconds) {
  to_wait.function = foo
  to_wait.milliseconds = milliseconds
  to_wait.first_time = __getTime__()
}

var __st_milliseconds__ = __setTimeout__

function __st_seconds__(foo, seconds) {
  __st_milliseconds__(foo, seconds * 1000)
}

function __st_minutes__(foo, minutes) {
  __st_seconds__(foo, minutes * 60)
}

function __st_hours__(foo, hours) {
  __st_minutes__(foo, minutes * 60)
}

setTimeout = function(foo, time) {
  var time_type = arguments[2] || 'milliseconds'

  eval('__st_'+time_type+'__(foo, time)')
}

getCallback().addCallback("NativeCommand", function(commale) {

  if (commands_to_run.indexOf(commale) != -1) {
    // objectToString.print(commands_to_run)
    print('command: "'+commale+'" runned!')
    commands_to_run.splice(commands_to_run.indexOf(commale), 1);
  }

  objectToString.print(commale)

  if (commale == 'getitemid' || commale == '/getitemid') {
    setTimeout(function() {
      var item = newPlayer.getCarriedItem()
      
      var item_data = ''
      
      if (item.data != 0) {
        item_data = ':'+item.data.toString()
      }
      
      if (item.id == 0) {
        newGame.message(String("\n".repeat(16)) + 'you aren\'t holding any item dum.')
      } else {
        newGame.message(String("\n".repeat(16)) + 'current item id: '.concat(item.id, item_data, '.'))
      }
    }, 1, 'seconds');
  }
})

//// Functions, smashedItem

var NumericIDsToTextIDs = {'numeric_ids': [], 'text_ids': []}

NumericIDsToTextIDs.numeric_ids = Object.values(newVanillaItemID).concat(Object.values(newVanillaBlockID), Object.values(getModID('Item')), Object.values(getModID('Block')))

NumericIDsToTextIDs.text_ids = Object.keys(newVanillaItemID).concat(Object.keys(newVanillaBlockID), Object.keys(getModID('Item')), Object.keys(getModID('Block')))

var smashes_to_eval = []

function smashedItem(to_be_smashed, result, tbs_parent, block_in_pos, bip_data, make_recipes, upper_block, lower_block) {
  if (!upper_block || upper_block == 0) {
    upper_block = 33
  }

  if (!lower_block || lower_block == 0) {
    lower_block = 34
  }
  
  if (!block_in_pos) {
    block_in_pos = 0
  }
  
  if (bip_data != null && bip_data != undefined) {
    bip_data = parseInt(Number(bip_data))
  }
  
  if (Number.isNaN(bip_data) || bip_data == undefined) {
    bip_data = null
  }
  
  if (make_recipes != false) {
    if (!make_recipes) {
      make_recipes = true
    }
  }
  
  var tbs_parent_str = tbs_parent
  
  if (!tbs_parent) {
    tbs_parent = null;
    tbs_parent_str = '';
  }

  var to_be_smashed_as_text = to_be_smashed


  if (typeof to_be_smashed !== 'string') {
    to_be_smashed = Number(to_be_smashed)

    if (Number.isNaN(to_be_smashed)) {
      throw new TypeError("The argument 'to_be_smashed' must be a number")
    }

    to_be_smashed_as_text = NumericIDsToTextIDs.text_ids[NumericIDsToTextIDs.numeric_ids.indexOf(to_be_smashed)]

    if (typeof to_be_smashed_as_text !== 'string') {
      throw (function() { var err = new Error("Index '" + NumericIDsToTextIDs.indexOf(to_be_smashed) + "' is out of range"); err.__proto__.name = 'IndexError'; return err; }());
    }

    to_be_smashed_as_text = String(to_be_smashed_as_text)
    
    // print(to_be_smashed_as_text, to_be_smashed_as_text.returnID(tbs_parent))
    
    result = parseInt(String(Number(result)))

    upper_block = parseInt(String(Number(upper_block)))

    lower_block = parseInt(String(Number(lower_block)))
    
    block_in_pos = parseInt(String(Number(block_in_pos)))
    
    if (block_in_pos != 0) {
      if (block_in_pos == lower_block) {
        throw (function() { var err = new Error("The arguments 'block_in_pos' and 'lower_block' must not have the same value"); err.__proto__.name = 'ValueError'; return err; }());
      }
    }
    
    smashes_to_eval.push([to_be_smashed_as_text, result, upper_block, lower_block, block_in_pos, bip_data])
    
    if (make_recipes === true) {
      function craftingFunc(arg1) {
        if (String(arg1.getFieldSlot(0)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(0)
        }
  
        if (String(arg1.getFieldSlot(1)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(1)
        }
  
        if (String(arg1.getFieldSlot(2)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(2)
        }
  
        if (String(arg1.getFieldSlot(3)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(3)
        }
  
        if (String(arg1.getFieldSlot(4)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(4)
        }
  
        if (String(arg1.getFieldSlot(5)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(5)
        }
  
        if (String(arg1.getFieldSlot(6)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(6)
        }
  
        if (String(arg1.getFieldSlot(7)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(7)
        }
  
        if (String(arg1.getFieldSlot(8)).includes('id='+String(to_be_smashed_as_text.returnID(tbs_parent)))) {
          arg1.decreaseFieldSlot(8)
        }
      }
  
      Recipes.addShapeless({
        id: result, count: 1, data: 0
      }, [{
          id: upper_block, data: -1
        }, {
          id: to_be_smashed_as_text.returnID(tbs_parent), data: -1
        }], craftingFunc)
  
      for (var i = 2; i < 8+1; i++) {
        var text = 'Recipes.addShapeless({id: result, count: '+String(i)+', data: 0}, [{id: upper_block, data: -1}, '+String('{id: to_be_smashed_as_text.returnID("'+tbs_parent_str.replace('"', '\\"')+'"), data: -1}, ').repeat(i)+'], craftingFunc)'
        
        try {
          eval(text)
        } catch (e) {
          print('cau.error', e, 'in', text)
        }
      }
    } else if (make_recipes !== false) {
      throw new TypeError("The argument 'make_recipes' must be a Boolean")
    }
  }
}

// objectToString.print('ua/au.txt'.isFile())

// addFood(1, 'test_with_id', {}, 3, 64)

// addFood('test_without_id', {})

/*

  // Functions, additionalAmount

function __resin_set__(amount){additional_amount.resin.amount = amount}

function __resin_get__() {return additional_amount.resin.amount}

var additional_amount = {resin: {
		amount: 0,
		set: __resin_set__,
		get: __resin_get__
	}
}

*/




// file: vanilla_extras.js

Array.prototype.toObject = function() {
  function to_run(array) {
    return array.reduce(function(result, item, index, array) {
      result[index] = item; //a, b, c
      return result;
    }, {})
  }

  return to_run.call(null, this)
}

Object.prototype.getPath = function(mode) {
  var path = 'neither a file nor a directory';
  
  try {
    path = this.getAbsolutePath()
  } catch (e) {}
  
  if (mode == 'error') {
    if (path == 'neither a file nor a directory') {
      throw new TypeError('The current object is ' + path)
    } else {
      return String(path)
    }
  } else {
    return String(path)
  }
}

newFileTools.GetListOfChildren = function(path) {
  if (typeof path !== 'string') {
    var n = ''

    if (String(typeof path).toLowerCase().startsWith('x') || String(typeof path).toLowerCase().startsWith('o')) {
      n = 'n'
    }

    throw new TypeError("The argument 'path' must be a string not a{n} ".replace('{n}', n) + typeof path)
  }

  return newFileTools.GetListOfDirs(path).concat(newFileTools.GetListOfFiles(path))
}

this.FileTools = newFileTools

// start

var files = FileTools.ReadJSON(mod_path_slash+'vanilla_extras/.files_result/files.json')

mapObj = function(obj, func, thisValue, tv2) {
  var type = 'array'
  
  if (typeof func === 'string') {
    type = func;
    func = thisValue;
    thisValue = tv2;
  }
  
  var values = Object.values(obj)
  var keys = Object.keys(obj)
  
  if (type === 'object') {
    type = 'obj';
  } else if (type !== 'array') {
    throw SyntaxError("The 'type' object must be 'array' or 'object' not '"+String(type)+"'")
  }
  
  eval('values.map(function(x, i, array) { func(x, keys[i], {rep}) }, thisValue)'.replace('{rep}', type))
}


function toMap(value, index, parent) {
  var parent_slash = undefined
  
  if (typeof value === 'string') {
    if (parent == files) {
      parent_slash = parent = 'files object'
    } else {// if (typeof parent !== 'undefined' && parent != null) {} else {
      if (value.endsWith('/')) {
        parent = value.substring(0, value.lastIndexOf('/'))
        parent = parent.substring(0, value.lastIndexOf('/'))
      } else {
        parent = value.substring(0, value.lastIndexOf('/'))
      }
      parent_slash = parent+'/'
    }
    
    // print('value:', value, 'parent:', parent_slash)
    
    var pack_options = {
      'resource_packs': 'resource_packs/vanilla',
      'behavior_packs': 'behavior_packs/vanilla'
    }
    
    if (parent_slash != 'files object') {
      Object.keys(pack_options).map(function(pack, pack_index) {
        // print('cau.le', parent_slash, pack)
        
        if (parent_slash.startsWith(pack)) {
          parent = parent.replaceOnce(pack, Object.values(pack_options)[pack_index])
          parent_slash = parent+'/'
          
          if (String(modpack_path_slash+parent).exists() != true) {
            FileTools.mkdir(modpack_path_slash+parent)
            
            print('The folder: "'+modpack_path_slash+parent+'" was created.')
          } else {
            print('The folder: "'+modpack_path_slash+parent+'" already exists.')
          }
        }
      })
    }
  }
  
  if (typeof value !== 'string') {
    // print('keys:', Object.keys(value).join(', '))
    
    var to_run = 'mapObj(value, function(value2, index2) { toMap(value2, index2) /*, value */ })'
    
    if (isArray(value)) {
      to_run = 'value.map(function(value2, index2) { toMap(value2, index2) /*, value */ })'
    }
    
    // print('running:', to_run)
    
    eval('try { '+to_run+' } catch (e) { print("run error:", e) }')
  }
}

mapObj(files, function(pack, index) {
  toMap(pack, index, files)
})

// print('files:', JSON.stringify(files))

// print('files size:', Object.keys(files).length)




// file: items.js

// Items, Resin

IDRegistry.genItemID("resin");

Item.createItem("resin", "Resina", {name: "resin", meta: 0}, {stack: 64})

// Items, Kapok Tuft

IDRegistry.genItemID("kapok_tuft");

Item.createItem("kapok_tuft", "Tufo de Sumaúma", {name: "kapok_tuft", meta: 0}, {stack: 64});

// Items, Potato Starch

IDRegistry.genItemID("potato_starch");

Item.createItem("potato_starch", "Amido de Batata", {name: "potato_starch", meta: 0}, {stack: 64});

// Items, Wheat Flour

IDRegistry.genItemID("wheat_flour");

Item.createItem("wheat_flour", "Farinha de Trigo", {name: "wheat_flour", meta: 0}, {stack: 64});

// Items, Wheat Dough

IDRegistry.genItemID("wheat_dough");

Item.createItem("wheat_dough", "Massa de Trigo", {name: "wheat_dough", meta: 0}, {stack: 64});

// Items, Raw Sticky Sugar Cane

IDRegistry.genItemID("raw_sticky_sugar_cane");

Item.createItem("raw_sticky_sugar_cane", "Cana-de-Açúcar Melada Crua", {name: "raw_sticky_sugar_cane", meta: 0}, {stack: 64});

// fertilizante
// Items, Fertilizer

IDRegistry.genItemID("fertilizer")

Item.createItem("fertilizer", "Fertilizante", {name: "fertilizer", meta: 0}, {stack: 64})




// file: blocks.js

/*
// Blocks, Glass Bottle Block

IDRegistry.genBlockID("glass_bottle_block");

Block.createBlock("glass_bottle_block", [{
  name: "Garrafa de Vidro (Bloco)", texture: [["kapok_block", 0]], inCreative: true
}],
  Block.createSpecialType({
    base: 20,
    opaque: false,
    sound: "glass",
    material: 20,
    destroytime: 0.3,
    explosionres: 0.3
  })
);

var params = {
  invertV: false,
  noRebuild: true,
  scale: [16, 16, 16]
}

var mesh = new RenderMesh()

mesh.importFromFile(mod_path_slash+'res/terrain-atlas/Bottle/Bottle.obj', 'obj', params)

mesh.rebuild()

var render = new ICRender.Model();
render.addEntry(mesh);

try {
  print('cau.le BlockID:', BlockID.glass_bottle_block)
} catch (e) {}

try {
  print('cau.le render:', render)
} catch (e) {}
*/

/*
newBlockRenderer.setStaticICRendersetStaticICRender(BlockID.glass_bottle_block, -1, render)
newBlockRenderer.setCustomCollisionShape(BlockID.glass_bottle_block, -1, render)
*/

// Blocks, Kapok Block

newToolAPI.addBlockMaterial("kapok", 1)

IDRegistry.genBlockID("kapok_block");

var color_names = ['White', 'Orange', 'Magenta', 'Light Blue', 'Yellow', 'Lime', 'Pink', 'Gray', 'Light Gray', 'Cyan', 'Purple', 'Blue', 'Brown', 'Green', 'Red', 'Black']

var pt_color_names = ['Branco', 'Laranja', 'Magenta', 'Azul Claro', 'Amarelo', 'Verde Limão', 'Rosa', 'Cinza', 'Cinza Claro', 'Ciano', 'Roxo', 'Azul', 'Marrom', 'Verde', 'Vermelho', 'Preto']

var kapok_blocks = [];
var inutilizable_kapok_blocks = []

for (var i = 0; i < 16; i++) {
  kapok_blocks.push({name: "Bloco de Tufo de Sumaúma {color}".replaceOnce('{color}', pt_color_names[i]), texture: [["kapok_block", i]], inCreative: true})
  inutilizable_kapok_blocks.push({name: "Bloco de Tufo de Sumaúma {color}".replaceOnce('{color}', pt_color_names[i]), texture: [["kapok_block", i]], inCreative: true})
};

Block.createBlock("kapok_block", kapok_blocks,
  Block.createSpecialType({
    base: 35,
    opaque: false,
    sound: "cloth",
    material: 35,
    destroytime: 0.8,
    explosionres: 0.8
  })
);

newToolAPI.registerBlockMaterial(BlockID.kapok_block, "kapok");

// newToolAPI.addToolMaterial('shears', material)

// objectToString.print('addToolMaterial:',newToolAPI.addToolMaterial.toString())

newToolAPI.addToolMaterial('shears', {
  "level": 1,
  "durability": 238,
  "damage": 0,
  "efficiency": 6
})

var materials = ['kapok']

for (var key in Object.keys(materials.toObject())) {
  if (parseInt(key).toString() == key) {} else {
    try {
      delete materials[key];
    } catch (e) {
      // pass
    }
  }
}

function setMaxDamage() {
  return null;
}

// ItemRegistry = newItemRegistry;

newToolAPI.registerTool = newToolAPI.registerTool.toString()

newToolAPI.registerTool = String(newToolAPI.registerTool).split('ItemRegistry.')

newToolAPI.registerTool = newToolAPI.registerTool.join('')

var rTFun;

eval('rTFun = ' + String(newToolAPI.registerTool))

newToolAPI.registerTool = rTFun

// objectToString.print('registerTool:', newToolAPI.registerTool)

try {
  newToolAPI.registerTool(359, 'shears', materials)
} catch (e) {
  print('registerTool error:', e)
}

/*
IDRegistry.genBlockID("shearable_kapok_block");

Block.createBlock("shearable_kapok_block", [
	{name: "Block ".concat(randomInt(1000001, 9999998)), texture: [["shearable_kapok_block", 0]], inCreative: true}],
	Block.createSpecialType({
	  base: 35,
		flammable: true,
		opaque: false,
		sound: "cloth",
		lightopacity: 0,
		lightlevel: 0,
		destroytime: stdt(2),
		explosionres: 0.8
	})
);
*/

this.ToolAPI = null

ToolAPI = newToolAPI

// objectToString.print(Object.keys(Block))

// newToolAPI.registerBlockMaterial(BlockID.shearable_kapok_block, "wool");

var to_print = ['blockMaterials', 'toolMaterials', 'toolData', 'blockData']
/*
to_print.forEach(function(key) {
  print(key+': '.concat(JSON.stringify(ToolAPI[key])) || 'nothing')
})
*/

Object.keys(ToolAPI).forEach(function(key) {
  if (JSON.stringify(to_print).indexOf(key) == -1 && key.indexOf('material') != -1) {
    // print(key.concat(': ', JSON.stringify(ToolAPI[key])))
  }
})

// objectToString.print('getLanguage:', Translation.getLanguage())

/*
destroytime: 0.4,
		explosionres: 0.8
*/




// file: food_items.js

// trint('bowl id:', 'bowl'.returnID())

var apple_sauce_id = addFood('apple_sauce', "Molho de Maçã", {name: "apple_sauce", meta: 0}, 3, 1, 'bowl'.returnID(), 1.05)

var cane_molasses_id = addDrink('cane_molasses', "Melado de Cana", {name: "cane_molasses", meta: 0}, 6, 16, 'glass_bottle'.returnID(), 1.2, true)

//alert(apple_sauce_id)

// alert('apple sauce id: ' + apple_sauce_id.toString())

// var apple_sauce_id = Item.createFoodItem('ssauce', "Molho de Maçã", {name: "apple_sauce", meta: 0}, 281, 3)

var ModItemID = ItemID

var ModBlockID = BlockID

getModID = function(to_get) {
  var to_return;

  if (!to_get) {
    to_get = 'Item'
  }
  
  var assign = false;
  var to_assign;
  
  if ('Item' != to_get && 'Block' != to_get) {
    to_get = 'Item'
    assign = true
  }

  try {
    eval('to_return = '+to_get+'ID');
    
    // eval('to_return = BlockID');
    
    to_assign = '{rep}ID';
    
    // print('return: {rep}ID'.replace('{rep}', to_get));
  } catch (e) {
    try {
      eval('to_return = Mod'+to_get+'ID');
      
      // eval('to_return = ModBlockID');
      
      to_assign = 'Mod{rep}ID';
      
      // print('return: Mod{rep}ID'.replace('{rep}', to_get));
    } catch (e2) {}
  }

  if (to_return == null) {
    eval('to_return = new'+to_get+'ID');
    
    // eval('to_return = newBlockID');
    
    to_assign = 'new{rep}ID';
    
    // print('return: new{rep}ID'.replace('{rep}', to_get));
  }
  
  if (assign) {
    eval('to_return = Object.assign('+to_assign.replace('{rep}', 'Item')+', '+to_assign.replace('{rep}', 'Block')+')');
  }
  
  return to_return;
}




// file: drops.js





// file: items_use.js

var pause_tick = false

getCallback().addCallback("ItemUse", function(coords, item, block) {
	let x = coords.relative.x;
	let y = coords.relative.y;
	let z = coords.relative.z;
	
	if (item.id == ModItemID.fertilizer) {
		newPlayer.decreaseCarriedItem();
		
		pause_tick = true
		
		// alert(block.id)
		
		// newWorld.setBlock(x, y, z, BlockID.liquidSource, 0);
		
		Particles.addFarParticle(33, x + 0.5, y + 0.5, z + 0.5, 0, 20, 0)
	} /*else if (block.id == 35 || block.id == getModID('Block').kapok_block) {
	  if (item.id == 359 || item.id == 0) {
	    var _ = {'ToolAPI': null}
	    var to_add = ''
	    try {
	      _.ToolAPI = ToolAPI
	    } catch (e) {}
	    
	    if (_.ToolAPI == null) {
	      _.ToolAPI = newToolAPI;
	      to_add = 'new'
	    }
	    
	    var result = _.ToolAPI.getDestroyTimeViaTool(block, item, coords, false)
	    
	    var resultIsCorrect = false;
	    
	    if (result == 0.800000011920929) {
	      resultIsCorrect = true
	    }
	    
	    objectToString.print(to_add+'ToolAPI.getDestroyTimeViaTool:', result, resultIsCorrect)
	  }
	}
	*/
/*
	else if (item.id == apple_sauce_id) {
		newPlayer.decreaseCarriedItem();
	}
*/
});




// file: recipes/items.js

Recipes.addShapeless({id: ModItemID.wheat_dough, count: 1, data: 0}, [{id: 'water_bucket'.returnID(), data: -1}, {id: ModItemID.wheat_flour, data: -1}], function(api, field) {
  for (var index in field) {
    if (Number.isInteger(Number(index))) {
      var slot = field[index]
      
      if (String(slot).includes('id='+String(ModItemID.wheat_flour))) {
        api.decreaseFieldSlot(index)
      } else if (String(slot).includes('id='+String('water_bucket'.returnID()))) {
        slot.setSlot('bucket'.returnID(), slot.getCount(), 0)
      }
      
      // print('cau.index', String(index)+':', String(slot))
    }
  }
  
  // print('slot:', api.getFieldSlot(0))
})

function rssc_crafting_function(api, field) {
  for (var index in field) {
    if (Number.isInteger(Number(index))) {
      var slot = field[index]
      
      if (String(slot).includes('id='+String(VanillaItemID['sugar_cane']))) {
        api.decreaseFieldSlot(index)
      } else if (String(slot).includes('id='+String('water_bucket'.returnID()))) {
        slot.setSlot('bucket'.returnID(), slot.getCount(), 0)
      }
      
      // print('cau.index', String(index)+':', String(slot))
    }
  }
}

Recipes.addShapeless({id: ModItemID.raw_sticky_sugar_cane, count: 1, data: 0}, [{id: 'piston'.returnID(), data: -1},{id: 'water_bucket'.returnID(), data: -1}, {id: VanillaItemID['sugar_cane'], data: -1}], rssc_crafting_function)

for (var i = 2; i < 7+1; i++) {
  eval("Recipes.addShapeless({id: ModItemID.raw_sticky_sugar_cane, count: "+String(i)+", data: 0}, [{id: 'piston'.returnID(), data: -1},{id: 'water_bucket'.returnID(), data: -1}, "+"{id: VanillaItemID['sugar_cane'], data: -1}, ". repeat(i)+"], rssc_crafting_function)")
}

var forEachs = []

function cane_molasses_to_sugar(food) {
  var foo = function(api, field, result) {
    for (var index in field) {
      if (Number.isInteger(Number(index))) {
        var slot = field[index]

        if (String(slot).includes('id='+String(food))) {
          slot.setSlot('glass_bottle'.returnID(), slot.getCount(), 0)
        }

        // print('cau.index', String(index)+':', String(slot))
      }
    }
    
    percentage(57, function() {
      print('1+1 = 2')
      
      result.count += 1
    }, function() {
      percentage(38, function() {
        print('1+2 = 3')
        
        result.count += 2
      }, function () {
        print('1+0 = 1')
      })
    })
  }

  return foo
}

for (var index in Object.values(foods['cane_molasses'])) {
  var value = Object.values(foods['cane_molasses'])[index]
  
  if (typeof value === 'number') {
    var food = value;
    
    print('food:', food)
    
    Recipes.addShapeless({id: 'sugar'.returnID(), count: 1, data: 0}, [{id: food, data: -1}], cane_molasses_to_sugar(food))
  }
}

/*
{
  var value = Object.values(foods['cane_molasses'])[index]
  
  print('index:', index)
  
  print('value:', value)
  
  if (typeof value === 'number') {
    var food = value;
    
    print('food:', food)
    
    Recipes.addShapeless({id: 'sugar'.returnID(), count: 1, data: 0}, [{id: food, data: -1}], cane_molasses_to_sugar(food))
  }
}
*/




// file: recipes/blocks.js

var kapok_block = newBlockID["kapok_block"]
var inutilizable_kapok_block = newBlockID["inutilizable_kapok_block"]

var custom_dyes = {
  0: [451]
}

/*
var parseInt2 = function(num) {
  var times = 1
  var add = 0
  if (num < 0) {
    num = num * -1
    times = -1
    add = -1
  }
  
  return Number((num - Number('0.'+String(String(num).split('.')[1] || 0))) * times) + add
}
*/

function preventSameColorCrafting(api, field, result, player) {
  var res_data = result.data
  var res_id = result.id
  var current_player = new PlayerActor(player)
  
  var stop = false

  field.map(function(slot, index) {
    if (stop != true) {
      if (slot.id != 0) {
        if (slot.id == res_id && slot.data == res_data) {
          stop = true;
          result.id = 0
          
          var slot_backup = {
            id: slot.id,
            count: slot.count,
            data: slot.data,
            extra: slot.extra
          }
          
          slot.count = 0; slot.id = 0;
          
          var slot = slot_backup
          
          current_player.addItemToInventory(slot.id, slot.count, slot.data, slot.extra)
        } else {
          api.decreaseFieldSlot(index)
        }
      }
    } else if (slot.id != 0) {
      var slot_backup = {
        id: slot.id,
        count: slot.count,
        data: slot.data,
        extra: slot.extra
      }
      
      slot.count = 0; slot.id = 0;
      
      var slot = slot_backup
      
      current_player.addItemToInventory(slot.id, slot.count, slot.data, slot.extra)
    }
  })
}

kapok_blocks.map(function(block, i) {
  var data = block.texture[0][1]
  var id = kapok_block
  
  if (Object.keys(custom_dyes).indexOf(String(data)) != -1) {
    custom_dyes[data].map(function(dye_id) {
      Recipes.addShapeless({id: id, count: 1, data: data}, [{id: kapok_block, data: -1}, {id: dye_id, data: -1}],preventSameColorCrafting)
    })
  }
  
  Recipes.addShapeless({id: id, count: 1, data: data}, [{id: kapok_block, data: -1}, {id: newVanillaItemID[color_names[data].toLowerCase().replace(' ', '_') + '_dye'], data: -1}],preventSameColorCrafting)
})




// file: recipes/food_items.js

Recipes.addShapeless({id: apple_sauce_id, count: 1, data: 0}, [{id: 'bowl'.returnID(), data: 0}, {id: 'apple'.returnID(), data: 0}])




// file: smashed_items.js

if (VanillaItemID["wheat"] === undefined) {
  VanillaItemID["wheat"] = 296
}


// Smashed Item, potato, potato starch

smashedItem('potato'.returnID(), ModItemID.potato_starch)

// Smashed Item, wheat, wheat flour

smashedItem(VanillaItemID['wheat'], ModItemID.wheat_flour, 'VanillaItemID')

// Smashed Item, sugar_cane, cane molasses

smashedItem(VanillaItemID['sugar_cane'], ModItemID.raw_sticky_sugar_cane, 'VanillaItemID', VanillaBlockID.water, 0, false)




// file: tick.js

objectToString.print('Entity:', Object.keys(newEntity))

var ent2;

var cts = {}

var cts_done = false

var CompoundTag_gets = [[null, 0],"getByte","getShort","getInt","getInt64","getFloat","getDouble",[null, 7],"getString","getListTag","getCompoundTag", [null, 11]]

// print(newEntity.spawnAtCoords)
// print(newEntity.spawnCustomAtCoords)

// print(newPlayer.setInventorySlot)

/*
function elseIfDo() {
  var all_between_coordinates;

  all_between_coordinates = makeAllCoordinatesAround;

  all_between_coordinates = all_between_coordinates();

  for (var index in all_between_coordinates) {
    if (parseInt(''.concat(index)) == index) {
      var coordinate = all_between_coordinates[index]

      if (newWorld.getBlock(coordinate.x, coordinate.y, coordinate.z).id == getModID('Block').shearable_kapok_block) {
        newWorld.setBlock(coordinate.x, coordinate.y, coordinate.z, getModID('Block').kapok_block, 0);
        try {
          delete to_set[JSON.stringify({x: coordinate.x, y: coordinate.y, z: coordinate.z})]
        } catch (e) {}
      }
    }
  }
}
*/

// objectToString.print('newPlayerActor:', String (newPlayerActor))

/*
for (var key in newPlayerActor) {
  value = newPlayerActor[key]
  objectToString.print(key+':', value)
}
*/

var objectPlayerActor;

var doOPAprint = true;

var dblock;

Array.prototype.toObject = function() {
  function to_run(array) {
    return array.reduce(function(result, item, index, array) {
      result[index] = item; //a, b, c
      return result;
    }, {})
  }

  return to_run.call(null, this)
}

Array.prototype.returnWithRemove = function(index) {
  function to_run(array, index) {
    var dict = array.toObject();
    delete dict[index];
    array = Object.keys(dict).map(function(key) {
      return dict[key]})

    return array
  }

  return to_run.call(null, this, index)
}

var to_set = {}

var carried_id = '';
var test_car = function(ci, pgc) {
  carried_id = ci
  var result = false
  var pgc_id = pgc.id

  if (carried_id == pgc_id) {
    result = true
  }

  return [result,
    pgc_id]
}

var cur_food = '';

var tellraw = false

var hent;

var firstPlayer;

var firstPlayerClient;

var pj_error = null

var ala;

var had_upper_block = []

var command_to_exec = null

var player_name = ''

getCallback().addCallback("tick", function() {
  to_wait.milliseconds, to_wait.first_time

  if (to_wait.first_time != null) {
    /*
    if (ala == null) {
      ala = to_wait.first_time
      // print(ala)
    }
    */

    if (__getTime__() > to_wait.first_time + to_wait.milliseconds) {
      to_wait.function();

      to_wait.milliseconds = to_wait.first_time = to_wait.function = null;
    }
  }
  
  if (sci.length > 0) {
    for (var i = sci.length - 1; i >= 0; i--) {
      var items = sci[i]

      if (newPlayer.getCarriedItem().id != 0 && items[2] == true) {
        newPlayer.addItemToInventory(items[1], 1, 0)
      } else {
        newPlayer.setInventorySlot(newPlayer.getSelectedSlotId(), items[1], 1, 0)

        // print('sci: ' + JSON.stringify(items));
      }

      sci.splice(i, 1)
      cur_food = '';
    }
  }
  
  /*
  if (Object.keys(to_set).length > 0) {
    for (var key in to_set) {
      var coordinate;
      eval('coordinate = ' + key);

      newWorld.setBlock(coordinate.x, coordinate.y, coordinate.z, to_set[key], 0);
    }
  }
  */

  if (newPlayer.getCarriedItem().id != 0) {
    if (newPlayer.getHunger() == 20 && new PlayerActor(newPlayer.get()).getGameMode() != 1) {
      // fome cheia

      //var item_id = newPlayer.getCarriedItem().id;

      if (Object.keys(foods).length > 0) {
        Object.keys(foods).forEach(function(key) {
          var food = foods[key];

          if (cur_food == food.inedible) {
            return null;
          } else {
            if (food.edible == newPlayer.getCarriedItem().id) {
              if (sci.indexOf([food.edible, food.inedible, false]) == -1 && newPlayer.getCarriedItem().id != 0) newPlayer.decreaseCarriedItem(); /* print('food ' + key + ' changing from edible to inedible'); */ sci.push([food.edible, food.inedible, false]); cur_food = food.inedible; return null;
            }
          }
        })
      }
    } else if (newPlayer.getHunger() < 20 || new PlayerActor(newPlayer.get()).getGameMode() == 1) {
      // fome não cheia

      //var item_id = newPlayer.getCarriedItem().id;

      if (Object.keys(foods).length > 0) {
        Object.keys(foods).forEach(function(key) {
          var food = foods[key];

          if (cur_food == food.edible) {
            return null;
          } else {
            if (food.inedible == newPlayer.getCarriedItem().id) {
              if (sci.indexOf([food.inedible, food.edible, false]) == -1 && newPlayer.getCarriedItem().id != 0) newPlayer.decreaseCarriedItem(); /* print('food ' + key + ' changing from inedible to edible'); */ sci.push([food.inedible, food.edible, false]); cur_food = food.edible; return null;
            }
          }
        })
      }
    }
  }

  var res = test_car(carried_id,
    newPlayer.getCarriedItem()); var t_or_f = res[0]; var id = res[1];
  if (t_or_f == false && id != 0) {
    /*
    try {
      objectToString.print('ToolAPI.getCarriedToolData:', newToolAPI.getCarriedToolData())
    } catch (e) {
      print('ToolAPI error: '.concat(e))
    }
    */

    print(id); carried_id = id;
    
    if (id == 'shears'.returnID()) {
      objectToString.print('shears: ', newToolAPI.getCarriedToolData())
    }
    
    /*
    if (id == 259) {
      objectToString.print(newPlayer.getCarriedItem().extra)
    } else {
      if (Object.values(ModItemID).indexOf(id) != -1) {
        print('name: ', Object.keys(ModItemID)[Object.values(ModItemID).indexOf(id)])
      }
    }
    */
  }

  /*
  if (newPlayer.getCarriedItem().id == 359) {
    var all_between_coordinates;

    all_between_coordinates = makeAllCoordinatesAround;

    all_between_coordinates = all_between_coordinates();

    for (var index in all_between_coordinates) {
      if (parseInt(''.concat(index)) == index) {
        var coordinate = all_between_coordinates[index]
        objectToString.print(coordinate)
        if (newWorld.getBlock(coordinate.x, coordinate.y, coordinate.z).id == getModID('Block').kapok_block) {
          objectToString.print(index,all_between_coordinates[index]);
          newWorld.setBlock(coordinate.x, coordinate.y, coordinate.z, getModID('Block').shearable_kapok_block, 0);

          // delete to_set[JSON.stringify({x: coordinate.x, y: coordinate.y, z: coordinate.z})]
        }
      }
    }
  } else if (Object.keys(to_set).length > 0) {
    elseIfDo()
  }

  if (newPlayer.getCarriedItem().id == 0 && Object.keys(to_set).length > 0) {
    elseIfDo()
  }
  */

  if (true) {
    var ega = newEntity.getAll()
    
    Object.keys(ega).forEach(function(key) {
      var ent = ega[key]
      
      if (true) { //to_set_pos.indexOf(ent) == -1) {
        if (newEntity.getTypeName(ent) != 'minecraft:player<>' && newEntity.getTypeName(ent) != 'minecraft:item<>') {
          if (ent2 != newEntity.getTypeName(ent) && Object.keys(cts).length == 0) {
            ent2 = newEntity.getTypeName(ent)
            // print('entity type:', newEntity.getType(ent))
          }
        }
        /*
        if (newEntity.getTypeName(ent) != 'minecraft:player<>' && newEntity.getTypeName(ent) != 'minecraft:item<>') {
          if (ent2 != newEntity.getTypeName(ent) && Object.keys(cts).length == 0) {
            ent2 = newEntity.getTypeName(ent)
            
            if (ent2 == 'raigen:place_potion<>') {
              // print('ent2Drop:', newEntity.getDroppedItem(ent).id, 374)
              
              // newEntity.getCompoundTag(ent).getValueType('Tags')
              
              var keys = newEntity.getCompoundTag(ent).getAllKeys()
              
              for (var index in keys) {
                if (!Number.isNaN(parseInt(index))) {
                  var key = keys[index]
                  
                  var cur_get = CompoundTag_gets[newEntity.getCompoundTag(ent).getValueType(key)]
                  
                  if (typeof cur_get === 'string') {
                    var to_add = [key]
                    
                    var ppush;
                    
                    eval('ppush = newEntity.getCompoundTag(ent).'+cur_get+'(key)')
                    
                    var number_gets = ["getInt","getInt64","getFloat","getDouble"]
                    
                    if (cur_get == 'getCompoundTag') {
                      ppush = ['CompoundTag', ppush]
                    } else if (number_gets.indexOf(cur_get) != -1) {
                      var old_cur_get = String([String(cur_get)].toString())
                      var cur_get2 = {}
                      cur_get2[0] = String([String(cur_get)].toString())
                      cur_get2[1] = String([String(cur_get2[0])].toString())
                      cur_get2 = cur_get2[1]
                      
                      if (old_cur_get == 'getListTag') {
                        
                      }
                      
                      ppush = [cur_get2.replaceOnce('get', ''), ppush]
                    } else if (typeof ppush === 'object') {
                      if (cur_get == 'getString') {
                        ppush = String(ppush)
                      } else {
                        ppush = [cur_get.replaceOnce('get', ''), ppush]
                      }
                    }
                    
                    to_add.push(ppush)
                    
                    /*
                    if (isArray(to_add[1]) || typeof to_add[1] === 'object') {
                      var to_add_1 = {}
                      
                      if (isArray(to_add[1])) {
                        to_add_1 = []
                      }
                      
                      for (var i = 0; i < to_add[1].length; i++) {
                        print('i:', i)
                      }
                      
                      // to_add[1] = to_add_1
                    }
                    
                    var to_add_1 = to_add[1]
                    
                    if (String(to_add_1) == '[object Object]') {
                      to_add_1 = Object.values(to_add[1]).length
                    }
                    \*\/
                    
                    cts[to_add[0]] = to_add[1]
                    
                  }
                }
              }
              
              // print('copTag:', JSON.stringify(Object.values(Object(keys))))
            }
          }
        }
        */
        
        if (newEntity.getTypeName(ent) == 'minecraft:item<>') {
          for (var ste_i = smashes_to_eval.length; ste_i--; ) {
            var ste_v = smashes_to_eval[ste_i];
            // print(JSON.stringify(ste_v))
            try {
              var item_name = newEntity.getCompoundTag(ent).getCompoundTagNoClone('Item').getString('Name')
              
              // print(item_name, 'minecraft:'+ste_v[0])
              
              if (item_name.replaceOnce('minecraft:', '') == ste_v[0]) {
                // print('done 1')
                var p = newEntity.getPosition(ent)
                
                // print(JSON.stringify(ega))
    
                var hend = []
    
                var result = [];
                result.length = 3; //n=2
    
                function combine(input, len, start) {
                  if (len === 0) {
                    if (result[0].startsWith('a') && result[1].startsWith('b') && result[2].startsWith('c')) {
                      hend.push(result.join(', '))
                    }
                    return;
    
                  }
                  for (var i = start; i <= input.length - len; i++) {
                    result[result.length - len] = input[i];
    
                    combine(input, len-1, i+1);
                  }
                }
    
                var a = p.x | 0,
                b = p.y | 0,
                c = p.z | 0
                
                var array = ["a-1",
                  "a",
                  "a+1",
                  "b",
                  "b+1",
                  "c-1",
                  "c",
                  "c+1"];
                combine(array, result.length, 0);
    
                hend = JSON.stringify(hend).split('"')
    
                var hhend = '['
    
                for (var i = 0; i < hend.length; i++) {
                  // console.log(hend[i])
                  if (hend[i] != ',' && !'[]'.includes(hend[i])) {
                    hhend += '['+hend[i]+'], '
                  }
                }
    
                eval('hend = '+hhend+']')
    
                for (var index in hend) {
                  var pp = hend[index]
    
                  var block = newWorld.getBlock(pp[0], pp[1], pp[2]).id;
                  
                  if (block == ste_v[2] && had_upper_block.indexOf(ent) == -1) {
                    if (newWorld.getBlock(pp[0], pp[1]-1, pp[2]).id != ste_v[3]) {
                      if (ste_v[4] == 0) {
                        had_upper_block.push(ent)
                      } else if (ste_v[4] >= Number.NEGATIVE_INFINITY && ste_v[4] != 0) {
                        
                        // print(newWorld.getBlock(pp[0], pp[1], pp[2]).id, newWorld.getBlock(pp[0], pp[1]-1, pp[2]).id)
                        
                        if (newWorld.getBlock(pp[0], pp[1]-1, pp[2]).id == ste_v[4]) {
                          if (ste_v[5] == null) {
                            had_upper_block.push(ent)
                          } else if (!Number.isNaN(Number(ste_v[5]))) {
                            if (newWorld.getBlock(pp[0], pp[1]-1, pp[2]).data == Number(ste_v[5])) {
                              had_upper_block.push(ent)
                            }
                          }
                        }
                      }
                    }
                  }
                  
                  if (block == ste_v[3] && had_upper_block.indexOf(ent) != -1) {
                    var count = newEntity.getCompoundTag(ent).getCompoundTagNoClone('Item').getByte('Count')
                    
                    // print(count)
                    
                    newEntity.setPosition(ent, 0, -1, 0);
                    
                    newWorld.drop(pp[0], pp[1], pp[2], ste_v[1], parseInt(String(count)), 0)
                    
                    had_upper_block.splice(had_upper_block.indexOf(ent), 1)
                    
                    break
                  }
                }
              }
            }
            catch (e) {}
          }
        }
      } 
    })
  }

  if (String(firstPlayer) == 'undefined' || String(firstPlayer) == 'null' || firstPlayer == null || firstPlayer == undefined) {
    var ega = newEntity.getAll()

    Object.keys(ega).forEach(function(key) {
      var ent = ega[key]
      if (hent != newEntity.getTypeName(ent)) {
        hent = newEntity.getTypeName(ent)
        if (String(hent) == 'minecraft:player<>') {
          // player_name = newEntity.getNameTag(ent)
          firstPlayer = ent;
          // ('player_name:', player_name)
          print('firstPlayer:', ent)
        }
      }
    })
  } else {
    if (String(firstPlayerClient) == 'undefined' || String(firstPlayerClient) == 'null' || firstPlayerClient == null || firstPlayerClient == undefined) {
      firstPlayerClient = newNetwork.getClientForPlayer(firstPlayer)

      if (String(firstPlayerClient) == 'undefined' || String(firstPlayerClient) == 'null' || firstPlayerClient == null || firstPlayerClient == undefined) {} else {
        print('firstPlayerClient:', firstPlayerClient);

        try {
          objectToString.print(Object.keys(Object(firstPlayerClient)))
        } catch (e) {
          print('can\'t print first player client')
        }
      }
    } else {
      try {
        objectPlayerActor = Object(newPlayerActor)
      } catch (e) {}

      if (String(objectPlayerActor) == 'undefined' || String(objectPlayerActor) == 'null' || objectPlayerActor == null || objectPlayerActor == undefined) {} else {
        if (doOPAprint) {
          objectToString.print('objectPlayerActor:', Object.keys(Object(objectPlayerActor)).length)
          doOPAprint = !doOPAprint
        }
      }
    }
  }

  // ('/tellraw @a{"rawtext":[{"text":"oof"}]}')

  /*
  try {
    var system = client.registerSystem(0,0);
    system.initialize = function() {
      this.broadcastEvent("minecraft:execute_command", "/clear @a");
    }
  } catch (e) {}
  */
})

/*
objectToString.print('alamamememe')

if (this['client']) {
  objectToString.print(Object.keys(client))
} else {
  print('there is no client variable')
}
*/

/*
var ent = newEntity.spawnMob(x, y, z, EntityType.ZOMBIE);
// Легким движением руки пальцев по клавиатуре превращаем зомби в привидение
newEntity.setRenderType(ent, ghost_renderer.getRenderType());
// И добавляем ему скин из вновь созданного текстурпака
//(в папке /mob/)
newEntity.setMobSkin(ent, "mob/ghost.png")

recipe function

Recipes.addShaped({id: ItemID.coffeeworkshop$Rawc, count: 1, data: 0}, [
"Xa"
], [ 'X', ItemID.coffeeworkshop$Sc, 0,'a',325,8],function(api, field, result){for(let i in field){
		//if(field[i].id){
			//energy += ChargeItemRegistry.getEnergyFrom(field[i], 10000000, 3, true);
		//}
		api.decreaseFieldSlot(i);
	}
   //newPlayer.addItemToInventory(ItemID.mixing_bowl, 1);
newPlayer.addItemToInventory(325, 1);
});

*/

var framework;

try {
  newIMPORT("framework");
} catch (e) {
  print('trying to import framework error:',
    e)
}

framework = framework || 'nothing';

objectToString.print('framework:', framework, Object.keys(framework).length);




// file: FoodEaten.js

var sci = []

try {
  getCallback().addCallback("FoodEaten", function(food, ratio, player) {
    current_player = new PlayerActor(player)
    
    if (newEntity.getCarriedItem(player).count >= item_instance.count && newEntity.getCarriedItem(player).id == item_instance.id && current_player.getGameMode() != 1) {
            newEntity.setCarriedItem(player, item_instance.id, newEntity.getCarriedItem(player).count - 1, item_instance.data, item_instance.extra)
          }
    
    var item = newEntity.getCarriedItem(player).id;
    var slot1 = current_player.getSelectedSlot();
    transform_intos.forEach(function(items) {
      if (item == items[0]) {
        if (newEntity.getCarriedItem(player).id != 0) {
          current_player.addItemToInventory(items[1], 1, 0)
        } else {
          current_player.setInventorySlot(current_player.getSelectedSlot(), items[1], 1, 0)
          
          if (item == foods['cane_molasses'].edible) {
            newEntity.clearEffect(player, 19)
          }
          
          if (typeof saturations[item] === 'Number') {
            var new_saturation = current_player.getSaturation() + saturations[item]
            
            if (new_saturation < current_player.getHunger()) {
              current_player.setSaturation(new_saturation)
            } else {
              current_player.setSaturation(current_player.getHunger())
            }
          }
          
          // sci.push([items[0], items[1], true])

          /*
      if (slot1 == newPlayer.getSelectedSlotId()) {
        var count = 0
        while (count < 1000) {
          count++
        }
        if (newPlayer.getCarriedItem().id != items[0]) {}
      print('true '.concat(items[1]))
      */
        }
      }
    })

    // print('lis: ' + JSON.stringify([li1, li2, li3, li4, li5, li6]))
  })
} catch (e) {
  print('forEach error:', e)
}

/*
try {
  objectToString.print(Object.keys(newPlayer))
} catch (e) {
  print('print Player error:', e)
}
*/
write(mod_path_slash+"ids.json", JSON.stringify(vanilla_ids))

//print(hhitem)




// file: vars.js

var dont_include = "vars|__variable_name__|dont_include|___|____key____|this_clone"

var vars = {}; vars = this

for (__variable_name__ in vars) {
  if (dont_include.indexOf(__variable_name__) != -1 || '|'.indexOf(__variable_name__) != -1) {
    delete vars[__variable_name__]
  } else {
    // pass
	}
}

vars = JSON.stringify(vars)

var both = write(mod_path_slash+'vars.txt', vars);
var success = both[0];
/*
if (success==true) {
	print('text successfully written to the file')
} else {
	print('some error occurred while trying to write to the file')
	print('both[1]: '.concat(both[1]));
}
*/

// print(this.hasOwnProperty('window'))




