title @s actionbar textures/advancement/icons/ancient_debris
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.task"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.obtain_ancient_debris.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.task","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.obtain_ancient_debris.title"}]}}]}
tag @s add adv20