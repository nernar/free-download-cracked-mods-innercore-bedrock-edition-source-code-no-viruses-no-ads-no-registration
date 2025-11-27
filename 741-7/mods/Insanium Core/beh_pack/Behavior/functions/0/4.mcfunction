title @s actionbar textures/advancement/icons/iron_ingot
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.task"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.story.smelt_iron.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.task","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.story.smelt_iron.title"}]}}]}
tag @s add adv4