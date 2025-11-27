IDRegistry.genItemID("basic_guide_book"); 
Item.createItem("basic_guide_book", "basic_guide_book", {name: "basic_guide_book", meta: 0}, {stack: 1});
		
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("basic_guide_book", { 
item: ItemID.basic_guide_book, 
debug: false, 
textures: { 
background: "guide_background_basic", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "LostMagic", size: 30},
						{text: "Здравствуй друг! Я буду твоим путеводителем по моду LostMagic. LostMagic - мод который добавить в игру затерянные магий. В этом моде вы сможете стать волшебником, и открывать многие секреты как и обычного до другого измерения. Но для начало ты должен изучить ее.", size: 20},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Основы", size: 26, link: "basics"},
						{text: "Блоки", size: 26, link: "blocks"},
						{text: "Броня", size: 26, link: "armor"},
						{text: "Оружие  и инструменты", size: 26, link: "weapons_and_instruments"},
						{text: "Начальные ритуалы", size: 26, link: "basics_rituals"},
						{text: "Ритуалы", size: 26, link: "rituals"},
						{text: "Рассказы", size: 26, link: "istories"},
						{text: "Другое", size: 26, link: "other"},
						
					]
				}
			},
			
						
//basics
			"basics": {
				preLink: "default",
				nextLink: "default",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Основы", size: 30},
						{text: "Основы состоят с подготовки. Для подготовки нам нужны предметы для магий.", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "предметы для основы:", size: 29, link: "items_for_basics"},
						{text: "Начальная палочка заклинаний", size: 25, link: "wand"},
						{text: "Алтарь ритуалов", size: 25, link: "altar"},
						{text: "Книга заклинаний", size: 25, link: "book_of_spells"},						
					]
				}
			},
			
//magic wand

	"wand": {
				preLink: "basics",
				nextLink: "basics",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.basic_magic_wand, data: 0, clicker: {onClick: function(){alert("Магическая палочка");}}},

 ],
 elements: [
 {text: "Магическая палочка нужна чтобы управлять магией. Магическая палочка создается обычной палки и камнем созвездий. В игре есть несколько видов магических палочек: Начальная для более легких ритуалов, Средняя для более трудных для начальной и легкий для Мастерской, Мастерская магическая палочка - оно очень трудно крафтится, но оно очень мощное", size: 18}
 ]
 }
	},
}

})
});