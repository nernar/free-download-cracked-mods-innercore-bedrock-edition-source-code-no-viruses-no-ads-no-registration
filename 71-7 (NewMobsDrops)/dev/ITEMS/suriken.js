IDRegistry.genItemID("shurikenzb");
Item.createThrowableItem("shurikenzb", "Сюрикен Зомбака", {name:"shurikenzb"}, {stack:64});
IDRegistry.genItemID("shurikensk");
Item.createThrowableItem("shurikensk", "Сюрикен Скелета", {name:"shurikensk"}, {stack:64});
IDRegistry.genItemID("shurikensp");
Item.createThrowableItem("shurikensp", "Сюрикен Паука", {name:"shurikensp"}, {stack:64});
IDRegistry.genItemID("shurikencp");
Item.createThrowableItem("shurikencp", "Сюрикен Крипера", {name:"shurikencp"}, {stack:64});
IDRegistry.genItemID("shurikensq");
Item.createThrowableItem("shurikensq", "Сюрикен Спрута", {name:"shurikensq"}, {stack:64});
IDRegistry.genItemID("shurikensm");
Item.createThrowableItem("shurikensm", "Сюрикен Слиза", {name:"shurikensm"}, {stack:64});
IDRegistry.genItemID("shurikenot");
Item.createThrowableItem("shurikenot", "Сюрикен Оцелота", {name:"shurikenot"}, {stack:64});
IDRegistry.genItemID("shurikenif");
Item.createThrowableItem("shurikenif", "Сюрикен Ифрита", {name:"shurikenif"}, {stack:64});
IDRegistry.genItemID("shurikenen");
Item.createThrowableItem("shurikenen", "Сюрикен Эндермена", {name:"shurikenen"}, {stack:64});

Item.registerThrowableFunction("shurikencp", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 5);
} 
} 
);

Item.registerThrowableFunction("shurikenzb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenen", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);

Item.registerThrowableFunction("shurikensp", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenif", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);

Item.registerThrowableFunction("shurikensk", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenot", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Item.registerThrowableFunction("shurikensm", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Item.registerThrowableFunction("shurikensq", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 5);
} 
} 
);

IDRegistry.genItemID("szb");
Item.createItem("szb", "Кусочек Сюрикен Зомбака", {name: "szb", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssk");
Item.createItem("ssk", "Кусочек Сюрикен Скелета", {name: "ssk", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssp");
Item.createItem("ssp", "Кусочек Сюрикен Паука", {name: "ssp", meta: 0}, {stack: 64});
IDRegistry.genItemID("scp");
Item.createItem("scp", "Кусочек Сюрикен Крипера", {name: "scp", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssq");
Item.createItem("ssq", "Кусочек Сюрикен Спрута", {name: "ssq", meta: 0}, {stack: 64});
IDRegistry.genItemID("ssm");
Item.createItem("ssm", "Кусочек Сюрикен Слиза", {name: "ssm", meta: 0}, {stack: 64});
IDRegistry.genItemID("sot");
Item.createItem("sot", "Кусочек Сюрикен Отцелота", {name: "sot", meta: 0}, {stack: 64});
IDRegistry.genItemID("sif");
Item.createItem("sif", "Кусочек Сюрикен Ифрита", {name: "sif", meta: 0}, {stack: 64});
IDRegistry.genItemID("sen");
Item.createItem("sen", "Кусочек Сюрикен Эндермена", {name: "sen", meta: 0}, {stack: 64});