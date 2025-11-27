/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: main.js


IDRegistry.genItemID("deserteagle");
Item.createItem("deserteagle", "Desert Eagle", {name: "deserteagle", meta: 0}, {stack: 1});
var Pistolmesh = new RenderMesh(__dir__ + "/models/pistol.obj","obj");
ItemModel.getFor(ItemID.deserteagle, 0).setHandModel(Pistolmesh, "pistol")

IDRegistry.genItemID("ak47");
Item.createItem("ak47", "AK-47", {name: "ak47", meta: 0}, {stack: 1});
var Ak47mesh = new RenderMesh(__dir__ + "/models/ak47.obj","obj");
ItemModel.getFor(ItemID.ak47, 0).setHandModel(Ak47mesh, "ak47")

IDRegistry.genItemID("barrett");
Item.createItem("barrett", "Barrett", {name: "barrett", meta: 0}, {stack: 1});
var Barrettmesh = new RenderMesh(__dir__ + "/models/barrett.obj","obj");
ItemModel.getFor(ItemID.barrett, 0).setHandModel(Barrettmesh, "barrett")

IDRegistry.genItemID("barrett_explosive");
Item.createItem("barrett_explosive", "Explosive Barrett", {name: "barrett_explosive", meta: 0}, {stack: 1});
ItemModel.getFor(ItemID.barrett_explosive, 0).setHandModel(Barrettmesh, "barrett_explosive")

IDRegistry.genItemID("r870");
Item.createItem("r870", "R870", {name: "r870", meta: 0}, {stack: 1});
var R870mesh = new RenderMesh(__dir__ + "/models/r870.obj","obj");
ItemModel.getFor(ItemID.r870, 0).setHandModel(R870mesh, "r870")

IDRegistry.genItemID("rpg");
Item.createItem("rpg", "RPG 7", {name: "rpg", meta: 0}, {stack: 1});
var RPGmesh = new RenderMesh(__dir__ + "/models/rpg.obj","obj");
ItemModel.getFor(ItemID.rpg, 0).setHandModel(RPGmesh, "rpg")

IDRegistry.genItemID("aa12");
Item.createItem("aa12", "AA-12", {name: "aa12", meta: 0}, {stack: 1});
var AA12mesh = new RenderMesh(__dir__ + "/models/aa12.obj","obj");
ItemModel.getFor(ItemID.aa12, 0).setHandModel(AA12mesh, "aa12")




