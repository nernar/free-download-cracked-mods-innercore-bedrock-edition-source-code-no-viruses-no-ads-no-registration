IDRegistry.genItemID("book_twilight");
Item.createItem("book_twilight", "Book Twilight", {name: "Book_twilight", meta: 0}, {stack: 1});


GuideAPI.registerGuide("book_twilight", { 
item: ItemID.book_twilight, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 




pages: {
	
                  "default": {
                preLink: "default",
                nextLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,         
                    elements: [
                    
                        {text: "The Twilight Forest", size: 30},
                        {text: "-The Twilight Fores - this mod will add tools and bosses and buildings, the mod is pc based and will be updated continuously for the best user experience.", size: 18},
                        {text: "-This is just a beta version that hasn't been updated yet, so there's a lot of stuff that hasn't been included here", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                    {text: "================", size: 23},
                    {text: "Item", size: 27, link: "item"},     
                    {text: "================", size: 23},
                    {text: "Tools", size: 27, link: "tools"},  
                    {text: "================", size: 23},
                    {text: "Trophy", size: 27, link: "trophy"},    
                    {text: "================", size: 23},
                    {text: "Block", size: 27, link: "block"},      
                    {text: "================", size: 23},
                    {text: "Dimensions", size: 27, link: "dimensions"}, 
                    {text: "================", size: 23},
                    {text: "Mod", size: 27, link: "mob"},                            
                             
                    ]
                }
            },
                        "tools": {
                 preLink: "default",    	
                nextLink: "default",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    elements: [
                    {text: "The Twilight Forest", size: 30},
                    {text: "The Twilight Fores - this mod will add tools and bosses and buildings, the mod is pc based and will be updated continuously for the best user experience.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "================", size: 23},
                        {text: "Scepter", size: 25, link: "lifedrain_scepter"},
                        {text: "================", size: 23},
                        {text: "Steeleaf Tools", size: 25, link: "steeleaf_sword_shovel"},
                        {text: "================", size: 23},
                        {text: "IronWood Tools", size: 25, link: "ironwood_sword_shovel"},
                        {text: "================", size: 23},
                        {text: "Ice Sword", size: 25, link: "ice_sword"},
                        {text: "================", size: 23},
                        {text: "Mazebreaker Pickaxe-Minotaur Axe", size: 25, link: "pickaxe-axe"},
                        {text: "================", size: 23},
                        {text: "Bow", size: 25, link: "bow"},

                    ]
                }
            },
            
    
            "steeleaf_sword_shovel": {
            	preLink: "tools",    	
                nextLink: "steeleaf_pickaxe_axe",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_sword}
                    ],
                    elements: [
                    {text: "Steeleaf Sword", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 7", size: 18},
                    {text: "Durability: 780", size: 18},
                    
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_shovel}
                        ],
                    elements: [
                    {text: "Steeleaf Shovel", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 3", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
            "steeleaf_pickaxe_axe": {
            	preLink: "steeleaf_sword_shovel",    	
                nextLink: "ironwood_sword_shovel",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_pickaxe}
                    ],
                    elements: [
                    {text: "Steeleaf Pickaxe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 4", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Digging Level: diamond", size: 18},
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf_axe}
                        ],
                    elements: [
                    {text: "Steeleaf Axe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 6", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: Steeleaf", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
//ironwood
"ironwood_sword_shovel": {
            	preLink: "steeleaf_pickaxe_axe",    	
                nextLink: "ironwood_pickaxe_axe",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_sword}
                    ],
                    elements: [
                    {text: "IronWood Sword", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 8", size: 18},
                    {text: "Durability: 780", size: 18},                    
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_shovel}
                        ],
                    elements: [
                    {text: "IronWood Shovel", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 4", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
            "ironwood_pickaxe_axe": {
            	preLink: "ironwood_sword_shovel",    	
                nextLink: "tools",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_pickaxe}
                    ],
                    elements: [
                    {text: "IronWood Pickaxe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 5", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Digging Level: diamond", size: 18},
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_axe}
                        ],
                    elements: [
                    {text: "IronWood Axe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Craftable", size: 18},
                    {text: "Damage: 7", size: 18},
                    {text: "Durability: 780", size: 18},
                    {text: "Efficiency: 3", size: 18},
                    {text: "Metal: IronWood", size: 18},
                    {text: "=====================", size: 18},
                    {text: "you can see the recipe at the workbench and the Recipe Review mod", size: 18},
                    ]
                }
            },
            // scepter
            "lifedrain_scepter": {
            	preLink: "tools",    	
                nextLink: "zombie_scepter",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.lifedrain_scepter}
                    ],
                    elements: [
                    {text: "Lifedrain Scepter", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Lich Boss", size: 18},
                    {text: "Damage: 5", size: 18},
                    {text: "Summons: FireBall ", size: 18},
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted it only drops from the Lich boss", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shield_scepter}
                        ],
                    elements: [
                    {text: "Shield Scepter", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Lich Boss", size: 18},
                    {text: "Shield: Lever 3", size: 18},                    
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted it only drops from the Lich boss", size: 18},
                    ]
                }
            },
            "zombie_scepter": {
            	preLink: "lifedrain_scepter",    	
                nextLink: "scepter",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_scepter}
                    ],
                    elements: [
                    {text: "Zombie Scepter", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Rarity: Lich Boss", size: 18},
                    {text: "Summons: 2", size: 18},
                    {text: "Entity: zombie", size: 18},                  
                    {text: "Hp Entity: 10", size: 18},
                    {text: "Damage Entity: 7", size: 18},                                   
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted it only drops from the Lich boss", size: 18},
                    ]
                },                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    
                    elements: [
                    
                    ]
                }
            },
            //pickaxe axe
            "pickaxe-axe": {
            	preLink: "tools",    	
                nextLink: "tools",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.mazebreaker_pickaxe}
                    ],
                    elements: [
                    {text: "Mazebreaker Pickaxe", size: 20},
                    {text: "=====================", size: 18},
                    {text: "Damage: 3", size: 18},
                    {text: "Durability: 1576", size: 18},
                    {text: "Efficiency: 50", size: 18},
                    {text: "Digging Level: obsidian", size: 18},                    
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted and can only be found in the labyrinth", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.minotaur_axe}
                        ],
                    elements: [
                    {text: "Minotaur Axe", size: 20},
                    {text: "=====================", size: 18},                    
                    {text: "Damage: 8", size: 18},                    
                    {text: "Durability: 1354", size: 18},       
                    {text: "Efficiency: 24", size: 18},
                    {text: "=====================", size: 18},
                    {text: "This item cannot be crafted only dropped from the Minotaur boss", size: 18},
                    ]
                }
            },
            "ice_sword": {
                preLink: "tools",
                nextLink: "tools",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ice_sword}
                    ],
                    elements: [
                     {text: "Ice Sword", size: 20},
                    {text: "=====================", size: 18},                    
                    {text: "Damage: 11", size: 18},                    
                    {text: "Durability: 11", size: 18},                           
                    {text: "=====================", size: 18},
                    {text: "I found this paper blank so I put the formula here :))", size: 18},
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["b", "h", "b"],
 ["b", "h", "b"],
 ["b", "k", "b"]
 ],
 materials: {
 "k": {id: 280, data: 0},
 "h": {id: ItemID.ice_bomb, data: 0},
 
 },
 result: {id: ItemID.ice_sword, count: 1}
 }
 ],
 elements: [
 ],
 }
},

//item
            "item": {
                 preLink: "default",    	
                nextLink: "default",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    elements: [
                    {text: "The Twilight Forest", size: 30},
                    {text: "The Twilight Fores - this mod will add tools and bosses and buildings, the mod is pc based and will be updated continuously for the best user experience.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "================", size: 23},
                        {text: "IronWood", size: 25, link: "ironwood"},
                        {text: "================", size: 23},
                        {text: "IronWood Raw", size: 25, link: "ironwood_raw"},
                        {text: "================", size: 23},
                        {text: "Steeleaf", size: 25, link: "ironwood_raw"},
                        {text: "================", size: 23},
                        {text: "Naga Scale", size: 25, link: "naga_scale"},
                        {text: "================", size: 23},
                        {text: "Ice Bomb", size: 25, link: "naga_scale"},
                        {text: "================", size: 23},
                        {text: "Fiery Blood", size: 25, link: "fiery_blood"},
                        {text: "================", size: 23},
                        {text: "Fiery Ingot", size: 25, link: "fiery_ingot"},
                        ]
                }
            },
            
                        

"ironwood": {
            	preLink: "item",    	
                nextLink: "ironwood_raw",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood}
                    ],
                    elements: [
                    {text: "IronWood", size: 20},
                    {text: "This item only appears in Twilight Forest, used to make armor and tools", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.OTO_RECIPE_PAGE,
 title: "Furnace recipe",
 type: 0,
 bar_texture: "furnace_bar_guide",
 recipes: [
 {
 input: {
 id: ItemID.ironwood_raw,
 data: 0
 },

 output: {
 id: ItemID.ironwood,
 data: 0,
 count: 1
 }
 }
 ],
 elements: [] 
        }
 },

"ironwood_raw": {
            	preLink: "ironwood",    	
                nextLink: "naga_scale",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironwood_raw}
                    ],
                    elements: [
                    {text: "IronWood Raw", size: 20},                    
                    {text: "you can find this item in Twilight Forest, you can burn this item to get IronWood", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.steeleaf}
                        ],
                    elements: [
                    {text: "Steeleaf", size: 20},
                    
                    {text: "This item only appears in Twilight Forest, used to make armor and tools", size: 18},
                    ]
                }
            },
            "naga_scale": {
            	preLink: "ironwood_raw",    	
                nextLink: "fiery_blood",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.naga_scale}
                    ],
                    elements: [
                    {text: "Naga Scale", size: 20},                    
                    {text: "this item drops from the boss Naga, this item can make the 2nd most expensive armor of the mod so it is very important", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ice_bomb}
                        ],
                    elements: [
                    {text: "Ice Bomb", size: 20},
                    
                    {text: "This item is dropped from the penguin in the snow queen area, used to create a cool sword", size: 18},
                    ]
                }
            },
            "fiery_blood": {
            	preLink: "naga_scale",    	
                nextLink: "fiery_ingot",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fieryblood}
                    ],
                    elements: [
                    {text: "Fiery Blood", size: 20},
                    {text: "Hydra dragon's blood vial it's very rare almost very few, this item combines with iron ingot to create Fiery Ingot one of the best phono series", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["x", "z", "b"],
 ["b", "h", "b"],
 ["b", "k", "b"]
 ],
 materials: {
 "x": {id: 265, data: 0},
 "z": {id: ItemID.fieryblood, data: 0},
 
 },
 result: {id: ItemID.fiery_ingot, count: 1}
 }
 ],
 elements: [
 ],
 }
},
         
            "fiery_ingot": {
            	preLink: "fiery_blood",    	
                nextLink: "item",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fiery_ingot}
                    ],
                    elements: [
                    {text: "Fiery Ingot", size: 20},
                    {text: "Fiery Ingot is a series of phots that can be called the rarest in the Twilight Forest you can only make it too Fiery Blood", size: 18},
                    ]
                },                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    
                    elements: [
                    
                    ]
                }
            },
            "block": {
            	preLink: "default",    	
                nextLink: "default",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.twBlockPortal}
                    ],
                    elements: [
                    {text: "twilight forest block portal", size: 20},
                    {text: "This stage needs conditions to create a portal to the world of Twilight Forest, to activate the block you need a diamond, use the diamond to click on the block to create a portal", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "h", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 3, data: 0},
 
 
 },
 result: {id: BlockID.twBlockPortal, count: 1}
 }
 ],
 elements: [
 ],
 }
},



                    
    
            
            
            
            
            
            
            
            
            
            
}
});