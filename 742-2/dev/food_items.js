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
