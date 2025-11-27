title @s actionbar textures/advancement/icons/netherite_hoe
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.husbandry.netherite_hoe.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.husbandry.netherite_hoe.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv80