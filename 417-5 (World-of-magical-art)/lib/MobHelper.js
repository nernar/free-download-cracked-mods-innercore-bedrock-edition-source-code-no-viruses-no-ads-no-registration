LIBRARY({
    name: "MobHelper",
    version: 1.3,
    shared: false,
    api: "CoreEngine"
});
//Created by Ighor Melihov 
var ArmorSet = function () {
    this.slots = [];
    this.setSlot = function (slot, items) {
        this.slots[slot] = items;
    }
    this.equip = function (entity, chance) {
        for (var slot in this.slots) {
            if (Math.random() < chance) {
                var id = this.slots[slot];
                Entity.setArmorSlot(entity, slot, id, 1, 0);
            }
        }
    }
}

//Created by DansTS but, armor stuf isn't my 
var Creatures = 0; //counter(in earlyer versions was object) 
var NENTITIES = {};

var MobHelper = {
    //MAIN 
    Creature: function (IDC, params) {
        //PARAMSOFENTITY 
        if (!params.IDm) {
            params.IDm = "Creature_" + Creatures;
        }
        if (!params.Name) {
            params.Name = "Name_" + Creatures;
        }
        if (!params.Tag) {
            params.Tag = ""; //Tag of creature 
        }
        if (!params.Renderr) {
            params.Renderr = new Render(2); //cubical native render 
        }
        if (!params.Skin) {
            params.Skin = "mob/standart.png"; //standart texture(dirt) 
        }
        if (!params.Armorr) {
            params.Armorr = new ArmorSet(); //Armor set for humanoids 
        }
        if (!params.EquipChance) {
            params.EquipChance = 0; //Chance of armor equipment 
        }
        if (!params.SpawnChance) {
            params.SpawnChance = 0; //Chance of armor equipment 
        }
        if (!params.Hitbox) {
            params.Hitbox = {
                w: 1,
                h: 1
            }; //Cubical hitbox 
        }
        if (!params.AITypes) {
            params.AITypes = {}; //AI object 
        }
        if (!params.Loot) {
            params.Loot = []; //Loot 
        }


        //ENDOFREG 
        this.entity = MobRegistry.registerEntity(params.IDm);
        if (IDC != 0) {
            this.entity.setBaseType(IDC);
        }

        this.id = params.IDm;

        //VISUAL 
        var CRmodel = new EntityModel();
        CRmodel.setRender(params.Renderr);

        var CRtexture = new Texture(params.Skin);
        CRmodel.setTexture(CRtexture);

        this.entity.customizeVisual({
            getModels: function () {
                return {
                    "main": CRmodel
                };
            }
        });

        this.entity.customizeDescription({
            getHitbox: function () {
                return params.Hitbox
            },
            getDrop: function () {
                return params.Loot;
            },
            getNameTag: function () {
                // возвращает имя моба, если не задана, имени не будет
                return params.Tag;
            },
        });

        //AI 
        this.entity.customizeAI({
            getAITypes: function () {
                return params.AITypes;
            }
        });

        //SPAWNPARAMS 
        this.spawn = function (x, y, z) {
            let creature = Entity.spawnCustom(this.id, x, y, z);
            params.Armorr.equip(creature.entity, params.equipChance);
        }

        this.registerEgg = function (EggID, EggName, EggTexture, EggTxtMeta) {
            IDRegistry.genItemID(EggID);
            Item.createItem(EggID, EggName, {
                name: EggTexture,
                meta: EggTxtMeta
            });
            this.createEgg(ItemID[EggID]);
        }

        this.createEgg = function (itemId) {
            var my_entity = this;
            Item.registerUseFunctionForID(itemId, function (coords, item, block) {
                CRcoords = coords.relative;
                my_entity.spawn(CRcoords.x + .5, CRcoords.y, CRcoords.z + .5);
            });
        }

        MobSpawnRegistry.registerSpawn(params.IDm, params.SpawnChance);

        Creatures++;
        //NENTITIES.push(params.IDm);
    }
}
registerAPIUnit("MobHelper", MobHelper);
registerAPIUnit("ArmorSet", ArmorSet);