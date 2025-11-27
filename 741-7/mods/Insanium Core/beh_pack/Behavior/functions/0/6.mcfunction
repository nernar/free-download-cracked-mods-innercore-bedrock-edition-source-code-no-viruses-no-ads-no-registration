title @s actionbar textures/advancement/icons/bucket_lava
titleraw @s title {"rawtext":[{"text":"§e"},{"translate":"advancements.toast.task"},{"text":"§r"}]}
titleraw @s subtitle {"rawtext":[{"translate":"advancements.story.lava_bucket.title"}]}
tellraw @a {"rawtext":[{"translate":"chat.advancement.task","with":{"rawtext":[{"selector":"@s"},{"translate":"advancements.story.lava_bucket.title"}]}}]}
tag @s add adv6