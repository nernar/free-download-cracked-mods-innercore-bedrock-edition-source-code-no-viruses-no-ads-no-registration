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