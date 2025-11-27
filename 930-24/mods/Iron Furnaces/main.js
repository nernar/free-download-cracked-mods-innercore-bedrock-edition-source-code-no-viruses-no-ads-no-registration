/*
BUILD INFO:
  dir: assets/dev
  target: main.js
  files: 13
*/



// file: header.js

/// <reference path='../declarations/core-engine.d.ts'/>
/// <reference path='../declarations/CustomFurnaces.d.ts'/>
/// <reference path='../declarations/VanillaSlots.d.ts'/>
/// <reference path='../declarations/TileRender.d.ts'/>
/// <reference path='./share.js'/>

IMPORT('CustomFurnaces')
IMPORT('StorageInterface')
IMPORT('VanillaSlots')
IMPORT('TileRender')

/**
 * @typedef { {\
 *   input: number, output: number, fuel: number,\
 *   succeed: number, fail: number, burn: number\
 * } } furnaceDescription
 * @param { string } prefix 
 * @returns { furnaceDescription }
 */
function getFurnaceDesc(prefix) {
    /** @type { furnaceDescription } */
    let ret =  {
        input: Number(__config__.getInteger(prefix + '.input')),
        output: Number(__config__.getInteger(prefix + '.output')),
        fuel: Number(__config__.getInteger(prefix + '.fuel')),
        succeed: Number(__config__.getDouble(prefix + '.succeed')),
        fail: Number(__config__.getDouble(prefix + '.fail')),
        burn: Number(__config__.getDouble(prefix + '.burn'))
    }
    if (isNaN(ret.input) || ret.input < 1) ret.input = 1
    if (isNaN(ret.output) || ret.output < 1) ret.output = 1
    if (isNaN(ret.fuel) || ret.fuel < 1) ret.fuel = 1
    if (isNaN(ret.succeed)) ret.succeed = 0
    if (isNaN(ret.fail)) ret.fail = 0
    if (isNaN(ret.burn)) ret.burn = 0
    return ret
}

const FurnaceDesc = {
    copper: getFurnaceDesc('copper'),
    crystal: getFurnaceDesc('crystal'),
    diamond: getFurnaceDesc('diamond'),
    gold: getFurnaceDesc('gold'),
    iron: getFurnaceDesc('iron'),
    obsidian: getFurnaceDesc('obsidian'),
    silver: getFurnaceDesc('silver')
}

/**
 * @param { string } title 
 * @param { Array<[x: number, y: number]> | number } input X(-) Y(-)
 * @param { Array<[x: number, y: number]> | number } output X(+) Y(+)
 * @param { Array<[x: number, y: number]> | number } fuel X(-) Y(+)
 * @param { number = } slotSize 
 * @param { [absoluteX: number, absoluteY: number] = } burn 
 * @returns { {gui: UI.StandardWindow, descriptor: FurnaceDescriptor} }
 */
function createFurnaceWindow(title, input, output, fuel, slotSize, burn) {
    if (!slotSize) slotSize = 70
    if (!burn) burn = [500, 250]
    let slotSizePer60 = slotSize / 60
    let basePos = [burn[0], burn[1]]
    basePos = [
        burn[0] - 80 * slotSizePer60,
        burn[1] - 70 * slotSizePer60
    ]
    if (typeof input === 'number') {
        let size = input
        input = []
        let pos = [basePos[0], basePos[1]]
        for (let index = 0; index < size; index++) {
            input.push([pos[0], pos[1]])
            if ((pos[0] -= slotSize) < 0) {
                pos[0] = basePos[0]
                pos[1] -= slotSize
            }
        }
    } else input.forEach(function (pos) {
        pos[0] = pos[0] * slotSize + basePos[0]
        pos[1] = pos[1] * slotSize + basePos[1]
    })
    basePos = [
        burn[0] + 80 * slotSizePer60,
        burn[1] + slotSize / 2
    ]
    if (typeof output === 'number') {
        let size = output
        output = []
        let pos = [basePos[0], basePos[1]]
        for (let index = 0; index < size; index++) {
            output.push([pos[0], pos[1]])
            if ((pos[0] += slotSize) + slotSize > 1000) {
                pos[0] = basePos[0]
                pos[1] += slotSize
            }
        }
        let deltaY = -(output[size - 1][1] + slotSize - basePos[1]) / 2
        for (let index = 0; index < size; index++) {
            output[index][1] += deltaY
        }
    } else output.forEach(function (pos) {
        pos[0] = pos[0] * slotSize + basePos[0]
        pos[1] = pos[1] * slotSize + basePos[1]
    })
    basePos = [
        burn[0] - 80 * slotSizePer60,
        burn[1] + 70 * slotSizePer60
    ]
    if (typeof fuel === 'number') {
        let size = fuel
        fuel = []
        let pos = [basePos[0], basePos[1]]
        for (let index = 0; index < size; index++) {
            fuel.push([pos[0], pos[1]])
            if ((pos[0] -= slotSize) < 0) {
                pos[0] = basePos[0]
                pos[1] += slotSize
            }
        }
    } else fuel.forEach(function (pos) {
        pos[0] = pos[0] * slotSize + basePos[0]
        pos[1] = pos[1] * slotSize + basePos[1]
    })
    /** @type { UI.DrawingSet } */
    let drawing = [
        {
            type: 'bitmap',
            x: Math.round(burn[0] - 78 * slotSizePer60),
            y: Math.round(burn[1] + 2 * slotSizePer60),
            bitmap: 'if_furnace_fire_0',
            width: Math.round(56 * slotSizePer60),
            height: Math.round(56 * slotSizePer60)
        },
        {
            type: 'bitmap',
            x: Math.round(burn[0] - 3 * slotSizePer60),
            y: Math.round(burn[1] + 6 * slotSizePer60),
            bitmap: 'if_furnace_arrow_0',
            width: Math.round(66 * slotSizePer60),
            height: Math.round(48 * slotSizePer60)
        }
    ]
    /** @type { UI.ElementSet } */
    let elements = {
        'fireScale': {
            type: 'scale',
            x: drawing[0].x,
            y: drawing[0].y,
            bitmap: 'if_furnace_fire_1',
            width: drawing[0].width,
            height: drawing[0].height,
            direction: 1,
            value: 0.5
        },
        'arrowScale': {
            type: 'scale',
            x: drawing[1].x,
            y: drawing[1].y,
            bitmap: 'if_furnace_arrow_1',
            width: drawing[1].width,
            height: drawing[1].height,
            direction: 0,
            value: 0.5
        }
    }
    let minY = 0
    let maxY = burn[1] + slotSize
    input.forEach(function (pos, index) {
        elements['input' + index] = { type: 'slot', x: pos[0], y: pos[1], size: slotSize }
        if (pos[1] < minY) minY = pos[1]
        if (pos[1] + slotSize > maxY) maxY = pos[1] + slotSize
    })
    output.forEach(function (pos, index) {
        elements['output' + index] = { type: 'slot', x: pos[0], y: pos[1], size: slotSize }
        if (pos[1] < minY) minY = pos[1]
        if (pos[1] + slotSize > maxY) maxY = pos[1] + slotSize
    })
    fuel.forEach(function (pos, index) {
        elements['fuel' + index] = { type: 'slot', x: pos[0], y: pos[1], size: slotSize }
        if (pos[1] < minY) minY = pos[1]
        if (pos[1] + slotSize > maxY) maxY = pos[1] + slotSize
    })
    if (minY < 0) {
        for (let i = 0; i < drawing.length; i++) drawing[i].y -= minY
        for (let key in elements) elements[key].y -= minY
        maxY -= minY
    }
    return {
        gui: new UI.StandardWindow({
            standard: {
                header: { text: { text: title } },
                inventory: { standard: true },
                background: { standard: true },
                minHeight: maxY
            },
            drawing: drawing,
            elements: elements
        }),
        descriptor: {
            inputSlot: ['input^0-' + String(input.length - 1)],
            outputSlot: ['output^0-' + String(output.length - 1)],
            fuelSlot: ['fuel^0-' + String(fuel.length - 1)],
            burn: 'fireScale',
            progress: 'arrowScale'
        }
    }
}

/**
 * @param { Object } param 
 * @param { string } param.nameId 
 * @param { string } param.name 
 * @param { {top: [string, number], bottom: [string, number], side: [string, number], frontOff: [string, number], frontOn: [string, number]} } param.texture 
 * @param { string | Block.SpecialType } param.blockType 
 * @param { UI.StandardWindow } param.gui 
 * @param { FurnaceDescriptor } param.descriptor 
 * @param { TileEntity.TileEntityPrototype } param.customPrototype 
 */
function createFurnace(param) {
    IDRegistry.genBlockID(param.nameId)
    Block.createBlockWithRotation(param.nameId, [{
        name: param.name,
        texture: [
            param.texture.top,
            param.texture.bottom,
            param.texture.side,
            param.texture.frontOff,
            param.texture.side,
            param.texture.side
        ],
        inCreative: true
    }], param.blockType)

    let id = BlockID[param.nameId]
    ToolAPI.registerBlockMaterial(id, 'stone', 1, true)
    Block.setDestroyLevel(id, 1, true)

    TileRenderer.setStandardModelWithRotation(id, 2, [
        param.texture.top,
        param.texture.bottom,
        param.texture.side,
        param.texture.frontOff,
        param.texture.side,
        param.texture.side
    ])
    TileRenderer.registerModelWithRotation(id, 2, [
        param.texture.top,
        param.texture.bottom,
        param.texture.side,
        param.texture.frontOn,
        param.texture.side,
        param.texture.side
    ])
    TileRenderer.setRotationFunction(id)

    CustomFurnaces.unionObject(param.customPrototype, {
        useNetworkItemContainer: true,
        init() {
            let block = this.blockSource.getBlock(this.x, this.y, this.z)
            this.networkData.putInt('blockId', block.id)
            this.networkData.putInt('blockData', block.data)
            this.networkData.sendChanges()
        },
        getScreenName(player, coords) {
            return 'main'
        },
        getScreenByName(screenName) {
            return param.gui
        },
        client: {
            renderModel(isActive) {
                if (isActive) {
                    let blockId = Network.serverToLocalId(this.networkData.getInt('blockId'))
                    let blockData = this.networkData.getInt('blockData')
                    TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, blockData)
                } else {
                    BlockRenderer.unmapAtCoords(this.x, this.y, this.z)
                }
            }
        }
    })
    CustomFurnaces.registerTileEntity(id, param.customPrototype)
    let storageDescriptor = CustomFurnaces.createFurnaceInterface(id, param.descriptor)
    StorageInterface.createInterface(id, storageDescriptor)
    // VanillaSlots.registerForTile(id, param.gui)
}




// file: translation.js

/// <reference path='./header.js'/>

Translation.addTranslation('Furnace Upgrades', { zh_CN: '熔炉升级' })
Translation.addTranslation('Stone to Copper Furnace Upgrade', { zh_CN: '熔炉升级：石>铜' })
Translation.addTranslation('Stone to Iron Furnace Upgrade', { zh_CN: '熔炉升级：石>铁' })
Translation.addTranslation('Copper to Iron Furnace Upgrade', { zh_CN: '熔炉升级：铜>铁' })
Translation.addTranslation('Copper to Silver Furnace Upgrade', { zh_CN: '熔炉升级：铜>银' })
Translation.addTranslation('Iron to Gold Furnace Upgrade', { zh_CN: '熔炉升级：铁>金' })
Translation.addTranslation('Silver to Gold Furnace Upgrade', { zh_CN: '熔炉升级：银>金' })
Translation.addTranslation('Gold to Diamond Furnace Upgrade', { zh_CN: '熔炉升级：金>钻石' })
Translation.addTranslation('Diamond to Crystal Furnace Upgrade', { zh_CN: '熔炉升级：钻石>水晶' })
Translation.addTranslation('Diamond to Obsidian Furnace Upgrade', { zh_CN: '熔炉升级：钻石>黑曜石' })
Translation.addTranslation('Furnaces', { zh_CN: '熔炉' })
Translation.addTranslation('Copper Furnace', { zh_CN: '铜熔炉' })
Translation.addTranslation('Iron Furnace', { zh_CN: '铁熔炉' })
Translation.addTranslation('Silver Furnace', { zh_CN: '银熔炉' })
Translation.addTranslation('Gold Furnace', { zh_CN: '金熔炉' })
Translation.addTranslation('Diamond Furnace', { zh_CN: '钻石熔炉' })
Translation.addTranslation('Crystal Furnace', { zh_CN: '水晶熔炉' })
Translation.addTranslation('Obsidian Furnace', { zh_CN: '黑曜石熔炉' })




// file: upgrades.js

/// <reference path='./translation.js'/>

IDRegistry.genItemID('ifStoneCopperUpgrade')
IDRegistry.genItemID('ifStoneIronUpgrade')
IDRegistry.genItemID('ifCopperIronUpgrade')
IDRegistry.genItemID('ifCopperSilverUpgrade')
IDRegistry.genItemID('ifIronGoldUpgrade')
IDRegistry.genItemID('ifSilverGoldUpgrade')
IDRegistry.genItemID('ifGoldDiamondUpgrade')
IDRegistry.genItemID('ifDiamondCrystalUpgrade')
IDRegistry.genItemID('ifDiamondObsidianUpgrade')

Item.createItem('ifStoneCopperUpgrade', 'Stone to Copper Furnace Upgrade', { name: 'if_stone_copper_upgrade' }, { stack: 16 })
Item.createItem('ifStoneIronUpgrade', 'Stone to Iron Furnace Upgrade', { name: 'if_stone_iron_upgrade' }, { stack: 16 })
Item.createItem('ifCopperIronUpgrade', 'Copper to Iron Furnace Upgrade', { name: 'if_copper_iron_upgrade' }, { stack: 16 })
Item.createItem('ifCopperSilverUpgrade', 'Copper to Silver Furnace Upgrade', { name: 'if_copper_silver_upgrade' }, { stack: 16 })
Item.createItem('ifIronGoldUpgrade', 'Iron to Gold Furnace Upgrade', { name: 'if_iron_gold_upgrade' }, { stack: 16 })
Item.createItem('ifSilverGoldUpgrade', 'Silver to Gold Furnace Upgrade', { name: 'if_silver_gold_upgrade' }, { stack: 16 })
Item.createItem('ifGoldDiamondUpgrade', 'Gold to Diamond Furnace Upgrade', { name: 'if_gold_diamond_upgrade' }, { stack: 16 })
Item.createItem('ifDiamondCrystalUpgrade', 'Diamond to Crystal Furnace Upgrade', { name: 'if_diamond_crystal_upgrade' }, { stack: 16 })
Item.createItem('ifDiamondObsidianUpgrade', 'Diamond to Obsidian Furnace Upgrade', { name: 'if_diamond_obsidian_upgrade' }, { stack: 16 })


/**
 * @param { TileEntity } tileEntity 
 * @param { number } furnaceId 
 * @param { number } player 
 */
 function upgradeFurnace (tileEntity, furnaceId, player) {
    let blockData = tileEntity.blockSource.getBlockData(tileEntity.x, tileEntity.y, tileEntity.z)
    tileEntity.blockSource.setBlock(tileEntity.x, tileEntity.y, tileEntity.z, furnaceId, blockData)
    let container = new ItemContainer(tileEntity.container.asLegacyContainer())
    let tileData = CustomFurnaces.getTileEntityData(tileEntity)
    CustomFurnaces.setTileEntityData(tileEntity, { storedXP: 0 }, true)
    for (let name in tileEntity.container.slots) tileEntity.container.clearSlot(name)
    tileEntity.selfDestroy()
    let newTileEntity = TileEntity.addTileEntity(tileEntity.x, tileEntity.y, tileEntity.z, tileEntity.blockSource)
    newTileEntity.container = container
    CustomFurnaces.setTileEntityData(newTileEntity, tileData)
    let item = Entity.getCarriedItem(player)
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra)
}

/**
 * @param { Vector } coords 
 * @param { number } furnaceId 
 * @param { number } player 
 */
function upgradeVanillaFurnace (coords, furnaceId, player) {
    let region = BlockSource.getDefaultForActor(player)
    if (!region) return
    let blockId = region.getBlockId(coords.x, coords.y, coords.z)
    if (blockId !== VanillaTileID.furnace && blockId !== VanillaTileID.lit_furnace) return
    let container = new ItemContainer()
    let furnace = region.getBlockEntity(coords.x, coords.y, coords.z)
    if (!furnace) return
    // NBT
    let NBT = furnace.getCompoundTag()
    let tileData = {
        isActive: blockId === VanillaTileID.lit_furnace,
        burning: NBT.getShort('BurnTime'),
        burningMax: NBT.getShort('CookTime'),
        progress: NBT.getShort('BurnDuration'),
        storedXP: NBT.getInt('StoredXPInt')
    }
    // slot
    let slot = {
        input: furnace.getSlot(0),
        fuel: furnace.getSlot(1),
        output: furnace.getSlot(2)
    }
    container.setSlot('input0', slot.input.id, slot.input.count, slot.input.data, slot.input.extra)
    container.setSlot('fuel0', slot.fuel.id, slot.fuel.count, slot.fuel.data, slot.fuel.extra)
    container.setSlot('output0', slot.output.id, slot.output.count, slot.output.data, slot.output.extra)
    for (let i = 0; i < 3; i++) furnace.setSlot(i, 0, 0, 0)
    // replace
    let rotation = region.getBlockData(coords.x, coords.y, coords.z)
    region.setBlock(coords.x, coords.y, coords.z, furnaceId, rotation)
    let tileEntity = TileEntity.addTileEntity(coords.x, coords.y, coords.z, region)
    tileEntity.container = container
    CustomFurnaces.setTileEntityData(tileEntity, tileData)
    let item = Entity.getCarriedItem(player)
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra)
}

Callback.addCallback('ItemUse', function (coords, item, block, isExternal, player) {
    if (block.id !== VanillaTileID.furnace && block.id !== VanillaTileID.lit_furnace) return
    switch (item.id) {
        case ItemID.ifStoneCopperUpgrade: {
            upgradeVanillaFurnace(coords, BlockID.ifCopperFurnace, player)
            break
        }
        case ItemID.ifStoneIronUpgrade: {
            upgradeVanillaFurnace(coords, BlockID.ifIronFurnace, player)
            break
        }
    }
})




// file: furnaces/CopperFurnace.js

/// <reference path='../upgrades.js'/>

let copperFurnaceWindow = createFurnaceWindow(
    Translation.translate('Copper Furnace'),
    FurnaceDesc.copper.input,
    FurnaceDesc.copper.output,
    FurnaceDesc.copper.fuel
)

createFurnace({
    nameId: 'ifCopperFurnace',
    name: 'Copper Furnace',
    texture: {
        top: ['if_copper_furnace_side', 0],
        bottom: ['if_copper_furnace_side', 0],
        side: ['if_copper_furnace_side', 0],
        frontOff: ['if_copper_furnace_front_off', 0],
        frontOn: ['if_copper_furnace_front_on', 0]
    },
    blockType: {
        sound: 'stone',
        solid: true,
        lightopacity: 15
    },
    gui: copperFurnaceWindow.gui,
    descriptor: copperFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.copper.succeed,
                fail: FurnaceDesc.copper.fail
            }, FurnaceDesc.copper.burn)
        },
        click(id, count, data, coords, player, extra) {
            switch (id) {
                case ItemID.ifCopperIronUpgrade: {
                    upgradeFurnace(this, BlockID.ifIronFurnace, player)
                    return true
                }
                case ItemID.ifCopperSilverUpgrade: {
                    upgradeFurnace(this, BlockID.ifSilverFurnace, player)
                    return true
                }
            }
        }
    }
})




// file: furnaces/IronFurnace.js

/// <reference path='../upgrades.js'/>

let ironFurnaceWindow = createFurnaceWindow(
    Translation.translate('Iron Furnace'),
    FurnaceDesc.iron.input,
    FurnaceDesc.iron.output,
    FurnaceDesc.iron.fuel
)

createFurnace({
    nameId: 'ifIronFurnace',
    name: 'Iron Furnace',
    texture: {
        top: ['if_iron_furnace_side', 0],
        bottom: ['if_iron_furnace_side', 0],
        side: ['if_iron_furnace_side', 0],
        frontOff: ['if_iron_furnace_front_off', 0],
        frontOn: ['if_iron_furnace_front_on', 0]
    },
    blockType: {
        sound: 'stone',
        solid: true,
        lightopacity: 15
    },
    gui: ironFurnaceWindow.gui,
    descriptor: ironFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.iron.succeed,
                fail: FurnaceDesc.iron.fail
            }, FurnaceDesc.iron.burn)
        },
        click(id, count, data, coords, player, extra) {
            switch (id) {
                case ItemID.ifIronGoldUpgrade: {
                    upgradeFurnace(this, BlockID.ifGoldFurnace, player)
                    return true
                }
            }
        }
    }
})




// file: furnaces/SilverFurnace.js

/// <reference path='../upgrades.js'/>

let silverFurnaceWindow = createFurnaceWindow(
    Translation.translate('Silver Furnace'),
    FurnaceDesc.silver.input,
    FurnaceDesc.silver.output,
    FurnaceDesc.silver.fuel
)

createFurnace({
    nameId: 'ifSilverFurnace',
    name: 'Silver Furnace',
    texture: {
        top: ['if_silver_furnace_side', 0],
        bottom: ['if_silver_furnace_side', 0],
        side: ['if_silver_furnace_side', 0],
        frontOff: ['if_silver_furnace_front_off', 0],
        frontOn: ['if_silver_furnace_front_on', 0]
    },
    blockType: {
        sound: 'stone',
        solid: true,
        lightopacity: 15
    },
    gui: silverFurnaceWindow.gui,
    descriptor: silverFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.silver.succeed,
                fail: FurnaceDesc.silver.fail
            }, FurnaceDesc.silver.burn)
        },
        click(id, count, data, coords, player, extra) {
            switch (id) {
                case ItemID.ifSilverGoldUpgrade: {
                    upgradeFurnace(this, BlockID.ifGoldFurnace, player)
                    return true
                }
            }
        }
    }
})




// file: furnaces/GoldFurnace.js

/// <reference path='../upgrades.js'/>

let goldFurnaceWindow = createFurnaceWindow(
    Translation.translate('Gold Furnace'),
    FurnaceDesc.gold.input,
    FurnaceDesc.gold.output,
    FurnaceDesc.gold.fuel
)

createFurnace({
    nameId: 'ifGoldFurnace',
    name: 'Gold Furnace',
    texture: {
        top: ['if_gold_furnace_side', 0],
        bottom: ['if_gold_furnace_side', 0],
        side: ['if_gold_furnace_side', 0],
        frontOff: ['if_gold_furnace_front_off', 0],
        frontOn: ['if_gold_furnace_front_on', 0]
    },
    blockType: {
        sound: 'stone',
        solid: true,
        lightopacity: 15
    },
    gui: goldFurnaceWindow.gui,
    descriptor: goldFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.gold.succeed,
                fail: FurnaceDesc.gold.fail
            }, FurnaceDesc.gold.burn)
        },
        click(id, count, data, coords, player, extra) {
            switch (id) {
                case ItemID.ifGoldDiamondUpgrade: {
                    upgradeFurnace(this, BlockID.ifDiamondFurnace, player)
                    return true
                }
            }
        }
    }
})




// file: furnaces/DiamondFurnace.js

/// <reference path='../upgrades.js'/>

let diamondFurnaceWindow = createFurnaceWindow(
    Translation.translate('Diamond Furnace'),
    FurnaceDesc.diamond.input,
    FurnaceDesc.diamond.output,
    FurnaceDesc.diamond.fuel
)

createFurnace({
    nameId: 'ifDiamondFurnace',
    name: 'Diamond Furnace',
    texture: {
        top: ['if_diamond_furnace_side', 0],
        bottom: ['if_diamond_furnace_side', 0],
        side: ['if_diamond_furnace_side', 0],
        frontOff: ['if_diamond_furnace_front_off', 0],
        frontOn: ['if_diamond_furnace_front_on', 0]
    },
    blockType: {
        sound: 'stone',
        solid: true,
        lightopacity: 15
    },
    gui: diamondFurnaceWindow.gui,
    descriptor: diamondFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.diamond.succeed,
                fail: FurnaceDesc.diamond.fail
            }, FurnaceDesc.diamond.burn)
        },
        click(id, count, data, coords, player, extra) {
            switch (id) {
                case ItemID.ifDiamondCrystalUpgrade: {
                    upgradeFurnace(this, BlockID.ifCrystalFurnace, player)
                    return true
                }
                case ItemID.ifDiamondObsidianUpgrade: {
                    upgradeFurnace(this, BlockID.ifObsidianFurnace, player)
                    return true
                }
            }
        }
    }
})




// file: furnaces/CrystalFurnace.js

/// <reference path='../upgrades.js'/>

let crystalFurnaceWindow = createFurnaceWindow(
    Translation.translate('Crystal Furnace'),
    FurnaceDesc.crystal.input,
    FurnaceDesc.crystal.output,
    FurnaceDesc.crystal.fuel
)

createFurnace({
    nameId: 'ifCrystalFurnace',
    name: 'Crystal Furnace',
    texture: {
        top: ['if_crystal_furnace_side', 0],
        bottom: ['if_crystal_furnace_side', 0],
        side: ['if_crystal_furnace_side', 0],
        frontOff: ['if_crystal_furnace_front_off', 0],
        frontOn: ['if_crystal_furnace_front_on', 0]
    },
    blockType: {
        base: VanillaBlockID.glass,
        sound: 'stone',
        renderallfaces: true
    },
    gui: crystalFurnaceWindow.gui,
    descriptor: crystalFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.crystal.succeed,
                fail: FurnaceDesc.crystal.fail
            }, FurnaceDesc.crystal.burn)
        }
    }
})




// file: furnaces/ObsidianFurnace.js

/// <reference path='../upgrades.js'/>

let obsidianFurnaceWindow = createFurnaceWindow(
    Translation.translate('Obsidian Furnace'),
    FurnaceDesc.obsidian.input,
    FurnaceDesc.obsidian.output,
    FurnaceDesc.obsidian.fuel
)

createFurnace({
    nameId: 'ifObsidianFurnace',
    name: 'Obsidian Furnace',
    texture: {
        top: ['if_obsidian_furnace_side', 0],
        bottom: ['if_obsidian_furnace_side', 0],
        side: ['if_obsidian_furnace_side', 0],
        frontOff: ['if_obsidian_furnace_front_off', 0],
        frontOn: ['if_obsidian_furnace_front_on', 0]
    },
    blockType: {
        base: VanillaBlockID.obsidian,
        destroytime: 3,
        explosionres: 1200,
        sound: 'stone',
        solid: true,
        lightopacity: 15
    },
    gui: obsidianFurnaceWindow.gui,
    descriptor: obsidianFurnaceWindow.descriptor,
    customPrototype: {
        tick() {
            StorageInterface.checkHoppers(this)
            CustomFurnaces.processHighSpeed(this, {
                succeed: FurnaceDesc.obsidian.succeed,
                fail: FurnaceDesc.obsidian.fail
            }, FurnaceDesc.obsidian.burn)
        }
    }
})




// file: recipes.js

/// <reference path='./upgrades.js'/>

Callback.addCallback('PreLoaded', function () {
    if (__config__.getBool('noRecipeOfUpgrades')) return;
    
    if (ItemID.ingotCopper) {
        Recipes.addShaped({id: ItemID.ifStoneCopperUpgrade, count: 1, data: 0}, [
            'xxx',
            'xax',
            'xxx'
        ], ['x', ItemID.ingotCopper, -1, 'a', VanillaBlockID.cobblestone, -1])
    }

    Recipes.addShaped({id: ItemID.ifStoneIronUpgrade, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaItemID.iron_ingot, -1, 'a', VanillaBlockID.cobblestone, -1])

    if (ItemID.ingotCopper) {
        Recipes.addShaped({id: ItemID.ifCopperIronUpgrade, count: 1, data: 0}, [
            'xgx',
            'gag',
            'xgx'
        ], ['x', VanillaItemID.iron_ingot, -1, 'a', ItemID.ingotCopper, -1, 'g', VanillaBlockID.glass, -1])
    }

    if (ItemID.ingotSilver && ItemID.ingotCopper) {
        Recipes.addShaped({id: ItemID.ifCopperSilverUpgrade, count: 1, data: 0}, [
            'xxx',
            'xax',
            'xxx'
        ], ['x', ItemID.ingotSilver, -1, 'a', ItemID.ingotCopper, -1])
    }

    Recipes.addShaped({id: ItemID.ifIronGoldUpgrade, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaItemID.gold_ingot, -1, 'a', VanillaItemID.iron_ingot, -1])

    if (ItemID.ingotSilver) {
        Recipes.addShaped({id: ItemID.ifSilverGoldUpgrade, count: 1, data: 0}, [
            'xgx',
            'gag',
            'xgx'
        ], ['x', VanillaItemID.gold_ingot, -1, 'a', ItemID.ingotSilver, -1, 'g', VanillaBlockID.glass, -1])
    }

    Recipes.addShaped({id: ItemID.ifGoldDiamondUpgrade, count: 1, data: 0}, [
        'ggg',
        'xax',
        'ggg'
    ], ['x', VanillaItemID.diamond, -1, 'a', VanillaItemID.gold_ingot, -1, 'g', VanillaBlockID.glass, -1])

    Recipes.addShaped({id: ItemID.ifDiamondCrystalUpgrade, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaBlockID.glass, -1, 'a', VanillaBlockID.obsidian, -1])

    Recipes.addShaped({id: ItemID.ifDiamondObsidianUpgrade, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaBlockID.obsidian, -1, 'a', VanillaBlockID.glass, -1])
})

Callback.addCallback('PreLoaded', function () {
    if (ItemID.ingotCopper) {
        Recipes.addShaped({id: BlockID.ifCopperFurnace, count: 1, data: 0}, [
            'xxx',
            'xax',
            'xxx'
        ], ['x', ItemID.ingotCopper, -1, 'a', VanillaBlockID.furnace, -1])
    }

    Recipes.addShaped({id: BlockID.ifIronFurnace, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaItemID.iron_ingot, -1, 'a', VanillaBlockID.furnace, -1])

    Recipes.addShaped({id: BlockID.ifIronFurnace, count: 1, data: 0}, [
        'xgx',
        'gag',
        'xgx'
    ], ['x', VanillaItemID.iron_ingot, -1, 'a', BlockID.ifCopperFurnace, -1, 'g', VanillaBlockID.glass, -1])

    if (ItemID.ingotSilver) {
        Recipes.addShaped({id: BlockID.ifSilverFurnace, count: 1, data: 0}, [
            'xxx',
            'xax',
            'xxx'
        ], ['x', ItemID.ingotSilver, -1, 'a', BlockID.ifCopperFurnace, -1])
    }

    if (ItemID.ingotSilver) {
        Recipes.addShaped({id: BlockID.ifSilverFurnace, count: 1, data: 0}, [
            'xgx',
            'gag',
            'xgx'
        ], ['x', ItemID.ingotSilver, -1, 'a', BlockID.ifIronFurnace, -1, 'g', VanillaBlockID.glass, -1])
    }

    Recipes.addShaped({id: BlockID.ifGoldFurnace, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaItemID.gold_ingot, -1, 'a', BlockID.ifIronFurnace, -1])

    Recipes.addShaped({id: BlockID.ifGoldFurnace, count: 1, data: 0}, [
        'xgx',
        'gag',
        'xgx'
    ], ['x', VanillaItemID.gold_ingot, -1, 'a', BlockID.ifSilverFurnace, -1, 'g', VanillaBlockID.glass, -1])

    Recipes.addShaped({id: BlockID.ifDiamondFurnace, count: 1, data: 0}, [
        'ggg',
        'xax',
        'ggg'
    ], ['x', VanillaItemID.diamond, -1, 'a', BlockID.ifGoldFurnace, -1, 'g', VanillaBlockID.glass, -1])

    Recipes.addShaped({id: BlockID.ifDiamondFurnace, count: 1, data: 0}, [
        'ggg',
        'gag',
        'xxx'
    ], ['x', VanillaItemID.diamond, -1, 'a', BlockID.ifSilverFurnace, -1, 'g', VanillaBlockID.glass, -1])

    Recipes.addShaped({id: BlockID.ifCrystalFurnace, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaBlockID.glass, -1, 'a', BlockID.ifDiamondFurnace, -1])

    Recipes.addShaped({id: BlockID.ifObsidianFurnace, count: 1, data: 0}, [
        'xxx',
        'xax',
        'xxx'
    ], ['x', VanillaBlockID.obsidian, -1, 'a', BlockID.ifDiamondFurnace, -1])
})




// file: other.js

/// <reference path='./recipes.js'/>

Item.addCreativeGroup('if_furnace_upgrades', Translation.translate('Furnace Upgrades'), [
    ItemID.ifStoneCopperUpgrade,
    ItemID.ifStoneIronUpgrade,
    ItemID.ifCopperIronUpgrade,
    ItemID.ifCopperSilverUpgrade,
    ItemID.ifIronGoldUpgrade,
    ItemID.ifSilverGoldUpgrade,
    ItemID.ifGoldDiamondUpgrade,
    ItemID.ifDiamondCrystalUpgrade,
    ItemID.ifDiamondObsidianUpgrade,
])

Item.addCreativeGroup('if_furnaces', Translation.translate('Furnaces'), [
    BlockID.ifCopperFurnace,
    BlockID.ifIronFurnace,
    BlockID.ifSilverFurnace,
    BlockID.ifGoldFurnace,
    BlockID.ifDiamondFurnace,
    BlockID.ifCrystalFurnace,
    BlockID.ifObsidianFurnace
])




// file: share.js

/// <reference path='./other.js'/>

ModAPI.registerAPI('IronFurnacesAPI', {
    version: __mod__.getVersion(),
    createFurnaceWindow: createFurnaceWindow,
    createFurnace: createFurnace,
    upgradeFurnace: upgradeFurnace,
    upgradeVanillaFurnace: upgradeVanillaFurnace,
    requireGlobal: function (cmd) { return eval(cmd) }
})
Logger.Log('The API of Iron Furnaces is named IronFurnacesAPI.', 'API')




