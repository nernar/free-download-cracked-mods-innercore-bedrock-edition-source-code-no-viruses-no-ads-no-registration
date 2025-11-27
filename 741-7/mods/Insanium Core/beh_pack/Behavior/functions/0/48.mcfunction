title @s actionbar textures/advancement/icons/shulker_shell
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.end.levitate.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.end.levitate.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv48