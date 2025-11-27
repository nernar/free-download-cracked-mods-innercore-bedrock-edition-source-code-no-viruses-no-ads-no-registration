/*
BUILD INFO:
  dir: assets/dev
  target: main.js
  files: 33
*/



// file: header.js

/// <reference path='../declarations/custom-quests-v2.d.ts'/>
/// <reference path='../declarations/ChargeItem.d.ts'/>
/// <reference path='./share.js'/>

IMPORT('ChargeItem')

const Setting = (function () {
    let Setting = {
        giveBook: __config__.getBool('give_book'),
        path: __config__.getString('contents.path') || 'custom',
        saveForTeam: __config__.getBool('save.for_team')
    }
    return Setting
})()

/** @type { CQTypes.invalidId } */
const InvalidId = 'invalid'

/** @type { EnumObject } */
const EnumObject = {
    playerState: {
        absent: 0,
        member: 1,
        admin: 2,
        owner: 3
    },
    inputState: {
        unfinished: 0,
        finished: 1,
        repeat_unfinished: 2
    },
    outputState: {
        unreceived: 0,
        received: 1,
        repeat_unreceived: 2
    },
    questInputState: {
        locked: -1,
        unfinished: 0,
        finished: 1,
        repeat_unfinished: 2
    },
    questOutputState: {
        locked: -1,
        unreceived: 0,
        received: 1,
        repeat_unreceived: 2
    }
}

/** @type { Store } */
const Store = (function () {
    /** @type { Store } */
    let DEFAULT = {
        saved: {
            players: {},
            team: {},
            data: {},
            playerList: {},
            exist: {}
        },
        cache: {
            playerLoaded: {},
            playerList: {}
        },
        localCache: {
            resolvedJson: {},
            jsonConfig: {},
            saveData: {},
            team: null,
            teamPlayerList: null,
            isAdmin: false,
            teamList: []
        }
    }
    Callback.addCallback('LevelSelected', function () {
        let obj = Utils.deepCopy(DEFAULT)
        for (let key in Store) {
            Store[key] = null
        }
        for (let key in obj) {
            Store[key] = obj[key]
        }
    })
    return JSON.parse(JSON.stringify(DEFAULT))
})()

Saver.addSavesScope('CustomQuests-v2', function (scope) {
    if (!Utils.isObject(scope)) return
    Store.saved = scope
    for (let saveId in Store.saved.data) {
        if (!Store.saved.data[saveId]) continue
        if (ServerSystem.isTeamSaveId(saveId) !== Setting.saveForTeam) continue
        System.validateSaveData(ServerSystem.resolvedJson, Store.saved.data[saveId])
    }
}, function () {
    return Store.saved
})




// file: TranAPI.js

/// <reference path='./header.js'/>

/** @type { TranAPI } */
const TranAPI = {
    lang: 'en',
    translation: {},
    addTranslation (str, params) {
        for (let lang in params) {
            if (typeof params[lang] === 'string') {
                if (!this.translation[lang]) this.translation[lang] = {}
                this.translation[lang][str] = params[lang]
            }
        }
    },
    getTranslation (str) {
        /** @type { ReturnType<TranAPI['getTranslation']> } */
        let ret = { 'en': str }
        for (let lang in this.translation) {
            if (this.translation[lang] && typeof this.translation[lang][str] === 'string') {
                ret[lang] = this.translation[lang][str]
            }
        }
        return ret
    },
    translate (str) {
        if (str === undefined) return ''
        if (typeof str === 'string') {
            if (this.translation[this.lang] && typeof this.translation[this.lang][str] === 'string') {
                return this.translation[this.lang][str]
            }
            if (this.translation['en'] && typeof this.translation['en'][str] === 'string') {
                return this.translation['en'][str]
            }
            return str
        } else {
            if (typeof str[this.lang] === 'string') return str[this.lang]
            if (typeof str['en'] === 'string') return str['en']
            return ''
        }
    }
}

; (function () {
    let QB = {
        book: {},
        admin: {},
        editor: {},
        missing: {}
    }
    let files = FileTools.GetListOfFiles(__dir__ + '/lang/', 'lang')
    for (let index in files) {
        let name = files[index].getName()
        let lang = name.split('_')[0]
        let translations = FileTools.ReadKeyValueFile(__dir__ + '/lang/' + name, '=')
        if (!TranAPI.translation[lang]) TranAPI.translation[lang] = {}

        for (let str in translations) {
            str = str.replace(/\\n/g, '\n')
            TranAPI.translation[lang][str] = translations[str].replace(/\\n/g, '\n')
        }
        if (translations['item.quest_book']) QB.book[lang] = translations['item.quest_book'].replace(/\\n/g, '\n')
        if (translations['item.quest_book_admin']) QB.admin[lang] = translations['item.quest_book_admin'].replace(/\\n/g, '\n')
        if (translations['item.quest_book_editor']) QB.editor[lang] = translations['item.quest_book_editor'].replace(/\\n/g, '\n')
        if (translations['item.missing_item']) QB.missing[lang] = translations['item.missing_item'].replace(/\\n/g, '\n')
        let obj = {}
        obj[lang] = lang
        Translation.addTranslation('CustomQuests.lang', obj)
    }
    TranAPI.lang = Translation.translate('CustomQuests.lang') || 'en'
    Translation.addTranslation('Quests Book', QB.book)
    Translation.addTranslation('Quests Admin Book', QB.admin)
    Translation.addTranslation('Quests Editor Book', QB.editor)
    Translation.addTranslation('Missing Item', QB.missing)
})()




// file: Utils.js

/// <reference path='./TranAPI.js'/>

/** @type { Utils } */
const Utils = {
    voidFunc () {},
    log (message, type, hasAlert) {
        let msg = '<Custom Quests> ' + message
        if (hasAlert) alert(msg)
        Logger.Log(msg, type)
    },
    error (message, err) {
        this.log(message + err, 'ERROR', false)
        if (err instanceof java.lang.Throwable) {
            Logger.LogError(err)
        } else if (this.isObject(err) && err.stack) {
            Logger.Log(err.stack, 'ERROR')
        }
    },
    getUUID () {
        let uuid = String(java.util.UUID.randomUUID().toString()).split('-')
        let time = (Date.now() & 0xffff).toString(16)
        while (time.length < 4) time = '0' + time
        return uuid[0] + uuid[1] + time
    },
    md5 (str) {
        if (typeof str !== 'string') return 'error-md5'
        try {
            let jStr = new java.lang.String(str)
            let secretBytes = java.security.MessageDigest.getInstance('md5').digest(jStr.getBytes('UTF8'))
            let ret = new java.math.BigInteger(1, secretBytes).toString(16)
            return String(ret)
        } catch (err) {
            this.error('Error in md5 (Utils.js):\n', err)
            return 'error-md5'
        }
    },
    isObject (obj) {
        try {
            if (typeof obj !== 'object' && typeof obj !== 'function') return false
            if (obj === null) return false
            return true
        } catch (err) {
            return false
        }
    },
    deepCopy (obj) {
        if (!this.isObject(obj)) return obj
        return JSON.parse(JSON.stringify(obj))
    },
    debounce (func, delay, func2, ths) {
        if (typeof func !== 'function') return func
        if (typeof delay !== 'number' || isNaN(delay)) return func
        let time = 0
        return function (args) {
            let now = Date.now()
            if (now >= time) {
                time = now + delay
                return func.apply(ths, arguments)
            } else if (typeof func2 === 'function') {
                return func2.apply(ths, arguments)
            }
        }
    },
    safeResult (func, ths) {
        let that = this
        return function (args) {
            return that.deepCopy(func.apply(ths, arguments))
        }
    },
    operate (a, operator, b, defaultValue) {
        switch (operator) {
            case '<': return a < b
            case '>': return a > b
            case '=': return a === b
            case '<=': return a <= b
            case '>=': return a >= b
            case '==': return a === b
            case '!=': return a !== b
            default: return Boolean(defaultValue)
        }
    },
    replace (str, replaceArray) {
        if (typeof str !== 'string') return ''
        if (!Array.isArray(replaceArray)) return str
        replaceArray.forEach(function (replacement) {
            if (!Array.isArray(replacement)) return
            str = str.replace(String(replacement[0]), String(replacement[1]))
        })
        return str
    },
    transferIdFromJson (id) {
        if (typeof id !== 'number' && typeof id !== 'string') return 0
        if (typeof id === 'string' && !isNaN(Number(id))) id = Number(id)
        if (typeof id === 'number') {
            return Network.inRemoteWorld() ? Network.serverToLocalId(id) : id
        }
        if ((/^(v|m)[a-z]*item[a-z]*(:|.)/i).test(id)) {
            id = id.replace(/^(v|m)[a-z]*item[a-z]*(:|.)/i, '')
            return VanillaItemID[id] || ItemID[id] || ItemID.missing_item
        }
        if ((/^(v|m)[a-z]*block[a-z]*(:|.)/i).test(id)) {
            id = id.replace(/^(v|m)[a-z]*block[a-z]*(:|.)/i, '')
            return VanillaBlockID[id] || BlockID[id] || ItemID.missing_item
        }
        if ((/^item[a-z]*(:|.)/i).test(id)) {
            id = id.replace(/^item[a-z]*(:|.)/i, '')
            return ItemID[id] || VanillaItemID[id] || ItemID.missing_item
        }
        if ((/^block[a-z]*(:|.)/i).test(id)) {
            id = id.replace(/^block[a-z]*(:|.)/i, '')
            return BlockID[id] || VanillaBlockID[id] || ItemID.missing_item
        }
        return ItemID.missing_item
    },
    idFromItem: (function () {
        /** @type { typeof Utils['idFromItem'] } */
        let idFromItem = {}
        Callback.addCallback('PostLoaded', function () {
            Threading.initThread('CustomQuests.initId', function () {
                for (let name in VanillaItemID) {
                    idFromItem[VanillaItemID[name]] = 'vitem:' + name
                }
                for (let name in VanillaBlockID) {
                    idFromItem[VanillaBlockID[name]] = 'vblock:' + name
                }
                for (let name in ItemID) {
                    idFromItem[ItemID[name]] = 'item:' + name
                }
                for (let name in BlockID) {
                    idFromItem[BlockID[name]] = 'block:' + name
                }
            })
        })
        return idFromItem
    })(),
    transferIdFromItem (id) {
        if (typeof id !== 'number') return '0'
        return this.idFromItem[id] || String(Network.localToServerId(id))
    },
    extraType: {},
    setExtraTypeCb (type, extraTypeCb) {
        if (typeof type !== 'string' || !type) return
        if (!this.isObject(extraTypeCb)) return
        if (!this.isObject(this.extraType[type])) this.extraType[type] = {}
        let that = this
        let methods = ['fromJson', 'fromItem', 'isPassed']
        methods.forEach(function (method) {
            if (typeof extraTypeCb[method] === 'function') {
                that.extraType[type][method] = extraTypeCb[method]
            } else if (extraTypeCb[method] === null) {
                that.extraType[type][method] = null
            }
        })
    },
    getExtraTypeCb (type, from) {
        if (typeof type !== 'string' || !type) return
        if (typeof from !== 'string') return
        if (!this.isObject(this.extraType[type])) return this.voidFunc
        return this.extraType[type][from] || this.voidFunc
    },
    transferItemFromJson (itemJson) {
        if (!this.isObject(itemJson)) return { id: 0, count: 0, data: 0 }
        let that = this
        let item = {
            id: this.transferIdFromJson(itemJson.id),
            count: itemJson.count || 1,
            data: itemJson.data || 0,
            extra: null
        }
        if (this.isObject(itemJson.extra)) {
            item.extra = new ItemExtraData()
            if (Array.isArray(itemJson.extra)) {
                itemJson.extra.forEach(function (extraJson) {
                    if (!that.isObject(extraJson)) return
                    that.getExtraTypeCb(extraJson.type, 'fromJson')(item, extraJson)
                })
            }
        }
        return item
    },
    transferItemFromItem (item) {
        if (!this.isObject(item)) return { id: '0' }
        let itemJson = {
            id: this.transferIdFromItem(item.id),
            count: item.count || 1,
            data: item.data || 0,
            extra: null
        }
        if (item.extra && !item.extra.isEmpty()) {
            itemJson.extra = []
            for (let type in this.extraType) {
                if (typeof this.extraType[type].fromItem !== 'function') continue
                let extraJson = { type: type }
                if (this.extraType[type].fromItem(item, extraJson)) continue
                itemJson.extra.push(extraJson)
            }
        }
        return itemJson
    },
    isItemExtraPassed (item, extraJsonArray) {
        if (!this.isObject(item)) return false
        if (!this.isObject(extraJsonArray)) return false
        if (!item.extra) item.extra = new ItemExtraData()
        let that = this
        let passed = true
        if (Array.isArray(extraJsonArray)) {
            extraJsonArray.every(function (extraJson) {
                if (!that.isObject(extraJson)) return true
                let cb = that.getExtraTypeCb(extraJson.type, 'isPassed')
                if (cb === that.voidFunc) return true
                return passed = passed && Boolean(cb(item, extraJson))
            })
        }
        return passed
    },
    readContents (path) {
        if (typeof path !== 'string') return {}
        if (!path.endsWith('/')) path += '/'
        let that = this
        try {
            if (FileTools.isExists(path + 'contents.json')) {
                let mainJson = FileTools.ReadJSON(path + 'contents.json')
                if (mainJson.main) {
                    mainJson.main.forEach(function (pathChapter, indexChapter) {
                        if (typeof pathChapter === 'string') {
                            try {
                                mainJson.main[indexChapter] = FileTools.ReadJSON(path + pathChapter) || {}
                            } catch (err) {
                                that.error('Error in readContents: (Utils.js)\n', err)
                                mainJson.main[indexChapter] = {}
                            }
                        }
                        let chapterJson = mainJson.main[indexChapter]
                        if (chapterJson.quest) {
                            chapterJson.quest.forEach(function (pathQuest, indexQuest) {
                                if (typeof pathQuest === 'string') {
                                    try {
                                        chapterJson.quest[indexQuest] = FileTools.ReadJSON(path + pathQuest) || {}
                                    } catch (err) {
                                        that.error('Error in readContents: (Utils.js)\n', err)
                                        chapterJson.quest[indexQuest] = {}
                                    }
                                }
                            })
                        }
                    })
                    return mainJson
                }
            } else if (FileTools.isExists(path + 'CustomQuests.json')) {
                let mainJson = FileTools.ReadJSON(path + 'CustomQuests.json')
                if (mainJson.main) return mainJson
            } else {
                that.log('Failed to read contents:\nThere is no files: ' + path, 'WARN', true)
            }
        } catch (err) {
            that.error('Error in readContents: (Utils.js)\n', err)
        }
        return {}
    },
    resolveRefs (value, refsArray) {
        if (typeof value !== 'string') return value
        if (!(/^ref:/i).test(value)) return value
        let that = this
        let refId = value.replace(/^ref:/i, '')
        /** @type { T } */
        let ret = null
        refsArray.some(function (refs) {
            if (!that.isObject(refs)) return false
            if (typeof refs[refId] !== 'undefined' && refs[refId] !== null) {
                ret = refs[refId]
                return true
            }
            return false
        })
        return this.deepCopy(ret)
    },
    resolveBitmap (bitmap, bitmapNameObject) {
        if (typeof bitmap !== 'string') return null
        if (!this.isObject(bitmapNameObject)) return bitmap
        if (bitmapNameObject[bitmap]) {
            return 'cq_custom_bitmap:' + bitmap
        }
        return bitmap
    },
    resolveTextJson (textJson) {
        if (typeof textJson === 'string') return textJson
        if (this.isObject(textJson)) {
            let ret = {}
            for (let lang in textJson) {
                ret[lang] = String(textJson[lang])
            }
            return ret
        }
        return ''
    },
    resolveIconJson (iconJson, refsArray, bitmapNameObject) {
        let ret = this.resolveRefs(iconJson, refsArray)
        if (!this.isObject(ret)) return {}
        if (typeof ret.bitmap === 'string') {
            ret.bitmap = this.resolveBitmap(ret.bitmap, bitmapNameObject)
        }
        return ret
    },
    putTextureSourceFromBase64 (name, encodedString) {
        if (typeof name !== 'string') return
        if (typeof encodedString !== 'string') return
        try {
            let encodeByte = android.util.Base64.decode(encodedString, 0)
            let bitmap = android.graphics.BitmapFactory.decodeByteArray(encodeByte, 0, encodeByte.length)
            UI.TextureSource.put(name, bitmap)
        } catch (err) {
            this.error('Error in putTextureSourceFromBase64 (Utils.js)\n', err)
        }
    },
    getInput ({text, hint, title, button, mutiLine}, cb){
        UI.getContext().runOnUiThread(new java.lang.Runnable({
            run () {
                try {
                    let editText = new android.widget.EditText(UI.getContext())
                    editText.setHint(hint || '')
                    if (!mutiLine) editText.setSingleLine(true)
                    if(typeof text == 'string') editText.setText(text)
                    new android.app.AlertDialog.Builder(UI.getContext())
                        .setTitle(title || '')
                        .setView(editText)
                        .setPositiveButton(
                            button || TranAPI.translate('Utils.dialog.confirm'),
                            new android.content.DialogInterface.OnClickListener({
                                onClick: Utils.debounce(function (dialogInterface) {
                                    if (typeof cb === 'function') {
                                        try {
                                            cb(editText.getText().toString() + '')
                                        } catch (err) {}
                                    }
                                    dialogInterface.dismiss()
                                }, 500)
                            })
                        )
                        .setNegativeButton(TranAPI.translate('Utils.dialog.cancel'), null)
                        .show()
                } catch (err) {}
            }
        }))
    },
    dialog ({text, title, button}, cb){
        UI.getContext().runOnUiThread(new java.lang.Runnable({
            run () {
                try {
                    new android.app.AlertDialog.Builder(UI.getContext())
                        .setTitle(title || '')
                        .setMessage(text)
                        .setPositiveButton(
                            button || TranAPI.translate('Utils.dialog.confirm'),
                            new android.content.DialogInterface.OnClickListener({
                                onClick: Utils.debounce(function (dialogInterface) {
                                    if (typeof cb === 'function') {
                                        try {
                                            cb()
                                        } catch (err) {}
                                    }
                                    dialogInterface.dismiss()
                                }, 500)
                            })
                        )
                        .setNegativeButton(TranAPI.translate('Utils.dialog.cancel'), null)
                        .show()
                } catch (err) {}
            }
        }))
    },
    getInventory (player) {
        let inventory = []
        let actor = new PlayerActor(player)
        for (let i = 0; i < 36; i++) {
            inventory[i] = actor.getInventorySlot(i)
        }
        return inventory
    },
    getSortInventory (inventory) {
        /** @type { ReturnType<Utils['getSortInventory']> } */
        let sortInventory = {}
        inventory.forEach(function (item) {
            if (item.id === 0) return
            if (sortInventory[item.id + ':' + item.data]) {
                sortInventory[item.id + ':' + item.data] += item.count
                if(item.data !== -1) sortInventory[item.id + ':-1'] += item.count
            } else {
                sortInventory[item.id + ':' + item.data] = item.count
                sortInventory[item.id + ':-1'] = item.count
            }
        })
        return sortInventory
    },
    getExtraInventory (inventory) {
        /** @type { ReturnType<Utils['getExtraInventory']> } */
        let extraInventory = {}
        inventory.forEach(function (item) {
            if (!item.extra || item.extra.isEmpty()) return
            if (extraInventory[item.id + ':' + item.data]) {
                extraInventory[item.id + ':' + item.data].push(item)
                if(item.data !== -1) extraInventory[item.id + ':-1'].push(item)
            } else {
                extraInventory[item.id + ':' + item.data] = [item]
                extraInventory[item.id + ':-1'] = [item]
            }
        })
        return extraInventory
    }
}

Utils.setExtraTypeCb('name', {
    fromJson: function (item, extraJson) {
        item.extra.setCustomName(String(extraJson.name))
    },
    fromItem: function (item, extraJson) {
        extraJson.name = item.extra.getCustomName()
        return !extraJson.name
    },
    isPassed: function(item, extraJson) {
        return item.extra.getCustomName() === String(extraJson.name)
    }
})

Utils.setExtraTypeCb('enchant', {
    fromJson: function (item, extraJson) {
        if(!Array.isArray(extraJson.array)) return
        extraJson.array.forEach(function (obj) {
            if (!Utils.isObject(obj)) return
            if (typeof obj.type !== 'number') return
            if (typeof obj.level !== 'number') return
            item.extra.addEnchant(obj.type, obj.level)
        })
    },
    fromItem: function (item, extraJson) {
        if (item.extra.getEnchantCount() <= 0) return true
        extraJson.array = []
        let enchants = item.extra.getEnchants()
        for (let id in enchants) {
            if (enchants[id] <= 0) continue
            extraJson.array.push({
                type: id,
                level: enchants[id]
            })
        }
        return false
    },
    isPassed: function(item, extraJson) {
        if(!Array.isArray(extraJson.array)) return true
        let enchants = item.extra.getEnchants()
        return extraJson.array.every(function (obj) {
            if (!Utils.isObject(obj)) return true
            if (typeof obj.type !== 'number') return true
            if (typeof obj.level !== 'number') obj.level = 0
            if (typeof obj.operator !== 'string') obj.operator = '>='
            return Utils.operate(Number(enchants[obj.type]), obj.operator, obj.level, true)
        })
    }
})

Utils.setExtraTypeCb('energy', {
    fromJson: function (item, extraJson) {
        ChargeItemRegistry.setEnergyStored(item, extraJson.energy)
    },
    fromItem: function (item, extraJson) {
        let energyData = ChargeItemRegistry.getItemData(item.id)
        if (!Utils.isObject(energyData)) return true
        let energy = ChargeItemRegistry.getEnergyStored(item, energyData.energy)
        if (typeof energy !== 'number') return true
        extraJson.energy = energy
        return false
    },
    isPassed: function(item, extraJson) {
        let energy = item.extra.getInt('energy')
        if (typeof extraJson.operator !== 'string') extraJson.operator = '>='
        if (typeof extraJson.energy !== 'number') extraJson.energy = 0
        return Utils.operate(energy, String(extraJson.operator), Number(extraJson.energy), true)
    }
})




// file: IOTypeTools.js

/// <reference path='./Utils.js'/>

/** @type { IOTypeTools } */
const IOTypeTools = {
    inputType: {},
    setInputType (type, name, inputTypeCb, config) {
        if (!this.inputType[type]) {
            this.inputType[type] = {
                name: '',
                cb: {},
                config: {
                    allowGroup: false,
                    allowRepeat: false
                }
            }
        }
        let inputType = this.inputType[type]
        if (typeof name === 'string') {
            if (typeof inputType.name === 'string') {
                inputType.name = name
            }
        } else if (Utils.isObject(name)) {
            if (typeof inputType.name === 'string') {
                inputType.name = name
            } else {
                for (let lang in name) {
                    inputType.name[lang] = name[lang]
                }
            }
        }
        let methods = [
            'resolveJson', 'onPacket', 'onCustomCall',
            'onLoad', 'onUnload', 'onTick',
            'getIcon', 'getDescription', 'onEdit'
        ]
        methods.forEach(function (method) {
            if (typeof inputTypeCb[method] === 'function') {
                inputType.cb[method] = inputTypeCb[method]
            } else if (inputTypeCb[method] === null) {
                inputType.cb[method] = null
            }
        })
        if (Utils.isObject(config)) {
            if (typeof config.allowGroup === 'boolean') {
                inputType.config.allowGroup = config.allowGroup
            }
            if (typeof config.allowRepeat === 'boolean') {
                inputType.config.allowRepeat = config.allowRepeat
            }
        }
    },
    getAllInputType () {
        let ret = []
        for (let type in this.inputType) {
            if (this.inputType[type]) {
                ret.push(type)
            }
        }
        return ret
    },
    getInputTypeName (type) {
        let inputType = this.inputType[type]
        if (!inputType) return ''
        return TranAPI.translate(inputType.name)
    },
    getInputTypeCb (type) {
        let inputType = this.inputType[type]
        if (!inputType) return {}
        let cb = {}
        for (let method in inputType.cb) {
            cb[method] = inputType.cb[method]
        }
        return cb
    },
    getInputTypeConfig (type) {
        let inputType = this.inputType[type]
        if (!inputType) return null
        return inputType.config
    },
    inputObject: {},
    typedInputList: {},
    getAllInputIdByType (type, saveId) {
        if (typeof type === 'string') type = [type]
        let ret = []
        if (saveId) {
            if (saveId === InvalidId) return ret
            let typedInputList = this.typedInputList[saveId]
            if (!typedInputList) return ret
            type.forEach(function (type) {
                if (Array.isArray(typedInputList[type])) {
                    ret = ret.concat(typedInputList[type])
                }
            })
        } else {
            for (let saveId in this.typedInputList) {
                let typedInputList = this.typedInputList[saveId]
                if (!typedInputList) continue
                type.forEach(function (type) {
                    if (Array.isArray(typedInputList[type])) {
                        ret = ret.concat(typedInputList[type])
                    }
                })
            }
        }
        return ret
    },
    createInputId (inputJson, toolsCb, onUnload, saveId) {
        if (!Utils.isObject(inputJson)) return InvalidId
        if (!Utils.isObject(toolsCb)) return InvalidId
        if (typeof toolsCb.getState !== 'function') return InvalidId
        if (toolsCb.getState().state === EnumObject.inputState.finished) return InvalidId
        let type = inputJson.type
        let inputType = this.inputType[type]
        if (!inputType) return InvalidId
        let inputId = Utils.getUUID()
        while (this.isInputIdLoaded(inputId)) inputId = Utils.getUUID()
        if (toolsCb.createChildInputId === undefined) {
            toolsCb.createChildInputId = this.createChildInputId.bind(this, inputId)
        }
        this.inputObject[inputId] = {
            saveId: saveId || InvalidId,
            loaded: false,
            cache: {},
            json: inputJson,
            toolsCb: toolsCb,
            onUnload: onUnload
        }
        return inputId
    },
    createChildInputId (inputId, inputJson, toolsCb, onUnload) {
        if (!this.isInputIdLoaded(inputId)) return InvalidId
        let inputObject = this.inputObject[inputId]
        return this.createInputId(inputJson, toolsCb, onUnload, inputObject.saveId)
    },
    isInputIdLoaded (inputId) {
        if (typeof inputId !== 'string') return false
        if (inputId === InvalidId) return false
        let inputObject = this.inputObject[inputId]
        if (!inputObject) return false
        return inputObject.loaded
    },
    loadInput (inputId) {
        if (inputId === InvalidId) return
        if (this.isInputIdLoaded(inputId)) return
        let inputObject = this.inputObject[inputId]
        let type = inputObject.json.type
        let inputType = this.inputType[type]
        inputObject.loaded = true
        if (!this.typedInputList[inputObject.saveId]) this.typedInputList[inputObject.saveId] = {}
        let typedInputList = this.typedInputList[inputObject.saveId]
        if (!Array.isArray(typedInputList[type])) typedInputList[type] = []
        typedInputList[type].push(inputId)
        if (typeof inputType.cb.onLoad === 'function') {
            try {
                inputType.cb.onLoad.call(null, inputObject.json, inputObject.toolsCb, inputObject.cache)
            } catch (err) {
                Utils.error('Error in loadInput (IOTypeTools.js):\n', err)
            }
        }
    },
    unloadInput (inputId) {
        if (!this.isInputIdLoaded(inputId)) return
        let inputObject = this.inputObject[inputId]
        let type = inputObject.json.type
        let inputType = this.inputType[type]
        if (typeof inputType.cb.onUnload === 'function') {
            try {
                inputType.cb.onUnload.call(null, inputObject.json, inputObject.toolsCb, inputObject.cache)
            } catch (err) {
                Utils.error('Error in unloadInput (IOTypeTools.js):\n', err)
            }
        }
        if (typeof inputObject.onUnload === 'function') {
            try {
                inputObject.onUnload()
            } catch (err) {
                Utils.error('Error in unloadInput (IOTypeTools.js):\n', err)
            }
        }
        delete this.inputObject[inputId]
        let list = this.typedInputList[inputObject.saveId][type]
        let index = list.indexOf(inputId)
        if (index >= 0) list.splice(index, 1)
    },
    callInputTypeCb (inputId, method, extraInfo) {
        if (!this.isInputIdLoaded(inputId)) return null
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        let methods =  []
        if (!Network.inRemoteWorld()) {
            methods = methods.concat([
                'onCustomCall', 'onPacket', 'onTick'
            ])
        }
        if (methods.indexOf(method) < 0) return
        let inputObject = this.inputObject[inputId]
        let type = inputObject.json.type
        let inputType = this.inputType[type]
        if (typeof inputType.cb[method] === 'function') {
            try {
                return inputType.cb[method].call(null, inputObject.json, inputObject.toolsCb, inputObject.cache, extraInfo)
            } catch (err) {
                Utils.error('Error in callInputTypeCb (IOTypeTools.js):\n', err)
            }
        }
        return null
    },
    getPlayerListByInputId (inputId, online) {
        if (!this.isInputIdLoaded(inputId)) return []
        let inputObject = this.inputObject[inputId]
        if (typeof inputObject.toolsCb.getPlayerList === 'function') {
            try {
                return inputObject.toolsCb.getPlayerList(Boolean(online))
            } catch (err) {
                Utils.error('Error in getPlayerListByInputId (IOTypeTools.js):\n', err)
            }
        }
        return []
    },
    getInputJsonByInputId (inputId) {
        if (!this.isInputIdLoaded(inputId)) return null
        let inputObject = this.inputObject[inputId]
        return inputObject.json
    },
    outputType: {},
    setOutputType (type, name, outputTypeCb, config) {
        if (!this.outputType[type]) {
            this.outputType[type] = {
                name: '',
                cb: {},
                config: {
                    allowGroup: false,
                    allowRepeat: false
                }
            }
        }
        let outputType = this.outputType[type]
        if (typeof name === 'string') {
            if (typeof outputType.name === 'string') {
                outputType.name = name
            }
        } else if (Utils.isObject(name)) {
            if (typeof outputType.name === 'string') {
                outputType.name = name
            } else {
                for (let lang in name) {
                    outputType.name[lang] = name[lang]
                }
            }
        }
        let methods = [
            'resolveJson', 'onPacket', 'onCustomCall',
            'onLoad', 'onUnload', 'onReceive',
            'onFastReceive',
            'getIcon', 'getDescription', 'onEdit'
        ]
        methods.forEach(function (method) {
            if (typeof outputTypeCb[method] === 'function') {
                outputType.cb[method] = outputTypeCb[method]
            } else if (outputTypeCb[method] === null) {
                outputType.cb[method] = null
            }
        })
        if (Utils.isObject(config)) {
            if (typeof config.allowGroup === 'boolean') {
                outputType.config.allowGroup = config.allowGroup
            }
            if (typeof config.allowRepeat === 'boolean') {
                outputType.config.allowRepeat = config.allowRepeat
            }
        }
    },
    getAllOutputType () {
        let ret = []
        for (let type in this.outputType) {
            if (this.outputType[type]) {
                ret.push(type)
            }
        }
        return ret
    },
    getOutputTypeName (type) {
        let outputType = this.outputType[type]
        if (!outputType) return ''
        return TranAPI.translate(outputType.name)
    },
    getOutputTypeCb (type) {
        let outputType = this.outputType[type]
        if (!outputType) return {}
        let cb = {}
        for (let method in outputType.cb) {
            cb[method] = outputType.cb[method]
        }
        return cb
    },
    getOutputTypeConfig (type) {
        let outputType = this.outputType[type]
        if (!outputType) return null
        return outputType.config
    },
    outputObject: {},
    typedOutputList: {},
    getAllOutputIdByType (type, saveId) {
        if (typeof type === 'string') type = [type]
        let ret = []
        if (saveId) {
            if (saveId === InvalidId) return ret
            let typedOutputList = this.typedOutputList[saveId]
            if (!typedOutputList) return ret
            type.forEach(function (type) {
                if (Array.isArray(typedOutputList[type])) {
                    ret = ret.concat(typedOutputList[type])
                }
            })
        } else {
            for (let saveId in this.typedOutputList) {
                let typedOutputList = this.typedOutputList[saveId]
                if (!typedOutputList) continue
                type.forEach(function (type) {
                    if (Array.isArray(typedOutputList[type])) {
                        ret = ret.concat(typedOutputList[type])
                    }
                })
            }
        }
        return ret
    },
    createOutputId (outputJson, toolsCb, onUnload, saveId) {
        if (!Utils.isObject(outputJson)) return InvalidId
        if (!Utils.isObject(toolsCb)) return InvalidId
        if (typeof toolsCb.getState !== 'function') return InvalidId
        if (toolsCb.getState().state === EnumObject.outputState.received) return InvalidId
        let type = outputJson.type
        let outputType = this.outputType[type]
        if (!outputType) return InvalidId
        let outputId = Utils.getUUID()
        while (this.isOutputIdLoaded(outputId)) outputId = Utils.getUUID()
        if (toolsCb.createChildOutputId === undefined) {
            toolsCb.createChildOutputId = this.createChildOutputId.bind(this, outputId)
        }
        this.outputObject[outputId] = {
            saveId: saveId || InvalidId,
            loaded: false,
            cache: {},
            json: outputJson,
            toolsCb: toolsCb,
            onUnload: onUnload
        }
        return outputId
    },
    createChildOutputId (outputId, outputJson, toolsCb, onUnload) {
        if (!this.isOutputIdLoaded(outputId)) return InvalidId
        let outputObject = this.outputObject[outputId]
        return this.createOutputId(outputJson, toolsCb, onUnload, outputObject.saveId)
    },
    isOutputIdLoaded (outputId) {
        if (typeof outputId !== 'string') return false
        if (outputId === InvalidId) return false
        let outputObject = this.outputObject[outputId]
        if (!outputObject) return false
        return outputObject.loaded
    },
    loadOutput (outputId) {
        if (outputId === InvalidId) return
        if (this.isOutputIdLoaded(outputId)) return
        let outputObject = this.outputObject[outputId]
        let type = outputObject.json.type
        let outputType = this.outputType[type]
        outputObject.loaded = true
        if (!this.typedOutputList[outputObject.saveId]) this.typedOutputList[outputObject.saveId] = {}
        let typedOutputList = this.typedOutputList[outputObject.saveId]
        if (!Array.isArray(typedOutputList[type])) typedOutputList[type] = []
        typedOutputList[type].push(outputId)
        if (typeof outputType.cb.onLoad === 'function') {
            try {
                outputType.cb.onLoad.call(null, outputObject.json, outputObject.toolsCb, outputObject.cache)
            } catch (err) {
                Utils.error('Error in loadOutput (IOTypeTools.js):\n', err)
            }
        }
    },
    unloadOutput (outputId) {
        if (!this.isOutputIdLoaded(outputId)) return
        let outputObject = this.outputObject[outputId]
        let type = outputObject.json.type
        let outputType = this.outputType[type]
        if (typeof outputType.cb.onUnload === 'function') {
            try {
                outputType.cb.onUnload.call(null, outputObject.json, outputObject.toolsCb, outputObject.cache)
            } catch (err) {
                Utils.error('Error in unloadOutput (IOTypeTools.js):\n', err)
            }
        }
        if (typeof outputObject.onUnload === 'function') {
            try {
                outputObject.onUnload()
            } catch (err) {
                Utils.error('Error in unloadOutput (IOTypeTools.js):\n', err)
            }
        }
        delete this.outputObject[outputId]
        let list = this.typedOutputList[outputObject.saveId][type]
        let index = list.indexOf(outputId)
        if (index >= 0) list.splice(index, 1)
    },
    callOutputTypeCb (outputId, method, extraInfo) {
        if (!this.isOutputIdLoaded(outputId)) return null
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        let methods = []
        if (!Network.inRemoteWorld()) {
            methods = methods.concat([
                'onCustomCall', 'onPacket', 'onReceive',
                'onFastReceive'
            ])
        }
        if (methods.indexOf(method) < 0) return
        let outputObject = this.outputObject[outputId]
        let type = outputObject.json.type
        let outputType = this.outputType[type]
        if (typeof outputType.cb[method] === 'function') {
            try {
                return outputType.cb[method].call(null, outputObject.json, outputObject.toolsCb, outputObject.cache, extraInfo)
            } catch (err) {
                Utils.error('Error in callOutputTypeCb (IOTypeTools.js):\n', err)
            }
        }
        return null
    },
    getPlayerListByOutputId (outputId, online) {
        if (!this.isOutputIdLoaded(outputId)) return []
        let outputObject = this.outputObject[outputId]
        if (typeof outputObject.toolsCb.getPlayerList === 'function') {
            try {
                return outputObject.toolsCb.getPlayerList(Boolean(online))
            } catch (err) {
                Utils.error('Error in getPlayerListByOutputId (IOTypeTools.js):\n', err)
            }
        }
        return []
    },
    getOutputJsonByOutputId (outputId) {
        if (!this.isOutputIdLoaded(outputId)) return null
        let outputObject = this.outputObject[outputId]
        return outputObject.json
    }
}

Callback.addCallback('ServerPlayerTick', Utils.debounce(function () {
    try {
        let playerList = Network.getConnectedPlayers()
        let playerInventory = {}
        for (let i = 0; i < playerList.length; i++) {
            let player = playerList[i]
            let inventory = Utils.getInventory(player)
            let sortInventory = Utils.getSortInventory(inventory)
            let extraInventory = Utils.getExtraInventory(inventory)
            playerInventory[player] = {
                player: player,
                normal: inventory,
                sort: sortInventory,
                extra: extraInventory
            }
        }
        let typeArray = IOTypeTools.getAllInputType().filter(function (type) {
            return typeof IOTypeTools.getInputTypeCb(type).onTick === 'function'
        })
        IOTypeTools.getAllInputIdByType(typeArray).forEach(function (inputId) {
            let playerInventoryArray = []
            IOTypeTools.getPlayerListByInputId(inputId, true).forEach(function (player) {
                playerInventoryArray.push(playerInventory[player])
            })
            IOTypeTools.callInputTypeCb(inputId, 'onTick', {
                playerInventory: playerInventoryArray
            })
        })
    } catch (err) {
        Utils.error('Error in Callback \'ServerPlayerTick\' (IOTypeTools.js):\n', err)
    }
}, 500 /* 0.5s */))

Callback.addCallback('LevelLeft', function () {
    if (Network.inRemoteWorld()) return
    IOTypeTools.getAllInputIdByType(IOTypeTools.getAllInputType()).forEach(function (inputId) {
        IOTypeTools.unloadInput(inputId)
    })
    IOTypeTools.inputObject = {}
    IOTypeTools.getAllOutputIdByType(IOTypeTools.getAllOutputType()).forEach(function (outputId) {
        IOTypeTools.unloadOutput(outputId)
    })
    IOTypeTools.outputObject = {}
})




// file: System.js

/// <reference path='./IOTypeTools.js'/>

/** @type { System } */
const System = {
    resolveInputJson (inputJson, refsArray, bitmapNameObject) {
        if (!Utils.isObject(inputJson)) return null
        if (typeof inputJson.type !== 'string') return null
        let description = Utils.resolveTextJson(inputJson.description)
        let inputTypeCb = IOTypeTools.getInputTypeCb(inputJson.type)
        if (typeof inputTypeCb.resolveJson !== 'function') {
            inputJson.description = description
            return inputJson
        }
        let resolvedJson = inputTypeCb.resolveJson.call(null, inputJson, refsArray, bitmapNameObject)
        if (!Utils.isObject(resolvedJson)) return null
        if (typeof resolvedJson.type !== 'string') return null
        resolvedJson.description = description
        return resolvedJson
    },
    resolveOutputJson (outputJson, refsArray, bitmapNameObject) {
        if (!Utils.isObject(outputJson)) return null
        if (typeof outputJson.type !== 'string') return null
        let description = Utils.resolveTextJson(outputJson.description)
        let outputTypeCb = IOTypeTools.getOutputTypeCb(outputJson.type)
        if (typeof outputTypeCb.resolveJson !== 'function') {
            outputJson.description = description
            return outputJson
        }
        let resolvedJson = outputTypeCb.resolveJson.call(null, outputJson, refsArray, bitmapNameObject)
        if (!Utils.isObject(resolvedJson)) return null
        if (typeof resolvedJson.type !== 'string') return null
        resolvedJson.description = description
        return resolvedJson
    },
    resolveJson: (function () {
        const Graph = /** @class */ function () {
            let num_node = 0, map = {}, value = [0]
            let edge = {
                num: 0,
                to: [0],
                dis: [0],
                next: [0],
                head: [0]
            }
            let queue = {
                head: 0,
                tail: 0,
                /** @type { number[] } */
                value: []
            }

            /** @type { (nodeId: string) => number } */
            let getNode = function (nodeId) {
                if (!map[nodeId]) map[nodeId] = ++num_node
                return map[nodeId]
            }
            /** @type { (fromId: string, toId: string, dis: number) => void } */
            this.addEdge = function (fromId, toId, dis) {
                let from = getNode(fromId)
                let to = getNode(toId)
                edge.num++
                edge.to[edge.num] = to
                edge.dis[edge.num] = dis
                edge.next[edge.num] = edge.head[from]
                edge.head[from] = edge.num
            }
            /** @type { (nodeId: string, dis: number) => void } */
            this.setValue = function (nodeId, dis) {
                let node = getNode(nodeId)
                value[node] = dis
                queue.value[queue.tail++] = node
            }
            /** @type { (nodeId: string) => number } */
            this.getValue = function (nodeId) {
                return value[getNode(nodeId)]
            }
            /** @type { (cb: (nodeValue: number, edgeDis: number) => number) => void } */
            this.bfs = function (cb) {
                let u, v
                while (queue.head < queue.tail) {
                    u = queue.value[queue.head++]
                    for (let i = edge.head[u]; i; i = edge.next[i]) {
                        v = edge.to[i]
                        if (typeof value[v] === 'number') continue
                        value[v] = cb(value[u], edge.dis[i])
                        queue.value[queue.tail++] = v
                    }
                }
            }
        }

        /** @type { (param: number | [string, number]) => boolean } */
        const isValidXYSize = function (param) {
            if (typeof param === 'number') return true
            if (!Utils.isObject(param)) return false
            if (typeof param[0] !== 'string') return false
            if (typeof param[1] !== 'number') return false
            return true
        }

        /**
         * @typedef { {[sourceId: CQTypes.sourceId]: {[chapterId: CQTypes.chapterId]: {[questId: CQTypes.questId]: Array<CQTypes.PathArray>}}} } ChildObject
         * @param { CQTypes.MainJson } mainJson 
         * @param { CQTypes.sourceId } sourceId 
         * @returns { Nullable<{json: CQTypes.ResolvedMainJson, config: CQTypes.MainJson['config'], bitmaps: CQTypes.MainJson['bitmaps'], childObject: ChildObject}> } 
         */
        const resolveMainJson = function (mainJson, sourceId) {
            if (!Utils.isObject(mainJson)) return null
            mainJson = Utils.deepCopy(mainJson)
            /** @type { ChildObject } */
            let childObject = {}
            let bitmapNameObject = {}
            if (Array.isArray(mainJson.bitmaps)) {
                mainJson.bitmaps.forEach(function (bitmapObject) {
                    if (!Utils.isObject(bitmapObject)) return
                    if (typeof bitmapObject.name !== 'string') return
                    if (typeof bitmapObject.base64 !== 'string') return
                    bitmapNameObject[bitmapObject.name] = true
                })
            }
            let refsArray = []
            refsArray.push(mainJson.ref)
            /** @type { CQTypes.ResolvedMainJson } */
            let resolvedMainJson = {}
            resolvedMainJson.chapter = {}
            resolvedMainJson.name = Utils.resolveTextJson(mainJson.name)
            if (Array.isArray(mainJson.group)) {
                resolvedMainJson.group = []
                mainJson.group.forEach(function (obj) {
                    if (!Utils.isObject(obj)) return
                    if (!Array.isArray(obj.list)) return
                    resolvedMainJson.group.push({
                        name: Utils.resolveTextJson(obj.name),
                        icon: Utils.resolveIconJson(obj.icon, refsArray, bitmapNameObject),
                        list: obj.list
                    })
                })
            }
            let background = mainJson.background
            if (Array.isArray(background)) {
                if (typeof background[0] === 'string') {
                    background[0] = Utils.resolveBitmap(background[0], bitmapNameObject)
                }
                if (typeof background[1] !== 'number') background[1] = null
            } else background = null

            if (Array.isArray(mainJson.main)) mainJson.main.forEach(function (chapterJson) {
                if (typeof chapterJson.id !== 'string') return
                refsArray.push(chapterJson.ref)
                let chapterId = chapterJson.id
                /** @type { CQTypes.ResolvedChapterJson } */
                let resolvedChapterJson = {}
                resolvedMainJson.chapter[chapterId] = resolvedChapterJson
                resolvedChapterJson.quest = {}
                resolvedChapterJson.name = Utils.resolveTextJson(chapterJson.name)
                resolvedChapterJson.icon = Utils.resolveIconJson(chapterJson.icon, refsArray, bitmapNameObject)
                resolvedChapterJson.background = chapterJson.background
                if (Array.isArray(resolvedChapterJson.background)) {
                    if (typeof resolvedChapterJson.background[0] === 'string') {
                        resolvedChapterJson.background[0] = Utils.resolveBitmap(resolvedChapterJson.background[0], bitmapNameObject)
                    }
                    if (typeof resolvedChapterJson.background[1] !== 'number') resolvedChapterJson.background[1] = null
                } else resolvedChapterJson.background = background

                if (Array.isArray(chapterJson.quest)) {
                    let graph = {
                        x: new Graph(),
                        y: new Graph(),
                        size: new Graph()
                    }
                    chapterJson.quest.forEach(function (questJson) {
                        if (typeof questJson.id !== 'string') return
                        if (questJson.type === 'custom') {
                            if (!Utils.isObject(questJson.elem)) return
                            let resolvedQuestJson = questJson
                            resolvedChapterJson.quest[questJson.id] = resolvedQuestJson
                            if (!Array.isArray(resolvedQuestJson.elem)) resolvedQuestJson.elem = [resolvedQuestJson.elem]
                            resolvedQuestJson.elem.forEach(function (elements) {
                                if (elements.type === 'image') {
                                    if (typeof elements.bitmap === 'string') {
                                        elements.bitmap = Utils.resolveBitmap(elements.bitmap, bitmapNameObject)
                                    }
                                    if (typeof elements.overlay === 'string') {
                                        elements.overlay = Utils.resolveBitmap(elements.overlay, bitmapNameObject)
                                    }
                                }
                            })
                            return
                        }
                        if (questJson.type === 'quest') {
                            refsArray.push(questJson.ref)
                            let questId = questJson.id
                            /** @type { CQTypes.ResolvedQuestJson } */
                            let resolvedQuestJson = {}
                            resolvedChapterJson.quest[questId] = resolvedQuestJson
                            resolvedQuestJson.type = 'quest'
                            resolvedQuestJson.pos = questJson.pos
                            resolvedQuestJson.size = questJson.size
                            if (!Array.isArray(resolvedQuestJson.pos)) resolvedQuestJson.pos = [0, 0]
                            if (!isValidXYSize(resolvedQuestJson.pos[0])) resolvedQuestJson.pos[0] = 0
                            if (!isValidXYSize(resolvedQuestJson.pos[1])) resolvedQuestJson.pos[1] = 0
                            if (!isValidXYSize(resolvedQuestJson.size)) resolvedQuestJson.size = 50
                            if (typeof resolvedQuestJson.pos[0] === 'number') graph.x.setValue(questId, resolvedQuestJson.pos[0])
                            else graph.x.addEdge(resolvedQuestJson.pos[0][0], questId, resolvedQuestJson.pos[0][1])
                            if (typeof resolvedQuestJson.pos[1] === 'number') graph.y.setValue(questId, resolvedQuestJson.pos[1])
                            else graph.y.addEdge(resolvedQuestJson.pos[1][0], questId, resolvedQuestJson.pos[1][1])
                            if (typeof resolvedQuestJson.size === 'number') graph.size.setValue(questId, resolvedQuestJson.size)
                            else graph.size.addEdge(resolvedQuestJson.size[0], questId, resolvedQuestJson.size[1])

                            let icon = questJson.icon
                            if (Array.isArray(icon)) {
                                resolvedQuestJson.icon = []
                                for (let i = 0; i < 3; i++) {
                                    let tmpIcon = Utils.resolveIconJson(icon[i], refsArray, bitmapNameObject)
                                    resolvedQuestJson.icon[i] = tmpIcon
                                }
                            } else {
                                icon = Utils.resolveIconJson(icon, refsArray, bitmapNameObject)
                                resolvedQuestJson.icon = [icon, icon, icon]
                            }
                            resolvedQuestJson.parent = []
                            let parentArray = questJson.parent
                            if (!Array.isArray(parentArray)) parentArray = []
                            parentArray.forEach(function (pathParent) {
                                if (typeof pathParent === 'string') pathParent = [null, null, pathParent]
                                if (!Array.isArray(pathParent)) return
                                if (typeof pathParent[0] !== 'string') pathParent[0] = sourceId
                                if (typeof pathParent[1] !== 'string') pathParent[1] = chapterId
                                if (typeof pathParent[2] !== 'string') return
                                if (typeof pathParent[3] !== 'number') pathParent[3] = null
                                resolvedQuestJson.parent.push(pathParent)
                                if (!childObject[pathParent[0]]) childObject[pathParent[0]] = {}
                                let mainChildObject = childObject[pathParent[0]]
                                if (!mainChildObject[pathParent[1]]) mainChildObject[pathParent[1]] = {}
                                let chapterChildObject = mainChildObject[pathParent[1]]
                                if (!Array.isArray(chapterChildObject[pathParent[2]])) chapterChildObject[pathParent[2]] = []
                                chapterChildObject[pathParent[2]].push([sourceId, chapterId, questId])
                            })
                            resolvedQuestJson.child = []
                            resolvedQuestJson.hidden = Boolean(questJson.hidden)
                            resolvedQuestJson.inner = {
                                input: [],
                                output: [],
                                name: '',
                                text: '',
                                repeat: false
                            }
                            if (questJson.inner) {
                                resolvedQuestJson.inner.name = Utils.resolveTextJson(questJson.inner.name)
                                resolvedQuestJson.inner.text = Utils.resolveTextJson(questJson.inner.text)
                                resolvedQuestJson.inner.repeat = Boolean(questJson.inner.repeat)
                                if (resolvedQuestJson.inner.repeat) resolvedQuestJson.inner.repeat_time = Number(questJson.inner.repeat_time)
                                if (Array.isArray(questJson.inner.input)) questJson.inner.input.forEach(function (inputJson, index) {
                                    let resolvedInputJson = System.resolveInputJson(Utils.resolveRefs(inputJson, refsArray), refsArray, bitmapNameObject)
                                    if (Utils.isObject(resolvedInputJson)) {
                                        resolvedQuestJson.inner.input[index] = resolvedInputJson
                                    } else {
                                        resolvedQuestJson.inner.input[index] = null
                                    }
                                })
                                if (Array.isArray(questJson.inner.output)) questJson.inner.output.forEach(function (outputJson, index) {
                                    let resolvedOutputJson = System.resolveOutputJson(Utils.resolveRefs(outputJson, refsArray), refsArray, bitmapNameObject)
                                    if (Utils.isObject(resolvedOutputJson)) {
                                        resolvedQuestJson.inner.output[index] = resolvedOutputJson
                                    } else {
                                        resolvedQuestJson.inner.output[index] = null
                                    }
                                })
                            }
                            refsArray.pop()
                            return
                        }
                    })
                    graph.x.bfs(function (nodeValue, edgeDis) { return nodeValue + edgeDis })
                    graph.y.bfs(function (nodeValue, edgeDis) { return nodeValue + edgeDis })
                    graph.size.bfs(function (nodeValue, edgeDis) { return nodeValue * edgeDis })
                    for (let questId in resolvedChapterJson.quest) {
                        let resolvedQuestJson = resolvedChapterJson.quest[questId]
                        if (resolvedQuestJson.type !== 'quest') continue
                        resolvedQuestJson.pos[0] = graph.x.getValue(questId) || 0
                        resolvedQuestJson.pos[1] = graph.y.getValue(questId) || 0
                        resolvedQuestJson.size = graph.size.getValue(questId) || 0
                    }
                }

                refsArray.pop()
            })

            refsArray.pop()
            return {
                json: resolvedMainJson,
                config: mainJson.config,
                bitmaps: mainJson.bitmaps,
                childObject: childObject
            }
        }

        /** @type { System['resolveJson'] } */
        const resolveJson = function (json) {
            /** @type { CQTypes.AllResolvedMainJson } */
            let resolvedJson = {}
            /** @type { ReturnType<System['resolveJson']>['config'] } */
            let config = {}
            /** @type { ChildObject } */
            let childObject = {}
            let bitmaps = []
            for (let sourceId in json) {
                if (!Utils.isObject(json[sourceId])) continue
                let obj = resolveMainJson(json[sourceId], sourceId)
                if (!Utils.isObject(obj)) continue
                resolvedJson[sourceId] = obj.json
                if (Utils.isObject(obj.config)) config[sourceId] = obj.config
                if (Array.isArray(obj.bitmaps)) bitmaps = bitmaps.concat(obj.bitmaps)
                for (let sourceId2 in obj.childObject) {
                    if (!childObject[sourceId2]) {
                        childObject[sourceId2] = obj.childObject[sourceId2]
                        continue
                    }
                    let mainChildObject = obj.childObject[sourceId2]
                    for (let chapterId in mainChildObject) {
                        if (!childObject[sourceId2][chapterId]) {
                            childObject[sourceId2][chapterId] = mainChildObject[chapterId]
                            continue
                        }
                        let chapterChildObject = mainChildObject[chapterId]
                        for (let questId in chapterChildObject) {
                            if (!Array.isArray(childObject[sourceId2][chapterId][questId])) {
                                childObject[sourceId2][chapterId][questId] = chapterChildObject[questId]
                                continue
                            }
                            childObject[sourceId2][chapterId][questId] = childObject[sourceId2][chapterId][questId].concat(chapterChildObject[questId])
                        }
                    }
                }
            }
            for (let sourceId in childObject) {
                if (!resolvedJson[sourceId]) continue
                let mainChildObject = childObject[sourceId]
                for (let chapterId in mainChildObject) {
                    if (!resolvedJson[sourceId].chapter[chapterId]) continue
                    let chapterChildObject = mainChildObject[chapterId]
                    for (let questId in chapterChildObject) {
                        if (!resolvedJson[sourceId].chapter[chapterId].quest[questId]) continue
                        let resolvedQuestJson = resolvedJson[sourceId].chapter[chapterId].quest[questId]
                        if (resolvedQuestJson.type !== 'quest') continue
                        resolvedQuestJson.child = chapterChildObject[questId]
                    }
                }
            }
            return {
                json: resolvedJson,
                config: Utils.deepCopy(config),
                bitmaps: Utils.deepCopy(bitmaps)
            }
        }
        return resolveJson
    })(),
    isQuestExist (json, sourceId, chapterId, questId) {
        let questJson = this.getQuestJson(json, sourceId, chapterId, questId)
        return Boolean(questJson)
    },
    getQuestJson (json, sourceId, chapterId, questId) {
        if (!Utils.isObject(json)) return null
        if (!json[sourceId]) return null
        let mainJson = json[sourceId]
        if (!mainJson.chapter[chapterId]) return null
        let chapterJson = mainJson.chapter[chapterId]
        if (!chapterJson.quest[questId]) return null
        return chapterJson.quest[questId] || null
    },
    getParent (json, sourceId, chapterId, questId) {
        let questJson = this.getQuestJson(json, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return []
        return questJson.parent
    },
    getChild (json, sourceId, chapterId, questId) {
        let questJson = this.getQuestJson(json, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return []
        return questJson.child
    },
    getInputState (data, sourceId, chapterId, questId, index) {
        let DEFAULT = { state: EnumObject.inputState.unfinished }
        if (!Utils.isObject(data)) return DEFAULT
        if (!data[sourceId]) return DEFAULT
        let mainData = data[sourceId]
        if (!mainData[chapterId]) return DEFAULT
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) return DEFAULT
        let questData = chapterData[questId]
        return questData.input[index] || DEFAULT
    },
    getOutputState (data, sourceId, chapterId, questId, index) {
        let DEFAULT = { state: EnumObject.outputState.unreceived }
        if (!Utils.isObject(data)) return DEFAULT
        if (!data[sourceId]) return DEFAULT
        let mainData = data[sourceId]
        if (!mainData[chapterId]) return DEFAULT
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) return DEFAULT
        let questData = chapterData[questId]
        return questData.output[index] || DEFAULT
    },
    validateQuestSaveData (questJson, questData) {
        if (!questJson || questJson.type !== 'quest') return
        if (questData.inputState === EnumObject.questInputState.locked) return
        let state = EnumObject.questInputState.finished
        for (let i = 0; i < questJson.inner.input.length; i++) {
            let tempState = (questData.input[i] || {state: EnumObject.inputState.unfinished}).state
            if (tempState === EnumObject.inputState.unfinished) {
                state = EnumObject.questInputState.unfinished
                break
            } else if (tempState === EnumObject.inputState.repeat_unfinished) {
                state = EnumObject.questInputState.repeat_unfinished
            }
        }
        switch (questData.inputState) {
            case EnumObject.questInputState.finished: {
                if (state !== EnumObject.questInputState.finished) {
                    questData.inputState = state
                    questData.outputState = EnumObject.questOutputState.locked
                }
                break
            }
            case EnumObject.questInputState.unfinished:
            case EnumObject.questInputState.repeat_unfinished: {
                if (state === EnumObject.questInputState.finished) {
                    questData.inputState = EnumObject.questInputState.finished
                }
                break
            }
        }
        if (questData.inputState === EnumObject.questInputState.finished) {
            questData.outputState = EnumObject.questOutputState.received
            for (let i = 0; i < questJson.inner.output.length; i++) {
                let tempState = (questData.output[i] || {state: EnumObject.outputState.unreceived}).state
                if (tempState === EnumObject.outputState.unreceived) {
                    questData.outputState = EnumObject.questOutputState.unreceived
                    break
                } else if (tempState === EnumObject.outputState.repeat_unreceived) {
                    questData.outputState = EnumObject.questOutputState.repeat_unreceived
                }
            }
        } else {
            questData.outputState = EnumObject.questOutputState.locked
        }
    },
    validateSaveData (json, data) {
        /** @type { Array<[CQTypes.sourceId, CQTypes.chapterId, CQTypes.questId]> } */
        let stack = []
        let numberIn = {}
        for (let sourceId in json) {
            numberIn[sourceId] = {}
            let mainJson = json[sourceId]
            let mainData = data[sourceId]
            for (let chapterId in mainJson.chapter) {
                numberIn[sourceId][chapterId] = {}
                let chapterJson = mainJson.chapter[chapterId]
                let chapterData = mainData && mainData[chapterId]
                for (let questId in chapterJson.quest) {
                    let questJson = chapterJson.quest[questId]
                    if (questJson.type !== 'quest') continue
                    if (questJson.parent.length > 0) continue
                    numberIn[sourceId][chapterId][questId] = -1
                    stack.push([sourceId, chapterId, questId])
                    if (!mainData) mainData = data[sourceId] = {}
                    if (!chapterData) chapterData = mainData[chapterId] = {}
                    let questData = chapterData[questId]
                    if (!questData) {
                        questData = chapterData[questId] = {
                            inputState: EnumObject.questInputState.unfinished,
                            outputState: EnumObject.questOutputState.locked,
                            input: [],
                            output: []
                        }
                    }
                    if (questData.inputState === EnumObject.questInputState.locked) {
                        questData.inputState = EnumObject.questInputState.unfinished
                    }
                    this.validateQuestSaveData(questJson, questData)
                }
            }
        }
        let that = this
        let path = null
        while (path = stack.pop()) {
            let inputState = this.getQuestInputState(json, data, path[0], path[1], path[2])
            if (inputState === EnumObject.questInputState.finished || inputState === EnumObject.questInputState.repeat_unfinished) {
                this.getChild(json, path[0], path[1], path[2]).forEach(function (child) {
                    let sourceId = child[0], chapterId = child[1], questId = child[2]
                    if (!numberIn[sourceId]) numberIn[sourceId] = {}
                    if (!numberIn[sourceId][chapterId]) numberIn[sourceId][chapterId] = {}
                    if (numberIn[sourceId][chapterId][questId] < 0) return
                    let questJson = that.getQuestJson(json, sourceId, chapterId, questId)
                    if (!questJson || questJson.type !== 'quest') return
                    if (typeof numberIn[sourceId][chapterId][questId] !== 'number') numberIn[sourceId][chapterId][questId] = 0
                    if (++numberIn[sourceId][chapterId][questId] >= questJson.parent.length) {
                        numberIn[sourceId][chapterId][questId] = -1
                        stack.push([sourceId, chapterId, questId])
                        let mainData = data[sourceId]
                        if (!mainData) mainData = data[sourceId] = {}
                        let chapterData = mainData[chapterId]
                        if (!chapterData) chapterData = mainData[chapterId] = {}
                        let questData = chapterData[questId]
                        if (!questData) {
                            questData = chapterData[questId] = {
                                inputState: EnumObject.questInputState.unfinished,
                                outputState: EnumObject.questOutputState.locked,
                                input: [],
                                output: []
                            }
                        }
                        questData.inputState = EnumObject.questInputState.unfinished
                        that.validateQuestSaveData(questJson, questData)
                    }
                })
            }
        }
    },
    getQuestInputState (json, data, sourceId, chapterId, questId) {
        let DEFAULT = EnumObject.questInputState.locked
        if (!this.isQuestExist(json, sourceId, chapterId, questId)) return DEFAULT
        let parent = this.getParent(json, sourceId, chapterId, questId)
        if (parent.length === 0) {
            DEFAULT = EnumObject.questInputState.unfinished
        }
        if (!Utils.isObject(data)) return DEFAULT
        if (!data[sourceId]) return DEFAULT
        let mainData = data[sourceId]
        if (!mainData[chapterId]) return DEFAULT
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) return DEFAULT
        let state = chapterData[questId].inputState
        if (parent.length === 0 && state === EnumObject.questInputState.locked) return DEFAULT
        return state
    },
    getQuestOutputState (json, data, sourceId, chapterId, questId) {
        let DEFAULT = EnumObject.questOutputState.locked
        if (!this.isQuestExist(json, sourceId, chapterId, questId)) return DEFAULT
        let inputState = this.getQuestInputState(json, data, sourceId, chapterId, questId)
        if (inputState === EnumObject.questInputState.finished || inputState === EnumObject.questInputState.repeat_unfinished) {
            DEFAULT = EnumObject.questOutputState.unreceived
        }
        if (!Utils.isObject(data)) return DEFAULT
        if (!data[sourceId]) return DEFAULT
        let mainData = data[sourceId]
        if (!mainData[chapterId]) return DEFAULT
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) return DEFAULT
        let state = chapterData[questId].outputState
        if (DEFAULT === EnumObject.questOutputState.unreceived && state === EnumObject.questOutputState.locked) return DEFAULT
        return state
    },
    getQuestSaveData (json, data, sourceId, chapterId, questId) {
        /** @type { CQTypes.QuestSaveData } */
        let ret = {
            inputState: EnumObject.questInputState.locked,
            outputState: EnumObject.questOutputState.locked,
            input: [],
            output: []
        }
        if (!this.isQuestExist(json, sourceId, chapterId, questId)) return ret
        let parent = this.getParent(json, sourceId, chapterId, questId)
        if (parent.length === 0) ret.inputState = EnumObject.questInputState.unfinished
        if (!Utils.isObject(data)) return ret
        if (!data[sourceId]) return ret
        let mainData = data[sourceId]
        if (!mainData[chapterId]) return ret
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) return ret
        if (parent.length !== 0 || chapterData[questId].inputState !== EnumObject.questInputState.locked) {
            ret.inputState = chapterData[questId].inputState
        }
        if (ret.inputState <= EnumObject.questInputState.unfinished || chapterData[questId].outputState !== EnumObject.questOutputState.locked) {
            ret.outputState = chapterData[questId].outputState
        }
        ret.input = chapterData[questId].input
        ret.output = chapterData[questId].output
        return ret
    },
    setInputState (json, data, sourceId, chapterId, questId, index, inputStateObject, cb) {
        if (!Utils.isObject(json)) return
        if (!Utils.isObject(data)) return
        if (!Utils.isObject(inputStateObject)) return
        if (typeof inputStateObject.state !== 'number') return
        if (!Utils.isObject(cb)) cb = {}
        let oldQuestInputState = this.getQuestInputState(json, data, sourceId, chapterId, questId)
        if (oldQuestInputState === EnumObject.questInputState.locked) return
        let questJson = System.getQuestJson(json, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        if (index >= questJson.inner.input.length) return
        let oldInputStateObject = this.getInputState(data, sourceId, chapterId, questId, index)
        if (!data[sourceId]) data[sourceId] = {}
        let mainData = data[sourceId]
        if (!mainData[chapterId]) mainData[chapterId] = {}
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) {
            chapterData[questId] = {
                inputState: EnumObject.questInputState.unfinished,
                input: [],
                outputState: EnumObject.questOutputState.locked,
                output: []
            }
        }
        let questData = chapterData[questId]
        questData.input[index] = Utils.deepCopy(inputStateObject)
        if (typeof cb.onInputStateChanged === 'function') {
            cb.onInputStateChanged(questData.input[index], oldInputStateObject)
        }
        let questInputState = EnumObject.questInputState.finished
        for (let i = 0; i < questJson.inner.input.length; i++) {
            let tempState = (questData.input[i] || {state: EnumObject.inputState.unfinished}).state
            if (tempState === EnumObject.inputState.unfinished) {
                questInputState = EnumObject.questInputState.unfinished
                break
            } else if (tempState === EnumObject.inputState.repeat_unfinished) {
                questInputState = EnumObject.questInputState.repeat_unfinished
            }
        }
        let that = this
        if (oldQuestInputState !== questInputState) {
            questData.inputState = questInputState
            if (typeof cb.onQuestInputStateChanged === 'function') {
                cb.onQuestInputStateChanged(questData.inputState, oldQuestInputState)
            }
            if (oldQuestInputState <= EnumObject.questInputState.unfinished && questInputState >= EnumObject.questInputState.finished) {
                questData.outputState = questJson.inner.output.length ? EnumObject.questOutputState.unreceived : EnumObject.questOutputState.received
                if (typeof cb.onQuestOutputStateChanged === 'function') {
                    cb.onQuestOutputStateChanged(questData.outputState, EnumObject.questOutputState.locked)
                }
                questJson.child.forEach(function (pathArray) {
                    let childQuestJson = that.getQuestJson(json, pathArray[0], pathArray[1], pathArray[2])
                    if (!childQuestJson || childQuestJson.type !== 'quest') return
                    let unlocked = childQuestJson.parent.every(function (parentPathArray) {
                        let state = that.getQuestInputState(json, data, parentPathArray[0], parentPathArray[1], parentPathArray[2])
                        return state === EnumObject.questInputState.finished || state === EnumObject.questInputState.repeat_unfinished
                    })
                    if (unlocked) {
                        if (!data[pathArray[0]]) data[pathArray[0]] = {}
                        let mainData = data[pathArray[0]]
                        if (!mainData[pathArray[1]]) mainData[pathArray[1]] = {}
                        let chapterData = mainData[pathArray[1]]
                        if (!chapterData[pathArray[2]]) {
                            chapterData[pathArray[2]] = {
                                inputState: EnumObject.questInputState.locked,
                                input: [],
                                outputState: EnumObject.questOutputState.locked,
                                output: []
                            }
                        }
                        let questData = chapterData[pathArray[2]]
                        let oldQuestInputState = questData.inputState
                        questData.inputState = EnumObject.questInputState.unfinished
                        that.validateQuestSaveData(childQuestJson, questData)
                        if (questData.inputState !== oldQuestInputState && typeof cb.onChildQuestInputStateChanged === 'function') {
                            cb.onChildQuestInputStateChanged(Utils.deepCopy(pathArray), questData.inputState, oldQuestInputState)
                        }
                    }
                })
            } else if (oldQuestInputState === EnumObject.questInputState.repeat_unfinished && questInputState === EnumObject.questInputState.finished) {
                let repeat = false
                for (let i = 0; i < questJson.inner.output.length; i++) {
                    let config = IOTypeTools.getOutputTypeConfig(questJson.inner.output[i].type)
                    if (!config || !config.allowRepeat) continue
                    if (!questData.output[i]) {
                        questData.output[i] = {
                            state: EnumObject.outputState.repeat_unreceived
                        }
                    }
                    if (questData.outputState[i] !== EnumObject.outputState.received) continue
                    questData.output[i].state = EnumObject.outputState.repeat_unreceived
                    repeat = true
                }
                if (repeat) {
                    questData.outputState = EnumObject.questOutputState.repeat_unreceived
                    if (typeof cb.onQuestOutputStateChanged === 'function') {
                        cb.onQuestOutputStateChanged(questData.outputState, EnumObject.questOutputState.locked)
                    }
                }
            }
        }
    },
    setOutputState (json, data, sourceId, chapterId, questId, index, outputStateObject, cb) {
        if (!Utils.isObject(json)) return
        if (!Utils.isObject(data)) return
        if (!Utils.isObject(outputStateObject)) return
        if (typeof outputStateObject.state !== 'number') return
        if (!Utils.isObject(cb)) cb = {}
        let oldQuestOutputState = this.getQuestOutputState(json, data, sourceId, chapterId, questId)
        if (oldQuestOutputState === EnumObject.questOutputState.locked) return
        let questJson = this.getQuestJson(json, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        if (index > questJson.inner.output.length) return
        let oldOutputStateObject = this.getOutputState(data, sourceId, chapterId, questId, index)
        if (!data[sourceId]) data[sourceId] = {}
        let mainData = data[sourceId]
        if (!mainData[chapterId]) mainData[chapterId] = {}
        let chapterData = mainData[chapterId]
        if (!chapterData[questId]) {
            chapterData[questId] = {
                inputState: EnumObject.questInputState.finished,
                input: [],
                outputState: EnumObject.questOutputState.unreceived,
                output: []
            }
        }
        let questData = chapterData[questId]
        questData.output[index] = Utils.deepCopy(outputStateObject)
        if (typeof cb.onOutputStateChanged === 'function') {
            cb.onOutputStateChanged(questData.output[index], oldOutputStateObject)
        }
        let questOutputState = EnumObject.questOutputState.received
        for (let i = 0; i < questJson.inner.output.length; i++) {
            let tempState = (questData.output[i] || {state: EnumObject.outputState.unreceived}).state
            if (tempState === EnumObject.outputState.unreceived) {
                questOutputState = EnumObject.questOutputState.unreceived
                break
            } else if (tempState === EnumObject.outputState.repeat_unreceived) {
                questOutputState = EnumObject.questOutputState.repeat_unreceived
            }
        }
        if (oldQuestOutputState !== questOutputState) {
            questData.outputState = questOutputState
            if (typeof cb.onQuestOutputStateChanged === 'function') {
                cb.onQuestOutputStateChanged(questData.outputState, oldQuestOutputState)
            }
        }
    }
}




// file: network.js

/// <reference path='./System.js'/>

// Server
Network.addServerPacket('CustomQuests.Server.sendIOPacket', function (client, packetData) {
    if (packetData.type !== 'input' && packetData.type !== 'output') return
    if (typeof packetData.sourceId !== 'string') return
    if (typeof packetData.chapterId !== 'string') return
    if (typeof packetData.questId !== 'string') return
    if (typeof packetData.index !== 'number') return
    if (!Utils.isObject(packetData.data)) return
    let saveId = ServerSystem.getSaveId(client.getPlayerUid())
    if (!ServerSystem.isSaveIdValid(saveId)) {
        if (Setting.saveForTeam && !ServerSystem.getTeam(client.getPlayerUid())) {
            client.send('CustomQuests.Client.alert', {
                text: ['$alert.no_team']
            })
        }
        return
    }
    let loadedQuest = ServerSystem.getLoadedQuest(saveId, packetData.sourceId, packetData.chapterId, packetData.questId)
    if (packetData.type === 'input') {
        if (!Array.isArray(loadedQuest.input)) return
        let inputId = loadedQuest.input[packetData.index]
        if (!IOTypeTools.isInputIdLoaded(inputId)) return
        IOTypeTools.callInputTypeCb(inputId, 'onPacket', {
            client: client,
            packetData: packetData.data
        })
    } else if (packetData.type === 'output') {
        if (!Array.isArray(loadedQuest.output)) return
        let outputId = loadedQuest.output[packetData.index]
        if (!IOTypeTools.isOutputIdLoaded(outputId)) return
        IOTypeTools.callOutputTypeCb(outputId, 'onPacket', {
            client: client,
            packetData: packetData.data
        })
    }
})

Network.addServerPacket('CustomQuests.Server.receiveAllQuest', function (client, packetData) {
    if (typeof packetData.sourceId !== 'string') return
    if (!Utils.isObject(packetData.extraInfo)) packetData.extraInfo = {}
    let player = client.getPlayerUid()
    let saveId = ServerSystem.getSaveId(player)
    if (!ServerSystem.isSaveIdValid(saveId)) {
        if (Setting.saveForTeam && !ServerSystem.getTeam(client.getPlayerUid())) {
            client.send('CustomQuests.Client.alert', {
                text: ['$alert.no_team']
            })
        }
        return
    }
    packetData.extraInfo.operator = {
        type: 'player',
        player: player
    }
    ServerSystem.receiveAllQuest(saveId, packetData.sourceId, packetData.extraInfo)
})

Network.addServerPacket('CustomQuests.Server.TeamTools', function (client, packetData) {
    let player = client.getPlayerUid()
    if (typeof packetData.player === 'number') player = packetData.player
    if (typeof packetData.method !== 'string') return
    switch(packetData.method) {
        case 'create': {
            if (!Utils.isObject(packetData.team)) return
            ServerSystem.createTeam(player, packetData.team)
            break
        }
        case 'join': {
            if (typeof packetData.teamId !== 'string') return
            let team = ServerSystem.getTeam(packetData.teamId)
            if (!team) return
            if (packetData.password !== team.password) {
                client.send('CustomQuests.Client.alert', {
                    text: ['$alert.fail.passwordWrong']
                })
                return
            }
            ServerSystem.setTeam(player, packetData.teamId)
            break
        }
        case 'exit': {
            ServerSystem.setTeam(player, InvalidId)
            break
        }
        case 'setState': {
            if (typeof packetData.state !== 'number') return
            let team = ServerSystem.getTeam(player)
            if (!team) return
            ServerSystem.setPlayerStateForTeam(team.id, player, packetData.state)
            ServerSystem.updateTeam(team.id)
            break
        }
        case 'delete': {
            let teamId = packetData.teamId
            if (typeof teamId !== 'string') {
                let team = ServerSystem.getTeam(player)
                if (!team) return
                teamId = team.id
            }
            ServerSystem.deleteTeam(teamId)
            break
        }
        case 'changeBitmap': {
            if (!Utils.isObject(packetData.bitmap)) return
            let team = packetData.teamId ? ServerSystem.getTeam(packetData.teamId) : ServerSystem.getTeam(player)
            if (!team) return
            Store.saved.team[team.id].bitmap = packetData.bitmap
            ServerSystem.updateTeam(team.id)
            new NetworkConnectedClientList()
                .setupAllPlayersPolicy()
                .send('CustomQuests.Client.setLocalCache', {
                    teamList: ServerSystem.getTeamList()
                })
            break
        }
        case 'rename': {
            if (typeof packetData.name !== 'string') return
            let team = packetData.teamId ? ServerSystem.getTeam(packetData.teamId) : ServerSystem.getTeam(player)
            if (!team) return
            Store.saved.team[team.id].name = packetData.name
            ServerSystem.updateTeam(team.id)
            new NetworkConnectedClientList()
                .setupAllPlayersPolicy()
                .send('CustomQuests.Client.setLocalCache', {
                    teamList: ServerSystem.getTeamList()
                })
            break
        }
        case 'changePassword': {
            if (typeof packetData.password !== 'string') return
            let team = packetData.teamId ? ServerSystem.getTeam(packetData.teamId) : ServerSystem.getTeam(player)
            if (!team) return
            Store.saved.team[team.id].password = packetData.password
            ServerSystem.updateTeam(team.id)
            break
        }
    }
})

// Client
Network.addClientPacket('CustomQuests.Client.message', function (packetData) {
    if (!Array.isArray(packetData.text)) return
    let msg = ''
    packetData.text.forEach(function (str) {
        if (str[0] === '$') {
            str = TranAPI.translate(str.replace(/^\$/, ''))
        }
        msg += str
    })
    Game.message(msg)
})

Network.addClientPacket('CustomQuests.Client.alert', function (packetData) {
    if (!Array.isArray(packetData.text)) return
    let msg = ''
    packetData.text.forEach(function (str) {
        if (str[0] === '$') {
            str = TranAPI.translate(str.replace(/^\$/, ''))
        }
        msg += str
    })
    alert(msg)
})

Network.addClientPacket('CustomQuests.Client.resolveJson', function (packetData) {
    if (!Utils.isObject(packetData.json)) return
    let obj = System.resolveJson(packetData.json)
    Store.localCache.resolvedJson = obj.json
    Store.localCache.jsonConfig = obj.config
    if (Array.isArray(obj.bitmaps)) {
        obj.bitmaps.forEach(function (bitmapObject) {
            if (!Utils.isObject(bitmapObject)) return
            if (typeof bitmapObject.name !== 'string') return
            if (typeof bitmapObject.base64 !== 'string') return
            Utils.putTextureSourceFromBase64('cq_custom_bitmap:' + bitmapObject.name, bitmapObject.base64)
        })
    }
})

Network.addClientPacket('CustomQuests.Client.setLocalCache', function (packetData) {
    let oldLocalCache = Utils.deepCopy(Store.localCache)
    if (Utils.isObject(packetData.saveData) || packetData.saveData === null) {
        Store.localCache.saveData = packetData.saveData
    }
    if (Utils.isObject(packetData.team) || packetData.team === null) {
        Store.localCache.team = packetData.team
    }
    if (Array.isArray(packetData.teamPlayerList) || packetData.teamPlayerList === null) {
        Store.localCache.teamPlayerList = packetData.teamPlayerList
    }
    if (typeof packetData.isAdmin === 'boolean') {
        Store.localCache.isAdmin = packetData.isAdmin
    }
    if (Array.isArray(packetData.teamList)) {
        Store.localCache.teamList = packetData.teamList
    }
    try {
        Callback.invokeCallback('CustomQuests.onLocalCacheChanged',
            Utils.deepCopy(packetData),
            oldLocalCache
        )
    } catch (err) {
        Utils.error('Error in Callback \'CustomQuests.onLocalCacheChanged\' (network.js):\n', err)
    }
})

Network.addClientPacket('CustomQuests.Client.setInputState', function (packetData) {
    if (typeof packetData.sourceId !== 'string') return
    if (typeof packetData.chapterId !== 'string') return
    if (typeof packetData.questId !== 'string') return
    if (typeof packetData.index !== 'number') return
    if (!Utils.isObject(packetData.extraInfo)) return
    if (!Utils.isObject(packetData.inputStateObject)) return
    let sourceId = packetData.sourceId
    let chapterId = packetData.chapterId
    let questId = packetData.questId
    let index = packetData.index
    let extraInfo = packetData.extraInfo
    System.setInputState(Store.localCache.resolvedJson, Store.localCache.saveData, sourceId, chapterId, questId, index, packetData.inputStateObject, {
            onInputStateChanged (newInputStateObject, oldInputStateObject) {
                try {
                    Callback.invokeCallback('CustomQuests.onLocalInputStateChanged',
                        [sourceId, chapterId, questId],
                        index,
                        Utils.deepCopy(newInputStateObject),
                        Utils.deepCopy(oldInputStateObject),
                        Utils.deepCopy(extraInfo)
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onLocalInputStateChanged\' (network.js):\n', err)
                }
            },
            onQuestInputStateChanged (newQuestInputState, oldQuestInputState) {
                try {
                    Callback.invokeCallback('CustomQuests.onLocalQuestInputStateChanged',
                        [sourceId, chapterId, questId],
                        newQuestInputState,
                        oldQuestInputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onLocalQuestInputStateChanged\' (network.js):\n', err)
                }
            },
            onQuestOutputStateChanged (newQuestOutputState, oldQuestOutputState) {
                try {
                    Callback.invokeCallback('CustomQuests.onLocalQuestOutputStateChanged',
                        [sourceId, chapterId, questId],
                        newQuestOutputState,
                        oldQuestOutputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onLocalQuestOutputStateChanged\' (network.js):\n', err)
                }
            },
            onChildQuestInputStateChanged (pathArray, newQuestInputState, oldQuestInputState) {
                try {
                    Callback.invokeCallback('CustomQuests.onLocalQuestInputStateChanged',
                        [pathArray[0], pathArray[1], pathArray[2]],
                        newQuestInputState,
                        oldQuestInputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onLocalQuestInputStateChanged\' (network.js):\n', err)
                }
            }
        }
    )
})

Network.addClientPacket('CustomQuests.Client.setOutputState', function (packetData) {
    if (typeof packetData.sourceId !== 'string') return
    if (typeof packetData.chapterId !== 'string') return
    if (typeof packetData.questId !== 'string') return
    if (typeof packetData.index !== 'number') return
    if (!Utils.isObject(packetData.extraInfo)) return
    if (!Utils.isObject(packetData.outputStateObject)) return
    let sourceId = packetData.sourceId
    let chapterId = packetData.chapterId
    let questId = packetData.questId
    let index = packetData.index
    let extraInfo = packetData.extraInfo
    System.setOutputState(Store.localCache.resolvedJson, Store.localCache.saveData, sourceId, chapterId, questId, index, packetData.outputStateObject, {
            onOutputStateChanged (newOutputStateObject, oldOutputStateObject) {
                try {
                    Callback.invokeCallback('CustomQuests.onLocalOutputStateChanged',
                        [sourceId, chapterId, questId],
                        index,
                        Utils.deepCopy(newOutputStateObject),
                        Utils.deepCopy(oldOutputStateObject),
                        Utils.deepCopy(extraInfo)
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onLocalOutputStateChanged\' (network.js):\n', err)
                }
            },
            onQuestOutputStateChanged (newQuestOutputState, oldQuestOutputState) {
                try {
                    Callback.invokeCallback('CustomQuests.onLocalQuestOutputStateChanged',
                        [sourceId, chapterId, questId],
                        newQuestOutputState,
                        oldQuestOutputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onLocalQuestOutputStateChanged\' (network.js):\n', err)
                }
            }
        }
    )
})

Network.addClientPacket('CustomQuests.Client.openUi', function (packetData) {
    if (typeof packetData.sourceId !== 'string') return
    QuestUi.open(packetData.sourceId)
})




// file: ServerSystem.js

/// <reference path='./network.js'/>

/**
 * @param { Array<Nullable<string>> } loadedIOArray 
 * @param { Array<Nullable<string>> } bakArray 
 * @param { number } index 
 * @param { Array<string> } idArray 
 * @returns { void }
 */
const $ServerSystem_onUnload = function (loadedIOArray, bakArray, index, idArray) {
    let idIndex = idArray.indexOf(bakArray[index])
    if (idIndex >= 0) idArray.splice(idIndex, 1)
    if (loadedIOArray[index] === bakArray[index]) {
        loadedIOArray[index] = null
    }
}

/** @type { ServerSystem } */
const ServerSystem = {
    json: {},
    resolvedJson: (function () {
        Callback.addCallback('PostLoaded', function () {
            ServerSystem.resolvedJson = System.resolveJson(ServerSystem.json).json
            let rootQuest = ServerSystem.rootQuest = {}
            for (let sourceId in ServerSystem.resolvedJson) {
                rootQuest[sourceId] = {}
                let mainJson = ServerSystem.resolvedJson[sourceId]
                for (let chapterId in mainJson.chapter) {
                    rootQuest[sourceId][chapterId] = {}
                    let chapterJson = mainJson.chapter[chapterId]
                    for (let questId in chapterJson.quest) {
                        let questJson = chapterJson.quest[questId]
                        if (questJson.type === 'quest' && questJson.parent.length === 0) {
                            rootQuest[sourceId][chapterId][questId] = true
                        }
                    }
                }
            }
        })
        return null
    })(),
    rootQuest: {},
    loadedQuest: (function () {
        Callback.addCallback('LevelSelected', function () {
            ServerSystem.loadedQuest = {}
        })
        return {}
    })(),
    loadedQuestIdArray: (function () {
        Callback.addCallback('LevelSelected', function () {
            ServerSystem.loadedQuestIdArray = {}
        })
        return {}
    })(),
    addContents (sourceId, contents) {
        if (typeof sourceId !== 'string') return
        if (!Utils.isObject(contents)) return
        if (!Array.isArray(contents.main)) return
        this.json[sourceId] = contents
    },
    createSaveId (playerList) {
        if (!Array.isArray(playerList)) return InvalidId
        if (playerList.length === 0) return InvalidId
        let saveId = Utils.getUUID()
        while (this.isSaveIdValid(saveId)) saveId = Utils.getUUID()
        Store.saved.playerList[saveId] = Utils.deepCopy(playerList)
        Store.saved.data[saveId] = {}
        Store.saved.exist[saveId] = true
        return saveId
    },
    getSaveId (target) {
        if (typeof target === 'number') {
            let obj = Store.saved.players[target]
            if (!obj) return InvalidId
            if (Setting.saveForTeam) return this.getSaveId(obj.teamId)
            return obj.saveId
        } else if (typeof target === 'string') {
            if (!Setting.saveForTeam) return InvalidId
            if (target === InvalidId) return InvalidId
            let team = Store.saved.team[target]
            if (!team) return InvalidId
            return team.saveId
        }
        return InvalidId
    },
    deleteSaveId (saveId) {
        if (!this.isSaveIdValid(saveId)) return
        this.unloadAllLoadedQuest(saveId)
        delete Store.saved.playerList[saveId]
        delete Store.saved.data[saveId]
        delete Store.saved.exist[saveId]
    },
    isSaveIdValid (saveId) {
        if (saveId === InvalidId) return false
        return Boolean(Store.saved.exist[saveId])
    },
    isTeamSaveId (saveId) {
        if (saveId === InvalidId) return false
        let playerList = this.getPlayerList(saveId)
        if (playerList.length === 0) return false
        let team = this.getTeam(playerList[0])
        return Boolean(team && team.saveId === saveId)
    },
    setPlayerLoaded (player, loaded) {
        if (typeof player !== 'number') return
        if (typeof loaded !== 'boolean') loaded = Boolean(loaded)
        let saveId = this.getSaveId(player)
        if (this.isSaveIdValid(saveId)) {
            if (!Store.cache.playerList[saveId]) {
                Store.cache.playerList[saveId] = {
                    player: [],
                    client: new NetworkConnectedClientList()
                }
            }
            let obj = Store.cache.playerList[saveId]
            if (loaded) {
                Store.cache.playerLoaded[player] = true
                if (obj.player.indexOf(player) < 0) obj.player.push(player)
                obj.client && obj.client.add(Network.getClientForPlayer(player))
                this.loadAllQuest(saveId)
            } else {
                Store.cache.playerLoaded[player] = false
                let index = obj.player.indexOf(player)
                if (index >= 0) obj.player.splice(index, 1)
                obj.client && obj.client.remove(Network.getClientForPlayer(player))
                if (obj.player.length === 0) {
                    this.unloadAllLoadedQuest(saveId)
                }
            }
        } else {
            Store.cache.playerLoaded[player] = loaded
        }
    },
    isPlayerLoaded (player) {
        if (typeof player !== 'number') return false
        return Boolean(Store.cache.playerLoaded[player])
    },
    getPlayerList (saveId, online) {
        if (!this.isSaveIdValid(saveId)) return []
        if (online) {
            let obj = Store.cache.playerList[saveId]
            if (!obj) return []
            return obj.player
        } else {
            return Store.saved.playerList[saveId]
        }
    },
    getConnectedClientList (saveId) {
        if (!this.isSaveIdValid(saveId)) return null
        let obj = Store.cache.playerList[saveId]
        if (!obj) return null
        return obj.client
    },
    getSaveData (saveId) {
        if (!this.isSaveIdValid(saveId)) return {}
        return Store.saved.data[saveId]
    },
    getLoadedQuest (saveId, sourceId, chapterId, questId) {
        if (!this.isSaveIdValid(saveId)) return {}
        if (!this.loadedQuest[saveId]) this.loadedQuest[saveId] = {}
        let loadedQuest = this.loadedQuest[saveId]
        if (!loadedQuest[sourceId]) loadedQuest[sourceId] = {}
        let mainLoadedQuest = loadedQuest[sourceId]
        if (!mainLoadedQuest[chapterId]) mainLoadedQuest[chapterId] = {}
        let chapterLoadedQuest = mainLoadedQuest[chapterId]
        if (!chapterLoadedQuest[questId]) chapterLoadedQuest[questId] = {}
        return chapterLoadedQuest[questId]
    },
    getTypedInputId (saveId, type) {
        return []
    },
    getTypedOutputId (saveId, type) {
        return []
    },
    unloadAllLoadedQuest (saveId) {
        if (!this.isSaveIdValid(saveId)) return
        let loadedQuestIdArray = this.loadedQuestIdArray[saveId]
        if (!loadedQuestIdArray) return
        loadedQuestIdArray.input.forEach(function (inputId) {
            if (!IOTypeTools.isInputIdLoaded(inputId)) return
            IOTypeTools.unloadInput(inputId)
        })
        loadedQuestIdArray.output.forEach(function (outputId) {
            if (!IOTypeTools.isOutputIdLoaded(outputId)) return
            IOTypeTools.unloadOutput(outputId)
        })
        delete this.loadedQuest[saveId]
        delete this.loadedQuestIdArray[saveId]
    },
    loadInput (saveId, sourceId, chapterId, questId, index) {
        if (!this.isSaveIdValid(saveId)) return
        let questJson = System.getQuestJson(this.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        if (index >= questJson.inner.input.length) return
        if (!questJson.inner.input[index]) return
        let saveData = this.getSaveData(saveId)
        if (System.getQuestInputState(this.resolvedJson, saveData, sourceId, chapterId, questId) === EnumObject.questInputState.locked) return
        if (System.getInputState(saveData, sourceId, chapterId, questId, index).state === EnumObject.inputState.finished) return
        let questLoadedQuest = this.getLoadedQuest(saveId, sourceId, chapterId, questId)
        if (!Array.isArray(questLoadedQuest.input)) questLoadedQuest.input = []
        if (IOTypeTools.isInputIdLoaded(questLoadedQuest.input[index])) return
        if (!this.loadedQuestIdArray[saveId]) {
            this.loadedQuestIdArray[saveId] = {
                input: [],
                output: []
            }
        }
        let inputIdArray = this.loadedQuestIdArray[saveId].input
        let inputBak = []
        questLoadedQuest.input[index] = inputBak[index] = IOTypeTools.createInputId(questJson.inner.input[index], {
            getPlayerList: Utils.safeResult(this.getPlayerList.bind(this, saveId)),
            getConnectedClientList: this.getConnectedClientList.bind(this, saveId),
            getState: Utils.safeResult(System.getInputState.bind(System, saveData, sourceId, chapterId, questId, index)),
            setState: this.setInputState.bind(this, saveId, sourceId, chapterId, questId, index)
        }, $ServerSystem_onUnload.bind(null, questLoadedQuest.input, inputBak, index, inputIdArray), saveId)
        inputIdArray.push(questLoadedQuest.input[index])
        IOTypeTools.loadInput(questLoadedQuest.input[index])
    },
    loadOutput (saveId, sourceId, chapterId, questId, index) {
        if (!this.isSaveIdValid(saveId)) return
        let questJson = System.getQuestJson(this.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        if (index >= questJson.inner.output.length) return
        if (!questJson.inner.output[index]) return
        let saveData = this.getSaveData(saveId)
        if (System.getQuestOutputState(this.resolvedJson, saveData, sourceId, chapterId, questId) === EnumObject.questOutputState.locked) return
        if (System.getOutputState(saveData, sourceId, chapterId, questId, index).state === EnumObject.outputState.received) return
        let questLoadedQuest = this.getLoadedQuest(saveId, sourceId, chapterId, questId)
        if (!Array.isArray(questLoadedQuest.output)) questLoadedQuest.output = []
        if (IOTypeTools.isOutputIdLoaded(questLoadedQuest.output[index])) return
        if (!this.loadedQuestIdArray[saveId]) {
            this.loadedQuestIdArray[saveId] = {
                input: [],
                output: []
            }
        }
        let outputIdArray = this.loadedQuestIdArray[saveId].output
        let outputBak = []
        questLoadedQuest.output[index] = outputBak[index] = IOTypeTools.createOutputId(questJson.inner.output[index], {
            getPlayerList: Utils.safeResult(this.getPlayerList.bind(this, saveId)),
            getConnectedClientList: this.getConnectedClientList.bind(this, saveId),
            getState: Utils.safeResult(System.getOutputState.bind(System, saveData, sourceId, chapterId, questId, index)),
            setState: this.setOutputState.bind(this, saveId, sourceId, chapterId, questId, index)
        }, $ServerSystem_onUnload.bind(null, questLoadedQuest.output, outputBak, index, outputIdArray), saveId)
        outputIdArray.push(questLoadedQuest.output[index])
        IOTypeTools.loadOutput(questLoadedQuest.output[index])
    },
    loadQuest (saveId, sourceId, chapterId, questId) {
        if (!this.isSaveIdValid(saveId)) return
        let questJson = System.getQuestJson(this.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        let saveData = this.getSaveData(saveId)
        if (System.getQuestInputState(this.resolvedJson, saveData, sourceId, chapterId, questId) === EnumObject.questInputState.locked) return
        let that = this
        let getPlayerList = Utils.safeResult(this.getPlayerList.bind(this, saveId))
        let getConnectedClientList = this.getConnectedClientList.bind(this, saveId)
        let questLoadedQuest = this.getLoadedQuest(saveId, sourceId, chapterId, questId)
        if (!this.loadedQuestIdArray[saveId]) {
            this.loadedQuestIdArray[saveId] = {
                input: [],
                output: []
            }
        }
        let loadedQuestIdArray = this.loadedQuestIdArray[saveId]
        if (!Array.isArray(questLoadedQuest.input)) questLoadedQuest.input = []
        let inputBak = []
        questJson.inner.input.forEach(function (inputJson, index) {
            if (!inputJson) return
            if (System.getInputState(saveData, sourceId, chapterId, questId, index).state === EnumObject.inputState.finished) return
            if (IOTypeTools.isInputIdLoaded(questLoadedQuest.input[index])) return
            questLoadedQuest.input[index] = inputBak[index] = IOTypeTools.createInputId(inputJson, {
                getPlayerList: getPlayerList,
                getConnectedClientList: getConnectedClientList,
                getState: Utils.safeResult(System.getInputState.bind(System, saveData, sourceId, chapterId, questId, index)),
                setState: that.setInputState.bind(that, saveId, sourceId, chapterId, questId, index)
            }, $ServerSystem_onUnload.bind(null, questLoadedQuest.input, inputBak, index, loadedQuestIdArray.input), saveId)
            loadedQuestIdArray.input.push(questLoadedQuest.input[index])
            IOTypeTools.loadInput(questLoadedQuest.input[index])
        })
        if (System.getQuestOutputState(this.resolvedJson, saveData, sourceId, chapterId, questId) === EnumObject.questOutputState.locked) return
        if (!Array.isArray(questLoadedQuest.output)) questLoadedQuest.output = []
        let outputBak = []
        questJson.inner.output.forEach(function (outputJson, index) {
            if (!outputJson) return
            if (System.getOutputState(saveData, sourceId, chapterId, questId, index).state === EnumObject.outputState.received) return
            if (IOTypeTools.isOutputIdLoaded(questLoadedQuest.output[index])) return
            questLoadedQuest.output[index] = outputBak[index] = IOTypeTools.createOutputId(outputJson, {
                getPlayerList: getPlayerList,
                getConnectedClientList: getConnectedClientList,
                getState: Utils.safeResult(System.getOutputState.bind(System, saveData, sourceId, chapterId, questId, index)),
                setState: that.setOutputState.bind(that, saveId, sourceId, chapterId, questId, index)
            }, $ServerSystem_onUnload.bind(null, questLoadedQuest.output, outputBak, index, loadedQuestIdArray.output), saveId)
            loadedQuestIdArray.output.push(questLoadedQuest.output[index])
            IOTypeTools.loadOutput(questLoadedQuest.output[index])
        })
    },
    loadAllQuest (saveId, isRelaod) {
        if (!this.isSaveIdValid(saveId)) return
        if (isRelaod) this.unloadAllLoadedQuest(saveId)
        /** @type { Array<[CQTypes.sourceId, CQTypes.chapterId, CQTypes.questId]> } */
        let stack = []
        let numberIn = {}
        let json = this.resolvedJson
        let data = Store.saved.data[saveId]
        if (!data) return
        for (let sourceId in this.rootQuest) {
            numberIn[sourceId] = {}
            for (let chapterId in this.rootQuest[sourceId]) {
                numberIn[sourceId][chapterId] = {}
                for (let questId in this.rootQuest[sourceId][chapterId]) {
                    if (!this.rootQuest[sourceId][chapterId][questId]) continue
                    numberIn[sourceId][chapterId][questId] = -1
                    stack.push([sourceId, chapterId, questId])
                    this.loadQuest(saveId, sourceId, chapterId, questId)
                }
            }
        }
        let that = this
        let path = null
        while (path = stack.pop()) {
            let inputState = System.getQuestInputState(json, data, path[0], path[1], path[2])
            if (inputState === EnumObject.questInputState.finished || inputState === EnumObject.questInputState.repeat_unfinished) {
                System.getChild(json, path[0], path[1], path[2]).forEach(function (child) {
                    let sourceId = child[0], chapterId = child[1], questId = child[2]
                    if (!numberIn[sourceId]) numberIn[sourceId] = {}
                    if (!numberIn[sourceId][chapterId]) numberIn[sourceId][chapterId] = {}
                    if (numberIn[sourceId][chapterId][questId] < 0) return
                    let questJson = System.getQuestJson(json, sourceId, chapterId, questId)
                    if (!questJson || questJson.type !== 'quest') return
                    if (typeof numberIn[sourceId][chapterId][questId] !== 'number') numberIn[sourceId][chapterId][questId] = 0
                    if (++numberIn[sourceId][chapterId][questId] >= questJson.parent.length) {
                        numberIn[sourceId][chapterId][questId] = -1
                        stack.push([sourceId, chapterId, questId])
                        that.loadQuest(saveId, sourceId, chapterId, questId)
                    }
                })
            }
        }
    },
    setInputState (saveId, sourceId, chapterId, questId, index, extraInfo, inputStateObject) {
        if (!this.isSaveIdValid(saveId)) return
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        if (!Utils.isObject(inputStateObject)) return
        let questJson = System.getQuestJson(this.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        let saveData = this.getSaveData(saveId)
        if (System.getQuestInputState(this.resolvedJson, saveData, sourceId, chapterId, questId) === EnumObject.questOutputState.locked) return
        let client = this.getConnectedClientList(saveId)
        if (client !== null) {
            runOnMainThread(function () {
                client && client.send('CustomQuests.Client.setInputState', {
                    sourceId: sourceId, chapterId: chapterId, questId: questId, index: index,
                    extraInfo: extraInfo, inputStateObject: inputStateObject
                })
            })
        }
        let questLoadedQuest = this.getLoadedQuest(saveId, sourceId, chapterId, questId)
        if (!Array.isArray(questLoadedQuest.input)) questLoadedQuest.input = []
        let input = questLoadedQuest.input
        let that = this
        System.setInputState(this.resolvedJson, saveData, sourceId, chapterId, questId, index, inputStateObject, {
            onInputStateChanged (newInputStateObject, oldInputStateObject) {
                let called = false
                if (newInputStateObject.state !== oldInputStateObject.state) {
                    if (newInputStateObject.state === EnumObject.inputState.finished) {
                        if (IOTypeTools.isInputIdLoaded(input[index])) {
                            try {
                                called = true
                                Callback.invokeCallback('CustomQuests.onInputStateChanged',
                                    input[index],
                                    Utils.deepCopy(newInputStateObject),
                                    Utils.deepCopy(oldInputStateObject),
                                    Utils.deepCopy(extraInfo)
                                )
                            } catch (err) {
                                Utils.error('Error in Callback \'CustomQuests.onInputStateChanged\' (ServerSystem.js):\n', err)
                            }
                            IOTypeTools.unloadInput(input[index])
                        }
                    } else {
                        if (!IOTypeTools.isInputIdLoaded(input[index])) {
                            that.loadInput(saveId, sourceId, chapterId, questId, index)
                        }
                    }
                }
                if (!called && IOTypeTools.isInputIdLoaded(input[index])) {
                    try {
                        called = true
                        Callback.invokeCallback('CustomQuests.onInputStateChanged',
                            input[index],
                            Utils.deepCopy(newInputStateObject),
                            Utils.deepCopy(oldInputStateObject),
                            Utils.deepCopy(extraInfo)
                        )
                    } catch (err) {
                        Utils.error('Error in Callback \'CustomQuests.onInputStateChanged\' (ServerSystem.js):\n', err)
                    }
                }
            },
            onQuestInputStateChanged (newQuestInputState, oldQuestInputState) {
                try {
                    Callback.invokeCallback('CustomQuests.onQuestInputStateChanged',
                        [sourceId, chapterId, questId],
                        newQuestInputState,
                        oldQuestInputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onQuestInputStateChanged\' (ServerSystem.js):\n', err)
                }
            },
            onQuestOutputStateChanged (newQuestOutputState, oldQuestOutputState) {
                that.loadQuest(saveId, sourceId, chapterId, questId)
                try {
                    Callback.invokeCallback('CustomQuests.onQuestOutputStateChanged',
                        [sourceId, chapterId, questId],
                        newQuestOutputState,
                        oldQuestOutputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onQuestOutputStateChanged\' (ServerSystem.js):\n', err)
                }
            },
            onChildQuestInputStateChanged (pathArray, newQuestInputState, oldQuestInputState) {
                that.loadQuest(saveId, pathArray[0], pathArray[1], pathArray[2])
                try {
                    Callback.invokeCallback('CustomQuests.onQuestInputStateChanged',
                        [pathArray[0], pathArray[1], pathArray[2]],
                        newQuestInputState,
                        oldQuestInputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onQuestInputStateChanged\' (ServerSystem.js):\n', err)
                }
            }
        })
    },
    setOutputState (saveId, sourceId, chapterId, questId, index, extraInfo, outputStateObject) {
        if (!this.isSaveIdValid(saveId)) return
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        if (!Utils.isObject(outputStateObject)) return
        let questJson = System.getQuestJson(this.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        let saveData = this.getSaveData(saveId)
        if (System.getQuestOutputState(this.resolvedJson, saveData, sourceId, chapterId, questId) === EnumObject.questOutputState.locked) return
        let client = this.getConnectedClientList(saveId)
        if (client !== null) {
            runOnMainThread(function () {
                client && client.send('CustomQuests.Client.setOutputState', {
                    sourceId: sourceId, chapterId: chapterId, questId: questId, index: index,
                    extraInfo: extraInfo, outputStateObject: outputStateObject
                })
            })
        }
        let questLoadedQuest = this.getLoadedQuest(saveId, sourceId, chapterId, questId)
        if (!Array.isArray(questLoadedQuest.output)) questLoadedQuest.output = []
        let output = questLoadedQuest.output
        let that = this
        System.setOutputState(this.resolvedJson, saveData, sourceId, chapterId, questId, index, outputStateObject, {
            onOutputStateChanged (newOutputStateObject, oldOutputStateObject) {
                let called = false
                if (newOutputStateObject.state !== oldOutputStateObject.state) {
                    if (newOutputStateObject.state === EnumObject.outputState.received) {
                        if (IOTypeTools.isOutputIdLoaded(output[index])) {
                            IOTypeTools.callOutputTypeCb(output[index], 'onReceive', extraInfo)
                            try {
                                called = true
                                Callback.invokeCallback('CustomQuests.onOutputStateChanged',
                                    output[index],
                                    Utils.deepCopy(newOutputStateObject),
                                    Utils.deepCopy(oldOutputStateObject),
                                    Utils.deepCopy(extraInfo)
                                )
                            } catch (err) {
                                Utils.error('Error in Callback \'CustomQuests.onOutputStateChanged\' (ServerSystem.js):\n', err)
                            }
                            IOTypeTools.unloadOutput(output[index])
                        }
                    } else {
                        if (!IOTypeTools.isOutputIdLoaded(output[index])) {
                            that.loadOutput(saveId, sourceId, chapterId, questId, index)
                        }
                    }
                }
                if (!called && IOTypeTools.isOutputIdLoaded(output[index])) {
                    try {
                        called = true
                        Callback.invokeCallback('CustomQuests.onOutputStateChanged',
                            output[index],
                            Utils.deepCopy(newOutputStateObject),
                            Utils.deepCopy(oldOutputStateObject),
                            Utils.deepCopy(extraInfo)
                        )
                    } catch (err) {
                        Utils.error('Error in Callback \'CustomQuests.onOutputStateChanged\' (ServerSystem.js):\n', err)
                    }
                }
            },
            onQuestOutputStateChanged (newQuestOutputState, oldQuestOutputState) {
                try {
                    Callback.invokeCallback('CustomQuests.onQuestOutputStateChanged',
                        [sourceId, chapterId, questId],
                        newQuestOutputState,
                        oldQuestOutputState
                    )
                } catch (err) {
                    Utils.error('Error in Callback \'CustomQuests.onQuestOutputStateChanged\' (ServerSystem.js):\n', err)
                }
            }
        })
    },
    receiveAllQuest (saveId, sourceId, extraInfo) {
        if (!this.isSaveIdValid(saveId)) return
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        let loadedQuest = this.loadedQuest[saveId]
        if (!loadedQuest) return
        let mainLoadedQuest = loadedQuest[sourceId]
        for (let chapterId in mainLoadedQuest) {
            let chapterLoadedQuest = mainLoadedQuest[chapterId]
            for (let questId in chapterLoadedQuest) {
                let questLoadedQuest = chapterLoadedQuest[questId]
                if (Array.isArray(questLoadedQuest.output)) {
                    questLoadedQuest.output.forEach(function (outputId) {
                        if (!IOTypeTools.isOutputIdLoaded(outputId)) return
                        IOTypeTools.callOutputTypeCb(outputId, 'onFastReceive', extraInfo)
                    })
                }
            }
        }
    },
    updateTeam (teamId, beforeDelete) {
        if (teamId === InvalidId) return
        if (typeof beforeDelete !== 'boolean') beforeDelete = Boolean(beforeDelete)
        let team = this.getTeam(teamId)
        if (!team) return
        let players = team.players
        let playerList = []
        let client = new NetworkConnectedClientList()
        for (let iPlayer in players) {
            if (players[iPlayer] === EnumObject.playerState.absent) continue
            let player = Number(iPlayer)
            if (!this.isPlayerLoaded(player)) continue
            playerList.push(player)
            client.add(Network.getClientForPlayer(player))
        }
        let that = this
        runOnMainThread(function () {
            client.send('CustomQuests.Client.setLocalCache', {
                team: beforeDelete ? null : team,
                teamPlayerList: beforeDelete ? null : that.getTeamPlayerList(teamId)
            })
        })
        if (Setting.saveForTeam) {
            let saveId = team.saveId
            runOnMainThread(function () {
                client.send('CustomQuests.Client.setLocalCache', {
                    saveData: beforeDelete ? {} : ServerSystem.getSaveData(saveId)
                })
            })
            if (beforeDelete) {
                delete Store.cache.playerList[saveId]
            } else {
                if (!Store.cache.playerList[saveId]) {
                    Store.cache.playerList[saveId] = {
                        player: [],
                        client: null
                    }
                }
                let obj = Store.cache.playerList[saveId]
                obj.player = playerList
                obj.client = client
            }
        }
    },
    createTeam (player, team) {
        if (!this.isPlayerLoaded(player)) return
        if (this.getTeam(player)) return
        let teamId = Utils.getUUID()
        while (Store.saved.team[teamId]) teamId = Utils.getUUID()
        let saveId = this.createSaveId([player])
        if (saveId === InvalidId) return
        Store.saved.team[teamId] = {
            id: teamId,
            saveId: saveId,
            bitmap: team.bitmap,
            name: team.name,
            password: team.password,
            players: {},
            settingTeam: team.setting
        }
        this.setTeam(player, teamId)
        this.setPlayerStateForTeam(teamId, player, EnumObject.playerState.owner)
        this.updateTeam(teamId)
        let that = this
        new NetworkConnectedClientList()
            .setupAllPlayersPolicy()
            .send('CustomQuests.Client.setLocalCache', {
                teamList: that.getTeamList()
            })
    },
    getTeam (target) {
        let teamId = InvalidId
        if (typeof target === 'number') {
            let obj = Store.saved.players[target]
            if (!obj) return null
            teamId = obj.teamId
        } else if (typeof target === 'string') {
           teamId = target
        }
        if (teamId === InvalidId) return null
        return Store.saved.team[teamId] || null
    },
    deleteTeam (teamId) {
        if (teamId === InvalidId) return
        this.deleteSaveId(Store.saved.team[teamId].saveId)
        this.updateTeam(teamId, true)
        delete Store.saved.team[teamId]
        let that = this
        new NetworkConnectedClientList()
            .setupAllPlayersPolicy()
            .send('CustomQuests.Client.setLocalCache', {
                teamList: that.getTeamList()
            })
    },
    setTeam (player, teamId) {
        let obj = Store.saved.players[player]
        if (!obj) return
        if (teamId !== InvalidId && !Store.saved.team[teamId]) return
        let oldTeamId = obj.teamId
        if (teamId === oldTeamId) return
        this.setPlayerStateForTeam(oldTeamId, player, EnumObject.playerState.absent)
        this.updateTeam(oldTeamId)
        obj.teamId = teamId
        if (teamId !== InvalidId) {
            this.setPlayerStateForTeam(teamId, player, EnumObject.playerState.member)
            this.updateTeam(teamId)
        } else {
            let that = this
            runOnMainThread(function () {
                Network.getClientForPlayer(player).send('CustomQuests.Client.setLocalCache', {
                    team: null,
                    teamPlayerList: that.getTeamPlayerList(teamId),
                    saveData: {}
                })
            })
        }
    },
    setPlayerStateForTeam (teamId, player, state) {
        if (teamId === InvalidId) return
        let team = Store.saved.team[teamId]
        if (!team) return
        let oldState = team.players[player] || EnumObject.playerState.absent
        if (state === oldState) return
        team.players[player] = state
        if (state === EnumObject.playerState.absent) {
            // exit team
            let list = Store.saved.playerList[team.saveId]
            let index = list.indexOf(player)
            if (index !== -1) list.splice(index, 1)
            if (list.length === 0) {
                this.deleteTeam(teamId)
                return
            }
            if (this.getPlayerList(team.saveId, true).length === 0) {
                this.unloadAllLoadedQuest(team.saveId)
            }
        } else if (oldState === EnumObject.playerState.absent) {
            // join team
            let list = Store.saved.playerList[team.saveId]
            if (list.indexOf(player) < 0) list.push(player)
            this.loadAllQuest(team.saveId)
        }
    },
    getTeamList () {
        let list = []
        for (let teamId in Store.saved.team) {
            if (!Store.saved.team[teamId]) continue
            list.push({
                teamId: teamId,
                bitmap: Store.saved.team[teamId].bitmap,
                name: Store.saved.team[teamId].name
            })
        }
        return list
    },
    getTeamPlayerList (teamId) {
        if (teamId === InvalidId) return null
        let team = Store.saved.team[teamId]
        if (!team) return null
        let playerList = this.getPlayerList(team.saveId, false)
        /** @type { Exclude<ReturnType<ServerSystem['getTeamPlayerList']>, null> } */
        let ret = []
        let that = this
        playerList.forEach(function (player) {
            let obj = Store.saved.players[player]
            if (!obj) return
            ret.push({
                name: obj.name,
                player: player,
                online: that.isPlayerLoaded(player)
            })
        })
        return ret
    }
}

Callback.addCallback('ServerPlayerLoaded', function (player) {
    if (!Store.saved.players[player]) {
        Store.saved.players[player] = {
            saveId: ServerSystem.createSaveId([player]),
            teamId: InvalidId,
            bookGived: false,
            name: Entity.getNameTag(player)
        }
    }
    let obj = Store.saved.players[player]
    if (!obj.bookGived && Setting.giveBook) {
        new PlayerActor(player).addItemToInventory(ItemID.quest_book, 1, 0, null, true)
        obj.bookGived = true
    }
    obj.name = Entity.getNameTag(player)
    
    ServerSystem.setPlayerLoaded(player, true)

    let saveId = ServerSystem.getSaveId(player)
    let client = Network.getClientForPlayer(player)
    client.send('CustomQuests.Client.message', {
        text: ['§e<CustomQuests>§r ', '$mod.dialog']
    })
    client.send('CustomQuests.Client.resolveJson', {
        json: ServerSystem.json
    })
    client.send('CustomQuests.Client.setLocalCache', {
        saveData: ServerSystem.getSaveData(saveId),
        team: ServerSystem.getTeam(player),
        isAdmin: Boolean(obj.isAdmin),
        isEditor: Boolean(obj.isEditor),
        teamList: ServerSystem.getTeamList(),
        teamPlayerList: ServerSystem.getTeamPlayerList(obj.teamId)
    })
})

; (function () {
    /** @type { {[player: number]: number} } */
    let latest = {}

    Callback.addCallback('ServerPlayerTick', function (player) {
        let now = Date.now()
        if (now < latest[player]) return
        latest[player] = now + 30000 /* 30s */
        try {
            let saveId = ServerSystem.getSaveId(player)
            if (!ServerSystem.isSaveIdValid(saveId)) return
            let client = Network.getClientForPlayer(player)
            client.send('CustomQuests.Client.setLocalCache', {
                saveData: ServerSystem.getSaveData(saveId)
            })
        } catch (err) {
            Utils.error('Error in Callback \'ServerPlayerTick\' (ServerSystem.js):\n', err)
        }
    })

    Callback.addCallback('ServerPlayerLeft', function (player) {
        delete latest[player]
    })
})()

Callback.addCallback('ServerPlayerLeft', function (player) {
    ServerSystem.setPlayerLoaded(player, false)
})




// file: ClientSystem.js

/// <reference path='./ServerSystem.js'/>

/** @type { ClientSystem } */
const ClientSystem = {
    sendInputPacket (sourceId, chapterId, questId, index, packetData) {
        let questJson = System.getQuestJson(Store.localCache.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        if (index >= questJson.inner.input.length) return
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.sendIOPacket', {
                type: 'input',
                sourceId: sourceId, chapterId: chapterId, questId: questId, index: index,
                data: packetData
            })
        })
    },
    sendOutputPacket (sourceId, chapterId, questId, index, packetData) {
        let questJson = System.getQuestJson(Store.localCache.resolvedJson, sourceId, chapterId, questId)
        if (!questJson || questJson.type !== 'quest') return
        if (index >= questJson.inner.output.length) return
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.sendIOPacket', {
                type: 'output',
                sourceId: sourceId, chapterId: chapterId, questId: questId, index: index,
                data: packetData
            })
        })
    },
    receiveAllQuest (sourceId, extraInfo) {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.receiveAllQuest', {
                sourceId: sourceId,
                extraInfo: extraInfo
            })
        })
    },
    refreshTeamList () {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'getList'
            })
        })
    },
    createTeam (team) {
        if (this.getTeam()) return
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'create',
                team: {
                    bitmap: team.bitmap,
                    name: team.name,
                    password: Utils.md5(team.password),
                    setting: team.setting
                }
            })
        })
    },
    joinTeam (teamId, password) {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'join',
                teamId: teamId,
                password: Utils.md5(password)
            })
        })
    },
    getTeam () {
        return Store.localCache.team || null
    },
    exitTeam () {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'exit'
            })
        })
    },
    deleteTeam () {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'delete'
            })
        })
    },
    setPlayerStateForTeam (player, state) {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'setState',
                player: player,
                state: state
            })
        })
    },
    changeBitmapTeam (bitmap) {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'changeBitmap',
                bitmap: bitmap
            })
        })
    },
    renameTeam (name) {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'rename',
                name: name
            })
        })
    },
    changePasswordTeam (password) {
        runOnClientThread(function () {
            Network.sendToServer('CustomQuests.Server.TeamTools', {
                method: 'changePassword',
                password: Utils.md5(password)
            })
        })
    }
}

Callback.addCallback('CustomQuests.onLocalQuestInputStateChanged', function (path, newState, oldState) {
    if (newState === oldState) return
    if (newState === EnumObject.questInputState.finished) {
        let config = Store.localCache.jsonConfig[path[0]]
        if (!config || !config.textMessage) return
        let questJson = System.getQuestJson(Store.localCache.resolvedJson, path[0], path[1], path[2])
        if (!questJson || questJson.type !== 'quest') return
        Game.message('§e<CustomQuests>§r ' + Utils.replace(TranAPI.translate('message.questFinished'), [
            ['{questName}', TranAPI.translate(questJson.inner.name)]
        ]))
    }
})




// file: QuestUi.js

/// <reference path='./ClientSystem.js'/>

/** @type { QuestUi } */
const QuestUi = {
    open (sourceId) {},
    openForPlayer (sourceId, player) {
        if (typeof sourceId !== 'string') return
        if (!ServerSystem.isPlayerLoaded(player)) return
        Network.getClientForPlayer(player).send('CustomQuests.Client.openUi', {
            sourceId: sourceId
        })
    },
    openQuestUi (questJson, saveData, params) {
        return {
            isClosed: function () {
                return true
            },
            close: function () {}
        }
    },
    openDescriptionUi (isInput, ioJson, toolsCb) {
        return {
            isClosed: function () {
                return true
            },
            close: function () {}
        }
    },
    openTeamUi () {},
    openQuestListUi (title, questList, onSelect) {},
    openItemChooseUi (title, isValid, onSelect) {},
    openSelectionUi (title, selection) {}
}

/** @type { QuestUiTools } */
const QuestUiTools = {
    createUi (content, eventListener, option) {
        if (!Utils.isObject(option)) option = {}
        /** @type { ReturnType<QuestUiTools['createUi']> } */
        let ret = {
            content: content,
            ui: new UI.Window(content),
            newElements: [],
            binElements: [],
            addElements (elementsObj) {
                if (!ret.content.elements || !Utils.isObject(elementsObj)) return
                if (Array.isArray(elementsObj)) {
                    elementsObj.forEach(function (elements) {
                        ret.newElements.push(elements[0])
                        ret.content.elements[elements[0]] = elements[1]
                    })
                } else {
                    for (let key in elementsObj) {
                        ret.newElements.push(key)
                        ret.content.elements[key] = elementsObj[key]
                    }
                }
            },
            clearNewElements (newElements, lazy) {
                if (!ret.content.elements) return
                try {
                    if (lazy) {
                        if (!Array.isArray(newElements)) {
                            ret.binElements = ret.binElements.concat(ret.newElements)
                            ret.newElements.length = 0
                        } else {
                            newElements.forEach(function (key) {
                                let index = ret.newElements.indexOf(key)
                                if (index < 0) return
                                ret.binElements.push(key)
                                ret.newElements.splice(index, 1)
                            })
                        }
                    } else {
                        let elements = ret.content.elements
                        let elementMap = ret.ui.getElements()
                        let provider = ret.ui.getElementProvider()
                        if (!Array.isArray(newElements)) {
                            ret.newElements.forEach(function (key) {
                                delete elements[key]
                                provider.removeElement(elementMap.get(key))
                            })
                            ret.newElements.length = 0
                        } else {
                            newElements.forEach(function (key) {
                                let index = ret.newElements.indexOf(key)
                                if (index < 0) return
                                delete elements[key]
                                provider.removeElement(elementMap.get(key))
                                ret.newElements.splice(index, 1)
                            })
                        }
                    }
                } catch (err) {
                    Utils.error('Error in clearNewElements (QuestUi.js):\n', err)
                }
            },
            refresh () {
                try {
                    let elements = ret.content.elements
                    let elementMap = ret.ui.getElements()
                    let provider = ret.ui.getElementProvider()
                    ret.binElements.forEach(function (key) {
                        if (ret.newElements.indexOf(key) >= 0) return
                        if (typeof elements[key] === 'undefined') return
                        delete elements[key]
                        provider.removeElement(elementMap.get(key))
                    })
                    ret.binElements.length = 0
                } catch (err) {
                    Utils.error('Error in refresh (QuestUi.js):\n', err)
                }
                try {
                    if (ret.ui.isOpened()) {
                        ret.ui.updateWindowLocation()
                        if (typeof ret.ui.updateScrollDimensions === 'function') {
                            ret.ui.updateScrollDimensions()
                        }
                    }
                    ret.ui.getContentProvider().refreshDrawing()
                    ret.ui.getContentProvider().refreshElements()
                    ret.ui.getElementProvider().invalidateAll()
                    ret.ui.forceRefresh()
                } catch (err) {
                    Utils.error('Error in refresh (QuestUi.js):\n', err)
                }
            },
            open (refresh) {
                if (refresh) ret.refresh()
                if (!ret.isOpened()) ret.ui.open()
            },
            close () { ret.ui.close() },
            isOpened () { return ret.ui.isOpened() }
        }
        let listener = Utils.isObject(eventListener) ? eventListener : {}
        let needListen = Boolean(option.hideNavigation)
        ret.ui.setEventListener({
            onOpen () {
                if (needListen) {
                    needListen = false
                    UI.getContext().runOnUiThread(new java.lang.Runnable({
                        run () {
                            // https://developer.android.google.cn/training/system-ui/status?hl=zh-cn
                            /** @type { (visibility: number) => void } */
                            let updateVisibility = function (visibility) {
                                if (!(visibility & android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)) {
                                    ret.ui.layout.setVisibility(
                                        android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                                        | android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                                        | android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                                        | android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                                    )
                                }
                            }
                            ret.ui.layout.setOnSystemUiVisibilityChangeListener({
                                onSystemUiVisibilityChange (visibility) {
                                    updateVisibility(visibility)
                                }
                            })
                        }
                    }))
                }
                if (typeof listener.onOpen === 'function') {
                    listener.onOpen(ret)
                }
            },
            onClose () {
                if (typeof listener.onClose === 'function') {
                    listener.onClose(ret)
                }
            }
        })
        if (option.closeOnBackPressed) ret.ui.setCloseOnBackPressed(true)
        if (option.blockingBackground) ret.ui.setBlockingBackground(true)
        if (option.asGameOverlay) ret.ui.setAsGameOverlay(true)
        if (option.notTouchable) ret.ui.setTouchable(false)
        return ret
    },
    getQuestIcon (questJson, saveData, option) {
        if (!Array.isArray(option.pos)) option.pos = questJson.pos
        if (typeof option.size !== 'number') option.size = questJson.size
        let icon = questJson.icon[0]
        if (saveData.inputState !== EnumObject.questInputState.locked) icon = questJson.icon[1]
        if (saveData.inputState === EnumObject.questInputState.finished) icon = questJson.icon[2]
        let overBitmap = 'cq_clear'
        switch (saveData.inputState) {
            case EnumObject.questInputState.unfinished:
            case EnumObject.questInputState.repeat_unfinished: {
                overBitmap = 'cq_dot_blue'
                break
            }
            case EnumObject.questInputState.finished: {
                if (saveData.outputState !== EnumObject.questOutputState.received) {
                    overBitmap = 'cq_remind'
                }
                break
            }
        }
        return [
            [option.prefix + 'main', {
                type: 'slot', visual: true, bitmap: icon.bitmap || 'cq_clear',
                source: Utils.transferItemFromJson(icon), darken: Boolean(icon.darken),
                x: option.pos[0], y: option.pos[1], z: 1, size: option.size,
                clicker: option.clicker
            }],
            [option.prefix + 'over', {
                type: 'image',
                x: option.pos[0] + option.size * (55 / 80),
                y: option.pos[1] + option.size * (5 / 80),
                z: 2,
                width: option.size * (20 / 80),
                height: option.size * (20 / 80),
                bitmap: overBitmap
            }]
        ]
    },
    getDependencyLine: (function () {
        let Rect = android.graphics.Rect
        let RectF = android.graphics.RectF
        let Paint = android.graphics.Paint
        let nullPaint = new Paint()
        let lineBitmap = android.graphics.Bitmap.createBitmap(100 * 64, 64, android.graphics.Bitmap.Config.ARGB_8888)
        let lineSrc = new Rect(0, 0, 100 * 64, 64)
        Callback.addCallback('PostLoaded', function () {
            let bitmap = UI.TextureSource.getNullable('cq_dependency')
            if (bitmap === null) return
            let canvas = new android.graphics.Canvas(lineBitmap)
            for (let x = 0; x < 100; x++) {
                canvas.drawBitmap(bitmap, x * 64, 0, nullPaint)
            }
        })
        return function (posParent, posChild, width, color) {
            if (typeof width !== 'number' || width <= 0) width = 10
            let deltaPos = [posChild[0] - posParent[0], posChild[1] - posParent[1]]
            let dis = Math.sqrt(deltaPos[0] * deltaPos[0] + deltaPos[1] * deltaPos[1])
            if (dis <= width) return []
            let angle = Math.acos(Math.max(Math.min(deltaPos[0] / dis, 1), -1)) * (180 / Math.PI)
            if (deltaPos[1] < 0) angle = -angle
            let argb = [(color >>> 24) & 0xff, (color >>> 16) & 0xff, (color >>> 8) & 0xff, (color >>> 0) & 0xff]
            if (argb[0] > 0xcc) argb[0] = 0xcc
            let paint = new Paint()
            paint.setStyle(Paint.Style.FILL)
            paint.setAntiAlias(true)
            paint.setARGB(argb[0], argb[1], argb[2], argb[3])
            /** @type { (canvas: android.graphics.Canvas, scale: number) => void } */
            let draw = function (canvas, scale) {
                let realWidth = width * scale
                canvas.save()
                canvas.translate(posParent[0] * scale, posParent[1] * scale)
                canvas.rotate(angle)
                canvas.translate(0, -realWidth / 2)
                canvas.drawRect(new RectF(0, 0, dis * scale, realWidth), paint)
                if (dis <= 100 * width) {
                    canvas.drawBitmap(
                        lineBitmap,
                        new Rect(0, 0, Math.floor(dis / width * 64), 64),
                        new RectF(0, 0, dis * scale, realWidth),
                        nullPaint
                    )
                } else {
                    let left = 0
                    for (let w = dis / width; w > 0; w -= 100) {
                        if (w <= 100) {
                            canvas.drawBitmap(
                                lineBitmap,
                                new Rect(0, 0, Math.floor(w * 64), 64),
                                new RectF(left * scale, 0, (left + w * width) * scale, realWidth),
                                nullPaint
                            )
                            break
                        } else {
                            canvas.drawBitmap(
                                lineBitmap,
                                lineSrc,
                                new RectF(left * scale, 0, (left + 100 * width) * scale, realWidth),
                                nullPaint
                            )
                            left += 100 * width
                        }
                    }
                }
                canvas.restore()
            }
            return [{
                type: 'custom',
                onDraw: draw,
                custom: {
                    onDraw: function (element, canvas, scale) {
                        draw(canvas, scale)
                    }
                }
            }]
        }
    })(),
    getTextWidth: (function () {
        let baseSize = 100
        let font = new UI.Font({ size: baseSize })
        return function (text, size) {
            if (typeof size !== 'number') return NaN
            if (typeof text !== 'string') text = String(text)
            return font.getTextWidth(text, size) / baseSize
        }
    })(),
    resolveText: (function () {
        /**
         * The RegExp is translated by Babel.
         * Here is the code in ES6.
         * ```javascript
         * let UnicodeReg = {
         *     isCJK: (str) => /(\p{sc=Hira}|\p{sc=Kana}|\p{sc=Hang}|\p{sc=Hani})+/u.test(str),
         *     isPunctuation: (str) => /(\p{P})+/u.test(str),
         *     isInitialPunctuation: (str) => /(\p{Pi}|\p{Ps})+/u.test(str),
         *     isMathSymbol: (str) => /(\p{Sm})+/u.test(str),
         *     isSeparator: (str) => /(\p{Z})+/u.test(str),
         *     is_UTF16L: (str) => /(\p{Cs})+/u.test(str)
         * }
         * ```
         */
        const UnicodeReg = {
            /** @type { (str: string) => boolean } */
            isCJK (str) {
                return /((?:[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|\uD83C\uDE00)|(?:[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67])|[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|(?:[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]))+/.test(str);
            },
            /** @type { (str: string) => boolean } */
            isPunctuation (str) {
                return /((?:[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]))+/.test(str);
            },
            /** @type { (str: string) => boolean } */
            isInitialPunctuation (str) {
                return /([\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20]|[\(\[\{\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u2E55\u2E57\u2E59\u2E5B\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62])+/.test(str);
            },
            /** @type { (str: string) => boolean } */
            isMathSymbol (str) {
                return /((?:[\+<->\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]))+/.test(str);
            },
            /** @type { (str: string) => boolean } */
            isSeparator (str) {
                return /([ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000])+/.test(str);
            },
            /** @type { (str: string) => boolean } */
            is_UTF16L (str) {
                return /((?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))+/.test(str);
            }
        }
        return function (text, getWidthRatio) {
            if (typeof text !== 'string') return []
            if (typeof getWidthRatio !== 'function') return text.split('\n')
            /** @type { Array<string> } */
            let ret = []
            text.split('\n').forEach(function (str) {
                str = str.replace(/\s+$/, '')
                if (getWidthRatio(str) <= 1) {
                    ret.push(str)
                    return
                }
                let strGroup = ['']
                let isCJK = false
                for (let i = 0; i < str.length; i++) {
                    let char = str[i]
                    if (UnicodeReg.is_UTF16L(char)) char += str[++i]
                    if (UnicodeReg.isSeparator(char) || UnicodeReg.isMathSymbol(char) || UnicodeReg.isPunctuation(char)) {
                        if (UnicodeReg.isInitialPunctuation(char)) {
                            strGroup.push(char)
                        } else {
                            strGroup[strGroup.length-1] += char
                            strGroup.push('')
                        }
                        isCJK = false
                    } else if (UnicodeReg.isCJK(char)) {
                        strGroup.push(char)
                        isCJK = true
                    } else {
                        if (isCJK) strGroup.push(char)
                        else strGroup[strGroup.length-1] += char
                        isCJK = false
                    }
                }
                /** @type { Array<string> } */
                let newStrGroup = []
                strGroup.forEach(function (str) {
                    if (str.length === 0) return
                    while (getWidthRatio(str) > 1) {
                        let l = 0
                        let r = str.length
                        while (l + 1 < r) {
                            let mid = Math.floor((l + r) / 2)
                            if (getWidthRatio(str.substring(0, mid)) <= 1) l = mid
                            else r = mid - 1
                        }
                        if (getWidthRatio(str.substring(0, r)) <= 1) l = r
                        newStrGroup.push(str.substring(0, l))
                        str = str.substring(l)
                    }
                    if (str.length > 0) newStrGroup.push(str)
                })
                let line = ''
                newStrGroup.forEach(function (str) {
                    if (getWidthRatio(line + str) <= 1) line += str
                    else if ((/\s+$/.test(str)) && getWidthRatio(line + str.replace(/\s+$/, '')) <= 1) {
                        ret.push(line + str.replace(/\s+$/, ''))
                        line = ''
                    } else {
                        ret.push(line)
                        line = str
                    }
                })
                if (line.length > 0) ret.push(line)
            })
            return ret
        }
    })(),
    resolveTextJsonToElements (textJson, params) {
        if (typeof textJson !== 'string' && !Utils.isObject(textJson)) {
            return {
                maxY: params.pos[1],
                elements: []
            }
        }
        let size = params.font.size || 20
        let that = this
        let text = TranAPI.translate(textJson)
        let maxY = params.pos[1]
        /** @type { Array<[string, UI.Elements]> } */
        let elements = []
        this.resolveText(text, function (str) {
            if (typeof str !== 'string') return 1
            return that.getTextWidth(str, size) / params.maxWidth
        }).forEach(function (str, index) {
            elements.push([params.prefix + 'text_' + index, {
                type: 'text',
                x: params.pos[0],
                y: maxY,
                z: params.pos[2],
                text: str,
                font: params.font
            }])
            maxY += size + params.rowSpace
        })
        return {
            maxY: maxY,
            elements: elements
        }
    },
    createAnimator (duration, update) {
        if (typeof duration !== 'number' || duration < 0) return
        if (typeof update !== 'function') return
        let animator = android.animation.ValueAnimator.ofFloat([0, 1])
        animator.setDuration(duration)
        animator.addUpdateListener({
            onAnimationUpdate (animator) {
                update(animator)
            }
        })
        UI.getContext().runOnUiThread(new java.lang.Runnable({
            run () {
                animator.start()
            }
        }))
        return animator
    }
}




// file: Integration.js

/// <reference path='./QuestUi.js'/>

/** @type { Integration } */
const Integration = {
    openRecipeUI: (function () {
        ModAPI.addAPICallback('RecipeViewer', function (RecipeViewer) {
            if (Utils.isObject(RecipeViewer.RecipeTypeRegistry) &&
                typeof RecipeViewer.RecipeTypeRegistry.openRecipePageByItem === 'function'
            ) {
                Integration.openRecipeUI = function (item, isUsage) {
                    if (typeof isUsage !== 'boolean') isUsage = Boolean(isUsage)
                    if (item.data >= 0) {
                        if (RecipeViewer.RecipeTypeRegistry.openRecipePageByItem(item.id, item.data, isUsage)) {
                            alert(TranAPI.translate('Integration.RecipeViewer.noRecipe'))
                        }
                    } else {
                        if (RecipeViewer.RecipeTypeRegistry.openRecipePageByItem(item.id, -1, isUsage)) {
                            if (RecipeViewer.RecipeTypeRegistry.openRecipePageByItem(item.id, 0, isUsage)) {
                                alert(TranAPI.translate('Integration.RecipeViewer.noRecipe'))
                            }
                        }
                    }
                }
            } else {
                Integration.openRecipeUI = function (item, isUsage) {
                    alert(TranAPI.translate('Integration.RecipeViewer.oldVersion'))
                }
            }
        })
        return function (item, isUsage) {
            alert(TranAPI.translate('Integration.RecipeViewer.disabled'))
        }
    })()
}




// file: input/group.js

/// <reference path='../IOTypeTools.js'/>

const $input_group_Tools = {
    /**
     * @param { CQTypes.IOTypes.InputJson_group } inputJson 
     * @param { CQTypes.IOTypeToolsCb<CQTypes.InputStateObject> } toolsCb 
     * @returns { boolean } true if finished
     */
    updateState (inputJson, toolsCb) {
        let changed = false
        let stateObj = toolsCb.getState()
        if (!Array.isArray(stateObj.list)) {
            stateObj.list = []
            changed = true
        }
        if (stateObj.state === EnumObject.inputState.repeat_unfinished && stateObj.wasFinished) {
            for (let index = 0; index < inputJson.list.length; index++) {
                stateObj.list[index] = {
                    state: EnumObject.inputState.repeat_unfinished
                }
                if (!IOTypeTools.getInputTypeConfig(inputJson.list[index].type).allowRepeat) {
                    stateObj.list[index].state = EnumObject.inputState.finished
                }
            }
            delete stateObj.wasFinished
            stateObj.count = 0
            changed = true
        }
        let count = 0
        for (let index = 0; index < inputJson.list.length; index++) {
            if (!stateObj.list[index]) continue
            if (stateObj.list[index].state === EnumObject.inputState.finished) ++count
        }
        if (count >= inputJson.count) {
            stateObj.state = EnumObject.inputState.finished
            stateObj.list = []
            stateObj.wasFinished = true
            stateObj.count = 0
            changed = true
        } else if (stateObj.count !== count) {
            stateObj.count = count
            changed = true
        }
        if (changed) toolsCb.setState({}, stateObj)
        return stateObj.state === EnumObject.inputState.finished
    },
    /**
     * @param { CQTypes.IOTypeToolsCb<CQTypes.InputStateObject> | CQTypes.IOTypeToolsLocalCb<CQTypes.InputStateObject> } toolsCb 
     * @param { number } index 
     * @returns { CQTypes.InputStateObject } 
     */
    getStateSafe (toolsCb, index) {
        let stateObj = toolsCb.getState()
        let DEFAULT = { state: stateObj.state }
        if (!Array.isArray(stateObj.list)) return DEFAULT
        if (!stateObj.list[index]) return DEFAULT
        return Utils.deepCopy(stateObj.list[index])
    },
    /**
     * @param { CQTypes.IOTypeToolsCb<CQTypes.InputStateObject> } toolsCb 
     * @param { { index: number, inputId: CQTypes.inputId, updateState: () => void } } params 
     * @param { object } extraInfo 
     * @param { CQTypes.InputStateObject } inputStateObject 
     */
    setState (toolsCb, params, extraInfo, inputStateObject) {
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        if (!Utils.isObject(inputStateObject)) return
        let stateObj = toolsCb.getState()
        let oldStateObj = this.getStateSafe(toolsCb, params.index)
        stateObj.list[params.index] = inputStateObject
        toolsCb.setState(extraInfo, stateObj)
        try {
            Callback.invokeCallback('CustomQuests.onInputStateChanged',
                params.inputId,
                Utils.deepCopy(inputStateObject),
                Utils.deepCopy(oldStateObj),
                Utils.deepCopy(extraInfo)
            )
        } catch (err) {
            Utils.error('Error in Callback \'CustomQuests.onInputStateChanged\' (input/group.js):\n', err)
        }
        if (inputStateObject.state !== oldStateObj.state) params.updateState()
    },
    /**
     * @param { CQTypes.IOTypeToolsLocalCb<CQTypes.InputStateObject> } toolsCb 
     * @param { number } index 
     * @param { object } packetData 
     */
    sendPacket (toolsCb, index, packetData) {
        if (typeof toolsCb.sendPacket !== 'function') return
        toolsCb.sendPacket({
            index: index,
            data: packetData
        })
    },
    taskUi: (function () {
        const Color = android.graphics.Color
        const ScreenHeight = UI.getScreenHeight()
        const TaskUi = {
            /** @type { Array<[string, CQTypes.IOTypes.InputJson_group, CQTypes.IOTypeToolsLocalCb<CQTypes.InputStateObject>]> } */
            stackOpened: [],
            /** @type { Array<{ close: Array<() => void>, reload: Array<() => void> }> } */
            stackListener: [],
            taskUi: QuestUiTools.createUi({
                location: { x: 300, y: 50, width: 400, height: 400 },
                drawing: [
                    { type: 'background', color: Color.TRANSPARENT },
                    { type: 'frame', x: 0, y: 0, width: 1000, height: 1000, bitmap: 'classic_frame_bg_light', scale: 2 },
                    { type: 'text', text: TranAPI.translate('inputType.group'), x: 50, y: 70, font: { color: Color.BLACK, size: 40 } },
                    { type: 'text', text: '', x: 50, y: 120, font: { color: Color.GRAY, size: 40 } },
                    { type: 'line', x1: 0, y1: 150, x2: 1000, y2: 150, color: Color.BLACK, width: 5 },
                    { type: 'line', x1: 0, y1: 300, x2: 1000, y2: 300, color: Color.BLACK, width: 5 }
                ],
                elements: {
                    close: { type: 'button', x: 910, y: 10, bitmap: 'X', bitmap2: 'XPress', scale: 80 / 19,
                        clicker: {
                            onClick: Utils.debounce(function () {
                                let stackOpened = TaskUi.stackOpened
                                if (!stackOpened.length) return
                                TaskUi.closeTaskUi(stackOpened[stackOpened.length - 1][0])
                            }, 500),
                            onLongClick: Utils.debounce(function () {
                                let stackOpened = TaskUi.stackOpened
                                if (!stackOpened.length) return
                                TaskUi.closeTaskUi(stackOpened[0][0])
                            }, 500)
                        }
                    }
                }
            }, null, {
                blockingBackground: true,
                hideNavigation: true
            }),
            openTaskUi () {
                if (!this.stackOpened.length) return
                let params = this.stackOpened[this.stackOpened.length - 1]
                let listenerObj = this.stackListener[this.stackOpened.length - 1]
                let uuid = Utils.getUUID()
                let inputJson = params[1], toolsCb = params[2]
                let stateObj = toolsCb.getState()
                let finished = stateObj.state === EnumObject.inputState.finished
                let yBelowLine = (150 + Math.ceil(Math.max(inputJson.list.length, 1) / 6) * 150)
                let description = QuestUiTools.resolveTextJsonToElements(inputJson.description, {
                    prefix: uuid + '_desc_',
                    pos: [50, yBelowLine + 15],
                    maxWidth: 900,
                    rowSpace: 10,
                    font: {
                        color: Color.BLACK,
                        size: 30
                    }
                })
                let maxY = description.maxY + 30
                this.taskUi.clearNewElements(null, true)
                let location = this.taskUi.ui.getLocation()
                let content = this.taskUi.content
                location.scrollY = maxY * (400 / 1000)
                location.height = Math.min(location.scrollY, ScreenHeight - 60)
                location.y = (ScreenHeight - location.height) / 2
                content.drawing[1].height = maxY
                content.drawing[3].text = Utils.replace(TranAPI.translate('inputType.group.finished'), [
                    ['{count}', Number(finished ? inputJson.count : (stateObj.count || 0))],
                    ['{require}', Number(inputJson.count)]
                ])
                content.drawing[5].y2 = content.drawing[5].y1 = yBelowLine
                this.taskUi.addElements(description.elements)
                let that = this
                inputJson.list.forEach(function (inputJson, index) {
                    if (!inputJson || typeof inputJson === 'string') return
                    let getIcon = IOTypeTools.getInputTypeCb(inputJson.type).getIcon
                    if (typeof getIcon !== 'function') return
                    let getState = $input_group_Tools.getStateSafe.bind($input_group_Tools, toolsCb, index)
                    let elements = getIcon(inputJson, {
                        getState: getState,
                        sendPacket: $input_group_Tools.sendPacket.bind($input_group_Tools, toolsCb, index),
                        openDescription: QuestUi.openDescriptionUi.bind(QuestUi, true, inputJson, { getState: getState })
                    }, {
                        pos: [150 * (index % 6) + 65, 150 * Math.floor(index / 5) + 165],
                        size: 120,
                        prefix: uuid + '_list_' + index + '_',
                        setCloseListener: function (listener) {
                            if (typeof listener !== 'function') return
                            listenerObj.close.push(listener)
                        },
                        setReloadListener: function (listener) {
                            if (typeof listener !== 'function') return
                            listenerObj.reload.push(listener)
                        }
                    })
                    if (!Utils.isObject(elements)) return
                    that.taskUi.addElements(elements)
                    if (finished || (stateObj.list && stateObj.list[index] && stateObj.list[index].state === EnumObject.inputState.finished)) {
                        that.taskUi.addElements([[uuid + '_input_bingo_' + index, {
                            type: 'image', z: 10, width: 45, height: 45 * 16 / 22, bitmap: 'cq_bingo',
                            x: 150 * (index % 6) + 65 + 67.5,
                            y: 150 * Math.floor(index / 5) + 165 + 7.5
                        }]])
                    }
                })
                this.taskUi.open(true)
            },
            /** @type { (uuid: string) => void } */
            closeTaskUi (uuid) {
                let index = -1
                for (let i = 0; i < this.stackOpened.length; ++i) {
                    if (this.stackOpened[i][0] === uuid) {
                        index = i
                        break
                    }
                }
                if (index < 0) return
                this.stackOpened.splice(index)
                this.stackListener.splice(index).forEach(function (listenerObj) {
                    listenerObj.close.forEach(function (listener) {
                        try {
                            listener()
                        } catch (err) {
                            Utils.error('Error in closeTaskUi (input/group.js):\n', err)
                        }
                    })
                    listenerObj.close.length = 0
                    listenerObj.reload.length = 0
                })
                if (this.stackOpened.length) this.openTaskUi()
                else this.taskUi.close()
            },
            /** @type { (uuid: string) => void } */
            reloadTaskUi (uuid) {
                if (!this.stackOpened.length || this.stackOpened[this.stackOpened.length - 1][0] !== uuid) return
                if (!this.taskUi.isOpened()) return
                let listenerObj = this.stackListener[this.stackOpened.length - 1]
                this.openTaskUi()
                listenerObj.reload.forEach(function (listener) {
                    try {
                        listener()
                    } catch (err) {
                        Utils.error('Error in reloadTaskUi (input/group.js):\n', err)
                    }
                })
            }
        }

        return {
            /**
             * @param { CQTypes.IOTypes.InputJson } inputJson 
             * @param { CQTypes.IOTypeToolsLocalCb<CQTypes.InputStateObject> } toolsCb 
             * @param { { setCloseListener?: () => void, setReloadListener?: () => void } } setListener
             */
            open (inputJson, toolsCb, setListener) {
                let uuid = Utils.getUUID()
                TaskUi.stackOpened.push([uuid, inputJson, toolsCb])
                TaskUi.stackListener.push({ close: [], reload: [] })
                if (typeof setListener.setCloseListener === 'function') {
                    setListener.setCloseListener(TaskUi.closeTaskUi.bind(TaskUi, uuid))
                }
                if (typeof setListener.setReloadListener === 'function') {
                    setListener.setReloadListener(TaskUi.reloadTaskUi.bind(TaskUi, uuid))
                }
                TaskUi.openTaskUi()
            }
        }
    })()
}

IOTypeTools.setInputType('group', TranAPI.getTranslation('inputType.group'), {
    resolveJson (inputJson, refsArray, bitmapNameObject) {
        inputJson.icon = Utils.resolveIconJson(inputJson.icon, refsArray, bitmapNameObject)
        if (typeof inputJson.count !== 'number') inputJson.count = 1
        if (!Array.isArray(inputJson.list)) return null
        let list = []
        inputJson.list.forEach(function (tInputJson) {
            tInputJson = Utils.resolveRefs(tInputJson, refsArray)
            if (!Utils.isObject(tInputJson) || typeof tInputJson.type !== 'string') return
            let config = IOTypeTools.getInputTypeConfig(tInputJson.type)
            if (!config || !config.allowGroup) return
            tInputJson = System.resolveInputJson(tInputJson, refsArray, bitmapNameObject)
            if (tInputJson) list.push(tInputJson)
        })
        inputJson.list = list
        if (inputJson.count > list.length) inputJson.count = list.length
        return inputJson
    },
    onLoad (inputJson, toolsCb, cache) {
        if (typeof toolsCb.createChildInputId !== 'function') return
        if ($input_group_Tools.updateState(inputJson, toolsCb)) return
        cache.loaded = true
        cache.inputIdArray = []
        let stateObj = toolsCb.getState()
        let updateState = $input_group_Tools.updateState.bind($input_group_Tools, inputJson, toolsCb)
        inputJson.list.forEach(function (tInputJson, index) {
            if (stateObj.list && stateObj.list[index] && stateObj.list[index].state === EnumObject.inputState.finished) return
            let params = {
                index: index,
                inputId: InvalidId,
                updateState: updateState
            }
            cache.inputIdArray[index] = params.inputId = toolsCb.createChildInputId(tInputJson, {
                getPlayerList: toolsCb.getPlayerList,
                getConnectedClientList: toolsCb.getConnectedClientList,
                getState: $input_group_Tools.getStateSafe.bind($input_group_Tools, toolsCb, index),
                setState: $input_group_Tools.setState.bind($input_group_Tools, toolsCb, params),
                createChildInputId: toolsCb.createChildInputId
            })
            IOTypeTools.loadInput(params.inputId)
        })
    },
    onUnload (inputJson, toolsCb, cache) {
        if (!cache.loaded) return
        cache.loaded = false
        cache.inputIdArray.forEach(function (inputId) {
            if (typeof inputId !== 'string') return
            if (!IOTypeTools.isInputIdLoaded(inputId)) return
            IOTypeTools.unloadInput(inputId)
        })
    },
    onPacket (inputJson, toolsCb, cache, extraInfo) {
        let inputId = cache.inputIdArray[extraInfo.packetData.index]
        if (typeof inputId !== 'string') return
        if (!IOTypeTools.isInputIdLoaded(inputId)) return
        IOTypeTools.callInputTypeCb(inputId, 'onPacket', {
            client: extraInfo.client,
            packetData: extraInfo.packetData.data
        })
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof inputJson.icon.bitmap === 'string') ? inputJson.icon.bitmap : 'cq_clear',
                source: Utils.transferItemFromJson(inputJson.icon),
                clicker: {
                    onClick: Utils.debounce(function () {
                        $input_group_Tools.taskUi.open(inputJson, toolsCb, extraInfo)
                    }, 500)
                }
            }]
        ]
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: input/check.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setInputType('check', TranAPI.getTranslation('inputType.check'), {
    onPacket (inputJson, toolsCb, cache, extraInfo) {
        if (extraInfo.packetData.type !== 'check') return
        if (toolsCb.getState().state === EnumObject.inputState.finished) return
        toolsCb.setState({}, {
            state: EnumObject.inputState.finished
        })
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let finished = toolsCb.getState().state === EnumObject.inputState.finished
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: finished ? 'cq_task_check' : 'cq_task_check_gray',
                clicker: {
                    onClick: finished ? null : Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.inputState.finished) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'check' })
                    }, 500)
                }
            }]
        ]
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: input/item.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setInputType('item', TranAPI.getTranslation('inputType.item'), {
    resolveJson (inputJson, refsArray, bitmapNameObject) {
        if (typeof inputJson.id !== 'string' && typeof inputJson.id !== 'number') return null
        if (typeof inputJson.count !== 'number' || inputJson.count <= 0) inputJson.count = 1
        if (typeof inputJson.data !== 'number' || inputJson.data < 0) inputJson.data = -1
        if (typeof inputJson.submit !== 'boolean') inputJson.submit = Boolean(inputJson.submit)
        if (typeof inputJson.bitmap === 'string') {
            inputJson.bitmap = Utils.resolveBitmap(inputJson.bitmap, bitmapNameObject)
        } else inputJson.bitmap = null
        return inputJson
    },
    onLoad (inputJson, toolsCb, cache) {
        cache.id = Utils.transferIdFromJson(inputJson.id)
        cache.key = cache.id + ':' + inputJson.data
        if (inputJson.submit) {
            let count = toolsCb.getState().count || 0
            if (count >= inputJson.count) {
                toolsCb.setState({}, {
                    state: EnumObject.inputState.finished,
                    count: 0
                })
            }
        }
    },
    onPacket (inputJson, toolsCb, cache, extraInfo) {
        if (!inputJson.submit) return
        if (extraInfo.packetData.type !== 'submit') return
        if (toolsCb.getState().state === EnumObject.inputState.finished) return
        let extra = Array.isArray(inputJson.extra)
        let player = extraInfo.client.getPlayerUid()
        let actor = new PlayerActor(player)
        let stateObj = toolsCb.getState()
        let count = stateObj.count || 0
        for (let i = 0; i < 36; i++) {
            let item = actor.getInventorySlot(i)
            if (item.id !== cache.id) continue
            if (inputJson.data !== -1 && inputJson.data !== item.data) continue
            if (extra && !Utils.isItemExtraPassed(item, inputJson.extra)) continue
            if (count + item.count < inputJson.count) {
                count += item.count
                actor.setInventorySlot(i, 0, 0, 0, null)
            } else {
                let cost = inputJson.count - count
                count = inputJson.count
                actor.setInventorySlot(i, item.id, item.count - cost, item.data, item.extra)
            }
        }
        if (count !== (stateObj.count || 0)) {
            stateObj.count = count
            if (count >= inputJson.count) {
                stateObj.state = EnumObject.inputState.finished
                stateObj.count = 0
            }
            toolsCb.setState({}, stateObj)
        }
    },
    onTick (inputJson, toolsCb, cache, extraInfo) {
        if (inputJson.submit) return
        let succ = false
        if (Array.isArray(inputJson.extra)) {
            succ = extraInfo.playerInventory.some(function (obj) {
                /** @type { ItemInstance[] } */
                let items = obj.extra[cache.key]
                if (!Array.isArray(items)) return false
                let passedCount = 0
                return items.some(function (item) {
                    if (Utils.isItemExtraPassed(item, inputJson.extra)){
                        passedCount += item.count
                        if (passedCount >= inputJson.count) return true
                    }
                    return false
                })
            })
        } else {
            succ = extraInfo.playerInventory.some(function (obj) {
                return obj.sort[cache.key] >= inputJson.count
            })
        }
        if (succ) {
            toolsCb.setState({}, {
                state: EnumObject.inputState.finished
            })
        }
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let stateObj = toolsCb.getState()
        let finished = stateObj.state === EnumObject.inputState.finished
        let submit = inputJson.submit
        let pos = extraInfo.pos
        let source = Utils.transferItemFromJson(inputJson)
        if (submit) source.count = 1
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof inputJson.bitmap === 'string') ? inputJson.bitmap : 'cq_clear',
                source: source,
                clicker: {
                    onClick: (submit && !finished) ? Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.inputState.finished) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'submit' })
                    }, 500) : null,
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }],
            [extraInfo.prefix + 'text', submit ? {
                type: 'text',
                x: pos[0] + (40 / 80) * extraInfo.size,
                y: pos[1] + (40 / 80) * extraInfo.size,
                z: 2,
                text: Number(finished ? inputJson.count : (stateObj.count || 0)) + '/' + Number(inputJson.count),
                font: { color: android.graphics.Color.WHITE, size: (20 / 80) * extraInfo.size, align: 1 }
            } : null]
        ]
    },
    getDescription (inputJson, toolsCb, extraInfo) {
        let source = Utils.transferItemFromJson(inputJson)
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 190
        let elements = [
            [prefix + 'slot', {
                type: 'slot', visual: true, x: 440, y: extraInfo.posY + 10, size: 120,
                bitmap: (typeof inputJson.bitmap === 'string') ? inputJson.bitmap : 'cq_clear',
                source: source,
                clicker: {
                    onClick: Utils.debounce(function () { Integration.openRecipeUI(source, false) }, 500),
                    onLongClick: Utils.debounce(function () { Integration.openRecipeUI(source, true) }, 500)
                }
            }],
            [prefix + 'name', {
                type: 'text', x: 500, y: extraInfo.posY + 120,
                text: Item.getName(source.id, source.data).split('\n')[0].replace(/\u00A7./g, ''),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        if (inputJson.submit) {
            let stateObj = toolsCb.getState()
            let finished = stateObj.state === EnumObject.inputState.finished
            elements.push([prefix + 'submit', {
                type: 'text', x: 500, y: maxY - 20,
                text: Utils.replace(TranAPI.translate('inputType.item.submited'), [
                    ['{count}', (finished ? inputJson.count : (stateObj.count || 0))]
                ]),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }])
            maxY += 40
        }
        let description = QuestUiTools.resolveTextJsonToElements(inputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: input/exp.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setInputType('exp', TranAPI.getTranslation('inputType.exp'), {
    resolveJson (inputJson, refsArray, bitmapNameObject) {
        if (typeof inputJson.value !== 'number' || inputJson.value < 0) inputJson.value = 1
        return inputJson
    },
    onLoad (inputJson, toolsCb, cache) {
        if (inputJson.submit) {
            let value = toolsCb.getState().value || 0
            if (value >= inputJson.value) {
                toolsCb.setState({}, {
                    state: EnumObject.inputState.finished,
                    value: 0
                })
            }
        }
    },
    onPacket (inputJson, toolsCb, cache, extraInfo) {
        if (!inputJson.submit) return
        if (extraInfo.packetData.type !== 'submit') return
        if (toolsCb.getState().state === EnumObject.inputState.finished) return
        let player = extraInfo.client.getPlayerUid()
        let actor = new PlayerActor(player)
        let stateObj = toolsCb.getState()
        let value = stateObj.value || 0
        if (inputJson.isLevel) {
            let level = actor.getLevel()
            if (value + level < inputJson.value) {
                value += level
                actor.setLevel(0)
            } else {
                let cost = inputJson.value - value
                value = inputJson.value
                actor.setLevel(level - cost)
            }
        } else {
            let exp = actor.getExperience()
            if (value + exp < inputJson.value) {
                value += exp
                actor.setExperience(0)
            } else {
                let cost = inputJson.value - value
                value = inputJson.value
                actor.setExperience(exp - cost)
            }
        }
        if (value !== (stateObj.value || 0)) {
            stateObj.value = value
            if (value >= inputJson.value) {
                stateObj.state = EnumObject.inputState.finished
                stateObj.value = 0
            }
            toolsCb.setState({}, stateObj)
        }
    },
    onTick (inputJson, toolsCb, cache, extraInfo) {
        if (inputJson.submit) return
        let playerList = toolsCb.getPlayerList(true)
        let succ = playerList.some(function (player) {
            let actor = new PlayerActor(player)
            if (inputJson.isLevel) return actor.getLevel() >= inputJson.value
            else return actor.getExperience() >= inputJson.value
        })
        if (succ) {
            toolsCb.setState({}, {
                state: EnumObject.inputState.finished
            })
        }
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let stateObj = toolsCb.getState()
        let finished = stateObj.state === EnumObject.inputState.finished
        let submit = inputJson.submit
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: 'cq_clear', source: {
                    id: VanillaItemID.experience_bottle,
                    count: submit ? 1 : inputJson.value
                },
                clicker: {
                    onClick: (submit && !finished) ? Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.inputState.finished) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'submit' })
                    }, 500) : null,
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }],
            [extraInfo.prefix + 'text', submit ? {
                type: 'text',
                x: pos[0] + (40 / 80) * extraInfo.size,
                y: pos[1] + (40 / 80) * extraInfo.size,
                z: 2,
                text: Number(finished ? inputJson.value : (stateObj.value || 0)) + '/' + Number(inputJson.value),
                font: { color: android.graphics.Color.WHITE, size: (20 / 80) * extraInfo.size, align: 1 }
            } : null]
        ]
    },
    getDescription (inputJson, toolsCb, extraInfo) {
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 190
        let elements = [
            [prefix + 'slot', {
                type: 'slot', visual: true, x: 440, y: extraInfo.posY + 10, size: 120,
                bitmap: 'cq_clear', source: {
                    id: VanillaItemID.experience_bottle,
                    count: inputJson.value
                }
            }],
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY + 120,
                text: TranAPI.translate(inputJson.isLevel ? 'inputType.exp.isLevel' : 'inputType.exp.notLevel'),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        if (inputJson.submit) {
            let stateObj = toolsCb.getState()
            let finished = stateObj.state === EnumObject.inputState.finished
            elements.push([prefix + 'submit', {
                type: 'text', x: 500, y: maxY - 30,
                text: Utils.replace(TranAPI.translate('inputType.exp.submited'), [
                    ['{value}', finished ? inputJson.value : (stateObj.value || 0)]
                ]),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }])
            maxY += 40
        }
        let description = QuestUiTools.resolveTextJsonToElements(inputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: input/visit_dimension.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setInputType('visit_dimension', TranAPI.getTranslation('inputType.visit_dimension'), {
    resolveJson (inputJson, refsArray, bitmapNameObject) {
        inputJson.icon = Utils.resolveIconJson(inputJson.icon, refsArray, bitmapNameObject)
        if (typeof inputJson.dimension !== 'number') {
            if (typeof inputJson.dimension !== 'string') return null
            try {
                let dimension = Dimensions.getDimensionByName(inputJson.dimension)
                if (!Utils.isObject(dimension)) return null
                inputJson.dimension = dimension.id
            } catch (err) {
                return null
            }
        }
        return inputJson
    },
    onTick (inputJson, toolsCb, cache, extraInfo) {
        let playerList = toolsCb.getPlayerList(true)
        let succ = playerList.some(function (player) {
            return Entity.getDimension(player) === inputJson.dimension
        })
        if (succ) {
            toolsCb.setState({}, {
                state: EnumObject.inputState.finished
            })
        }
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof inputJson.icon.bitmap === 'string') ? inputJson.icon.bitmap : 'cq_clear',
                source: Utils.transferItemFromJson(inputJson.icon),
                clicker: {
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (inputJson, toolsCb, extraInfo) {
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 100
        let elements = [
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY - 10, text: TranAPI.translate('inputType.visit_dimension.text'),
                font: { color: android.graphics.Color.BLACK, size: 30, align: 1 }
            }],
            [prefix + 'id', {
                type: 'text', x: 500, y: extraInfo.posY + 30,
                text: Utils.replace(TranAPI.translate('inputType.visit_dimension.dimensionId'), [
                    ['{id}', inputJson.dimension]
                ]),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(inputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: false,
    allowGroup: true
})




// file: input/location.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setInputType('location', TranAPI.getTranslation('inputType.location'), {
    resolveJson (inputJson, refsArray, bitmapNameObject) {
        inputJson.icon = Utils.resolveIconJson(inputJson.icon, refsArray, bitmapNameObject)
        if (!Array.isArray(inputJson.pos)) return null
        if (!Array.isArray(inputJson.radius)) inputJson.radius = [1, 1, 1]
        if (!inputJson.ignoreDimension) {
            if (typeof inputJson.dimension !== 'number') {
                let ignoreDimension = true
                do {
                    if (typeof inputJson.dimension !== 'string') break
                    try {
                        let dimension = Dimensions.getDimensionByName(inputJson.dimension)
                        if (!dimension) break
                        inputJson.dimension = dimension.id
                        ignoreDimension = false
                    } catch (err) {
                        break
                    }
                } while (false)
                if (ignoreDimension) inputJson.ignoreDimension = true
            }
        }
        return inputJson
    },
    onLoad (inputJson, toolsCb, cache) {
        cache.x = [
            Number(inputJson.pos[0]) - Number(inputJson.radius[0]),
            Number(inputJson.pos[0]) + Number(inputJson.radius[0]),
            Number(inputJson.radius[0]) >= 0
        ]
        cache.y = [
            Number(inputJson.pos[1]) - Number(inputJson.radius[1]),
            Number(inputJson.pos[1]) + Number(inputJson.radius[1]),
            Number(inputJson.radius[1]) >= 0
        ]
        cache.z = [
            Number(inputJson.pos[2]) - Number(inputJson.radius[2]),
            Number(inputJson.pos[2]) + Number(inputJson.radius[2]),
            Number(inputJson.radius[2]) >= 0
        ]
    },
    onTick (inputJson, toolsCb, cache, extraInfo) {
        let playerList = toolsCb.getPlayerList(true)
        let succ = playerList.some(function (player) {
            if (!inputJson.ignoreDimension) {
                if (Entity.getDimension(player) !== inputJson.dimension) {
                    return false
                }
            }
            let pos = Entity.getPosition(player)
            if (cache.x[2] && (pos.x < cache.x[0] || pos.x > cache.x[1])) return false
            if (cache.y[2] && (pos.y < cache.y[0] || pos.y > cache.y[1])) return false
            if (cache.z[2] && (pos.z < cache.z[0] || pos.z > cache.z[1])) return false
            return true
        })
        if (succ) {
            toolsCb.setState({}, {
                state: EnumObject.inputState.finished
            })
        }
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof inputJson.icon.bitmap === 'string') ? inputJson.icon.bitmap : 'cq_clear',
                source: Utils.transferItemFromJson(inputJson.icon),
                clicker: {
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (inputJson, toolsCb, extraInfo) {
        let pos = {
            x: Number(inputJson.radius[0]) >= 0 ? [
                Number(inputJson.pos[0]) - Number(inputJson.radius[0]),
                Number(inputJson.pos[0]) + Number(inputJson.radius[0])
            ].join(' ~ ') : TranAPI.translate('inputType.location.ignore'),
            y: Number(inputJson.radius[1]) >= 0 ? [
                Number(inputJson.pos[1]) - Number(inputJson.radius[1]),
                Number(inputJson.pos[1]) + Number(inputJson.radius[1])
            ].join(' ~ ') : TranAPI.translate('inputType.location.ignore'),
            z: Number(inputJson.radius[2]) >= 0 ? [
                Number(inputJson.pos[2]) - Number(inputJson.radius[2]),
                Number(inputJson.pos[2]) + Number(inputJson.radius[2])
            ].join(' ~ ') : TranAPI.translate('inputType.location.ignore')
        }
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 220
        let elements = [
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY - 10, text: TranAPI.translate('inputType.location.text'),
                font: { color: android.graphics.Color.BLACK, size: 30, align: 1 }
            }],
            [prefix + 'pos_x', {
                type: 'text', x: 500, y: extraInfo.posY + 30, text: 'x: [' + pos.x + ']',
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }],
            [prefix + 'pos_y', {
                type: 'text', x: 500, y: extraInfo.posY + 70, text: 'y: [' + pos.y + ']',
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }],
            [prefix + 'pos_z', {
                type: 'text', x: 500, y: extraInfo.posY + 110, text: 'z: [' + pos.z + ']',
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }],
            [prefix + 'id', {
                type: 'text', x: 500, y: extraInfo.posY + 150,
                text: Utils.replace(TranAPI.translate('inputType.location.dimensionId'), [
                    ['{id}', inputJson.ignoreDimension ? TranAPI.translate('inputType.location.ignoreDimension') : inputJson.dimension]
                ]),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(inputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: false,
    allowGroup: true
})




// file: input/kill.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setInputType('kill', TranAPI.getTranslation('inputType.kill'), {
    resolveJson (inputJson, refsArray, bitmapNameObject) {
        inputJson.icon = Utils.resolveIconJson(inputJson.icon, refsArray, bitmapNameObject)
        if (typeof inputJson.entityId !== 'number') return null
        if (typeof inputJson.count !== 'number' || inputJson.count < 1) inputJson.count = 1
        return inputJson
    },
    onLoad (inputJson, toolsCb, cache) {
        let count = toolsCb.getState().count || 0
        if (count >= inputJson.count) {
            toolsCb.setState({}, {
                state: EnumObject.inputState.finished,
                count: 0
            })
        }
    },
    onCustomCall (inputJson, toolsCb, cache, extraInfo) {
        if (typeof extraInfo.type !== 'number') return
        if (extraInfo.type !== inputJson.entityId) return
        let stateObj = toolsCb.getState()
        let count = stateObj.count || 0
        count += 1
        stateObj.count = count
        if (count >= inputJson.count) {
            stateObj.state = EnumObject.inputState.finished
            stateObj.count = 0
        }
        toolsCb.setState({}, stateObj)
    },
    getIcon (inputJson, toolsCb, extraInfo) {
        let stateObj = toolsCb.getState()
        let finished = stateObj.state === EnumObject.inputState.finished
        let pos = extraInfo.pos
        let source = Utils.transferItemFromJson(inputJson.icon)
        source.count = 1
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof inputJson.icon.bitmap === 'string') ? inputJson.icon.bitmap : 'cq_clear',
                source: source,
                clicker: {
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }],
            [extraInfo.prefix + 'text', {
                type: 'text',
                x: pos[0] + (40 / 80) * extraInfo.size,
                y: pos[1] + (40 / 80) * extraInfo.size,
                z: 2,
                text: Number(finished ? inputJson.count : (stateObj.count || 0)) + '/' + Number(inputJson.count),
                font: { color: android.graphics.Color.WHITE, size: (20 / 80) * extraInfo.size, align: 1 }
            }]
        ]
    },
    getDescription (inputJson, toolsCb, extraInfo) {
        let stateObj = toolsCb.getState()
        let finished = stateObj.state === EnumObject.inputState.finished
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 140
        let elements = [
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY - 10, text: TranAPI.translate('inputType.kill.text'),
                font: { color: android.graphics.Color.BLACK, size: 30, align: 1 }
            }],
            [prefix + 'id', {
                type: 'text', x: 500, y: extraInfo.posY + 30,
                text: Utils.replace(TranAPI.translate('inputType.kill.entity'), [
                    ['{id}', inputJson.entityId],
                    ['{count}', inputJson.count]
                ]),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }],
            [prefix + 'data', {
                type: 'text', x: 500, y: extraInfo.posY + 70,
                text: Utils.replace(TranAPI.translate('inputType.kill.killed'), [
                    ['{count}', Number(finished ? inputJson.count : (stateObj.count || 0))]
                ]),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(inputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})

Callback.addCallback('EntityDeath', function (entity, attacker) {
    if (Entity.getType(attacker) !== EEntityType.PLAYER) return
    let type = Entity.getType(entity)
    let saveId = ServerSystem.getSaveId(attacker)
    let inputIdArray = IOTypeTools.getAllInputIdByType('kill', saveId)
    inputIdArray.forEach(function (inputId) {
        IOTypeTools.callInputTypeCb(inputId, 'onCustomCall', {
            type: type
        })
    })
})




// file: output/group.js

/// <reference path='../IOTypeTools.js'/>

const $output_group_Tools = {
    /**
     * Weighted random selection of `numSelect` samples
     * @param { Array<{ weight: number, data: number }> } weightedArray 
     * @param { number = } numSelect 
     * @returns { Array<number> } selection data
     */
    randomSelection (weightedArray, numSelect) {
        if (!Array.isArray(weightedArray)) return []
        if (typeof numSelect !== 'number') numSelect = 1
        if (numSelect < 1) return []
        /** @type { Array<{ value: number, data: number }> } */
        let selection = []
        weightedArray.forEach(function (obj, index) {
            let value = Math.log(Math.random()) / obj.weight
            if (index < numSelect) {
                // join { obj.data, value } to selection
                selection.push({
                    value: value,
                    data: obj.data
                })
            } else {
                // let tmp = object in selection with min value // (if `numSelect` is large, `PriorityQueue` is recommended)
                let tmp = selection[0], tmpIndex = 0
                for (let i = 1; i < selection.length; ++i) {
                    if (selection[i].value < tmp.value) {
                        tmp = selection[i]
                        tmpIndex = i
                    }
                }
                // if (value > tmp.value) replace tmp to { obj.data, value }
                if (value > tmp.value) {
                    selection[tmpIndex] = {
                        value: value,
                        data: obj.data
                    }
                }
            }
        })
        // transfer selection into array
        let ret = []
        for (let i = 0; i < selection.length; ++i) {
            ret.push(selection[i].data)
        }
        return ret
    },
    /**
     * @param { CQTypes.IOTypes.OutputJson_group } outputJson 
     * @param { CQTypes.IOTypeToolsCb<CQTypes.OutputStateObject> } toolsCb 
     */
    initToLoad (outputJson, toolsCb) {
        let changed = false
        let stateObj = toolsCb.getState()
        if (!Array.isArray(stateObj.list)) {
            stateObj.list = []
            changed = true
        }
        if (!Array.isArray(stateObj.toLoad)) {
            if (outputJson.isSelect) {
                stateObj.toLoad = []
            } else {
                let weightedArray = []
                outputJson.list.forEach(function (obj, index) {
                    weightedArray.push({
                        weight: obj.weight,
                        data: index
                    })
                })
                stateObj.toLoad = this.randomSelection(weightedArray, outputJson.count)
            }
            changed = true
        }
        if (changed) toolsCb.setState({}, stateObj)
    },
    /**
     * @param { CQTypes.IOTypes.OutputJson_group } outputJson 
     * @param { CQTypes.IOTypeToolsCb<CQTypes.OutputStateObject> } toolsCb 
     * @returns { boolean } true if received
     */
    updateState (outputJson, toolsCb) {
        this.initToLoad(outputJson, toolsCb)
        let changed = false
        let stateObj = toolsCb.getState()
        if (stateObj.state === EnumObject.outputState.repeat_unreceived && stateObj.wasReceived) {
            if (outputJson.isSelect) {
                for (let index = 0; index < outputJson.list.length; ++index) {
                    stateObj.list[index] = {
                        state: EnumObject.outputState.repeat_unreceived
                    }
                    if (!IOTypeTools.getOutputTypeConfig(outputJson.list[index].output.type).allowRepeat) {
                        stateObj.list[index].state = EnumObject.outputState.received
                    }
                }
            } else {
                for (let index = 0; index < outputJson.list.length; ++index) {
                    stateObj.list[index] = {
                        state: EnumObject.outputState.received
                    }
                }
                stateObj.toLoad.forEach(function (index) {
                    if (IOTypeTools.getOutputTypeConfig(outputJson.list[index].output.type).allowRepeat) {
                        stateObj.list[index].state = EnumObject.outputState.repeat_unreceived
                    }
                })
            }
            delete stateObj.wasReceived
            stateObj.count = 0
            changed = true
        }
        let count = 0
        if (outputJson.isSelect) {
            for (let index = 0; index < outputJson.list.length; ++index) {
                if (stateObj.list[index] && stateObj.list[index].state === EnumObject.outputState.received) {
                    ++count
                }
            }
        } else {
            stateObj.toLoad.forEach(function (index) {
                if (stateObj.list[index] && stateObj.list[index].state === EnumObject.outputState.received) {
                    ++count
                }
            })
        }
        if (count >= outputJson.count) {
            stateObj.state = EnumObject.outputState.received
            delete stateObj.toLoad
            stateObj.list = []
            stateObj.wasReceived = true
            stateObj.count = 0
            changed = true
        } else if (stateObj.count !== count) {
            stateObj.count = count
            changed = true
        }
        if (changed) toolsCb.setState({}, stateObj)
        return stateObj.state === EnumObject.outputState.received
    },
    /**
     * @param { CQTypes.IOTypeToolsCb<CQTypes.OutputStateObject> | CQTypes.IOTypeToolsLocalCb<CQTypes.OutputStateObject> } toolsCb 
     * @param { number } index 
     * @returns { CQTypes.OutputStateObject } 
     */
    getStateSafe (toolsCb, index) {
        let stateObj = toolsCb.getState()
        let DEFAULT = { state: stateObj.state }
        if (!Array.isArray(stateObj.list)) return DEFAULT
        if (!stateObj.list[index]) return DEFAULT
        return Utils.deepCopy(stateObj.list[index])
    },
    /**
     * @param { CQTypes.IOTypeToolsCb<CQTypes.OutputStateObject> } toolsCb 
     * @param { { index: number, outputId: CQTypes.outputId, updateState: () => void } } params 
     * @param { object } extraInfo 
     * @param { CQTypes.OutputStateObject } outputStateObject 
     */
    setState (toolsCb, params, extraInfo, outputStateObject) {
        if (!Utils.isObject(extraInfo)) extraInfo = {}
        if (!Utils.isObject(outputStateObject)) return
        let stateObj = toolsCb.getState()
        let oldStateObj = this.getStateSafe(toolsCb, params.index)
        stateObj.list[params.index] = outputStateObject
        toolsCb.setState(extraInfo, stateObj)
        let needUnload = false
        if (outputStateObject.state === EnumObject.outputState.received) {
            if (IOTypeTools.isOutputIdLoaded(params.outputId)) {
                if (stateObj.state !== EnumObject.outputState.received) {
                    IOTypeTools.callOutputTypeCb(params.outputId, 'onReceive', extraInfo)
                }
                needUnload = true
            }
        }
        try {
            Callback.invokeCallback('CustomQuests.onOutputStateChanged',
                params.outputId,
                Utils.deepCopy(outputStateObject),
                Utils.deepCopy(oldStateObj),
                Utils.deepCopy(extraInfo)
            )
        } catch (err) {
            Utils.error('Error in Callback \'CustomQuests.onOutputStateChanged\' (output/group.js):\n', err)
        }
        if (needUnload) IOTypeTools.unloadOutput(params.outputId)
        if (outputStateObject.state !== oldStateObj.state) params.updateState()
    },
    /**
     * @param { CQTypes.IOTypeToolsLocalCb<CQTypes.OutputStateObject> } toolsCb 
     * @param { number } index 
     * @param { object } packetData 
     */
    sendPacket (toolsCb, index, packetData) {
        if (typeof toolsCb.sendPacket !== 'function') return
        toolsCb.sendPacket({
            index: index,
            data: packetData
        })
    },
    rewardUi: (function () {
        const Color = android.graphics.Color
        const ScreenHeight = UI.getScreenHeight()
        const RewardUi = {
            /** @type { Array<[string, CQTypes.IOTypes.OutputJson_group, CQTypes.IOTypeToolsLocalCb<CQTypes.OutputStateObject>]> } */
            stackOpened: [],
            /** @type { Array<{ close: Array<() => void>, reload: Array<() => void> }> } */
            stackListener: [],
            rewardUi: QuestUiTools.createUi({
                location: { x: 300, y: 50, width: 400, height: 400 },
                drawing: [
                    { type: 'background', color: Color.TRANSPARENT },
                    { type: 'frame', x: 0, y: 0, width: 1000, height: 1000, bitmap: 'classic_frame_bg_light', scale: 2 },
                    { type: 'text', text: TranAPI.translate('outputType.group'), x: 50, y: 70, font: { color: Color.BLACK, size: 40 } },
                    { type: 'text', text: '', x: 50, y: 120, font: { color: Color.GRAY, size: 40 } },
                    { type: 'line', x1: 0, y1: 150, x2: 1000, y2: 150, color: Color.BLACK, width: 5 },
                    { type: 'line', x1: 0, y1: 300, x2: 1000, y2: 300, color: Color.BLACK, width: 5 }
                ],
                elements: {
                    close: { type: 'button', x: 910, y: 10, bitmap: 'X', bitmap2: 'XPress', scale: 80 / 19,
                        clicker: {
                            onClick: Utils.debounce(function () {
                                let stackOpened = RewardUi.stackOpened
                                if (!stackOpened.length) return
                                RewardUi.closeRewardUi(stackOpened[stackOpened.length - 1][0])
                            }, 500),
                            onLongClick: Utils.debounce(function () {
                                let stackOpened = RewardUi.stackOpened
                                if (!stackOpened.length) return
                                RewardUi.closeRewardUi(stackOpened[0][0])
                            }, 500)
                        }
                    }
                }
            }, null, {
                blockingBackground: true,
                hideNavigation: true
            }),
            openRewardUi () {
                if (!this.stackOpened.length) return
                let params = this.stackOpened[this.stackOpened.length - 1]
                let listenerObj = this.stackListener[this.stackOpened.length - 1]
                let uuid = Utils.getUUID()
                let outputJson = params[1], toolsCb = params[2]
                let stateObj = toolsCb.getState()
                let received = stateObj.state === EnumObject.outputState.received
                let finished = Array.isArray(stateObj.toLoad) || received
                let isSelect = Boolean(outputJson.isSelect)
                let sumWeight = 0
                if (!isSelect) {
                    for (let index = 0; index < outputJson.list.length; ++index) {
                        sumWeight += Math.max(Number(outputJson.list[index].weight || 0), 0)
                    }
                }
                let notToLoad = []
                if (!isSelect && !received) {
                    for (let index = 0; index < outputJson.list.length; ++index) {
                        notToLoad[index] = true
                    }
                    if (Array.isArray(stateObj.toLoad)) {
                        stateObj.toLoad.forEach(function (index) {
                            notToLoad[index] = false
                        })
                    }
                }
                let yBelowLine = (150 + Math.ceil(Math.max(outputJson.list.length, 1) / 6) * (150 + (isSelect ? 0 : 30)))
                let description = QuestUiTools.resolveTextJsonToElements(outputJson.description, {
                    prefix: uuid + '_desc_',
                    pos: [50, yBelowLine + 15],
                    maxWidth: 900,
                    rowSpace: 10,
                    font: {
                        color: Color.BLACK,
                        size: 30
                    }
                })
                let maxY = description.maxY + 30
                this.rewardUi.clearNewElements(null, true)
                let location = this.rewardUi.ui.getLocation()
                let content = this.rewardUi.content
                location.scrollY = maxY * (400 / 1000)
                location.height = Math.min(location.scrollY, ScreenHeight - 60)
                location.y = (ScreenHeight - location.height) / 2
                content.drawing[1].height = maxY
                content.drawing[3].text = Utils.replace(TranAPI.translate('outputType.group.received'), [
                    ['{count}', Number(received ? outputJson.count : (stateObj.count || 0))],
                    ['{total}', Number(outputJson.count)]
                ])
                content.drawing[5].y2 = content.drawing[5].y1 = yBelowLine
                this.rewardUi.addElements(description.elements)
                let that = this
                outputJson.list.forEach(function (obj, index) {
                    let outputJson = obj.output
                    if (!outputJson || typeof outputJson === 'string') return
                    let getIcon = IOTypeTools.getOutputTypeCb(outputJson.type).getIcon
                    if (typeof getIcon !== 'function') return
                    let getState = $output_group_Tools.getStateSafe.bind($output_group_Tools, toolsCb, index)
                    let posX = 150 * (index % 6) + 65, posY = (150 + (isSelect ? 0 : 30)) * Math.floor(index / 5) + 165
                    let elements = getIcon(outputJson, {
                        getState: getState,
                        sendPacket: $output_group_Tools.sendPacket.bind($output_group_Tools, toolsCb, index),
                        openDescription: QuestUi.openDescriptionUi.bind(QuestUi, false, outputJson, { getState: getState })
                    }, {
                        pos: [posX, posY],
                        size: 120,
                        prefix: uuid + '_list_' + index + '_',
                        setCloseListener: function (listener) {
                            if (typeof listener !== 'function') return
                            listenerObj.close.push(listener)
                        },
                        setReloadListener: function (listener) {
                            if (typeof listener !== 'function') return
                            listenerObj.reload.push(listener)
                        }
                    })
                    if (!Utils.isObject(elements)) return
                    that.rewardUi.addElements(elements)
                    if (finished && !notToLoad[index]) {
                        if (!received && (!stateObj.list || !stateObj.list[index] || stateObj.list[index].state !== EnumObject.outputState.received)) {
                            that.rewardUi.addElements([[uuid + '_output_dot_' + index, {
                                type: 'image',
                                x: posX + 82.5, y: posY + 7.5, z: 10,
                                width: 30, height: 30,
                                bitmap: 'cq_dot_green'
                            }]])
                        }
                    } else {
                        that.rewardUi.addElements([[uuid + '_output_dot_' + index, {
                            type: 'image',
                            x: posX + 82.5, y: posY + 7.5, z: 10,
                            width: 30, height: 30,
                            bitmap: 'cq_dot_grey'
                        }]])
                    }
                    if (!isSelect) {
                        that.rewardUi.addElements([[uuid + '_posibility_' + index, {
                            type: 'text', 
                            x: posX + 60, y: posY + 120,
                            text: that.formatPosibility(obj.weight || 0, sumWeight),
                            font: { color: Color.GRAY, size: 25, align: 1 }
                        }]])
                    }
                })
                this.rewardUi.open(true)
            },
            /** @type { (uuid: string) => void } */
            closeRewardUi (uuid) {
                let index = -1
                for (let i = 0; i < this.stackOpened.length; ++i) {
                    if (this.stackOpened[i][0] === uuid) {
                        index = i
                        break
                    }
                }
                if (index < 0) return
                this.stackOpened.splice(index)
                this.stackListener.splice(index).forEach(function (listenerObj) {
                    listenerObj.close.forEach(function (listener) {
                        try {
                            listener()
                        } catch (err) {
                            Utils.error('Error in closeRewardUi (output/group.js):\n', err)
                        }
                    })
                    listenerObj.close.length = 0
                    listenerObj.reload.length = 0
                })
                if (this.stackOpened.length) this.openRewardUi()
                else this.rewardUi.close()
            },
            /** @type { (uuid: string) => void } */
            reloadRewardUi (uuid) {
                if (!this.stackOpened.length || this.stackOpened[this.stackOpened.length - 1][0] !== uuid) return
                if (!this.rewardUi.isOpened()) return
                let listenerObj = this.stackListener[this.stackOpened.length - 1]
                this.openRewardUi()
                listenerObj.reload.forEach(function (listener) {
                    try {
                        listener()
                    } catch (err) {
                        Utils.error('Error in reloadRewardUi (output/group.js):\n', err)
                    }
                })
            },
            /**
             * @param { number } weight 
             * @param { number } sumWeight 
             * @returns { string } 
             */
            formatPosibility (weight, sumWeight) {
                if (typeof weight !== 'number' || weight <= 0) return '0%'
                let percent = weight / sumWeight
                return String(Math.round(percent * 1e5) / 1e3) + '%'
            }
        }

        return {
            /**
             * @param { CQTypes.IOTypes.OutputJson } outputJson 
             * @param { CQTypes.IOTypeToolsLocalCb<CQTypes.OutputStateObject> } toolsCb 
             * @param { { setCloseListener?: () => void } } setListener 
             */
            open (outputJson, toolsCb, setListener) {
                let uuid = Utils.getUUID()
                RewardUi.stackOpened.push([uuid, outputJson, toolsCb])
                RewardUi.stackListener.push({ close: [], reload: [] })
                if (typeof setListener.setCloseListener === 'function') {
                    setListener.setCloseListener(RewardUi.closeRewardUi.bind(RewardUi, uuid))
                }
                if (typeof setListener.setReloadListener === 'function') {
                    setListener.setReloadListener(RewardUi.reloadRewardUi.bind(RewardUi, uuid))
                }
                RewardUi.openRewardUi()
            }
        }
    })()
}

IOTypeTools.setOutputType('group', TranAPI.getTranslation('outputType.group'), {
    resolveJson (outputJson, refsArray, bitmapNameObject) {
        outputJson.icon = Utils.resolveIconJson(outputJson.icon, refsArray, bitmapNameObject)
        if (typeof outputJson.count !== 'number') outputJson.count = 1
        if (!Array.isArray(outputJson.list)) return null
        let list = []
        outputJson.list.forEach(function (obj) {
            if (!Utils.isObject(obj)) return
            let weight = typeof obj.weight === 'number' ? obj.weight : 1
            if (weight < 0) weight = 0
            let tOutputJson = Utils.resolveRefs(obj.output, refsArray)
            if (!Utils.isObject(tOutputJson) || typeof tOutputJson.type !== 'string') return
            let config = IOTypeTools.getOutputTypeConfig(tOutputJson.type)
            if (!config || !config.allowGroup) return
            tOutputJson.autoReceive = Boolean(outputJson.autoReceive && !outputJson.isSelect)
            tOutputJson = System.resolveOutputJson(tOutputJson, refsArray, bitmapNameObject)
            if (tOutputJson) list.push({ output: tOutputJson, weight: weight })
        })
        outputJson.list = list
        if (outputJson.count > list.length) outputJson.count = list.length
        return outputJson
    },
    onLoad (outputJson, toolsCb, cache) {
        if (typeof toolsCb.createChildOutputId !== 'function') return
        if ($output_group_Tools.updateState(outputJson, toolsCb)) return
        cache.loaded = true
        cache.outputIdArray = []
        let notToLoad = []
        let stateObj = toolsCb.getState()
        if (!outputJson.isSelect) {
            for (let index = 0; index < outputJson.list.length; ++index) {
                notToLoad[index] = true
            }
            if (Array.isArray(stateObj.toLoad)) {
                stateObj.toLoad.forEach(function (index) {
                    notToLoad[index] = false
                })
            }
        }
        let updateState = $output_group_Tools.updateState.bind($output_group_Tools, outputJson, toolsCb)
        outputJson.list.forEach(function (obj, index) {
            if (notToLoad[index]) return
            if (stateObj.list && stateObj.list[index] && stateObj.list[index].state === EnumObject.outputState.received) return
            let tOutputJson = obj.output
            let params = {
                index: index,
                outputId: InvalidId,
                updateState: updateState
            }
            cache.outputIdArray[index] = params.outputId = toolsCb.createChildOutputId(tOutputJson, {
                getPlayerList: toolsCb.getPlayerList,
                getConnectedClientList: toolsCb.getConnectedClientList,
                getState: $output_group_Tools.getStateSafe.bind($output_group_Tools, toolsCb, index),
                setState: $output_group_Tools.setState.bind($output_group_Tools, toolsCb, params),
                createChildOutputId: toolsCb.createChildOutputId
            })
            IOTypeTools.loadOutput(params.outputId)
        })
    },
    onUnload (outputJson, toolsCb, cache, extraInfo) {
        if (!cache.loaded) return
        cache.loaded = false
        cache.outputIdArray.forEach(function (outputId) {
            if (typeof outputId !== 'string') return
            if (!IOTypeTools.isOutputIdLoaded(outputId)) return
            IOTypeTools.unloadOutput(outputId)
        })
    },
    onPacket (outputJson, toolsCb, cache, extraInfo) {
        let outputId = cache.outputIdArray[extraInfo.packetData.index]
        if (typeof outputId !== 'string') return
        if (!IOTypeTools.isOutputIdLoaded(outputId)) return
        IOTypeTools.callOutputTypeCb(outputId, 'onPacket', {
            client: extraInfo.client,
            packetData: extraInfo.packetData.data
        })
    },
    onFastReceive (outputJson, toolsCb, cache, extraInfo) {
        if (outputJson.isSelect) return
        cache.outputIdArray.forEach(function (outputId) {
            if (typeof outputId !== 'string') return
            if (!IOTypeTools.isOutputIdLoaded(outputId)) return
            IOTypeTools.callOutputTypeCb(outputId, 'onFastReceive', extraInfo)
        })
    },
    getIcon (outputJson, toolsCb, extraInfo) {
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof outputJson.icon.bitmap === 'string') ? outputJson.icon.bitmap : 'cq_clear',
                source: Utils.transferItemFromJson(outputJson.icon),
                clicker: {
                    onClick: Utils.debounce(function () {
                        $output_group_Tools.rewardUi.open(outputJson, toolsCb, extraInfo)
                    }, 500)
                }
            }]
        ]
    }
}, {
    allowRepeat: true,
    allowGroup: false
})




// file: output/empty.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setOutputType('empty', TranAPI.getTranslation('outputType.empty'), {
    resolveJson (outputJson, refsArray, bitmapNameObject) {
        return outputJson
    },
    onLoad (outputJson, toolsCb, cache) {
        toolsCb.setState({}, {
            state: EnumObject.outputState.received
        })
    },
    getIcon (outputJson, toolsCb, extraInfo) {
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: 'cq_reward_empty',
                clicker: {
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (outputJson, toolsCb, extraInfo) {
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 60
        let elements = [
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY - 10, text: TranAPI.translate('outputType.empty.text'),
                font: { color: android.graphics.Color.BLACK, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(outputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: output/item.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setOutputType('item', TranAPI.getTranslation('outputType.item'), {
    resolveJson (outputJson, refsArray, bitmapNameObject) {
        if (typeof outputJson.id !== 'string' && typeof outputJson.id !== 'number') return null
        if (typeof outputJson.count !== 'number' || outputJson.count <= 0) outputJson.count = 1
        if (typeof outputJson.data !== 'number' || outputJson.data < 0) outputJson.data = 0
        if (typeof outputJson.bitmap === 'string') {
            outputJson.bitmap = Utils.resolveBitmap(outputJson.bitmap, bitmapNameObject)
        } else outputJson.bitmap = null
        return outputJson
    },
    onLoad (outputJson, toolsCb, cache) {
        if (outputJson.autoReceive) {
            toolsCb.setState({}, {
                state: EnumObject.outputState.received
            })
        }
    },
    onPacket (outputJson, toolsCb, cache, extraInfo) {
        if (extraInfo.packetData.type !== 'receive') return
        if (toolsCb.getState().state === EnumObject.outputState.received) return
        let player = extraInfo.client.getPlayerUid()
        toolsCb.setState({
            operator: {
                type: 'player',
                player: player
            }
        }, {
            state: EnumObject.outputState.received
        })
    },
    onFastReceive (outputJson, toolsCb, cache, extraInfo) {
        toolsCb.setState(extraInfo, {
            state: EnumObject.outputState.received
        })
    },
    onReceive (outputJson, toolsCb, cache, extraInfo) {
        /** @type { Array<number> } */
        let playerList = []
        if (outputJson.mutiReward) playerList = toolsCb.getPlayerList(true)
        else {
            if (Utils.isObject(extraInfo.operator) && extraInfo.operator.type === 'player') {
                playerList.push(extraInfo.operator.player)
            } else {
                let tPlayerList = toolsCb.getPlayerList(true)
                playerList.push(tPlayerList[Math.floor(Math.random() * tPlayerList.length)])
            }
        }
        let item = Utils.transferItemFromJson(outputJson)
        playerList.forEach(function (player) {
            let actor = new PlayerActor(player)
            actor.addItemToInventory(item.id, item.count, item.data, item.extra, true)
        })
    },
    getIcon (outputJson, toolsCb, extraInfo) {
        let received = toolsCb.getState().state === EnumObject.outputState.received
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: (typeof outputJson.bitmap === 'string') ? outputJson.bitmap : 'cq_clear',
                source: Utils.transferItemFromJson(outputJson),
                clicker: {
                    onClick: (!received) ? Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.outputState.received) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'receive' })
                    }, 500) : null,
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (outputJson, toolsCb, extraInfo) {
        let source = Utils.transferItemFromJson(outputJson)
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 190
        let elements = [
            [prefix + 'slot', {
                type: 'slot', visual: true, x: 440, y: extraInfo.posY + 10, size: 120,
                bitmap: (typeof outputJson.bitmap === 'string') ? outputJson.bitmap : 'cq_clear',
                source: source,
                clicker: {
                    onClick: Utils.debounce(function () { Integration.openRecipeUI(source, false) }, 500),
                    onLongClick: Utils.debounce(function () { Integration.openRecipeUI(source, true) }, 500)
                }
            }],
            [prefix + 'name', {
                type: 'text', x: 500, y: extraInfo.posY + 120,
                text: Item.getName(source.id, source.data).split('\n')[0].replace(/\u00A7./g, ''),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(outputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: output/exp.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setOutputType('exp', TranAPI.getTranslation('outputType.exp'), {
    resolveJson (outputJson, refsArray, bitmapNameObject) {
        if (typeof outputJson.value !== 'number' || outputJson.value < 0) outputJson.value = 1
        return outputJson
    },
    onLoad (outputJson, toolsCb, cache) {
        if (outputJson.autoReceive) {
            toolsCb.setState({}, {
                state: EnumObject.outputState.received
            })
        }
    },
    onPacket (outputJson, toolsCb, cache, extraInfo) {
        if (extraInfo.packetData.type !== 'receive') return
        if (toolsCb.getState().state === EnumObject.outputState.received) return
        let player = extraInfo.client.getPlayerUid()
        toolsCb.setState({
            operator: {
                type: 'player',
                player: player
            }
        }, {
            state: EnumObject.outputState.received
        })
    },
    onFastReceive (outputJson, toolsCb, cache, extraInfo) {
        toolsCb.setState(extraInfo, {
            state: EnumObject.outputState.received
        })
    },
    onReceive (outputJson, toolsCb, cache, extraInfo) {
        /** @type { Array<number> } */
        let playerList = []
        if (outputJson.mutiReward) playerList = toolsCb.getPlayerList(true)
        else {
            if (Utils.isObject(extraInfo.operator) && extraInfo.operator.type === 'player') {
                playerList.push(extraInfo.operator.player)
            } else {
                let tPlayerList = toolsCb.getPlayerList(true)
                playerList.push(tPlayerList[Math.floor(Math.random() * tPlayerList.length)])
            }
        }
        playerList.forEach(function (player) {
            let actor = new PlayerActor(player)
            if (outputJson.isLevel) actor.setLevel(actor.getLevel() + outputJson.value)
            else actor.addExperience(outputJson.value)
        })
    },
    getIcon (outputJson, toolsCb, extraInfo) {
        let received = toolsCb.getState().state === EnumObject.outputState.received
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: 'cq_clear', source: { id: VanillaItemID.experience_bottle, count: outputJson.value },
                clicker: {
                    onClick: (!received) ? Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.outputState.received) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'receive' })
                    }, 500) : null,
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (outputJson, toolsCb, extraInfo) {
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 190
        let elements = [
            [prefix + 'slot', {
                type: 'slot', visual: true, x: 440, y: extraInfo.posY + 10, size: 120,
                bitmap: 'cq_clear', source: {
                    id: VanillaItemID.experience_bottle,
                    count: outputJson.value
                }
            }],
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY + 120,
                text: TranAPI.translate(outputJson.isLevel ? 'outputType.exp.isLevel' : 'outputType.exp.notLevel'),
                font: { color: android.graphics.Color.GRAY, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(outputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: output/command.js

/// <reference path='../IOTypeTools.js'/>

IOTypeTools.setOutputType('command', TranAPI.getTranslation('outputType.command'), {
    resolveJson (outputJson, refsArray, bitmapNameObject) {
        if (!Array.isArray(outputJson.commands)) return null
        return outputJson
    },
    onLoad (outputJson, toolsCb, cache) {
        if (outputJson.autoReceive) {
            toolsCb.setState({}, {
                state: EnumObject.outputState.received
            })
        }
    },
    onPacket (outputJson, toolsCb, cache, extraInfo) {
        if (extraInfo.packetData.type !== 'receive') return
        if (toolsCb.getState().state === EnumObject.outputState.received) return
        let player = extraInfo.client.getPlayerUid()
        toolsCb.setState({
            operator: {
                type: 'player',
                player: player
            }
        }, {
            state: EnumObject.outputState.received
        })
    },
    onFastReceive (outputJson, toolsCb, cache, extraInfo) {
        toolsCb.setState(extraInfo, {
            state: EnumObject.outputState.received
        })
    },
    onReceive (outputJson, toolsCb, cache, extraInfo) {
        /** @type { Array<number> } */
        let playerList = []
        if (outputJson.mutiReward) playerList = toolsCb.getPlayerList(true)
        else {
            if (Utils.isObject(extraInfo.operator) && extraInfo.operator.type === 'player') {
                playerList.push(extraInfo.operator.player)
            } else {
                let tPlayerList = toolsCb.getPlayerList(true)
                playerList.push(tPlayerList[Math.floor(Math.random() * tPlayerList.length)])
            }
        }
        playerList.forEach(function (player) {
            let pos = Entity.getPosition(player)
            outputJson.commands.forEach(function (command) {
                if (typeof command !== 'string') return
                Commands.execAt(command, pos.x, pos.y, pos.z)
            })
        })
    },
    getIcon (outputJson, toolsCb, extraInfo) {
        let received = toolsCb.getState().state === EnumObject.outputState.received
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: 'cq_reward_command',
                clicker: {
                    onClick: (!received) ? Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.outputState.received) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'receive' })
                    }, 500) : null,
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (outputJson, toolsCb, extraInfo) {
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 60
        let elements = [
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY - 10, text: TranAPI.translate('outputType.command.text'),
                font: { color: android.graphics.Color.BLACK, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(outputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: output/message.js

/// <reference path='../IOTypeTools.js'/>

Network.addClientPacket('CustomQuests.outputType.message', function (packetData) {
    let message = ''
    if (typeof packetData.message === 'string') {
        message = packetData.message
    } else if (Utils.isObject(packetData.message)) {
        message = TranAPI.translate(packetData.message)
    }
    if (packetData.isAlert) alert(message)
    else Game.message(message)
})

IOTypeTools.setOutputType('message', TranAPI.getTranslation('outputType.message'), {
    onLoad (outputJson, toolsCb, cache) {
        if (outputJson.autoReceive) {
            toolsCb.setState({}, {
                state: EnumObject.outputState.received
            })
        }
    },
    onPacket (outputJson, toolsCb, cache, extraInfo) {
        if (extraInfo.packetData.type !== 'receive') return
        if (toolsCb.getState().state === EnumObject.outputState.received) return
        toolsCb.setState({
            operator: {
                type: 'player',
                player: extraInfo.client.getPlayerUid()
            }
        }, {
            state: EnumObject.outputState.received
        })
    },
    onFastReceive (outputJson, toolsCb, cache, extraInfo) {
        toolsCb.setState(extraInfo, {
            state: EnumObject.outputState.received
        })
    },
    onReceive (outputJson, toolsCb, cache, extraInfo) {
        let client = new NetworkConnectedClientList()
        if (outputJson.toAll) client.setupAllPlayersPolicy()
        else if (outputJson.mutiReward) client = toolsCb.getConnectedClientList()
        else {
            if (Utils.isObject(extraInfo.operator) && extraInfo.operator.type === 'player') {
                client.add(Network.getClientForPlayer(extraInfo.operator.player))
            } else {
                let tPlayerList = toolsCb.getPlayerList(true)
                client.add(Network.getClientForPlayer(tPlayerList[Math.floor(Math.random() * tPlayerList.length)]))
            }
        }
        client.send('CustomQuests.outputType.message', {
            message: outputJson.message,
            isAlert: Boolean(outputJson.isAlert)
        })
    },
    getIcon (outputJson, toolsCb, extraInfo) {
        let received = toolsCb.getState().state === EnumObject.outputState.received
        let pos = extraInfo.pos
        return [
            [extraInfo.prefix + 'main', {
                type: 'slot', visual: true, x: pos[0], y: pos[1], z: 1, size: extraInfo.size,
                bitmap: 'cq_reward_message',
                clicker: {
                    onClick: (!received) ? Utils.debounce(function () {
                        if (toolsCb.getState().state === EnumObject.outputState.received) return
                        if (typeof toolsCb.sendPacket === 'function') toolsCb.sendPacket({ type: 'receive' })
                    }, 500) : null,
                    onLongClick: typeof toolsCb.openDescription === 'function' ? Utils.debounce(toolsCb.openDescription, 500) : null
                }
            }]
        ]
    },
    getDescription (outputJson, toolsCb, extraInfo) {
        let prefix = extraInfo.prefix
        let maxY = extraInfo.posY + 60
        let elements = [
            [prefix + 'text', {
                type: 'text', x: 500, y: extraInfo.posY - 10, text: TranAPI.translate('outputType.message.text'),
                font: { color: android.graphics.Color.BLACK, size: 30, align: 1 }
            }]
        ]
        let description = QuestUiTools.resolveTextJsonToElements(outputJson.description, {
            prefix: prefix + 'desc_',
            pos: [50, maxY],
            maxWidth: 900,
            rowSpace: 10,
            font: {
                color: android.graphics.Color.BLACK,
                size: 30
            }
        })
        elements = elements.concat(description.elements)
        maxY = description.maxY + 20
        return {
            maxY: maxY,
            elements: elements
        }
    }
}, {
    allowRepeat: true,
    allowGroup: true
})




// file: ui/MainUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

const $MainUi = {
    /** @type { Nullable<CQTypes.sourceId> } */
    sourceId: null,
    /** @type { Nullable<CQTypes.ResolvedMainJson> } */
    mainJson: null,
    /** @type { Nullable<CQTypes.chapterId> } */
    chapterId: null,
    /** @type { Nullable<CQTypes.ResolvedChapterJson> } */
    chapterJson: null,
    chapterGroup: {
        exist: false,
        /** @type { Nullable<CQTypes.chapterId> } */
        chapterId: null,
        /** @type { Array<string> } */
        newElements: []
    },
    chapterUiUpdateRequest: {
        exist: false,
        timeFirst: 0,
        timeLast: 0
    },
    questUi: {
        /** @type { Nullable<CQTypes.questId> } */
        questId: null,
        /** @type { Nullable<ReturnType<QuestUi['openQuestUi']>['isClosed']> } */
        isClosed: null,
        /** @type { Nullable<ReturnType<QuestUi['openQuestUi']>['close']> } */
        close: null,
        updateRequest: {
            exist: false,
            timeFirst: 0,
            timeLast: 0
        }
    },
    mainUi: QuestUiTools.createUi({
        location: { x: 0, y: 0, width: 1000, height: $ScreenHeight },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: $ScreenHeight, bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 60, bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'text', text: '', x: 500, y: 30, font: { color: $Color.BLACK, align: 1, size: 20 } },
            { type: 'frame', x: 0, y: 60, width: 40, height: $ScreenHeight - 60, bitmap: 'classic_frame_bg_light', scale: 1 }
        ],
        elements: {
            close: { type: 'closeButton', x: 947, y: 12, bitmap: 'X', bitmap2: 'XPress', scale: 36 / 19 },
            info: { type: 'button', x: 22, y: 12, bitmap: 'cq_info', scale: 36 / 16,
                clicker: {
                    onClick: Utils.debounce(function () {
                        Utils.dialog({
                            text: TranAPI.translate('mod.dialog')
                        })
                    }, 500)
                }
            },
            team: { type: 'button', x: 72, y: 12, z: 1, bitmap: 'cq_team', scale: 36 / 32,
                clicker: {
                    onClick: Utils.debounce(function () {
                        QuestUi.openTeamUi()
                    }, 500)
                }
            },
            team_remind: {
                type: 'image',
                x: 72 + 36 * (55 / 80),
                y: 12 + 36 * (5 / 80),
                z: 2,
                width: 36 * (20 / 80),
                height: 36 * (20 / 80),
                bitmap: 'cq_remind'
            },
            fast_receive: { type: 'button', x: 122, y: 12, bitmap: 'cq_fast_receive', scale: 36 / 16,
                clicker: {
                    onClick: Utils.debounce(function () {
                        if (typeof $MainUi.sourceId === 'string' && $MainUi.mainJson) {
                            ClientSystem.receiveAllQuest($MainUi.sourceId, {})
                        }
                    }, 1000),
                    onLongClick: Utils.debounce(function () {
                        alert(TranAPI.translate('alert.fast_receive.description'))
                    }, 500)
                }
            },
            show_list_btn: { type: 'image', x: 4, y: 60 + ($ScreenHeight - 60) / 4, z: 2, bitmap: 'cq_clear', width: 32, height: ($ScreenHeight - 60) / 2,
                clicker: {
                    onClick: Utils.debounce(function () {
                        $MainUi.openChapterListUi()
                    }, 500)
                }
            },
            show_list: { type: 'image', x: 8, y: 60 + ($ScreenHeight - 60) / 2 - 16, z: 1, bitmap: 'cq_arrow_right', scale: 32 / 64 }
        }
    }, {
        onOpen (ui) {
            $MainUi.chapterUi.open()
        },
        onClose (ui) {
            $MainUi.chapterListUi.close()
            $MainUi.chapterUi.close()
        }
    }, {
        closeOnBackPressed: true,
        blockingBackground: true,
        hideNavigation: true
    }),
    chapterListUi: QuestUiTools.createUi({
        location: { x: 0, y: 60, width: 300, height: $ScreenHeight - 60, scrollY: 100 * (300/1000) },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 1000*($ScreenHeight - 60)/300, bitmap: 'classic_frame_bg_light', scale: 2 }
        ],
        elements: {
            close: { type: 'closeButton', x: 910, y: 10, bitmap: 'X', bitmap2: 'XPress', scale: 80/19 },
            title: { type: 'text', x: 60, y: 30, text: TranAPI.translate('gui.chapterList'), font: { color: $Color.BLACK, size: 40 } },
            group_frame: { type: 'frame', x: 140 + 2000, y: 0, z: 10, width: 860, height: 140, bitmap: 'classic_frame_bg_light', scale: 2 }
        }
    }, null, {
        closeOnBackPressed: true,
        hideNavigation: true
    }),
    chapterUi: QuestUiTools.createUi({
        location: { x: 40, y: 60, width: 960 , height: $ScreenHeight - 60, scrollY: 960 * (1/2) },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 1000 * (1/2), bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'bitmap', x: 0 + 2000, y: 0, width: 1000, height: 1000 * (1/2), bitmap: 'cq_clear' }
        ],
        elements: {}
    }, {
        onOpen (ui) {
            ui.refresh()
        }
    }),
    /** @type { QuestUi['open'] } */
    open (sourceId) {
        if (typeof sourceId !== 'string') return
        if (this.sourceId !== sourceId) {
            this.sourceId = sourceId
            this.mainJson = Store.localCache.resolvedJson[sourceId]
            this.chapterId = null
            this.chapterJson = null
            if (this.chapterListUi.isOpened()) this.chapterListUi.close()
            if (!this.mainJson) return
            this.mainUi.content.drawing[3].text = TranAPI.translate(this.mainJson.name)
            let empty = true
            for (let chapterId in this.mainJson.chapter) {
                this.updateChapterUi(chapterId)
                empty = false
                break
            }
            if (empty) {
                this.chapterUi.clearNewElements()
                this.chapterUi.refresh()
            }
        } else {
            if (typeof this.chapterId === 'string') {
                this.updateChapterUi(this.chapterId)
            }
        }
        this.mainUi.open(true)
    },
    openChapterListUi () {
        let ui = this.chapterListUi
        if ($MainUi.chapterGroup.exist) {
            ui.content.elements['group_frame'].x = 140 + 2000
            $MainUi.chapterGroup.exist = false
            $MainUi.chapterGroup.chapterId = null
            $MainUi.chapterGroup.newElements.length = 0
        }
        ui.content.drawing.splice(2)
        ui.clearNewElements(null, true)
        if (!Utils.isObject(this.mainJson)) {
            ui.open(true)
            return
        }
        /** @type { {[chapterId: CQTypes.chapterId]: { name: CQTypes.TextJson, icon: CQTypes.IconJson, list: Array<CQTypes.chapterId> }} } */
        let groupObj = {}
        /** @type { {[chapterId: CQTypes.chapterId]: boolean} } */
        let visInGroup = {}
        if (Array.isArray(this.mainJson.group)) {
            this.mainJson.group.forEach(function (groupJson) {
                if (groupJson.list.length === 0) return
                if (groupObj[groupJson.list[0]]) return
                groupObj[groupJson.list[0]] = groupJson
                groupJson.list.forEach(function (chapterId) {
                    visInGroup[chapterId] = true
                })
            })
        }
        let height = 100
        let maxY = height
        let uuid = Utils.getUUID()
        for (let chapterId in this.mainJson.chapter) {
            if (groupObj[chapterId]) {
                let groupJson = groupObj[chapterId]
                ui.addElements([
                    [uuid + '_' + chapterId + '_icon', {
                        type: 'slot', visual: true, bitmap: groupJson.icon.bitmap || 'cq_clear',
                        source: Utils.transferItemFromJson(groupJson.icon),
                        darken: Boolean(groupJson.icon.darken),
                        x: 10, y: height + 10, z: 1, size: 120
                    }],
                    [uuid + '_' + chapterId + '_name', {
                        type: 'text', text: TranAPI.translate(groupJson.name),
                        font: { color: $Color.BLACK, size: 40 },
                        x: 140, y: height + 50, z: 1
                    }],
                    [uuid + '_' + chapterId + '_btn', {
                        type: 'image', x: 10, y: height + 10, z: 2, bitmap: 'cq_clear', width: 980, height: 120,
                        clicker: {
                            onClick: Utils.debounce(this.toggleChapterGroup.bind(this, groupJson, height), 500)
                        }
                    }]
                ])
                let tmpY = height + (groupJson.list.length + 1) * 140
                if (tmpY > maxY) maxY = tmpY
            } else {
                if (visInGroup[chapterId]) continue
                let chapterJson = this.mainJson.chapter[chapterId]
                ui.addElements([
                    [uuid + '_' + chapterId + '_icon', {
                        type: 'slot', visual: true, bitmap: chapterJson.icon.bitmap || 'cq_clear',
                        source: Utils.transferItemFromJson(chapterJson.icon),
                        darken: Boolean(chapterJson.icon.darken),
                        x: 10, y: height + 10, z: 1, size: 120
                    }],
                    [uuid + '_' + chapterId + '_name', {
                        type: 'text', text: TranAPI.translate(chapterJson.name),
                        font: { color: $Color.BLACK, size: 40 },
                        x: 140, y: height + 50, z: 1
                    }],
                    [uuid + '_' + chapterId + '_btn', {
                        type: 'image', x: 10, y: height + 10, z: 2, bitmap: 'cq_clear', width: 980, height: 120,
                        clicker: {
                            onClick: Utils.debounce(this.updateChapterUi.bind(this, chapterId), 500)
                        }
                    }]
                ])
            }
            ui.content.drawing.push({
                type: 'line',
                x1: 10, y1: height,
                x2: 990, y2: height,
                width: 5, color: $Color.GRAY
            })
            height += 140
            if (height > maxY) maxY = height
        }
        ui.content.drawing[1].height = Math.max(maxY + 10, 1000*($ScreenHeight - 60)/300)
        ui.ui.getLocation().scrollY = ui.content.drawing[1].height * (300/1000)
        ui.open(true)
    },
    /** @type { (groupJson: { name: CQTypes.TextJson, icon: CQTypes.IconJson, list: Array<CQTypes.chapterId> }, height: number) => void } */
    toggleChapterGroup (groupJson, height) {
        let ui = this.chapterListUi
        if (this.chapterGroup.exist) {
            ui.content.elements['group_frame'].x = 140 + 2000
            ui.clearNewElements(this.chapterGroup.newElements, true)
            this.chapterGroup.exist = false
            this.chapterGroup.newElements.length = 0
            if (this.chapterGroup.chapterId === groupJson.list[0]) {
                this.chapterGroup.chapterId = null
                ui.refresh()
                return
            }
            this.chapterGroup.chapterId = null
        }
        if (!this.mainJson) return
        this.chapterGroup.exist = true
        this.chapterGroup.chapterId = groupJson.list[0]
        let listHeight = 0
        let uuid = Utils.getUUID()
        let that = this
        groupJson.list.forEach(function (chapterId) {
            let chapterJson = that.mainJson.chapter[chapterId]
            if (!chapterJson) return
            that.chapterGroup.newElements.push(
                uuid + '_group_' + chapterId + '_icon',
                uuid + '_group_' + chapterId + '_name',
                uuid + '_group_' + chapterId + '_btn'
            )
            ui.addElements([
                [uuid + '_group_' + chapterId + '_icon', {
                    type: 'slot', visual: true, bitmap: chapterJson.icon.bitmap || 'cq_clear',
                    source: Utils.transferItemFromJson(chapterJson.icon),
                    darken: Boolean(chapterJson.icon.darken),
                    x: 150, y: height + 140 + listHeight + 10, z: 11, size: 120
                }],
                [uuid + '_group_' + chapterId + '_name', {
                    type: 'text', text: TranAPI.translate(chapterJson.name),
                    font: { color: $Color.BLACK, size: 40 },
                    x: 280, y: height + 140 + listHeight + 50, z: 11
                }],
                [uuid + '_group_' + chapterId + '_btn', {
                    type: 'image', x: 150, y: height + 140 + listHeight + 10, z: 12, bitmap: 'cq_clear', width: 840, height: 120,
                    clicker: {
                        onClick: Utils.debounce(that.updateChapterUi.bind(that, chapterId), 500)
                    }
                }]
            ])
            listHeight += 140
        })
        ui.content.elements['group_frame'].x = 140
        ui.content.elements['group_frame'].y = height + 140
        ui.content.elements['group_frame'].height = listHeight
        ui.refresh()
    },
    /** @type { (chapterId: Nullable<CQTypes.chapterId>) => void } */
    updateChapterUi (chapterId) {
        if (!this.mainJson) return
        if (typeof chapterId !== 'string') return
        this.chapterId = chapterId
        this.chapterJson = this.mainJson.chapter[chapterId]
        this.chapterUiUpdateRequest.exist = false
        let ui = this.chapterUi
        ui.clearNewElements(null, true)
        if (!this.chapterJson) {
            ui.refresh()
            return
        }
        let title = TranAPI.translate(this.mainJson.name) + ' -> ' + TranAPI.translate(this.chapterJson.name)
        this.mainUi.content.drawing[3].text = title
        if (Array.isArray(this.chapterJson.background)) {
            if (typeof this.chapterJson.background[0] === 'string') {
                ui.content.drawing[1].x = 0 + 2000
                ui.content.drawing[2].x = 0
                ui.content.drawing[2].bitmap = this.chapterJson.background[0]
            } else {
                ui.content.drawing[1].x = 0
                ui.content.drawing[2].x = 0 + 2000
                ui.content.drawing[2].bitmap = 'cq_clear'
            }
            if (typeof this.chapterJson.background[1] === 'number') {
                ui.ui.getLocation().scrollY = 960 * this.chapterJson.background[1]
                ui.content.drawing[2].height = ui.content.drawing[1].height = 1000 * this.chapterJson.background[1]
            } else {
                ui.ui.getLocation().scrollY = 960 * (1/2)
                ui.content.drawing[2].height = ui.content.drawing[1].height = 1000 * (1/2)
            }
        } else {
            ui.ui.getLocation().scrollY = 960 * (1/2)
            ui.content.drawing[2].height = ui.content.drawing[1].height = 1000 * (1/2)
            ui.content.drawing[1].x = 0
            ui.content.drawing[2].x = 0 + 2000
            ui.content.drawing[2].bitmap = 'cq_clear'
        }
        let uuid = Utils.getUUID()
        let that = this
        for (let questId in this.chapterJson.quest) {
            let questJson = this.chapterJson.quest[questId]
            if (questJson.type === 'custom') {
                let elements = Array.isArray(questJson.elem) ? questJson.elem : [questJson.elem]
                ui.addElements(elements.map(function (elem, index) {
                    return [uuid + '_' + questId + '_' + index, elem]
                }))
            } else if (questJson.type === 'quest') {
                let posChild = [questJson.pos[0] + questJson.size/2, questJson.pos[1] + questJson.size/2]
                let saveData = System.getQuestSaveData(Store.localCache.resolvedJson, Store.localCache.saveData, this.sourceId, chapterId, questId)
                if (saveData.inputState === EnumObject.questInputState.locked && questJson.hidden) continue
                questJson.parent.forEach(function (path) {
                    if (path[0] !== that.sourceId || path[1] !== that.chapterId) return
                    let tQuestJson = System.getQuestJson(Store.localCache.resolvedJson, path[0], path[1], path[2])
                    if (!tQuestJson || tQuestJson.type !== 'quest') return
                    let posParent = [tQuestJson.pos[0] + tQuestJson.size/2, tQuestJson.pos[1] + tQuestJson.size/2]
                    let tInputState = System.getQuestInputState(Store.localCache.resolvedJson, Store.localCache.saveData, path[0], path[1], path[2])
                    if (tInputState === EnumObject.questInputState.locked && tQuestJson.hidden) return
                    let color = $Color.GRAY
                    if (tInputState >= EnumObject.questInputState.finished) {
                        if (saveData.inputState >= EnumObject.questInputState.finished) color = $Color.rgb(100, 220, 100)
                        else if (saveData.inputState === EnumObject.questInputState.unfinished) color = $Color.rgb(0, 200, 200)
                        else color = $Color.rgb(200, 200, 0)
                    }
                    let elements = QuestUiTools.getDependencyLine(posParent, posChild, path[3], color)
                    ui.addElements(elements.map(function (elem, index) {
                        return [uuid + '_' + questId + '_from_' + path[2] + '_' + index, elem]
                    }))
                })
                ui.addElements(QuestUiTools.getQuestIcon(questJson, saveData, {
                    prefix: uuid + '_' + questId + '_',
                    clicker: {
                        onClick: Utils.debounce(that.openQuestUi.bind(that, questId), 500)
                    }
                }))
            }
        }
        ui.refresh()
    },
    /** @type { (questId: Nullable<CQTypes.questId>, isReload?: boolean) => void } */
    openQuestUi (questId, isReload) {
        if (!questId) return
        let sourceId = this.sourceId
        let chapterId = this.chapterId
        if (typeof sourceId !== 'string' || typeof chapterId !== 'string') return
        try {
            let questJson = System.getQuestJson(Store.localCache.resolvedJson, sourceId, chapterId, questId)
            if (!questJson || questJson.type !== 'quest') return
            let saveData = System.getQuestSaveData(Store.localCache.resolvedJson, Store.localCache.saveData, sourceId, chapterId, questId)
            let that = this
            let obj = QuestUi.openQuestUi(questJson, saveData, {
                sendInputPacket: ClientSystem.sendInputPacket.bind(ClientSystem, sourceId, chapterId, questId),
                sendOutputPacket: ClientSystem.sendOutputPacket.bind(ClientSystem, sourceId, chapterId, questId),
                openParentListUi: function () {
                    QuestUi.openQuestListUi(TranAPI.translate('gui.parentList.title'), questJson.parent, function (path) {
                        let questJson = System.getQuestJson(Store.localCache.resolvedJson, path[0], path[1], path[2])
                        if (!questJson || questJson.type !== 'quest') return true
                        if (questJson.hidden) {
                            let inputState = System.getQuestInputState(Store.localCache.resolvedJson, Store.localCache.saveData, path[0], path[1], path[2])
                            if (inputState === EnumObject.questInputState.locked) {
                                alert(TranAPI.translate('alert.fail.questHidden'))
                                return true
                            }
                        }
                        that.open(path[0])
                        that.updateChapterUi(path[1])
                        that.openQuestUi(path[2])
                    })
                },
                openChildListUi: function () {
                    let questList = questJson.child.filter(function (path) {
                        let questJson = System.getQuestJson(Store.localCache.resolvedJson, path[0], path[1], path[2])
                        if (!questJson || questJson.type !== 'quest') return false
                        if (!questJson.hidden) return true
                        let inputState = System.getQuestInputState(Store.localCache.resolvedJson, Store.localCache.saveData, path[0], path[1], path[2])
                        return inputState !== EnumObject.questInputState.locked
                    })
                    QuestUi.openQuestListUi(TranAPI.translate('gui.childList.title'), questList, function (path) {
                        that.open(path[0])
                        that.updateChapterUi(path[1])
                        that.openQuestUi(path[2])
                    })
                },
                isReload: isReload
            })
            this.questUi.questId = questId
            this.questUi.isClosed = obj.isClosed
            this.questUi.close = obj.close
            this.questUi.updateRequest.exist = false
        } catch (err) {
            Utils.error('Error in function $MainUi.openQuestUi (ui/MainUi.js):\n', err)
        }
    },
    /** @type { (chapterId: Nullable<CQTypes.chapterId>) => void } */
    addChapterUiUpdateRequest (chapterId) {
        if (!chapterId || chapterId !== this.chapterId) return
        if (!this.chapterUi.isOpened()) return
        let time = Date.now()
        if (!this.chapterUiUpdateRequest.exist) {
            this.chapterUiUpdateRequest.exist = true
            this.chapterUiUpdateRequest.timeFirst = time
        }
        this.chapterUiUpdateRequest.timeLast = time
    },
    /** @type { (questId: Nullable<CQTypes.questId>) => void } */
    addQuestUiUpdateRequest (questId) {
        if (!questId || questId !== this.questUi.questId) return
        if (typeof this.questUi.isClosed !== 'function' || this.questUi.isClosed()) return
        let time = Date.now()
        if (!this.questUi.updateRequest.exist) {
            this.questUi.updateRequest.exist = true
            this.questUi.updateRequest.timeFirst = time
        }
        this.questUi.updateRequest.timeLast = time
    }
}

QuestUi.open = $MainUi.open.bind($MainUi)

Callback.addCallback('LocalTick', function () {
    if (!$MainUi.chapterUiUpdateRequest.exist) return
    if (!$MainUi.chapterUi.isOpened()) {
        $MainUi.chapterUiUpdateRequest.exist = false
        return
    }
    let time = Date.now()
    if (time - $MainUi.chapterUiUpdateRequest.timeFirst >= 500 /* 0.5s */) {
        $MainUi.updateChapterUi($MainUi.chapterId)
        return
    }
    if (time - $MainUi.chapterUiUpdateRequest.timeLast >= 100 /* 0.1s */) {
        $MainUi.updateChapterUi($MainUi.chapterId)
        return
    }
})

Callback.addCallback('LocalTick', function () {
    if (!$MainUi.questUi.updateRequest.exist) return
    if (typeof $MainUi.questUi.isClosed !== 'function') return
    if ($MainUi.questUi.isClosed()) {
        $MainUi.questUi.updateRequest.exist = false
        return
    }
    let time = Date.now()
    if (time - $MainUi.questUi.updateRequest.timeFirst >= 500 /* 0.5s */) {
        $MainUi.openQuestUi($MainUi.questUi.questId, true)
        return
    }
    if (time - $MainUi.questUi.updateRequest.timeLast >= 100 /* 0.1s */) {
        $MainUi.openQuestUi($MainUi.questUi.questId, true)
        return
    }
})

Callback.addCallback('CustomQuests.onLocalInputStateChanged', function (path) {
    if (typeof $MainUi.sourceId !== 'string' || typeof $MainUi.chapterId !== 'string') return
    if (path[0] !== $MainUi.sourceId || path[1] !== $MainUi.chapterId || path[2] !== $MainUi.questUi.questId) return
    $MainUi.addQuestUiUpdateRequest(path[2])
})
Callback.addCallback('CustomQuests.onLocalOutputStateChanged', function (path) {
    if (typeof $MainUi.sourceId !== 'string' || typeof $MainUi.chapterId !== 'string') return
    if (path[0] !== $MainUi.sourceId || path[1] !== $MainUi.chapterId || path[2] !== $MainUi.questUi.questId) return
    $MainUi.addQuestUiUpdateRequest(path[2])
})
Callback.addCallback('CustomQuests.onLocalQuestInputStateChanged', function (path) {
    if (typeof $MainUi.sourceId !== 'string' || typeof $MainUi.chapterId !== 'string') return
    if (path[0] !== $MainUi.sourceId || path[1] !== $MainUi.chapterId) return
    if (!$MainUi.chapterUi.isOpened()) return
    $MainUi.addChapterUiUpdateRequest(path[1])
    if (path[2] === $MainUi.questUi.questId) {
        $MainUi.addQuestUiUpdateRequest(path[2])
    }
})
Callback.addCallback('CustomQuests.onLocalQuestOutputStateChanged', function (path) {
    if (typeof $MainUi.sourceId !== 'string' || typeof $MainUi.chapterId !== 'string') return
    if (path[0] !== $MainUi.sourceId || path[1] !== $MainUi.chapterId) return
    if (!$MainUi.chapterUi.isOpened()) return
    $MainUi.addChapterUiUpdateRequest(path[1])
    if (path[2] === $MainUi.questUi.questId) {
        $MainUi.addQuestUiUpdateRequest(path[2])
    }
})
Callback.addCallback('CustomQuests.onLocalCacheChanged', function (packetData, oldLocalCache) {
    if ($MainUi.chapterUi.isOpened() &&
        typeof $MainUi.chapterId === 'string' &&
        (Utils.isObject(packetData.saveData) || packetData.saveData === null)
    ) {
        $MainUi.addChapterUiUpdateRequest($MainUi.chapterId)
        $MainUi.addQuestUiUpdateRequest($MainUi.questUi.questId)
    }
    if (Utils.isObject(packetData.team) || packetData.team === null) {
        let hasTeam = packetData.team !== null
        $MainUi.mainUi.content.elements['team_remind'].x = 72 + 36 * (55 / 80) + (hasTeam ? 2000 : 0)
        $MainUi.mainUi.refresh()
    }
})

})()




// file: ui/QuestUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

const $QuestUi = {
    uuid: '',
    /** @type { Nullable<CQTypes.QuestSaveData> } */
    saveData: null,
    /** @type { Nullable<() => void> } */
    openParentListUi: null,
    /** @type { Nullable<() => void> } */
    openChildListUi: null,
    /** @type { Array<() => void> } */
    closeListener: [],
    /** @type { Array<() => void> } */
    reloadListener: [],
    questUi: QuestUiTools.createUi({
        location: {x: 200, y: ($ScreenHeight - 400) / 2, width: 600, height: 400, scrollY: 400},
        drawing: [
            {type: 'background', color: $Color.TRANSPARENT},
            {type: 'frame', x: 0, y: 0, width: 1000, height: 1000*400/600, bitmap: 'classic_frame_bg_light', scale: 4},
            {type: 'text', text: '', x: 100, y: 70, font: {color: $Color.BLACK, size: 40}},
            {type: 'line', x1: 0, y1: 100, x2: 1000, y2: 100, width: 5, color: $Color.BLACK},
            {type: 'line', x1: 0, y1: 250, x2: 1000, y2: 250, width: 5, color: $Color.BLACK},
            {type: 'line', x1: 500, y1: 100, x2: 500, y2: 250, width: 5, color: $Color.BLACK},
            {type: 'text', text: TranAPI.translate('gui.task'), x: 250, y: 125, font: {color: $Color.parseColor('#5555FF'), size: 30, align: 1}},
            {type: 'text', text: TranAPI.translate('gui.reward'), x: 750, y: 125, font: {color: $Color.parseColor('#dd8800'), size: 30, align: 1}}
        ],
        elements: {
            close: {type: 'closeButton', x: 920, y: 20, bitmap: 'X', bitmap2: 'XPress', scale: 60/19},
            show_parent: {type: 'button', x: 20, y: 110, bitmap: 'cq_parent', scale: 40/48,
                clicker: {
                    onClick: Utils.debounce(function () {
                        if (typeof $QuestUi.openParentListUi === 'function') {
                            $QuestUi.openParentListUi()
                        }
                    }, 500),
                    onLongClick: Utils.debounce(function () {
                        alert(TranAPI.translate('alert.description.show_parent'))
                    }, 500)
                }
            },
            show_child: {type: 'button', x: 940, y: 110, bitmap: 'cq_child', scale: 40/48,
                clicker: {
                    onClick: Utils.debounce(function () {
                        if (typeof $QuestUi.openChildListUi === 'function') {
                            $QuestUi.openChildListUi()
                        }
                    }, 500),
                    onLongClick: Utils.debounce(function () {
                        alert(TranAPI.translate('alert.description.show_child'))
                    }, 500)
                }
            }
        }
    }, {
        onClose (ui) {
            $QuestUi.invokeCloseListener()
            $QuestUi.saveData = null
        }
    }, {
        closeOnBackPressed: true,
        blockingBackground: true,
        hideNavigation: true
    }),
    /** @type { QuestUi['openQuestUi'] } */
    open (questJson, saveData, params) {
        this.saveData = saveData
        this.openParentListUi = params.openParentListUi || null
        this.openChildListUi = params.openChildListUi || null
        if (!params.isReload) this.invokeCloseListener()
        let uuid = Utils.getUUID()
        this.uuid = uuid
        let name = TranAPI.translate(questJson.inner.name)
        let numIO = Math.max(questJson.inner.input.length, questJson.inner.output.length, 1)
        let textElements = QuestUiTools.resolveTextJsonToElements(questJson.inner.text, {
            prefix: uuid + '_desc_',
            pos: [20, 160 + Math.ceil(numIO/5)*100],
            maxWidth: 960,
            rowSpace: 10,
            font: {
                color: $Color.BLACK,
                size: 30
            }
        })
        this.questUi.clearNewElements(null, true)
        let location = this.questUi.ui.getLocation()
        let content = this.questUi.content
        location.scrollY = (textElements.maxY + 20) * (600/1000)
        location.height = Math.min(location.scrollY, $ScreenHeight)
        location.y = ($ScreenHeight - location.height)/2
        content.drawing[1].height = location.scrollY * (1000/600)
        content.drawing[2].text = name
        content.drawing[5].y2 = content.drawing[4].y2 = content.drawing[4].y1 = 150 + Math.ceil(numIO/5)*100
        this.questUi.addElements(QuestUiTools.getQuestIcon(questJson, saveData, {
            pos: [20, 20],
            size: 70,
            prefix: uuid + '_icon_'
        }))
        this.questUi.addElements(textElements.elements)
        let that = this
        let sendInputPacket = typeof params.sendInputPacket === 'function' ? params.sendInputPacket : null
        questJson.inner.input.forEach(function (inputJson, index) {
            if (!inputJson) return
            let getIcon = IOTypeTools.getInputTypeCb(inputJson.type).getIcon
            if (typeof getIcon !== 'function') return
            let elements = getIcon(inputJson, {
                getState: that.getInputStateSafe.bind(that, index),
                sendPacket: sendInputPacket ? sendInputPacket.bind(null, index) : null,
                openDescription: QuestUi.openDescriptionUi.bind(QuestUi, true, inputJson, { getState: that.getInputStateSafe.bind(that, index) })
            }, {
                pos: [96*(index % 5) + 20, 100*Math.floor(index/5) + 160],
                size: 80,
                prefix: uuid + '_input_' + index + '_',
                setCloseListener: that.setCloseListener.bind(that),
                setReloadListener: that.setReloadListener.bind(that)
            })
            if (!Utils.isObject(elements)) return
            that.questUi.addElements(elements)
            if (saveData.input[index] && saveData.input[index].state === EnumObject.inputState.finished) {
                that.questUi.addElements([[uuid + '_input_bingo_' + index, {
                    type: 'image', z: 10, width: 30, height: 30 * 16 / 22, bitmap: 'cq_bingo',
                    x: 96*(index % 5) + 20 + 45,
                    y: 100*Math.floor(index/5) + 160 + 5
                }]])
            }
        })
        let sendOutputPacket = typeof params.sendOutputPacket === 'function' ? params.sendOutputPacket : null
        questJson.inner.output.forEach(function (outputJson, index) {
            if (!outputJson) return
            let getIcon = IOTypeTools.getOutputTypeCb(outputJson.type).getIcon
            if (typeof getIcon !== 'function') return
            let elements = getIcon(outputJson, {
                getState: that.getOutputStateSafe.bind(that, index),
                sendPacket: sendOutputPacket ? sendOutputPacket.bind(null, index) : null,
                openDescription: QuestUi.openDescriptionUi.bind(QuestUi, false, outputJson, { getState: that.getOutputStateSafe.bind(that, index) })
            }, {
                pos: [96*(index % 5) + 520, 100*Math.floor(index/5) + 160],
                size: 80,
                prefix: uuid + '_output_' + index + '_',
                setCloseListener: that.setCloseListener.bind(that),
                setReloadListener: that.setReloadListener.bind(that)
            })
            if (!Utils.isObject(elements)) return
            that.questUi.addElements(elements)
            if (saveData.inputState === EnumObject.questInputState.finished) {
                if (!saveData.output[index] || saveData.output[index].state !== EnumObject.outputState.received) {
                    that.questUi.addElements([[uuid + '_output_dot_' + index, {
                        type: 'image', z: 10, width: 20, height: 20, bitmap: 'cq_dot_green',
                        x: 96*(index % 5) + 520 + 55,
                        y: 100*Math.floor(index/5) + 160 + 5
                    }]])
                }
            } else {
                that.questUi.addElements([[uuid + '_output_dot_' + index, {
                    type: 'image', z: 10, width: 20, height: 20, bitmap: 'cq_dot_grey',
                    x: 96*(index % 5) + 520 + 55,
                    y: 100*Math.floor(index/5) + 160 + 5
                }]])
            }
        })
        this.questUi.open(true)
        if (params.isReload) this.invokeReloadListener()
        return {
            isClosed: this.isClosed.bind(this, uuid),
            close: this.close.bind(this, uuid)
        }
    },
    /** @type { (index: number) => CQTypes.InputStateObject } */
    getInputStateSafe (index) {
        if (!this.saveData || !this.saveData.input[index]) {
            return { state: EnumObject.inputState.unfinished }
        }
        return Utils.deepCopy(this.saveData.input[index])
    },
    /** @type { (index: number) => CQTypes.OutputStateObject } */
    getOutputStateSafe (index) {
        if (!this.saveData || !this.saveData.output[index]) {
            return { state: EnumObject.outputState.unreceived }
        }
        return Utils.deepCopy(this.saveData.output[index])
    },
    /** @type { (uuid: string) => boolean } */
    isClosed (uuid) {
        if (uuid !== this.uuid) return true
        return !this.questUi.isOpened()
    },
    /** @type { (uuid: string) => void } */
    close (uuid) {
        if (uuid !== this.uuid) return
        this.questUi.close()
    },
    /** @type { (listener: () => void) => void } */
    setCloseListener (listener) {
        if (typeof listener !== 'function') return
        this.closeListener.push(listener)
    },
    invokeCloseListener () {
        this.closeListener.forEach(function (listener) {
            try {
                listener()
            } catch (err) {
                Utils.error('Error in invokeCloseListener (QuestUi.js):\n', err)
            }
        })
        this.closeListener.length = 0
        this.reloadListener.length = 0
    },
    /** @type { (listener: () => void) => void } */
    setReloadListener (listener) {
        if (typeof listener !== 'function') return
        this.reloadListener.push(listener)
    },
    invokeReloadListener () {
        this.reloadListener.forEach(function (listener) {
            try {
                listener()
            } catch (err) {
                Utils.error('Error in invokeReloadListener (QuestUi.js):\n', err)
            }
        })
    }
}

QuestUi.openQuestUi = $QuestUi.open.bind($QuestUi)

})()




// file: ui/DescriptionUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

const $DescriptionUi = {
    uuid: '',
    /** @type { Array<() => void> } */
    closeListener: [],
    descriptionUi: QuestUiTools.createUi({
        location: {x: 250, y: ($ScreenHeight - 400) / 2, width: 500, height: 400, scrollY: 400},
        drawing: [
            {type: 'background', color: $Color.TRANSPARENT},
            {type: 'frame', x: 0, y: 0, width: 1000, height: 1000*400/500, bitmap: 'classic_frame_bg_light', scale: 4},
            {type: 'text', text: '', x: 30, y: 70, font: {color: $Color.BLACK, size: 40}},
            {type: 'line', x1: 20, y1: 100, x2: 980, y2: 100, width: 2, color: $Color.GRAY}
        ],
        elements: {
            close: {type: 'closeButton', x: 920, y: 20, bitmap: 'X', bitmap2: 'XPress', scale: 60/19}
        }
    }, {
        onClose (ui) {
            $DescriptionUi.callCloseListener()
        }
    }, {
        closeOnBackPressed: true,
        blockingBackground: true,
        hideNavigation: true
    }),
    /** @type { (isInput: boolean, ioJson: CQTypes.IOTypes.InputJson|CQTypes.IOTypes.OutputJson, toolsCb: CQTypes.IOTypeToolsLocalCb) => ReturnType<QuestUi['openDescriptionUi']> } */
    open (isInput, ioJson, toolsCb) {
        this.callCloseListener()
        let uuid = Utils.getUUID()
        let type = ioJson.type
        let name = isInput ? IOTypeTools.getInputTypeName(type) : IOTypeTools.getOutputTypeName(type)
        let title = Utils.replace(TranAPI.translate(isInput ? 'gui.description.inputType' : 'gui.description.outputType'), [
            ['{name}', name]
        ])
        let getDescription = isInput ? IOTypeTools.getInputTypeCb(type).getDescription : IOTypeTools.getOutputTypeCb(type).getDescription
        if (typeof getDescription !== 'function') {
            return {
                isClosed: function () {
                    return true
                },
                close: function () {}
            }
        }
        let obj = getDescription(ioJson, toolsCb, {
            posY: 100,
            prefix: uuid + '_',
            setCloseListener: this.setCloseListener.bind(this)
        })
        if (!Utils.isObject(obj)) {
            return {
                isClosed: function () {
                    return true
                },
                close: function () {}
            }
        }
        let ui = this.descriptionUi
        ui.clearNewElements(null, true)
        let location = ui.ui.getLocation()
        location.scrollY = Math.max(obj.maxY * (500/1000), $ScreenHeight * 0.6)
        location.height = Math.min(location.scrollY, $ScreenHeight)
        location.y = ($ScreenHeight - location.height)/2
        ui.content.drawing[1].height = location.scrollY * (1000/500)
        ui.content.drawing[2].text = title
        ui.addElements(obj.elements)
        ui.open(true)
        this.uuid = uuid
        return {
            isClosed: this.isClosed.bind(this, uuid),
            close: this.close.bind(this, uuid)
        }
    },
    /** @type { (uuid: string) => boolean } */
    isClosed (uuid) {
        if (uuid !== this.uuid) return true
        return !this.descriptionUi.isOpened()
    },
    /** @type { (uuid: string) => void } */
    close (uuid) {
        if (uuid !== this.uuid) return
        this.descriptionUi.close()
    },
    /** @type { (listener: () => void) => void } */
    setCloseListener (listener) {
        if (typeof listener !== 'function') return
        this.closeListener.push(listener)
    },
    callCloseListener () {
        this.closeListener.forEach(function (listener) {
            try {
                listener()
            } catch (err) {
                Utils.error('Error in callCloseListener (Description.js):\n', err)
            }
        })
        this.closeListener.length = 0
    }
}

QuestUi.openDescriptionUi = $DescriptionUi.open.bind($DescriptionUi)

})()




// file: ui/TeamUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

const $TeamUi = {
    mainUi: QuestUiTools.createUi({
        location: { x: 0, y: 0, width: 1000, height: $ScreenHeight },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: $ScreenHeight, bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 60, bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'text', text: TranAPI.translate('gui.team'), x: 500, y: 30, font: { color: $Color.BLACK, align: 1, size: 20 } },
            { type: 'line', x1: 390, y1: 70, x2: 390, y2: $ScreenHeight - 20, width: 1, color: $Color.BLACK },
            { type: 'frame', x: 50, y: 150, width: 300, height: $ScreenHeight - 40 - 150, bitmap: 'classic_frame_bg_light', scale: 1 },
            { type: 'frame', x: 430, y: 180, width: 520, height: $ScreenHeight - 40 - 180, bitmap: 'classic_frame_bg_light', scale: 1 }
        ],
        elements: {
            close: { type: 'closeButton', x: 947, y: 12, bitmap: 'X', bitmap2: 'XPress', scale: 36 / 19 },
            info: { type: 'button', x: 22, y: 12, bitmap: 'cq_info', scale: 36 / 16,
                clicker: {
                    onClick: Utils.debounce(function () {
                        Utils.dialog({
                            text: TranAPI.translate('mod.dialog')
                        })
                    }, 500)
                }
            },
            search_bg: { type: 'image', x: 50, y: 100, z: 1, bitmap: 'cq_search_bg', width: 300, height: 40,
                clicker: {
                    onClick: Utils.debounce(function () {
                        let teamList = Store.localCache.teamList
                        if (!Array.isArray(teamList)) return
                        Utils.getInput({
                            title: TranAPI.translate('gui.team.search.title'),
                            hint: TranAPI.translate('gui.team.search.hint'),
                            button: TranAPI.translate('gui.team.search')
                        }, function (keyword) {
                            $TeamUi.mainUi.content.elements['search_text'].text = keyword || TranAPI.translate('gui.team.search')
                            keyword = keyword.trim().toLowerCase()
                            if (keyword) {
                                teamList = teamList.filter(function (team) {
                                    return (team.name || '').toLowerCase().indexOf(keyword) >= 0
                                })
                            }
                            $TeamUi.updateTeamListUi(teamList)
                        })
                    }, 500)
                }
            },
            search_img: { type: 'image', x: 65, y: 110, z: 2, bitmap: 'cq_search', width: 20, height: 20 },
            search_text: { type: 'text', x: 100, y: 110, z: 2, text: TranAPI.translate('gui.team.search'), font: { color: $Color.GRAY, size: 20 } },
            icon: { type: 'slot', visual: true, x: 430, y: 90, size: 80, bitmap: 'cq_clear', source: {}, darken: false },
            name: { type: 'text', x: 530, y: 90, text: '', font: { color: $Color.BLACK, size: 30 } },
            subname: { type: 'text', x: 530, y: 130, text: '', font: { color: $Color.GRAY, size: 20 } },
            operate: { type: 'button', x: 850, y: 110, z: 1, bitmap: 'cq_button_long_up', bitmap2: 'cq_button_long_down', scale: 100 / 50,
                clicker: {
                    onClick: Utils.debounce(function () {
                        let team = ClientSystem.getTeam()
                        if (!team) return
                        let admin = team.players[Player.get()] >= EnumObject.playerState.admin
                        QuestUi.openSelectionUi(null, [
                            {
                                text: TranAPI.translate('gui.team.operate.exit'),
                                onSelect () {
                                    Utils.dialog({
                                        title: TranAPI.translate('gui.team.operate.exit'),
                                        text: TranAPI.translate('gui.team.operate.exit.warn')
                                    }, function () {
                                        ClientSystem.exitTeam()
                                    })
                                    return false
                                }
                            }, {
                                text: TranAPI.translate('gui.team.operate.rename'),
                                darken: !admin,
                                onSelect () {
                                    if (!admin) return true
                                    Utils.getInput({
                                        title: TranAPI.translate('gui.team.operate.rename'),
                                        hint: TranAPI.translate('gui.team.enterName'),
                                        mutiLine: true
                                    }, function (name) {
                                        if (name.length <= 3 || name.length > 100) {
                                            alert(TranAPI.translate('alert.fail.nameLength'))
                                            return
                                        }
                                        ClientSystem.renameTeam(name)
                                    })
                                    return false
                                }
                            }, {
                                text: TranAPI.translate('gui.team.operate.changePassword'),
                                darken: !admin,
                                onSelect () {
                                    if (!admin) return true
                                    Utils.getInput({
                                        title: TranAPI.translate('gui.team.operate.changePassword'),
                                        hint: TranAPI.translate('gui.team.enterPassword')
                                    }, function (password) {
                                        if (Utils.md5(password) !== team.password) {
                                            alert(TranAPI.translate('alert.fail.passwordWrong'))
                                            return
                                        }
                                        Utils.getInput({
                                            title: TranAPI.translate('gui.team.operate.changePassword'),
                                            hint: TranAPI.translate('gui.team.enterNewPassword')
                                        }, function (password) {
                                            if (password.length < 3) {
                                                alert(TranAPI.translate('alert.fail.passwordLength'))
                                                return
                                            }
                                            ClientSystem.changePasswordTeam(password)
                                        })
                                    })
                                    return false
                                }
                            }
                        ])
                    }, 500)
                }
            },
            operate_text: { type: 'text', x: 900, y: 115, z: 2, text: TranAPI.translate('gui.team.operate'), font: { color: $Color.BLACK, size: 15, align: 1 } },
            noteam_text: { type: 'text', x: 700, y: 135, text: TranAPI.translate('gui.team.noTeam'), font: { color: $Color.BLACK, size: 30, align: 1 } },
            noteam_subtext: { type: 'text', x: 700, y: 190, text: TranAPI.translate('gui.team.joinOrCreate'), font: { color: $Color.GRAY, size: 20, align: 1 } },
            noteam_create: { type: 'button', x: 600, y: 270, z: 1, bitmap: 'cq_button_long_up', bitmap2: 'cq_button_long_down', scale: 200 / 50,
                clicker: {
                    onClick: Utils.debounce(function () {
                        if (ClientSystem.getTeam()) return
                        Utils.getInput({
                            title: TranAPI.translate('gui.team.create'),
                            hint: TranAPI.translate('gui.team.enterName'),
                            button: TranAPI.translate('gui.team.create.next'),
                            mutiLine: true
                        }, function (name) {
                            if (name.length <= 3 || name.length > 100) {
                                alert(TranAPI.translate('alert.fail.nameLength'))
                                return
                            }
                            Utils.getInput({
                                title: TranAPI.translate('gui.team.create'),
                                hint: TranAPI.translate('gui.team.enterPassword'),
                                button: TranAPI.translate('gui.team.create.next')
                            }, function (password) {
                                if (password.length < 3) {
                                    alert(TranAPI.translate('alert.fail.passwordLength'))
                                    return
                                }
                                ClientSystem.createTeam({
                                    bitmap: { id: 'VanillaBlockID.grass', count: 1 },
                                    name: name,
                                    password: password,
                                    setting: {}
                                })
                            })
                        })
                    }, 500)
                }
            },
            noteam_create_text: { type: 'text', x: 700, y: 290, z: 2, text: TranAPI.translate('gui.team.create'), font: { color: $Color.BLACK, size: 20, align: 1 } }
        }
    }, {
        onOpen (ui) {
            $TeamUi.teamListUi.open()
            if (ClientSystem.getTeam()) $TeamUi.teamPlayerListUi.open()
        },
        onClose (ui) {
            $TeamUi.teamListUi.close()
            $TeamUi.teamPlayerListUi.close()
        }
    }, {
        closeOnBackPressed: true,
        blockingBackground: true,
        hideNavigation: true
    }),
    teamListUi: QuestUiTools.createUi({
        location: { x: 54, y: 154, width: 292, height: $ScreenHeight - 198, scrollY: 0 },
        drawing: [{ type: 'background', color: $Color.TRANSPARENT }],
        elements: {}
    }),
    teamPlayerListUi: QuestUiTools.createUi({
        location: { x: 434, y: 184, width: 512, height: $ScreenHeight - 228, scrollY: 0 },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'line', x1: 500, y1: 10, x2: 500, y2: 0, width: 1, color: $Color.GRAY }
        ],
        elements: {}
    }),
    /** @type { QuestUi['openTeamUi'] } */
    open () {
        let team = ClientSystem.getTeam()
        let ui = this.mainUi
        let drawing = ui.content.drawing
        let elements = ui.content.elements
        if (team) {
            let name = team.name.split('\n')
            elements['search_text'].text = TranAPI.translate('gui.team.search')
            elements['icon'].bitmap = team.bitmap.bitmap || 'cq_clear'
            elements['icon'].source = Utils.transferItemFromJson(team.bitmap)
            elements['icon'].darken = Boolean(team.bitmap.darken)
            elements['name'].text = name[0]
            elements['subname'].text = name[1]
            drawing[6].x = 430
            elements['icon'].x = 430
            elements['name'].x = 530
            elements['subname'].x = 530
            elements['operate'].x = 850
            elements['operate_text'].x = 900
            elements['noteam_text'].x = 700 + 2000
            elements['noteam_subtext'].x = 700 + 2000
            elements['noteam_create'].x = 600 + 2000
            elements['noteam_create_text'].x = 700 + 2000
            this.updateTeamPlayerListUi()
            if (ui.isOpened() && !this.teamPlayerListUi.isOpened()) this.teamPlayerListUi.open()
        } else {
            drawing[6].x = 430 + 2000
            elements['icon'].x = 430 + 2000
            elements['name'].x = 530 + 2000
            elements['subname'].x = 530 + 2000
            elements['operate'].x = 850 + 2000
            elements['operate_text'].x = 900 + 2000
            elements['noteam_text'].x = 700
            elements['noteam_subtext'].x = 700
            elements['noteam_create'].x = 600
            elements['noteam_create_text'].x = 700
            if (this.teamPlayerListUi.isOpened()) this.teamPlayerListUi.close()
        }
        this.updateTeamListUi(Store.localCache.teamList)
        ui.open(true)
    },
    /** @type { (teamList: ReturnType<ServerSystem['getTeamList']>) => void } */
    updateTeamListUi (teamList) {
        let uuid = Utils.getUUID()
        let ui = this.teamListUi
        ui.content.drawing.splice(1)
        ui.clearNewElements(null, true)
        if (!Array.isArray(teamList)) teamList = []
        ui.ui.getLocation().scrollY = (160*Math.min(teamList.length, 15 + 1) + 5) * (292/1000)
        teamList.some(function (team, index) {
            if (index >= 15) {
                ui.addElements([
                    [uuid + '_' + index + '_warn', {
                        type: 'text', x: 500, y: 60 + 160*index, text: TranAPI.translate('gui.team.omitList'),
                        font: { color: $Color.BLACK, size: 40 }
                    }]
                ])
                return true
            }
            let name = String(team.name).split('\n')
            let teamId = team.teamId
            ui.content.drawing.push({
                type: 'line', x1: 20, y1: 160 + 160*index, x2: 980, y2: 160 + 160*index,
                width: 1, color: $Color.GRAY
            })
            ui.addElements([
                [uuid + '_' + index + '_bg', {
                    type: 'image', x: 0, y: 160*index, bitmap: 'cq_clear', width: 1000, height: 160,
                    clicker: {
                        onClick: Utils.debounce(function () {
                            Utils.getInput({
                                title: TranAPI.translate('gui.team.joinTeam'),
                                hint: TranAPI.translate('gui.team.enterPassword')
                            }, function (str) {
                                ClientSystem.joinTeam(teamId, str)
                                alert(TranAPI.translate('gui.team.applicationSent'))
                            })
                        }, 500)
                    }
                }],
                [uuid + '_' + index + '_icon', {
                    type: 'slot', visual: true, x: 20, y: 10 + 160*index, size: 140,
                    bitmap: team.bitmap.bitmap || 'cq_clear',
                    source: Utils.transferItemFromJson(team.bitmap),
                    darken: Boolean(team.bitmap.darken)
                }],
                [uuid + '_' + index + '_name', {
                    type: 'text', x: 180, y: 20 + 160*index, text: name[0] || '',
                    font: { color: $Color.BLACK, size: 60 }
                }],
                [uuid + '_' + index + '_subname', {
                    type: 'text', x: 180, y: 90 + 160*index, text: name[1] || '',
                    font: { color: $Color.GRAY, size: 40 }
                }]
            ])
        })
        ui.refresh()
    },
    updateTeamPlayerListUi () {
        let teamPlayerList = Utils.deepCopy(Store.localCache.teamPlayerList)
        let team = ClientSystem.getTeam()
        let uuid = Utils.getUUID()
        let ui = this.teamPlayerListUi
        ui.content.drawing.splice(2)
        ui.clearNewElements(null, true)
        if (!Array.isArray(teamPlayerList) || !team) teamPlayerList = []
        teamPlayerList.sort(function (a, b) { return Number(b.online) - Number(a.online) })
        ui.content.drawing[1].y2 = 100*Math.ceil(teamPlayerList.length / 2)
        ui.ui.getLocation().scrollY = (ui.content.drawing[1].y2 + 5) * (512/1000)
        teamPlayerList.forEach(function (obj, index) {
            let pos = [500*(index % 2), 100*Math.floor(index / 2)]
            if (index % 2 == 0) {
                ui.content.drawing.push({
                    type: 'line', x1: 10, y1: 100 + pos[1],
                    x2: 990, y2: 100 + pos[1],
                    width: 1, color: $Color.GRAY
                })
            }
            let state = team.players[obj.player]
            let stateKeyStr = 'gui.team.playerState.absent'
            if (state === EnumObject.playerState.member) stateKeyStr = 'gui.team.playerState.member'
            else if (state === EnumObject.playerState.admin) stateKeyStr = 'gui.team.playerState.admin'
            else if (state === EnumObject.playerState.owner) stateKeyStr = 'gui.team.playerState.owner'
            ui.addElements([
                [uuid + '_' + index + '_bg', {
                    type: 'image', x: pos[0], y: pos[1], bitmap: 'cq_clear', width: 500, height: 100,
                    clicker: {
                        onClick: Utils.debounce(function () {
                            alert(obj.name)
                        }, 500)
                    }
                }],
                [uuid + '_' + index + '_name', {
                    type: 'text', x: 40 + pos[0], y: 10 + pos[1], text: obj.name || '',
                    font: { color: $Color.BLACK, size: 40 }
                }],
                [uuid + '_' + index + '_state', {
                    type: 'text', x: 20 + pos[0], y: 60 + pos[1], text: TranAPI.translate(stateKeyStr),
                    font: { color: $Color.GRAY, size: 30 }
                }],
                [uuid + '_' + index + '_online', {
                    type: 'image', x: 15 + pos[0], y: 25 + pos[1],
                    width: 20, height: 20, bitmap: obj.online ? 'cq_dot_green' : 'cq_dot_grey'
                }]
            ])
        })
        ui.refresh()
    }
}
Callback.addCallback('CustomQuests.onLocalCacheChanged', function (packetData, oldLocalCache) {
    if ($TeamUi.mainUi.isOpened() && (
        (Utils.isObject(packetData.team) || packetData.team === null) || 
        (Array.isArray(packetData.teamPlayerList) || packetData.teamPlayerList === null)
    )) {
        $TeamUi.open()
        return
    }
    if (Array.isArray(packetData.teamList) && $TeamUi.teamListUi.isOpened()) {
        $TeamUi.updateTeamListUi(packetData.teamList)
    }
})

QuestUi.openTeamUi = $TeamUi.open.bind($TeamUi)

})()




// file: ui/QuestListUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

/**
 * @typedef { {[sourceId: CQTypes.sourceId]: {[chapterId: CQTypes.chapterId]: Array<CQTypes.questId>}} } QuestListObject
 */
const $QuestListUi = {
    /** @type { Array<CQTypes.PathArray> } */
    questList: [],
    /** @type { QuestListObject } */
    questListObject: {},
    /** @type { Nullable<(path: CQTypes.PathArray) => boolean> } */
    onSelect: null,
    mainUi: QuestUiTools.createUi({
        location: { x: 0, y: 0, width: 1000, height: $ScreenHeight },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: $ScreenHeight, bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 60, bitmap: 'classic_frame_bg_light', scale: 2 },
            { type: 'text', text: '', x: 500, y: 30, font: { color: $Color.BLACK, align: 1, size: 20 } },
            { type: 'frame', x: 0, y: 60, width: 40, height: $ScreenHeight - 60, bitmap: 'classic_frame_bg_light', scale: 1 }
        ],
        elements: {
            close: { type: 'closeButton', x: 947, y: 12, bitmap: 'X', bitmap2: 'XPress', scale: 36 / 19 },
            info: { type: 'button', x: 22, y: 12, bitmap: 'cq_info', scale: 36 / 16,
                clicker: {
                    onClick: Utils.debounce(function () {
                        Utils.dialog({
                            text: TranAPI.translate('mod.dialog')
                        })
                    }, 500)
                }
            },
            show_list_btn: { type: 'image', x: 4, y: 60 + ($ScreenHeight - 60) / 4, z: 2, bitmap: 'cq_clear', width: 32, height: ($ScreenHeight - 60) / 2,
                clicker: {
                    onClick: Utils.debounce(function () {
                        $QuestListUi.sourceListUi.open()
                    }, 500)
                }
            },
            show_list: { type: 'image', x: 8, y: 60 + ($ScreenHeight - 60) / 2 - 16, z: 1, bitmap: 'cq_arrow_right', scale: 32 / 64 }
        }
    }, {
        onOpen (ui) {
            $QuestListUi.questListUi.open()
        },
        onClose (ui) {
            $QuestListUi.sourceListUi.close()
            $QuestListUi.questListUi.close()
        }
    }, {
        closeOnBackPressed: true,
        blockingBackground: true,
        hideNavigation: true
    }),
    sourceListUi: QuestUiTools.createUi({
        location: { x: 0, y: 60, width: 300, height: $ScreenHeight - 60, scrollY: 100 * (300/1000) },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: 1000*($ScreenHeight - 60)/300, bitmap: 'classic_frame_bg_light', scale: 2 }
        ],
        elements: {
            close: { type: 'closeButton', x: 910, y: 10, bitmap: 'X', bitmap2: 'XPress', scale: 80/19 },
            title: { type: 'text', x: 60, y: 30, text: TranAPI.translate('gui.questList.sourceList'), font: { color: $Color.BLACK, size: 40 } }
        }
    }, null, {
        closeOnBackPressed: true,
        hideNavigation: true
    }),
    questListUi: QuestUiTools.createUi({
        location: { x: 40, y: 60, width: 960 , height: $ScreenHeight - 60, scrollY: $ScreenHeight - 60 },
        drawing: [
            { type: 'background', color: $Color.TRANSPARENT },
            { type: 'frame', x: 0, y: 0, width: 1000, height: ($ScreenHeight - 60) * (1000/960), bitmap: 'classic_frame_bg_light', scale: 2 }
        ],
        elements: {
            name: { type: 'text', x: 500, y: 10, text: '', font: { color: $Color.BLACK, size: 30, align: 1 } }
        }
    }),
    /** @type { QuestUi['openQuestListUi'] } */
    open (title, questList, onSelect) {
        this.questList = questList
        this.questListObject = this.resolveQuestList(questList)
        this.onSelect = onSelect
        this.mainUi.content.drawing[3].text = title
        this.updateSourceListUi()
        let empty = true
        for (let sourceId in this.questListObject) {
            this.updateQuestListUi(sourceId)
            empty = false
            break
        }
        if (empty) {
            this.questListUi.content.elements['name'].text = TranAPI.translate('gui.questList.empty')
            this.questListUi.clearNewElements()
            this.questListUi.refresh()
        }
        this.mainUi.open(true)
    },
    updateSourceListUi () {
        let ui = this.sourceListUi
        ui.content.drawing.splice(2)
        ui.clearNewElements(null, true)
        let height = 100
        let uuid = Utils.getUUID()
        for (let sourceId in this.questListObject) {
            let mainJson = Store.localCache.resolvedJson[sourceId]
            if (!mainJson) continue
            ui.addElements([
                [uuid + '_' + sourceId + '_name', {
                    type: 'text', text: TranAPI.translate(mainJson.name),
                    font: { color: $Color.BLACK, size: 50, align: 1 },
                    x: 500, y: height + 10, z: 1
                }],
                [uuid + '_' + sourceId + '_btn', {
                    type: 'image', x: 10, y: height + 10, z: 2, bitmap: 'cq_clear', width: 980, height: 100,
                    clicker: {
                        onClick: Utils.debounce(this.updateQuestListUi.bind(this, sourceId), 500)
                    }
                }]
            ])
            ui.content.drawing.push({
                type: 'line',
                x1: 10, y1: height,
                x2: 990, y2: height,
                width: 5, color: $Color.GRAY
            })
            height += 120
        }
        ui.content.drawing[1].height = Math.max(height + 10, 1000*($ScreenHeight - 60)/300)
        ui.ui.getLocation().scrollY = ui.content.drawing[1].height * (300/1000)
        ui.refresh()
    },
    /** @type { (sourceId: CQTypes.sourceId) => void } */
    updateQuestListUi (sourceId) {
        let ui = this.questListUi
        let mainQuestListObject = this.questListObject[sourceId]
        let mainJson = Store.localCache.resolvedJson[sourceId]
        ui.clearNewElements(null, true)
        if (!mainQuestListObject || !mainJson) {
            ui.content.elements['name'].text = TranAPI.translate('gui.questList.empty')
            ui.refresh()
            return
        }
        ui.content.elements['name'].text = TranAPI.translate(mainJson.name)
        let height = 50
        let uuid = Utils.getUUID()
        let that = this
        for (let chapterId in mainQuestListObject) {
            let questIdArray = mainQuestListObject[chapterId]
            let chapterJson = mainJson.chapter[chapterId]
            ui.addElements([[uuid + '_' + chapterId + '_name', {
                type: 'text', x: 60, y: height + 10, text: TranAPI.translate(chapterJson.name),
                font: { color: $Color.BLACK, size: 20 }
            }]])
            questIdArray.forEach(function (questId, index) {
                let questJson = chapterJson.quest[questId]
                if (!questJson || questJson.type !== 'quest') return
                let saveData = System.getQuestSaveData(Store.localCache.resolvedJson, Store.localCache.saveData, sourceId, chapterId, questId)
                let name = TranAPI.translate(questJson.inner.name)
                let pathArray = [sourceId, chapterId, questId]
                ui.addElements(QuestUiTools.getQuestIcon(questJson, saveData, {
                    prefix: uuid + '_' + chapterId + '_' + questId + '_',
                    pos: [50 + (index % 13) * 70, height + 40 + Math.floor(index / 13) * 70],
                    size: 60,
                    clicker: {
                        onClick: Utils.debounce(function () {
                            Utils.dialog({
                                text: Utils.replace(TranAPI.translate('gui.questList.select'), [
                                    ['{name}', name]
                                ])
                            }, function () {
                                if (typeof that.onSelect === 'function') {
                                    if (that.onSelect(pathArray)) return
                                }
                                that.mainUi.close()
                            })
                        }, 500),
                        onLongClick: Utils.debounce(function () {
                            alert(name)
                        }, 500)
                    }
                }))
            })
            height += 110 + Math.floor((questIdArray.length - 1) / 13) * 70
        }
        ui.content.drawing[1].height = Math.max(height, 1000*($ScreenHeight - 60)/960)
        ui.ui.getLocation().scrollY = ui.content.drawing[1].height * (960 / 1000)
        ui.refresh()
    },
    /** @type { (questList: Array<CQTypes.PathArray>) => QuestListObject } */
    resolveQuestList (questList) {
        const DEFAULT_SOURCEID = 'Default'
        /** @type { QuestListObject } */
        let obj = {}
        questList.forEach(function (pathArray) {
            if (!obj[pathArray[0]]) obj[pathArray[0]] = {}
            if (!obj[pathArray[0]][pathArray[1]]) obj[pathArray[0]][pathArray[1]] = []
            obj[pathArray[0]][pathArray[1]].push(pathArray[2])
        })
        for (let sourceId in obj) {
            let mainJson = Store.localCache.resolvedJson[sourceId]
            if (!mainJson) {
                delete obj[sourceId]
                continue
            }
            /** @type { {[chapterId: CQTypes.chapterId]: Array<CQTypes.chapterId>} } */
            let groupObj = {}
            /** @type { {[chapterId: CQTypes.chapterId]: boolean} } */
            let visInGroup = {}
            if (Array.isArray(mainJson.group)) {
                mainJson.group.forEach(function (groupJson) {
                    if (groupJson.list.length === 0) return
                    if (groupObj[groupJson.list[0]]) return
                    groupObj[groupJson.list[0]] = groupJson.list
                    groupJson.list.forEach(function (chapterId) {
                        visInGroup[chapterId] = true
                    })
                })
            }
            let mainObj = obj[sourceId]
            /** @type { QuestListObject[CQTypes.sourceId] } */
            let mainQuestListObject = {}
            for (let chapterId in mainJson.chapter) {
                if (groupObj[chapterId]) {
                    groupObj[chapterId].forEach(function (chapterId) {
                        if (mainObj[chapterId]) {
                            mainQuestListObject[chapterId] = mainObj[chapterId]
                        }
                    })
                } else if (!visInGroup[chapterId]) {
                    if (mainObj[chapterId]) {
                        mainQuestListObject[chapterId] = mainObj[chapterId]
                    }
                }
            }
            for (let chapterId in mainQuestListObject) {
                let questIdArray = mainQuestListObject[chapterId]
                if (questIdArray.length === 0) {
                    delete mainQuestListObject[chapterId]
                    continue
                }
                questIdArray.sort()
            }
            obj[sourceId] = mainQuestListObject
        }
        /** @type { QuestListObject } */
        let questListObject = {}
        /** @type { Array<CQTypes.sourceId> } */
        let sourceIdArray = []
        for (let sourceId in obj) sourceIdArray.push(sourceId)
        let index = sourceIdArray.indexOf(DEFAULT_SOURCEID)
        if (index !== -1) {
            sourceIdArray.splice(index, 1)
            questListObject[DEFAULT_SOURCEID] = obj[DEFAULT_SOURCEID]
        }
        sourceIdArray.sort()
        sourceIdArray.forEach(function (sourceId) {
            questListObject[sourceId] = obj[sourceId]
        })
        return questListObject
    }
}

QuestUi.openQuestListUi = $QuestListUi.open.bind($QuestListUi)

})()




// file: ui/ItemChooseUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

const $ItemChooseUi = {
    
}

})()




// file: ui/SelectionUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color

QuestUi.openSelectionUi = function (title, selection) {
    if (!Array.isArray(selection)) return
    if (typeof title !== 'string') title = TranAPI.translate('gui.selection.title')
    let ui = QuestUiTools.createUi({
        location: {x: 300, y: ($ScreenHeight - 400) / 2, width: 400, height: 400, scrollY: 400},
        drawing: [
            {type: 'background', color: $Color.TRANSPARENT},
            {type: 'frame', x: 0, y: 0, width: 1000, height: 1000*400/400, bitmap: 'classic_frame_bg_light', scale: 4},
            {type: 'text', text: '', x: 500, y: 50, font: {color: $Color.BLACK, size: 50, align: 1}}
        ],
        elements: {
            close: {type: 'closeButton', x: 910, y: 20, bitmap: 'X', bitmap2: 'XPress', scale: 70/19}
        }
    }, {
        onClose () {
            ui = null
            selection.length = 0
        }
    }, {
        closeOnBackPressed: true,
        blockingBackground: true,
        hideNavigation: true
    })
    let location = ui.ui.getLocation()
    let content = ui.content
    let height = 100
    let time = 0
    selection.forEach(function (obj, index) {
        if (!Utils.isObject(obj)) return
        content.elements[index + '_btn'] = {
            type: 'image', x: 0, y: height, z: 1, bitmap: 'cq_clear', width: 1000, height: 120,
            clicker: {
                onClick () {
                    if (Date.now() <= time + 500) return
                    time = Date.now()
                    if (!obj.onSelect()) ui.close()
                }
            }
        }
        content.elements[index + '_text'] = {
            type: 'text', x: 500, y: height + 20, z: 2, text: obj.text,
            font: obj.darken
                ? { color: $Color.GRAY, size: 40, align: 1, cursive: true }
                : { color: $Color.BLACK, size: 40, align: 1, bold: true }
        }
        content.drawing.push({
            type: 'line', x1: 20, y1: height, x2: 980, y2: height, width: 5, color: $Color.GRAY
        })
        height += 120
    })
    height += 10
    location.scrollY = height * 400 / 1000
    location.height = Math.min(location.scrollY, $ScreenHeight)
    location.y = ($ScreenHeight - location.height) / 2
    content.drawing[1].height = height
    content.drawing[2].text = title
    ui.open(true)
}

})()




// file: ui/AchievementUi.js

/// <reference path='../QuestUi.js'/>

; (function () {

const $ScreenHeight = UI.getScreenHeight()
const $Color = android.graphics.Color
const displayLength = Math.max(Math.floor($ScreenHeight * 2/3 / 50), 1)

const $AchievementUi = {
    /** @type { Array<{exist: boolean, bg: UI.UIImageElement, slot: UI.UISlotElement, title: UI.UITextElement, name: UI.UITextElement}> } */
    display: [],
    /** @type { Array<{icon: CQTypes.IconJson, name: string, time: number}> } */
    waiting: [],
    achievementUi: QuestUiTools.createUi({
        location: {x: 750, y: 0, width: 250, height: displayLength * 50},
        drawing: [{type: 'background', color: $Color.TRANSPARENT}],
        elements: {}
    }, null, {
        asGameOverlay: true,
        notTouchable: true
    }),
    /** @type { (obj: {icon: CQTypes.IconJson, name: string}) => void } */
    addWaiting (obj) {
        if (!Utils.isObject(obj)) return
        this.waiting.push({
            icon: obj.icon,
            name: obj.name,
            time: Date.now()
        })
        this.update()
    },
    /** @type { () => Nullable<{icon: CQTypes.IconJson, name: string}> } */
    popWaiting () {
        let now = Date.now()
        let ret = this.waiting.shift()
        while (ret && ret.time < now - 20*1000 /* 20s */) ret = this.waiting.shift()
        if (!ret) return null
        return {
            icon: ret.icon,
            name: ret.name
        }
    },
    /** @type { () => number } */
    getEmptyDisplayIndex () {
        for (let index = 0; index < this.display.length; index++) {
            if (!this.display[index].exist) {
                return index
            }
        }
        return -1
    },
    /** @type { (index: number, obj: {icon: CQTypes.IconJson, name: string}) => void } */
    addDisplay (index, obj) {
        if (index < 0 || index >= this.display.length) return
        if (this.display[index].exist) return
        if (!Utils.isObject(obj)) return
        let ui = this.achievementUi
        let display = this.display[index]
        display.exist = true
        display.slot.bitmap = obj.icon.bitmap || 'cq_clear'
        display.slot.source = Utils.transferItemFromJson(obj.icon)
        display.name.text = obj.name
        let that = this
        QuestUiTools.createAnimator(1000 /* 1s */, function (animator) {
            let posX = 1000 - animator.getAnimatedValue() * 1000
            let deltaX = posX - display.bg.x
            display.bg.x += deltaX
            display.slot.x += deltaX
            display.title.x += deltaX
            display.name.x += deltaX
            ui.ui.forceRefresh()
        }).addListener({
            onAnimationEnd () {
                let time = 0
                Updatable.addLocalUpdatable({
                    update () {
                        if (++time < 60 /* 3s */) return
                        QuestUiTools.createAnimator(1000 /* 1s */, function (animator) {
                            let posX = animator.getAnimatedValue() * 1000
                            let deltaX = posX - display.bg.x
                            display.bg.x += deltaX
                            display.slot.x += deltaX
                            display.title.x += deltaX
                            display.name.x += deltaX
                            ui.ui.forceRefresh()
                        }).addListener({
                            onAnimationEnd () {
                                let deltaX = 2000 - display.bg.x
                                display.bg.x += deltaX
                                display.slot.x += deltaX
                                display.title.x += deltaX
                                display.name.x += deltaX
                                display.exist = false
                                that.update()
                            }
                        })
                        this.remove = true
                    }
                })
            }
        })
    },
    update () {
        while (true) {
            let index = this.getEmptyDisplayIndex()
            if (index < 0) return
            let obj = this.popWaiting()
            if (!obj) return
            this.addDisplay(index, obj)
        }
    }
}

let bit = 200 / 64
$AchievementUi.display.length = displayLength
for (let index = 0; index < displayLength; index++) {
    $AchievementUi.display[index] = {
        exist: false,
        bg: {
            type: 'image', x: 0 + 2000, y: index * 200, z: 1,
            bitmap: 'cq_achievement_bg', width: 1000, height: 64 * bit
        },
        slot: {
            type: 'slot', x: 8 * bit + 2000, y: index * 200 + 8 * bit, z: 2,
            size: 48 * bit, visual: true, bitmap: 'cq_clear', source: {}
        },
        title: {
            type: 'text', x: 59 * bit + 2000, y: index * 200 + 12 * bit, z: 2,
            text: TranAPI.translate('gui.questFinished'),
            font: { color: $Color.YELLOW, size: 16 * bit }
        },
        name: {
            type: 'text', x: 59 * bit + 2000, y: index * 200 + 36 * bit, z: 2,
            text: '', font: { color: $Color.WHITE, size: 16 * bit }
        }
    }
    $AchievementUi.achievementUi.addElements([
        [index + '_bg', $AchievementUi.display[index].bg],
        [index + '_slot', $AchievementUi.display[index].slot],
        [index + '_title', $AchievementUi.display[index].title],
        [index + '_name', $AchievementUi.display[index].name]
    ])
}

Callback.addCallback('NativeGuiChanged', function (screenName) {
    let inGame = screenName === 'in_game_play_screen' || screenName === 'hud_screen'
    let isOpened = $AchievementUi.achievementUi.isOpened()
    if (inGame && !isOpened) $AchievementUi.achievementUi.open(true)
    else if (!inGame && isOpened) $AchievementUi.achievementUi.close()
})

Callback.addCallback('LevelLeft', function () {
    $AchievementUi.waiting.length = 0
})

Callback.addCallback('CustomQuests.onLocalQuestInputStateChanged', function (path, newState, oldState) {
    if (newState === oldState) return
    if (newState === EnumObject.questInputState.finished) {
        let config = Store.localCache.jsonConfig[path[0]]
        if (!config || !config.guiMessage) return
        let questJson = System.getQuestJson(Store.localCache.resolvedJson, path[0], path[1], path[2])
        if (!questJson || questJson.type !== 'quest') return
        $AchievementUi.addWaiting({
            icon: questJson.icon[2],
            name: TranAPI.translate(questJson.inner.name)
        })
    }
})

})()




// file: instance.js

/// <reference path='./Integration.js'/>

IDRegistry.genItemID('quest_book')
Item.createItem('quest_book', 'Quests Book', { name: 'cq_quest_book' }, { stack: 1 })
Recipes.addShapeless({ id: ItemID.quest_book, count: 1, data: 0 }, [
    { id: VanillaItemID.book, data: 0 },
    { id: VanillaItemID.string, data: 0 }
])
IDRegistry.genItemID('missing_item')
Item.createItem('missing_item', 'Missing Item', { name: 'missing_texture' }, { stack: 64, isTech: true })

ServerSystem.addContents('Default', Utils.readContents(__dir__ + Setting.path))
Item.registerUseFunction(ItemID.quest_book, function (coords, item, block, player) {
    QuestUi.openForPlayer('Default', player)
})
Item.registerNoTargetUseFunction(ItemID.quest_book, function (item, player) {
    QuestUi.openForPlayer('Default', player)
})




// file: share.js

/// <reference path='./instance.js'/>

ModAPI.registerAPI('CustomQuestsAPI', {
    version: __mod__.getVersion(),
    invalidId: InvalidId,
    EnumObject: Utils.deepCopy(EnumObject),
    Store: Store,
    TranAPI: TranAPI,
    Utils: Utils,
    IOTypeTools: IOTypeTools,
    System: System,
    ServerSystem: ServerSystem,
    ClientSystem: ClientSystem,
    QuestUi: QuestUi,
    QuestUiTools: QuestUiTools,
    requireGlobal: function (cmd) { return eval(cmd) }
})
Logger.Log('The API of Custom Quests is named CustomQuestsAPI.', 'API')




