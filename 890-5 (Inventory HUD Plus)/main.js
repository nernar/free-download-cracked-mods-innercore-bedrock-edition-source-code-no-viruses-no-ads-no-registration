/*
BUILD INFO:
  dir: assets/dev
  target: main.js
  files: 6
*/



// file: header.js

/// <reference path='../declarations/core-engine.d.ts'/>
/// <reference path='../declarations/Retention.d.ts'/>
/// <reference path='../declarations/ScriptableNBT.d.ts'/>
/// <reference path='../declarations/VanillaSlots.d.ts'/>
/// <reference path='./share.js'/>

const IsNewVersion = getMCPEVersion().array[1] >= 16
const Settings = {
    /** @readonly */
    clientOnly: __config__.getBool('clientOnly'),
    /** @readonly */
    stableMode: __config__.getBool('stableMode'),
    /** @readonly */
    opacity: Math.min(Math.max(__config__.getFloat('opacity'), 0.1), 1),
    sortId: String(__config__.getString('sortId')),
    information: {
        alwaysOpen: __config__.getBool('information.alwaysOpen'),
        x: __config__.getInteger('information.x'),
        y: __config__.getInteger('information.y'),
        width: __config__.getInteger('information.width')
    },
    inventory: {
        x: __config__.getInteger('inventory.x'),
        y: __config__.getInteger('inventory.y'),
        width: __config__.getInteger('inventory.width')
    }
}

IMPORT('Retention:5')
IMPORT('ScriptableNBT:2')

if (getContext()) IMPORT('RuntimeConfig:3')
if (!Settings.clientOnly) IMPORT('VanillaSlots:4')

/** @type { android.graphics.Color | {} } */
const Color = getContext() ? android.graphics.Color : {}

const Utils = {
    /**
     * @param { string } message 
     * @param { Object } option 
     * @param { boolean = } option.log 
     * @param { boolean = } option.alert 
     * @param { boolean = } option.message 
     */
    debug (message, option) {
        if (option.log) Logger.Log(message, 'DEBUG')
        if (option.alert) alert(message)
        if (option.message) Game.message(message)
    },
    /** @type { <T extends any[], RT = any, TT = any>(func: (this: TT, ...args: T) => RT, delay: number, func2?: Nullable<(this: TT, ...args: T) => RT>, ths?: TT) => (...args: T) => RT } */
    debounce (func, delay, func2, ths) {
        if (typeof func !== 'function') return func
        if (typeof delay !== 'number' || isNaN(delay)) return func
        let time = 0
        return function () {
            let now = Date.now()
            if (now >= time) {
                time = now + delay
                return func.apply(ths, arguments)
            } else if (typeof func2 === 'function') {
                return func2.apply(ths, arguments)
            }
        }
    },
    /**
     * @param { string } screenName 
     * @returns { boolean }
     */
    isHUDScreen (screenName) {
        if (screenName === 'in_game_play_screen') return true
        if (screenName === 'hud_screen') return true
        return false
    },
    /**
     * @typedef { {
     *     setItem: (item: Nullable<ItemInstance>) => void
     *     setText: (text: string, color?: number) => void
     * } } SlotWithTextElement
     * @param { UI.ElementSet } elements 
     * @param { string } name 
     * @param { [x: number, y: number, size: number, bitmap?: string] } params 
     * @returns { SlotWithTextElement }
     */
    createSlotWithTextElement (elements, name, params) {
        elements[name + '_slot'] = {
            type: 'slot', visual: true, isDarkenAtZero: false,
            x: params[0], y: params[1], z: 1,
            size: params[2], bitmap: params[3] || 'clear',
            source: { id: 0, count: 0, data: 0 }
        }
        elements[name + '_text'] = {
            type: 'text',
            x: params[0] + 0.8 * params[2], y: params[1] + 0.55 * params[2], z: 2,
            font: { color: Color.WHITE, size: 0.25 * params[2], align: 2, shadow: 0.2 },
            text: ''
        }
        return {
            setItem (item) {
                if (!item) item = { id: 0, count: 0, data: 0 }
                if (elements[name + '_slot']) elements[name + '_slot'].source = item
                if (elements[name + '_text']) elements[name + '_text'].text = ''
            },
            setText (text, color) {
                if (color === void 0) color = Color.WHITE
                if (elements[name + '_slot'] && elements[name + '_slot'].source) elements[name + '_slot'].source.count = 1
                if (elements[name + '_text']) {
                    elements[name + '_text'].text = String(text)
                    elements[name + '_text'].font.color = color
                }
            }
        }
    },
    /**
     * @param { string } name 
     * @param { number } alpha [0, 255]
     * @returns { string }
     */
    cloneTextureWithAlpha (name, alpha) {
        if (!getContext()) return 'missing_texture'
        let bitmap = UI.TextureSource.getNullable(name)
        if (bitmap == null) return 'missing_texture'
        let targetBitmap = android.graphics.Bitmap.createBitmap(
            bitmap.getWidth(),
            bitmap.getHeight(),
            android.graphics.Bitmap.Config.ARGB_8888
        )
        let canvas = new android.graphics.Canvas(targetBitmap)
        let paint = new android.graphics.Paint()
        paint.setAlpha(alpha)
        canvas.drawBitmap(bitmap, 0, 0, paint)
        let newName = name + '-alpha=' + alpha
        UI.TextureSource.put(newName, targetBitmap)
        return newName
    },
    /**
     * @param { string } overlayName 
     * @param { string } backgroundName 
     * @param { { x?: number, y?: number, width?: number, height?: number, times?: number } = } params 
     * @returns { string }
     */
    mixTexture (overlayName, backgroundName, params) {
        if (!getContext()) return 'missing_texture'
        let overlay = UI.TextureSource.getNullable(overlayName)
        let background = UI.TextureSource.getNullable(backgroundName)
        if (!overlay && !background) return 'missing_texture'
        if (!overlay) return backgroundName
        if (!background) return overlayName
        if (!params) params = {}
        if (!params.x) params.x = 0
        if (!params.y) params.y = 0
        if (!params.width) params.width = 1
        if (!params.height) params.height = 1
        if (!params.times) params.times = 1
        let width = background.getWidth() * params.times
        let height = background.getHeight() * params.times
        if (params.x < 1) params.x *= width
        if (params.y < 1) params.y *= height
        if (params.width <= 1) params.width *= width
        if (params.height <= 1) params.height *= height
        let targetBitmap = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888)
        let canvas = new android.graphics.Canvas(targetBitmap)
        canvas.drawBitmap(background, null, new android.graphics.RectF(0, 0, width, height), null)
        canvas.drawBitmap(overlay, null, new android.graphics.RectF(params.x, params.y, params.x + params.width, params.y + params.height), null)
        let newName = 'mix-' + overlayName + '-' + backgroundName + '-' + Math.floor(Math.random() * 1e5)
        UI.TextureSource.put(newName, targetBitmap)
        return newName
    },
    /**
     * @param { number = } player 
     * @returns { Array<Nullable<NBTItem>> }
     */
    getInventory (player) {
        let compoundTag = Entity.getCompoundTag(player || Player.get())
        let result = []
        let inventoryNBT = compoundTag.getListTagNoClone('Inventory')
        for (let slot = 0; slot < 36; ++slot) {
            try {
                let itemNBT = inventoryNBT && inventoryNBT.getCompoundTag(slot)
                result[slot] = {
                    ic: player ? new PlayerActor(player).getInventorySlot(slot) : Player.getInventorySlot(slot),
                    nbt: new ScriptableNBT.NBTCompoundValue(itemNBT)
                }
            } catch (err) {
                result[slot] = null
            }
        }
        return result
    },
    /**
     * @typedef { { ic: ItemInstance, nbt: ScriptableNBT.NBTCompoundValue } } NBTItem 
     * @param { number } slot 
     * @param { number = } player 
     * @returns { Nullable<NBTItem> }
     */
    getInventorySlot (slot, player) {
        slot |= 0
        if (!(0 <= slot && slot < 36)) return null
        try {
            return {
                ic: player ? new PlayerActor(player).getInventorySlot(slot) : Player.getInventorySlot(slot),
                nbt: ScriptableNBT.NBTValueFactory.getTagValue(Entity.getCompoundTag(player || Player.get()), 'Inventory', slot)
                    || new ScriptableNBT.NBTCompoundValue()
            }
        } catch (err) {
            return null
        }
    },
    /**
     * Attention that we only modified the count
     * @param { number } slot 
     * @param { number } player 
     * @param { Nullable<NBTItem> } nbtItem 
     */
    setInventorySlot (slot, player, nbtItem) {
        slot |= 0
        if (!(0 <= slot && slot < 36)) return
        if (!player) return
        try {
            if (nbtItem && nbtItem.ic) {
                if (Settings.stableMode || true) {
                    let item = nbtItem.ic
                    let maxDamage = Item.getMaxDamage(item.id)
                    if (maxDamage) item.data = this.getDamage(nbtItem)
                    new PlayerActor(player).setInventorySlot(slot, item.id, item.count, item.data, item.extra)
                } else {
                    // there are bugs in this part
                    // if (nbtItem.ic.count !== nbtItem.nbt.value['Count'].value) {
                    //     nbtItem.nbt.value['Count'].value = nbtItem.ic.count
                    // }
                    // nbtItem.nbt.value['Slot'] = new ScriptableNBT.NBTByteValue(slot)
                    // let compoundTag = Entity.getCompoundTag(player)
                    // let inventoryNBT = compoundTag.getListTagNoClone('Inventory')
                    // inventoryNBT.putCompoundTag(slot, nbtItem.nbt.compoundTag)
                    // Entity.setCompoundTag(player, compoundTag)
                }
            } else {
                new PlayerActor(player).setInventorySlot(slot, 0, 0, 0, null)
            }
        } catch (err) {
            return
        }
    },
    /**
     * @param { number = } player 
     * @returns { Nullable<NBTItem> }
     */
    getCarriedItem (player) {
        let slot = player ? new PlayerActor(player).getSelectedSlot() : Player.getSelectedSlotId()
        return this.getInventorySlot(slot, player)
    },
    /**
     * @param { number = } player 
     * @returns { Nullable<NBTItem> }
     */
    getOffhandItem (player) {
        if (typeof Entity.getOffhandItem !== 'function') return null
        try {
            if (!player) player = Player.get()
            return {
                ic:  Entity.getOffhandItem(player),
                nbt: ScriptableNBT.NBTValueFactory.getTagValue(Entity.getCompoundTag(player), 'Offhand', 0)
                    || new ScriptableNBT.NBTCompoundValue()
            }
        } catch (err) {
            return null
        }
    },
    /**
     * @param { number } slot 
     * @param { number = } player 
     * @returns { Nullable<NBTItem> }
     */
    getArmorSlot (slot, player) {
        slot |= 0
        if (!(0 <= slot && slot < 4)) return null
        try {
            if (!player) player = Player.get()
            return {
                ic: Entity.getArmorSlot(player, slot),
                nbt: ScriptableNBT.NBTValueFactory.getTagValue(Entity.getCompoundTag(player), 'Armor', slot)
                    || new ScriptableNBT.NBTCompoundValue()
            }
        } catch (err) {
            return null
        }
    },
    /**
     * @param { Nullable<ItemExtraData> | undefined } extra1 
     * @param { Nullable<ItemExtraData> | undefined } extra2 
     * @returns { boolean } 
     */
    isExtraEqual (extra1, extra2) {
        let empty1 = !extra1 || extra1.isEmpty()
        let empty2 = !extra2 || extra2.isEmpty()
        if (empty1 && empty2) return true
        if (empty1 || empty2) return false
        return extra1.equals(extra2)
    },
    /**
     * @param { Nullable<NBTItem> } item1 
     * @param { Nullable<NBTItem> } item2 
     */
    isItemStackable (item1, item2) {
        if (!item1 || !item1.ic || !item2 || !item2.ic) {
            let empty1 = !item1 || !item1.ic
            let empty2 = !item2 || !item2.ic
            return empty1 === empty2
        }
        if (item1.ic.id !== item2.ic.id || item1.ic.data !== item2.ic.data) return false
        if (Item.getMaxStack(item1.ic.id) === 1) return false
        if (!this.isExtraEqual(item1.ic.extra, item2.ic.extra)) return false
        return true
    },
    /**
     * @param { NBTItem } nbtItem 
     * @returns { number }
     */
    getDamage (nbtItem) {
        let damage = nbtItem.ic.data
        if (IsNewVersion && Item.isNativeItem(nbtItem.ic.id)) {
            /** @type { Nullable<ScriptableNBT.NBTCompoundValue> } */
            let tag = nbtItem.nbt.get('tag')
            let damageNBT = tag && tag.get('Damage')
            let value = damageNBT && damageNBT.value
            if (typeof value === 'number') {
                damage = Math.max(damage, value)
            }
        }
        return damage
    },
    /**
     * @param { Array<Nullable<NBTItem>> } inventory 
     * @returns { {[idData: `${number}:${number}`]: number} }
     */
    getSortInventory (inventory) {
        let sortInventory = {}
        inventory.forEach(function (nbtItem) {
            if (!nbtItem) return
            let item = nbtItem.ic
            if (!item || item.id === 0) return
            if (sortInventory[item.id + ':' + item.data]) {
                sortInventory[item.id + ':' + item.data] += item.count
                if (item.data !== -1) sortInventory[item.id + ':-1'] += item.count
            } else {
                sortInventory[item.id + ':' + item.data] = item.count
                sortInventory[item.id + ':-1'] = item.count
            }
        })
        return sortInventory
    },
    /**
     * @param { Array<Nullable<NBTItem>> } inventory 
     * @returns { Array<NBTItem> }
     */
    reduceInventory (inventory) {
        let that  = this
        /** @type { {[idData: `${number}:${number}`]: NBTItem[]} } */
        let inventoryObj = {}
        inventory.forEach(function (nbtItem) {
            if (!nbtItem) return
            let item = nbtItem.ic
            if (!item || item.id === 0) return
            /** @type { `${number}:${number}` } */
            let key = item.id + ':' + item.data
            if (!inventoryObj[key]) inventoryObj[key] = []
            let fail = inventoryObj[key].every(function (tNBTItem) {
                if (!that.isItemStackable(nbtItem, tNBTItem)) return true
                tNBTItem.ic.count += nbtItem.ic.count
                return false
            })
            if (fail) inventoryObj[key].push(nbtItem)
        })
        /** @type { Array<NBTItem> } */
        let ret = []
        for (let key in inventoryObj) {
            /** @type { Array<NBTItem> } */
            let itemList = inventoryObj[key]
            itemList.forEach(function (nbtItem) {
                let item = nbtItem.ic
                let maxStack = Item.getMaxStack(item.id)
                let count = item.count
                while (count > 0) {
                    let deltaCount = Math.min(count, maxStack)
                    let snbt = new ScriptableNBT.NBTCompoundValue(nbtItem.nbt.compoundTag)
                    snbt.value['Count'].value = deltaCount
                    ret.push({
                        ic: {
                            id: item.id,
                            count: deltaCount,
                            data: item.data,
                            extra: item.extra
                        },
                        nbt: snbt
                    })
                    count -= deltaCount
                }
            })
        }
        return ret
    },
    /** @readonly */
    defaultSortId: 'asc(id)',
    /** @type { {[sortId: string]: (a: NBTItem, b: NBTItem) => number} } */
    sortingFn: {},
    /**
     * @param { string } sortId 
     * @param { (a: NBTItem, b: NBTItem) => number } compareFn 
     */
    addSortingFn (sortId, compareFn) {
        if (typeof sortId !== 'string') return
        if (typeof compareFn !== 'function') return
        this.sortingFn[sortId] = compareFn
    },
    /**
     * @returns { Array<string> }
     */
    getSortIdList () {
        let ret = []
        for (let sortId in this.sortingFn) {
            if (typeof this.sortingFn[sortId] === 'function') {
                ret.push(sortId)
            }
        }
        return ret
    },
    /**
     * @param { string } sortId 
     * @returns { (a: NBTItem, b: NBTItem) => number }
     */
    getSortingFn (sortId) {
        if (typeof sortId !== 'string') return this.sortingFn[this.defaultSortId]
        if (typeof this.sortingFn[sortId] !== 'function') return this.sortingFn[this.defaultSortId]
        return this.sortingFn[sortId]
    }
}

Utils.addSortingFn(Utils.defaultSortId, function (a, b) {
    if (a.ic.id !== b.ic.id) return a.ic.id - b.ic.id
    if (a.ic.data !== b.ic.data) return a.ic.data - b.ic.data
    return b.ic.count - a.ic.count
})

Utils.addSortingFn('desc(id)', function (a, b) {
    if (a.ic.id !== b.ic.id) return b.ic.id - a.ic.id
    if (a.ic.data !== b.ic.data) return a.ic.data - b.ic.data
    return b.ic.count - a.ic.count
})




// file: translation.js

/// <reference path='./header.js'/>

Translation.addTranslation('Cancel', { 'en': 'Cancel', 'zh': '取消', "ru": "Отмена"})
Translation.addTranslation('Apply', { 'en': 'Apply', 'zh': '应用', "ru": "Применить"})
Translation.addTranslation('ihp:Settings', { 'en': 'Settings', 'zh': '设置', "ru": "Настройки"})
Translation.addTranslation('ihp:sort order', { 'en': 'sort order', 'zh': '排序顺序', "ru": "порядок сортировки"})
Translation.addTranslation('ihp:Information GUI', { 'en': 'Information GUI', 'zh': '信息GUI', "ru": "Меню с экипировкой"})
Translation.addTranslation('ihp:always open', { 'en': 'always open', 'zh': '经常打开', "ru": "Незакрываемое меню"})
Translation.addTranslation('ihp:x position', { 'en': 'x position', 'zh': 'X位置', "ru": "позиция по оси X"})
Translation.addTranslation('ihp:y position', { 'en': 'y position', 'zh': 'Y位置', "ru": "позиция по оси Y"})
Translation.addTranslation('ihp:width', { 'en': 'width', 'zh': '宽度', "ru": "ширина"})
Translation.addTranslation('ihp:Inventory GUI', { 'en': 'Inventory GUI', 'zh': '物品栏GUI', "ru": "интрефейс инвентаря"})




// file: SettingsGUI.js

/// <reference path='./translation.js'/>

const SettingsGUI = (function () {
    const ScreenHeight = UI.getScreenHeight()
    let tempSettings = {
        'sortId': Settings.sortId,
        'information.alwaysOpen': Settings.information.alwaysOpen,
        'information.x': Settings.information.x,
        'information.y': Settings.information.y,
        'information.width': Settings.information.width,
        'inventory.x': Settings.inventory.x,
        'inventory.y': Settings.inventory.y,
        'inventory.width': Settings.inventory.width
    }

    /**
     * @param { keyof typeof tempSettings } key 
     * @returns { boolean } true if [[Settings]] is changed
     */
    function updateSettingsOfKey(key) {
        let value = tempSettings[key]
        let keys = key.split('.')
        if (keys.length === 1) {
            let key0 = keys[0]
            if (Settings[key0] === value) return false
            Settings[key0] = value
            __config__.set(key, value)
        } else if (keys.length === 2) {
            let key0 = keys[0], key1 = keys[1]
            if (Settings[key0][key1] === value) return false
            Settings[key0][key1] = value
            __config__.set(key, value)
        }
        return true
    }

    function updateSettings() {
        updateSettingsOfKey('sortId')
        updateSettingsOfKey('information.alwaysOpen')
        {
            tempSettings['information.width'] = Math.round(tempSettings['information.width'])
            tempSettings['information.x'] = Math.round(tempSettings['information.x'])
            tempSettings['information.y'] = Math.round(tempSettings['information.y'])
            if (tempSettings['information.width'] * 2 > ScreenHeight) {
                tempSettings['information.width'] = Math.floor(ScreenHeight / 2)
            }
            if (tempSettings['information.x'] + tempSettings['information.width'] > 1000) {
                tempSettings['information.x'] = 1000 - tempSettings['information.width']
            }
            if (tempSettings['information.y'] + tempSettings['information.width'] * 2 > ScreenHeight) {
                tempSettings['information.y'] = Math.ceil(ScreenHeight - tempSettings['information.width'] * 2)
            }
            let changed = false
            if (updateSettingsOfKey('information.x')) {
                InfoGUI.getLocation().x = tempSettings['information.x']
                changed = true
            }
            if (updateSettingsOfKey('information.y')) {
                InfoGUI.getLocation().y = tempSettings['information.y']
                changed = true
            }
            if (updateSettingsOfKey('information.width')) {
                let location = InfoGUI.getLocation()
                location.scrollX = location.width = tempSettings['information.width']
                location.scrollY = location.height = tempSettings['information.width'] * 2
                changed = true
            }
            if (changed) {
                if (InfoGUI.isOpened()) InfoGUI.updateWindowLocation()
                InfoGUI.getContentProvider().refreshDrawing()
                InfoGUI.getContentProvider().refreshElements()
                InfoGUI.getElementProvider().invalidateAll()
                InfoGUI.forceRefresh()
            }
        }
        {
            tempSettings['inventory.width'] = Math.round(tempSettings['inventory.width'])
            tempSettings['inventory.x'] = Math.round(tempSettings['inventory.x'])
            tempSettings['inventory.y'] = Math.round(tempSettings['inventory.y'])
            if (tempSettings['inventory.width'] * (200 / 320) > ScreenHeight) {
                tempSettings['inventory.width'] = Math.floor(ScreenHeight / (200 / 320))
            }
            if (tempSettings['inventory.x'] + tempSettings['inventory.width'] > 1000) {
                tempSettings['inventory.x'] = 1000 - tempSettings['inventory.width']
            }
            if (tempSettings['inventory.y'] + tempSettings['inventory.width'] * (200 / 320) > ScreenHeight) {
                tempSettings['inventory.y'] = Math.ceil(ScreenHeight - tempSettings['inventory.width'] * (200 / 320))
            }
            let changed = false
            if (updateSettingsOfKey('inventory.x')) {
                InventoryGUI.ui.getLocation().x = tempSettings['inventory.x']
                changed = true
            }
            if (updateSettingsOfKey('inventory.y')) {
                InventoryGUI.ui.getLocation().y = tempSettings['inventory.y']
                changed = true
            }
            if (updateSettingsOfKey('inventory.width')) {
                let location = InventoryGUI.ui.getLocation()
                location.scrollX = location.width = tempSettings['inventory.width']
                location.scrollY = location.height = tempSettings['inventory.width'] * (200 / 320)
                changed = true
            }
            if (changed) {
                if (InventoryGUI.ui.isOpened()) InventoryGUI.ui.updateWindowLocation()
                InventoryGUI.ui.getContentProvider().refreshDrawing()
                InventoryGUI.ui.getContentProvider().refreshElements()
                InventoryGUI.ui.getElementProvider().invalidateAll()
                InventoryGUI.ui.forceRefresh()
            }
        }
        __config__.save()
    }

    Callback.addCallback('PostLoaded', function () {
        updateSettings()
    })

    function getArguments() {
        return [
            'ihp:Settings', 'Apply',
            ['keyValue', 'multipleChoice', 'ihp:sort order', 'sortId', Utils.getSortIdList()],
            ['sectionDivider', 'ihp:Information GUI'],
            ['checkBox', 'information.alwaysOpen', 'ihp:always open'],
            ['keyValue', 'slider', 'ihp:x position', 'information.x', 0, 1000, 1, ''],
            ['keyValue', 'slider', 'ihp:y position', 'information.y', 0, Math.ceil(ScreenHeight), 1, ''],
            ['keyValue', 'slider', 'ihp:width', 'information.width', 10, 200, 1, ''],
            ['sectionDivider', 'ihp:Inventory GUI'],
            ['keyValue', 'slider', 'ihp:x position', 'inventory.x', 0, 1000, 1, ''],
            ['keyValue', 'slider', 'ihp:y position', 'inventory.y', 0, Math.ceil(ScreenHeight), 1, ''],
            ['keyValue', 'slider', 'ihp:width', 'inventory.width', 100, 800, 1, '']
        ]
    }

    return {
        openSettings: function () {
            if (getContext()) showConfig(getArguments(), tempSettings, updateSettings)
        }
    }
})()




// file: InfoGUI.js

/// <reference path='./SettingsGUI.js'/>

const InfoGUI = (function () {
    const ColorOrange = getContext() ? Color.rgb(255, 127, 0) : void 0
    /**
     * @param { SlotWithTextElement } element 
     * @param { Nullable<NBTItem> } nbtItem 
     */
    function setDamage(element, nbtItem) {
        if (!nbtItem || !nbtItem.ic || nbtItem.ic.id === 0) {
            element.setItem(null)
            return
        }
        let maxDamage = Item.getMaxDamage(nbtItem.ic.id)
        if (!maxDamage) return
        let damage = Utils.getDamage(nbtItem)
        nbtItem.ic.data = damage
        let percent = (maxDamage - damage) / Math.max(maxDamage, 10)
        let text = maxDamage - damage
        if (maxDamage >= 20 && percent >= 0.5) text = -damage
        if (String(text).length > 5) {
            let e = 0
            while (text <= -10 || text >= 10) text /= 10, ++e;
            text = String(text).substring(0, 3 + (text < 0 ? 1 : 0)) + 'e' + e
        }
        let color = Color.WHITE
        if (percent >= 0.7) color = Color.GREEN
        else if (percent >= 0.4) color = Color.CYAN
        else if (percent >= 0.2) color = Color.YELLOW
        else if (percent >= 0.1) color = ColorOrange
        else color = Color.RED
        element.setItem(nbtItem.ic)
        element.setText(String(text), color)
    }

    /**
     * @param { SlotWithTextElement } element 
     * @param { Nullable<NBTItem> } nbtItem 
     * @param { number } count 
     */
    function setCount(element, nbtItem, count) {
        if (!nbtItem || !nbtItem.ic || nbtItem.ic.id === 0) element.setItem(null)
        else if (Item.getMaxDamage(nbtItem.ic.id)) setDamage(element, nbtItem)
        else {
            let item = nbtItem.ic
            let itemCount = item.count
            if (!item.extra || item.extra.isEmpty()) {
                itemCount = Math.max(itemCount, count)
            }
            element.setItem({
                id: item.id,
                count: itemCount,
                data: item.data,
                extra: item.extra
            })
        }
    }

    const InfoGUI = new UI.Window({
        location: {
            x: Settings.information.x,
            y: Settings.information.y,
            width: Settings.information.width,
            height: Settings.information.width * 2
        },
        drawing: [
            { type: 'background', color: Color.TRANSPARENT }
        ],
        elements: {
            'more_btn': {
                type: 'image', bitmap: 'clear',
                x: 0, y: 1000, z: 1, width: 500, height: 500,
                clicker: {
                    onClick: Utils.debounce(function () {
                        if (InventoryGUI.isOpened()) InventoryGUI.close()
                        else InventoryGUI.open()
                    }, 200)
                }
            },
            'more_text': {
                type: 'text',
                x: 250, y: 1000, z: 2,
                font: { color: Color.WHITE, size: 300, align: 1 },
                text: 'H'
            },
            'settings': {
                type: 'image', bitmap: 'ihp_setting',
                x: 50, y: 1550, width: 400, height: 400,
                clicker: {
                    onClick: Utils.debounce(function () {
                        SettingsGUI.openSettings()
                    }, 500)
                }
            }
        }
    })
    InfoGUI.setAsGameOverlay(true)
    const elements = {
        'carried': Utils.createSlotWithTextElement(InfoGUI.content.elements, 'carried', [0, 0, 500]),
        'offhand': Utils.createSlotWithTextElement(InfoGUI.content.elements, 'offhand', [0, 500, 500]),
        'helmet': Utils.createSlotWithTextElement(InfoGUI.content.elements, 'helmet', [500, 0, 500]),
        'chestplate': Utils.createSlotWithTextElement(InfoGUI.content.elements, 'chestplate', [500, 500, 500]),
        'leggings': Utils.createSlotWithTextElement(InfoGUI.content.elements, 'leggings', [500, 1000, 500]),
        'boots': Utils.createSlotWithTextElement(InfoGUI.content.elements, 'boots', [500, 1500, 500])
    }

    Callback.addCallback('NativeGuiChanged', function (screenName) {
        let isHUDScreen = Utils.isHUDScreen(screenName)
        if (isHUDScreen === InfoGUI.isOpened()) return
        if (isHUDScreen) InfoGUI.open()
        else if (!Settings.information.alwaysOpen) InfoGUI.close()
    })

    Callback.addCallback('LevelLeft', function () {
        if (InfoGUI.isOpened()) InfoGUI.close()
        for (let name in elements) elements[name].setItem(null)
        InfoGUI.forceRefresh()
    })

    Callback.addCallback('LevelSelected', function () {
        for (let name in elements) elements[name].setItem(null)
        InfoGUI.forceRefresh()
    })

    let tick = 0
    Callback.addCallback('LocalTick', function () {
        if (++tick % 4 /* 0.1s */) return
        tick = 0
        let armor = [
            Utils.getArmorSlot(EArmorType.HELMET),
            Utils.getArmorSlot(EArmorType.CHESTPLATE),
            Utils.getArmorSlot(EArmorType.LEGGINGS),
            Utils.getArmorSlot(EArmorType.BOOTS),
        ]
        setDamage(elements['helmet'], armor[0])
        setDamage(elements['chestplate'], armor[1])
        setDamage(elements['leggings'], armor[2])
        setDamage(elements['boots'], armor[3])
        let carried = Utils.getCarriedItem()
        let offhand = Utils.getOffhandItem()
        let carriedItem = (carried && carried.ic) || { id: 0, count: 0, data: 0 }
        let offhandItem = (offhand && offhand.ic) || { id: 0, count: 0, data: 0 }
        let carriedCount = 0, offhandCount = offhandItem.id ? offhandItem.count : 0
        if (offhandItem.id && offhandItem.id === carriedItem.id && offhandItem.data === carriedItem.data) {
            carriedCount += offhandItem.count
        }
        armor.forEach(function (nbtItem) {
            if (!nbtItem || !nbtItem.ic || nbtItem.ic.id === 0) return
            if (nbtItem.ic.id === carriedItem.id && nbtItem.ic.data === carriedItem.data) {
                carriedCount += nbtItem.ic.count
            }
            if (nbtItem.ic.id === offhandItem.id && nbtItem.ic.data === offhandItem.data) {
                offhandCount += nbtItem.ic.count
            }
        })
        for (let slot = 0; slot < 36; ++slot) {
            let item = Player.getInventorySlot(slot)
            if (item.id === 0) continue
            if (item.id === carriedItem.id && item.data === carriedItem.data) {
                carriedCount += item.count
            }
            if (item.id === offhandItem.id && item.data === offhandItem.data) {
                offhandCount += item.count
            }
        }
        setCount(elements['carried'], carried, carriedCount)
        setCount(elements['offhand'], offhand, offhandCount)
        InfoGUI.forceRefresh()
    })

    return InfoGUI
})()




// file: InventoryGUI.js

/// <reference path='./InfoGUI.js'/>

const InventoryGUI = (function () {
    /**
     * @param { ItemContainer | UI.Container } container 
     * @param { string } name 
     * @param { ItemInstance } item 
     */
    function setContainerSlot(container, name, item) {
        container.setSlot(name, item.id, item.count, item.data, item.extra || null)
    }

    /**
     * @param { number } player 
     * @param { Nullable<ItemContainer | UI.Container> } container 
     */
    function updateSlots(player, container) {
        if (!container) return
        setContainerSlot(container, 'helmet', Entity.getArmorSlot(player, EArmorType.HELMET))
        setContainerSlot(container, 'chestplate', Entity.getArmorSlot(player, EArmorType.CHESTPLATE))
        setContainerSlot(container, 'leggings', Entity.getArmorSlot(player, EArmorType.LEGGINGS))
        setContainerSlot(container, 'boots', Entity.getArmorSlot(player, EArmorType.BOOTS))
        Entity.getOffhandItem && setContainerSlot(container, 'offhand', Entity.getOffhandItem(player))
        container.sendChanges()
    }

    /**
     * @param { UI.Window } ui 
     */
    function closeGUI(ui) {
        if (ui.isOpened()) {
            let container = ui.getContainer()
            if (container) container.close()
            else ui.close()
        }
    }

    let autoOpen = false
    const Transparecy = Math.floor(255 * Settings.opacity)
    const FrameAlpha = Utils.cloneTextureWithAlpha('classic_frame_bg_light', Transparecy)
    const SlotAlpha = Utils.cloneTextureWithAlpha('classic_slot', Transparecy)
    const ShieldSlotAlpha = Utils.cloneTextureWithAlpha(Utils.mixTexture('ihp_shield', 'classic_slot', { x: 0.1, y: 0.1, width: 0.8, height: 0.8, times: 5 }), Transparecy)
    const DeleleSlotAlpha = Utils.cloneTextureWithAlpha(Utils.mixTexture('ihp_delete', 'classic_slot', { x: 0.1, y: 0.1, width: 0.8, height: 0.8, times: 5 }), Transparecy)
    const SortAlpha = Utils.cloneTextureWithAlpha('ihp_sort', Transparecy)
    const LocalContainer = new UI.Container()
    const InventoryGUI = new UI.Window({
        location: {
            x: Settings.inventory.x,
            y: Settings.inventory.y,
            width: Settings.inventory.width,
            height: Settings.inventory.width * (200 / 320)
        },
        drawing: [
            { type: 'background', color: Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 625, bitmap: FrameAlpha, scale: 4 }
        ],
        elements: {
            'helmet': { type: 'slot', visual: true, x: 50, y: 42.5, size: 100, bitmap: SlotAlpha },
            'chestplate': { type: 'slot', visual: true, x: 150, y: 42.5, size: 100, bitmap: SlotAlpha },
            'leggings': { type: 'slot', visual: true, x: 250, y: 42.5, size: 100, bitmap: SlotAlpha },
            'boots': { type: 'slot', visual: true, x: 350, y: 42.5, size: 100, bitmap: SlotAlpha },
            'offhand': { type: 'slot', visual: true, x: 450, y: 42.5, size: 100, bitmap: ShieldSlotAlpha },
            'delete': { type: 'slot', x: 550, y: 42.5, size: 100, bitmap: DeleleSlotAlpha },
            'sort': {
                type: 'image',
                x: 660, y: 52.5,
                width: 80, height: 80,
                bitmap: SortAlpha,
                clicker: {
                    onClick: Utils.debounce(function () {
                        if (Settings.clientOnly) return
                        runOnClientThread(function () {
                            Network.sendToServer('IHP.sortInventory', {
                                sortId: Settings.sortId
                            })
                        })
                    }, 1000)
                }
            },
            'close': {
                type: 'image',
                x: 890, y: 22.5,
                width: 80, height: 80,
                bitmap: 'X',
                clicker: {
                    onClick: function () {
                        autoOpen = false
                        closeGUI(InventoryGUI)
                    }
                }
            }
        }
    })
    for (let index = 0; index < 36; ++index) {
        let x = 50 + 100 * (index % 9)
        let y = index < 9 ? 482.5 : 162.5 + 100 * Math.floor((index - 9) / 9)
        InventoryGUI.content.elements['slot_' + index] = {
            type: 'invSlot',
            x: x, y: y, size: 100,
            bitmap: SlotAlpha,
            index: index
        }
    }
    InventoryGUI.setAsGameOverlay(true)
    InventoryGUI.setInventoryNeeded(true)
    if (Settings.clientOnly) InventoryGUI.setTouchable(false)

    Callback.addCallback('NativeGuiChanged', function (screenName) {
        if (Utils.isHUDScreen(screenName)) {
            if (autoOpen && !InventoryGUI.isOpened()) {
                if (Settings.clientOnly) LocalContainer.openAs(InventoryGUI)
                else Network.sendToServer('IHP.InventoryGUI.open', {})
            }
        } else {
            closeGUI(InventoryGUI)
        }
    })

    if (Settings.clientOnly) {
        Callback.addCallback('LocalTick', function () {
            updateSlots(Player.get(), LocalContainer)
        })
    } else {
        /**
         * @param { ItemContainer } container 
         */
        let registerServerEventsForContainer = function (container) {
            container.addServerEventListener('InventorySlotToSlot', function (container, client, eventData) {
                // transfer from slot1 to slot2
                let player = client.getPlayerUid()
                let slot1 = Number(eventData.slot1), slot2 = Number(eventData.slot2)
                let nbtItem1 = Utils.getInventorySlot(slot1, player), nbtItem2 = Utils.getInventorySlot(slot2, player)
                if (Utils.isItemStackable(nbtItem1, nbtItem2)) {
                    if (!nbtItem2 || !nbtItem2.ic) return
                    let maxStack = Item.getMaxStack(nbtItem2.ic.id)
                    let deltaCount = Math.min(nbtItem1.ic.count, maxStack - nbtItem2.ic.count, eventData.count)
                    if (deltaCount === 0) return
                    nbtItem1.ic.count -= deltaCount, nbtItem2.ic.count += deltaCount
                    void (((nbtItem1.nbt.value || {})['Count'] || {}).value -= deltaCount)
                    void (((nbtItem2.nbt.value || {})['Count'] || {}).value += deltaCount)
                    Utils.setInventorySlot(slot1, player, nbtItem1)
                    Utils.setInventorySlot(slot2, player, nbtItem2)
                } else if (nbtItem2.ic.id === 0) {
                    let deltaCount = Math.min(nbtItem1.ic.count, eventData.count)
                    if (deltaCount === 0) return
                    nbtItem1.ic.count -= deltaCount
                    void (((nbtItem1.nbt.value || {})['Count'] || {}).value -= deltaCount)
                    Utils.setInventorySlot(slot1, player, nbtItem1)
                    // because nbtItem2 is empty
                    nbtItem1.ic.count = deltaCount
                    void (((nbtItem1.nbt.value || {})['Count'] || {}).value += deltaCount)
                    Utils.setInventorySlot(slot2, player, nbtItem1)
                } else {
                    Utils.setInventorySlot(slot1, player, nbtItem2)
                    Utils.setInventorySlot(slot2, player, nbtItem1)
                }
            })
            container.addServerEventListener('SlotToInventorySlot', function (container, connectedClient, eventData) {
                // copy from ../lib/VanillaSlots.js (version 4) line 175-194
                var player = new PlayerActor(connectedClient.getPlayerUid());
                var slot1 = container.getSlot(eventData.slot1).asScriptable();
                var transferPolicy1 = container.getGetTransferPolicy(eventData.slot1);
                var slot2 = player.getInventorySlot(eventData.slot2);
                if((slot2.id != slot1.id || slot2.data != slot1.data || (slot2.extra != slot1.extra && ((!slot2.extra || slot2.extra.getAllCustomData()) != (!slot1.extra || slot1.extra.getAllCustomData())))) && slot2.id != 0){
                    var transferPolicy2 = container.getAddTransferPolicy(eventData.slot1);
                    if(transferPolicy1 && transferPolicy1.transfer(container, eventData.slot1, slot1.id, slot1.count, slot1.data, slot1.extra, connectedClient.getPlayerUid()) != slot1.count) return;
                    if(transferPolicy2 && transferPolicy2.transfer(container, eventData.slot1, slot2.id, slot2.count, slot2.data, slot2.extra, connectedClient.getPlayerUid()) != slot2.count) return;
                    player.setInventorySlot(eventData.slot2, slot1.id, slot1.count, slot1.data, slot1.extra);
                    container.setSlot(eventData.slot1, slot2.id, slot2.count, slot2.data, slot2.extra);
                    container.sendChanges();
                    return;
                }
                var _count = slot2.id != 0 ? Math.min(eventData.count, Item.getMaxStack(slot2.id) - slot2.count) : eventData.count;
                if(_count <= 0) return;
                if(transferPolicy1)_count = (transferCount = transferPolicy1.transfer(container, eventData.slot1, slot1.id, _count, slot1.data, slot1.extra, connectedClient.getPlayerUid())) != undefined && transferCount != null ? transferCount : _count;
                player.setInventorySlot(eventData.slot2, slot1.id, slot2.id != 0 ? slot2.count + _count : _count, slot1.data, slot1.extra);
                container.setSlot(eventData.slot1, slot1.id, slot1.count - _count, slot1.data, slot1.extra);
                container.getSlot(eventData.slot1).validate();
                container.sendChanges();
            })
            container.addServerEventListener('InventorySlotToContainerSlot', function (container, client, eventData) {
                let slotIndex = eventData.slot1
                let slotId = eventData.slot2
                switch (slotId) {
                    case 'delete': {
                        let actor = new PlayerActor(client.getPlayerUid())
                        let item = actor.getInventorySlot(slotIndex)
                        if (!item.id || !item.count) return
                        let slot = container.getSlot('delete')
                        if (slot.id === item.id && slot.data === item.data && Utils.isExtraEqual(slot.extra, item.extra)) {
                            let count = Math.min(slot.count + item.count, Item.getMaxStack(slot.id))
                            container.setSlot('delete', slot.id, count, slot.data, slot.extra)
                        } else {
                            container.setSlot('delete', item.id, item.count, item.data, item.extra || null)
                        }
                        actor.setInventorySlot(slotIndex, 0, 0, 0, null)
                        container.sendChanges()
                        break
                    }
                }
            })
        }

        /** @type { {[player: number]: ItemContainer} } */
        const ServerContainer = {}

        ItemContainer.registerScreenFactory('IHP.InventoryGUI', function (container, screen) {
            let group = new UI.WindowGroup()
            group.addWindowInstance('main', InventoryGUI)
            return group
        })

        Callback.addCallback('ServerPlayerLoaded', function (player) {
            let container = ServerContainer[player] = new ItemContainer()
            container.setClientContainerTypeName('IHP.InventoryGUI')
            registerServerEventsForContainer(container)
        })
        Callback.addCallback('ServerPlayerTick', function (player) {
            updateSlots(player, ServerContainer[player])
        })
        Callback.addCallback('EntityDeath', function (entity) {
            if (Entity.getType(entity) !== EEntityType.PLAYER) return
            let container = ServerContainer[entity]
            if (!container) return
            container.setSlot('delete', 0, 0, 0)
        })
        Callback.addCallback('ServerPlayerLeft', function (player) {
            delete ServerContainer[player]
        })

        Network.addServerPacket('IHP.InventoryGUI.open', function (client, data) {
            let player = client.getPlayerUid()
            let container = ServerContainer[player]
            if (!container) return
            container.openFor(client, 'main')
        })
        Network.addServerPacket('IHP.sortInventory', function (client, data) {
            let player = client.getPlayerUid()
            let inventory = Utils.reduceInventory(Utils.getInventory(player).slice(9))
            let compareFn = Utils.getSortingFn(data.sortId || Utils.defaultSortId)
            inventory.sort(compareFn)
            for (let index = 9; index < 36; ++index) {
                Utils.setInventorySlot(index, player, inventory[index - 9] || null)
            }
        })

        VanillaSlots.registerForWindow(InventoryGUI)
    }

    return {
        ui: InventoryGUI,
        isOpened () { return InventoryGUI.isOpened() },
        open () {
            autoOpen = true
            if (Settings.clientOnly) LocalContainer.openAs(InventoryGUI)
            else Network.sendToServer('IHP.InventoryGUI.open', {})
        },
        close () {
            autoOpen = false
            closeGUI(InventoryGUI)
        }
    }
})()




// file: share.js

/// <reference path='./InventoryGUI.js'/>

ModAPI.registerAPI('Inventory-HUD-Plus-API', {
    version: __mod__.getVersion(),
    Utils: Utils,
    InfoGUI: InfoGUI,
    InventoryGUI: InventoryGUI,
    requireGlobal: function (cmd) { return eval(cmd) }
})
Logger.Log('The API of Inventory HUD Plus is named Inventory-HUD-Plus-API.', 'API')




