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