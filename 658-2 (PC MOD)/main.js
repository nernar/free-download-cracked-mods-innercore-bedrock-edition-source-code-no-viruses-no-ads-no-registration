/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: Items.js

IDRegistry.genItemID("cpu_1");
Item.createItem("cpu_1", "Intel 4004", {name: "cpu", meta: 0}, {stack: 1});

IDRegistry.genItemID("cpu_2");
Item.createItem("cpu_2", "Intel 4040", {name: "cpu", meta: 0}, {stack: 1});

IDRegistry.genItemID("cpu_3");
Item.createItem("cpu_3", "Intel 8008", {name: "cpu", meta: 0}, {stack: 1});

IDRegistry.genItemID("cpu_4");
Item.createItem("cpu_4", "Intel 8080", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_5");
Item.createItem("cpu_5", "Intel 8080 A", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_6");
Item.createItem("cpu_6", "Intel 8085", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_7");
Item.createItem("cpu_7", "Zilog Z80", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_8");
//Item.createItem("cpu_8", "Motorola 6800", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_9");
//Item.createItem("cpu_9", "Motorola 6502", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_10");
//Item.createItem("cpu_10", "Intel 8088", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_11");
//Item.createItem("cpu_11", "Intel 8086", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_12");
//Item.createItem("cpu_12", "Intel 80186", {name: "cpu", meta: 2}, {stack: 1});

IDRegistry.genItemID("cpu_13");
//Item.createItem("cpu_13", "Intel 80286", {name: "cpu", meta: 2}, {stack: 1});

IDRegistry.genItemID("cpu_14");
//Item.createItem("cpu_14", "Intel Motorola 68k", {name: "cpu", meta: 3}, {stack: 1});

IDRegistry.genItemID("cpu_15");
//Item.createItem("cpu_15", "Zilog Z8000", {name: "cpu", meta: 1}, {stack: 1});

IDRegistry.genItemID("cpu_16");
//Item.createItem("cpu_16", "Intel I386", {name: "cpu", meta: 2}, {stack: 1});

IDRegistry.genItemID("pci_1");
Item.createItem("pci_1", "16kb plate", {name: "pci", meta: 0}, {stack: 1});

IDRegistry.genItemID("pci_2");
Item.createItem("pci_2", "32kb plate", {name: "pci", meta: 0}, {stack: 1});

IDRegistry.genItemID("pci_3");
Item.createItem("pci_3", "48kb plate", {name: "pci", meta: 0}, {stack: 1});

IDRegistry.genItemID("pci_4");
Item.createItem("pci_4", "64kb plate", {name: "pci", meta: 0}, {stack: 1});

IDRegistry.genItemID("bpl_1");
Item.createItem("bpl_1", "Clear Blueprint", {name: "oth", meta: 0}, {stack: 1});

IDRegistry.genItemID("bpl_2");
Item.createItem("bpl_2", "Intel 4040 Blueprint", {name: "oth", meta: 0}, {stack: 1});

IDRegistry.genItemID("pwe_1");
Item.createItem("pwe_1", "Power elements", {name: "oth", meta: 1}, {stack: 64});




// file: Block.js

IDRegistry.genBlockID("pc_1");
Block.createBlockWithRotation("pc_1", [
{name: "Calculator", texture: [["pc0", 1], ["pc0", 1], ["pc0", 1], ["pc0", 0], ["pc0", 1], ["pc0", 1]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("pc_2");
Block.createBlockWithRotation("pc_2", [
{name: "Calculator#", texture: [["pc0", 1], ["pc0", 1], ["pc0", 1], ["pc0", 0], ["pc0", 1], ["pc0", 1]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("pc_3");
Block.createBlockWithRotation("pc_3", [
{name: "Calculator +", texture: [["pc0", 1], ["pc0", 1], ["pc0", 1], ["pc0", 0], ["pc0", 1], ["pc0", 1]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("pc_4");
Block.createBlockWithRotation("pc_4", [
{name: "Calculator# +", texture: [["pc0", 1], ["pc0", 1], ["pc0", 1], ["pc0", 0], ["pc0", 1], ["pc0", 1]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("pc_5");
Block.createBlockWithRotation("pc_5", [
{name: "ZX Spectrum", texture: [["pc1", 4], ["pc1", 5], ["pc1", 3], ["pc1", 0], ["pc1", 2], ["pc1", 1]], inCreative: true}
], "opaque");




