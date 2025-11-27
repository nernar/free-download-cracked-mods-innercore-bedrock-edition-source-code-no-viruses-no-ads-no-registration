//загрузка доп. материалов
Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field){
			   if(field[i].id==tool){
				    field[i].data++;
				    if(field[i].data>=Item.getMaxDamage(tool)){
					     field[i].id = field[i].count = field[i].data = 0;
				    }
			   }
			   else {
				    api.decreaseFieldSlot(i);
			   }
		  }
	 });
};
ModAPI.registerAPI("MTM_api",{
});
var MachineRegistry = {
    machines: {},

    register: function (id, prototype) {
        this.machines[id] = prototype;

        if (prototype.defaultValues) {
            prototype.defaultValues.energy = 0;
        } else {
            prototype.defaultValues = {
                energy: 0
            };
        }

        if (!prototype.getEnergyStorage) {
            prototype.getEnergyStorage = function () {
                return 0;
            }
        }

        if (!prototype.energyTick) {
            prototype.energyTick = function (type, src) {
                this.data.energy += src.get(Math.min(this.getEnergyStorage() - this.data.energy, this.getMaxEnergyReceive ? this.getMaxEnergyReceive() : 200));
            };
        }


        ICRender.getGroup("rf-wire").add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, prototype);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * (basePower * 1000) / 10;
        let energy = tile.data.energy;
        if(energy > maxPowerLevel){
            return basePower;
        }
        if(energy < maxPowerLevel / 10){
            return Math.min(basePower / 10, energy);
        }

        return energy / (maxPowerLevel / basePower);
    }

};
importLib("PlantModel", "*");
importLib("SoundAPI","*");
importLib("ToolType", "*");
importLib("Random", "*");
importLib("Multi_Core", "*");
importLib("energylib", "*");
const RF = EnergyTypeRegistry.assureEnergyType("RF", 1/4);
//предметы
IDRegistry.genItemID("otsilka");
Item.createItem("otsilka", "???100010111001111000101111???", {name: "вззыздыдыдчлщыщдылыл", meta: 0}, {isTech: true});
IDRegistry.genItemID("antratcit");
Item.createItem("antratcit", "Антрацитовый уголь", {name: "антрацит", meta: 0}, {});
IDRegistry.genItemID("antratcitch");
Item.createItem("antratcitch", "Антрацитовый уголь от Ныкыты Черненького", {name: "антрацит", meta: 0}, {isTech: true});
IDRegistry.genItemID("meteoritovii_slitok");
Item.createItem("meteoritovii_slitok", "Метеоритовый слиток", {name: "метеоритовый_слиток", meta: 0}, {});
IDRegistry.genItemID("adskii_slitok");
Item.createItem("adskii_slitok", "Адский слиток", {name: "адский_слиток", meta: 0}, {});
IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Стальной слиток", {name: "слиток_стали", meta: 0}, {});
IDRegistry.genItemID("obichnii_metallalom");
Item.createItem("obichnii_metallalom", "Металлалом", {name: "обычный_металлалом", meta: 0}, {});
IDRegistry.genItemID("stalnoi_metallalom");
Item.createItem("stalnoi_metallalom", "Стальной металлалом", {name: "стальной_металлалом", meta: 0}, {});
IDRegistry.genItemID("cvetnoi_metallalom");
Item.createItem("cvetnoi_metallalom", "Цветной металлалом", {name: "цветной_металлалом", meta: 0}, {});
IDRegistry.genItemID("adskii_metallalom");
Item.createItem("adskii_metallalom", "Адский металлалом", {name: "адский_металлалом", meta: 0}, {});
if(primal_core){
IDRegistry.genItemID("stalnaia_plastina");
Item.createItem("stalnaia_plastina", "Стальная пластина", {name: "стальная_пластина", meta: 0}, {isTech: true});
}
IDRegistry.genItemID("slomannaia_palka");
Item.createItem("slomannaia_palka", "Сломанная палка", {name: "сломанная_палка", meta: 0}, {});
IDRegistry.genItemID("slomannaia_strela");
Item.createItem("slomannaia_strela", "Сломанная стрела", {name: "сломанная_стрела", meta: 0}, {});
IDRegistry.genItemID("kyski_bymagi");
Item.createItem("kyski_bymagi", "Порванная бумага", {name: "порванная_бумага", meta: 0}, {});
IDRegistry.genItemID("nuggetIron");
Item.createItem("nuggetIron", "Железный самородок", {name: "железный_самородок", meta: 0}, {});
IDRegistry.genItemID("stalnoi_samorodok");
Item.createItem("stalnoi_samorodok", "Стальной самородок", {name: "стальной_самородок", meta: 0}, {});
IDRegistry.genItemID("izymrydnii_samorodok");
Item.createItem("izymrydnii_samorodok", "Изумрудный самородок", {name: "изумрудный_самородок", meta: 0}, {});
IDRegistry.genItemID("almaznii_samorodok");
Item.createItem("almaznii_samorodok", "Алмазный самородок", {name: "алмазный_самородок", meta: 0}, {});
IDRegistry.genItemID("meteoritovii_samorodok");
Item.createItem("meteoritovii_samorodok", "Метеоритовый самородок", {name: "метеоритовый_самородок", meta: 0}, {});
IDRegistry.genItemID("adskii_samorodok");
Item.createItem("adskii_samorodok", "Адский самородок", {name: "адский_самородок", meta: 0}, {});
IDRegistry.genItemID("chastitca_yglia");
Item.createItem("chastitca_yglia", "Частица угля", {name: "частица_угля", meta: 0}, {});
IDRegistry.genItemID("oscolok_cremnia");
Item.createItem("oscolok_cremnia", "Осколок кремния", {name: "осколок_кремния", meta: 0}, {});
IDRegistry.genItemID("oscolok_rybina");
Item.createItem("oscolok_rybina", "Осколок рубина", {name: "осколок_рубина", meta: 0}, {});
IDRegistry.genItemID("mezhgalakticheskaia_valuta");
Item.createItem("mezhgalakticheskaia_valuta", "Межгалактическая валюта", {name: "межгалактическая_валюта", meta: 0}, {});
IDRegistry.genItemID("ndsm");
Item.createItem("ndsm", "Набор для создания микрочипов", {name: "набор_для_создания_микрочипов", meta: 0}, {});
IDRegistry.genItemID("chip");
Item.createItem("chip", "Микрочип", {name: "микрочип", meta: 0}, {});
IDRegistry.genItemID("chip_ysk_1");
Item.createItem("chip_ysk_1", "Микрочип ускорения", {name: "микрочип_ускорения", meta: 0}, {});
IDRegistry.genItemID("chip_ysk_2");
Item.createItem("chip_ysk_2", "Продвинутый микрочип ускорения", {name: "микрочип_ускорения_2", meta: 0}, {isTech: true});
IDRegistry.genItemID("chip_ysk_3");
Item.createItem("chip_ysk_3", "Передовой микрочип ускорения", {name: "микрочип_ускорения_3", meta: 0}, {isTech: true});
IDRegistry.genItemID("rakyshkaa");
Item.createItem("rakyshkaa", "Ракушка", {name: "ракушка_0", meta: 0}, {});
IDRegistry.genItemID("rakyshkab");
Item.createItem("rakyshkab", "Ракушка", {name: "ракушка_1", meta: 0}, {});
IDRegistry.genItemID("rock_stone");
Item.createThrowableItem("rock_stone", "Камень", {name: "камень", meta: 0}, {});
IDRegistry.genItemID("kokos");
Item.createThrowableItem("kokos", "Кокос", {name: "кокос", meta: 0}, {});
IDRegistry.genItemID("serdce_drakona");
Item.createItem("serdce_drakona", "Сердце дракона края", {name: "сердце_дракона", meta: 0}, {isTech: true});
IDRegistry.genItemID("cheshyia_drakona_kraia");
Item.createItem("cheshyia_drakona_kraia", "Чешуя дракона края", {name: "чешуя_дракона_края", meta: 0}, {});
IDRegistry.genItemID("kolchyzhnoe_koltco");
Item.createItem("kolchyzhnoe_koltco", "Кольчужное кольцо", {name: "кольчужное_кольцо", meta: 0}, {});
IDRegistry.genItemID("zheleznaia_banka");
Item.createItem("zheleznaia_banka", "Железная банка", {name: "железная_банка", meta: 0}, {});
IDRegistry.genItemID("gorst_graviia");
Item.createItem("gorst_graviia", "Горсть гравия", {name: "горсть_гравия", meta: 0}, {});
IDRegistry.genItemID("gorst_zemli");
Item.createItem("gorst_zemli", "Горсть земли", {name: "горсть_земли", meta: 0}, {});
IDRegistry.genItemID("gorst_peska");
Item.createItem("gorst_peska", "Горсть песка", {name: "горсть_песка", meta: 0}, {});
IDRegistry.genItemID("gnilaia_kost");
Item.createItem("gnilaia_kost", "Гнилая кость", {name: "гнилая_кость", meta: 0}, {});
IDRegistry.genItemID("trava");
Item.createItem("trava", "Трава", {name: "трава", meta: 0}, {});
IDRegistry.genItemID("travianaia_nit");
Item.createItem("travianaia_nit", "Травяная нить", {name: "травяная_нить", meta: 0}, {});
IDRegistry.genItemID("gnilaia_nit");
Item.createItem("gnilaia_nit", "Гнилая нить", {name: "гнилая_нить", meta: 0}, {});
IDRegistry.genItemID("loza");
Item.createItem("loza", "Лоза", {name: "лоза", meta: 0}, {});
IDRegistry.genItemID("travianaia_verevka");
Item.createItem("travianaia_verevka", "Травяная веревка", {name: "травяная_верёвка", meta: 0}, {});
IDRegistry.genItemID("obichnaia_verevka");
Item.createItem("obichnaia_verevka", "Обыкновенная веревка", {name: "обычная_верёвка", meta: 0}, {});
IDRegistry.genItemID("katyshka_s_travianimi_nitkami");
Item.createItem("katyshka_s_travianimi_nitkami", "Катушка с травяными нитями", {name: "катушка_с_травяными_нитками", meta: 0}, {});
Item.setMaxDamage(ItemID.katyshka_s_travianimi_nitkami, 5);
IDRegistry.genItemID("katyshka_s_nitkami");
Item.createItem("katyshka_s_nitkami", "Катушка с нитями", {name: "катушка_с_нитками", meta: 0}, {});
Item.setMaxDamage(ItemID.katyshka_s_nitkami, 8);
IDRegistry.genItemID("igla");
Item.createItem("igla", "Игла", {name: "игла", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.igla, 10);
IDRegistry.genItemID("gnilaia_tkan");
Item.createItem("gnilaia_tkan", "Старая ткань", {name: "гнилая_ткань", meta: 0}, {});
IDRegistry.genItemID("prochnaia_tkan");
Item.createItem("prochnaia_tkan", "Прочная ткань", {name: "прочная_ткань", meta: 0}, {});
IDRegistry.genItemID("yglerodnoe_volokno");
Item.createItem("yglerodnoe_volokno", "Углеродное волокно", {name: "углеродное_волокно", meta: 0}, {});
IDRegistry.genItemID("medvezhia_shkyra");
Item.createItem("medvezhia_shkyra", "Медвежья шкура", {name: "медвежья_шкура", meta: 0}, {isTech: true});
IDRegistry.genItemID("shgt");
Item.createItem("shgt", "это бесполезная штука выкинь", {name: "ш_плюха", meta: 0}, {isTech: true});
IDRegistry.genItemID("shgtt");
Item.createItem("shgtt", "это бесполезная штука выкинь", {name: "ш_плюха_2", meta: 0}, {isTech: true});
IDRegistry.genItemID("spalnii_nabor");
Item.createItem("spalnii_nabor", "Спальный набор", {name: "спальный_набор", meta: 0}, {});
IDRegistry.genItemID("zyb_payka");
Item.createItem("zyb_payka", "Зуб паука", {name: "зуб_паука", meta: 0}, {});
IDRegistry.genItemID("otravlennii_zyb_payka");
Item.createItem("otravlennii_zyb_payka", "Ядовитый зуб паука", {name: "отравленный_зуб_паука", meta: 0}, {});
IDRegistry.genItemID("knopka_youtube");
IDRegistry.genItemID("ship_drevnego_strazha");
Item.createItem("ship_drevnego_strazha", "Шип древнего стража", {name: "шип_древнего_стража", meta: 0}, {});
IDRegistry.genItemID("ship_strazha");
Item.createItem("ship_strazha", "Шип стража", {name: "шип_стража", meta: 0}, {});
Item.createItem("knopka_youtube", "Кнопка ютуб", {name: "кнопка_ютуб", meta: 0}, {isTech: true});
IDRegistry.genItemID("vodianoi_filtr");
Item.createItem("vodianoi_filtr", "Водяной фильтр", {name: "водяной_фильтр", meta: 0}, {});
IDRegistry.genItemID("ballon_s_vozdyhom");
Item.createItem("ballon_s_vozdyhom", "Баллон с воздухом", {name: "баллон_с_воздухом", meta: 0}, {});
IDRegistry.genItemID("setka_dlia_sita");
Item.createItem("setka_dlia_sita", "Сетка от просеивателя", {name: "сетка_от_просеивателя", meta: 0}, {});
IDRegistry.genItemID("reshetka_dlia_pechki_visokoi_teroystoichivosti");
Item.createItem("reshetka_dlia_pechki_visokoi_teroystoichivosti", "Решётка для термоустойчивой печи", {name: "решётка_для_печки_высокой_термоустойчивости", meta: 0}, {isTech: true});
IDRegistry.genItemID("sozdat_ytky");
Item.createItem("sozdat_ytky", "Создать утку", {name: "создать_утку", meta: 0}, {isTech: true});
IDRegistry.genItemID("sozdka");
Item.createItem("sozdka", "Создать кабана", {name: "создать_кабана", meta: 0}, {});
IDRegistry.genItemID("sozdmz");
Item.createItem("sozdmz", "Создать зараженного монстра", {name: "создать_зараженного_монстра", meta: 0}, {});
IDRegistry.genItemID("sozdm");
Item.createItem("sozdm", "Создать мумию", {name: "создать_мумию", meta: 0}, {});
//еда
IDRegistry.genItemID("sir");
Item.createFoodItem("sir", "Сыр", {name: "сыр", meta: 0}, {food: 3, isTech: true});
IDRegistry.genItemID("semechki");
Item.createFoodItem("semechki", "Семечки", {name: "семечки", meta: 0}, {food: 4});
IDRegistry.genItemID("shocoladnaia_plitka");
Item.createFoodItem("shocoladnaia_plitka", "Шоколадная плитка", {name: "шоколадная_плитка", meta: 0}, {food: 7});
IDRegistry.genItemID("vishnia");
Item.createFoodItem("vishnia", "Вишенка", {name: "вишня", meta: 0}, {Food: 1});
IDRegistry.genItemID("ochishennii_kokos");
Item.createFoodItem("ochishennii_kokos", "Очищенный кокос", {name: "очищенный_кокос", meta: 0}, {Food: 1});
IDRegistry.genItemID("myka");
Item.createFoodItem("myka", "Мука", {name: "мука", meta: 0}, {food: 2});
IDRegistry.genItemID("testo");
Item.createFoodItem("testo", "Тесто", {name: "тесто", meta: 0}, {food: 4});
IDRegistry.genItemID("byterbrod");
Item.createFoodItem("byterbrod", "Бутерброд", {name: "бутерброд", meta: 0}, {food: 16});
IDRegistry.genItemID("siroi_iablochnii_pirog");
Item.createFoodItem("siroi_iablochnii_pirog", "Сырой яблочный пирог", {name: "сырой_яблочный_пирог", meta: 0}, {food: 12});
IDRegistry.genItemID("prigotovlennii_iablochnii_pirog");
Item.createFoodItem("prigotovlennii_iablochnii_pirog", "Приготовленный яблочный пирог", {name: "сырой_яблочный_пирог", meta: 0}, {food: 15});
IDRegistry.genItemID("siroi_vishnevii_pirog");
Item.createFoodItem("siroi_vishnevii_pirog", "Сырой вишневый пирог", {name: "сырой_вишневый_пирог", meta: 0}, {food: 6});
IDRegistry.genItemID("prigotovlennii_vishnevii_pirog");
Item.createFoodItem("prigotovlennii_vishnevii_pirog", "Приготовленный вишневый пирог", {name: "сырой_вишневый_пирог", meta: 0}, {food: 8});
IDRegistry.genItemID("siraia_pitca");
Item.createFoodItem("siraia_pitca", "Сырая пицца", {name: "сырая_пица", meta: 0}, {food: 12});
IDRegistry.genItemID("prigotovlennaia_pitca");
Item.createFoodItem("prigotovlennaia_pitca", "Приготовленная пицца", {name: "приготовленная_пица", meta: 0}, {food: 15});
IDRegistry.genItemID("iaichnitca");
Item.createFoodItem("iaichnitca", "Яичница", {name: "яичница", meta: 0}, {food: 3});
IDRegistry.genItemID("roli");
Item.createFoodItem("roli", "Роллы", {name: "ролы", meta: 0}, {food: 8, isTech: true});
IDRegistry.genItemID("kolbasa");
Item.createFoodItem("kolbasa", "Колбаса", {name: "колбаса", meta: 0}, {food: 5});
IDRegistry.genItemID("siroe_miaso_kraia");
Item.createFoodItem("siroe_miaso_kraia", "Сырое мясо края", {name: "сырое_мясо_края", meta: 0}, {food: 5});
IDRegistry.genItemID("prigotovlennoe_miaso_kraia");
Item.createFoodItem("prigotovlennoe_miaso_kraia", "Приготовленное мясо края", {name: "приготовленное_мясо_края", meta: 0}, {food: 8});
IDRegistry.genItemID("ocishennaia_siraia_riba");
Item.createFoodItem("ocishennaia_siraia_riba", "Сырое мясо рыбы", {name: "очищенная_сырая_рыба", meta: 0}, {food: 4});
IDRegistry.genItemID("ochishennaia_prigotovlennaia_riba");
Item.createFoodItem("ochishennaia_prigotovlennaia_riba", "Приготовленное мясо рыбы", {name: "очищенная_приготовленная_рыба", meta: 0}, {food: 6});
IDRegistry.genItemID("ocishennii_siroi_losos");
Item.createFoodItem("ocishennii_siroi_losos", "Сырое мясо лосося", {name: "очищенный_сырой_лосось", meta: 0}, {food: 4});
IDRegistry.genItemID("ocishennii_prigotovlennii_losos");
Item.createFoodItem("ocishennii_prigotovlennii_losos", "Приготовленное мясо лосося", {name: "очищенный_приготовленный_лосось", meta: 0}, {food: 6});
IDRegistry.genItemID("bezopasnoe_miaso_pibi_fygy");
Item.createFoodItem("bezopasnoe_miaso_pibi_fygy", "Мясо рыбы фугу", {name: "безопасное_мясо_рыбы_фугу", meta: 0}, {food: 4});
IDRegistry.genItemID("prigotovlennoe_miaso_pibi_fygy");
Item.createFoodItem("prigotovlennoe_miaso_pibi_fygy", "Безопасное мясо рыбы фугу", {name: "приготовленное_мясо_рыбы_фугу", meta: 0}, {food: 6});
IDRegistry.genItemID("miska_s_kokosovim_molokom"); 
Item.createFoodItem("miska_s_kokosovim_molokom", "Миска с кокосовым молоком", {name: "миска_с_кокосовым_молоком", meta: 0},{stack: 1,food: 2});
IDRegistry.genItemID("pyzirek_s_molokom"); 
Item.createFoodItem("pyzirek_s_molokom", "Пузырек с молоком", {name: "пузырёк_с_молоком", meta: 0},{stack: 1,food: 0});
IDRegistry.genItemID("pyzirek_s_rasplavlennim_sirom");
Item.createFoodItem("pyzirek_s_rasplavlennim_sirom", "Пузырек с расплавленным сыром", {name: "расплавленный_сыр", meta: 0}, {stack: 1,food: 3});
IDRegistry.genItemID("energetik");
Item.createFoodItem("energetik", "Энергетический напиток", {name: "энергетик", meta: 0}, {food: 1});
const ValidFunc = {

	result: function(){
		return false;
	}

};
//особые функции еды
Callback.addCallback("FoodEaten",function(heal, satRatio)
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if(Player.getCarriedItem().id==ItemID.pyzirek_s_molokom)
{
Entity.clearEffects(Player.get());
Player.addItemToInventory (374, 1, 0);
Game.prevent();
}
if(Player.getCarriedItem().id==ItemID.bezopasnoe_miaso_pibi_fygy)
{
Entity.addEffect(Player.get(), 19, 1, 1200)
Entity.addEffect(Player.get(), 9, 2, 800)
Entity.addEffect(Player.get(), 18, 1, 1200)
}
if(Player.getCarriedItem().id==ItemID.pyzirek_s_rasplavlennim_sirom)
{
Player.addItemToInventory (374, 1, 0);
}
if(Player.getCarriedItem().id==ItemID.energetik)
{
Player.addItemToInventory (ItemID.zheleznaia_banka, 1, 0);
Entity.addEffect(Player.get(), 5, 0, 240)
Entity.addEffect(Player.get(), 9, 2, 40)
Entity.addEffect(Player.get(), 8, 0, 320)
Entity.addEffect(Player.get(), 1, 0, 400)
}
if(Player.getCarriedItem().id==ItemID.miska_s_kokosovim_molokom)
{
Player.addItemToInventory (281, 1, 0);
}
if(Player.getCarriedItem().id==ItemID.siroe_miaso_kraia)
{
if(Math.random() < .95){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 1, 300)
Entity.addEffect(Player.get(), 18, 0, 200)
Player.setPosition(pos.x, pos.y+10, pos.z);
}
}
if(Player.getCarriedItem().id==ItemID.prigotovlennoe_miaso_kraia)
{
if(Math.random() < .8){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 0, 200)
Entity.addEffect(Player.get(), 18, 0, 100)
Player.setPosition(pos.x, pos.y+5, pos.z);
}
}
if(Player.getCarriedItem().id==ItemID.ocishennaia_siraia_riba)
{
if(Math.random() < .8){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 0, 200)
}
}
if(Player.getCarriedItem().id==ItemID.ocishennii_siroi_losos)
{
if(Math.random() < .8){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 0, 200)
}
}
if(Player.getCarriedItem().id==432)
{
if (helmet.id == ItemID.kapushon_drakona_kraia && chest.id == ItemID.kirasa_drakona_kraia && legs.id == ItemID.ponozhi_drakona_kraia && boots.id == ItemID.botinki_drakona_kraia){
    Entity.addEffect(Player.get(),1, 0, 200);
    Entity.addEffect(Player.get(),5, 0, 300);
    Entity.addEffect(Player.get(),10, 1, 100);
    Entity.addEffect(Player.get(),22, 0, 300);
    Entity.addEffect(Player.get(),21, 1, 300);
}
}
});
//функция тапа по мобу
Callback.addCallback("PlayerAttack", function (player, victim)
{
if(Player.getCarriedItem().id==374)
{
if(Entity.getType(victim) == 11)
{
Player.decreaseCarriedItem (1)
Player.addItemToInventory (ItemID.pyzirek_s_molokom, 1, 0);
Game.prevent();
}
}
});