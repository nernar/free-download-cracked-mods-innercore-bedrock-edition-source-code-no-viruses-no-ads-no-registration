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
