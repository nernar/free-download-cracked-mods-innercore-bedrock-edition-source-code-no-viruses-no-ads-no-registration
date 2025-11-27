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