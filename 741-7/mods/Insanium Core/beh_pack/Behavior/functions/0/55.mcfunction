title @s actionbar textures/advancement/icons/red_bed
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.task"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.sleep_in_bed.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.task","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.sleep_in_bed.title"}]}}]}
tag @s add adv55