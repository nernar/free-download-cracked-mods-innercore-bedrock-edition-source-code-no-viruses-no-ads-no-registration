title @s actionbar textures/advancement/icons/netherite_boots
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.explore_nether.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.explore_nether.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv33