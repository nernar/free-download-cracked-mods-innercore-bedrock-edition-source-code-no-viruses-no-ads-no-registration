if (VanillaItemID["wheat"] === undefined) {
  VanillaItemID["wheat"] = 296
}


// Smashed Item, potato, potato starch

smashedItem('potato'.returnID(), ModItemID.potato_starch)

// Smashed Item, wheat, wheat flour

smashedItem(VanillaItemID['wheat'], ModItemID.wheat_flour, 'VanillaItemID')

// Smashed Item, sugar_cane, cane molasses

smashedItem(VanillaItemID['sugar_cane'], ModItemID.raw_sticky_sugar_cane, 'VanillaItemID', VanillaBlockID.water, 0, false)
