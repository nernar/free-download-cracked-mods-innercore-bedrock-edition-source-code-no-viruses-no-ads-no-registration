Callback.addCallback("PostLoaded", function () {
    Recipes.addShapeless({id: ItemID.energetik, data: 0, count: 1}, [{id: 372, data: 0}, {id: 373, data: 0}, {id: 372, data: 0}, {id: 353, data: 0}, {id: 373, data: 0}, {id: 353, data: 0}, {id: 376, data: 0}, {id: ItemID.zheleznaia_banka, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==373){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.shocoladnaia_plitka, data: 0, count: 1}, [{id: 351, data: 3}, {id: 351, data: 3}, {id: 351, data: 3}, {id: ItemID.pyzirek_s_molokom, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_molokom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.oscolok_cremnia, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 318, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 2, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 110, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 198, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 243, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 3, 0]);
    Recipes.addShaped({id: ItemID.gorst_graviia, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 13, 0]);
    Recipes.addShaped({id: ItemID.gorst_peska, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 12, -1]);
    Recipes.addShaped({id: ItemID.kolchyzhnoe_koltco, count: 1, data: 0}, [
        "aba",
        "b b",
        "aba"
    ], ['a', ItemID.nuggetIron, 0, 'b', ItemID.stalnoi_samorodok, 0]);
    Recipes.addShaped({id: 318, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.oscolok_cremnia, 0]);
    Recipes.addShaped({id: ItemID.adskii_shlem, count: 1, data: 0}, [
        "aba",
        "a a",
        "   "
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0]);
    Recipes.addShaped({id: ItemID.izymrydnii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 388, 0]);
    Recipes.addShaped({id: 388, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.izymrydnii_samorodok, 0]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.loza, 0]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.siroi_iablochnii_pirog, count: 1, data: 0}, [
        "bbb",
        " a ",
        "   "
    ], ['a', ItemID.testo, 0, 'b', 260, 0]);
    Recipes.addShaped({id: ItemID.siroi_vishnevii_pirog, count: 1, data: 0}, [
        "bbb",
        "bbb",
        " a "
    ], ['a', ItemID.testo, 0, 'b', ItemID.vishnia, 0]);
    Recipes.addShaped({id: ItemID.sito, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 0, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.adskaia_kirasa, count: 1, data: 0}, [
        "a a",
        "aca",
        "bab"
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0, 'c', ItemID.laa, 0]);
    Recipes.addShaped({id: ItemID.adskie_ponozhi, count: 1, data: 0}, [
        "aaa",
        "b b",
        "a a"
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0]);
    Recipes.addShaped({id: ItemID.adskie_botinki, count: 1, data: 0}, [
        "   ",
        "a a",
        "b b"
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0]);
    Recipes.addShapeless({id: ItemID.adskii_slitok, data: 0, count: 6}, [{id: 325, data: 8}, {id: ItemID.laa, data: 0}, {id: 325, data: 10}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==325){
		    Player.addItemToInventory(325, 2, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.ballon_s_vozdyhom, count: 1, data: 0}, [
        "ede",
        "aba",
        "cbc"
    ], ['a', 422, 0, 'b', ItemID.ingotSteel, 0, 'c', 409, 0, 'd', ItemID.stalnoi_samorodok, 0, 'e', ItemID.yglerodnoe_volokno, 0]);
    Recipes.addShaped({id: ItemID.shipovannaia_dybina, count: 1, data: 0}, [
        "aba",
        "aba",
        "aba"
    ], ['b', 280, 0, 'a', ItemID.zyb_payka, 0]);
    Recipes.addShaped({id: ItemID.otravlennaia_shipovannaia_dybina, count: 1, data: 0}, [
        "aba",
        "aba",
        "aba"
    ], ['b', 280, 0, 'a', ItemID.otravlennii_zyb_payka, 0]);
    Recipes.addShaped({id: ItemID.nozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.obichnaia_verevka, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.loza, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.travianaia_verevka, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    if(primal_core){
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.plant_twine, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    }
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.travianaia_verevka, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: 351, count: 1, data: 15}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.gnilaia_kost, 0]);
    Recipes.addShaped({id: ItemID.nozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.obichnaia_verevka, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.loza, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    if(primal_core){
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.plant_twine, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    }
Recipes.addShapeless({id: ItemID.testo, data: 0, count: 1}, [{id: 373, data: 0}, {id: 353, data: 0}, {id: ItemID.pyzirek_s_molokom, data: 0}, {id: ItemID.myka, data: 0}, {id: ItemID.myka, data: 0}, {id: ItemID.myka, data: 0}, {id: 344, data: 0}, {id: 344, data: 0}, {id: 344, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==373){
		    Player.addItemToInventory(374, 2, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.igla, count: 1, data: 0}, [
        "   ",
        " a ",
        " a "
    ], ['a', ItemID.nuggetIron, 0]);
    Recipes.addShaped({id: ItemID.vodianoi_filtr, count: 1, data: 0}, [
        "d d",
        "bcb",
        "dad"
    ], ['a', ItemID.stalnoi_samorodok, 0, 'b', 422, 0, 'c', 409, 0, 'd', ItemID.yglerodnoe_volokno, 0]);
    Recipes.addShaped({id: 302, count: 1, data: 0}, [
        "aaa",
        "a a",
        "   "
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    Recipes.addShaped({id: 303, count: 1, data: 0}, [
        "a a",
        "aaa",
        "aaa"
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    Recipes.addShaped({id: ItemID.myka, count: 2, data: 0}, [
        "   ",
        "a a",
        "   "
    ], ['a', 296, 0]);
    Recipes.addShaped({id: 304, count: 1, data: 0}, [
        "aaa",
        "a a",
        "a a"
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    Recipes.addShaped({id: 305, count: 1, data: 0}, [
        "   ",
        "a a",
        "a a"
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    if(!primal_core){
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.stalnoi_topor);
    }
    Recipes.addShapeless({id: ItemID.siraia_pitca, data: 0, count: 1}, [{id: ItemID.trava, data: 0}, {id: ItemID.kolbasa, data: 0}, {id: 39, data: 0}, {id: ItemID.testo, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: ItemID.testo, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 2, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: 421, count: 1, data: 0}, [
        " ac",
        " b ",
        "   "
    ], ['b', 339, 0, 'a', 351, 0, 'c', 287, 0]);
    Recipes.addShaped({id: 421, count: 1, data: 0}, [
        " ac",
        " b ",
        "   "
    ], ['b', 339, 0, 'a', 351, 0, 'c', ItemID.travianaia_nit, 0]);
    Recipes.addShaped({id: 419, count: 1, data: 0}, [
        "  a",
        "aab",
        "   "
    ], ['b', ItemID.almaznii_samorodok, 0, 'a', 264, 0]);
    Recipes.addShaped({id: 417, count: 1, data: 0}, [
        "  a",
        "aab",
        "   "
    ], ['b', ItemID.nuggetIron, 0, 'a', 265, 0]);
    Recipes.addShaped({id: 418, count: 1, data: 0}, [
        "  a",
        "aab",
        "   "
    ], ['b', 371, 0, 'a', 266, 0]);
    Recipes.addShaped({id: ItemID.semechki, count: 3, data: 0}, [
        "aaa",
        "   ",
        " b "
    ], ['a', 175, 0, 'b', 339, 0]);
        Recipes.addShaped({id: 280, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.drevesina_vishni, 0]);
Recipes.addShapeless({id: ItemID.nitrat_kaliia, data: 0, count: 4}, [{id: 373, data: 0}, {id: 373, data: 0}, {id: 373, data: 0}, {id: ItemID.pepel, data: 0}, {id: 3, data: 0}, {id: 367, data: 0}, {id: ItemID.trava, data: 0}, {id: 170, data: 0}, {id: ItemID.trava, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==373){
		    Player.addItemToInventory(374, 3, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: 289, count: 3, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.nitrat_kaliia, 0, 'b', ItemID.sera, 0, 'c', 263, -1]);
    Recipes.addShaped({id: 289, count: 5, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.nitrat_kaliia, 0, 'b', ItemID.sera, 0, 'c', ItemID.antratcit, 0]);
    Recipes.addShaped({id: ItemID.sit, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 1, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.si, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 2, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.s, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 3, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.i, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 4, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 320, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 424, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 364, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 366, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.t, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 5, 'b', ItemID.setka_dlia_sita, 0]);
    if(!primal_core){
    Recipes.addShaped({id: 4, count: 1, data: 0}, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', ItemID.rock_stone, 0, 'b', 337, 0]);
    }
    Recipes.addShaped({id: ItemID.rock_stone, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 4, 0]);
    Recipes.addShaped({id: 265, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.nuggetIron, 0]);
    Recipes.addShaped({id: ItemID.nuggetIron, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 265, 0]);
    Recipes.addShaped({id: 264, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.almaznii_samorodok, 0]);
    Recipes.addShaped({id: 2, count: 6, data: 0}, [
        "aaa",
        "bbb",
        "bbb"
    ], ['a', ItemID.trava, 0, 'b', 3, 0]);
    Recipes.addShaped({id: ItemID.miska_s_kokosovim_molokom, count: 1, data: 0}, [
        "   ",
        " a ",
        " b "
    ], ['a', ItemID.ochishennii_kokos, 0, 'b', 281, 0]);
    Recipes.addShaped({id: ItemID.almaznii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 264, 0]);
    Recipes.addShaped({id: ItemID.ingotSteel, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.stalnoi_samorodok, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: BlockID.blockSteel, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.ingotSteel, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.blockSteel, 0]);
    if(!primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_shlem, count: 1, data: 0}, [
        "aaa",
        "a a",
        "   "
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kirasa, count: 1, data: 0}, [
        "a a",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnie_botinki, count: 1, data: 0}, [
        "   ",
        "a a",
        "a a"
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnie_ponozhi, count: 1, data: 0}, [
        "aaa",
        "a a",
        "a a"
    ], ['a', ItemID.ingotSteel, 0]);
    }
    Recipes.addShaped({id: 50, count: 10, data: 0}, [
        "a  ",
        "b  ",
        "b  "
    ], ['a', ItemID.antratcit, 0, 'b', 280, 0]);
    Recipes.addShaped({id: ItemID.ochishennii_kokos, count: 1, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.kokos, 0]);
    Recipes.addShaped({id: 5, count: 4, data: 3}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.drevesina_palmi, 0]);
    if(!primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.travianaia_verevka, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.obichnaia_verevka, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.plant_twine, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.loza, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.loza, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.loza, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.loza, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.loza, 0]);
    }
    Recipes.addShaped({id: ItemID.ndsm, count: 1, data: 0}, [
        " c ",
        "bad",
        "   "
    ], ['a', 318, 0, 'b', 371, 0, 'c', 331, 0, 'd', ItemID.nuggetIron, 0]);
    if(!primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', 264, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.loza, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', 265, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.loza, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.kamennii_metatelnii_nozh, count: 5, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.rock_stone, 0, 'c', 4, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.dereviannii_metatelnii_nozh, count: 3, data: 0}, [
        " b ",
        " a ",
        "   "
    ], ['a', 280, 0, 'b', 5, -1]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.zolotoi_metatelnii_nozh, count: 6, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', 371, 0, 'c', 266, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "bbb",
        " a ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_mech, count: 1, data: 0}, [
        " b ",
        " b ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "bb ",
        "ba ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "bb ",
        " a ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " b ",
        " a ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    }
    Recipes.addShaped({id: 355, count: 1, data: 0}, [
        "   ",
        " b ",
        "aaa"
    ], ['a', 5, -1, 'b', ItemID.spalnii_nabor, 0]);
    Recipes.addShaped({id: ItemID.tk, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tks, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 1, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tkb, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 2, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tktr, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 3, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tka, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 4, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tktd, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 5, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.katyshka_s_nitkami, count: 1, data: 0}, [
        "ba ",
        "ccc",
        "cac"
    ], ['a', 158, -1, 'c', 287, 0, 'b', ItemID.igla, 0]);
    Recipes.addShaped({id: ItemID.katyshka_s_travianimi_nitkami, count: 1, data: 0}, [
        "ba ",
        "ccc",
        "cac"
    ], ['a', 158, -1, 'c', ItemID.travianaia_nit, 0, 'b', ItemID.igla, 0]);
    Recipes.addShaped({id: ItemID.rybin, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.oscolok_rybina, 0]);
    Recipes.addShaped({id: BlockID.rybinovii_block, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.rybin, 0]);
    Recipes.addShaped({id: ItemID.rybin, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.rybinovii_block, 0]);
    Recipes.addShaped({id: ItemID.oscolok_rybina, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.rybin, 0]);
    Recipes.addShaped({id: ItemID.pepel, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.block_zoli, 0]);
    Recipes.addShaped({id: BlockID.block_zoli, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.pepel, 0]);
    Recipes.addShaped({id: BlockID.meteoritovii_block, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.meteoritovii_slitok, 0]);
    Recipes.addShaped({id: ItemID.meteoritovii_slitok, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.meteoritovii_samorodok, 0]);
    Recipes.addShaped({id: ItemID.meteoritovii_slitok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.meteoritovii_block, 0]);
    Recipes.addShaped({id: ItemID.meteoritovii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.meteoritovii_slitok, 0]);
    Recipes.addShaped({id: ItemID.mini_pres, count: 1, data: 0}, [
        "aba",
        "cac",
        "ede"
    ], ['a', BlockID.blockSteel, 0, 'b', ItemID.ingotSteel , 0, 'c', 265, 0, 'd', 4, 0, 'e', 42, 0]);
    Recipes.addShaped({id: ItemID.adskii_slitok, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.adskii_samorodok, 0]);
    Recipes.addShaped({id: ItemID.adskii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.adskii_slitok, 0]);
    Recipes.addShaped({id: ItemID.fabrshem, count: 1, data: 0}, [
        "dbd",
        "aca",
        "aba"
    ], ['a', 265, 0, 'b', BlockID.blockSteel, 0, 'c', 20, 0, 'd', 331, 0]);
    Recipes.addShaped({id: ItemID.zheleznaia_banka, count: 1, data: 0}, [
        "bb ",
        "bb ",
        "bb "
    ], ['b', ItemID.nuggetIron, 0]);
if(primal_core){
    Recipes.addShaped({id: ItemID.plant_fiber, count: 1, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.trava, 0]);
}
    Recipes.addShaped({id: BlockID.stalnaia_tryba, count: 4, data: 0}, [
        "bbb",
        "aca",
        "bbb"
    ], ['b', 331, 0, 'a', ItemID.ingotSteel, 0, 'c', 20, 0]);
    Recipes.addShaped({id: BlockID.vodgen, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
    ], ['b', 331, 0, 'a', 265, 0, 'c', 4, 0]);
    Recipes.addShaped({id: 351, count: 1, data: 15}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.rakyshkaa, 0]);
    Recipes.addShaped({id: 351, count: 1, data: 15}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.rakyshkab, 0]);
});