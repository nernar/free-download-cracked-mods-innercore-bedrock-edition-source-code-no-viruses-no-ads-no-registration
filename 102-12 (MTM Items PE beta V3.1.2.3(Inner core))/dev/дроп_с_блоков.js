Block.registerDropFunction("sernaia_ryda", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.sera, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("stalnaia_tryba", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.stalnaia_tryba, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("vodgen", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.vodgen, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("rybinovaia_tryba", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.rybinovaia_tryba, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("antratcit", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.antratcit, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("rybinovaia_ryda", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.rybin, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("meteoritovaia_ryyda", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.meteoritovaia_ryyda, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction(BlockID.kamni, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rock_stone, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.kamn, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rock_stone, 2, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.kam, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rock_stone, 3, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.ka, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.oscolok_cremnia, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.k, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rakyshkaa, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.a, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rakyshkab, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.pal, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([280, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.palt, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([280, 1, 0]);
	return drop;
});
var drope = null;
ModAPI.addAPICallback("primal_api", function(api){
  drope = api;
});
Block.registerDropFunction(BlockID.drevesina_palmi, function(coords, blockID, blockData, level){
if(drope)
{
	var drop = [];
		drop.push([5, 1, 3]);
	return drop;
}
});
Block.registerDropFunction(BlockID.kokos, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.kokos, 1, 0]);
	return drop;
});
Callback.addCallback("PostLoaded", function () {
Block.registerDropFunctionForID(31, function(coords, blockID, blockData, level){
	if(Player.getCarriedItem().id!==359)
{
	var drop = [];
	if(Math.random() < .3){
		drop.push([ItemID.trava, 1, 0]);
	return drop;
	}
}
	if(Player.getCarriedItem().id==359)
{
if(blockData == 1)
{
	var drop = [];
		drop.push([31, 1, 1]);
	return drop;
}
if(blockData == 2)
{
	var drop = [];
		drop.push([31, 1, 2]);
	return drop;
}
}
});
Block.registerDropFunctionForID(175, function(coords, blockID, blockData, level){
	if(Player.getCarriedItem().id!==359)
{
if((blockData == 2) || (blockData == 3))
{
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.trava, 1, 0]);
	return drop;
	}
}
}
	if(Player.getCarriedItem().id==359)
{
if(blockData == 3)
{
	var drop = [];
		drop.push([175, 1, 3]);
	return drop;
}
if(blockData == 2)
{
	var drop = [];
		drop.push([175, 1, 2]);
	return drop;
}
}
});
});
Block.registerDropFunctionForID(106, function(coords, blockID, blockData, level){
	if(Player.getCarriedItem().id!==359)
{
	var drop = [];
	if(Math.random() < .8){
		drop.push([ItemID.loza, 1, 0]);
	return drop;
	}
}
	if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([106, 1, 0]);
	return drop;
}
});
Block.registerDropFunctionForID(30, function(coords, blockID, blockData, level){
	var drop = [];
	var gnil = parseInt(Math.random() * 3);
		drop.push([ItemID.gnilaia_nit, gnil, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.avishnia, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.vishnia, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.listva_vishni, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 1, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_vishnii, 1, 0]);
	return drop;
}
});
Block.registerDropFunction("oker", function(coords, blockID, blockData, level){
	if(level > 1){
	var drop = [];
		drop.push([ItemID.oker, 1, 0]);
	return drop;
}
});
Block.registerDropFunctionForID(30, function(coords, blockID, blockData, level){
	var drop = [];
	var gnil = parseInt(Math.random() * 3);
		drop.push([ItemID.gnilaia_nit, gnil, 0]);
	return drop;
});
Block.registerDropFunction("mini_pres", function(coords, blockID, blockData, level){
	if(level > 1){
	var drop = [];
		drop.push([ItemID.mini_pres, 1, 0]);
	return drop;
}
	if(level <= 1){
	var drop = [];
		drop.push([ItemID.mini_pres, 0, 0]);
	return drop;
}
});
Block.registerDropFunction("sito", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.sito, 1, 0]);
	return drop;
});
Block.registerDropFunction("sit", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.sit, 1, 0]);
	return drop;
});
Block.registerDropFunction("si", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.si, 1, 0]);
	return drop;
});
Block.registerDropFunction("s", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.s, 1, 0]);
	return drop;
});
Block.registerDropFunction("i", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.i, 1, 0]);
	return drop;
});
Block.registerDropFunction("t", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.t, 1, 0]);
	return drop;
});
Block.registerDropFunction("tk", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tk, 1, 0]);
	return drop;
});
Block.registerDropFunction("tkb", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tkb, 1, 0]);
	return drop;
});
Block.registerDropFunction("tks", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tks, 1, 0]);
	return drop;
});
Block.registerDropFunction("tka", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tka, 1, 0]);
	return drop;
});
Block.registerDropFunction("tktd", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tktd, 1, 0]);
	return drop;
});
Block.registerDropFunction("tktr", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tktr, 1, 0]);
	return drop;
});
Block.registerDropFunction("fabrshem", function(coords, blockID, blockData, level){
	if(level > 1){
	var drop = [];
		drop.push([ItemID.fabrshem, 1, 0]);
	return drop;
}
	if(level <= 1){
	var drop = [];
		drop.push([ItemID.fabrshem, 0, 0]);
	return drop;
}
});
Block.registerDropFunction("lavacristall", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.lavaCrysta, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("blockSteel", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
			return [[blockID, 1, 0]];
		var drop = [[BlockID.blockSteel, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction("rybinovii_block", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
			return [[blockID, 1, 0]];
		var drop = [[BlockID.rybinovii_block, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction("meteoritovii_block", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
			return [[blockID, 1, 0]];
		var drop = [[BlockID.meteoritovii_block, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction(BlockID.listva_palmi, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
if(primal_core){
		drop.push([280, 1, 0]);
}
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_palmii, 1, 0]);
	return drop;
}
});
Block.registerDropFunction(BlockID.listva_palmii, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_palmii, 1, 0]);
	return drop;
}
});
Block.registerDropFunction(BlockID.listva_vishnii, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 1, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_vishnii, 1, 0]);
	return drop;
}
});