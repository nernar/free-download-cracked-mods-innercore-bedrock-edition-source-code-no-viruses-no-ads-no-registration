title @s actionbar textures/advancement/icons/totem
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.goal"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.totem_of_undying.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.goal","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.totem_of_undying.title"}]}}]}
tag @s add adv60