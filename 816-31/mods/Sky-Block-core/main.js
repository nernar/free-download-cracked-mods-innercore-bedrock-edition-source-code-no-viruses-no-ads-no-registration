/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/



// file: header.js

IMPORT("ScrutinyAPI");
IMPORT("RenderAPI");
IMPORT("ItemAnimHelper");

let players = {};

Saver.addSavesScope("save.skyblock",
	function read(scope){
		players = scope.players || {};
		day = scope.day_players || {};
	}, function save() {
		return {
			players: players||{},
			day_players: day
		}
});

Callback.addCallback("LevelLeft", function (){
	players = {};
	day = -1;
});

Callback.addCallback("PlayerChangedDimension", function(player, currentId, lastId){
	if(!players[player]){
		new PlayerActor(player).addItemToInventory(ItemID.quest_book, 1, 0, null, true);
		players[player] = true;
	}
});




// file: translation.js

Translation.addTranslation("Skyblock Basics", {
	ru:"Основы skyblock"
})
Translation.addTranslation("Get a tree", {
	ru:"Добудьте дерево"
})
Translation.addTranslation("reward:", {
	ru:"Награда:"
})
Translation.addTranslation("done", {
	ru:"выполнено"
});

Translation.addTranslation("Colictionner", {
	ru:"Коликционнер"
})
Translation.addTranslation("Craft all types of Storage Drawers", {
	ru:"Скрафтите все типы ящиков Storage Drawers"
})



Translation.addTranslation("Iron chest", {
	ru:"Железный сундук"
})
Translation.addTranslation("As usual, but better! Craft an iron chest.", {
	ru:"Как обычный, но лучше! Скрафтите железный сундук."
})
Translation.addTranslation("Silver chest", {
	ru:"Серебряный сундук"
})
Translation.addTranslation("As usual, but better! Craft an silver chest.", {
	ru:"Как обычный, но лучше! Скрафтите серебряный сундук."
})
Translation.addTranslation("Gold chest", {
	ru:"Золотой сундук"
})
Translation.addTranslation("As usual, but better! Craft an gold chest.", {
	ru:"Как обычный, но лучше! Скрафтите золотой сундук."
})
Translation.addTranslation("Diamond chest", {
	ru:"Алмазный сундук"
})
Translation.addTranslation("As usual, but better! Craft an diamond chest.", {
	ru:"Как обычный, но лучше! Скрафтите золотой сундук."
})
Translation.addTranslation("Crystal chest", {
	ru:"Алмазный сундук"
})
Translation.addTranslation("As usual, but better! Craft an crystal chest.", {
	ru:"Как обычный, но лучше! Скрафтите золотой сундук."
})


Translation.addTranslation("Machine block", {
	ru:"Базовый машинный блок"
})
Translation.addTranslation("This block is used in the Refined Storage mod crafting.", {
	ru:"Данный блок используется в крафтах мода Refined Storage."
})
Translation.addTranslation("Controller", {
	ru:"Контроллер сети"
})
Translation.addTranslation("The network controller is not bypassed for network operation.", {
	ru:"Контроллер сети не обходим для работы сети."
})

Translation.addTranslation("Grid", {
	ru:"Терминал"
})
Translation.addTranslation("The terminal serves for the space of objects in the network.", {
	ru:"Терминал служит для простора предметов в сети."
})

Translation.addTranslation("Grid crafting", {
	ru:"Терминал с верстаком"
})
Translation.addTranslation("The terminal serves for the space of objects in the network and can serve as a workbench.", {
	ru:"Терминал служит для простора предметов в сети и может служить как верстак."
})


Translation.addTranslation("Disk Drive", {
	ru:"Привод"
})
Translation.addTranslation("The drive stores memory disks in which you can already save your items.", {
	ru:"Привод хранит диски памяти, в которые уже можно сохранять свои предметы."
})

Translation.addTranslation("Block breaker", {
	ru:"Разрушитель блоков"
})
Translation.addTranslation("When the redstone is applied, it destroys the block.", {
	ru:"При подаче редстоуна разрушает блок."
})

Translation.addTranslation("Improved solar panel", {
	ru:"Улучшенная солнечная панель"
})
Translation.addTranslation("Craft an improved solar panel.", {
	ru:"Скрафтите улучшенную солнечную панель."
})

Translation.addTranslation("Hybrid solar panel", {
	ru:"Гибридная солнечная панель"
})
Translation.addTranslation("Craft an hybrid solar panel.", {
	ru:"Скрафтите гибридная солнечную панель."
})

Translation.addTranslation("Perfect solar panel", {
	ru:"Совершенна солнечная панель"
})
Translation.addTranslation("Craft an perfect solar panel.", {
	ru:"Скрафтите совершенная солнечную панель."
})

Translation.addTranslation("Quant solar panel", {
	ru:"Квантовая солнечная панель"
})
Translation.addTranslation("Craft an quant solar panel.", {
	ru:"Скрафтите квантовая солнечную панель."
})

Translation.addTranslation("Molecular transformer", {
	ru:"Малекулярный преобразователь"
})
Translation.addTranslation("The malecular converter converts one substance into another.", {
	ru:"Малекулярный преобразователь преобразует одно вещество в другое."
})

Translation.addTranslation("Junk", {
	ru:"Хлам"
})
Translation.addTranslation("Make a drilling rig.", {
	ru:"Сделайте буравую установку"
})

Translation.addTranslation("Iron furnace", {
	ru:"Железная печка"
})
Translation.addTranslation("Better than a stone! Make an iron stove.", {
	ru:"Лучше чем камень! Сделайте железную печку"
})







Translation.addTranslation("The breadwinner!", {
	ru:"Добытчик!"
})
Translation.addTranslation("Mine all types of gravel ore or sand or dust. Sift gravel or sand and craft ore from fragments of ore. Sand can be obtained by breaking gravel with a hammer, and gravel can be obtained by breaking a cobblestone with a hammer.", {
	ru:"Добудьте все типы руды гравия или песка или пыли. Просевайте гравий или песок и из осколков руды крафтить руду. Песок можно добыть сломав гравий молотом, а гравий можно добыть сломав булыжник молотом."
})

Translation.addTranslation("Infected foliage", {
	ru:"Заражённая листва"
})
Translation.addTranslation("Get the threads from the infected foliage, it is necessary to break the foliage with a hook. To infect the foliage, get a Silkworm and press it on the foliage (wait until the foliage turns white). The hook is made of 4 sticks, the silkworm falls from the foliage if you break it with a hook.", {
	ru:"Добудьте нитки с заражённой листвы, необходимо сломать листву крюком. Для заражения листвы добудте Шелкопряда и нажмите им по листве(ждите пока листва по белеет). Крюк крафтится из 4 палок, Шелкопряд падает с листвы, если ломать крюком."
})

Translation.addTranslation("Break all kinds of trees", {
	ru: "Сломайте все виды деревьев"
});

Translation.addTranslation("Break all kinds of trees(oak, dark oak, acacia, tropic tree, birch, spruce)", {
	ru: "Сломайте все виды деревьев(дуб, тёмный дуб, аккация, трописеское дерево, берёза, ель)"
});

Translation.addTranslation("Get the first resources!", {
	ru: "Добудьте первые ресурсы!"
});

Translation.addTranslation("Get the stones by sifting the ground, after which you can make a cobblestone of 4 stones.", {
	ru: "Добудьте камни просеивая землю, после чего вы сможете сделать булыжник из 4 камней."
});

Translation.addTranslation("Barrel", {
	ru: "Бочка"
})

Translation.addTranslation("Get a block of land with a barrel. To get the land, fill it with seedlings, the barrel will be filled with water during the rain.", {
	ru: "Получите блок земли с помощью бочки. Чтобы получить землю заполните её саженцами, бочка будет наполнятся водой во время дождя."
})

Translation.addTranslation("The first energy", {
	ru: "Первая энергия"
})

Translation.addTranslation("Craft a coal generator from the Factory craft mod. For the generator to work, you need fuel, for example coal.", {
	ru: "Скрафтите угольный генератор из мода Factory craft. Для работы генератора нужно топливо,  к примеру уголь."
})

Translation.addTranslation("Cauldron", {
	ru: "Котёл"
})

Translation.addTranslation("Craft a boiler, the boiler is needed for lava extraction, put it over a block that can blow heat, for example, a torch or fire, then put a cobblestone in the boiler.", {
	ru: "Скрафтите Котёл, котёл нужен для добычи лавы, поставить его над блоком который может довать тепло к примеру факел или огонь, дальше ложите в котёл булыжник."
})

Translation.addTranslation("Furnace", {
	ru: "Электрическая печка"
})

Translation.addTranslation("Make an electric stove", {
	ru: "Сделайте электрическую печку"
})

Translation.addTranslation("Reactor", {
	ru: "Ядерный реактор"
})

Translation.addTranslation("Make a nuclear reactor", {
	ru: "Сделайте ядерный реактор"
})


Translation.addTranslation("Automation", {
	en: "Automation",
	ru: "Автоматизация"
})

Translation.addTranslation("Automatic Sieve", {
	ru:"Автоматическое сито"
});
Translation.addTranslation("An automatic sieve is the same sieve, but automatic, as efficient as an iron mesh.", {
	ru:"Автоматическое сито - тоже самое сито но автоматическое, по эффективности как железная сетка."
});

Translation.addTranslation("Engineer's Key", {
	ru:"Ключ инженера"
});
Translation.addTranslation("Iron key - can turn off/on machines from the Factory craft modification. How do I know that the mechanism is enabled? If particles are coming from the mechanism, then it is turned on.", {
	ru:"Железный ключ - может выключать/включать машинны из модификации Factory craft. Как узнать что механизм включен? Если от механизма идут частицы, значит он включен."
});

Translation.addTranslation("Plumber", {
	ru:"Сантехник"
});
Translation.addTranslation("Make a liquid pump, liquid loader, liquid pipes. Liquid pump - draws liquids from nearby blocks. Liquid loader - transfers liquids to nearby blocks. Liquid pipes - transfer liquids between the pump and the loader. To transfer the liquid to the loader and the pump, energy is needed.", {
	ru:"Сделайте жидкостную помпу, жидкостный загрузчик, жидкостные трубы. Жидкостная помпа - вытягивает жидкости из рядом стоящих блоков. Жидкостный загрузчик - передаёт жидкости в рядом стоящие блоки. Жидкостные трубы - передают жидкости между помпой и загрузчиком. Для передачи жидкости загрузчику и помпе нужна энергия."
});

Translation.addTranslation("Matter from the air", {
	ru:"Материя из воздуха"
});
Translation.addTranslation("Make an energy capacitor. The capacitor converts the emc energy into objects.", {
	ru:"Сделайте сборщик МК 1. Сборщик собирает энергию которую потом можно переработать в предметы."
});
Translation.addTranslation("Make a collector MK 1. The collector collects energy that can then be processed into items.", {
	ru:"Сделайте Конденсатор энергии. Конденсатор преобразует энергию emc в предметы."
});

Translation.addTranslation("Mario", {
	ru:"Марио"
});
Translation.addTranslation("Make a subject pipe from Utils+.", {
	ru:"Сделайте предметную трубу из Utils+."
});

Translation.addTranslation("Craft all wooden tools", {
	ru:"Скрафтите все деревянные инструменты"
});
Translation.addTranslation("Craft all the wooden tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)", {
	ru:"Скрафтите все деревянные инструменты, вам необходимо скрафтить наконечник.(топор, кирка, мотыга, меч, лопата)"
});

Translation.addTranslation("Craft all stone tools", {
	ru:"Скрафтите все каменные инструменты"
});
Translation.addTranslation("Craft all the stone tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)", {
	ru:"Скрафтите все каменные инструменты, вам необходимо скрафтить наконечник.(топор, кирка, мотыга, меч, лопата)"
});

Translation.addTranslation("Make a furnace", {
	ru:"Сделайте печку"
});



Translation.addTranslation("Energy", {
	ru:"Энергия"
});
Translation.addTranslation("Make a generator.", {
	ru:"Сделайте генератор."
});

Translation.addTranslation("Ritual dance", {
	ru:"Ритуальный танец"
});
Translation.addTranslation("Plant an oak sapling, and get up and sit on the shift until the tree grows.", {
	ru:"Посадите саженец дуба, и вставайте и садитесь на шифт, пока не выростит дерево."
});

Translation.addTranslation("Lava flow", {
	ru:"Лавовый поток"
});
Translation.addTranslation("Make a Geothermal generator.", {
	ru:"Сделайте Геотермальный генератор."
});
Translation.addTranslation("Extractor", {
	ru:"Экстрактор"
});
Translation.addTranslation("With the help of the extract, more rubber can be extracted. You can also make Nicolite from redstone.", {
	ru:"С помощью экстракта можно добывать больше резины. Также из редстоуна можно сделать Николит."
});




// file: items.js

IDRegistry.genItemID("quest_book"); 
Item.createItem("quest_book", "The Quest Book", {name: "sb_quest_book", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.quest_book, "sb_quest_book", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
Translation.addTranslation("The Quest Book", {
	ru:"Книга квестов"
});

Recipes.addShaped({id: ItemID.quest_book, count: 1, data: 0}, [
	"a"
],[
	"a", 5, 0
]);

IDRegistry.genItemID("skyblock_icon"); 
Item.createItem("skyblock_icon", "skyblock_icon", {name: "skyblock_icon", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("uncommon_lbag"); 
Item.createItem("uncommon_lbag", "An ordinary pouch", {name: "uncommon_lbag", meta: 0}, {stack: 1});
Translation.addTranslation("An ordinary pouch", {
	ru:"Обычный мешочек"
});

IDRegistry.genItemID("rare_lbag"); 
Item.createItem("rare_lbag", "A small pouch", {name: "rare_lbag", meta: 0}, {stack: 1});
Translation.addTranslation("A small pouch", {
	ru:"Реткий мешочек"
});

IDRegistry.genItemID("legendary_lbag"); 
Item.createItem("legendary_lbag", "The Legendary pouch", {name: "legendary_lbag", meta: 0}, {stack: 1});
Translation.addTranslation("The Legendary pouch", {
	ru:"Легендарный мешочек"
});

IDRegistry.genItemID("avaritia_lbag"); 
Item.createItem("avaritia_lbag", "Infinity Bag", {name: "avaritia_lbag", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.avaritia_lbag, "avaritia_lbag", 5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
Translation.addTranslation("Infinity Bag", {
	ru:"Мешок бесконечности"
});

function Bag(id, lootmin, lootmax){
    this.items = [];
    this.addItem = function(chance, id, count, data, extra){
        count = count || {};
        count.min = count.min || 1;
        count.max = count.max || 1;
        data = data || 0
        extra = extra || null;
        if(id)
        	this.items.push({chance: chance, id: id, data: data, max: count.max, min: count.min, extra: extra});
    }
    this.getItemsRandom = function(){
    	let arr = [];
    	let a = Math.floor(Math.random() * (lootmax - lootmin)) + lootmin;
    	while(a >= 1)
    		for(let i in this.items)
    			if(Math.random() <= _this.items[i].chance){
    				arr.push({
    					id: this.items[i].id,
    					data: this.items[i].data,
    					extra: this.items[i].extra,
    					count: Math.floor(Math.random() * (this.items[i].max - this.items[i].min)) + this.items[i].min
    				});
    				a--;
					}
			return arr;
		}
    let _this = this;
    Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
        if(item.id == id){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
            let arr = _this.getItemsRandom();
            let region = BlockSource.getDefaultForActor(player);    
            for(let i in arr)
            	region.spawnDroppedItem(coords.x, coords.y+1, coords.z, arr[i].id, arr[i].count, arr[i].data, arr[i].extra);
        }
    });
}

let UncommonBag = new Bag(ItemID.uncommon_lbag, 1, 1);

UncommonBag.addItem(.1, VanillaItemID.bone_meal, {min: 4, max: 6});
UncommonBag.addItem(.05, VanillaItemID.bread, {min: 2, max: 4});
UncommonBag.addItem(.06, VanillaItemID.apple, {min: 2, max: 5});
UncommonBag.addItem(.1, 3, {min: 1, max: 4});
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 0);
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 1);
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 2);
UncommonBag.addItem(.15, 17, {min: 2, max: 4}, 3);
UncommonBag.addItem(.5, 263, {min: 2, max: 4}, 0);
UncommonBag.addItem(.1, 265, {min: 2, max: 4}, 0);

let RareBag = new Bag(ItemID.rare_lbag, 2, 3);

RareBag.addItem(.1, VanillaItemID.bone_meal, {min: 10, max: 16});
RareBag.addItem(.07, VanillaItemID.bread, {min: 3, max: 8});
RareBag.addItem(.08, VanillaItemID.apple, {min: 3, max: 10});
RareBag.addItem(.13, VanillaBlockID.cobblestone, {min: 1, max: 4});
RareBag.addItem(.1, 265, {min: 1, max: 4});
RareBag.addItem(.1, 263, {min: 1, max: 5});
RareBag.addItem(.01, 264, {min: 1, max: 3});
RareBag.addItem(.5, VanillaItemID.bone, {min: 2, max: 6});
RareBag.addItem(.2, 3, {min: 2, max: 5});
RareBag.addItem(.1, 2, {min: 1, max: 2});

let LegendaryBag = new Bag(ItemID.legendary_lbag, 3, 6);
LegendaryBag.addItem(.07, VanillaItemID.bread, {min: 5, max: 10});
LegendaryBag.addItem(.08, VanillaItemID.apple, {min: 8, max: 15});
LegendaryBag.addItem(.08, VanillaBlockID.cobblestone, {min: 10, max: 20});
LegendaryBag.addItem(.05, 3, {min: 30, max: 40});
LegendaryBag.addItem(.1, 2, {min: 20, max: 25});
LegendaryBag.addItem(.2, 265, {min: 5, max: 10});
LegendaryBag.addItem(.2, 263, {min: 1, max: 5});
LegendaryBag.addItem(.2, 264, {min: 1, max: 2});

let AvaritiaBag = new Bag(ItemID.avaritia_lbag, 2, 3);
AvaritiaBag.addItem(.15/2, 265, {min: 32, max: 64});
AvaritiaBag.addItem(.15/2, 263, {min: 16, max: 128});
AvaritiaBag.addItem(.2/2, 264, {min: 1, max: 16});

Callback.addCallback("ModsLoaded", function(){
	AvaritiaBag.addItem(.1/2, ItemID.fuelActral, {min: 16, max: 32});
	AvaritiaBag.addItem(.25/2, ItemID.factory_update_2, {min: 1, max: 1});
	AvaritiaBag.addItem(.15/2, BlockID.energyCollector3, {min: 1, max: 3});
	AvaritiaBag.addItem(.25/2, BlockID.diamondChest, {min: 1, max: 3});
	AvaritiaBag.addItem(.1/2, ItemID.storageLapotronCrystal, {min: 1, max: 1});
	AvaritiaBag.addItem(.1/2, ItemID.ingotCopper, {min: 32, max: 64});
	AvaritiaBag.addItem(.1/2, ItemID.ingotTin, {min: 32, max: 64});
	AvaritiaBag.addItem(.1, ItemID.ingotSteel, {min: 16, max: 32});
	
	UncommonBag.addItem(.075, ItemID.ex_crookWood, {min: 1, max: 1});
	UncommonBag.addItem(.05, ItemID.ex_crookBone, {min: 1, max: 1});
	UncommonBag.addItem(.075, ItemID.ex_silkWorm, {min: 1, max: 2});
	UncommonBag.addItem(.075, ItemID.upgrade_obsidian, {min: 1, max: 1});
	UncommonBag.addItem(.05, ItemID.ex_porcelain, {min: 1, max: 8});
	UncommonBag.addItem(.025, ItemID.ex_bucketPorcelainRaw, {min: 1, max: 1});
	
	
	RareBag.addItem(.2, ItemID.ingotCopper, {min: 1, max: 5});
	RareBag.addItem(.2, ItemID.ingotTin, {min: 1, max: 5});
	RareBag.addItem(.1, ItemID.ingotSteel, {min: 1, max: 3});
	RareBag.addItem(.1, ItemID.circuitBasic, {min: 1, max: 1});
	RareBag.addItem(.1, ItemID.upgrade_iron, {min: 1, max: 1});
	RareBag.addItem(.1, ItemID.woodIronUpgrade, {min: 1, max: 1});
	
	LegendaryBag.addItem(.2, ItemID.ingotCopper, {min: 4, max: 10});
	LegendaryBag.addItem(.2, ItemID.ingotTin, {min: 4, max: 10});
	LegendaryBag.addItem(.3, ItemID.ingotSteel, {min: 3, max: 8});
	LegendaryBag.addItem(.25, ItemID.factoryBattery, {min: 1, max: 2});
	LegendaryBag.addItem(.3, ItemID.fuelAlchemical, {min: 4, max: 64});
});











// file: quest_book.js

ScrutinyAPI.register("skyblock", {
	frame: "quest_book_frame",
	dscrFrame: "classic_tab_up_light_left",
	closeButtonFrame: "tab_up_close_button",
	default_tab: "gl",
	//default_bitmap: "quest_frame",
	//default_bitmap_click: "quest_completed_frame"
});
Callback.addCallback("ModsLoaded", function(){
ScrutinyAPI.setTab("skyblock", "gl", {
	title: Translation.translate("Skyblock Basics"),
	id: 0,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: ItemID.skyblock_icon,
	auto_size: true 
});

ScrutinyAPI.setScrutiny("skyblock", "gl", "wood", {
	name: Translation.translate("Get a tree"),
	size: 90,
	cellX: 1,//1,
	cellY: 2,//2,
	icon: {
		id: 17
	},
	book_pre: {
		left: [
			{text: Translation.translate("Get a tree"), size: 35},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Get a tree"), size: 35},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "wood", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "crock", {
	lines: ["wood"],
	name: Translation.translate("Infected foliage"),
	size: 90,
	cellX: 3,
	cellY: 1,
	icon: {
		id: ItemID.ex_crookWood
	},
	book_pre: {
		left: [
			{text: Translation.translate("Infected foliage"), size: 35},
			{text: Translation.translate("Get the threads from the infected foliage, it is necessary to break the foliage with a hook. To infect the foliage, get a Silkworm and press it on the foliage (wait until the foliage turns white). The hook is made of 4 sticks, the silkworm falls from the foliage if you break it with a hook."), size: 15},
			{text: "    ", size: 25},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Infected foliage"), size: 35},
			{text: Translation.translate("Get the threads from the infected foliage, it is necessary to break the foliage with a hook. To infect the foliage, get a Silkworm and press it on the foliage (wait until the foliage turns white). The hook is made of 4 sticks, the silkworm falls from the foliage if you break it with a hook."), size: 15},
			{text: "    ", size: 25},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "crock", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "barrel", {
	name: Translation.translate("Barrel"),
	size: 90,
	cellX: 3,
	cellY: 3,
	lines: ["wood"],
	icon: {
		id: BlockID.ex_barrelOak
	},
	book_pre: {
		left: [
			{text: Translation.translate("Barrel"), size: 35},
			{text: Translation.translate("Get a block of land with a barrel. To get the land, fill it with seedlings, the barrel will be filled with water during the rain."), size: 15},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Barrel"), size: 35},
			{text: Translation.translate("Get a block of land with a barrel. To get the land, fill it with seedlings, the barrel will be filled with water during the rain."), size: 15},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "barrel", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "sieve", {
	name: Translation.translate("Get the first resources!"),
	size: 90,
	cellX: 4,
	cellY: 2,
	lines: ["barrel"],
	icon: {
		id: BlockID.ex_sieve
	},
	book_pre: {
		left: [
			{text: Translation.translate("Get the first resources!"), size: 35},
			{text: Translation.translate("Get the stones by sifting the ground, after which you can make a cobblestone of 4 stones."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Get the first resources!"), size: 35},
			{text: Translation.translate("Get the stones by sifting the ground, after which you can make a cobblestone of 4 stones."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "sieve", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "drawers", {
	name: Translation.translate("Colictionner"),
	size: 90,
	cellX: 2,
	cellY: 4,
	lines: ["wood"],
	icon: {
		id: BlockID.oakDrawer
	},
	book_pre: {
		left: [
			{text: Translation.translate("Colictionner"), size: 35},
			{text: Translation.translate("Craft all types of Storage Drawers"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Colictionner"), size: 35},
			{text: Translation.translate("Craft all types of Storage Drawers"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "drawers", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "woods", {
	name: Translation.translate("Break all kinds of trees"),
	size: 90,
	cellX: 3,
	cellY: 4,
	lines: ["wood"],
	icon: {
		id: 17
	},
	book_pre: {
		left: [
			{text: Translation.translate("Break all kinds of trees"), size: 35},
			{text: Translation.translate("Break all kinds of trees(oak, dark oak, acacia, tropic tree, birch, spruce)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Break all kinds of trees"), size: 35},
			{text: Translation.translate("Break all kinds of trees(oak, dark oak, acacia, tropic tree, birch, spruce)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "woods", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "boiler", {
	name: Translation.translate("Cauldron"),
	size: 90,
	cellX: 6,
	cellY: 4,
	lines: ["sieve"],
	icon: {
		id: BlockID.ex_crucibleRaw
	},
	book_pre: {
		left: [
			{text: Translation.translate("Cauldron"), size: 35},
			{text: Translation.translate("Craft a boiler, the boiler is needed for lava extraction, put it over a block that can blow heat, for example, a torch or fire, then put a cobblestone in the boiler."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Cauldron"), size: 35},
			{text: Translation.translate("Craft a boiler, the boiler is needed for lava extraction, put it over a block that can blow heat, for example, a torch or fire, then put a cobblestone in the boiler."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "boiler", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "ironChest", {
	name: Translation.translate("Iron chest"),
	size: 100,
	cellX: 8,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.ironChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Iron chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an iron chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Iron chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an iron chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "ironChest", [ItemID.rare_lbag, ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "silverChest", {
	name: Translation.translate("Silver chest"),
	size: 100,
	cellX: 9,
	cellY: 2,
	lines: ["ironChest"],
	icon: {
		id: BlockID.silverChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Silver chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an silver chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Silver chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an silver chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "silverChest", [ItemID.rare_lbag, ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "goldChest", {
	name: Translation.translate("Gold chest"),
	size: 100,
	cellX: 8,
	cellY: 3,
	lines: ["silverChest"],
	icon: {
		id: BlockID.goldChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Gold chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an gold chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Gold chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an gold chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "goldChest", [ItemID.rare_lbag, ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "diamondChest", {
	name: Translation.translate("Diamond chest"),
	size: 100,
	cellX: 9,
	cellY: 4,
	lines: ["goldChest"],
	icon: {
		id: BlockID.diamondChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Diamond chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an diamond chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Diamond chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an diamond chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "diamondChest", [ItemID.legendary_lbag, ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "crystalChest", {
	name: Translation.translate("Crystal chest"),
	size: 100,
	cellX: 8,
	cellY: 5,
	lines: ["diamondChest"],
	icon: {
		id: BlockID.crystalChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Crystal chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an crystal chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Crystal chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an crystal chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "crystalChest", [ItemID.legendary_lbag, ItemID.rare_lbag]);
















ScrutinyAPI.setTab("skyblock", "auto", {
	title: Translation.translate("Automation"),
	id: 1,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: BlockID.energyAutoHammer||0,
	auto_size: true 
});



ScrutinyAPI.setScrutiny("skyblock", "auto", "fuel_generator", {
	name: Translation.translate("The first energy"),
	size: 90,
	cellX: 1,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.machineEnergyGeneratorFuel
	},
	book_pre: {
		left: [
			{text: Translation.translate("The first energy"), size: 35},
			{text: Translation.translate("Craft a coal generator from the Factory craft mod. For the generator to work, you need fuel, for example coal."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("The first energy"), size: 35},
			{text: Translation.translate("Craft a coal generator from the Factory craft mod. For the generator to work, you need fuel, for example coal."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "fuel_generator", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "machine_block", {
	name: "Механик",
	size: 90,
	cellX: 3,
	cellY: 3,
	lines: [],
	icon: {
		id: BlockID.blockMachineWooden
	},
	book_pre: {
		left: [
			{text: "Механик", size: 35},
			{text: "Скрафтите Деревянный машинный блок, Каменный машинный блок и Железный машинный блок. Для ускорения работы механических блоков нужно положить шестерёнки в слоты улучшения. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Механик", size: 35},
			{text: "Скрафтите Деревянный машинный блок, Каменный машинный блок и Железный машинный блок. Для ускорения работы механических блоков нужно положить шестерёнки в слоты улучшения. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "machine_block", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "sawmill", {
	name: "Бесконечное дерево",
	size: 90,
	cellX: 1,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicSawmill
	},
	book_pre: {
		left: [
			{text: "Бесконечное дерево", size: 35},
			{text: "Скрафтите угольный механическую лесопилку. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Бесконечное дерево", size: 35},
			{text: "Скрафтите угольный механическую лесопилку. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "sawmill", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "food", {
	name: "Бесконечная еда",
	size: 90,
	cellX: 2,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicFarm
	},
	book_pre: {
		left: [
			{text: "Бесконечная еда", size: 35},
			{text: "Скрафтите Механическую ферму, Механическая ферма рыбы. Для работы фермы рыбы трубуются рыбаловные сети, поставьте их вокруг фермы, а ферму над водой.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Бесконечная еда", size: 35},
			{text: "Скрафтите Механическую ферму, Механическая ферма рыбы. Для работы фермы рыбы трубуются рыбаловные сети, поставьте их вокруг фермы, а ферму над водой.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "food", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "pump", {
	name: "Помпы",
	size: 90,
	cellX: 3,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicPumpLava
	},
	book_pre: {
		left: [
			{text: "Помпы", size: 35},
			{text: "Скрафтите Лавовую помпу и водную помпу. Водная помпа - собират воду под собой. Лавовая помпа - собирает лаву в радиусе. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Помпы", size: 35},
			{text: "Скрафтите Лавовую помпу и водную помпу. Водная помпа - собират воду под собой. Лавовая помпа - собирает лаву в радиусе. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "pump", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "quarry", {
	name: "Просто мусор",
	size: 90,
	cellX: 4,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicQuarry
	},
	book_pre: {
		left: [
			{text: "Просто мусор", size: 35},
			{text: "Скрафтите карьер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Просто мусор", size: 35},
			{text: "Скрафтите карьер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "quarry", [ItemID.legendary_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "tower", {
	name: "РЕЗНЯ",
	size: 90,
	cellX: 5,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicTowerFlame
	},
	book_pre: {
		left: [
			{text: "РЕЗНЯ", size: 35},
			{text: "Скрафтите Механический арбалет, Механический уничтожитель мобов, Механический огнемет.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "РЕЗНЯ", size: 35},
			{text: "Скрафтите Механический арбалет, Механический уничтожитель мобов, Механический огнемет.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "tower", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "auto_hammer", {
	name: "Автоматический молот",
	size: 90,
	cellX: 6,
	cellY: 4,
	lines: ["machine_block"],
	icon: {
		id: BlockID.energyAutoHammer
	},
	book_pre: {
		left: [
			{text: "Автоматический молот", size: 35},
			{text: "Скрафтите Автоматический молот. Автоматический молот может как и обычный молот передрабливать булыжник в гравий, а гравий в песок.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Автоматический молот", size: 35},
			{text: "Скрафтите Автоматический молот. Автоматический молот может как и обычный молот передрабливать булыжник в гравий, а гравий в песок.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "auto_hammer", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "auto_click", {
	name: "Автоматический кликер",
	size: 90,
	cellX: 6,
	cellY: 3,
	lines: ["machine_block"],
	icon: {
		id: BlockID.energyAutoClick
	},
	book_pre: {
		left: [
			{text: "Автоматический кликер", size: 35},
			{text: "Скрафтите Автоматический кликер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Автоматический молот", size: 35},
			{text: "Скрафтите Автоматический кликер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "auto_click", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "liquid_crucible", {
	name: "Плавитель",
	size: 90,
	cellX: 6,
	cellY: 2,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineEnergyLiquidCrucible
	},
	book_pre: {
		left: [
			{text: "Плавитель", size: 35},
			{text: "Скрафтите Плавитель. Плавитель перабатывает камень, булыжник и некоторые другие блоки в лаву.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Плавитель", size: 35},
			{text: "Скрафтите Плавитель. Плавитель перабатывает камень, булыжник и некоторые другие блоки в лаву.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "liquid_crucible", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "auto_sieve", {
	name: Translation.translate("Automatic Sieve"),
	size: 90,
	cellX: 6,
	cellY: 1,
	lines: ["machine_block"],
	icon: {
		id: BlockID.energyAutoSieve
	},
	book_pre: {
		left: [
			{text: Translation.translate("Automatic Sieve"), size: 35},
			{text: Translation.translate("An automatic sieve is the same sieve, but automatic, as efficient as an iron mesh."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Automatic Sieve"), size: 35},
			{text: Translation.translate("An automatic sieve is the same sieve, but automatic, as efficient as an iron mesh."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "auto_sieve", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "iron_key", {
	name: Translation.translate("Engineer's Key"),
	size: 90,
	cellX: 7,
	cellY: 1,
	icon: {
		id: ItemID.factoryWrench
	},
	book_pre: {
		left: [
			{text: Translation.translate("Engineer's Key"), size: 35},
			{text: Translation.translate("Iron key - can turn off/on machines from the Factory craft modification. How do I know that the mechanism is enabled? If particles are coming from the mechanism, then it is turned on."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Engineer's Key"), size: 35},
			{text: Translation.translate("Iron key - can turn off/on machines from the Factory craft modification. How do I know that the mechanism is enabled? If particles are coming from the mechanism, then it is turned on."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "iron_key", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "plumber", {
	name: Translation.translate("Plumber"),
	size: 90,
	cellX: 7,
	cellY: 2,
	icon: {
		id: BlockID.machineEnergyLiquidPump
	},
	book_pre: {
		left: [
			{text: Translation.translate("Plumber"), size: 35},
			{text: Translation.translate("Make a liquid pump, liquid loader, liquid pipes. Liquid pump - draws liquids from nearby blocks. Liquid loader - transfers liquids to nearby blocks. Liquid pipes - transfer liquids between the pump and the loader. To transfer the liquid to the loader and the pump, energy is needed."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Plumber"), size: 35},
			{text: Translation.translate("Make a liquid pump, liquid loader, liquid pipes. Liquid pump - draws liquids from nearby blocks. Liquid loader - transfers liquids to nearby blocks. Liquid pipes - transfer liquids between the pump and the loader. To transfer the liquid to the loader and the pump, energy is needed."), size: 15},
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "plumber", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "energyCollector", {
	name: Translation.translate("Matter from the air"),
	size: 90,
	cellX: 8,
	cellY: 1,
	icon: {
		id: BlockID.energyCollector1
	},
	book_pre: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make a collector MK 1. The collector collects energy that can then be processed into items."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make a collector MK 1. The collector collects energy that can then be processed into items."), size: 15},
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "energyCollector", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "energyCondenser", {
	name: Translation.translate("Matter from the air"),
	size: 90,
	cellX: 8,
	cellY: 3,
	lines: ["energyCollector"],
	icon: {
		id: BlockID.energyCondenser1
	},
	book_pre: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make an energy capacitor. The capacitor converts the emc energy into objects."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag, count: 2}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make an energy capacitor. The capacitor converts the emc energy into objects."), size: 15},
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "energyCondenser", [ItemID.legendary_lbag, ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "pipe", {
	name: Translation.translate("Mario"),
	size: 90,
	cellX: 7,
	cellY: 4,
	icon: {
		id: BlockID.utilsWire
	},
	book_pre: {
		left: [
			{text: Translation.translate("Mario"), size: 35},
			{text: Translation.translate("Make a subject pipe from Utils+."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Mario"), size: 35},
			{text: Translation.translate("Make a subject pipe from Utils+."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "pipe", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "rp_block_breaker", {
	name: Translation.translate("Block breaker"),
	size: 90,
	cellX: 9,
	cellY: 1,
	icon: {
		id: BlockID.rp_block_breaker
	},
	book_pre: {
		left: [
			{text: Translation.translate("Block breaker"), size: 35},
			{text: Translation.translate("When the redstone is applied, it destroys the block."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Block breaker"), size: 35},
			{text: Translation.translate("When the redstone is applied, it destroys the block."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "rp_block_breaker", [ItemID.rare_lbag]);























ScrutinyAPI.setTab("skyblock", "industrial", {
	title: "Industrial craft 2",
	id: 2,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: BlockID.primalGenerator,
	auto_size: true 
});

ScrutinyAPI.setScrutiny("skyblock", "industrial", "primalGenerator", {
	name: Translation.translate("Energy"),
	size: 90,
	cellX: 1,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.primalGenerator
	},
	book_pre: {
		left: [
			{text: Translation.translate("Energy"), size: 35},
			{text: Translation.translate("Make a generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Energy"), size: 35},
			{text: Translation.translate("Make a generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "primalGenerator", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "geothermalGenerator", {
	name: Translation.translate("Lava flow"),
	size: 90,
	cellX: 1,
	cellY: 3,
	lines: ["primalGenerator"],
	icon: {
		id: BlockID.geothermalGenerator
	},
	book_pre: {
		left: [
			{text: Translation.translate("Lava flow"), size: 35},
			{text: Translation.translate("Make a Geothermal generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Lava flow"), size: 35},
			{text: Translation.translate("Make a Geothermal generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "geothermalGenerator", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "extractor", {
	name: Translation.translate("Extractor"),
	size: 90,
	cellX: 2,
	cellY: 3,
	lines: [],
	icon: {
		id: BlockID.extractor
	},
	book_pre: {
		left: [
			{text: Translation.translate("Extractor"), size: 35},
			{text: Translation.translate("With the help of the extract, more rubber can be extracted. You can also make Nicolite from redstone."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Extractor"), size: 35},
			{text: Translation.translate("With the help of the extract, more rubber can be extracted. You can also make Nicolite from redstone."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "extractor", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "furnace", {
	name: Translation.translate("Furnace"),
	size: 90,
	cellX: 3,
	cellY: 3,
	lines: [],
	icon: {
		id: BlockID.electricFurnace
	},
	book_pre: {
		left: [
			{text: Translation.translate("Furnace"), size: 35},
			{text: Translation.translate("Make an electric stove"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Furnace"), size: 35},
			{text: Translation.translate("Make an electric stove"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "furnace", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "reactor", {
	name: Translation.translate("Reactor"),
	size: 90,
	cellX: 1,
	cellY: 4,
	lines: [],
	icon: {
		id: BlockID.nuclearReactor
	},
	book_pre: {
		left: [
			{text: Translation.translate("Reactor"), size: 35},
			{text: Translation.translate("Make a nuclear reactor"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Reactor"), size: 35},
			{text: Translation.translate("Make a nuclear reactor"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "reactor", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "ASP", {
	name: Translation.translate("Improved solar panel"),
	size: 90,
	cellX: 4,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.ASP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Improved solar panel"), size: 35},
			{text: Translation.translate("Craft an improved solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Improved solar panel"), size: 35},
			{text: Translation.translate("Craft an improved solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "ASP", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "HSP", {
	name: Translation.translate("Hybrid solar panel"),
	size: 90,
	cellX: 5,
	cellY: 2,
	lines: ["ASP"],
	icon: {
		id: BlockID.HSP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Hybrid solar panel"), size: 35},
			{text: Translation.translate("Craft an hybrid solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Hybrid solar panel"), size: 35},
			{text: Translation.translate("Craft an hybrid solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "HSP", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "USP", {
	name: Translation.translate("Hybrid solar panel"),
	size: 90,
	cellX: 4,
	cellY: 3,
	lines: ["HSP"],
	icon: {
		id: BlockID.USP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Perfect solar panel"), size: 35},
			{text: Translation.translate("Craft an perfect solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Perfect solar panel"), size: 35},
			{text: Translation.translate("Craft an perfect solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "USP", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "QSP", {
	name: Translation.translate("Quant solar panel"),
	size: 90,
	cellX: 5,
	cellY: 4,
	lines: ["USP"],
	icon: {
		id: BlockID.QSP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Quant solar panel"), size: 35},
			{text: Translation.translate("Craft an quant solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Quant solar panel"), size: 35},
			{text: Translation.translate("Craft an quant solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "QSP", [ItemID.avaritia_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "molecularTransformer", {
	name: Translation.translate("Molecular transformer"),
	size: 90,
	cellX: 6,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.molecularTransformer
	},
	book_pre: {
		left: [
			{text: Translation.translate("Molecular transformer"), size: 35},
			{text: Translation.translate("The malecular converter converts one substance into another."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Molecular transformer"), size: 35},
			{text: Translation.translate("The malecular converter converts one substance into another."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "molecularTransformer", [ItemID.avaritia_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "industrial", "miner", {
	name: Translation.translate("Molecular transformer"),
	size: 90,
	cellX: 7,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.miner
	},
	book_pre: {
		left: [
			{text: Translation.translate("Junk"), size: 35},
			{text: Translation.translate("Make a drilling rig."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Junk"), size: 35},
			{text: Translation.translate("Make a drilling rig."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "miner", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "ironFurnace", {
	name: Translation.translate("Iron furnace"),
	size: 90,
	cellX: 2,
	cellY: 2,
	lines: [],
	icon: {
		id: BlockID.ironFurnace
	},
	book_pre: {
		left: [
			{text: Translation.translate("Iron furnace"), size: 35},
			{text: Translation.translate("Better than a stone! Make an iron stove."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Iron furnace"), size: 35},
			{text: Translation.translate("Better than a stone! Make an iron stove."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "ironFurnace", [ItemID.rare_lbag]);















ScrutinyAPI.setTab("skyblock", "storage", {
	title: "Refined Storage",
	id: 3,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: BlockID.diskDrive,
	auto_size: true 
});


ScrutinyAPI.setScrutiny("skyblock", "storage", "RSmachine_casing", {
	name: Translation.translate("Machine block"),
	size: 90,
	cellX: 1,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.RSmachine_casing
	},
	book_pre: {
		left: [
			{text: Translation.translate("Machine block"), size: 35},
			{text: Translation.translate("This block is used in the Refined Storage mod crafting."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Machine block"), size: 35},
			{text: Translation.translate("This block is used in the Refined Storage mod crafting."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RSmachine_casing", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "RS_controller", {
	name: Translation.translate("Controller"),
	size: 90,
	cellX: 2,
	cellY: 2,
	lines: ["RSmachine_casing"],
	icon: {
		id: BlockID.RS_controller
	},
	book_pre: {
		left: [
			{text: Translation.translate("Controller"), size: 35},
			{text: Translation.translate("The network controller is not bypassed for network operation."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Controller"), size: 35},
			{text: Translation.translate("The network controller is not bypassed for network operation."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RS_controller", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "diskDrive", {
	name: Translation.translate("Disk Drive"),
	size: 90,
	cellX: 1,
	cellY: 3,
	lines: ["RS_controller"],
	icon: {
		id: BlockID.diskDrive
	},
	book_pre: {
		left: [
			{text: Translation.translate("Disk Drive"), size: 35},
			{text: Translation.translate("The drive stores memory disks in which you can already save your items."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Disk Drive"), size: 35},
			{text: Translation.translate("The drive stores memory disks in which you can already save your items."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "diskDrive", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "RS_grid", {
	name: Translation.translate("Grid"),
	size: 90,
	cellX: 4,
	cellY: 2,
	lines: ["RS_controller"],
	icon: {
		id: BlockID.RS_grid
	},
	book_pre: {
		left: [
			{text: Translation.translate("Grid"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Grid"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RS_grid", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "RS_crafting_grid", {
	name: Translation.translate("Grid crafting"),
	size: 90,
	cellX: 5,
	cellY: 2,
	lines: ["RS_grid"],
	icon: {
		id: BlockID.RS_crafting_grid
	},
	book_pre: {
		left: [
			{text: Translation.translate("Grid crafting"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network and can serve as a workbench."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Grid crafting"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network and can serve as a workbench."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RS_crafting_grid", [ItemID.rare_lbag]);













ScrutinyAPI.setScrutiny("skyblock", "gl", "wood_tools", {
	name: Translation.translate("Craft all wooden tools"),
	size: 90,
	cellX: 4,
	cellY: 1,
	lines: ["crock"],
	icon: {
		id: VanillaItemID.wooden_axe
	},
	book_pre: {
		left: [
			{text: Translation.translate("Craft all wooden tools"), size: 35},
			{text: Translation.translate("Craft all the wooden tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Craft all wooden tools"), size: 35},
			{text: Translation.translate("Craft all the wooden tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "wood_tools", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "stone_tools", {
	name: Translation.translate("Craft all stone tools"),
	size: 90,
	cellX: 5,
	cellY: 1,
	lines: ["wood_tools"],
	icon: {
		id: VanillaItemID.stone_axe
	},
	book_pre: {
		left: [
			{text: Translation.translate("Craft all stone tools"), size: 35},
			{text: Translation.translate("Craft all the stone tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Craft all stone tools"), size: 35},
			{text: Translation.translate("Craft all the stone tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "stone_tools", [ItemID.uncommon_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "gl", "furnace", {
	name: Translation.translate("Make a furnace"),
	size: 90,
	cellX: 6,
	cellY: 2,
	lines: ["sieve"],
	icon: {
		id: VanillaBlockID.furnace
	},
	book_pre: {
		left: [
			{text: Translation.translate("Make a furnace"), size: 35},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Make a furnace"), size: 35},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "furnace", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "tree_growing", {
	name: Translation.translate("Ritual dance"),
	size: 90,
	cellX: 1,
	cellY: 5,//5,
	lines: [],
	icon: {
		id: 6
	},
	book_pre: {
		left: [
			{text: Translation.translate("Ritual dance"), size: 35},
			{text: Translation.translate("Plant an oak sapling, and get up and sit on the shift until the tree grows."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Ritual dance"), size: 35},
			{text: Translation.translate("Plant an oak sapling, and get up and sit on the shift until the tree grows."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "tree_growing", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "ingots", {
	name: Translation.translate("The breadwinner!"),
	size: 90,
	cellX: 7,
	cellY: 4,
	lines: ["furnace"],
	icon: {
		id: ItemID.ex_Ironbroken
	},
	book_pre: {
		left: [
			{text: Translation.translate("The breadwinner!"), size: 35},
			{text: Translation.translate("Mine all types of gravel ore or sand or dust. Sift gravel or sand and craft ore from fragments of ore. Sand can be obtained by breaking gravel with a hammer, and gravel can be obtained by breaking a cobblestone with a hammer."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}, {size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("The breadwinner!"), size: 35},
			{text: Translation.translate("Mine all types of gravel ore or sand or dust. Sift gravel or sand and craft ore from fragments of ore. Sand can be obtained by breaking gravel with a hammer, and gravel can be obtained by breaking a cobblestone with a hammer."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}, {size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "ingots", [ItemID.legendary_lbag, ItemID.rare_lbag]);

});











// file: give_scrutiny.js

let requireGlobal = null;
let Drawers = null;

ModAPI.addAPICallback("ENR", function(api){
	requireGlobal = api.requireGlobal;
});

ModAPI.addAPICallback("DrawerAPI", function(api){
	Drawers = api.DrawerAPI.drawers;
});

Callback.addCallback("PostLoaded", function(){
	let gravels = requireGlobal("BlocksTypes.gravel");
	let sands = requireGlobal("BlocksTypes.sand");
	let dusts = requireGlobal("BlocksTypes.dust");
		
	RecipesScrutiny.reg("gl", "ingots", gravels);
	RecipesScrutiny.reg("gl", "ingots", sands);
	RecipesScrutiny.reg("gl", "ingots", dusts);
	
	RecipesScrutiny.reg("gl", "drawers", Drawers||[]);
	
	RecipesScrutiny.reg("gl", "furnace", [VanillaBlockID.furnace]);
	RecipesScrutiny.reg("gl", "wood_tools", [VanillaItemID.wooden_axe, VanillaItemID.wooden_hoe, VanillaItemID.wooden_pickaxe, VanillaItemID.wooden_shovel, VanillaItemID.wooden_sword]);
	RecipesScrutiny.reg("gl", "stone_tools", [VanillaItemID.stone_axe, VanillaItemID.stone_hoe, VanillaItemID.stone_pickaxe, VanillaItemID.stone_shovel, VanillaItemID.stone_sword]);
	RecipesScrutiny.reg("gl", "boiler", [BlockID.ex_crucibleRaw]);
	let chests = ["ironChest", "silverChest", "goldChest", "diamondChest", "crystalChest"];
	for(let i in chests)
		RecipesScrutiny.reg("gl", chests[i], [BlockID[chests[i]]]);
	
	RecipesScrutiny.reg("auto", "fuel_generator", [BlockID.machineEnergyGeneratorFuel]);
	RecipesScrutiny.reg("auto", "sawmill", [BlockID.machineMechanicSawmill]);
	RecipesScrutiny.reg("auto", "pump", [BlockID.machineMechanicPumpWater, BlockID.machineMechanicPumpLava]);
	RecipesScrutiny.reg("auto", "auto_click", [BlockID.energyAutoClick]);
	RecipesScrutiny.reg("auto", "auto_hammer", [BlockID.energyAutoHammer]);
	RecipesScrutiny.reg("auto", "iron_key", [ItemID.factoryWrench]);
	RecipesScrutiny.reg("auto", "liquid_crucible", [BlockID.machineEnergyLiquidCrucible]);
	RecipesScrutiny.reg("auto", "energyCollector", [BlockID.energyCollector1]);
	RecipesScrutiny.reg("auto", "machine_block", [BlockID.blockMachineWooden, BlockID.blockMachineStone, BlockID.blockMachineIron]);
	RecipesScrutiny.reg("auto", "tower", [BlockID.machineMechanicTowerSword, BlockID.machineMechanicTowerCrossbow, BlockID.machineMechanicTowerFlame]);
	RecipesScrutiny.reg("auto", "quarry", [BlockID.machineMechanicQuarry]);
	RecipesScrutiny.reg("auto", "auto_sieve", [BlockID.energyAutoSieve]);
	RecipesScrutiny.reg("auto", "energyCondenser", [BlockID.energyCondenser1]);
	RecipesScrutiny.reg("auto", "pipe", [BlockID.utilsWire]);
	RecipesScrutiny.reg("auto", "plumber", [BlockID.machineEnergyLiquidLoader, BlockID.liquid_pipe, BlockID.machineEnergyLiquidPump]);
	RecipesScrutiny.reg("auto", "rp_block_breaker", [BlockID.rp_block_breaker]);
	
	RecipesScrutiny.reg("industrial", "primalGenerator", [BlockID.primalGenerator]);
	RecipesScrutiny.reg("industrial", "geothermalGenerator", [BlockID.geothermalGenerator]);
	RecipesScrutiny.reg("industrial", "extractor", [BlockID.extractor]);
	RecipesScrutiny.reg("industrial", "reactor", [BlockID.nuclearReactor]);
	RecipesScrutiny.reg("industrial", "ASP", [BlockID.ASP]);
	RecipesScrutiny.reg("industrial", "HSP", [BlockID.HSP]);
	RecipesScrutiny.reg("industrial", "QSP", [BlockID.QSP]);
	RecipesScrutiny.reg("industrial", "molecularTransformer", [BlockID.molecularTransformer]);
	RecipesScrutiny.reg("industrial", "miner", [BlockID.miner]);
	RecipesScrutiny.reg("industrial", "ironFurnace", [BlockID.ironFurnace]);
	
	RecipesScrutiny.reg("storage", "diskDrive", [BlockID.diskDrive]);
	RecipesScrutiny.reg("storage", "RSmachine_casing", [BlockID.RSmachine_casing]);
	RecipesScrutiny.reg("storage", "RS_controller", [BlockID.RS_controller]);
	RecipesScrutiny.reg("storage", "RS_grid", [BlockID.RS_grid]);
	RecipesScrutiny.reg("storage", "RS_crafting_grid", [BlockID.RS_crafting_grid]);
	
	DestroyBlocks.reg("gl", "woods", ["17:0", "17:1", "17:2", "17:3", "162:0", "162:1"]);
	DestroyBlocks.reg("gl", "wood", ["17:0"]);
});

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
	if(item.id == ItemID.quest_book)
		ScrutinyAPI.openServer(player, "skyblock");
});




// file: tree.js

//create Reider ___ size - 16
let model = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();

	//group - pot
	model.addBoxByBlock("cube", 0.3125, 0, 0.3125, 0.6875, 0.0625, 0.6875, 172, 0);
	model.addBoxByBlock("cube_2", 0.25, 0.0625, 0.3125, 0.3125, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("cube_3", 0.6875, 0.0625, 0.3125, 0.75, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("cube_4", 0.3125, 0.0625, 0.25, 0.6875, 0.1875, 0.3125, 172, 0);
	model.addBoxByBlock("cube_5", 0.3125, 0.0625, 0.6875, 0.6875, 0.1875, 0.75, 172, 0);
	model.addBoxByBlock("dirt", 0.3125, 0.0625, 0.3125, 0.6875, 0.125, 0.6875, 2, 0);


	//group - tree
	model.addBoxByBlock("trunk", 0.4375, 0.125, 0.4375, 0.5625, 0.875, 0.5625, 17, 1);

	//group - leaves
	model.addBoxByBlock("cube_6", 0.3125, 0.3125, 0.3125, 0.6875, 0.375, 0.6875, obj["cube_6"] ? obj["cube_6"].texture : texture, obj["cube_6"] ? obj["cube_6"].data : data);
	model.addBoxByBlock("cube_7", 0.375, 0.4375, 0.375, 0.625, 0.5, 0.625, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
	model.addBoxByBlock("cube_8", 0.4375, 0.6875, 0.375, 0.5625, 0.875, 0.4375, obj["cube_8"] ? obj["cube_8"].texture : texture, obj["cube_8"] ? obj["cube_8"].data : data);
	model.addBoxByBlock("cube_9", 0.4375, 0.6875, 0.5625, 0.5625, 0.875, 0.625, obj["cube_9"] ? obj["cube_9"].texture : texture, obj["cube_9"] ? obj["cube_9"].data : data);

	//group - layer3
	model.addBoxByBlock("cube_10", 0.3125, 0.5, 0.3125, 0.6875, 0.5625, 0.6875, obj["cube_10"] ? obj["cube_10"].texture : texture, obj["cube_10"] ? obj["cube_10"].data : data);
	model.addBoxByBlock("cube_11", 0.375, 0.5, 0.6875, 0.625, 0.5625, 0.75, obj["cube_11"] ? obj["cube_11"].texture : texture, obj["cube_11"] ? obj["cube_11"].data : data);
	model.addBoxByBlock("cube_12", 0.6875, 0.5, 0.375, 0.75, 0.5625, 0.625, obj["cube_12"] ? obj["cube_12"].texture : texture, obj["cube_12"] ? obj["cube_12"].data : data);
	model.addBoxByBlock("cube_13", 0.25, 0.5, 0.375, 0.3125, 0.5625, 0.625, obj["cube_13"] ? obj["cube_13"].texture : texture, obj["cube_13"] ? obj["cube_13"].data : data);
	model.addBoxByBlock("cube_14", 0.375, 0.5, 0.25, 0.625, 0.5625, 0.3125, obj["cube_14"] ? obj["cube_14"].texture : texture, obj["cube_14"] ? obj["cube_14"].data : data);

	//group - layer3
	model.addBoxByBlock("cube_15", 0.375, 0.625, 0.375, 0.625, 0.6875, 0.625, obj["cube_15"] ? obj["cube_15"].texture : texture, obj["cube_15"] ? obj["cube_15"].data : data);
	model.addBoxByBlock("cube_16", 0.4375, 0.625, 0.625, 0.5625, 0.6875, 0.6875, obj["cube_16"] ? obj["cube_16"].texture : texture, obj["cube_16"] ? obj["cube_16"].data : data);
	model.addBoxByBlock("cube_17", 0.625, 0.625, 0.4375, 0.6875, 0.6875, 0.5625, obj["cube_17"] ? obj["cube_17"].texture : texture, obj["cube_17"] ? obj["cube_17"].data : data);
	model.addBoxByBlock("cube_18", 0.3125, 0.625, 0.4375, 0.375, 0.6875, 0.5625, obj["cube_18"] ? obj["cube_18"].texture : texture, obj["cube_18"] ? obj["cube_18"].data : data);
	model.addBoxByBlock("cube_19", 0.4375, 0.625, 0.3125, 0.5625, 0.6875, 0.375, obj["cube_19"] ? obj["cube_19"].texture : texture, obj["cube_19"] ? obj["cube_19"].data : data);



	//group - layer2
	model.addBoxByBlock("cube_20", 0.25, 0.375, 0.25, 0.75, 0.4375, 0.75, obj["cube_20"] ? obj["cube_20"].texture : texture, obj["cube_20"] ? obj["cube_20"].data : data);
	model.addBoxByBlock("cube_21", 0.3125, 0.375, 0.75, 0.6875, 0.4375, 0.8125, obj["cube_21"] ? obj["cube_21"].texture : texture, obj["cube_21"] ? obj["cube_21"].data : data);
	model.addBoxByBlock("cube_22", 0.75, 0.375, 0.3125, 0.8125, 0.4375, 0.6875, obj["cube_22"] ? obj["cube_22"].texture : texture, obj["cube_22"] ? obj["cube_22"].data : data);
	model.addBoxByBlock("cube_23", 0.1875, 0.375, 0.3125, 0.25, 0.4375, 0.6875, obj["cube_23"] ? obj["cube_23"].texture : texture, obj["cube_23"] ? obj["cube_23"].data : data);
	model.addBoxByBlock("cube_24", 0.3125, 0.375, 0.1875, 0.6875, 0.4375, 0.25, obj["cube_24"] ? obj["cube_24"].texture : texture, obj["cube_24"] ? obj["cube_24"].data : data);


	//group - layer1
	model.addBoxByBlock("cube_25", 0.1875, 0.25, 0.1875, 0.8125, 0.3125, 0.8125, obj["cube_25"] ? obj["cube_25"].texture : texture, obj["cube_25"] ? obj["cube_25"].data : data);
	model.addBoxByBlock("cube_26", 0.25, 0.25, 0.8125, 0.75, 0.3125, 0.875, obj["cube_26"] ? obj["cube_26"].texture : texture, obj["cube_26"] ? obj["cube_26"].data : data);
	model.addBoxByBlock("cube_27", 0.8125, 0.25, 0.25, 0.875, 0.3125, 0.75, obj["cube_27"] ? obj["cube_27"].texture : texture, obj["cube_27"] ? obj["cube_27"].data : data);
	model.addBoxByBlock("cube_28", 0.125, 0.25, 0.25, 0.1875, 0.3125, 0.75, obj["cube_28"] ? obj["cube_28"].texture : texture, obj["cube_28"] ? obj["cube_28"].data : data);
	model.addBoxByBlock("cube_29", 0.3125, 0.25, 0.125, 0.6875, 0.3125, 0.1875, obj["cube_29"] ? obj["cube_29"].texture : texture, obj["cube_29"] ? obj["cube_29"].data : data);

	model.addBoxByBlock("cube_30", 0.375, 0.6875, 0.4375, 0.4375, 0.875, 0.5625, obj["cube_30"] ? obj["cube_30"].texture : texture, obj["cube_30"] ? obj["cube_30"].data : data);
	model.addBoxByBlock("cube_31", 0.5625, 0.6875, 0.4375, 0.625, 0.875, 0.5625, obj["cube_31"] ? obj["cube_31"].texture : texture, obj["cube_31"] ? obj["cube_31"].data : data);
	model.addBoxByBlock("cube_32", 0.4375, 0.875, 0.4375, 0.5625, 1, 0.5625, obj["cube_32"] ? obj["cube_32"].texture : texture, obj["cube_32"] ? obj["cube_32"].data : data);
	
	
	
	
	
	
	

	//group - pot
	model.addBoxByBlock("cube", 0.3125, 0, 0.3125, 0.6875, 0.0625, 0.6875, 172, 0);
	model.addBoxByBlock("cube_2", 0.3125, 0.0625, 0.25, 0.6875, 0.1875, 0.3125, 172, 0);
	model.addBoxByBlock("cube_3", 0.3125, 0.0625, 0.6875, 0.6875, 0.1875, 0.75, 172, 0);
	model.addBoxByBlock("cube_4", 0.25, 0.0625, 0.3125, 0.3125, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("cube_5", 0.6875, 0.0625, 0.3125, 0.75, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("dirt", 0.3125, 0.0625, 0.3125, 0.6875, 0.125, 0.6875, 2, 0);


	//group - wood
	model.addBoxByBlock("cube_6", 0.4375, 0.125, 0.4375, 0.5625, 0.875, 0.5625, 17, 1);

	model.addBoxByBlock("cube_7", 0.4375, 0.875, 0.4375, 0.5625, 1, 0.5625, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
	model.addBoxByBlock("cube_8", 0.375, 0.6875, 0.4375, 0.625, 0.875, 0.5625, obj["cube_8"] ? obj["cube_8"].texture : texture, obj["cube_8"] ? obj["cube_8"].data : data);
	model.addBoxByBlock("cube_9", 0.4375, 0.6875, 0.375, 0.5625, 0.875, 0.625, obj["cube_9"] ? obj["cube_9"].texture : texture, obj["cube_9"] ? obj["cube_9"].data : data);
	model.addBoxByBlock("cube_10", 0.375, 0.625, 0.375, 0.625, 0.6875, 0.625, obj["cube_10"] ? obj["cube_10"].texture : texture, obj["cube_10"] ? obj["cube_10"].data : data);
	model.addBoxByBlock("cube_11", 0.4375, 0.625, 0.3125, 0.5625, 0.6875, 0.6875, obj["cube_11"] ? obj["cube_11"].texture : texture, obj["cube_11"] ? obj["cube_11"].data : data);
	model.addBoxByBlock("cube_12", 0.3125, 0.625, 0.4375, 0.6875, 0.6875, 0.5625, obj["cube_12"] ? obj["cube_12"].texture : texture, obj["cube_12"] ? obj["cube_12"].data : data);

	model.addBoxByBlock("cube_13", 0.25, 0.375, 0.25, 0.75, 0.4375, 0.75, obj["cube_13"] ? obj["cube_13"].texture : texture, obj["cube_13"] ? obj["cube_13"].data : data);
	model.addBoxByBlock("cube_14", 0.3125, 0.375, 0.1875, 0.6875, 0.4375, 0.25, obj["cube_14"] ? obj["cube_14"].texture : texture, obj["cube_14"] ? obj["cube_14"].data : data);
	model.addBoxByBlock("cube_15", 0.3125, 0.375, 0.75, 0.6875, 0.4375, 0.8125, obj["cube_15"] ? obj["cube_15"].texture : texture, obj["cube_15"] ? obj["cube_15"].data : data);
	model.addBoxByBlock("cube_16", 0.1875, 0.375, 0.3125, 0.25, 0.4375, 0.6875, obj["cube_16"] ? obj["cube_16"].texture : texture, obj["cube_16"] ? obj["cube_16"].data : data);
	model.addBoxByBlock("cube_17", 0.75, 0.375, 0.3125, 0.8125, 0.4375, 0.6875, obj["cube_17"] ? obj["cube_17"].texture : texture, obj["cube_17"] ? obj["cube_17"].data : data);
	model.addBoxByBlock("cube_18", 0.3125, 0.3125, 0.3125, 0.6875, 0.375, 0.6875, obj["cube_18"] ? obj["cube_18"].texture : texture, obj["cube_18"] ? obj["cube_18"].data : data);

	model.addBoxByBlock("cube_19", 0.1875, 0.25, 0.1875, 0.8125, 0.3125, 0.8125, obj["cube_19"] ? obj["cube_19"].texture : texture, obj["cube_19"] ? obj["cube_19"].data : data);
	model.addBoxByBlock("cube_20", 0.25, 0.25, 0.125, 0.75, 0.3125, 0.1875, obj["cube_20"] ? obj["cube_20"].texture : texture, obj["cube_20"] ? obj["cube_20"].data : data);
	model.addBoxByBlock("cube_21", 0.25, 0.25, 0.8125, 0.75, 0.3125, 0.875, obj["cube_21"] ? obj["cube_21"].texture : texture, obj["cube_21"] ? obj["cube_21"].data : data);
	model.addBoxByBlock("cube_22", 0.125, 0.25, 0.25, 0.1875, 0.3125, 0.75, obj["cube_22"] ? obj["cube_22"].texture : texture, obj["cube_22"] ? obj["cube_22"].data : data);
	model.addBoxByBlock("cube_23", 0.8125, 0.25, 0.25, 0.875, 0.3125, 0.75, obj["cube_23"] ? obj["cube_23"].texture : texture, obj["cube_23"] ? obj["cube_23"].data : data);

	model.addBoxByBlock("cube_24", 0.3125, 0.5, 0.3125, 0.6875, 0.5625, 0.6875, obj["cube_24"] ? obj["cube_24"].texture : texture, obj["cube_24"] ? obj["cube_24"].data : data);
	model.addBoxByBlock("cube_25", 0.375, 0.5, 0.25, 0.625, 0.5625, 0.3125, obj["cube_25"] ? obj["cube_25"].texture : texture, obj["cube_25"] ? obj["cube_25"].data : data);
	model.addBoxByBlock("cube_26", 0.375, 0.5, 0.6875, 0.625, 0.5625, 0.75, obj["cube_26"] ? obj["cube_26"].texture : texture, obj["cube_26"] ? obj["cube_26"].data : data);
	model.addBoxByBlock("cube_27", 0.25, 0.5, 0.375, 0.3125, 0.5625, 0.625, obj["cube_27"] ? obj["cube_27"].texture : texture, obj["cube_27"] ? obj["cube_27"].data : data);
	model.addBoxByBlock("cube_28", 0.6875, 0.5, 0.375, 0.75, 0.5625, 0.625, obj["cube_28"] ? obj["cube_28"].texture : texture, obj["cube_28"] ? obj["cube_28"].data : data);
	model.addBoxByBlock("cube_29", 0.375, 0.4375, 0.375, 0.625, 0.5, 0.625, obj["cube_29"] ? obj["cube_29"].texture : texture, obj["cube_29"] ? obj["cube_29"].data : data);


	//red
	model.addBoxByBlock("cube_30", 0.375, 0.3125, 0.1875, 0.4375, 0.375, 0.25, 35, 14);
	model.addBoxByBlock("cube_31", 0.375, 0.875, 0.4375, 0.4375, 0.9375, 0.5, 35, 14);
	model.addBoxByBlock("cube_32", 0.625, 0.4375, 0.3125, 0.6875, 0.5, 0.375, 35, 14);
	model.addBoxByBlock("cube_33", 0.625, 0.3125, 0.75, 0.6875, 0.375, 0.8125, 35, 14);
	model.addBoxByBlock("cube_34", 0.5, 0.1875, 0.75, 0.5625, 0.25, 0.8125, 35, 14);
	model.addBoxByBlock("cube_35", 0.1875, 0.3125, 0.5625, 0.25, 0.375, 0.625, 35, 14);
	model.addBoxByBlock("cube_36", 0.3125, 0.5625, 0.5625, 0.375, 0.625, 0.625, 35, 14);


	//blue
	model.addBoxByBlock("cube_37", 0.375, 0.1875, 0.25, 0.4375, 0.25, 0.3125, 35, 11);
	model.addBoxByBlock("cube_38", 0.6875, 0.4375, 0.5625, 0.75, 0.5, 0.625, 35, 11);
	model.addBoxByBlock("cube_39", 0.5625, 0.8125, 0.5625, 0.625, 0.875, 0.625, 35, 11);
	model.addBoxByBlock("cube_40", 0.25, 0.3125, 0.75, 0.3125, 0.375, 0.8125, 35, 11);
	model.addBoxByBlock("cube_41", 0.6875, 0.3125, 0.5625, 0.75, 0.375, 0.625, 35, 11);


	model.addBoxByBlock("cube_42", 0.25, 0.4375, 0.3125, 0.3125, 0.5, 0.375, 35, 10);
	model.addBoxByBlock("cube_43", 0.5, 0.9375, 0.375, 0.5625, 1, 0.4375, 35, 10);
	model.addBoxByBlock("cube_44", 0.6875, 0.1875, 0.375, 0.75, 0.25, 0.4375, 35, 10);
	return model;
})(null, 18, 1);//boxes - 34




// file: holidays.js

Block.createSpecialType({
    base: 17,
    solid: true,
    destroytime: 2,
    explosionres: 10,
    lightopacity: 0,
    renderlayer: 0,
    translucency: 0,
    sound: "wood"
}, "wood");
Translation.addTranslation("Christmas tree", {
	ru: "Новогодняя ёлка",
})
IDRegistry.genBlockID("ChristmasTree");
Block.createBlockWithRotation("ChristmasTree", [{name:"Christmas tree", texture: [["log_spruce", 0]], inCreative: true}
],"wood");

model.setBlockModel(BlockID.ChristmasTree, 0);
Translation.addTranslation("skyblock.holiday", {
	ru: "Праздники",
	en: "Holidays"
})
ScrutinyAPI.setTab("skyblock", "holiday", {
	title: Translation.translate("skyblock.holiday"),
	id: 6,
	frame: "classic_tab_right_light_up",
	frame2: "classic_tab_right_dark_up",
	icon: BlockID.ChristmasTree,
 auto_size: true
});

ScrutinyAPI.setScrutiny("skyblock", "holiday", "new_year", {
	name: "С новым годом!",
	size: 90,
	cellX: 1,
	cellY: 1,
	icon: {
		id: BlockID.ChristmasTree
	},
	book_pre: {
		left: [
			{text: "Новогодние праздники", size: 35},
			{text: "Войдите в игру в новогодние праздники. Нажмите на ёлку чтобы забрать ежедневнный Новогодний подарок.", size: 15},
			{text: "награда:", size: 25},
			{type: "slot", slots: [{size: 90, item:{id: BlockID.ChristmasTree}}]}
		]
	},
	book_post: {
		left: [
			{text: "Новогодние праздники", size: 35},
			{text: "Войдите в игру в новогодние праздники. Нажмите на ёлку чтобы забрать ежедневнный Новогодний подарок.", size: 15},
			{text: "награда:", size: 25},
			{type: "slot", slots: [{size: 90, item:{id: BlockID.ChristmasTree}}]}
		],
		right: [
			{text: "выполнено", size: 25}
		]
	}
});
addLoot("skyblock", "holiday", "new_year", [BlockID.ChristmasTree]);

let day_now = -1;
let day = {};
Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
	let date = new Date();
	if(block.id == BlockID.ChristmasTree && day_now != day[player] && (date.getMonth()==0 && date.getDate()>=1 && date.getDate() <= 10)){
		let arr = RareBag.getItemsRandom();
		let region = BlockSource.getDefaultForActor(player); 
		for(let i in arr)
			region.spawnDroppedItem(coords.x, coords.y+1, coords.z, arr[i].id, arr[i].count, arr[i].data, arr[i].extra);
		day[player] = day_now;
	}
});
Callback.addCallback("ServerPlayerTick", function(player){
	if(World.getThreadTime() % 500 == 0){
		let date = new Date();
		if(date.getMonth()==0 && date.getDate()>=1 && date.getDate() <= 10)
			ScrutinyAPI_V1.giveScrutiny(player, "skyblock", "holiday", "new_year", true);
		day_now = date.getDate();
	}
});




// file: recipes.js

let ICore
ModAPI.addAPICallback("ICore", function(api){
	TileEntity.getPrototype(BlockID.thermalCentrifuge).getRecipeResult = function(id){
		let recipe = JSON.parse(JSON.stringify(api.Recipe.getRecipeResult("thermalCentrifuge", id)));
		if(recipe)
			for(let i = 0;i < recipe.result.length / 2;i++){
				let v = recipe.result[i * 2 + 1];
				if(typeof v != "number")
					if(Math.random() <= v[1])
						recipe.result[i * 2 + 1] = v[0];
					else
						recipe.result[i * 2 + 1] = 0;
			}
		return recipe;
	};
	
	let putResult = TileEntity.getPrototype(BlockID.thermalCentrifuge).putResult;
	TileEntity.getPrototype(BlockID.thermalCentrifuge).putResult = function(){
		putResult.apply(this, arguments);
		this.container.validateAll();
	}
	
	ICore=api;
Callback.addCallback("PreEmcLoad", function(){
	Recipes.removeWorkbenchRecipe(ItemID.philosophersStone, 1, 0);
	Recipes.removeWorkbenchRecipe(BlockID.energyCondenser1, 1, 0);
	Recipes.addShaped({id: BlockID.energyCondenser1, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', ItemID.iridiumChunk, 0,
	'b', ItemID.philosophersStone, 0
]);
	api.Recipe.addRecipeFor("molecularTransformer", ItemID.storageLapotronCrystal, {
		id: ItemID.philosophersStone,
		count: 1,
		data: 0,
		energy: 50e6
	});
});
});
Callback.addCallback("PostEmcLoad", function(api){
	api.Core.setItemEmc(1, 0, 1);
 api.Core.deleteItemEmc(ItemID.philosophersStone, 0);
});
Callback.addCallback("ModsLoaded", function(){
	if(ICore){
	
	ICore.Recipe.addRecipeFor("thermalCentrifuge", BlockID.oreUranium, {
		result: [BlockID.oreBoron, [1, .4], BlockID.oreThorium, [1, .3], BlockID.oreLihium, [1, .3]],
		heat: 500
	});
	
	ICore.Recipe.addRecipeFor("thermalCentrifuge", VanillaBlockID.iron_ore, {
		result: [BlockID.oreLithium, 1, BlockID.oreMagnesium, [1, .8]],
		heat: 500
	});
	
	ICore.Recipe.addRecipeFor("extractor", VanillaItemID.redstone, {
		id: ItemID.nikolite,
		data: 0,
		count: 1
	});
	ICore.Recipe.addRecipeFor("molecularTransformer", ItemID.ingotLead, {
		id: BlockID.oreUranium,
		count: 1,
		data: 0,
		energy: 1000
	});
	}
});
let AvaritiaAPI;
ModAPI.addAPICallback("AvaritiaAPI", function(api){
AvaritiaAPI = api;
});
/*Callback.addCallback("PostLoaded", function(){
AvaritiaAPI.addExtremeShapedRecipe("test", {id: VanillaBlockID.end_portal_frame, count: 1, data: 0}, [
"iiddiddii",
"idsssssdi",
"dsssssssd",
"dsssnsssd",
"issnnnssi",
"dsssnsssd",
"dsssssssd",
"idsssssdi",
"iiddiddii",
], ["i", ItemID.infinity_ingot, 0, "n", ItemID.neutronium_ingot, 0, "s", VanillaBlockID.sand, 0, "d", BlockID.dmBlock, 0]);
});*/




