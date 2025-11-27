var minecraft = {
  min_height: 0,
  max_height: 256,
  max_width: 30000000
}

minecraft.min_width = minecraft.max_width * -1

var to_evals = []

function to_eval(str) {
  var to_return = str;
  if (to_evals.indexOf(str) && str !== null) {
    to_return = eval(str)
    to_evals[to_evals.indexOf(str)] = null
  } else {
    to_evals.push(str)
  }
  
  return to_return
}

var types = {}; types['javascript'] = {type: 'javascript', __number__: 0}; types['python'] = {type: 'python', __number__: 1}

var javascript = to_eval('types.javascript'); var python = to_eval('types.python')

var force = {}; force.javascript = {force: true, to_force: javascript}

function range(start, stop, step, type) {
  
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  
  if (step == javascript || step == python) type = step; step = null;
  
  if (!step) {
    step = stop < start ? -1: 1;
  }
  
  if (!type) type = javascript;
  
  // if (start == 0 && type != force.javascript) type = python;
  
  var plus = ''
  
  if (type == javascript || type == force.javascript) {
    plus = 1
  } else if (type == python) {
    plus = 0
  } else {
    throw typeDoesNotExist
  }
  
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length + plus; idx++, start += step) {
    range[idx] = start;
  }

  return range
}

function getCoordinate(coord) {
  if (typeof coord === 'string') {
    if ('xyz'.indexOf(coord.toLowerCase()) != -1 && coord.length == 1) {
      var to_return;

      // remake Player; start

      var oldPlayer; var newPlayer;

      try {
        oldPlayer = Player
      } catch (e) {
        if (e instanceof ReferenceError) {
          newPlayer = {
            getPosition: function() {
              return {
                x: to_eval("eval('parseInt(0)')"),
                y: to_eval("eval('parseInt(0)')"),
                z: to_eval("eval('parseInt(0)')")
              };
            }
          }
        } else {
          throw e
        }
      }

      var Player_

      if (newPlayer != null) {
        Player_ = newPlayer
      } else {
        Player_ = oldPlayer
      }

      Player = Player_

      // remame Player; end

      eval('to_return = Player.getPosition().' + coord);
      return to_return;
    }
  }
}

function makeCoord(x, y, z) {
  var coords = {
    x: null,
    y: null,
    z: null
  };

  for (var i = 0; i < 3; i++) {
    if (arguments[i] < minecraft.min_height && Object.keys(coords)[i] == 'y') {
      coords[Object.keys(coords)[i]] = minecraft.min_height
    } else if (arguments[i] > minecraft.max_height && Object.keys(coords)[i] == 'y') {
      coords[Object.keys(coords)[i]] = minecraft.max_height
    } else {
      if (Object.keys(coords)[i] == 'y') {
        coords[Object.keys(coords)[i]] = arguments[i]
      } else {
        if (arguments[i] < minecraft.min_width) {
          coords[Object.keys(coords)[i]] = minecraft.min_width
        } else if (arguments[i] > minecraft.max_width) {
          coords[Object.keys(coords)[i]] = minecraft.max_width
        } else {
          coords[Object.keys(coords)[i]] = arguments[i]
        }
      }
    }

    if (typeof coords[Object.keys(coords)[i]] == 'undefined') coords[Object.keys(coords)[i]] = getCoordinate(Object.keys(coords)[i]);
  }
  
  /*
  Object.keys(coords).forEach(function(key) {
    var value = coords[key];
    coords[key] = eval(value.toString());
  }
  */
  
  return coords;
}

function makeBetweenCoordinates(coordinate1, coordinate2) {
  var coords = {};

  for (var i = i; i <= 2; i++) {
    eval("var values = ''; Object.keys(coordinate1).forEach(function(key) { var comma = ', '; if (key == Object.keys(coordinate1)[Object.keys(coordinate1).length - 1]) comma = ''; lueses += coordinate1[key] + comma; }); console.log(values); eval('coordinate1 = makeCoord(' + values + ')');".replace('coordinate1', 'coordinate'+i.toString()))
  }
  coords[JSON.stringify(coordinate1)] = makeCoord(coordinate1.x, coordinate1.y, coordinate1.z);
  coords[JSON.stringify(coordinate2)] = makeCoord(coordinate2.x, coordinate2.y, coordinate2.z);

  coords['__keys__'] = Object.keys(coords);
  
  function getValueByKey(index, key) {
    if (!key) {
      return coords[coords.__keys__[index]]
    } else {
      return coords[coords.__keys__[index]][key]
    }
  }
  
  var ranges = {x: null, y: null, z: null}
  
  Object.keys(getValueByKey(0)).forEach(function(key) {
    ranges[key] = range(getValueByKey(0, key), getValueByKey(1, key))
    
    /*
    if (ranges[key][ranges[key].length - 1] < 256) {
      console.log(key+':', ranges[key])
    } else {
      console.log(key+': ' + 'range('.concat(ranges[key][0], ', ', ranges[key][ranges[key].length - 1], ')'))
    }
    */
  })
  
  var coords_to_return = []
  
  ranges.x.forEach(function(value_x) {
    ranges.y.forEach(function(value_y) {
      ranges.z.forEach(function(value_z) {
        coords_to_return.push(makeCoord(value_x, value_y, value_z))
      })
    })
  })
  
  return coords_to_return
}

function makeAllCoordinatesAround(position, max) {
  var args = [arguments[0], arguments[1]];
  var position, max
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
  
  var negative_between_coordinates=makeBetweenCoordinates(makeCoord(position.x, position.y, position.z), makeCoord(position.x - max, position.y - max, position.y - max))
  
  var positive_between_coordinates=makeBetweenCoordinates(makeCoord(position.x, position.y, position.z), makeCoord(position.x + max, position.y + max, position.y + max))
  
  var between_coordinates = negative_between_coordinates.slice()
  
  between_coordinates.concat(position)
  
  return between_coordinates
}