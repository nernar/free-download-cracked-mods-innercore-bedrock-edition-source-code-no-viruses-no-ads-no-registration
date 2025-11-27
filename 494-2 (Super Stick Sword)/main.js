
importLib( "ToolLib", "*" ) ;

IDRegistry.genItemID( "compressed_stick" ) ;
Item.createItem( "compressed_stick", "Compressed Stick", { name: "compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "double_compressed_stick" ) ;
Item.createItem( "double_compressed_stick", "Double-Compressed Stick", { name: "2compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "triple_compressed_stick" ) ;
Item.createItem( "triple_compressed_stick", "Triple-Compressed Stick", { name: "3compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "quadruple_compressed_stick" ) ;
Item.createItem( "quadruple_compressed_stick", "Quadruple-Compressed Stick", { name: "4compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "quintuple_compressed_stick" ) ;
Item.createItem( "quintuple_compressed_stick", "Quintuple-Compressed Stick", { name: "5compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "sextuple_compressed_stick" ) ;
Item.createItem( "sextuple_compressed_stick", "Sextuple-Compressed Stick", { name: "6compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "septuple_compressed_stick" ) ;
Item.createItem( "septuple_compressed_stick", "Septuple-Compressed Stick", { name: "7compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "octuple_compressed_stick" ) ;
Item.createItem( "octuple_compressed_stick", "Octuple-Compressed Stick", { name: "8compressed_stick" }, { stack: 64 } ) ;
IDRegistry.genItemID( "stick_sword" ) ;
Item.createItem( "stick_sword", "Stick Sword", { name: "stick_sword" }, { stack: 1 } ) ;
ToolAPI.addToolMaterial( "stick sword", { durability: 2500, damage: 100 } ) ;
ToolAPI.setTool( ItemID.stick_sword, "stick sword", ToolType.sword ) ;


Recipes.addShaped( { id: ItemID.compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', 280, 0,] ) ;
Recipes.addShaped( { id: ItemID.double_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.triple_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.double_compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.quadruple_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.triple_compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.quintuple_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.quadruple_compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.sextuple_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.quintuple_compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.septuple_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.sextuple_compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.octuple_compressed_stick, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ['#', ItemID.septuple_compressed_stick, 0,] ) ;
Recipes.addShaped( { id: ItemID.stick_sword, count: 1, data: 0 }, [
	" a ",
	" a ",
	" b "
], ['a', ItemID.octuple_compressed_stick, 0, 'b', 280, 0,] ) ;

Recipes.addShapeless( { id: 280, count: 9, data: 0 }, [{ id: ItemID.compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.compressed_stick, count: 9, data: 0 }, [{ id: ItemID.double_compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.double_compressed_stick, count: 9, data: 0 }, [{ id: ItemID.triple_compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.triple_compressed_stick, count: 9, data: 0 }, [{ id: ItemID.quadruple_compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.quadruple_compressed_stick, count: 9, data: 0 }, [{ id: ItemID.quintuple_compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.quintuple_compressed_stick, count: 9, data: 0 }, [{ id: ItemID.sextuple_compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.sextuple_compressed_stick, count: 9, data: 0 }, [{ id: ItemID.septuple_compressed_stick, data: 0 }] ) ;
Recipes.addShapeless( { id: ItemID.septuple_compressed_stick, count: 9, data: 0 }, [{ id: ItemID.octuple_compressed_stick, data: 0 }] ) ;


Translation.addTranslation( "Stick Sword", { zh: "木棍剑", ru: "Палка Меч" } ) ;
Translation.addTranslation( "Compressed Stick", { zh: "压缩木棍", ru: "Сжатый Палка" } ) ;
Translation.addTranslation( "Double-Compressed Stick", { zh: "二重压缩木棍", ru: "Двойная Сжатая Палка" } ) ;
Translation.addTranslation( "Triple-Compressed Stick", { zh: "三重压缩木棍", ru: "Тройная Сжатая Палка" } ) ;
Translation.addTranslation( "Quadruple-Compressed Stick", { zh: "四重压缩木棍", ru: "Четверной Сжатая Палка" } ) ;
Translation.addTranslation( "Quintuple-Compressed Stick", { zh: "五重压缩木棍", ru: "Пятикратный Сжатая Палка" } ) ;
Translation.addTranslation( "Sextuple-Compressed Stick", { zh: "六重压缩木棍", ru: "Шестикратный Сжатая Палка" } ) ;
Translation.addTranslation( "Septuple-Compressed Stick", { zh: "七重压缩木棍", ru: "Семикратный Сжатая Палка" } ) ;
Translation.addTranslation( "Octuple-Compressed Stick", { zh: "八重压缩棍", ru: "Восьмикратный Сжатая Палка" } ) ;