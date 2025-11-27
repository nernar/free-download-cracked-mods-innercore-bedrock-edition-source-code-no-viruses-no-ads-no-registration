title @s actionbar textures/advancement/icons/dragon_egg
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.goal"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.end.dragon_egg.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.goal","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.end.dragon_egg.title"}]}}]}
tag @s add adv42