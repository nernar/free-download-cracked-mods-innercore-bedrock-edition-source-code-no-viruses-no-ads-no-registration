ModAPI.addAPICallback("ICore",
    function(api) {
      RegistryOre.RegistryOreMelter(BlockID.oreCopper,{
        id: BlockID.oreCopper,
          out: ItemID.ingotCopper,
          xp: {
            hasXp: true,
            minOut: 1,
            maxOut: 2
          }
      })
      RegistryOre.RegistryOreMelter(BlockID.oreTin, {
        id: BlockID.oreTin,
        out: ItemID.ingotTin,
        xp: {
          hasXp: true,
          minOut: 1,
          maxOut: 3
        }
      })
      RegistryOre.RegistryOreMelter(BlockID.oreLead, {
        id: BlockID.oreLead,
        out: ItemID.ingotLead,
        xp: {
          hasXp: true,
          minOut: 2,
          maxOut: 3
        }
      })
    })