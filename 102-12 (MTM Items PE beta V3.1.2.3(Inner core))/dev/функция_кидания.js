Item.registerThrowableFunction("rock_stone", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
var soul = parseInt(Math.random() * 2);
World.drop(coords.x, coords.y, coords.z, ItemID.kamen, soul);
}
});
Item.registerThrowableFunction("kokos", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
var soul = parseInt(Math.random() * 2);
World.drop(coords.x, coords.y, coords.z, ItemID.kokos, soul);
}
});
Item.registerThrowableFunction("dereviannii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
if(Math.random() < .1){
World.drop(coords.x, coords.y, coords.z, ItemID.dereviannii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("kamennii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 2);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.kamennii_metatelnii_nozh, 1);
}
}
});
if(primal_core){
Item.registerThrowableFunction("kremnievii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 2);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.kremnievii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("izymrydnii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 4);
if(Math.random() < .5){
World.drop(coords.x, coords.y, coords.z, ItemID.izymrydnii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("kostianoi_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 2);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.kostianoi_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("obsidianovii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 4);
if(Math.random() < .5){
World.drop(coords.x, coords.y, coords.z, ItemID.obsidianovii_metatelnii_nozh, 1);
}
}
});
}
Item.registerThrowableFunction("zheleznii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .3){
World.drop(coords.x, coords.y, coords.z, ItemID.zheleznii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("stalnoi_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .4){
World.drop(coords.x, coords.y, coords.z, ItemID.stalnoi_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("zolotoi_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.zolotoi_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("almaznii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 4);
if(Math.random() < .5){
World.drop(coords.x, coords.y, coords.z, ItemID.almaznii_metatelnii_nozh, 1);
}
}
});