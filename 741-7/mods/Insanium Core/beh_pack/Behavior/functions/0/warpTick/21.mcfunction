title @s actionbar textures/advancement/icons/map_empty
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.fast_travel.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.fast_travel.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv21