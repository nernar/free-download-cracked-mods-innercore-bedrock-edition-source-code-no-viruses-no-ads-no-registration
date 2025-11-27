title @s actionbar textures/advancement/icons/bucket_empty
titleraw @s title {"rawtext":[{"text":"§d"},{"translate":"advancements.toast.challenge"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.all_effects.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.challenge","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.all_effects.title"}]}}]}
playsound ui.challenge_complete @s
tag @s add adv39