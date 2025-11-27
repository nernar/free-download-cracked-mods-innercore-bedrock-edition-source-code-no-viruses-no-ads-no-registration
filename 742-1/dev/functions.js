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