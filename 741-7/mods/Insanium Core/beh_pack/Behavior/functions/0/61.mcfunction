title @s actionbar textures/advancement/icons/carved_pumpkin
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.goal"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.adventure.summon_iron_golem.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.goal","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.adventure.summon_iron_golem.title"}]}}]}
tag @s add adv61