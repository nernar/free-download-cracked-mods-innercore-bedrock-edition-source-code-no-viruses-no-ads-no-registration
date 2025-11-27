tag @s add loop21
scoreboard players set @s[tag="adv21"] warpTick 0
scoreboard players set @s[tag=!"warpTick2"] warpTick 0
tag @s add warpTick2
scoreboard players add @s[tag=!"adv21"] warpTick 1

execute @s[scores={warpTick=11},tag=!"adv21"] ~~~ function 0/warpTick/21