title @s actionbar textures/advancement/icons/fish_raw
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.husbandry.complete_catalogue.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.husbandry.complete_catalogue.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv77