title @s actionbar textures/advancement/icons/arrow
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.sniper_duel.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.sniper_duel.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv67