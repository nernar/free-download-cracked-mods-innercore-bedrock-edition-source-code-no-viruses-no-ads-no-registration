/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: block.js

//сообщение
alert("AutoPlant by Максим Помазуев")

//только попробуй спиздить у меня мод!

//пшеница
//семена
Callback.addCallback("ItemUse", function (coords,item,block) {
if (block.id == 59 && block.data == 7){
World.drop(coords.x, coords.y, coords.z, 296, 1)
World.setBlock(coords.x, coords.y, coords.z,59)
}
});
//урожай
Callback.addCallback("ItemUse", function (coords,item,block) {
if (block.id == 59 && block.data == 7){
World.drop(coords.x, coords.y, coords.z, 295, 2)
World.setBlock(coords.x, coords.y, coords.z,59)
}
});

//морковь
Callback.addCallback("ItemUse", function (coords,item,block) {
if (block.id == 141 && block.data == 7){
World.drop(coords.x, coords.y, coords.z, 391, 2)
World.setBlock(coords.x, coords.y, coords.z,141)
}
});

//картошка
Callback.addCallback("ItemUse", function (coords,item,block) {
if (block.id == 142 && block.data == 7){
World.drop(coords.x, coords.y, coords.z, 392, 2)
World.setBlock(coords.x, coords.y, coords.z,142)
}
});

//свекла
//семена
Callback.addCallback("ItemUse", function (coords,item,block) {
if (block.id == 244 && block.data == 7){
World.drop(coords.x, coords.y, coords.z, 457, 1)
World.setBlock(coords.x, coords.y, coords.z,244)
}
});
//урожай
Callback.addCallback("ItemUse", function (coords,item,block) {
if (block.id == 244 && block.data == 7){
World.drop(coords.x, coords.y, coords.z, 458, 2)
World.setBlock(coords.x, coords.y, coords.z,244)
}
});rds.x, coords.y, coords.z,244)
}
});




