    // Ирумидиевый Блок

Recipes.addShaped({id: BlockID.Block, count: 1, data: 0}, [
    "aaa", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.ingot,0]);
    
    //Шлем Ирумидиевый
    
    Recipes.addShaped({id: ItemID.helmet, count: 1, data: 0}, [
    "aaa", 
    "a a", 
    "   "
    ], ['a', ItemID.ingot,0]);
    
    //Нагрудник Ирумидиевый
    
    Recipes.addShaped({id: ItemID.chestplate, count: 1, data: 0}, [
    "a a", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.ingot,0]);
    
    //Поножи Ирумидиевые
    
    Recipes.addShaped({id: ItemID.leggings, count: 1, data: 0}, [
    "aaa", 
    "a a", 
    "a a"
    ], ['a', ItemID.ingot,0]);
    
    //Ботинки Ирумидиевые
    
    Recipes.addShaped({id: ItemID.boots, count: 1, data: 0}, [
    "   ", 
    "a a", 
    "a a"
    ], ['a', ItemID.ingot,0]);
    
    //Ирумидиевый Меч
    
    Recipes.addShaped({id: ItemID.sword, count: 1, data: 0}, [
    " a ", 
    " a ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0]);
   
   
   //Слитки из Улучшеного Блока
   
   Recipes.addShaped({id: ItemID.ingot_upgr, count: 9, data: 0}, [
    "   ", 
    " a ", 
    "   "
    ], ['a', BlockID.Block_upgr,0]);
    
    
    //Слитки из Блока
    
    
    Recipes.addShaped({id: ItemID.ingot, count: 9, data: 0}, [
    "   ", 
    " a ", 
    "   "
    ], ['a', BlockID.Block,0]);
    
    
   //Улучшеный Блок
   
   
   Recipes.addShaped({id: BlockID.Block_upgr, count: 1, data: 0}, [
    "aaa", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.ingot_upgr,0]); 
    
    //кусочки из слитка
    
    Recipes.addShaped({id: ItemID.nagetts, count: 9, data: 0}, [
    "   ", 
    " a ", 
    "   "
    ], ['a', ItemID.ingot,0]);
    
    //слиток из кусочков
    
    Recipes.addShaped({id: ItemID.ingot, count: 1, data: 0}, [
    "aaa", 
    "aaa", 
    "aaa"
    ], ['a', ItemID.nagetts,0]); 
    
    //магический порошок
    
    Recipes.addShaped({id: ItemID.powder, count: 1, data: 0}, [
    "ada", 
    "cbc", 
    "ada"
    ], ['a', ItemID.nagetts,0, 'b', 377,0, 'c', 351,5, 'd', ItemID.ingot,0]); 
   
   
   //кирка ирумидевая
   
   
   Recipes.addShaped({id: ItemID.pickaxe, count: 1, data: 0}, [
    "aaa", 
    " s ", 
    " s "
    ], ['a', ItemID.ingot,0, 's', 280,0]);