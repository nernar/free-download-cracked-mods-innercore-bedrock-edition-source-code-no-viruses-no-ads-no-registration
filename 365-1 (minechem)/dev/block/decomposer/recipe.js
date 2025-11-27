Decomposer.addRecipeLiquid("milk", 1, {Ca: 4, oleicAcid: 1});
Decomposer.addRecipeLiquid("water", 1, {H: 2, O: 1});

Decomposer.addRecipeLiquidSelect("lava", 0.25, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Na: 1, Cl: 1},
], 0.2);

/*
Decomposer.addRecipeLiquid("iron.molten", 0.144, {Fe: 16});
Decomposer.addRecipeLiquid("gold.molten", 0.144, {Au: 16});
Decomposer.addRecipeLiquid("copper.molten", 0.144, {Cu: 16});
Decomposer.addRecipeLiquid("tin.molten", 0.144, {Sn: 16});
Decomposer.addRecipeLiquid("aluminium.molten", 0.144, {Al: 16});
Decomposer.addRecipeLiquid("cobalt.molten", 0.144, {Co: 16});
Decomposer.addRecipeLiquid("ardite.molten", 0.144, {Fe: 2, W: 2, Si: 2});
Decomposer.addRecipeLiquid("bronze.molten", 0.144, {Cu: 12, Sn: 4});
Decomposer.addRecipeLiquid("aluminiumbrass.molten", 0.144, {Cu: 12, Al: 4});
Decomposer.addRecipeLiquid("manyullyn.molten", 0.144, {Co: 8, Fe: 1, W: 1, Si: 1});
Decomposer.addRecipeLiquid("alumite.molten", 0.144, {Al: 8, Fe: 3, siliconDioxide: 2, magnesiumOxide: 1});
Decomposer.addRecipeLiquid("obsidian.molten", 0.144, {siliconDioxide: 16, magnesiumOxide: 8});
Decomposer.addRecipeLiquid("steel.molten", 0.144, {Fe: 14, C: 2});
Decomposer.addRecipeLiquid("stone.molten", 0.144, {siliconOxide: 12, ironOxide: 4});
Decomposer.addRecipeLiquid("glass.molten", 0.144, {siliconDioxide: 16});
Decomposer.addRecipeLiquid("emerald.molten", 0.144, {beryl: 6, Cr: 6, V: 6});
Decomposer.addRecipeLiquid("blood.molten", 0.144, {O: 6, Fe: 2, ironOxide: 8});
Decomposer.addRecipeLiquid("nickel.molten", 0.144, {Ni: 16});
Decomposer.addRecipeLiquid("lead.molten", 0.144, {Pb: 16});
Decomposer.addRecipeLiquid("silver.molten", 0.144, {Ag: 16});
Decomposer.addRecipeLiquid("platinum.molten", 0.144, {Pt: 16});
Decomposer.addRecipeLiquid("invar.molten", 0.144, {Fe: 10, Ni: 6});
Decomposer.addRecipeLiquid("electrum.molten", 0.144, {Ag: 8, Au: 8});
*/


Decomposer.addRecipeSelect(1, 0, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Al: 1, O: 1}
], 0.2);

Decomposer.addRecipeSelect(2, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Ga: 1, As: 1}
], 0.07);

Decomposer.addRecipeSelect(3, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Ga: 1, As: 1}
], 0.07);

Decomposer.addRecipeSelect(243, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Ga: 1, As: 1}
], 0.07);

Decomposer.addRecipeSelect(4, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Na: 1, Cl: 1}
], 0.1);

Decomposer.addRecipe(5, -1, {cellulose: 2}, 0.4);
Decomposer.addRecipe(158, -1, {cellulose: 2}, 0.4);
Decomposer.addRecipe(6, -1, {cellulose: 1}, 0.25);
Decomposer.addRecipe(12, -1, {siliconDioxide: 16});
Decomposer.addRecipe(123, -1, {siliconDioxide: 1}, 0.35);
Decomposer.addRecipe(14, -1, {Au: 48});
Decomposer.addRecipe(15, -1, {Fe: 48});
Decomposer.addRecipe(16, -1, {C: 48});
Decomposer.addRecipe(17, -1, {cellulose: 8}, 0.5);
Decomposer.addRecipe(162, -1, {cellulose: 8}, 0.5);
Decomposer.addRecipe(18, -1, {cellulose: 4}, 0.5);
Decomposer.addRecipe(161, -1, {cellulose: 4}, 0.5);
Decomposer.addRecipe(351, 0, {blackPigment: 1});
Decomposer.addRecipe(351, 1, {redPigment: 1});
Decomposer.addRecipe(351, 2, {greenPigment: 1});
Decomposer.addRecipe(351, 3, {theobromine: 1, tannicacid: 1}, 0.4);
Decomposer.addRecipe(351, 4, {lazurite: 1});
Decomposer.addRecipe(351, 5, {purplePigment: 1});
Decomposer.addRecipe(351, 6, {lightbluePigment: 1, whitePigment: 1});
Decomposer.addRecipe(351, 7, {whitePigment: 1, blackPigment: 1});
Decomposer.addRecipe(351, 8, {whitePigment: 1, blackPigment: 2});
Decomposer.addRecipe(351, 9, {redPigment: 1, whitePigment: 1});
Decomposer.addRecipe(351, 10, {limePigment: 1});
Decomposer.addRecipe(351, 11, {yellowPigment: 1});
Decomposer.addRecipe(351, 12, {lightbluePigment: 1});
Decomposer.addRecipe(351, 13, {lightbluePigment: 1, redPigment: 1});
Decomposer.addRecipe(351, 14, {orangePigment: 1});
Decomposer.addRecipe(351, 15, {whitePigment: 1});
Decomposer.addRecipe(20, -1, {siliconDioxide: 16});
Decomposer.addRecipe(102, -1, {siliconDioxide: 6});
Decomposer.addRecipe(21, -1, {lazurite: 6, sodalite: 1, noselite: 1, calciumCarbonate: 1, pyrite: 1});
Decomposer.addRecipe(22, -1, {lazurite: 9});
Decomposer.addRecipe(30, -1, {fibroin: 1});
Decomposer.addRecipe(175, -1, {shikimicAcid: 2}, 0.3);
Decomposer.addRecipe(24, -1, {siliconDioxide: 16});
Decomposer.addRecipe(35, 0, {glycine: 2, whitePigment: 1}, 0.6);
Decomposer.addRecipe(35, 1, {glycine: 2, orangePigment: 1}, 0.6);
Decomposer.addRecipe(35, 2, {glycine: 2, lightbluePigment: 1, redPigment: 1}, 0.6);
Decomposer.addRecipe(35, 3, {glycine: 2, lightbluePigment: 1}, 0.6);
Decomposer.addRecipe(35, 4, {glycine: 2, yellowPigment: 1}, 0.6);
Decomposer.addRecipe(35, 5, {glycine: 2, limePigment: 1}, 0.6);
Decomposer.addRecipe(35, 6, {glycine: 2, redPigment: 1, whitePigment: 1}, 0.6);
Decomposer.addRecipe(35, 7, {glycine: 2, whitePigment: 1, blackPigment: 2}, 0.6);
Decomposer.addRecipe(35, 8, {glycine: 2, whitePigment: 1, blackPigment: 1}, 0.6);
Decomposer.addRecipe(35, 9, {glycine: 2, lightbluePigment: 1, whitePigment: 1}, 0.6);
Decomposer.addRecipe(35, 10, {glycine: 2, purplePigment: 1}, 0.6);
Decomposer.addRecipe(35, 11, {glycine: 2, lazurite: 1}, 0.6);
Decomposer.addRecipe(35, 12, {glycine: 2, tannicacid: 1}, 0.6);
Decomposer.addRecipe(35, 13, {glycine: 2, greenPigment: 1}, 0.6);
Decomposer.addRecipe(35, 14, {glycine: 2, redPigment: 1}, 0.6);
Decomposer.addRecipe(35, 15, {glycine: 2, blackPigment: 1}, 0.6);
Decomposer.addRecipe(171, 0, {glycine: 2, whitePigment: 1}, 0.4);
Decomposer.addRecipe(171, 1, {glycine: 2, orangePigment: 1}, 0.4);
Decomposer.addRecipe(171, 2, {glycine: 2, lightbluePigment: 1, redPigment: 1}, 0.4);
Decomposer.addRecipe(171, 3, {glycine: 2, lightbluePigment: 1}, 0.2);
Decomposer.addRecipe(171, 4, {glycine: 2, yellowPigment: 1}, 0.4);
Decomposer.addRecipe(171, 5, {glycine: 2, limePigment: 1}, 0.4);
Decomposer.addRecipe(171, 6, {glycine: 2, redPigment: 1, whitePigment: 1}, 0.4);
Decomposer.addRecipe(171, 7, {glycine: 2, whitePigment: 1, blackPigment: 2}, 0.4);
Decomposer.addRecipe(171, 8, {glycine: 2, whitePigment: 1, blackPigment: 1}, 0.4);
Decomposer.addRecipe(171, 9, {glycine: 2, lightbluePigment: 1, whitePigment: 1}, 0.4);
Decomposer.addRecipe(171, 10, {glycine: 2, purplePigment: 1}, 0.4);
Decomposer.addRecipe(171, 11, {glycine: 2, lazurite: 1}, 0.4);
Decomposer.addRecipe(171, 12, {glycine: 2, tannicacid: 1}, 0.4);
Decomposer.addRecipe(171, 13, {glycine: 2, greenPigment: 1}, 0.4);
Decomposer.addRecipe(171, 14, {glycine: 2, redPigment: 1}, 0.4);
Decomposer.addRecipe(171, 15, {glycine: 2, blackPigment: 1}, 0.4);
Decomposer.addRecipe(37, -1, {shikimicAcid: 2, yellowPigment: 1}, 0.3);
Decomposer.addRecipe(38, 0, {shikimicAcid: 2, redPigment: 1}, 0.3);
Decomposer.addRecipe(38, 1, {shikimicAcid: 2, lazurite: 1}, 0.3);
Decomposer.addRecipe(38, 2, {shikimicAcid: 2, purplePigment: 1}, 0.3);
Decomposer.addRecipe(38, 3, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(38, 4, {shikimicAcid: 2, redPigment: 1}, 0.3);
Decomposer.addRecipe(38, 5, {shikimicAcid: 2, orangePigment: 1}, 0.3);
Decomposer.addRecipe(38, 6, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(38, 7, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(38, 8, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(39, -1, {psilocybin: 1, water: 2});
Decomposer.addRecipe(40, -1, {pantherine: 1, water: 2});
Decomposer.addRecipe(41, -1, {Au: 144});
Decomposer.addRecipe(42, -1, {Fe: 144});
Decomposer.addRecipe(46, -1, {tnt: 1});
Decomposer.addRecipe(49, -1, {siliconDioxide: 16, magnesiumOxide: 8});
Decomposer.addRecipe(56, -1, {fullrene: 6});
Decomposer.addRecipe(57, -1, {fullrene: 27});
Decomposer.addRecipe(72, -1, {cellulose: 4}, 0.4);
Decomposer.addRecipe(73, -1, {iron3oxide: 9, Cu: 9}, 0.8);
Decomposer.addRecipe(81, -1, {mescaline: 1, water: 20});
Decomposer.addRecipe(86, -1, {cucurbitacin: 1});
Decomposer.addRecipe(361, -1, {water: 1});

Decomposer.addRecipeSelect(87, -1, [
  {Si: 2, O: 1, Fe: 1},
  {Si: 2, Ni: 1, Tc: 1},
  {Si: 3, Ti: 1, Fe: 1},
  {Si: 1, W: 4, Cr: 2},
  {Si: 10, W: 1, Zn: 8, Be: 4}
], 0.1);

Decomposer.addRecipeSelect(112, -1, [
  {Si: 2, C: 1, Fe: 1},
  {Si: 2, Ni: 1, Tc: 1},
  {Si: 3, Ti: 1, Fe: 1},
  {Si: 1, W: 4, Cr: 2},
  {Si: 10, W: 1, Zn: 8, Be: 4}
], 0.15);

Decomposer.addRecipe(373, 0, {water: 5, siliconDioxide: 16});
Decomposer.addRecipe(79, -1, {water: 8});

Decomposer.addRecipeSelect(88, -1, [
  {Pb: 3, Be: 1, Si: 2, O: 1},
  {Pb: 1, Si: 5, O: 2},
  {Si: 2, O: 1},
  {Si: 6, O: 2},
  {Es: 1, O: 2}
], 0.2);

Decomposer.addRecipe(89, -1, {P: 4});
Decomposer.addRecipe(110, -1, {fingolimod: 1}, 0.09);

Decomposer.addRecipeSelect(121, -1, [
  {Si: 2, O: 1, H: 4, Li: 1},
  {Es: 1},
  {Pu: 1},
  {Fr: 1},
  {Nd: 1},
  {Si: 2, O: 4},
  {H: 4},
  {B: 8},
  {Li: 2},
  {Zr: 1},
  {Na: 1},
  {Rb: 1},
  {Ga: 1, As: 1}
], 0.8);

Decomposer.addRecipe(129, -1, {beryl: 6, Cr: 6, V: 6});
Decomposer.addRecipe(133, -1, {beryl: 18, Cr: 18, V: 18});
Decomposer.addRecipe(260, -1, {malicAcid: 1});
Decomposer.addRecipe(262, -1, {Si: 1, O: 2, N: 6});
Decomposer.addRecipe(263, 0, {C: 8}, 0.92);
Decomposer.addRecipe(263, 1, {C: 8}, 0.82);
Decomposer.addRecipe(173, -1, {C: 72}, 0.82);
Decomposer.addRecipe(264, -1, {fullrene: 3});
Decomposer.addRecipe(265, -1, {Fe: 16});
Decomposer.addRecipe(266, -1, {Au: 16});
Decomposer.addRecipe(280, -1, {cellulose: 1}, 0.3);
Decomposer.addRecipe(287, -1, {serine: 1, glycine: 1, alinine: 1}, 0.45);
Decomposer.addRecipe(288, -1, {water: 8, N: 6});
Decomposer.addRecipe(289, -1, {potassiumNitrate: 1, S: 2, C: 1});
Decomposer.addRecipe(297, -1, {starch: 1, sucrose: 1}, 0.1);
Decomposer.addRecipe(318, -1, {siliconDioxide: 1}, 0.5);
Decomposer.addRecipe(322, -1, {malicAcid: 1, Au: 64});
Decomposer.addRecipe(324, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(427, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(428, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(429, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(430, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(431, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(325, 0, {Fe: 48});
Decomposer.addRecipe(325, 8, {water: 16, Fe: 48});
Decomposer.addRecipe(331, -1, {iron3oxide: 1, Cu: 1}, 0.42);
Decomposer.addRecipe(152, -1, {iron3oxide: 9, Cu: 9}, 0.42);
Decomposer.addRecipe(332, -1, {water: 1});
Decomposer.addRecipe(334, -1, {keratin: 1}, 0.2);
Decomposer.addRecipe(336, -1, {kaolinite: 1}, 0.5);
Decomposer.addRecipe(337, -1, {kaolinite: 1}, 0.5);
Decomposer.addRecipe(338, -1, {sucrose: 1, H: 2, O: 1}, 0.65);
Decomposer.addRecipe(106, -1, {cellulose: 6});
Decomposer.addRecipe(339, -1, {cellulose: 1}, 0.35);

Decomposer.addRecipeSelect(345, -1, [
  {Fe: 64},
  {Fe: 64, iron3oxide: 1},
  {Fe: 64, iron3oxide: 1, Cu: 1},
  {Fe: 64, Cu: 1}
]);

Decomposer.addRecipeSelect(341, -1, [
  {pmma: 1},
  {Hg: 1},
  {water: 10}
], 0.9);

Decomposer.addRecipe(348, -1, {P: 1});
Decomposer.addRecipe(352, -1, {hydroxylapatite: 1});
Decomposer.addRecipe(353, -1, {sucrose: 1}, 0.75);
Decomposer.addRecipe(360, -1, {water: 1});
Decomposer.addRecipe(103, -1, {cucurbitacin: 1, asparticAcid: 1, water: 16});
Decomposer.addRecipe(366, -1, {K: 1, Na: 1, C: 2});
Decomposer.addRecipe(350, -1, {nodularin: 1}, 0.05);
Decomposer.addRecipe(368, -1, {Es: 1, calciumCarbonate: 8});
Decomposer.addRecipe(122, -1, {calciumCarbonate: 16, hydroxylapatite: 6, Pu: 18, Fm: 8});
Decomposer.addRecipe(369, -1, {Pu: 6});
Decomposer.addRecipe(377, -1, {Pu: 1});
Decomposer.addRecipe(370, -1, {Yb: 4, No: 4});
Decomposer.addRecipe(372, -1, {cocainehc: 1}, 0.5);
Decomposer.addRecipe(375, -1, {tetrodotoxin: 1}, 0.2);
Decomposer.addRecipe(376, -1, {Po: 1, ethanol: 1});
Decomposer.addRecipe(378, -1, {Hg: 1, Pu: 1, pmma: 3});
Decomposer.addRecipe(382, -1, {water: 4, whitePigment: 1, Au: 1});
Decomposer.addRecipe(388, -1, {beryl: 2, Cr: 2, V: 2});
Decomposer.addRecipe(295, -1, {cellulose: 2}, 0.3);
Decomposer.addRecipe(391, -1, {retinol: 1});
Decomposer.addRecipe(392, -1, {water: 8, K: 2, cellulose: 1}, 0.4);
Decomposer.addRecipe(396, -1, {retinol: 1, Au: 4});
Decomposer.addRecipe(399, -1, {He: 256, C: 64, Cn: 16, H: 192});
Decomposer.addRecipe(406, -1, {siliconDioxide: 4, galliumarsenide: 1});
Decomposer.addRecipe(101, -1, {Fe: 6});