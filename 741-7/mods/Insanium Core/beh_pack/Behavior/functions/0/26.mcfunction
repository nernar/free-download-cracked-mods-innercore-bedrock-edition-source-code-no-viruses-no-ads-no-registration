title @s actionbar textures/advancement/icons/ghast_tear
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.uneasy_alliance.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.uneasy_alliance.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv26