title @s actionbar textures/advancement/icons/illager_banner
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.hero_of_the_village.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.hero_of_the_village.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv56