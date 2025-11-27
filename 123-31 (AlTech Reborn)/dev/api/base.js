var Base = {
	backTypes: 
    {stone: {id: 1, type: "stone"}, 
    cobblestone: {id: 4, type: "stone"}, 
    stone_andesite: {id: 1, data: 5, type: "stone"}, 
    stone_diorite: {id: 1, data: 3, type: "stone"}, 
    stone_granite: {id: 1, data: 1, type: "stone"},

    dirt: {id: 3, type: "dirt"}, 
    gravel: {physic: true, id: 13, type: "dirt"}, 
    clay: {id: 82, type: "dirt"}, 
    sand: {physic: true, sound: "sand", id: 12, type: "dirt"}, 
    sandstone: {id: 24, type: "stone"}, 

    red_sand: {physic: true, sound: "sand", id: 12, data: 1, type: "dirt"}, 
    red_sandstone: {id: 179, type: "stone"}, 
    
    clay_brown: {id: 172, data: 0, type: "stone"},
    clay_red: {id: 159, data: 14, type: "stone"},
    clay_silver: {id: 159, data: 8, type: "stone"},
    clay_white: {id: 159, data: 0, type: "stone"},
    clay_yellow: {id: 159, data: 4, type: "stone"},
    clay_orange: {id: 159, data: 1, type: "stone"},

    nether: {id: 87, type: "stone"}, 
    soul_sand: {physic: true, sound: "sand", id: 88, type: "dirt"}, 
    end: {id: 121, type: "stone"}},
    
	Ores: {
        Vanila: {
            Diamond: {
                color: "#8AFFFF",
                type: "GEM",
                level: ToolAPI.getBlockDestroyLevel(56) - ToolAPI.getBlockDestroyLevel(1)
             },
             Redstone: {
                color: "#FF0000",
                type: "NO_METALL",
                level: ToolAPI.getBlockDestroyLevel(73) - ToolAPI.getBlockDestroyLevel(1),
             },
             Emerald: {
                color: "#19C000",
                type: "GEM",
                level: ToolAPI.getBlockDestroyLevel(129) - ToolAPI.getBlockDestroyLevel(1)
             },
             Lapis: {
                color: "#0700FF",
                type: "NO_METALL",
                level: ToolAPI.getBlockDestroyLevel(21) - ToolAPI.getBlockDestroyLevel(1),
             },
             Coal: {
                color: "#1B1B1B",
                type: "COAL",
                level: ToolAPI.getBlockDestroyLevel(16) / 1.5
             },
             Iron: {
                color: "#FF513232",
                type: "METALL",
                level: ToolAPI.getBlockDestroyLevel(15)
             },
             Gold: {
                color: "#FFFDFF47",
                type: "METALL",
                level: ToolAPI.getBlockDestroyLevel(14) - ToolAPI.getBlockDestroyLevel(1)
             }
         }
    }
};