/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 13
*/



// file: header.js

IMPORT("ChargeItem");

const Bitmap = android.graphics.Bitmap;
const Canvas = android.graphics.Canvas;
const Rect = android.graphics.Rect;
const Color = android.graphics.Color;
const Context = UI.getContext();
const ScreenWidth = 1000;
const ScreenHeight = UI.getScreenHeight();

const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
const NativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");
const InvSource = {
    get: NativeAPI("api.mod.util.InventorySource", "getSource"),
    set: NativeAPI("api.mod.util.InventorySource", "setSource")
};

const addItemToInventory = function(id, count, data, extra){
    const stack = Item.getMaxStack(id);
    let slot;
    let add = 0;
    for(let i = 0; i < 36; i++){
        slot = InvSource.get(i);
        if(slot.id === 0 || slot.id === id && slot.data === data && slot.count < stack && !slot.extra){
            add = Math.min(count, stack - slot.count);
            slot.id = id;
            slot.data = data;
            slot.count += add;
            count -= add;
            if(extra){
                slot.extra = extra.copy();
            }
            InvSource.set(i, slot.id, slot.count, slot.data, slot.extra);
            if(count <= 0){
                return;
            }
        }
    }
    if(count > 0){
        const pos = Player.getPosition();
        while(count > 0){
            add = Math.min(count, stack);
            World.drop(pos.x, pos.y, pos.z, id, add, data, extra);
            count -= add;
        }
    }
};


const getNumericID = function(key){
    if(!key.startsWith("minecraft:")){
        return 0;
    }
    const key2 = key.substr(10);
    const array = key2.split("_");
    let id = 0;
    if(array[0] === "block"){
        const slice = array.slice(1);
        id = BlockID[slice.join("_")];
        if(id){
            return id;
        }
        let key3 = slice[0];
        for(let i = 1; i < slice.length; i++){
            key3 += slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
        }
        id = BlockID[key3];
        if(id){
            return id;
        }
    }
    if(array[0] === "item"){
        id = ItemID[array.slice(1).join("_")];
        if(id){
            return id;
        }
        let key3 = slice[0];
        for(let i = 1; i < slice.length; i++){
            key3 += slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
        }
        id = ItemID[key3];
        if(id){
            return id;
        }
    }
    return VanillaBlockID[key2] || VanillaItemID[key2] || 0;
}


Callback.addCallback("PostLoaded", function(){

    const defs = [__packdir__ + "assets/definitions/"];
    const search = function(path){
        FileTools.GetListOfDirs(path).forEach(function(dir){
            const path2 = dir.getAbsolutePath();
            dir.getName() == "definitions" ? defs.push(path2 + "/") : search(path2);
        });
    };
    search(__packdir__ + "innercore/mods/");

    const jsons = [];
    defs.forEach(function(path){
        FileTools.GetListOfFiles(path + "recipe/", ".json").forEach(function(file){
            jsons.push(file.getAbsolutePath());
        });
    });

    jsons.forEach(function(path, index){
        const json = FileTools.ReadJSON(path);
        if(json.tags){
            json.tags.forEach(function(tag){
                switch(tag){
                    case "campfire": CampfireRecipe.addFromJSON(json); break;
                    case "smoker": SmokerRecipe.addFromJSON(json); break;
                    case "blast_furnace": BlastFurnaceRecipe.addFromJSON(json); break;
                    case "stonecutter": StonecutterRecipe.addFromJSON(json); break;
                }
            });
        }
        setLoadingTip("[RV]: read JSON  (" + (index + 1) + " / " + jsons.length + ")");
    });
    
});




// file: core.js

const MODE_RECIPE = 0;
const MODE_USAGE = 1;
const MODE_ALL = 2;


const RecipeViewer = {

    list: [],
    recipeType: {},
    recipeTypeLength: 0,

    removeDuplicate: function(item1, index, array){
        return array.findIndex(function(item2){
            return item1.id == item2.id && item1.data == item2.data;
        }) == index;
    },

    addList: function(id, data, type){
        this.list.push({id: id - 0, data: data - 0, type: type});
    },

    addListByData: function(id, data, type){
        if(typeof data == "number"){
            for(let i = 0; i < data; i++){
                this.addList(id, i, type);
            }
        }
        else if(data.length){
            for(let i = 0; i < data.length; i++){
                this.addList(id, data[i], type);
            }
        }
    },

    setup: function(){
        const x = __config__.getNumber("ButtonPosition.x");
        const y = __config__.getNumber("ButtonPosition.y");
        this.startWindow.getLocation().set(x < 0 ? ScreenWidth - (-x): x, y < 0 ? ScreenHeight - (-y): y, 64, 64);
        this.startWindow.setAsGameOverlay(true);
        this.list = this.list.filter(function(item){
            return Item.isValid(item.id);
        }).filter(this.removeDuplicate).map(function(item){
            item.name = RecipeViewer.getName(item.id, item.data);
            return item;
        });
    },

    startWindow: new UI.Window({
        location: {x: 0, y: 0, width: 64, height: 64},
        elements: {
            button: {
                type: "button",
                x: 0, y: 0, scale: 62.5,
                bitmap: "default_button_up", bitmap2: "default_button_down",
                clicker: {
                    onClick: function(){
                        MainUI.openWindow(RecipeViewer.list);
                    },
                    onLongClick: function(){
                        const list = [];
                        let inv;
                        for(let i = 0; i <= 36; i++){
                            inv = Player.getInventorySlot(i);
                            inv.id && list.push({id: inv.id, data: inv.data});
                        }
                        MainUI.openWindow(list.filter(RecipeViewer.removeDuplicate));
                    }
                }
            },
            text: {
                type: "text",
                x: 300, y: 120, z: 1,
                text: "R",
                font: {color: Color.WHITE, size: 600, shadow: 0.5}
            }
        }
    }),

    clicker: {
        onClick: function(o1, o2, elem){
            SubUI.openWindow(elem.source.id, elem.source.data, MODE_RECIPE);
        },
        onLongClick: function(o1, o2, elem){
            SubUI.openWindow(elem.source.id, elem.source.data, MODE_USAGE);
        }
    },

    basicFuncs: {
        getList: function(id, data, isUsage){
            return this.recipeList.filter(function(recipe){
                return recipe[isUsage ? "input" : "output"].some(function(item){
                    return item.id === id && (data === -1 || item.data === data);
                });
            });
        },
        getAllLiist: function(){
            return this.recipeList;
        }
    },

    registerRecipeType: function(name, object){
        const length = {input: 0, output: 0};
        let elem;
        let isInput = isOutput = false;
        if(!object.contents.icon){
            object.contents.icon = {id: VanillaItemID.stick};;
        }
        if(typeof object.contents.icon === "number"){
            object.contents.icon = {id: object.contents.icon};
        }
        object.contents.icon.count = object.contents.icon.count || 1,
        object.contents.icon.data = object.contents.icon.data || 0;
        for(let key in object.contents.elements){
            elem = object.contents.elements[key];
            isInput = key.startsWith("input");
            isOutput = key.startsWith("output");
            if(isInput || isOutput){
                elem.type = "slot";
                elem.visual = true;
                elem.clicker = this.clicker;
                elem.bitmap = elem.bitmap || "_default_slot_light";
                isInput && length.input++;
                isOutput && length.output++;
            }
        }
        object.contents.drawing = object.contents.drawing || [];
        object.contents.drawing.some(function(elem){return elem.type == "background";}) || object.contents.drawing.unshift({type: "background", color: Color.TRANSPARENT});
        if(object.contents.moveItems){
            const moveItems = object.contents.moveItems;
            object.contents.elements.buttonMoveItems = {
                type: "button",
                x: moveItems.x, y: moveItems.y,
                bitmap: "default_button_up", bitmap2: "default_button_down",
                scale: 3,
                clicker: {
                    onClick: function(){
                        SubUI.moveItems(moveItems.slots, moveItems.isPattern, false);
                    },
                    onLongClick: function(){
                        SubUI.moveItems(moveItems.slots, moveItems.isPattern, true);
                    }
                }
            };
            object.contents.elements.textMoveItems = {
                type: "text",
                x: moveItems.x + 10, y: moveItems.y, z: 1,
                text: "+",
                font: {size: 40, color: Color.WHITE, shadow: 0.5}
            };
        }
        this.recipeType[name] = {
            title: object.title || name,
            icon: object.contents.icon,
            description: object.contents.description || "",
            window: new UI.Window({
                location: {x: 230, y: 80, width: 600, height: 340},
                params: object.contents.params,
                drawing: object.contents.drawing,
                elements: object.contents.elements
            }),
            length: length,
            recipeList: object.recipeList || [],
            getList: object.getList || this.basicFuncs.getList,
            getAllList: object.getAllList || (object.recipeList ? this.basicFuncs.getAllLiist : undefined),
            onOpen: object.onOpen
        };
    },

    getIOFromTEWorkbench: function(recipe, cols){
        const array = [];
        let i = j = 0;
        let item;
        switch(recipe.type){
            case "grid":
                for(i = 0; i < recipe.recipe.length; i++){
                    for(j = 0; j < recipe.recipe[i].length; j++){
                        item = recipe.ingridients[recipe.recipe[i][j]];
                        if(item){
                            array[i * cols + j] = {id: item.id, count: 1, data: item.data || 0};
                        }
                    }
                }
            break;
            case "line":
                for(i = 0; i < recipe.recipe.length; i++){
                    item = recipe.ingridients[recipe.recipe[i]];
                    if(item){
                        array[i] = {id: item.id, count: 1, data: item.data || 0};
                    }
                }
            break;
            case "not_shape":
                for(let key in recipe.ingridients){
                    item = recipe.ingridients[key];
                    for(i = 0; i < item.count; i++){
                        array.push({id: item.id, count: 1, data: item.data || 0});
                    }
                }
            break;
        }
        return {input: array, output: [recipe.result]};
    },

    registerTEWorkbenchRecipeType: function(sid, contents, recipes){
        const tile = TileEntity.getPrototype(BlockID[sid]);
        const cols = tile.Columns || tile.columns || tile.Cols || tile.cols || tile.Slots || tile.slots;
        const rows = tile.Rows || tile.rows;
        for(let key in contents.elements){
            if(key.startsWith("input") || key.startsWith("output")){
                contents.elements[key].visual = true;
                contents.elements[key].clicker = this.clicker;
            }
        }
        contents.drawing = contents.drawing || [];
        contents.drawing.some(function(elem){return elem.type == "background";}) || contents.drawing.unshift({type: "background", color: Color.TRANSPARENT});
        this.recipeType["TE_" + sid] = {
            icon: {id: BlockID[sid], count: 1, data: 0},
            description: "",
            window: new UI.Window({
                location: {x: 230, y: 80, width: 600, height: 340},
                params: contents.params,
                drawing: contents.drawing,
                elements: contents.elements
            }),
            length: {input: rows * cols, output: 1},
            getList: function(id, data, isUsage){
                //const recipes = RecipeTE.getRecipes(sid);
                const list = [];
                if(isUsage){
                    let key = "";
                    for(let i = 0; i < recipes.length; i++){
                        for(key in recipes[i].ingridients){
                            if(recipes[i].ingridients[key].id === id && (data === -1 || !recipes[i].ingridients[key].data || (recipes[i].ingridients[key].data || 0) === data)){
                                list.push(RecipeViewer.getIOFromTEWorkbench(recipes[i], cols));
                                break;
                            }
                        }
                    }
                }
                else{
                    for(let i = 0; i < recipes.length; i++){
                        recipes[i].result.id === id && (data === -1 || recipes[i].result.data === data) && list.push(RecipeViewer.getIOFromTEWorkbench(recipes[i], cols));
                    }
                }
                return list;
            },
        };
    },

    getWindow: function(key){
        return this.recipeType[key].window;
    },

    getTitle: function(key){
        return this.recipeType[key].title;
    },

    getIcon: function(key){
        return this.recipeType[key].icon;
    },

    getDescription: function(key){
        return this.recipeType[key].description;
    },

    getLength: function(key){
        return this.recipeType[key].length;
    },

    getRecipeList: function(key, id, data, isUsage){
        if(!this.recipeType[key]){
            return [];
        }
        let list;
        try{
            list = this.recipeType[key].getList(id, data, isUsage);
        }
        catch(e){
            list = [];
            delete this.recipeType[key];
            alert('[RV] RecipeType "' + key + '" has been deleted.\n' + e);
        }
        return list;
    },

    getAllRecipeList: function(key){
        if(!this.recipeType[key] || !this.recipeType[key].getAllList){
            return [];
        }
        let list;
        try{
            list = this.recipeType[key].getAllList();
        }
        catch(e){
            list = [];
            delete this.recipeType[key];
            alert('[RV] RecipeType "' + key + '" has been deleted.\n' + e);
        }
        return list;
    },

    getOpenFunc: function(key){
        return this.recipeType[key] ? this.recipeType[key].onOpen : undefined;
    },

    getName: function(id, data){
        let name = "";
        try{
            name = Item.getName(id, data === -1 ? 0 : data);
        }
        catch(e){
            alert(e);
            name = "name name";
        }
        index = name.indexOf("\n");
        if(index !== -1){
            name = name.slice(0, index);
        }
        index = name.indexOf("§");
        if(index !== -1){
            name = name.slice(0, index) + name.slice(index + 2);
        }
        return name;
    },

    openRecipePage: function(key, container){
        SubUI.openWindow(key, 0, MODE_ALL, container);
    },

    buttons: {},
    putButtonOnNativeGui: function(screenName, window){
        if(typeof window == "string"){
            const key = window;
            window = new UI.Window({
                location: {x: ScreenWidth - 128, y: ScreenHeight - 96, width: 64, height: 64},
                elements: {
                    button: {type: "button", x: 0, y: 0, scale: 62.5, bitmap: "default_button_up", bitmap2: "default_button_down", clicker: {
                        onClick: function(){
                            RecipeViewer.openRecipePage(key);
                        }
                    }},
                    text: {type: "text", x: 300, y: 120, z: 1, text: "R", font: {color: Color.WHITE, size: 600, shadow: 0.5}}
                }
            });
        }
        window.setAsGameOverlay(true);
        this.buttons[screenName] = window;
    },

    transparentBackground: function(){
        //abolish
    }

};


Callback.addCallback("PostLoaded", function(){

    const NativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");
    const getAssetAsJSON = NativeAPI("utils.FileTools", "getAssetAsJSON");
    let it;//go
    let item;
    let key = "";
    let recipes;

    it = getAssetAsJSON("innercore/icons/block_models.json").keys();
    while(it.hasNext()){
        item = it.next().split(":");
        RecipeViewer.addList(Block.convertBlockToItemId(item[0] - 0), item[1] || -1, "block");
    }

    it = getAssetAsJSON("innercore/icons/item_textures.json").keys();
    while(it.hasNext()){
        item = it.next().split(":");
        RecipeViewer.addList(item[0], item[1] || -1, "item");
    }

    for(key in BlockID){
        recipes = Recipes.getWorkbenchRecipesByResult(BlockID[key], -1, -1);
        if(recipes.isEmpty()){
            RecipeViewer.addList(BlockID[key], 0, "block");
            continue;
        }
        it = recipes.iterator();
        while(it.hasNext()){
            item = it.next().getResult();
            RecipeViewer.addList(item.id, item.data, "block");
        }
    }

    for(key in ItemID){
        RecipeViewer.list.some(function(item){return item.id == ItemID[key];}) || RecipeViewer.addList(ItemID[key], 0, "item");
    }

    RecipeViewer.recipeTypeLength = Object.keys(RecipeViewer.recipeType).length;
    MainUI.setupWindow();
    SubUI.setupWindow();

});


Callback.addCallback("LevelLoaded", function(){
    RecipeViewer.setup();
});

const InventoryScreen = {
    inventory_screen: true,
    inventory_screen_pocket: true,
    survival_inventory_screen: true,
    creative_inventory_screen: true
};

Callback.addCallback("NativeGuiChanged", function(screenName){
    InventoryScreen[screenName] ? RecipeViewer.startWindow.open() : RecipeViewer.startWindow.close();
    for(let name in RecipeViewer.buttons){
        name === screenName ? RecipeViewer.buttons[name].open() : RecipeViewer.buttons[name].close();
    }
});




// file: mainUI.js

const MainUI = {

    list: [],
    slotCount: 0,
    page: 0,

    window: null,
    elements: null,

    setupWindow: function(){

        const elements = {
            close: {
                type: "closeButton",
                x: 946, y: 0, scale: 3,
                bitmap: "close_button_up", bitmap2: "close_button_down"
            },
            buttonSearch: {
                type: "button",
                x: 20, y: 20, scale: 0.8,
                bitmap: "mod_browser_search_field",
                clicker: {onClick: function(){
                    Context.runOnUiThread(new java.lang.Runnable({
                        run: function(){
                            try{
                                const editText = new android.widget.EditText(Context);
                                editText.setHint("in this space");
                                new android.app.AlertDialog.Builder(Context)
                                    .setTitle("Please type the keywords")
                                    .setView(editText)
                                    .setPositiveButton("Search", new android.content.DialogInterface.OnClickListener({
                                        onClick: function(){
                                            const keyword = editText.getText() + "";
                                            MainUI.elements.get("textSearch").onBindingUpdated("text", keyword.length ? keyword : "Search");
                                            MainUI.list = RecipeViewer.list.filter(function(item){
                                                return item.name.match(new RegExp(keyword, "i"));
                                            });
                                            MainUI.page = 0;
                                            MainUI.refresh();
                                        }
                                    })).show();
                            }
                            catch(e){
                                alert(e);
                            }
                        }
                    }));
                }}
            },
            textSearch: {
                type: "text",
                x: 30, y: 30, z: 1,
                font: {color: Color.WHITE, size: 20},
                text: "Search"
            },
            buttonSort: {
                type: "button",
                x: 450, y: 20, scale: 0.8,
                bitmap: "mod_browser_button", bitmap2: "mod_browser_button_down",
                clicker: {onClick: function(){
                    MainUI.changeSortMode();
                }}
            },
            textSort: {
                type: "text",
                x: 465, y: 30, z: 1,
                text: "",
                font: {color: Color.WHITE, size: 16, shadow: 0.5}
            }
        };

        let x = y = i = 0;
        for(y = 68; y <= ScreenHeight - 120; y += 60){
        for(x = 20; x <= 920; x += 60){
            elements["button" + i] = {
                type: "button",
                x: x, y: y, scale: 3.75,
                bitmap: "default_button_up", bitmap2: "default_button_down",
            };
            elements["slot" + i] = {
                type: "slot",
                x: x, y: y, z: 1,
                visual: true, needClean: true,
                clicker: RecipeViewer.clicker
            };
            i++;
        }
        }

        this.slotCount = i;

        elements.buttonPrev = {
            type: "button",
            x: 20, y: ScreenHeight - 60, scale: 2,
            bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p",
            clicker: {onClick: function(){
                MainUI.page--;
                MainUI.refresh();
            }}
        };

        elements.buttonNext = {
            type: "button",
            x: 884, y: ScreenHeight - 60, scale: 2,
            bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p",
            clicker: {onClick: function(){
                MainUI.page++;
                MainUI.refresh();
            }}
        };

        elements.textPage = {type: "text", x: 490, y: ScreenHeight - 80, font: {size: 40, align: 1}};

        this.window = new UI.Window({
            location: {
                padding: {
                    left: __config__.getNumber("Padding.left"),
                    right: __config__.getNumber("Padding.right")
                }
            },
            params: {slot: "_default_slot_empty"},
            drawing: [
                //{type: "background", color: Color.TRANSPARENT},
                {type: "frame", x: 0, y: 0, width: ScreenWidth, height: ScreenHeight, bitmap: "default_frame_bg_light", scale: 2}
            ],
            elements: elements
        });

        this.window.setBlockingBackground(true);
        this.window.setAsGameOverlay(true);
        this.elements = this.window.getElements();
        this.window.setEventListener({
            onOpen:function(){
                RecipeViewer.startWindow.close();
            },
            onClose:function(){
                RecipeViewer.startWindow.open();
            }
        });
    },

    currentMode: 0,
    sortMode: [
        {text: "Sort by ID (ASC)", type: "id", reverse: false},
        {text: "Sort by ID (DESC)", type: "id", reverse: true},
        {text: "Sort by Name (ASC)", type: "name", reverse: false},
        {text: "Sort by Name (DESC)", type: "name", reverse: true}
    ],

    sortFunc: {
        id: function(a, b){
            if(a.type === "block" && b.type === "item"){
                return -1;
            }
            if(a.type === "item" && b.type === "block"){
                return 1;
            }
            return a.id - b.id || a.data - b.data;
        },
        name: function(a, b){
            return a.name > b.name ? 1 : -1;
        }
    },

    changeSortMode: function(notChange){
        notChange || this.currentMode++;
        this.currentMode &= 3;
        const mode = this.sortMode[this.currentMode];
        this.window.getElements().get("textSort").onBindingUpdated("text", mode.text);
        this.list.sort(this.sortFunc[mode.type]);
        mode.reverse && this.list.reverse();
        this.page = 0;
        this.refresh();
    },

    refresh: function(){
        const maxPage = (this.list.length / this.slotCount | 0) + 1;
        this.page = this.page < 0 ? maxPage - 1 : this.page >= maxPage ? 0 : this.page;
        this.elements.get("textPage").onBindingUpdated("text", (this.page + 1) + " / " + maxPage);
        let item;
        for(let i = 0; i < this.slotCount; i++){
            item = this.list[this.slotCount * this.page + i];
            this.elements.get("slot" + i).onBindingUpdated("source", item ? {id: item.id, count: 1, data: item.data} : {id: 0, count: 0, data: 0});
        }
    },

    openWindow: function(list){
        this.list = list;
        this.page = 0;
        this.changeSortMode(true);
        this.window.open();
    }

};




// file: subUI.js

const SubUI = {

    cache: [],
    list: [],
    page: 0,
    select: "",

    window: new UI.WindowGroup(),
    container: null,

    setupWindow: function(){

        this.window.addWindow("controller", {
            location: {x: 140, y: 10, width: 720, height: 480},
            drawing: [
                {type: "background", color: Color.TRANSPARENT},
                {type: "frame", x: 0, y: 0, width: 1000, height: 666.7, bitmap: "default_frame_bg_light", scale: 2}
            ],
            elements: {
                textRecipe: {type: "text", x: 280, y: 20, font: {size: 40, color: Color.WHITE, shadow: 0.5}},
                textUsage: {type: "text", x: 280, y: 20, font: {size: 40, color: Color.GREEN, shadow: 0.5}},
                textAll: {type: "text", x: 280, y: 20, font: {size: 40, color: Color.YELLOW, shadow: 0.5}},
                buttonBack: {
                    type: "button",
                    x: 120, y: 15, scale: 3,
                    bitmap: "_craft_button_up", bitmap2: "_craft_button_down",
                    clicker: {
                        onClick: function(){
                            SubUI.cache.pop();
                            if(SubUI.cache.length){
                                SubUI.refresh();
                                return;
                            }
                            SubUI.window.close();
                        },
                        onLongClick: function(){
                            SubUI.cache.length = 0;
                            SubUI.window.close();
                        }
                    }
                },
                textBack: {type: "text", x: 150, y: 25, z: 1, text: "Back",font: {color: Color.WHITE, size: 30, shadow: 0.5}},
                buttonPrev: {
                    type: "button",
                    x: 150, y: 610, scale: 2,
                    bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p",
                    clicker: {
                        onClick: function(){
                            SubUI.turnPage(SubUI.page - 1);
                        },
                        onLongClick: function(){
                            SubUI.turnPage(0);
                        }
                    }
                },
                buttonNext: {
                    type: "button",
                    x: 854, y: 610, scale: 2,
                    bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p",
                    clicker: {
                        onClick: function(){
                            SubUI.turnPage(SubUI.page + 1);
                        },
                        onLongClick: function(){
                            SubUI.turnPage(SubUI.list.length - 1);
                        }
                    }
                },
                scrollPage: {
                    type: "scroll",
                    x: 350, y: 595, length: 400,
                    onTouchEvent: function(elem, event){
                        const len = SubUI.list.length - 1;
                        const page = Math.round(event.localX * len);
                        SubUI.turnPage(page);
                        event.localX = page / len;
                    }
                },
                textPage: {type: "text", x: 575, y: 535, font: {size: 40, align: 1}}
            }
        });

        const elements = {};
        let i = 0;
        for(let key in RecipeViewer.recipeType){
            elements["icon" + i] = {
                type: "slot",
                x: 0, y: i * 1000, size: 1000,
                visual: true, needClean: true,
                clicker: {
                    onClick: function(o1, o2, elem){
                        elem.source.id && SubUI.changeWindow(elem.y / 1000 | 0);
                    },
                    onLongClick: function(o1, o2, elem){
                        const target = SubUI.getTarget();
                        const key = target.tray[elem.y / 1000 | 0];
                        RecipeViewer.recipeType[key] && RecipeViewer.recipeType[key].getAllList && SubUI.openWindow(key, 0, MODE_ALL);
                    }
                }
            };
            elements["description" + i] = {
                type: "text",
                x: 500, y: i * 1000 + 700, z: 1,
                font: {size: 160, color: Color.WHITE, shadow: 0.5, alignment: 1}
            };
            i++;
        }
        elements.cursor = {type: "image", x: 0, y: 0, z: 1, bitmap: "_selection", scale: 27.78};
        this.window.addWindow("tray", {
            location: {
                x: 150, y: 20,
                width: 60, height: 400,
                padding: {top: 30, bottom: ScreenHeight - 490},
                scrollY: RecipeViewer.recipeTypeLength * 60
            },
            params: {slot: "_default_slot_empty"},
            drawing: [{type: "background", color: Color.parseColor("#474343")}],
            elements: elements
        });

        this.window.setContainer(new UI.Container());
        this.window.setBlockingBackground(true);

    },

    getTarget: function(){
        return this.cache[this.cache.length - 1];
    },

    openWindow: function(id, data, mode, container){
        const target = this.getTarget();
        if(id === 0 || target && target.id == id && target.data == data && target.mode == mode){
            return;
        }
        Threading.initThread("rv_openWindow", function(){
            try{
                const array = [];
                if(mode === MODE_ALL){
                    RecipeViewer.recipeType[id] && RecipeViewer.recipeType[id].getAllList && array.push(id);
                }
                else{
                    for(let key in RecipeViewer.recipeType){
                        RecipeViewer.getRecipeList(key, id, data, mode === MODE_USAGE).length !== 0 && array.push(key);
                    }
                }
                if(!array.length){
                    alert("Recipe not found");
                    return;
                }
                SubUI.cache.push({id: id, data: data, mode: mode, tray: array});
                SubUI.page = 0;
                SubUI.refresh();
                SubUI.container = container;
                SubUI.window.open();
            }
            catch(e){
                alert(e);
            }
        });
    },

    refresh: function(){
        const target = this.getTarget();
        const name = target.mode == MODE_ALL ? RecipeViewer.getTitle(target.id) : RecipeViewer.getName(target.id, target.data);
        let elements = this.window.getWindow("controller").getElements();
        elements.get("textRecipe").onBindingUpdated("text", target.mode == MODE_RECIPE ? name : "");
        elements.get("textUsage").onBindingUpdated("text", target.mode == MODE_USAGE ? name : "");
        elements.get("textAll").onBindingUpdated("text", target.mode == MODE_ALL ? name : "");
        elements = this.window.getWindow("tray").getElements();
        for(let i = 0; i < RecipeViewer.recipeTypeLength; i++){
            elements.get("icon" + i).onBindingUpdated("source", target.tray[i] ? RecipeViewer.getIcon(target.tray[i]) : {id: 0, count: 0, data: 0});
            elements.get("description" + i).onBindingUpdated("text", target.tray[i] ? RecipeViewer.getDescription(target.tray[i]) : "");
        }
        this.changeWindow(0);
    },

    changeWindow: function(index){
        const trayWindow = this.window.getWindow("tray");
        const target = this.getTarget();
        this.select = target.tray[index];
        trayWindow.getElements().get("cursor").setPosition(0, index * 1000);
        trayWindow.getLocation().setScroll(0, target.tray.length * 60);
        this.window.addWindowInstance("custom", RecipeViewer.getWindow(this.select));
        this.list = target.mode == MODE_ALL ? RecipeViewer.getAllRecipeList(this.select) : RecipeViewer.getRecipeList(this.select, target.id, target.data, target.mode == MODE_USAGE);
        this.turnPage(0, true);
    },

    turnPage: function(page, force){
        if(!force && this.page == page){
            return;
        }
        const length = RecipeViewer.getLength(this.select);
        const onOpen = RecipeViewer.getOpenFunc(this.select);
        let elements = this.window.getWindow("controller").getElements();
        this.page = page < 0 ? this.list.length : page >= this.list.length ? 0 : page;
        elements.get("scrollPage").onBindingUpdated("raw-value", java.lang.Float.valueOf(this.page / (this.list.length - 1)));
        elements.get("textPage").onBindingUpdated("text", (this.page + 1) + " / " + this.list.length);
        const recipe = this.list[this.page];
        elements = this.window.getWindow("custom").getElements();
        let i = 0;
        for(i = 0; i < length.input; i++){
            elements.get("input" + i).onBindingUpdated("source", recipe.input[i] || {id: 0, count: 0, data: 0});
        }
        for(i = 0; i < length.output; i++){
            elements.get("output" + i).onBindingUpdated("source", recipe.output[i] || {id: 0, count: 0, data: 0});
        }
        onOpen && onOpen(elements, recipe);
    },

    moveItems: function(slots, isPattern, all){

        if(!this.container){
            alert("Container is not open.");
            return;
        }

        Threading.initThread("rv_moveItems", function(){

            try{

                const require = SubUI.list[SubUI.page].input;
                let i = 0;
                let count = 0;
                let slot;

                for(i = 0; i < slots.length; i++){
                    slot = SubUI.container.getSlot(slots[i]);
                    if(slot.id !== 0){
                        isPattern || addItemToInventory(slot.id, slot.count, slot.data, slot.extra);
                        SubUI.container.clearSlot(slots[i]);
                    }
                }

                if(isPattern){
                    count = 1;
                }
                else{

                    const stackedRequire = {};
                    const stackedItems = {};

                    let key = "";

                    for(i = 0; i < require.length; i++){
                        if(require[i] && require[i].id !== 0){
                            key = require[i].id + ":" + require[i].data;
                            stackedItems[key] = stackedItems[key] || 0;
                            stackedRequire[key] = stackedRequire[key] || 0;
                            stackedRequire[key] += require[i].count;
                        }
                    }

                    for(i = 0; i < 36; i++){
                        slot = InvSource.get(i);
                        key = slot.id + ":" + slot.data;
                        if(!slot.extra && stackedRequire[key]){
                            stackedItems[key] += slot.count;
                        }
                    }

                    const counts = [];

                    for(key in stackedRequire){
                        counts.push(stackedItems[key] / stackedRequire[key] | 0);
                    }

                    all || counts.push(1);
                    count = Math.min.apply(null, counts);

                    if(count < 1){
                        alert("Not enough ingredients");
                    }
                    else{
                        for(let key in stackedRequire){
                            stackedRequire[key] *= count;
                        }
                        let min = 0;
                        for(i = 0; i < 36; i++){
                            slot = InvSource.get(i);
                            key = slot.id + ":" + slot.data;
                            if(!slot.extra && stackedRequire[key] > 0){
                                min = Math.min(slot.count, stackedRequire[key]);
                                slot.count -= min;
                                stackedRequire[key] -= min;
                                slot.count > 0 ? InvSource.set(i, slot.id, slot.count, slot.data) : InvSource.set(i, 0, 0, 0);
                                if(stackedRequire[key] <= 0){
                                    delete stackedRequire[key];
                                }
                            }
                        }
                    }

                }

                if(count >= 1){
                    for(i = 0; i < slots.length; i++){
                        require[i] && require[i].id !== 0 && SubUI.container.setSlot(slots[i], require[i].id, require[i].count * count, require[i].data);
                    }
                    SubUI.cache.length = 0;
                    SubUI.window.close();
                    const tile = SubUI.container.getParent();
                    tile && tile.onMoveItems && tile.onMoveItems();
                }

            }
            catch(e){
                alert(e);
            }

        });

    }

};




// file: recipes/workbench.js

RecipeViewer.registerRecipeType("workbench", {
    contents: {
        icon: VanillaBlockID.crafting_table,
        drawing: [
            {type: "bitmap", x: 530, y: 185, scale: 2, bitmap: "_workbench_bar"}
        ],
        elements: {
            input0: {x: 200, y: 100, size: 100},
            input1: {x: 300, y: 100, size: 100},
            input2: {x: 400, y: 100, size: 100},
            input3: {x: 200, y: 200, size: 100},
            input4: {x: 300, y: 200, size: 100},
            input5: {x: 400, y: 200, size: 100},
            input6: {x: 200, y: 300, size: 100},
            input7: {x: 300, y: 300, size: 100},
            input8: {x: 400, y: 300, size: 100},
            output0: {x: 680, y: 190, size: 120}
        }
    },
    getList: function(id, data, isUsage){
        const list = [];
        const data2 = Item.getMaxDamage(id) ? -1 : data;
        const recipe = isUsage ? Recipes.getWorkbenchRecipesByIngredient(id, data2) : Recipes.getWorkbenchRecipesByResult(id, -1, data2);
        const iterator = recipe.iterator();
        let entry, field, result, input, chargeData;
        let i = amount = 0;
        while(iterator.hasNext()){
            entry = iterator.next();
            result = entry.getResult();
            field = entry.getSortedEntries();
            input = [];
            chargeData = ChargeItemRegistry.getItemData(result.id);
            for(i = 0; i < 9; i++){
                if(!field[i]){
                    break;
                }
                input[i] = {id: field[i].id, count: 1, data: field[i].data};
                amount += chargeData ? ChargeItemRegistry.getEnergyStored(field[i], chargeData.energy) : 0;
            }
            chargeData && chargeData.type != "extra" && result.count == 1 && ChargeItemRegistry.addEnergyTo(result, chargeData.energy, amount, amount, 100);
            list.push({input: input, output: [result]});
        }
        return list;
    }
});




// file: recipes/furnace.js

RecipeViewer.registerRecipeType("furnace", {
    title: "Smelting",
    contents: {
        icon: VanillaBlockID.furnace,
        drawing: [
            {type: "bitmap", x: 440, y: 185, scale: 2, bitmap: "_workbench_bar"}
        ],
        elements: {
            input0: {x: 280, y: 190, size: 120},
            output0: {x: 600, y: 190, size: 120}
        }
    },
    getList: function(id, data, isUsage){
        let result;
        if(isUsage){
            result = Recipes.getFurnaceRecipeResult(id, data);
            return result ? [{
                input: [{id: id, count: 1, data: data}],
                output: [result]
            }] : [];
        }
        const list = [];
        const recipe = Recipes.getFurnaceRecipesByResult();
        const iterator = recipe.iterator();
        let entry;
        while(iterator.hasNext()){
            entry = iterator.next();
            result = entry.getResult();
            id == result.id && (!~data || data == result.data) && list.push({
                input: [{id: entry.inId, count: 1, data: entry.inData}],
                output: [result]
            });
        }
        return list;
    },
    getAllList: function(){
        const list = [];
        const recipe = Recipes.getFurnaceRecipesByResult();
        const iterator = recipe.iterator();
        let entry;
        while(iterator.hasNext()){
            entry = iterator.next();
            list.push({
                input: [{id: entry.inId, count: 1, data: entry.inData}],
                output: [entry.getResult()]
            });
        }
        return list;
    }
});


RecipeViewer.registerRecipeType("fuel", {
    title: "Furnace Fuel",
    contents: {
        icon: VanillaBlockID.furnace,
        description: "fuel",
        drawing: [
            {type: "bitmap", x: 290, y: 140, scale: 8, bitmap: "furnace_burn"}
        ],
        elements: {
            input0: {x: 280, y: 260, size: 120},
            text: {type: "text", x: 450, y: 220, multiline: true, font: {size: 40, color: Color.WHITE, shadow: 0.5}}
        }
    },
    getList: function(id, data, isUsage){
        return isUsage && Recipes.getFuelBurnDuration(id, data) > 0 ? [{input: [{id: id, count: 1, data: data}]}] : [];
    },
    onOpen: function(elements, recipe){
        const item = recipe.input[0];
        const time = Recipes.getFuelBurnDuration(item.id, item.data);
        elements.get("text").onBindingUpdated("text", time + " tick\n(smelts  "+ ((time / 20 | 0) / 10) +"  items)");
    }
});


RecipeViewer.putButtonOnNativeGui("furnace_screen", "furnace");




// file: recipes/blast_furnace.js

const BlastFurnaceRecipe = {

    recipes: [],

    addFromJSON: function(obj){
        const input = getNumericID(obj.input);
        const output = getNumericID(obj.output);
        input && output && this.recipes.push({
            input: [{id: input, count: 1, data: 0}],
            output: [{id: output, count: 1, data: 0}]
        });
    }

};


RecipeViewer.registerRecipeType("blast_furnace", {
    title: "Blast Furnece",
    contents: {
        icon: VanillaBlockID.blast_furnace,
        drawing: [
            {type: "bitmap", x: 440, y: 185, scale: 2, bitmap: "_workbench_bar"}
        ],
        elements: {
            input0: {x: 280, y: 190, size: 120},
            output0: {x: 600, y: 190, size: 120}
        }
    },
    recipeList: BlastFurnaceRecipe.recipes
});


RecipeViewer.putButtonOnNativeGui("blast_furnace_screen", "blast_furnace");




// file: recipes/smoker.js

const SmokerRecipe = {

    recipes: [],

    addFromJSON: function(obj){
        const input = getNumericID(obj.input);
        const output = getNumericID(obj.output);
        input && output && this.recipes.push({
            input: [{id: input, count: 1, data: 0}],
            output: [{id: output, count: 1, data: 0}]
        });
    }

};


RecipeViewer.registerRecipeType("smoker", {
    title: "Smoker",
    contents: {
        icon: VanillaBlockID.smoker,
        drawing: [
            {type: "bitmap", x: 440, y: 185, scale: 2, bitmap: "_workbench_bar"}
        ],
        elements: {
            input0: {x: 280, y: 190, size: 120},
            output0: {x: 600, y: 190, size: 120}
        }
    },
    recipeList: SmokerRecipe.recipes
});


RecipeViewer.putButtonOnNativeGui("smoker_screen", "smoker");




// file: recipes/campfire.js

const CampfireRecipe = {

    recipes: [],

    addFromJSON: function(obj){
        const input = getNumericID(obj.input);
        const output = getNumericID(obj.output);
        input && output && this.recipes.push({
            input: [{id: input, count: 1, data: 0}],
            output: [{id: output, count: 1, data: 0}]
        });
    }

};


RecipeViewer.registerRecipeType("campfire", {
    title: "Campfire",
    contents: {
        icon: VanillaBlockID.campfire,
        drawing: [
            {type: "bitmap", x: 440, y: 185, scale: 2, bitmap: "_workbench_bar"}
        ],
        elements: {
            input0: {x: 280, y: 190, size: 120},
            output0: {x: 600, y: 190, size: 120}
        }
    },
    recipeList: CampfireRecipe.recipes
});




// file: recipes/brewing.js

const BrewingRecipe = {

    recipes: [],

    id: {
        normal: VanillaItemID.potion,
        splash: VanillaItemID.splash_potion,
        lingering: VanillaItemID.lingering_potion
    },

    meta: {
        water: {basic: 0},
        mundane: {basic: 1, long: 2},
        thick: {basic: 3},
        awkward: {basic: 4},
        night_vision: {basic: 5, long: 6},
        invisibility: {basic: 7, long: 8},
        leaping: {basic: 9, long: 10, strong: 11},
        fire_resistance: {basic: 12, long: 13},
        swiftness: {basic: 14, long: 15, strong: 16},
        slowness: {basic: 17, long: 18},
        water_breathing: {basic: 19, long: 20},
        healing: {basic: 21, strong: 22},
        harming: {basic: 23, strong: 24},
        poison: {basic: 25, long: 26, strong: 27},
        regeneration: {basic: 28, long: 29, strong: 30},
        strength: {basic: 31, long: 32, strong: 33},
        weakness: {basic: 34, long: 35},
        decay: {basic: 36},
        turtle_master: {basic: 37, long: 38, strong: 39},
        slow_falling: {basic: 40, long: 41}
    },

    corrupt: {
        night_vision: "invisibility",
        swiftness: "slowness",
        leaping: "slowness",
        healing: "harming",
        poison: "harming",
        regeneration: "weakness",
        strength: "weakness"
    },

    add: function(sourceID, potionType1, potionMeta1, potionType2, potionMeta2){
        this.recipes.push({
            input: [
                {id: VanillaItemID.blaze_powder, count: 1, data: 0},
                {id: sourceID, count: 1, data: 0},
                {id: this.id[potionType1], count: 1, data: potionMeta1}
            ],
            output: [
                {id: this.id[potionType2], count: 1, data: potionMeta2}
            ]
        });
    },

    addEachBottle: function(sourceID, potionMeta1, potionMeta2){
        for(let key in this.id){
            this.add(sourceID, key, potionMeta1, key, potionMeta2);
        }
    },

    addEffect: function(sourceID, baseType, resultType){
        this.addEachBottle(sourceID, this.meta[baseType].basic, this.meta[resultType].basic);
    },

    setup: function(){
        let type = "";
        for(let effect in this.meta){
            this.meta[effect].long && this.addEachBottle(VanillaItemID.redstone, this.meta[effect].basic, this.meta[effect].long);
            this.meta[effect].strong && this.addEachBottle(VanillaItemID.glowstone_dust, this.meta[effect].basic, this.meta[effect].strong);
            for(type in this.meta[effect]){
                this.add(VanillaItemID.gunpowder, "normal", this.meta[effect][type], "splash", this.meta[effect][type]);
                this.add(VanillaItemID.dragon_breath, "splash", this.meta[effect][type], "lingering", this.meta[effect][type]);
            }
        }
        for(let effect in this.corrupt){
            for(type in this.meta[effect]){
                this.meta[this.corrupt[effect]][type] && this.addEachBottle(VanillaItemID.fermented_spider_eye, this.meta[effect][type], this.meta[this.corrupt[effect]][type]);
            }
        }
    },

    getName: function(meta){
        return Item.getName(VanillaItemID.potion, meta).replace(" Potion", "").replace("Potion of ", "");
    }

};


BrewingRecipe.addEffect(VanillaItemID.spider_eye, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.ghast_tear, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.rabbit_foot, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.blaze_powder, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.speckled_melon, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.sugar, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.magma_cream, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.redstone, "water", "mundane");
BrewingRecipe.addEffect(VanillaItemID.glowstone_dust, "water", "thick");
BrewingRecipe.addEffect(VanillaBlockID.nether_wart, "water", "awkward");
BrewingRecipe.addEffect(VanillaItemID.golden_carrot, "awkward", "night_vision");
BrewingRecipe.addEffect(VanillaItemID.rabbit_foot, "awkward", "leaping");
BrewingRecipe.addEffect(VanillaItemID.magma_cream, "awkward", "fire_resistance");
BrewingRecipe.addEffect(VanillaItemID.sugar, "awkward", "swiftness");
BrewingRecipe.addEffect(VanillaItemID.pufferfish, "awkward", "water_breathing");
BrewingRecipe.addEffect(VanillaItemID.speckled_melon, "awkward", "healing");
BrewingRecipe.addEffect(VanillaItemID.spider_eye, "awkward", "poison");
BrewingRecipe.addEffect(VanillaItemID.ghast_tear, "awkward", "regeneration");
BrewingRecipe.addEffect(VanillaItemID.blaze_powder, "awkward", "strength");
BrewingRecipe.addEffect(VanillaItemID.fermented_spider_eye, "water", "weakness");
BrewingRecipe.addEffect(VanillaItemID.turtle_helmet, "awkward", "turtle_master");
BrewingRecipe.addEffect(VanillaItemID.phantom_membrane, "awkward", "slow_falling");
BrewingRecipe.setup();


RecipeViewer.registerRecipeType("brewing", {
    title: "Potion Brewing",
    contents: {
        icon: VanillaBlockID.brewing_stand,
        drawing: [
            {type: "bitmap", x: 68, y: 60, scale: 4, bitmap: "brewing_stand_back"}
        ],
        elements: {
            input0: {x: 68, y: 60, size: 128, bitmap: "classic_slot"},
            input1: {x: 436, y: 68, size: 128, bitmap: "classic_slot"},
            input2: {x: 244, y: 276, size: 128, bitmap: "classic_slot"},
            output0: {x: 628, y: 276, size: 128, bitmap: "classic_slot"},
            text1: {type: "text", x: 372, y: 420, font: {size: 30, color: Color.WHITE, shadow: 0.5, alignment: 2}},
            text2: {type: "text", x: 628, y: 420, font: {size: 30, color: Color.WHITE, shadow: 0.5}}
        }
    },
    recipeList: BrewingRecipe.recipes,
    onOpen: function(elements, recipe){
        elements.get("text1").onBindingUpdated("text", BrewingRecipe.getName(recipe.input[2].data));
        elements.get("text2").onBindingUpdated("text", BrewingRecipe.getName(recipe.output[0].data));
    }
});


RecipeViewer.putButtonOnNativeGui("brewing_stand_screen", "brewing");




// file: recipes/stonecutter.js

const StonecutterRecipe = {

    recipes: [],

    addFromJSON: function(obj){
        if(!obj.ingredients || obj.ingredients.length !== 1 || !obj.result){
            return;
        }
        const input = {
            id: getNumericID(obj.ingredients[0].item),
            count: obj.ingredients[0].count || 1,
            data: obj.ingredients[0].data || 0
        };
        const output = {
            id: getNumericID(obj.result.item),
            count: obj.result.count || 1,
            data: obj.result.data || 0
        };
        const find = this.recipes.find(function(recipe){
            const item = recipe.input[0];
            return item.id === input.id && item.count === input.count && item.data === input.data;
        });
        find ? find.output.push(output) : this.recipes.push({input: [input], output: [output]});
    }

};


RecipeViewer.registerRecipeType("stonecutter", {
    title: "Stonecutter",
    contents: {
        icon: VanillaBlockID.stonecutter_block,
        drawing: [
            {type: "bitmap", x: 455, y: 130, scale: 6, bitmap: "bar_stonecutter"}
        ],
        elements: {
            input0: {x: 440, y: 0, size: 120},
            output0: {x: 260, y: 270, size: 120},
            output1: {x: 380, y: 270, size: 120},
            output2: {x: 500, y: 270, size: 120},
            output3: {x: 620, y: 270, size: 120},
            output4: {x: 260, y: 390, size: 120},
            output5: {x: 380, y: 390, size: 120},
            output6: {x: 500, y: 390, size: 120},
            output7: {x: 620, y: 390, size: 120}
        }
    },
    recipeList: StonecutterRecipe.recipes
});

RecipeViewer.putButtonOnNativeGui("stonecutter_screen", "stonecutter");




// file: recipes/trading.js

const TradingRecipe = {

    recipes: [],

    add: function(job, level, given, wanted, wanted2){
        const input = [];
        input.push({id: wanted.id || wanted, count: wanted.count || 1, data: wanted.data || 0});
        wanted2 && input.push({id: wanted2.id || wanted2, count: wanted2.count || 1, data: wanted2.data || 0});
        this.recipes.push({
            input: input,
            output: [{id: given.id || given, count: given.count || 1, data: given.data || 0}],
            job: job,
            level: level,
            isEnchanted: given.enc || false
        });
    },

    addWandering: function(price, offer){
        this.add("Wandering Trader", 0, offer, {id: VanillaItemID.emerald, count: price});
    }

};


(function(){

    TradingRecipe.add("Armorer", 1, VanillaItemID.emerald, {id: VanillaItemID.coal, count: 15});
    TradingRecipe.add("Armorer", 1, VanillaItemID.iron_helmet, {id: VanillaItemID.emerald, count: 5});
    TradingRecipe.add("Armorer", 1, VanillaItemID.iron_chestplate, {id: VanillaItemID.emerald, count: 9});
    TradingRecipe.add("Armorer", 1, VanillaItemID.iron_leggings, {id: VanillaItemID.emerald, count: 7});
    TradingRecipe.add("Armorer", 1, VanillaItemID.iron_boots, {id: VanillaItemID.emerald, count: 4});
    TradingRecipe.add("Armorer", 2, VanillaItemID.emerald, {id: VanillaItemID.iron_ingot, count: 4});
    TradingRecipe.add("Armorer", 2, VanillaBlockID.bell, {id: VanillaItemID.emerald, count: 36});
    TradingRecipe.add("Armorer", 2, VanillaItemID.chainmail_leggings, {id: VanillaItemID.emerald, count: 3});
    TradingRecipe.add("Armorer", 2, VanillaItemID.chainmail_boots, VanillaItemID.emerald);
    TradingRecipe.add("Armorer", 3, VanillaItemID.emerald, {id: VanillaItemID.bucket, data: 10});
    TradingRecipe.add("Armorer", 3, VanillaItemID.chainmail_helmet, VanillaItemID.emerald);
    TradingRecipe.add("Armorer", 3, VanillaItemID.chainmail_chestplate, {id: VanillaItemID.emerald, count: 4});
    TradingRecipe.add("Armorer", 3, VanillaItemID.shield, {id: VanillaItemID.emerald, count: 5});
    TradingRecipe.add("Armorer", 4, VanillaItemID.emerald, VanillaItemID.diamond);
    TradingRecipe.add("Armorer", 4, {id: VanillaItemID.diamond_leggings, enc: true}, {id: VanillaItemID.emerald, count: 33});
    TradingRecipe.add("Armorer", 4, {id: VanillaItemID.diamond_boots, enc: true}, {id: VanillaItemID.emerald, count: 27});
    TradingRecipe.add("Armorer", 5, {id: VanillaItemID.diamond_helmet, enc: true}, {id: VanillaItemID.emerald, count: 27});
    TradingRecipe.add("Armorer", 5, {id: VanillaItemID.diamond_chestplate, enc: true}, {id: VanillaItemID.emerald, count: 35});

    TradingRecipe.add("Butcher", 1, VanillaItemID.emerald, {id: VanillaItemID.chicken, count: 14});
    TradingRecipe.add("Butcher", 1, VanillaItemID.emerald, {id: VanillaItemID.rabbit, count: 4});
    TradingRecipe.add("Butcher", 1, VanillaItemID.emerald, {id: VanillaItemID.porkchop, count: 7});
    TradingRecipe.add("Butcher", 1, VanillaItemID.rabbit_stew, VanillaItemID.emerald);
    TradingRecipe.add("Butcher", 2, VanillaItemID.emerald, {id: VanillaItemID.coal, count: 15});
    TradingRecipe.add("Butcher", 2, {id: VanillaItemID.cooked_rabbit, count: 5}, VanillaItemID.emerald);
    TradingRecipe.add("Butcher", 2, {id: VanillaItemID.cooked_chicken, count: 8}, VanillaItemID.emerald);
    TradingRecipe.add("Butcher", 2, {id: VanillaItemID.cooked_porkchop, count: 5}, VanillaItemID.emerald);
    TradingRecipe.add("Butcher", 2, {id: VanillaItemID.muttoncooked, count: 4}, VanillaItemID.emerald);
    TradingRecipe.add("Butcher", 3, VanillaItemID.emerald, {id: VanillaItemID.beef, count: 10});
    TradingRecipe.add("Butcher", 3, VanillaItemID.emerald, {id: VanillaItemID.muttonraw, count: 7});
    TradingRecipe.add("Butcher", 3, {id: VanillaItemID.cooked_beef, count: 3}, VanillaItemID.emerald);
    TradingRecipe.add("Butcher", 4, VanillaItemID.emerald, {id: VanillaBlockID.dried_kelp_block, count: 10});
    TradingRecipe.add("Butcher", 5, VanillaItemID.emerald, {id: VanillaItemID.sweet_berries, count: 10});

    TradingRecipe.add("Cartographer", 1, VanillaItemID.emerald, {id: VanillaItemID.paper, count: 24});
    TradingRecipe.add("Cartographer", 1, VanillaItemID.emptymap, {id: VanillaItemID.emerald, count: 7});
    TradingRecipe.add("Cartographer", 2, VanillaItemID.emerald, {id: VanillaBlockID.glass_pane, count: 11});
    TradingRecipe.add("Cartographer", 2, {id: VanillaItemID.map, data: 3}, {id: VanillaItemID.emerald, count: 13}, VanillaItemID.compass);
    TradingRecipe.add("Cartographer", 3, VanillaItemID.emerald, VanillaItemID.compass);
    TradingRecipe.add("Cartographer", 3, {id: VanillaItemID.map, data: 4}, {id: VanillaItemID.emerald, count: 14}, VanillaItemID.compass);
    TradingRecipe.add("Cartographer", 4, VanillaBlockID.frame, {id: VanillaItemID.emerald, count: 7});
    for(let i = 0; i < 16; i++){
        TradingRecipe.add("Cartographer", 4, {id: VanillaItemID.banner, data: i}, {id: VanillaItemID.emerald, count: 3});
    }
    TradingRecipe.add("Cartographer", 5, {id: VanillaItemID.banner_pattern, data: 2}, VanillaItemID.emerald);
    TradingRecipe.add("Cartographer", 5, {id: VanillaItemID.banner_pattern, data: 4}, {id: VanillaItemID.emerald, count: 2});
    TradingRecipe.add("Cartographer", 5, {id: VanillaItemID.banner_pattern, data: 5}, {id: VanillaItemID.emerald, count: 2});

    TradingRecipe.add("Cleric", 1, VanillaItemID.emerald, {id: VanillaItemID.rotten_flesh, count: 32});
    TradingRecipe.add("Cleric", 1, {id: VanillaItemID.redstone, count: 2}, VanillaItemID.emerald);
    TradingRecipe.add("Cleric", 2, VanillaItemID.emerald, {id: VanillaItemID.gold_ingot, count: 3});
    TradingRecipe.add("Cleric", 2, {id: VanillaItemID.dye, data: 4}, VanillaItemID.emerald);
    TradingRecipe.add("Cleric", 3, VanillaItemID.emerald, {id: VanillaItemID.rabbit_foot, count: 2});
    TradingRecipe.add("Cleric", 3, VanillaItemID.glowstone_dust, {id: VanillaItemID.emerald, count: 4});
    TradingRecipe.add("Cleric", 4, VanillaItemID.emerald, {id: VanillaItemID.turtle_shell_piece, count: 4});
    TradingRecipe.add("Cleric", 4, VanillaItemID.emerald, {id: VanillaItemID.glass_bottle, count: 9});
    TradingRecipe.add("Cleric", 4, VanillaItemID.ender_pearl, {id: VanillaItemID.emerald, count: 5});
    TradingRecipe.add("Cleric", 5, VanillaItemID.emerald, {id: VanillaBlockID.nether_wart, count: 22});
    TradingRecipe.add("Cleric", 5, VanillaItemID.experience_bottle, {id: VanillaItemID.emerald, count: 3});

    TradingRecipe.add("Farmer", 1, VanillaItemID.emerald, {id: VanillaBlockID.wheat, count: 20});
    TradingRecipe.add("Farmer", 1, VanillaItemID.emerald, {id: VanillaItemID.potato, count: 26});
    TradingRecipe.add("Farmer", 1, VanillaItemID.emerald, {id: VanillaItemID.carrot, count: 22});
    TradingRecipe.add("Farmer", 1, VanillaItemID.emerald, {id: VanillaBlockID.beetroot, count: 15});
    TradingRecipe.add("Farmer", 1, {id: VanillaItemID.bread, count: 6}, VanillaItemID.emerald);
    TradingRecipe.add("Farmer", 2, VanillaItemID.emerald, {id: VanillaBlockID.pumpkin, count: 6});
    TradingRecipe.add("Farmer", 2, {id: VanillaItemID.pumpkin_pie, count: 4}, VanillaItemID.emerald);
    TradingRecipe.add("Farmer", 2, {id: VanillaItemID.apple, count: 4}, VanillaItemID.emerald);
    TradingRecipe.add("Farmer", 3, VanillaItemID.emerald, {id: VanillaBlockID.melon_block, count: 4});
    TradingRecipe.add("Farmer", 3, {id: VanillaItemID.cookie, count: 18}, {id: VanillaItemID.emerald, count: 3});
    //TradingRecipe.add("Farmer", 4, VanillaItemID.suspicious_stew || 734, VanillaItemID.emerald);
    TradingRecipe.add("Farmer", 4, VanillaBlockID.cake, VanillaItemID.emerald);
    TradingRecipe.add("Farmer", 5, {id: VanillaItemID.golden_carrot, count: 3}, {id: VanillaItemID.emerald, count: 3});
    TradingRecipe.add("Farmer", 5, {id: VanillaItemID.speckled_melon, count: 3}, {id: VanillaItemID.emerald, count: 4});

    TradingRecipe.add("Fisherman", 1, VanillaItemID.emerald, {id: VanillaItemID.string, count: 20});
    TradingRecipe.add("Fisherman", 1, VanillaItemID.emerald, {id: VanillaItemID.coal, count: 10});
    TradingRecipe.add("Fisherman", 1, {id: VanillaItemID.bucket, data: 2}, {id: VanillaItemID.emerald, count: 3});
    TradingRecipe.add("Fisherman", 1, {id: VanillaItemID.cooked_fish, count: 6}, VanillaItemID.emerald, {id: VanillaItemID.fish, count: 6});
    TradingRecipe.add("Fisherman", 2, VanillaItemID.emerald, {id: VanillaItemID.fish, count: 15});
    TradingRecipe.add("Fisherman", 2, VanillaBlockID.campfire, {id: VanillaItemID.emerald, count: 2});
    TradingRecipe.add("Fisherman", 2, {id: VanillaItemID.cooked_salmon, count: 6}, VanillaItemID.emerald, {id: VanillaItemID.salmon, count: 6});
    TradingRecipe.add("Fisherman", 3, VanillaItemID.emerald, {id: VanillaItemID.salmon, count: 13});
    TradingRecipe.add("Fisherman", 3, {id: VanillaItemID.fishing_rod, enc: true}, {id: VanillaItemID.emerald, count: 22});
    TradingRecipe.add("Fisherman", 4, VanillaItemID.emerald, {id: VanillaItemID.clownfish, count: 6});
    TradingRecipe.add("Fisherman", 5, VanillaItemID.emerald, {id: VanillaItemID.pufferfish, count: 4});
    for(let i = 0; i < 6; i++){
        if(i !== 2){
            TradingRecipe.add("Fisherman", 5, VanillaItemID.emerald, {id: VanillaItemID.boat, data: i});
        }
    }

    TradingRecipe.add("Fletcher", 1, VanillaItemID.emerald, {id: VanillaItemID.stick, count: 32});
    TradingRecipe.add("Fletcher", 1, {id: VanillaItemID.arrow, count: 16}, VanillaItemID.emerald);
    TradingRecipe.add("Fletcher", 1, {id: VanillaItemID.flint, count: 10}, VanillaItemID.emerald, {id: VanillaBlockID.gravel, count: 10});
    TradingRecipe.add("Fletcher", 2, VanillaItemID.emerald, {id: VanillaItemID.flint, count: 26});
    TradingRecipe.add("Fletcher", 2, VanillaItemID.bow, {id: VanillaItemID.emerald, count: 2});
    TradingRecipe.add("Fletcher", 3, VanillaItemID.emerald, {id: VanillaItemID.string, count: 14});
    TradingRecipe.add("Fletcher", 3, VanillaItemID.crossbow, {id: VanillaItemID.emerald, count: 3});
    TradingRecipe.add("Fletcher", 4, VanillaItemID.emerald, {id: VanillaItemID.feather, count: 24});
    TradingRecipe.add("Fletcher", 4, {id: VanillaItemID.bow, enc: true}, {id: VanillaItemID.emerald, count: 21});
    TradingRecipe.add("Fletcher", 5, VanillaItemID.emerald, {id: VanillaBlockID.tripwire_hook, count: 8});
    TradingRecipe.add("Fletcher", 5, {id: VanillaItemID.crossbow, enc: true}, {id: VanillaItemID.emerald, count: 22});
    const effects = [
        "night_vision",
        "invisibility",
        "leaping",
        "fire_resistance",
        "swiftness",
        "slowness",
        "water_breathing",
        "healing",
        "harming",
        "poison",
        "regeneration",
        "strength",
        "weakness",
        "decay"
    ];
    for(let i = 0; i < effects.length; i++){
        TradingRecipe.add("Fletcher", 5, {id: VanillaItemID.arrow, count: 5, data: BrewingRecipe.meta[effects[i].basic]}, {id: VanillaItemID.emerald, count: 2}, {id: VanillaItemID.arrow, count: 5});
    }

    TradingRecipe.add("Leatherworker", 1, VanillaItemID.emerald, {id: VanillaItemID.leather, count: 6});
    TradingRecipe.add("Leatherworker", 1, VanillaItemID.leather_leggings, {id: VanillaItemID.emerald, count: 3});
    TradingRecipe.add("Leatherworker", 1, VanillaItemID.leather_chestplate, {id: VanillaItemID.emerald, count: 7});
    TradingRecipe.add("Leatherworker", 2, VanillaItemID.emerald, {id: VanillaItemID.flint, count: 26});
    TradingRecipe.add("Leatherworker", 2, VanillaItemID.leather_helmet, {id: VanillaItemID.emerald, count: 5});
    TradingRecipe.add("Leatherworker", 2, VanillaItemID.leather_boots, {id: VanillaItemID.emerald, count: 4});
    TradingRecipe.add("Leatherworker", 3, VanillaItemID.emerald, {id: VanillaItemID.rabbit_hide, count: 9});
    TradingRecipe.add("Leatherworker", 3, VanillaItemID.leather_chestplate, {id: VanillaItemID.emerald, count: 7});
    TradingRecipe.add("Leatherworker", 4, VanillaItemID.emerald, {id: VanillaItemID.turtle_shell_piece, count: 4});
    TradingRecipe.add("Leatherworker", 4, VanillaItemID.horsearmorleather, {id: VanillaItemID.emerald, count: 6});
    TradingRecipe.add("Leatherworker", 5, VanillaItemID.leather_helmet, {id: VanillaItemID.emerald, count: 5});
    TradingRecipe.add("Leatherworker", 5, VanillaItemID.saddle, {id: VanillaItemID.emerald, count: 6});

    TradingRecipe.add("Librarian", 1, VanillaItemID.emerald, {id: VanillaItemID.paper, count: 24});
    TradingRecipe.add("Librarian", 1, VanillaBlockID.bookshelf, {id: VanillaItemID.emerald, count: 9});
    TradingRecipe.add("Librarian", 1, {id: VanillaItemID.book, enc: true}, {id: VanillaItemID.emerald, count: 64}, VanillaItemID.book);
    TradingRecipe.add("Librarian", 2, VanillaItemID.emerald, {id: VanillaItemID.book, count: 4});
    TradingRecipe.add("Librarian", 2, VanillaBlockID.lantern, VanillaItemID.emerald);
    TradingRecipe.add("Librarian", 2, {id: VanillaItemID.book, enc: true}, {id: VanillaItemID.emerald, count: 64}, VanillaItemID.book);
    TradingRecipe.add("Librarian", 3, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 5});
    TradingRecipe.add("Librarian", 3, {id: VanillaBlockID.glass, count: 4}, VanillaItemID.emerald);
    TradingRecipe.add("Librarian", 3, {id: VanillaItemID.book, enc: true}, {id: VanillaItemID.emerald, count: 64}, VanillaItemID.book);
    TradingRecipe.add("Librarian", 4, VanillaItemID.emerald, VanillaItemID.writable_book);
    TradingRecipe.add("Librarian", 4, VanillaItemID.compass, {id: VanillaItemID.emerald, count: 4});
    TradingRecipe.add("Librarian", 4, VanillaItemID.clock, {id: VanillaItemID.emerald, count: 5});
    TradingRecipe.add("Librarian", 4, {id: VanillaItemID.book, enc: true}, {id: VanillaItemID.emerald, count: 64}, VanillaItemID.book);
    TradingRecipe.add("Librarian", 5, VanillaItemID.name_tag, {id: VanillaItemID.emerald, count: 20});

    TradingRecipe.add("Mason", 1, VanillaItemID.emerald, {id: VanillaItemID.clay_ball, count: 10});
    TradingRecipe.add("Mason", 1, {id: VanillaItemID.brick, count: 10}, VanillaItemID.emerald);
    TradingRecipe.add("Mason", 2, VanillaItemID.emerald, {id: VanillaBlockID.stone, count: 20});
    TradingRecipe.add("Mason", 2, {id: VanillaBlockID.stonebrick, count: 4, data: 3}, VanillaItemID.emerald);
    TradingRecipe.add("Mason", 4, VanillaItemID.emerald, {id: VanillaItemID.quartz, count: 12});
    TradingRecipe.add("Mason", 5, VanillaBlockID.quartz_block, VanillaItemID.emerald);
    TradingRecipe.add("Mason", 5, {id: VanillaBlockID.quartz_block, data: 2}, VanillaItemID.emerald);
    for(let i = 1; i <= 5; i += 2){
        TradingRecipe.add("Mason", 3, VanillaItemID.emerald, {id: VanillaItemID.stone, count: 16, data: i});
        TradingRecipe.add("Mason", 3, {id: VanillaBlockID.stone, count: 4, data: i}, VanillaItemID.emerald);
    }
    const colors = [
        "purple",
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ];
    for(let i = 0; i < 16; i++){
        TradingRecipe.add("Mason", 4, {id: VanillaBlockID.stained_hardened_clay, data: i}, VanillaItemID.emerald);
        TradingRecipe.add("Mason", 4, VanillaBlockID[colors[i] + "_glazed_terracotta"], VanillaItemID.emerald);
    }

    TradingRecipe.add("Shepherd", 1, VanillaItemID.emerald, {id: VanillaBlockID.wool, count: 18});
    TradingRecipe.add("Shepherd", 1, VanillaItemID.emerald, {id: VanillaBlockID.wool, count: 18, data: 7});
    TradingRecipe.add("Shepherd", 1, VanillaItemID.emerald, {id: VanillaBlockID.wool, count: 18, data: 12});
    TradingRecipe.add("Shepherd", 1, VanillaItemID.emerald, {id: VanillaBlockID.wool, count: 18, data: 15});
    TradingRecipe.add("Shepherd", 1, VanillaItemID.shears, {id: VanillaItemID.emerald, count: 2});
    TradingRecipe.add("Shepherd", 2, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 8});
    TradingRecipe.add("Shepherd", 2, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 10});
    TradingRecipe.add("Shepherd", 2, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 12});
    TradingRecipe.add("Shepherd", 2, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 16});
    TradingRecipe.add("Shepherd", 2, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 19});
    TradingRecipe.add("Shepherd", 3, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 1});
    TradingRecipe.add("Shepherd", 3, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 7});
    TradingRecipe.add("Shepherd", 3, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 9});
    TradingRecipe.add("Shepherd", 3, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 11});
    TradingRecipe.add("Shepherd", 3, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 14});
    TradingRecipe.add("Shepherd", 4, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 2});
    TradingRecipe.add("Shepherd", 4, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 5});
    TradingRecipe.add("Shepherd", 4, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 6});
    TradingRecipe.add("Shepherd", 4, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 13});
    TradingRecipe.add("Shepherd", 4, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 17});
    TradingRecipe.add("Shepherd", 4, VanillaItemID.emerald, {id: VanillaItemID.dye, count: 12, data: 18});
    TradingRecipe.add("Shepherd", 5, {id: VanillaItemID.painting, count: 3}, {id: VanillaItemID.emerald, count: 2});
    for(let i = 0; i < 16; i++){
        TradingRecipe.add("Shepherd", 2, {id: VanillaBlockID.wool, data: i}, VanillaItemID.emerald);
        TradingRecipe.add("Shepherd", 2, {id: VanillaBlockID.carpet, count: 4, data: i}, VanillaItemID.emerald);
        TradingRecipe.add("Shepherd", 3, {id: VanillaBlockID.bed, data: i}, {id: VanillaItemID.emerald, count: 3});
        TradingRecipe.add("Shepherd", 4, {id: VanillaItemID.banner, data: i}, {id: VanillaItemID.emerald, count: 3});
    }

    TradingRecipe.add("Toolsmith", 1, VanillaItemID.emerald, {id: VanillaItemID.coal, count: 5});
    TradingRecipe.add("Toolsmith", 1, VanillaItemID.stone_axe, VanillaItemID.emerald);
    TradingRecipe.add("Toolsmith", 1, VanillaItemID.stone_pickaxe, VanillaItemID.emerald);
    TradingRecipe.add("Toolsmith", 1, VanillaItemID.stone_shovel, VanillaItemID.emerald);
    TradingRecipe.add("Toolsmith", 1, VanillaItemID.stone_hoe, VanillaItemID.emerald);
    TradingRecipe.add("Toolsmith", 2, VanillaItemID.emerald, {id: VanillaItemID.iron_ingot, count: 4});
    TradingRecipe.add("Toolsmith", 2, VanillaBlockID.bell, {id: VanillaItemID.emerald, count: 36});
    TradingRecipe.add("Toolsmith", 3, VanillaItemID.emerald, {id: VanillaItemID.flint, count: 30});
    TradingRecipe.add("Toolsmith", 3, {id: VanillaItemID.iron_axe, enc: true}, {id: VanillaItemID.emerald, count: 20});
    TradingRecipe.add("Toolsmith", 3, {id: VanillaItemID.iron_pickaxe, enc: true}, {id: VanillaItemID.emerald, count: 21});
    TradingRecipe.add("Toolsmith", 3, {id: VanillaItemID.iron_shovel, enc: true}, {id: VanillaItemID.emerald, count: 22});
    TradingRecipe.add("Toolsmith", 3, VanillaItemID.diamond_hoe, {id: VanillaItemID.emerald, count: 4});
    TradingRecipe.add("Toolsmith", 4, VanillaItemID.emerald, VanillaItemID.diamond);
    TradingRecipe.add("Toolsmith", 4, {id: VanillaItemID.diamond_axe, enc: true}, {id: VanillaItemID.emerald, count: 31});
    TradingRecipe.add("Toolsmith", 4, {id: VanillaItemID.diamond_shovel, enc: true}, {id: VanillaItemID.emerald, count: 24});
    TradingRecipe.add("Toolsmith", 5, {id: VanillaItemID.diamond_pickaxe, enc: true}, {id: VanillaItemID.emerald, count: 32});

    TradingRecipe.add("Weaponsmith", 1, VanillaItemID.emerald, {id: VanillaItemID.coal, count: 15});
    TradingRecipe.add("Weaponsmith", 1, VanillaItemID.iron_axe, {id: VanillaItemID.emerald, count: 3});
    TradingRecipe.add("Weaponsmith", 2, VanillaItemID.emerald, {id: VanillaItemID.iron_ingot, count: 4});
    TradingRecipe.add("Weaponsmith", 2, {id: VanillaItemID.iron_sword, enc: true}, {id: VanillaItemID.emerald, count: 21});
    TradingRecipe.add("Weaponsmith", 3, VanillaItemID.emerald, {id: VanillaItemID.flint, count: 24});
    TradingRecipe.add("Weaponsmith", 3, VanillaBlockID.bell, {id: VanillaItemID.emerald, count: 36});
    TradingRecipe.add("Weaponsmith", 4, VanillaItemID.emerald, VanillaItemID.diamond);
    TradingRecipe.add("Weaponsmith", 4, {id: VanillaItemID.diamond_axe, enc: true}, {id: VanillaItemID.emerald, count: 31});
    TradingRecipe.add("Weaponsmith", 5, {id: VanillaItemID.diamond_sword, enc: true}, {id: VanillaItemID.emerald, count: 27});

    TradingRecipe.addWandering(1, {id: VanillaBlockID.grass, data: 2});
    TradingRecipe.addWandering(1, VanillaBlockID.vine);
    TradingRecipe.addWandering(1, VanillaBlockID.yellow_flower);
    for(let i = 0; i < 11; i++){
        TradingRecipe.addWandering(1, {id: VanillaBlockID.red_flower, data: i});
    }
    TradingRecipe.addWandering(1, {id: VanillaBlockID.double_plant, data: 0});
    TradingRecipe.addWandering(1, {id: VanillaBlockID.double_plant, data: 1});
    TradingRecipe.addWandering(1, {id: VanillaBlockID.double_plant, data: 4});
    TradingRecipe.addWandering(1, {id: VanillaBlockID.double_plant, data: 5});
    TradingRecipe.addWandering(1, VanillaItemID.wheat_seeds);
    TradingRecipe.addWandering(1, VanillaItemID.beetroot_seeds);
    TradingRecipe.addWandering(1, VanillaItemID.pumpkin_seeds);
    TradingRecipe.addWandering(1, VanillaItemID.melon_seeds);
    for(let i = 0; i < 16; i++){
        TradingRecipe.addWandering(1, {id: VanillaItemID.dye, count: 3, data: i});
    }
    TradingRecipe.addWandering(1, VanillaBlockID.brown_mushroom);
    TradingRecipe.addWandering(1, VanillaBlockID.red_mushroom);
    TradingRecipe.addWandering(1, VanillaBlockID.reeds);
    TradingRecipe.addWandering(1, {id: VanillaBlockID.sand, count: 8});
    TradingRecipe.addWandering(1, {id: VanillaBlockID.sand, count: 4, data: 1});
    TradingRecipe.addWandering(1, {id: VanillaBlockID.waterlily, count: 2});
    TradingRecipe.addWandering(1, VanillaBlockID.pumpkin);
    TradingRecipe.addWandering(2, VanillaBlockID.sea_pickle);
    TradingRecipe.addWandering(2, VanillaItemID.glowstone_dust);
    TradingRecipe.addWandering(3, VanillaBlockID.kelp);
    TradingRecipe.addWandering(3, VanillaBlockID.cactus);
    for(let i = 0; i < 5; i++){
        TradingRecipe.addWandering(3, {id: VanillaBlockID.coral_block, data: i});
    }
    TradingRecipe.addWandering(4, VanillaItemID.slime_ball);
    for(let i = 0; i < 6; i++){
        TradingRecipe.addWandering(5, {id: VanillaBlockID.sapling, data: i});
    }
    TradingRecipe.addWandering(5, VanillaItemID.nautilus_shell);

    TradingRecipe.addWandering(1, VanillaItemID.gunpowder);
    TradingRecipe.addWandering(3, {id: VanillaBlockID.podzol, count: 3});
    TradingRecipe.addWandering(3, VanillaBlockID.packed_ice);
    TradingRecipe.addWandering(5, {id: VanillaItemID.bucket, data: 4});
    TradingRecipe.addWandering(5, {id: VanillaItemID.bucket, data: 5});
    TradingRecipe.addWandering(6, VanillaBlockID.blue_ice);

})();


RecipeViewer.registerRecipeType("trading", {
    title: "Villager Trading",
    contents: {
        icon: VanillaItemID.emerald,
        description: "trade",
        drawing: [
            {type: "bitmap", x: 506, y: 199, scale: 6, bitmap: "bar_trading"}
        ],
        elements: {
            input0: {x: 250, y: 190, size: 120},
            input1: {x: 370, y: 190, size: 120},
            output0: {x: 630, y: 190, size: 120},
            text1: {type: "text", x: 500, y: 330, font: {size: 40, color: Color.WHITE, shadow: 0.5, alignment: 1}},
            text2: {type: "text", x: 630, y: 140, font: {size: 30, color: Color.GREEN, shadow: 0.5}}
        }
    },
    recipeList: TradingRecipe.recipes,
    onOpen: function(elements, recipe){
        elements.get("text1").onBindingUpdated("text", recipe.level ? "Level " + recipe.level + "  -  " + recipe.job : recipe.job);
        elements.get("text2").onBindingUpdated("text", recipe.isEnchanted ? "Enchanted" : "");
    }
});

RecipeViewer.putButtonOnNativeGui("trade_screen", "trading");




// file: footer.js

ModAPI.registerAPI("RecipeViewer", {
	Core: RecipeViewer
});




