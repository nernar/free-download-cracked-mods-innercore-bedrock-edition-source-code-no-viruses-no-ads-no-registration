title @s actionbar textures/advancement/icons/diamond_sword
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.kill_all_mobs.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.kill_all_mobs.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv59