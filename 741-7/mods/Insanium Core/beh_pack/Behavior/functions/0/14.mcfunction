title @s actionbar textures/advancement/icons/apple_golden
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.goal"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.story.cure_zombie_villager.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.goal","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.story.cure_zombie_villager.title"}]}}]}
tag @s add adv14