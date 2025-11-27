title @s actionbar textures/advancement/icons/apple
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.husbandry.balanced_diet.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.husbandry.balanced_diet.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv79