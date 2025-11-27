title @s actionbar textures/advancement/icons/elytra
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.goal"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.end.elytra.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.goal","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.end.elytra.title"}]}}]}
tag @s add adv47