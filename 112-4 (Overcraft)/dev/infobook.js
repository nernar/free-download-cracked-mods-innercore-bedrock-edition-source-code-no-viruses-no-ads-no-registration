IDRegistry.genItemID("infobook"); 
Item.createItem("infobook", "Holy Book", {name: "info_book", meta: 0});

if(__config__.access("Holy book RU-EN") == false){
	
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("infobook", { 
item: ItemID.infobook, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "arrowRight", 
preLink: "arrowLeft", 
close: "cancel", 
}, 
				
pages: {
		
			"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Добро пожаловать, Искатель!", size: 22},
						{text: "Искатель, эта книга поможет и подскажет тебе в трудную минуту. Всего в ней 4 части: Основы, Магия, Индустрия и Исследования. Эта книга даст тебе основные знания о окружающем мире. Если ты хочешь узнать более, то тебе следует создать более продвинутые книги по одной из трех тем.", size: 15},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Основы", size: 25, link: "basics"},
						{text: "Магия", size: 25, link: "magic"},
						{text: "Индустрия", size: 25, link: "industry"},
						{text: "Исследования", size: 25, link: "searching"},
						
					]
				}
			},
			
			"basics": {
				preLink: "default",
				nextLink: "basics2",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreCopper}
					],
					elements: [
						{text: "Медная руда", size: 20},
						{text: "Медная руда - это руда которую вы можете добыть даже деревянной киркой, инструменты из нее чуть хуже железных и чуть лучше каменных. Золотая середина, так сказать"},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTin}
					],
					
					elements: [
						{text: "Оловянная руда", size: 20},
						{text: "Эта руда практически аналогична железной, в чем то лучше, в чем то хуже. Олово или железо, решать вам"},
					]
				},
			},
			
			"basics2": {
				preLink: "basics",
				nextLink: "basics3",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreSilver}
					],
					elements: [
						{text: "Серебряная руда", size: 20}, 
						{text: "Руда, которая мощнее железа и олова вместе взятых. Если вы оборотень, то ее лучше не использовать."},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreLead}
					],
					elements: [
						{text: "Свинцовая руда", size: 20},
						{text: "Если вы хотите сделать из свинца инструменты, то лучше не надо. Сделайте из серебра или сразу из платины. Делать их из свинца не вижу смысла."},
					]
				}
			},
			
			
			"basics3": {
				preLink: "basics2",
				nextLink: "basics4",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.SynolOre}
					],
					elements: [
						{text: "Синол", size: 20}, 
						{text: "Синол используетса в качестве топлива для печек."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.orePlatinum}
					],
					elements: [
						{text: "Платиновая руда", size: 20}, 
						{text: "Довольно-таки неплохая руда. Лучшая руда в обычнoм мире."},
					]
				   }
			},
			
			
			"basics4": {
				preLink: "basics3",
				nextLink: "basics5",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreMithril}
					],
					elements: [
						{text: "Мифриловая руда", size: 20}, 
						{text: "Мифриловая руда которую можно найти только в аду.Вона не является лучше платиновой, но лучше оловянной и медной."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreAdamantium}
					],
					elements: [
						{text: "Адамантиевая руда", size: 20}, 
						{text: "Адамантиевая руда лучшая руда с всех.Из нее выходят лучшие инструменты и прочна броня.Адамантиеву руду можно найти в аду."},
					]
				   }
			},
			
			"basics5": {
				preLink: "basics4",
				nextLink: "default",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTitanium}
					],
					elements: [
						{text: "Титановая руда", size: 20}, 
						{text: "Титановую руду добыть не так просто.Сначала вам придется победить Эндер дракона.Титанова руда немного слабее адамантиевой."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreOryhalk}
					],
					elements: [
						{text: "Орхилаковая руда", size: 20}, 
						{text: "Орхилаковая руда последняя руда которая добавляется этой модификацией.Найти ее можно только в Эндер мире.По характеристикам она немного хуже титановой."},
					]
					
				   }
			},
}
});
});
}

if(__config__.access("Holy book RU-EN") == true){

ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("infobook", { 
item: ItemID.infobook, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "arrowRight", 
preLink: "arrowLeft", 
close: "cancel", 
}, 
				
pages: {
	"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Welcome, Seeker!", size: 22},
						{text: "Seeker, this book will help and tell you in a difficult moment. There are 4 parts in it: Basics, Magic, Industry and Research. This book will give you basic knowledge about the world around you. If you want to learn more, then you should create more advanced books on one of three topics.", size: 15},
					]
				},
					
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Basics", size: 25, link: "basics"},
						{text: "Magic", size: 25, link: "magic"},
						{text: "Industry", size: 25, link: "industry"},
						{text: "Research", size: 25, link: "searching"},
						
					]
				}
			},
			
			"basics": {
				preLink: "default",
				nextLink: "basics2",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreCopper}
					],
					elements: [
						{text: "Copper ore", size: 20},
						{text: "Copper ore is an ore that you can get even with a wooden pickax, tools from it are slightly worse than iron ones and slightly better than stone ones. The golden mean, so to speak."},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTin}
					],
					
					elements: [
						{text: "Tin ore", size: 20},
						{text: "This ore is almost analogous to iron, in which it is better, in something worse. Tin or iron, it's up to you."},
					]
				},
			},
			
			"basics2": {
				preLink: "basics",
				nextLink: "basics3",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreSilver}
					],
					elements: [
						{text: "Silver ore", size: 20}, 
						{text: "Ore, which is more powerful than iron and tin combined. If you are a werewolf, it's best not to use it."},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreLead}
					],
					elements: [
						{text: "Lead ore", size: 20},
						{text: "If you want to make tools out of lead, then you better not. Make out of silver or immediately out of platinum. I do not see the point in making them out of lead."},
					]
				}
			},
			
			"basics3": {
				preLink: "basics2",
				nextLink: "basics4",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.SynolOre}
					],
					elements: [
						{text: "Synol", size: 20}, 
						{text: "Synol is used as fuel for furnaces."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.orePlatinum}
					],
					elements: [
						{text: "Platinum ore", size: 20}, 
						{text: "Pretty good enough ore. The best ore in the ordinary world."},
					]
				   }
			},
			
			
			
			"basics4": {
				preLink: "basics3",
				nextLink: "basics5",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreMithril}
					],
					elements: [
						{text: "Mithril Ore", size: 20}, 
						{text: "Mithril ore that can only be found in hell. It is not better platinum, but better tin and copper."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreAdamantium}
					],
					elements: [
						{text: "Adamantium ore", size: 20}, 
						{text: "Adamantium ore is the best ore from all. From it come out the best tools and strong armor. Adamantieva ore can be found in hell."},
					]
				   }
			},
			
			"basics5": {
				preLink: "basics4",
				nextLink: "default",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTitanium}
					],
					elements: [
						{text: "Titanium Ore", size: 20}, 
						{text: "Titanium ore is not so easy to extract. First you have to defeat the Ender dragon. Titanium ore is slightly weaker than adamantium."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreOryhalk}
					],
					elements: [
						{text: "Orchilak ore", size: 20}, 
						{text: "Orchilak ore is the last ore that is added by this modification. It can be found only in the Ender world. According to the characteristics, it is slightly worse than the titanium ore."},
					]
				   }
			},
	
	
	
}
});
});
}
