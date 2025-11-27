IMPORT("GuideAPI");

ModAPI.registerAPI("GuideAPI", {
	GuideAPI: GuideAPI,
	GuideHelper: GuideHelper,
	PageControllers: PageControllers
});

GuideAPI.registerGuide("mobs_book", { 
item: ItemID.mobs_book, 
debug: false, 
textures: {
background: "mobsbook_gui", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 

pages: {
 
            "default": {         
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.mobs_book},     
 ],
 elements: [
 {text: "MOOBS BOOK", size: 25},
 {text: "MOBS BOOK - в этой книге вы можете узнать всё о моде.", size: 18},
 ]
 }, 
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Инструменты", size: 25, link: "tools"},
                        {text: "Усиленные Инструменты", size: 25, link: "up_tools"},
                        {text: "Блоки", size: 25, link: "blocks"},
                        {text: "Купоны и Торговлья", size: 25, link: "coupons"},
                        {text: "Броня", size: 25, link: "armors"},
                        {text: "Сюрикен", size: 25, link: "suriken"},
                        {text: "Слитки", size: 25, link: "ingots"},
                        {text: "Печь", size: 25, link: "furnace"},
                        
                    ]
                },
          },
//tools
"tools": {
                preLink: "default",            
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Инструменты", size: 30},
                        {text: "Инструменты - их надо крафтить из слитков которые можно получить с помощью кристалов.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Инструменты Зомби", size: 25, link: "zombie_tools"},
                        {text: "Инструменты Скелета", size: 25, link: "skelet_tools"},
                        {text: "Инструменты Паука", size: 25, link: "spider_tools"},
                        {text: "Инструменты Крипера", size: 25, link: "creeper_tools"},
                        {text: "Инструменты Спрута", size: 25, link: "sprut_tools"},
                        {text: "Инструменты Оцелота", size: 25, link: "ocelot_tools"},
                        {text: "Инструменты Слизня", size: 25, link: "slime_tools"},
                        {text: "Инструменты Ифрита", size: 25, link: "blaze_tools"},
                        {text: "Инструменты Эндермэна", size: 25, link: "enderman_tools"},
                    ]
                }
            },
          
          "zombie_tools": {
                preLink: "tools",                
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_sword},
     {id: ItemID.zombie_axe},
     {id: ItemID.zombie_pickaxe},
     {id: ItemID.zombie_shovel},

 ],
 elements: [
 {text: "Инструменты Зомбака!", size: 18},
 {text: "Меч: Урон: 5, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 {text: "Топор: Урон: 6, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Кирка: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Лопата: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_ingot}
                    ],
                    elements: [
                    {text: "Слиток Зомбака", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Зомбаков", size: 18},
                        {text: "И от Зомбов выпадает зомби кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 

          "skelet_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.skelet_sword},
     {id: ItemID.skelet_axe},
     {id: ItemID.skelet_pickaxe},
     {id: ItemID.skelet_shovel},

 ],
 elements: [
 {text: "Инструменты Скелета!", size: 18},
 {text: "Меч: Урон: 5, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 {text: "Топор: Урон: 6, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Кирка: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Лопата: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.skelet_ingot}
                    ],
                    elements: [
                    {text: "Слиток Скелета", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Скелетов", size: 18},
                        {text: "И от Скелетов выпадает скелет кристал  который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 
    
"spider_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.spider_sword},
     {id: ItemID.spider_axe},
     {id: ItemID.spider_pickaxe},
     {id: ItemID.spider_shovel},

 ],
 elements: [
 {text: "Инструменты Паука!", size: 18},
 {text: "Меч: Урон: 5, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 {text: "Топор: Урон: 6, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Кирка: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
{text: "Лопата: Урон: 3, Эффективность: 11, Прочность: 500, Уровень: 3", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.spider_ingot}
                    ],
                    elements: [
                    {text: "Слиток Паука", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Пауков", size: 18},
                        {text: "И от Пауков выпадает паук кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 

"creeper_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.creeper_sword},
     {id: ItemID.creeper_axe},
     {id: ItemID.creeper_pickaxe},
     {id: ItemID.creeper_shovel},

 ],
 elements: [
 {text: "Инструменты Крипера!", size: 18},
 {text: "Меч: Урон: 6, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 {text: "Топор: Урон: 7, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Кирка: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Лопата: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.creeper_ingot}
                    ],
                    elements: [
                    {text: "Слиток Крипера", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Криперов", size: 18},
                        {text: "И от Криперов выпадает крипер кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 

"sprut_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sprut_sword},
     {id: ItemID.sprut_axe},
     {id: ItemID.sprut_pickaxe},
     {id: ItemID.sprut_shovel},

 ],
 elements: [
 {text: "Инструменты Спрута!", size: 18},
{text: "Меч: Урон: 6, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 {text: "Топор: Урон: 7, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Кирка: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
{text: "Лопата: Урон: 4, Эффективность: 12, Прочность: 900, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.sprut_ingot}
                    ],
                    elements: [
                    {text: "Слиток Спрута", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Спрутов", size: 18},
                        {text: "И от Спрутов выпадает спрут кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 

"ocelot_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ocelot_sword},
     {id: ItemID.ocelot_axe},
     {id: ItemID.ocelot_pickaxe},
     {id: ItemID.ocelot_shovel},

 ],
 elements: [
 {text: "Инструменты Оцелота!", size: 18},
 {text: "Меч: Урон: 7, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 {text: "Топор: Урон: 8, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Кирка: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Лопата: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ocelot_ingot}
                    ],
                    elements: [
                    {text: "Слиток Оцелота", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Оцелотов", size: 18},
                        {text: "И от Оцелотов выпадает оцелот кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 
    
    "slime_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.slime_sword},
     {id: ItemID.slime_axe},
     {id: ItemID.slime_pickaxe},
     {id: ItemID.slime_shovel},

 ],
 elements: [
 {text: "Инструменты Слиза!", size: 18},
 {text: "Меч: Урон: 7, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 {text: "Топор: Урон: 8, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Кирка: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
{text: "Лопата: Урон: 5, Эффективность: 14, Прочность: 1300, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.slime_ingot}
                    ],
                    elements: [
                    {text: "Слиток Слиза", size: 20},
                        {text: "Чтобы получить этот слиток вам    переплавить обчный слиз в Моб Печке", size: 18}
                    ]
                },
    }, 
    
    "blaze_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blaze_sword},
     {id: ItemID.blaze_axe},
     {id: ItemID.blaze_pickaxe},
     {id: ItemID.blaze_shovel},

 ],
 elements: [
 {text: "Инструменты Ифрита!", size: 18},
 {text: "Меч: Урон: 8, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 {text: "Топор: Урон: 9, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Кирка: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Лопата: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.blaze_ingot}
                    ],
                    elements: [
                    {text: "Слиток Ифрита", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Ифритов", size: 18},
                        {text: "И от Ифритов выпадает ифрит кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 
    
"enderman_tools": {
                preLink: "tools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.end_sword},
     {id: ItemID.end_axe},
     {id: ItemID.end_pickaxe},
     {id: ItemID.end_shovel},

 ],
 elements: [
 {text: "Инструменты Эндермена!", size: 25},
 {text: "Меч: Урон: 8, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 {text: "Топор: Урон: 9, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Кирка: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
{text: "Лопата: Урон: 6, Эффективность: 16, Прочность: 1700, Уровень: 4", size: 10},
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.end_ingot}
                    ],
                    elements: [
                    {text: "Слиток Эндермена", size: 20},
                        {text: "Чтобы получить этот слиток вам    надо убить Эндерменов", size: 18},
                        {text: "И от Эндерменов  выпадает эндермен кристал   который можно переплавить в Пече Мобов!", size: 18}
                    ]
                },
    }, 
//uptools
"up_tools": {
                preLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты", size: 30},
                        {text: "Усиленные Инструменты - они намного лучше чем обчные! И они все разные ломаеть блоков! Например 3×3, 5×5", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Зомби Инструменты", size: 25, link: "zombie_uptools"},
                        {text: "Скелет Инструменты", size: 25, link: "skelet_uptools"},
                        {text: "Паук Инструменты", size: 25, link: "spider_uptools"},
                        {text: "Крипер Инструменты", size: 25, link: "creeper_uptools"},
                        {text: "Спрут Инструменты", size: 25, link: "sprut_uptools"},
                        {text: "Оцелота Инструменты", size: 25, link: "ocelot_uptools"},
                        {text: "Слиз Инструменты", size: 25, link: "slime_uptools"},
                        {text: "Ифрит Инструменты", size: 25, link: "blaze_uptools"},
                        {text: "Эндермен Инструменты", size: 25, link: "enderman_uptools"},
                    ]
                }
            },
            
            "zombie_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Зомбака", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "zombie_upaxe"},
                        {text: "Кирка", size: 25, link: "zombie_uppickaxe"},       
                    ]
                }
            },

"skelet_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Скелета", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "skelet_upaxe"},
                        {text: "Кирка", size: 25, link: "skelet_uppickaxe"},       
                    ]
                }
            },

"spider_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Паука", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "spider_upaxe"},
                        {text: "Кирка", size: 25, link: "spider_uppickaxe"},       
                    ]
                }
            },

"creeper_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Крипера", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "creeper_upaxe"},
                        {text: "Кирка", size: 25, link: "creeper_uppickaxe"},       
                    ]
                }
            },

"sprut_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Спрута", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "sprut_upaxe"},
                        {text: "Кирка", size: 25, link: "sprut_uppickaxe"},       
                    ]
                }
            },

"slime_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Слиза", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "slime_upaxe"},
                        {text: "Кирка", size: 25, link: "slime_uppickaxe"},       
                    ]
                }
            },

"ocelot_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Оцелота", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "ocelot_upaxe"},
                        {text: "Кирка", size: 25, link: "ocelot_uppickaxe"},       
                    ]
                }
            },

"blaze_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Ифрита", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "blaze_upaxe"},
                        {text: "Кирка", size: 25, link: "blaze_uppickaxe"},       
                    ]
                }
            },

"enderman_uptools": {
                preLink: "up_tools",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Услиенные Инструменты Эндермена", size: 30},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Топор", size: 25, link: "enderman_upaxe"},
                        {text: "Кирка", size: 25, link: "enderman_uppickaxe"},       
                    ]
                }
            },

"zombie_upaxe": {
                preLink: "zombie_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_zombie_axe},
 ],
 elements: [
 {text: "Усиленный Топор Зомбака!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.zombie_ingot, data: 0},
 "b": {id: ItemID.zombie_axe, data: 0}
 },
 result: {id: ItemID.UP_zombie_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Зомбака!", size: 25},
 ],
 }
},

"zombie_uppickaxe": {
                preLink: "zombie_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_zombie_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Зомбака!", size: 18},
 {text: "Урон: 5", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.zombie_ingot, data: 0},
 "b": {id: ItemID.zombie_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_zombie_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Зомбака!", size: 25},
 ],
 }
},

"skelet_upaxe": {
                preLink: "skelet_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_skelet_axe},
 ],
 elements: [
 {text: "Усиленный Топор Скелета!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.skelet_ingot, data: 0},
 "b": {id: ItemID.skelet_axe, data: 0}
 },
 result: {id: ItemID.UP_skelet_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Скелета!", size: 25},
 ],
 }
},

"skelet_uppickaxe": {
                preLink: "skelet_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_skelet_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Скелета!", size: 18},
 {text: "Урон: 5", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.skelet_ingot, data: 0},
 "b": {id: ItemID.skelet_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_skelet_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Скелета!", size: 25},
 ],
 }
},

"spider_upaxe": {
                preLink: "spider_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_spider_axe},
 ],
 elements: [
 {text: "Усиленный Топор Паука!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.spider_ingot, data: 0},
 "b": {id: ItemID.spider_axe, data: 0}
 },
 result: {id: ItemID.UP_spider_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Паука!", size: 25},
 ],
 }
},

"spider_uppickaxe": {
                preLink: "spider_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_spider_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Паука!", size: 18},
 {text: "Урон: 5", size: 15},
 {text: "Эффективность: 13", size: 15},
 {text: "Прочность: 1300", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.spider_ingot, data: 0},
 "b": {id: ItemID.spider_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_spider_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Паука!", size: 25},
 ],
 }
},

"creeper_upaxe": {
                preLink: "creeper_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_creeper_axe},
 ],
 elements: [
 {text: "Усиленный Топор Крипера!", size: 18},
 {text: "Урон: 9", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.creeper_ingot, data: 0},
 "b": {id: ItemID.creeper_axe, data: 0}
 },
 result: {id: ItemID.UP_creeper_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Крипера!", size: 25},
 ],
 }
},

"creeper_uppickaxe": {
                preLink: "creeper_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_creeper_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Крипера!", size: 18},
 {text: "Урон: 6", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.creeper_ingot, data: 0},
 "b": {id: ItemID.creeper_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_creeper_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Крипера!", size: 25},
 ],
 }
},

"sprut_upaxe": {
                preLink: "sprut_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_sprut_axe},
 ],
 elements: [
 {text: "Усиленный Топор Спрута!", size: 18},
 {text: "Урон: 9", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.sprut_ingot, data: 0},
 "b": {id: ItemID.sprut_axe, data: 0}
 },
 result: {id: ItemID.UP_sprut_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Спрута!", size: 25},
 ],
 }
},

"sprut_uppickaxe": {
                preLink: "sprut_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_sprut_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Спрута!", size: 18},
 {text: "Урон: 6", size: 15},
 {text: "Эффективность: 15", size: 15},
 {text: "Прочность: 1700", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.sprut_ingot, data: 0},
 "b": {id: ItemID.sprut_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_sprut_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Спрута!", size: 25},
 ],
 }
},

"slime_upaxe": {
                preLink: "slime_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_slime_axe},
 ],
 elements: [
 {text: "Усиленный Топор Слиза!", size: 18},
 {text: "Урон: 10", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.slime_ingot, data: 0},
 "b": {id: ItemID.slime_axe, data: 0}
 },
 result: {id: ItemID.UP_slime_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Слиза!", size: 25},
 ],
 }
},

"slime_uppickaxe": {
                preLink: "slime_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_slime_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Слиза!", size: 18},
 {text: "Урон: 7", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.slime_ingot, data: 0},
 "b": {id: ItemID.slime_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_slime_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Слиза!", size: 25},
 ],
 }
},

"ocelot_upaxe": {
                preLink: "ocelot_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_ocelot_axe},
 ],
 elements: [
 {text: "Усиленный Топор Оцелота!", size: 18},
 {text: "Урон: 10", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.ocelot_ingot, data: 0},
 "b": {id: ItemID.ocelot_axe, data: 0}
 },
 result: {id: ItemID.UP_ocelot_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Оцелота!", size: 25},
 ],
 }
},

"ocelot_uppickaxe": {
                preLink: "ocelot_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_ocelot_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Оцелота!", size: 18},
 {text: "Урон: 7", size: 15},
 {text: "Эффективность: 17", size: 15},
 {text: "Прочность: 2100", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.ocelot_ingot, data: 0},
 "b": {id: ItemID.ocelot_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_ocelot_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Оцелота!", size: 25},
 ],
 }
},

"blaze_upaxe": {
                preLink: "blaze_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_blaze_axe},
 ],
 elements: [
 {text: "Усиленный Топор Ифрита!", size: 18},
{text: "Урон: 11", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.blaze_ingot, data: 0},
 "b": {id: ItemID.blaze_axe, data: 0}
 },
 result: {id: ItemID.UP_blaze_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Ифрита!", size: 25},
 ],
 }
},

"blaze_uppickaxe": {
                preLink: "blaze_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_blaze_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Ифрита!", size: 18},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.blaze_ingot, data: 0},
 "b": {id: ItemID.blaze_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_blaze_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Ифрита!", size: 25},
 ],
 }
},

"enderman_upaxe": {
                preLink: "enderman_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_end_axe},
 ],
 elements: [
 {text: "Усиленный Топор Эндермена!", size: 18},
 {text: "Урон: 11", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.end_ingot, data: 0},
 "b": {id: ItemID.end_axe, data: 0}
 },
 result: {id: ItemID.UP_end_axe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Топор Эндермена!", size: 25},
 ],
 }
},

"enderman_uppickaxe": {
                preLink: "enderman_uptools",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.UP_end_pickaxe},
 ],
 elements: [
 {text: "Усиленный Кирка Эндермена!", size: 25},
 {text: "Урон: 8", size: 15},
 {text: "Эффективность: 19", size: 15},
 {text: "Прочность: 2500", size: 15},
  {text: "Уровень: 4", size: 15},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "b", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.end_ingot, data: 0},
 "b": {id: ItemID.end_pickaxe, data: 0}
 },
 result: {id: ItemID.UP_end_pickaxe, count: 1}
 }
 ],
 elements: [
 {text: "Усиленный Кирка Эндермена!", size: 25},
 ],
 }
},
//blocks
"blocks": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.bzombie},
     {id: BlockID.bskelet},
     {id: BlockID.bspider},
     {id: BlockID.bcreeper},
     {id: BlockID.bsprut},
     {id: BlockID.bslime},
     {id: BlockID.bocelot},
     {id: BlockID.bblaze},
     {id: BlockID.bend},
          
 ],
 elements: [
 {text: "Все Блоки из мода!", size: 25},
 {text: "Компрессонные блоки из слитков", size: 18},
 {text: "Чтобы крафтить этот блок вам надо поставить в верстаке 9 слиток с одного типа", size: 18},
 ]
 }, 
    right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["a", "a", "a"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: ItemID.spider_ingot, data: 0}
 },
 result: {id: BlockID.bspider, count: 1}
 }
 ],
 elements: [
 {text: "Вот один пример !", size: 25},
 ],
 }
},
//coupons
"coupons": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.red_coupon},
     {id: ItemID.green_coupon},
     {id: ItemID.blue_coupon},
     {id: ItemID.yellow_coupon},
          
 ],
 elements: [
 {text: "Все Купоны из мода!", size: 18},
 {text: "Все купоны дропаеться из разных мобов", size: 11},
 {text: "Дропаеться из: ", size: 11},
 {text: "Красный купон : Летучая мышь, корова, рыба треска!", size: 11},
 {text: "Зеленый купон : Лошадь, овца, свинья!", size: 11},
 {text: "Синий купон : Курица, лосось, спрут", size: 11},
 {text: "Жельый купон : Тропический рыб, волк, лама", size: 11}, 
 ]
 }, 

right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.TradeRED},
     {id: ItemID.TradeGREEN},
     {id: ItemID.TradeBLUE},
     {id: ItemID.TradeYELLOW},
                    ],
                    elements: [
                    {text: "Все Трэид Блоки который можно тоговлять с купонами!", size: 18},
 {text: "Они спавниться в мире,Как структуры!", size: 11},
 {text: "Их есть разные виды! Еда, Растения, Инструменты и Брони, Блоки для выживания", size: 18}
                    ]
                },
    }, 
//armors
"armors": {
                preLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Броня", size: 30},
                        {text: "Броня - их надо крафтит  с слитоками, который можно получить с поммощью кристалами", size: 18},
                        {text: "И у каждый броне есть свой эффект! Эффекты работает когда игрок надил все шмоты из одного типа", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Броня Зомбака", size: 25, link: "zombie_armor"},
                        {text: "Броня Скелета", size: 25, link: "skelet_armor"},
                        {text: "Броня Паука", size: 25, link: "spider_armor"},
                        {text: "Броня Крипера", size: 25, link: "creeper_armor"},
                        {text: "Броня Спрута", size: 25, link: "sprut_armor"},
                        {text: "Броня Оцелота", size: 25, link: "ocelot_armor"},
                        {text: "Броня Слиза", size: 25, link: "slime_armor"},
                        {text: "Броня Ифрита", size: 25, link: "blaze_armor"},
                        {text: "Броня Эндермена", size: 25, link: "enderman_armor"},
                    ]
                }
            },

"zombie_armor": {
                preLink: "armors",
                nextLink: "zombie_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня зомбака, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Зомбака", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Зомбака", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "zombie_armor_1": {
                preLink: "zombie_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_leggings},
 ],
 elements: [
{text: "Штаны Зомбака", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.zombie_boots}
                    ],
                    elements: [
                    {text: "Ботинки Зомбака", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"skelet_armor": {
                preLink: "armors",
                nextLink: "skelet_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.skelet_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня скелета, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Скелета", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.skelet_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Скелета", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "skelet_armor_1": {
                preLink: "skelet_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.skelet_leggings},
 ],
 elements: [
{text: "Штаны Скелета", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.skelet_boots}
                    ],
                    elements: [
                    {text: "Ботинки Скелета", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"spider_armor": {
                preLink: "armors",
                nextLink: "spider_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.spider_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня паука, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Паука", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.spider_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Паука", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "spider_armor_1": {
                preLink: "spider_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.spider_leggings},
 ],
 elements: [
{text: "Штаны Паука", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.spider_boots}
                    ],
                    elements: [
                    {text: "Ботинки Паука", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"creeper_armor": {
                preLink: "armors",
                nextLink: "creeper_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.creeper_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня крипера, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Крипера", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.creeper_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Крипера", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "creeper_armor_1": {
                preLink: "creeper_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.creeper_leggings},
 ],
 elements: [
{text: "Штаны Крипера", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.creeper_boots}
                    ],
                    elements: [
                    {text: "Ботинки Крипера", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"sprut_armor": {
                preLink: "armors",
                nextLink: "sprut_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sprut_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня спрута, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Спрута", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.sprut_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Спрута", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "sprut_armor_1": {
                preLink: "sprut_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sprut_leggings},
 ],
 elements: [
{text: "Штаны Спрута", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.sprut_boots}
                    ],
                    elements: [
                    {text: "Ботинки Спрута", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"slime_armor": {
                preLink: "armors",
                nextLink: "slime_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.slime_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня слиза, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Слиза", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.slime_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Слиза", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "slime_armor_1": {
                preLink: "slime_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.slime_leggings},
 ],
 elements: [
{text: "Штаны Слиза", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.slime_boots}
                    ],
                    elements: [
                    {text: "Ботинки Слиза", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"ocelot_armor": {
                preLink: "armors",
                nextLink: "ocelot_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ocelot_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня оцелота, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Оцелота", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ocelot_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Оцелота", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "ocelot_armor_1": {
                preLink: "ocelot_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ocelot_leggings},
 ],
 elements: [
{text: "Штаны Оцелота", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ocelot_boots}
                    ],
                    elements: [
                    {text: "Ботинки Оцелота", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"blaze_armor": {
                preLink: "armors",
                nextLink: "blaze_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blaze_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня ифрита, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Ифрита", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.blaze_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Ифрита", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "blaze_armor_1": {
                preLink: "blaze_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blaze_leggings},
 ],
 elements: [
{text: "Штаны Ифрита", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.blaze_boots}
                    ],
                    elements: [
                    {text: "Ботинки Ифрита", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"enderman_armor": {
                preLink: "armors",
                nextLink: "enderman_armor_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.end_helmet},
 ],
 elements: [
 {text: "Когда будеть надето полный сет броня эндермена, тогда игроку даеться эффект: ", size: 20},
{text: "Шлем Эндермена", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.end_chestplate}
                    ],
                    elements: [
                    {text: "Нагрудник Эндермена", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прочность: ", size: 18}
                    ]
                },
    }, 
    
    "enderman_armor_1": {
                preLink: "enderman_armor",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.end_leggings},
 ],
 elements: [
{text: "Штаны Эндермена", size: 18},
 {text: "Защита:", size: 18},
 {text: "Прчность:", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.end_boots}
                    ],
                    elements: [
                    {text: "Ботинки Эндермена", size: 18},
                        {text: "Защита: ", size: 18},
                        {text: "Прчность: ", size: 18}
                    ]
                },
    }, 

"suriken": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.shurikenzb},
     {id: ItemID.shurikensk},
     {id: ItemID.shurikensp},
     {id: ItemID.shurikencp},
     {id: ItemID.shurikensq},
     {id: ItemID.shurikensm},
     {id: ItemID.shurikenot},
     {id: ItemID.shurikenif},
     {id: ItemID.shurikenen},

 ],
 elements: [
 {text: "Сюрикены из мода", size: 25},
 {text: "Сюрикен Зомбака Урон:", size: 11},
 {text: "Сюрикен Скелета Урон:", size: 11},
 {text: "Сюрикен Паука Урон:", size: 11},
 {text: "Сюрикен Крипера Урон:", size: 11},
 {text: "Сюрикен Спрута Урон:", size: 11},
 {text: "Сюрикен Слиза Урон:", size: 11},
 {text: "Сюрикен Оцелота Урон:", size: 11},
 {text: "Сюрикен Ифрита Урон:", size: 11},
 {text: "Сюрикен Эндермена Урон:", size: 11}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.szb},
                        {id: ItemID.ssk},
                        {id: ItemID.ssp},
                        {id: ItemID.scp},
                        {id: ItemID.ssq},
                        {id: ItemID.ssm},
                        {id: ItemID.sot},
                        {id: ItemID.sif},
                        {id: ItemID.sen}
                    ],
                    elements: [
                    {text: "Все кусочки сюрикенов", size: 20},
                        {text: "Чтобы скрафтить сюрикенов вам надо эти кусочки!", size: 18},
                        {text: "А этот кусочков можно получить из одного слитока мобов!", size: 18}
                    ]
                },
    }, 
    
    "ingots": {
                preLink: "default",
            left: {
 controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в Моб Печке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 [],
 []
 ],
 materials: {
 "a": {id: ItemID.enderman, data: 0}
 },
 result: {id: ItemID.end_ingot, count: 1}
 }
 ],
 elements: [
 {text: "Вот один пример!", size: 25},
 ]
 },
    right: {
                    controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.zombie_ingot},
     {id: ItemID.skelet_ingot},
     {id: ItemID.spider_ingot},
     {id: ItemID.creeper_ingot},
     {id: ItemID.sprut_ingot},
     {id: ItemID.slime_ingot},
     {id: ItemID.ocelot_ingot},
     {id: ItemID.blaze_ingot},
     {id: ItemID.end_ingot},

 ],
 elements: [
 {text: "Слитоков можно получить кристалов! А кристалы дропаеться из разных мобов! Чтобы получить слитков вам надо этих кристалов переплавить в Моб Печке", size: 20}
 ],
 }
},

"furnace": {
                preLink: "default",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.MobsFurnace},          
 ],
 elements: [
 {text: "Моб Печка!", size: 18},
 {text: "С этой печке надо переплавить кристалы который выпадает из разных мобов!", size: 15},
 {text: "И с кристалов можно получить Слитки из мобов!", size: 15},
 ]
 }, 

right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "b", "b"],
 ["s", "o", "s"]
 ],
 materials: {
 "a": {id: ItemID.spider, data: 0},
 "b": {id: ItemID.creeper, data: 0},
  "s": {id: ItemID.skelet, data: 0},
  "o": {id: ItemID.zombie, data: 0}
 
 },
 result: {id: ItemID.MobsFurnace, count: 1}
 }
 ],
 elements: [
 ],
 }
},

}
});