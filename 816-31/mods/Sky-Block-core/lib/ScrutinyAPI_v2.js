/*
Автор: Reider ___
Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода, за исключением имеени библиотеки(которое используется для импорта в мод)
    3.Явное копирование кода

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.
    группа - https://vk.com/club186544580
*/
LIBRARY({
	name: "ScrutinyAPI",
	version: 4,
	shared: true,
	api: "CoreEngine"
});

let uses = [];

let UiMainBuilder = null;
let StandartTabElement;
let TabCloseElement;
let RecipeCheck;
let DestroyBlocks_;
let Quest;
let UiDialog;

ModAPI.addAPICallback("FTBQuests", function(api){
	UiMainBuilder = api.UiMainBuilder;
	StandartTabElement = api.StandartTabElement;
	TabCloseElement = api.TabCloseElement;
	Quest = api.Quest;
	RecipeCheck = api.RecipeCheck;
	DestroyBlocks_ = api.DestroyBlocks;
	UiDialog = api.UiDialog;
	
	for(let i in uses)
		uses[i]();
});

Callback.addCallback("QuestGive", function(main, isLeft, tab, quest, player, value, is, result){
	if(result) Callback.invokeCallback("Scrutiny_give", main.getClientName(), tab, quest, player);
});

Translation.addTranslation("The quest has been completed!", {
	ru: "Выполнен квест!"
});

function useFunc(code){
	if(UiMainBuilder !== null)
		return code();
	uses.push(code);
}
let ScrutinyAPI_V2 = {
	windows: {},
	tabs: {},
	quests: {},
	
	register(name, obj){
		useFunc(function(){
			let main = new UiMainBuilder(name);
			main.addRender(false, new TabCloseElement("close"));
			main.registerSave();
			ItemContainer.registerScreenFactory("FTBQuests."+name, function(container){
				return main.build(container);
			});
			
			ScrutinyAPI_V2.windows[name] = obj;
		})
	},
	setTab(window, tab, obj){
		obj.icon = obj.icon || 0;
		useFunc(function(){
			let main = UiMainBuilder.getUiMainByName(window);
			main.addRender(obj.id < 6, new StandartTabElement(tab)
				.setItem({id: obj.icon, count: 1, data: 0})
				.setDisplayName(obj.title)
			);
			ScrutinyAPI_V2.tabs[tab] = obj;
		});
	},
	setScrutiny(window, tab_, scrutiny, obj){
		obj.icon.count = obj.icon.count || 1;
		obj.icon.data = obj.icon.data || 0;
		useFunc(function(){
			let tab = UiMainBuilder.getUiMainByName(window).getTab(ScrutinyAPI_V2.tabs[tab_].id < 6, tab_);
			let quest = new Quest({
				id: scrutiny,
				size: obj.size / 1.2,
				x: (obj.size/1.2+5) * obj.cellX,
				y: (obj.size/1.2+5) * obj.cellY,
				item: obj.icon,
				lines: obj.lines
			});
			tab.addQuest(quest);
			let dialog = new UiDialog(obj.book_pre.left[0].text, obj.book_pre.left[1].text);
			quest.setDialog(dialog);
			ScrutinyAPI_V2.quests[scrutiny] = obj;
		});
	},
	isScrutiny(player, window, tab_, name){
		return UiMainBuilder.getUiMainByName(window).canQuest(ScrutinyAPI_V2.tabs[tab_].id < 6, tab_, name, player);
	},
	give(player, window, tab_, name){
		return UiMainBuilder.getUiMainByName(window).give(ScrutinyAPI_V2.tabs[tab_].id < 6, tab_, name, player, Translation.translate("The quest has been completed!"), this.quests[name].name);
	},
	openServer(player, name, id){
		let main = UiMainBuilder.getUiMainByName(name);
		let container = new ItemContainer();
		main.buildServer(container);
		container.setClientContainerTypeName("FTBQuests."+name);
		container.openFor(Network.getClientForPlayer(player), "main");
	}
};


let ScrutinyAPI = {
	giveScrutiny(player, window, tab, name, bool){
		return ScrutinyAPI_V2.give(player, window, tab, name, bool);
	}
};

let RecipesScrutiny = {
	reg(tab_, quest, items){
		useFunc(function(){
			let items_ = [];
		for(let i in items)
			items_.push({item: {id: items[i], count: 1, data: 0}})
		UiMainBuilder.getUiMainByName("skyblock").getQuest(ScrutinyAPI_V2.tabs[tab_].id < 6, tab_, quest).dialog.setInput(items_);
			RecipeCheck.registerRecipeCheck(UiMainBuilder.getUiMainByName("skyblock"), items, ScrutinyAPI_V2.tabs[tab_].id < 6, tab_, quest, ScrutinyAPI_V2.quests[quest].name, Translation.translate("The quest has been completed!"));
		});
	}
};

let DestroyBlocks = {
	reg(tab_, quest, blocks){
	useFunc(function(){
		let items = [];
		for(let i in blocks)
			items.push({item: {id: Number(blocks[i].split(":")[0]), count: 1, data: Number(blocks[i].split(":")[1])}})
		UiMainBuilder.getUiMainByName("skyblock").getQuest(ScrutinyAPI_V2.tabs[tab_].id < 6, tab_, quest).dialog.setInput(items);
		DestroyBlocks_.registerDestroyBlocks(UiMainBuilder.getUiMainByName("skyblock"), blocks, ScrutinyAPI_V2.tabs[tab_].id < 6, tab_, quest, ScrutinyAPI_V2.quests[quest].name, Translation.translate("The quest has been completed!"));
		});
	}
};

let ListLoot = {};

Callback.addCallback("Scrutiny_give", function(window, tab, name, player){
	if(ListLoot[window+"."+tab+"."+name]){
		let loots = ListLoot[window+"."+tab+"."+name];
		let actor = new PlayerActor(player);
		for(let i in loots)
			actor.addItemToInventory(loots[i], 1, 0, null, true);
	}
});

EXPORT("addLoot", function(window, tab, name, loots){
	useFunc(function(){
		let items = [];
		for(let i in loots)
			items.push({item: {id: loots[i], count: 1, data: 0}})
		UiMainBuilder.getUiMainByName(window).getQuest(ScrutinyAPI_V2.tabs[tab].id < 6, tab, name).dialog.setResult(items);
	});
	ListLoot[window+"."+tab+"."+name] = loots;
});
EXPORT("DestroyBlocks", DestroyBlocks);
EXPORT("RecipesScrutiny", RecipesScrutiny);
EXPORT("ScrutinyAPI_V1", ScrutinyAPI);
EXPORT("ScrutinyAPI", ScrutinyAPI_V2);
