title @s actionbar textures/advancement/icons/fireball
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.return_to_sender.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.return_to_sender.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv18