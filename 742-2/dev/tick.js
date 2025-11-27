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