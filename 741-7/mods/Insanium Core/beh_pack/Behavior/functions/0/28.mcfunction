title @s actionbar textures/advancement/icons/lodestone_block
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.task"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.nether.use_lodestone.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.task","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.nether.use_lodestone.title"}]}}]}
tag @s add adv28