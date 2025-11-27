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