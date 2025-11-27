title @s actionbar textures/advancement/icons/netherite_chestplate
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.netherite_armor.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.netherite_armor.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv29