title @s actionbar textures/advancement/icons/crossbow
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.two_birds_one_arrow.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.two_birds_one_arrow.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv62