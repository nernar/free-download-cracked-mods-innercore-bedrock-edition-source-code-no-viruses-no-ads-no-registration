const translate = (text: string, ...parameters: any) => {
	text = Translation.translate(text);
	if (parameters.length > 0) {
		return java.lang.String.format(text, parameters.map((obj: any) => "" + obj));
	}
	return text;
};

///
// SMELTERY -> LIQUIDS
///

Translation.addTranslation("TConstruct: Buckets", {
	ru: "TConstruct: Жидкости"
});
Translation.addTranslation("Molten Iron", {
	de: "Geschmolzenes Eisen",
	id: "Besi Leleh",
	it: "Ferro fuso",
	ja: "溶融した鉄", ko: "녹은 철",
	pl: "Stopione żelazo",
	pt: "Ferro Derretido",
	ru: "Расплавленное железо",
	sv: "Nedsmält järn",
	uk: "Розплавлене залізо",
	zh: "熔融铁"
});
Translation.addTranslation("Flowing Molten Iron", {
	de: "Fließendes geschmolzenes Eisen",
	id: "Besi Leleh Mengalir",
	it: "Ferro fuso che scorre",
	ja: "流れる溶融した鉄",
	ko: "흐르는 녹은 철",
	pl: "Płynące stopione żelazo",
	pt: "Fluido de Ferro Derretido",
	ru: "Текучее расплавленное железо",
	sv: "Flödande nedsmält järn",
	uk: "Текуче розплавлене залізо",
	zh: "流动的熔融铁"
});
Translation.addTranslation("Molten Iron Bucket", {
	de: "Eimer aus geschmolzenem Eisen",
	id: "Ember Besi Leleh",
	it: "Secchio di ferro fuso",
	ja: "溶融した鉄入りバケツ",
	ko: "녹은 철 양동이",
	pl: "Wiadro stopionego żelaza",
	pt: "Balde de Ferro Derretido",
	ru: "Ведро расплавленного железа",
	sv: "Hink med nedsmält järn",
	uk: "Відро розплавленого заліза",
	zh: "熔融铁桶"
});
Translation.addTranslation("Molten Gold", {
	de: "Geschmolzenes Gold",
	id: "Molten Gold",
	it: "Oro fuso",
	ja: "溶融した金", ko: "녹은 금",
	pl: "Stopione złoto",
	pt: "Ouro Derretido",
	ru: "Расплавленное золото",
	sv: "Nedsmält guld",
	uk: "Розплавлене золото",
	zh: "熔融金"
});
Translation.addTranslation("Flowing Molten Gold", {
	de: "Fließendes geschmolzenes Gold",
	id: "Flowing Molten Gold",
	it: "Oro fuso che scorre",
	ja: "流れる溶融した金",
	ko: "흐르는 녹은 금",
	pl: "Płynące stopione złoto",
	pt: "Fluido de Ouro Derretido",
	ru: "Текучее расплавленно золото",
	sv: "Flödande nedsmält guld",
	uk: "Текуче розплавлене золото",
	zh: "流动的熔融金"
});
Translation.addTranslation("Molten Gold Bucket", {
	de: "Eimer aus geschmolzenem Gold",
	id: "Molten Gold Bucket",
	it: "Secchio d'oro fuso",
	ja: "溶融した金入りバケツ",
	ko: "녹은 금 양동이",
	pl: "Wiadro stopionego złota",
	pt: "Balde de Ouro Derretido",
	ru: "Ведро расплавленного золото",
	sv: "Hink med nedsmält guld",
	uk: "Відро розплавленого золота",
	zh: "熔融金桶"
});
Translation.addTranslation("Molten Pig Iron", {
	de: "Geschmolzenes Roheisen",
	id: "Molten Pig Iron",
	it: "Ferro di maiale fuso",
	ja: "溶融した銑鉄",
	ko: "녹은 돼지 선철",
	pl: "Stopione świńskie żelazo",
	pt: "Ferro-Porco Derretido",
	ru: "Расплавленное свиное железо",
	sv: "Nedsmält grisjärn",
	uk: "Розплавлене свиняче залізо",
	zh: "熔融生铁"
});
Translation.addTranslation("Flowing Molten Pig Iron", {
	de: "Fließendes geschmolzenes Roheisen",
	id: "Flowing Molten Pig Iron",
	it: "Ferro di maiale fuso che scorre",
	ja: "流れる溶融した銑鉄",
	ko: "흐르는 녹은 돼지 선철",
	pl: "Płynące topione świńskie żelazo",
	pt: "Fluido de Ferro-Porco Derretido",
	ru: "Текучее расплавленное свиное железо",
	sv: "Flödande nedsmält grisjärn",
	uk: "Текуче розплавлене свиняче залізо",
	zh: "流动的熔融生铁"
});
Translation.addTranslation("Molten Pig Iron Bucket", {
	de: "Eimer aus geschmolzenem Roheisen",
	id: "Molten Pig Iron Bucket",
	it: "Secchio di ferro di maiale fuso",
	ja: "溶融した銑鉄入りバケツ",
	ko: "녹은 돼지 선철 양동이",
	pl: "Wiadro stopionego świńskiego żelaza",
	pt: "Balde de Ferro-Porco Derretido",
	ru: "Ведро расплавленного свиного железа",
	sv: "Hink med nedsmält grisjärn",
	uk: "Відро розплавленого свинячого заліза",
	zh: "熔融生铁桶"
});
Translation.addTranslation("Molten Cobalt", {
	de: "Geschmolzenes Kobalt",
	id: "Molten Cobalt",
	it: "Cobalto fuso",
	ja: "溶融したコバルト",
	ko: "녹은 코발트",
	pl: "Stopiony kobalt",
	pt: "Cobalto Derretido",
	ru: "Расплавленный кобальт",
	sv: "Nedsmält kobolt",
	uk: "Розплавлений кобальт",
	zh: "熔融钴"
});
Translation.addTranslation("Flowing Molten Cobalt", {
	de: "Fließendes geschmolzenes Kobalt",
	id: "Flowing Molten Cobalt",
	it: "Cobalto fuso che scorre",
	ja: "流れる溶融したコバルト",
	ko: "흐르는 녹은 코발트",
	pl: "Płynący stopiony kobalt",
	pt: "Fluido de Cobalto Derretido",
	ru: "Текучий расплавленный кобальт",
	sv: "Flödande nedsmält kobolt",
	uk: "Текучий розплавлений кобальт",
	zh: "流动的熔融钴"
});
Translation.addTranslation("Molten Cobalt Bucket", {
	de: "Eimer mit geschmolzenem Kobalt",
	id: "Molten Cobalt Bucket",
	it: "Secchio di cobalto fuso",
	ja: "溶融したコバルト入りバケツ",
	ko: "녹은 코발트 양동이",
	pl: "Wiadro stopionego kobaltu",
	pt: "Balde de Cobalto Derretido",
	ru: "Ведро расплавленного кобальта",
	sv: "Hink med nedsmält kobolt",
	uk: "Відро розплавленого кобальту",
	zh: "熔融钴桶"
});
Translation.addTranslation("Molten Ardite", {
	ru: "Расплавленный ардит"
});
Translation.addTranslation("Flowing Molten Ardite", {
	ru: "Текучий расплавленный ардит"
});
Translation.addTranslation("Molten Ardite Bucket", {
	ru: "Ведро расплавленного ардита"
});
Translation.addTranslation("Molten Manyullyn", {
	de: "Geschmolzener Manyullyn",
	id: "Molten Manyullyn",
	it: "Manyullyn fuso",
	ja: "溶融したマンユリン",
	ko: "녹은 마뉼린",
	pl: "Stopiony Manyullyn",
	pt: "Manyullyn Derretida",
	ru: "Расплавленный маньюлин",
	sv: "Nedsmält manyullyn",
	uk: "Розплавлений маньюлін",
	zh: "熔融玛玉灵"
});
Translation.addTranslation("Flowing Molten Manyullyn", {
	de: "Fließender geschmolzener Manyullyn",
	id: "Flowing Molten Manyullyn",
	it: "Manyullyn fuso che scorre",
	ja: "流れる溶融したマンユリン",
	ko: "흐르는 녹은 마뉼린",
	pl: "Płynący stopiony Manyullyn",
	pt: "Fluido de Manyullyn Derretida",
	ru: "Текучий расплавленный маньюлин",
	sv: "Flödande nedsmält manyullyn",
	uk: "Текучий розплавлений маньюлін",
	zh: "流动的熔融玛玉灵"
});
Translation.addTranslation("Molten Manyullyn Bucket", {
	de: "Geschmolzener Manyullyn-Eimer",
	id: "Molten Manyullyn Bucket",
	it: "Secchio di Manyullyn fuso",
	ja: "溶融したマンユリン入りバケツ",
	ko: "녹은 마뉼린 양동이",
	pl: "Wiadro stopionego Manyullynu",
	pt: "Balde de Manyullyn Derretida",
	ru: "Ведро расплавленного маньюлина",
	sv: "Hink med nedsmält manyullyn",
	uk: "Відро розплавленого маньюліну",
	zh: "熔融玛玉灵桶"
});
Translation.addTranslation("Molten Knightslime", {
	de: "Geschmolzener Ritterschleim",
	id: "Molten Knightslime",
	it: "Slime del cavaliere fuso",
	ja: "溶融したナイトスライム",
	ko: "녹은 기사슬라임",
	pl: "Stopiony rycerski szlam",
	pt: "Cavaleiro-Slime Derretido",
	ru: "Расплавленная рыцарская слизь",
	sv: "Nedsmält riddarslem",
	uk: "Розплавлений лицарський слиз",
	zh: "熔融骑士史莱姆"
});
Translation.addTranslation("Flowing Molten Knightslime", {
	de: "Fließender geschmolzener Ritterschleim",
	id: "Flowing Molten Knightslime",
	it: "Slime del cavaliere fuso che scorre",
	ja: "流れる溶融したナイトスライム",
	ko: "흐르는 녹은 기사슬라임",
	pl: "Płynący stopiony rycerski szlam",
	pt: "Fluido de Cavaleiro-Slime Derretido",
	ru: "Текучая расплавленная рыцарская слизь",
	sv: "Flödande nedsmält riddarslem",
	uk: "Текучий розплавлений лицарський слиз",
	zh: "流动的熔融骑士史莱姆"
});
Translation.addTranslation("Molten Knightslime Bucket", {
	de: "Geschmolzener Knightslime-Eimer",
	id: "Molten Knightslime Bucket",
	it: "Secchio di slime del cavaliere fuso",
	ja: "溶融したナイトスライム入りバケツ",
	ko: "녹은 기사슬라임 양동이",
	pl: "Wiadro stopionego rycerskiego szlamu",
	pt: "Balde de Cavaleiro-Slime Derretido",
	ru: "Ведро расплавленной рыцарской слизи",
	sv: "Hink med nedsmält riddarslem",
	uk: "Відро розплавленого лицарського слизу",
	zh: "熔融骑士史莱姆桶"
});
Translation.addTranslation("Molten Aluminum Brass", {
	ru: "Расплавленная алюминиевая бронза"
});
Translation.addTranslation("Flowing Molten Aluminum Brass", {
	ru: "Текучая расплавленная алюминиевая бронза"
});
Translation.addTranslation("Molten Aluminum Bucket", {
	ru: "Ведро расплавленной алюминиевой бронзы"
});
Translation.addTranslation("Molten Brass", {
	de: "Geschmolzenes Messing",
	id: "Molten Brass",
	it: "Ottone fuso",
	ja: "溶融した黄銅", ko: "녹은 황동",
	pl: "Stopiony mosiądz",
	pt: "Latão Derretido",
	ru: "Расплавленная латунь",
	sv: "Nedsmält mässing",
	uk: "Розплавлена латунь",
	zh: "熔融黄铜"
});
Translation.addTranslation("Flowing Molten Brass", {
	de: "Fließendes geschmolzenes Messing",
	id: "Flowing Molten Brass",
	it: "Ottone fuso che scorre",
	ja: "流れる溶融した黄銅",
	ko: "흐르는 녹은 황동",
	pl: "Płynący stopiony mosiądz",
	pt: "Fluido de Latão Derretido",
	ru: "Текучая расплавленная латунь",
	sv: "Flödande nedsmält mässing",
	uk: "Текуча розплавлена латунь",
	zh: "流动的熔融黄铜"
});
Translation.addTranslation("Molten Brass Bucket", {
	de: "Eimer aus geschmolzenem Messing",
	id: "Molten Brass Bucket",
	it: "Secchio di ottone fuso",
	ja: "溶融した黄銅入りバケツ",
	ko: "녹은 황동 양동이",
	pl: "Wiadro stopionego mosiądzu",
	pt: "Balde de Latão Derretido",
	ru: "Ведро расплавленной латуни",
	sv: "Hink med nedsmält mässing",
	uk: "Відро розплавленої латуні",
	zh: "熔融黄铜桶"
});
Translation.addTranslation("Molten Copper", {
	de: "Geschmolzenes Kupfer",
	id: "Molten Copper",
	it: "Rame fuso",
	ja: "溶融した銅", ko: "녹은 구리",
	pl: "Stopiona miedź",
	pt: "Cobre Derretido",
	ru: "Расплавленная медь",
	sv: "Nedsmält koppar",
	uk: "Розплавлена мідь",
	zh: "熔融铜"
});
Translation.addTranslation("Flowing Molten Copper", {
	de: "Fließendes geschmolzenes Kupfer",
	id: "Flowing Molten Copper",
	it: "Rame fuso che scorre",
	ja: "流れる溶融した銅",
	ko: "흐르는 녹은 구리",
	pl: "Płynąca stopiona miedź",
	pt: "Fluido de Cobre Derretido",
	ru: "Текучая расплавленная медь",
	sv: "Flödande nedsmält koppar",
	uk: "Текуча розплавлена мідь",
	zh: "流动的熔融铜"
});
Translation.addTranslation("Molten Copper Bucket", {
	de: "Eimer aus geschmolzenem Kupfer",
	id: "Molten Copper Bucket",
	it: "Secchio di rame fuso",
	ja: "溶融した銅入りバケツ",
	ko: "녹은 구리 양동이",
	pl: "Wiadro stopionej miedzi",
	pt: "Balde de Cobre Derretido",
	ru: "Ведро расплавленной меди",
	sv: "Hink med nedsmält koppar",
	uk: "Відро розплавленої міді",
	zh: "熔融铜桶"
});
Translation.addTranslation("Molten Tin", {
	de: "Geschmolzenes Zinn",
	id: "Molten Tin",
	it: "Stagno fuso",
	ja: "溶融した錫", ko: "녹은 주석",
	pl: "Stopiona cyna",
	pt: "Estanho Derretido",
	ru: "Расплавленное олово",
	sv: "Nedsmält tenn",
	uk: "Розплавлене олово",
	zh: "熔融锡"
});
Translation.addTranslation("Flowing Molten Tin", {
	de: "Fließendes geschmolzenes Zinn",
	id: "Flowing Molten Tin",
	it: "Stagno fuso che scorre",
	ja: "流れる溶融した錫",
	ko: "흐르는 녹은 주석",
	pl: "Płynąca stopiona cyna",
	pt: "Fluido de Estanho Derretido",
	ru: "Текучее расплавленное олово",
	sv: "Flödande nedsmält tenn",
	uk: "Текуче розплавлене олово",
	zh: "流动的熔融锡"
});
Translation.addTranslation("Molten Tin Bucket", {
	de: "Eimer aus geschmolzenem Zinn",
	id: "Molten Tin Bucket",
	it: "Secchio di stagno fuso",
	ja: "溶融した錫入りバケツ",
	ko: "녹은 주석 양동이",
	pl: "Wiadro stopionej cyny",
	pt: "Balde de Estanho Derretido",
	ru: "Ведро расплавленного олова",
	sv: "Hink med nedsmält tenn",
	uk: "Відро розплавленого олова",
	zh: "熔融锡桶"
});
Translation.addTranslation("Molten Bronze", {
	de: "Geschmolzene Bronze",
	id: "Molten Bronze",
	it: "Bronzo fuso",
	ja: "溶融した青銅", ko: "녹은 청동",
	pl: "Stopiony brąz",
	pt: "Bronze Derretido",
	ru: "Расплавленная бронза",
	sv: "Nedsmält brons",
	uk: "Розплавлена бронза",
	zh: "熔融青铜"
});
Translation.addTranslation("Flowing Molten Bronze", {
	de: "Fließende geschmolzene Bronze",
	id: "Flowing Molten Bronze",
	it: "Bronzo fuso che scorre",
	ja: "流れる溶融した青銅",
	ko: "흐르는 녹은 청동",
	pl: "Płynący stopiony brąz",
	pt: "Fluido de Bronze Derretido",
	ru: "Текучая расплавленная бронза",
	sv: "Flödande nedsmält brons",
	uk: "Текуча розплавлена бронза",
	zh: "流动的熔融青铜"
});
Translation.addTranslation("Molten Bronze Bucket", {
	de: "Eimer aus geschmolzener Bronze",
	id: "Molten Bronze Bucket",
	it: "Secchio di bronzo fuso",
	ja: "溶融した青銅入りバケツ",
	ko: "녹은 청동 양동이",
	pl: "Wiadro stopionego brązu",
	pt: "Balde de Bronze Derretido",
	ru: "Ведро расплавленной бронзы",
	sv: "Hink med nedsmält brons",
	uk: "Відро розплавленої бронзи",
	zh: "熔融青铜桶"
});
Translation.addTranslation("Molten Zinc", {
	de: "Geschmolzenes Zink",
	id: "Molten Zinc",
	it: "Zinco fuso",
	ja: "溶融した亜鉛", ko: "녹은 아연",
	pl: "Stopiony cynk",
	pt: "Zinco Derretido",
	ru: "Расплавленный цинк",
	sv: "Nedsmält zink",
	uk: "Розплавлений цинк",
	zh: "熔融锌"
});
Translation.addTranslation("Flowing Molten Zinc", {
	de: "Fließendes geschmolzenes Zink",
	id: "Flowing Molten Zinc",
	it: "Zinco fuso che scorre",
	ja: "流れる溶融した亜鉛",
	ko: "흐르는 녹은 아연",
	pl: "Płynący stopiony cynk",
	pt: "Fluido de Zinco Derretido",
	ru: "Текучий расплавленный цинк",
	sv: "Flödande nedsmält zink",
	uk: "Текучий розплавлений цинк",
	zh: "流动的熔融锌"
});
Translation.addTranslation("Molten Zinc Bucket", {
	de: "Eimer für geschmolzenes Zink",
	id: "Molten Zinc Bucket",
	it: "Secchio di zinco fuso",
	ja: "溶融した亜鉛入りバケツ",
	ko: "녹은 아연 양동이",
	pl: "Wiadro stopionego cynku",
	pt: "Balde de Zinco Derretido",
	ru: "Ведро расплавленного цинка",
	sv: "Hink med nedsmält zink",
	uk: "Відро розплавленого цинку",
	zh: "熔融锌桶"
});
Translation.addTranslation("Molten Lead", {
	de: "Geschmolzenes Blei",
	id: "Molten Lead",
	it: "Piombo fuso",
	ja: "溶融した鉛", ko: "녹은 납",
	pl: "Stopiony ołów",
	pt: "Chumbo Derretido",
	ru: "Расплавленный свинец",
	sv: "Nedsmält bly",
	uk: "Розплавлений свинець",
	zh: "熔融铅"
});
Translation.addTranslation("Flowing Molten Lead", {
	de: "Fließendes geschmolzenes Blei",
	id: "Flowing Molten Lead",
	it: "Piombo fuso che scorre",
	ja: "流れる溶融した鉛",
	ko: "흐르는 녹은 납",
	pl: "Płynący stopiony ołów",
	pt: "Fluido de Chumbo Derretido",
	ru: "Текучий расплавленный свинец",
	sv: "Flödande nedsmält bly",
	uk: "Текучий розплавлений свинець",
	zh: "流动的熔融铅"
});
Translation.addTranslation("Molten Lead Bucket", {
	de: "Geschmolzener Bleieimer",
	id: "Molten Lead Bucket",
	it: "Secchio di piombo fuso",
	ja: "溶融した鉛入りバケツ",
	ko: "녹은 납 양동이",
	pl: "Wiadro stopionego ołowiu",
	pt: "Balde de Chumbo Derretido",
	ru: "Ведро расплавленного свинца",
	sv: "Hink med nedsmält bly",
	uk: "Відро розплавленого свинцю",
	zh: "熔融铅桶"
});
Translation.addTranslation("Molten Nickel", {
	de: "Geschmolzenes Nickel",
	id: "Molten Nickel",
	it: "Nichel fuso",
	ja: "溶融したニッケル",
	ko: "녹은 니켈",
	pl: "Stopiony nikiel",
	pt: "Níquel Derretido",
	ru: "Расплавленный никель",
	sv: "Nedsmält nickel",
	uk: "Розплавлений нікель",
	zh: "熔融镍"
});
Translation.addTranslation("Flowing Molten Nickel", {
	de: "Fließendes geschmolzenes Nickel",
	id: "Flowing Molten Nickel",
	it: "Nichel fuso che scorre",
	ja: "流れる溶融したニッケル",
	ko: "흐르는 녹은 니켈",
	pl: "Płynący stopiony nikiel",
	pt: "Fluido de Níquel Derretido",
	ru: "Текучий расплавленный никель",
	sv: "Flödande nedsmält nickel",
	uk: "Текучий розплавлений нікель",
	zh: "流动的熔融镍"
});
Translation.addTranslation("Molten Nickel Bucket", {
	de: "Eimer für geschmolzenes Nickel",
	id: "Molten Nickel Bucket",
	it: "Secchio di nichel fuso",
	ja: "溶融したニッケル入りバケツ",
	ko: "녹은 니켈 양동이",
	pl: "Wiadro stopionego niklu",
	pt: "Balde de Níquel Derretido",
	ru: "Ведро расплавленного никеля",
	sv: "Hink med nedsmält nickel",
	uk: "Відро розплавленого нікелю",
	zh: "熔融镍桶"
});
Translation.addTranslation("Molten Silver", {
	de: "Geschmolzenes Silber",
	id: "Molten Silver",
	it: "Argento fuso",
	ja: "溶融した銀", ko: "녹은 은",
	pl: "Stopione srebro",
	pt: "Prata Derretida",
	ru: "Расплавленное серебро",
	sv: "Nedsmält silver",
	uk: "Розплавлене срібло",
	zh: "熔融银"
});
Translation.addTranslation("Flowing Molten Silver", {
	de: "Fließendes geschmolzenes Silber",
	id: "Flowing Molten Silver",
	it: "Argento fuso che scorre",
	ja: "流れる溶融した銀",
	ko: "흐르는 녹은 은",
	pl: "Płynące stopione srebro",
	pt: "Fluido de Prata Derretida",
	ru: "Текучее расплавленное серебро",
	sv: "Flödande nedsmält silver",
	uk: "Текуче розплавлене срібло",
	zh: "流动的熔融银"
});
Translation.addTranslation("Molten Silver Bucket", {
	de: "Geschmolzener Silbereimer",
	id: "Molten Silver Bucket",
	it: "Secchio d'argento fuso",
	ja: "溶融した銀入りバケツ",
	ko: "녹은 은 양동이",
	pl: "Wiadro stopionego srebra",
	pt: "Balde de Prata Derretida",
	ru: "Ведро расплавленного серебра",
	sv: "Hink med nedsmält silver",
	uk: "Відро розплавленого срібла",
	zh: "熔融银桶"
});
Translation.addTranslation("Molten Electrum", {
	de: "Geschmolzenes Elektrum",
	id: "Molten Electrum",
	it: "Elettro fuso",
	ja: "溶融したエレクトラム",
	ko: "녹은 호박금",
	pl: "Stopione elektrum",
	pt: "Electrio Derretido",
	ru: "Расплавленный электрум",
	sv: "Nedsmält elektrum",
	uk: "Розплавлений електрум",
	zh: "熔融琥珀金"
});
Translation.addTranslation("Flowing Molten Electrum", {
	de: "Fließendes geschmolzenes Elektrum",
	id: "Flowing Molten Electrum",
	it: "Elettro fuso che scorre",
	ja: "流れる溶融したエレクトラム",
	ko: "흐르는 녹은 호박금",
	pl: "Płynące stopione elektrum",
	pt: "Fluido de Electrio Derretido",
	ru: "Текучий расплавленный электрум",
	sv: "Flödande nedsmält elektrum",
	uk: "Текучий розплавлений електрум",
	zh: "流动的熔融琥珀金"
});
Translation.addTranslation("Molten Electrum Bucket", {
	de: "Eimer mit geschmolzenem Elektrum",
	id: "Molten Electrum Bucket",
	it: "Secchio di Elettro fusa",
	ja: "溶融したエレクトラム入りバケツ",
	ko: "녹은 호박금 양동이",
	pl: "Wiadro stopionego elektrum",
	pt: "Balde de Electrio Derretido",
	ru: "Ведро расплавленного электрума",
	sv: "Hink med nedsmält elektrum",
	uk: "Відро розплавленого електруму",
	zh: "熔融琥珀金桶"
});
Translation.addTranslation("Molten Steel", {
	de: "Geschmolzener Stahl",
	id: "Molten Steel",
	it: "Acciaio fuso",
	ja: "溶融した鋼鉄", ko: "녹은 강철",
	pl: "Stopiona stal",
	pt: "Aço Derretido",
	ru: "Расплавленная сталь",
	sv: "Nedsmält stål",
	uk: "Розплавлена сталь",
	zh: "熔融钢"
});
Translation.addTranslation("Flowing Molten Steel", {
	de: "Fließender geschmolzener Stahl",
	id: "Flowing Molten Steel",
	it: "Acciaio fuso che scorre",
	ja: "流れる溶融した鋼鉄",
	ko: "흐르는 녹은 강철",
	pl: "Płynąca stopiona stal",
	pt: "Fluido de Aço Derretido",
	ru: "Текучая расплавленная сталь",
	sv: "Flödande nedsmält stål",
	uk: "Текуча розплавлена сталь",
	zh: "流动的熔融钢"
});
Translation.addTranslation("Molten Steel Bucket", {
	de: "Eimer aus geschmolzenem Stahl",
	id: "Molten Steel Bucket",
	it: "Secchio di acciaio fuso",
	ja: "溶融した鋼鉄入りバケツ",
	ko: "녹은 강철 양동이",
	pl: "Wiadro stopionej stali",
	pt: "Balde de Aço Derretido",
	ru: "Ведро расплавленной стали",
	sv: "Hink med nedsmält stål",
	uk: "Відро розплавленої сталі",
	zh: "熔融钢桶"
});
Translation.addTranslation("Molten Aluminum", {
	de: "Geschmolzenes Aluminium",
	id: "Molten Aluminum",
	it: "Alluminio fuso",
	ja: "溶融したアルミニウム",
	ko: "녹은 알루미늄",
	pl: "Stopione aluminium",
	pt: "Aluminio Derretido",
	ru: "Расплавленный алюминий",
	sv: "Nedsmält aluminium",
	uk: "Розплавлений алюміній",
	zh: "熔融铝"
});
Translation.addTranslation("Flowing Molten Aluminum", {
	de: "Fließendes geschmolzenes Aluminium",
	id: "Flowing Molten Aluminum",
	it: "Alluminio fuso che scorre",
	ja: "流れる溶融したアルミニウム",
	ko: "흐르는 녹은 알루미늄",
	pl: "Płynące stopione aluminium",
	pt: "Fluido de Aluminio Derretido",
	ru: "Текучий расплавленный алюминий",
	sv: "Flödande nedsmält aluminium",
	uk: "Текучий розплавлений алюміній",
	zh: "流动的熔融铝"
});
Translation.addTranslation("Molten Aluminum Bucket", {
	de: "Eimer für geschmolzenes Aluminium",
	id: "Molten Aluminum Bucket",
	it: "Secchio di alluminio fuso",
	ja: "溶融したアルミニウム入りバケツ",
	ko: "녹은 알루미늄 양동이",
	pl: "Wiadro stopionego aluminium",
	pt: "Balde de Aluminio Derretido",
	ru: "Ведро расплавленного алюминия",
	sv: "Hink med nedsmält aluminium",
	uk: "Відро розплавленого алюмінію",
	zh: "熔融铝桶"
});
Translation.addTranslation("Seared Stone", {
	de: "Versengter Stein",
	id: "Seared Stone",
	it: "Pietra scottata",
	ja: "焼成石", ko: "그을린 돌",
	pl: "Suszony kamień",
	pt: "Pedra Carbonizada",
	ru: "Обожжённый камень",
	sv: "Bränd sten",
	uk: "Обпалений камінь",
	zh: "焦黑石"
});
Translation.addTranslation("Flowing Seared Stone", {
	de: "Fließender verbrannter Stein",
	id: "Batu Hangus Leleh Mengalir",
	it: "Pietra scottata che scorre",
	ja: "流れる溶融した焼成石",
	ko: "흐르는 녹은 그을린 돌",
	pl: "Płynący suszony kamień",
	pt: "Fluido de Pedra Carbonizada",
	ru: "Текучий обожжённый камень",
	sv: "Flödande bränd sten",
	uk: "Текучий обпалений камінь",
	zh: "流动的焦黑熔石"
});
Translation.addTranslation("Seared Stone Bucket", {
	de: "Seared Stone Bucket",
	id: "Ember Batu hangus Leleh",
	it: "Secchio di pietra scottata",
	ja: "溶融した焼成石入りバケツ",
	ko: "녹은 그을린 돌 양동이",
	pl: "Wiadro suszonego kamienia",
	pt: "Balde de Pedra Carbonizada",
	ru: "Ведро обожжённого камня",
	sv: "Hink med bränd sten",
	uk: "Відро обпаленого каменю",
	zh: "焦黑熔石桶"
});
Translation.addTranslation("Molten Obsidian", {
	de: "Geschmolzener Obsidian",
	id: "Obsidian Leleh",
	it: "Ossidiana fusa",
	ja: "溶融した黒曜石",
	ko: "녹은 흑요석",
	pl: "Stopiony obsydian",
	pt: "Obsidian Derretida",
	ru: "Расплавленный обсидиан",
	sv: "Nedsmält obsidian",
	uk: "Розплавлений обсидіан",
	zh: "熔融黑曜石"
});
Translation.addTranslation("Flowing Molten Obsidian", {
	de: "Fließender geschmolzener Obsidian",
	id: "Obsidian Leleh Mengalir",
	it: "Ossidiana fusa che scorre",
	ja: "流れる溶融した黒曜石",
	ko: "흐르는 녹은 흑요석",
	pl: "Płynący stopiony obsydian",
	pt: "Fluido de Obsidian Derretida",
	ru: "Текучий расплавленный обсидиан",
	sv: "Flödande nedsmält obsidian",
	uk: "Текучий розплавлений обсидіан",
	zh: "流动的熔融黑曜石"
});
Translation.addTranslation("Molten Obsidian Bucket", {
	de: "Eimer aus geschmolzenem Obsidian",
	id: "Ember Obsidian Leleh",
	it: "Secchio di ossidiana fusa",
	ja: "溶融した黒曜石入りバケツ",
	ko: "녹은 흑요석 양동이",
	pl: "Wiadro stopionego obsydianu",
	pt: "Balde de Obsidian Derretida",
	ru: "Ведро расплавленного обсидиана",
	sv: "Hink med nedsmält obsidian",
	uk: "Відро розплавленого обсидіану",
	zh: "熔融黑曜石桶"
});
Translation.addTranslation("Molten Clay", {
	de: "Geschmolzener Ton",
	id: "Terakota Leleh",
	it: "Argilla fusa",
	ja: "溶融した粘土", ko: "녹은 점토",
	pl: "Stopiona glina",
	pt: "Argila Derretida",
	ru: "Расплавленная глина",
	sv: "Nedsmält gyttja",
	uk: "Розплавлена глина",
	zh: "熔融黏土"
});
Translation.addTranslation("Flowing Molten Clay", {
	de: "Fließender geschmolzener Ton",
	id: "Terakota Leleh Mengalir",
	it: "Argilla fusa che scorre",
	ja: "流れる溶融した粘土",
	ko: "흐르는 녹은 점토",
	pl: "Płynąca stopiona glina",
	pt: "Fluido de Argila Derretida",
	ru: "Текучая расплавленная глина",
	sv: "Flödande nedsmält lera",
	uk: "Текуча розплавлена глина",
	zh: "流动的熔融黏土"
});
Translation.addTranslation("Molten Clay Bucket", {
	de: "Geschmolzener Lehmeimer",
	id: "Ember Terakota Leleh",
	it: "Secchio di argilla fusa",
	ja: "溶融した粘土入りバケツ",
	ko: "녹은 점토 양동이",
	pl: "Wiadro stopionej gliny",
	pt: "Balde de Argila Derretida",
	ru: "Ведро расплавленной глины",
	sv: "Hink med nedsmält lera",
	uk: "Відро розплавленої глини",
	zh: "熔融黏土桶"
});
Translation.addTranslation("Liquid Dirt", {
	ru: "Жидкая земля"
});
Translation.addTranslation("Flowing Liquid Dirt", {
	ru: "Текучая жидкая земля"
});
Translation.addTranslation("Liquid Dirt Bucket", {
	ru: "Ведро жидкой земли"
});
Translation.addTranslation("Molten Emerald", {
	de: "Geschmolzener Smaragd",
	id: "Zamrud Leleh",
	it: "Smeraldo fuso",
	ja: "溶融したエメラルド",
	ko: "녹은 에메랄드",
	pl: "Stopiony szmaragd",
	pt: "Esmeralda Derretida",
	ru: "Расплавленный изумруд",
	sv: "Nedsmält smaragd",
	uk: "Розплавлений смарагд",
	zh: "熔融绿宝石"
});
Translation.addTranslation("Flowing Molten Emerald", {
	de: "Fließender geschmolzener Smaragd",
	id: "Zamrud Leleh Mengalir",
	it: "Smeraldo fuso che scorre",
	ja: "流れる溶融したエメラルド",
	ko: "흐르는 녹은 에메랄드",
	pl: "Płynący stopiony szmaragd",
	pt: "Fluido de Esmeralda Derretida",
	ru: "Текучий расплавленный изумруд",
	sv: "Flödande nedsmält smaragd",
	uk: "Текучий розплавлений смарагд",
	zh: "流动的熔融绿宝石"
});
Translation.addTranslation("Molten Emerald Bucket", {
	de: "Geschmolzener Smaragdeimer",
	id: "Ember Zamrud Leleh",
	it: "Secchio di smeraldo fuso",
	ja: "溶融したエメラルド入りバケツ",
	ko: "녹은 에메랄드 양동이",
	pl: "Wiadro stopionego szmaragdu",
	pt: "Balde de Esmeralda Derretida",
	ru: "Ведро расплавленного изумруда",
	sv: "Hink med nedsmält smaragd",
	uk: "Відро розплавленого смарагду",
	zh: "熔融绿宝石桶"
});
Translation.addTranslation("Molten Glass", {
	de: "Geschmolzenes Glas",
	id: "Kaca Leleh",
	it: "Vetro fuso",
	ja: "溶融したガラス",
	ko: "녹은 유리",
	pl: "Stopione szkło",
	pt: "Vidro Derretido",
	ru: "Расплавленное стекло",
	sv: "Nedsmält glas",
	uk: "Розплавлене скло",
	zh: "熔融玻璃"
});
Translation.addTranslation("Flowing Molten Glass", {
	de: "Fließendes geschmolzenes Glas",
	id: "Kaca Leleh Mengalir",
	it: "Vetro fuso che scorre",
	ja: "流れる溶融したガラス",
	ko: "흐르는 녹은 유리",
	pl: "Płynące stopione szkło",
	pt: "Fluido de Vidro Derretido",
	ru: "Текучее расплавленное стекло",
	sv: "Flödande nedsmält glas",
	uk: "Текуче розплавлене скло",
	zh: "流动的熔融玻璃"
});
Translation.addTranslation("Molten Glass Bucket", {
	de: "Eimer aus geschmolzenem Glas",
	id: "Ember Kaca Leleh",
	it: "Secchio di vetro fuso",
	ja: "溶融したガラス入りバケツ",
	ko: "녹은 유리 양동이",
	pl: "Wiadro stopionego szkła",
	pt: "Balde de Vidro Derretido",
	ru: "Ведро расплавленного стекла",
	sv: "Hink med nedsmält glas",
	uk: "Відро розплавленого скла",
	zh: "熔融玻璃桶"
});
Translation.addTranslation("Blood", { de: "Blut", id: "Blood", it: "Sangue", ja: "血", ko: "피", pl: "Krew", pt: "Sangue", ru: "Кровь", sv: "Blod", uk: "Кров", zh: "血" });
Translation.addTranslation("Flowing Blood", {
	de: "Fließendes Blut",
	id: "Darah Mengalir",
	it: "Sangue che scorre",
	ja: "流れる血液", ko: "흐르는 피",
	pl: "Płynąca krew",
	pt: "Fluido de Sangue",
	ru: "Текучая кровь",
	sv: "Flödande blod",
	uk: "Текуча кров",
	zh: "流动的血"
});
Translation.addTranslation("Bucket o' Blood", {
	de: "Bucket of Blood",
	id: "Ember Darah",
	it: "Secchio di sangue",
	ja: "血液入りバケツ",
	ko: "피 양동이",
	pl: "Wiadro krwi",
	pt: "Balde de Sangue",
	ru: "Ведро крови",
	sv: "Blodhink",
	uk: "Відро крови",
	zh: "血桶"
});
Translation.addTranslation("Liquid Purple Slime", {
	ru: "Жидкая фиолетовая слизь"
});
Translation.addTranslation("Flowing Liquid Purple Slime", {
	ru: "Текучая жидкая фиолетовая слизь"
});
Translation.addTranslation("Liquid Purple Slime Bucket", {
	ru: "Ведро жидкой фиолетовой слизи"
});

///
// SMELTERY -> BLOCKS
///

Translation.addTranslation("[TConstuct]: Invalid alloy recipe -> %s", {
	ru: "[TConstruct]: Некорректный рецепт сплава -> %s"
});
Translation.addTranslation("Grout", {
	de: "Mörtel", id: "Grout", it: "Grout", ja: "グラウト", ko: "그라우트",
	pl: "Zaprawa",
	pt: "Grout",
	ru: "Цементный раствор",
	sv: "Grout", uk: "Цемент", zh: "砖泥"
});
Translation.addTranslation("Seared Brick", {
	de: "Angebrannter Ziegel",
	id: "Seared Brick",
	it: "Mattone scottato",
	ja: "焼成レンガ", ko: "그을린 벽돌",
	pl: "Suszona kamienna cegła",
	pt: "Tijolo Carbonizado",
	ru: "Обожжённый кирпич",
	sv: "Bränd tegelsten",
	uk: "Обпалена цеглина",
	zh: "焦黑砖"
});
Translation.addTranslation("Seared Stone", {
	de: "Versengter Stein",
	id: "Seared Stone",
	it: "Pietra scottata",
	ja: "焼成石", ko: "그을린 돌",
	pl: "Suszony kamień",
	pt: "Pedra Carbonizada",
	ru: "Обожжённый камень",
	sv: "Bränd sten",
	uk: "Обпалений камінь",
	zh: "焦黑石"
});
Translation.addTranslation("Seared Cobblestone", {
	de: "Versengter Kopfsteinpflaster",
	id: "Seared Cobblestone",
	it: "Ciottoli scottati",
	ja: "焼成丸石",
	ko: "그을린 조약돌",
	pl: "Suszony bruk",
	pt: "Pedregulho Carbonizado",
	ru: "Обожжённый булыжник",
	sv: "Bränd kullersten",
	uk: "Обпалений кругляк",
	zh: "焦黑圆石"
});
Translation.addTranslation("Seared Paver", {
	de: "Verbrannte Pflastersteine",
	id: "Seared Paver",
	it: "Pavimentazione scottata",
	ja: "舗装された焼成石",
	ko: "매끄러운 그을린 돌",
	pl: "Suszona kafelka chodnikowa",
	pt: "Asfalto Carbonizado",
	ru: "Обожжённая брусчатка",
	sv: "Bränd gatsten",
	uk: "Обпалена бруківка",
	zh: "焦黑地砖"
});
Translation.addTranslation("Seared Bricks", {
	de: "Angebrannte Ziegel",
	id: "Seared Bricks",
	it: "Mattoni scottati",
	ja: "焼成レンガ", ko: "그을린 벽돌",
	pl: "Suszone kamienne cegły",
	pt: "Tijolos Carbonizados",
	ru: "Обожжённые кирпичи",
	sv: "Bränd mursten",
	uk: "Обпалена цегла",
	zh: "焦黑砖块"
});
Translation.addTranslation("Cracked Seared Bricks", {
	de: "Gebrochene verbrannte Ziegel",
	id: "Cracked Seared Bricks",
	it: "Mattoni scottati incrinati",
	ja: "ひび割れた焼成レンガ",
	ko: "금 간 그을린 벽돌",
	pl: "Popękane suszone kamienne cegły",
	pt: "Tijolos Rachados Carbonizados",
	ru: "Потрескавшиеся обожжённые кирпичи",
	sv: "Sprucket bränt tegel",
	uk: "Тріснута обпалена цегла",
	zh: "裂纹焦黑砖块"
});
Translation.addTranslation("Fancy Seared Bricks", {
	de: "Ausgefallene verbrannte Ziegel",
	id: "Fancy Seared Bricks",
	it: "Mattoni scottati di lusso",
	ja: "おしゃれな焼成レンガ",
	ko: "장식된 그을린 벽돌",
	pl: "Ozdobne suszone kamienne cegły",
	pt: "Tijolo Extravagante Carbonizado",
	ru: "Причудливые обожжённые кирпичи",
	sv: "Snyggt bränt tegel",
	uk: "Вишукана обпалена цегла",
	zh: "精致焦黑砖块"
});
Translation.addTranslation("Square Seared Bricks", {
	ru: "Квадратные обожжённые кирпичи"
});
Translation.addTranslation("Seared Road", {
	ru: "Обожжённая тропа"
});
Translation.addTranslation("Seared Creeperface", {
	ru: "Обожжённая резная брусчатка"
});
Translation.addTranslation("Triangle Seared Bricks", {
	de: "Dreieck angebratene Ziegel",
	id: "Triangle Seared Bricks",
	it: "Triangolo di mattoni scottati",
	ja: "三角柄の焼成レンガ",
	ko: "조각된 그을린 벽돌",
	pl: "Trójkątne suszone kamienne cegły",
	pt: "Tijolo Triangular Carbonizado",
	ru: "Треугольные обожжённые кирпичи",
	sv: "Bränt tegel med triangelmönster",
	uk: "Трикутна обпалена цегла",
	zh: "三角纹焦黑砖块"
});
Translation.addTranslation("Small Seared Bricks", {
	ru: "Обожжённые кирпичики"
});
Translation.addTranslation("Seared Tiles", {
	ru: "Обожжённая плитка"
});
Translation.addTranslation("Seared Tanks", {
	ru: "TConstruct: Резервуары"
});
Translation.addTranslation("Seared Fuel Tank", {
	de: "Versengter Kraftstofftank",
	id: "Seared Fuel Tank",
	it: "Serbatoio di carburante scottato",
	ja: "焼成石の燃料タンク",
	ko: "그을린 연료 탱크",
	pl: "Suszony kamienny zbiornik paliwowy",
	pt: "Tanque de Combustivel Carbonizado",
	ru: "Обожжённый жидкостный резервуар",
	sv: "Bränd bränsletank",
	uk: "Обпалений паливний резервуар",
	zh: "焦黑燃料储罐"
});
Translation.addTranslation("Seared Fuel Gauge", {
	de: "Versengte Tankanzeige",
	id: "Seared Fuel Gauge",
	it: "Indicatore del carburante scottato",
	ja: "焼成石の燃料ゲージ",
	ko: "그을린 연료 계기 탱크",
	pl: "Suszony kamienny mierniczy zbiornik paliwowy",
	pt: "Indicador de Combustivel Carbonizado",
	ru: "Обожжённый топливомерный резервуар",
	sv: "Bränd bränslemätare",
	uk: "Обпалений паливний вимірювач",
	zh: "焦黑燃料量器"
});
Translation.addTranslation("Seared Ingot Tank", {
	de: "Versengter Barrentank",
	id: "Seared Ingot Tank",
	it: "Serbatoio del lingotto scottato",
	ja: "焼成石のインゴットタンク",
	ko: "그을린 금속 탱크",
	pl: "Suszony kamienny zbiornik na metale",
	pt: "Tanque de Lingote Carbonizado",
	ru: "Обожжённый резервуар для слитков",
	sv: "Bränd tackatank",
	uk: "Обпалений злитковий резервуар",
	zh: "焦黑材料储罐"
});
Translation.addTranslation("Seared Ingot Gauge", {
	de: "Seared Barrenlehre",
	id: "Seared Ingot Gauge",
	it: "Indicatore del lingotto scottato",
	ja: "焼成石のインゴットゲージ",
	ko: "그을린 금속 계기 탱크",
	pl: "Suszony kamienny zbiornik mierniczy na metale",
	pt: "Medidor de Lingote Carbonizado",
	ru: "Обожжённый слиткомерный резервуар",
	sv: "Bränd tackamätare",
	uk: "Обпалений злитковий вимірювач",
	zh: "焦黑材料量器"
});
Translation.addTranslation("Seared Drain", {
	de: "Versengter Abfluss",
	id: "Seared Drain",
	it: "Scolo scottato",
	ja: "焼成石のドレン",
	ko: "그을린 배출구",
	pl: "Suszony kamienny odpływ",
	pt: "Escorrimento Carbonizado",
	ru: "Обожжённый слив",
	sv: "Bränd brunn",
	uk: "Випалений злив",
	zh: "焦黑排液孔"
});
Translation.addTranslation("Seared Faucet", {
	de: "Versengter Wasserhahn",
	id: "Seared Faucet",
	it: "Rubinetto scottato",
	ja: "焼成石の蛇口",
	ko: "그을린 주조용 꼭지",
	pl: "Suszona kamienna rynna",
	pt: "Torneira Carbonizada",
	ru: "Обожжённый кран",
	sv: "Bränd kran",
	uk: "Обпалений кран",
	zh: "焦黑浇注口"
});
Translation.addTranslation("Casting Table", {
	de: "Gießtisch",
	id: "Casting Table",
	it: "Tavolo di fusione",
	ja: "鋳造台", ko: "주조대",
	pl: "Stół odlewniczy",
	pt: "Mesa de Fundição",
	ru: "Литейный стол",
	sv: "Avgjutningsbänk",
	uk: "Ливарний стіл",
	zh: "铸件台"
});
Translation.addTranslation("Casting Basin", {
	de: "Gießbecken",
	id: "Casting Basin",
	it: "Bacinella di fusione",
	ja: "鋳造鉢", ko: "쇳물받이",
	pl: "Kocioł odlewniczy",
	pt: "Bacia de Fundição",
	ru: "Литейный резервуар",
	sv: "Avgjutningskar",
	uk: "Ливарний резервуар",
	zh: "铸造盆"
});
Translation.addTranslation("Smeltery Controller", {
	de: "Schmelzsteuerung",
	id: "Smeltery Controller",
	it: "Controllore della fonderia",
	ja: "乾式製錬炉コントローラー",
	ko: "제련소 관리기",
	pl: "Kontroler pieca metalurgicznego",
	pt: "Controlador de fundição",
	ru: "Контроллер плавильни",
	sv: "Smältverkskontroll",
	uk: "Контролер плавильні",
	zh: "冶炼炉控制器"
});
Translation.addTranslation("Smeltery", {
	de: "Schmelzerei",
	id: "Smeltery",
	it: "Fonderia",
	ja: "乾式製錬炉", ko: "제련소",
	pl: "Piec metalurgiczny",
	pt: "Fundição",
	ru: "Плавильня",
	sv: "Smältverk",
	uk: "Плавильня",
	zh: "冶炼炉"
});
Translation.addTranslation("Dump", {
	ru: "Слив"
});
Translation.addTranslation("Invalid block inside the structure", {
	de: "Ungültiger Block innerhalb der Struktur",
	id: "Invalid block inside the structure",
	it: "Blocco non valido all'interno della struttura",
	ja: "構造内に無効なブロックがあります",
	ko: "구조물 내부의 블록이 잘못되었습니다",
	pl: "Nieprawidłowy blok we wnętrzu struktury",
	pt: "Bloco inválido dentro da estrutura",
	ru: "Недопустимый блок внутри структуры",
	sv: "Ogiltigt block inuti strukturen",
	uk: "Invalid block inside the structure",
	zh: "结构内部存在无效方块"
});

///
// RESOURCES
///

Translation.addTranslation("Ores", {
	ru: "TConstruct: Руды"
});
Translation.addTranslation("Cobalt Ore", {
	ru: "Кобальтовая руда"
});
Translation.addTranslation("Ardite Ore", {
	ru: "Ардитовая руда"
});
Translation.addTranslation("Block of Knightslime", {
	de: "Knightslime-Block",
	id: "Blok Knightslime",
	it: "Blocco di slime del cavaliere",
	ja: "ナイトスライムブロック",
	ko: "기사슬라임 블록",
	pl: "Blok rycerskiego szlamu",
	pt: "Bloco de Cavaleiro-Slime",
	ru: "Блок рыцарской слизи",
	sv: "Riddarslemsblock",
	uk: "Блок лицарського слизу",
	zh: "骑士史莱姆块"
});
Translation.addTranslation("Block of Cobalt", {
	de: "Kobaltblock",
	id: "Block Kobalt",
	it: "Blocco di cobalto",
	ja: "コバルトブロック",
	ko: "코발트 블록",
	pl: "Blok kobaltu",
	pt: "Bloco de Cobalto",
	ru: "Кобальтовый блок",
	sv: "Koboltblock",
	uk: "Кобальтовий блок",
	zh: "钴块"
});
Translation.addTranslation("Block of Ardite", {
	ru: "Ардитовый блок"
});
Translation.addTranslation("Block of Manyullyn", {
	de: "Block von Manyullyn",
	id: "Blok Manyullyn",
	it: "Blocco di Manyullyn",
	ja: "マンユリンブロック",
	ko: "마뉼린",
	pl: "Block Manyullynu",
	pt: "Bloco de Manyullyn",
	ru: "Блок маньюлина",
	sv: "Manyullynblock",
	uk: "Маньюліновий блок",
	zh: "玛玉灵块"
});
Translation.addTranslation("Block of Pig Iron", {
	de: "Roheisenblock",
	id: "Blok Besi Gubal",
	it: "Blocco di ferro di maiale",
	ja: "銑鉄ブロック",
	ko: "돼지 선철 블록",
	pl: "Blok świńskiego żelaza",
	pt: "Bloco de Ferro-Porco",
	ru: "Блок свиного железа",
	sv: "Grisjärnsblock",
	uk: "Блок свинячого заліза",
	zh: "生铁块"
});
Translation.addTranslation("Block of Aluminum Brass", {
	ru: "Блок алюминиевой бронзы"
});
Translation.addTranslation("Knightslime Ingot", {
	de: "Knightslime-Barren",
	id: "Batangan Knightslime",
	it: "Lingotto di slime del cavaliere",
	ja: "ナイトスライムインゴット",
	ko: "기사슬라임 주괴",
	pl: "Sztabka rycerskiego szlamu",
	pt: "Lingote de Cavaleiro-Slime",
	ru: "Слиток рыцарской слизи",
	sv: "Riddarslemstacka",
	uk: "Злиток лицарського слизу",
	zh: "骑士史莱姆锭"
});
Translation.addTranslation("Cobalt Ingot", {
	de: "Kobaltbarren",
	id: "Batangan Kobalt",
	it: "Lingotto di cobalto",
	ja: "コバルトインゴット",
	ko: "코발트 주괴",
	pl: "Sztabka kobaltu",
	pt: "Lingote de Cobalto",
	ru: "Кобальтовый слиток",
	sv: "Kobolttacka",
	uk: "Кобальтовий злиток",
	zh: "钴锭"
});
Translation.addTranslation("Ardite Ingot", {
	ru: "Ардитовый слиток"
});
Translation.addTranslation("Manyullyn Ingot", {
	de: "Manyullyn-Barren",
	id: "Batangan Manyullyn",
	it: "Lingotto di Manyullyn",
	ja: "マンユリンインゴット",
	ko: "마뉼린 주괴",
	pl: "Sztabka Manyullynu",
	pt: "Lingote de Manyullyn",
	ru: "Слиток маньюлина",
	sv: "Manyullyntacka",
	uk: "Маньюліновий злиток",
	zh: "玛玉灵锭"
});
Translation.addTranslation("Pig Iron Ingot", {
	de: "Roheisenbarren",
	id: "Batangan Besi Gubal",
	it: "Lingotto Di ferro di maiale",
	ja: "銑鉄インゴット",
	ko: "돼지 선철 주괴",
	pl: "Sztabka świńskiego żelaza",
	pt: "Lingote de Ferro-Porco",
	ru: "Слиток свиного железа",
	sv: "Grisjärnstacka",
	uk: "Злиток свинячого заліза",
	zh: "生铁锭"
});
Translation.addTranslation("Aluminum Brass Ingot", {
	ru: "Слиток алюминиевой бронзы"
});
Translation.addTranslation("Knightslime Nugget", {
	de: "Knightslime-Nugget",
	id: "Nugget Knightslime",
	it: "Pepita di slime del cavaliere",
	ja: "ナイトスライム塊",
	ko: "기사슬라임 조각",
	pl: "Bryłka rycerskiego szlamu",
	pt: "Pepita de Cavaleiro-Slime",
	ru: "Самородок рыцарской слизи",
	sv: "Riddarslemsklimp",
	uk: "Шматочок лицарського слизу",
	zh: "骑士史莱姆粒"
});
Translation.addTranslation("Cobalt Nugget", {
	de: "Kobalt-Nugget",
	id: "Nugget Kobalt",
	it: "Pepita di cobalto",
	ja: "コバルト塊", ko: "코발트 조각",
	pl: "Bryłka kobaltu",
	pt: "Pepita de Cobalto",
	ru: "Кобальтовый самородок",
	sv: "Koboltklimp",
	uk: "Кобальтовий самородок",
	zh: "钴粒"
});
Translation.addTranslation("Ardite Nugget", {
	ru: "Ардитовый самородок"
});
Translation.addTranslation("Manyullyn Nugget", {
	de: "Manyullyn-Nugget",
	id: "Nugget Manyullyn",
	it: "Pepita di Manyullyn",
	ja: "マンユリン塊", ko: "마뉼린 조각",
	pl: "Bryłka Manyullynu",
	pt: "Pepita de Manyullyn",
	ru: "Маньюлиновый самородок",
	sv: "Manyullynklimp",
	uk: "Шматочок маньюліну",
	zh: "玛玉灵粒"
});
Translation.addTranslation("Pig Iron Nugget", {
	de: "Roheisennugget",
	id: "Nugget Besi Gubal",
	it: "Pepita di ferro di maiale",
	ja: "銑鉄塊",
	ko: "돼지 선철 조각",
	pl: "Bryłka świńskiego żelaza",
	pt: "Pepita de Ferro-Porco",
	ru: "Самородок свиного железа",
	sv: "Grisjärnsklimp",
	uk: "Шматочок свинячого заліза",
	zh: "生铁粒"
});
Translation.addTranslation("Aluminum Brass Nugget", {
	ru: "Самородок алюминиевой бронзы"
});
Translation.addTranslation("Paper Stack", {
	ru: "Стопка бумаги"
});
Translation.addTranslation("Lavawood", {
	de: "Lavaholz",
	id: "Kayu Lava",
	it: "Legno di lava",
	ja: "ラヴァウッド", ko: "용암나무",
	pl: "Lawowe drewno",
	pt: "Lavawood",
	ru: "Лавадерево",
	sv: "Lavaträ",
	uk: "Лаводерево",
	zh: "熔岩木"
});
Translation.addTranslation("Blue Slime", {
	ru: "Синяя слизь"
});
Translation.addTranslation("Purple Slime", {
	ru: "Фиолетовая слизь"
});
Translation.addTranslation("Slimy Mud", {
	ru: "Склизкая грязь"
});
Translation.addTranslation("Blue Slimy Mud", {
	ru: "Синяя склизкая грязь"
});
Translation.addTranslation("Magma Slimy Mud", {
	ru: "Склизкая грязь из магмы"
});
Translation.addTranslation("Slime Crystal", {
	ru: "Слизневый кристалл"
});
Translation.addTranslation("Blue Slime Crystal", {
	ru: "Синий слизневый кристалл"
});
Translation.addTranslation("Slime Crystal", {
	ru: "Слизневый кристалл из магмы"
});
Translation.addTranslation("Clear Glass", {
	de: "Klares Glas",
	id: "Kaca Bersih",
	it: "Vetro limpido",
	ja: "クリアガラス", ko: "투명한 유리",
	pl: "Czyste szkło",
	pt: "Vidro Claro",
	ru: "Прозрачное стекло",
	sv: "Genomskinligt glas",
	uk: "Чисте скло",
	zh: "通透玻璃"
});
Translation.addTranslation("Seared Glass", {
	de: "Seared Glass",
	id: "Seared Glass",
	it: "Vetro scottato",
	ja: "焼成ガラス", ko: "그을린 유리",
	pl: "Szkło hartowane",
	pt: "Vidro Carbonizado",
	ru: "Обожжённое стекло",
	sv: "Bränt glas",
	uk: "Обпалене скло",
	zh: "焦黑玻璃"
});

///
// PATTERNS
///

Translation.addTranslation("Pattern", {
	de: "Muster",
	id: "Pattern",
	it: "Modello",
	ja: "パターン", ko: "나무 틀",
	pl: "Szablon",
	pt: "Moldes", ru: "Шаблон",
	sv: "Mönster",
	uk: "Шаблон", zh: "模具"
});
Translation.addTranslation("TConstuct: Sand Cast", {
	ru: "TConstuct: Песочные формы"
});
Translation.addTranslation("Blank Sand Cast", {
	de: "Leerer Sandguss",
	id: "Tuangan Pasir Kosong",
	it: "Stampo di sabbia vuoto",
	ja: "空の砂型",
	ko: "비어있는 모래 금형",
	pl: "Pusta piaskowa forma",
	pt: "Molde de Areia Vazio",
	ru: "Песочная заготовка",
	sv: "Blank sandavgjutning",
	uk: "Пуста піщана форма",
	zh: "空白沙子铸模"
});
Translation.addTranslation("Pickaxe Head Sand Cast", {
	ru: "Песочная форма для наконечника кирки"
});
Translation.addTranslation("Shovel Head Sand Cast", {
	ru: "Песочная форма для наконечника лопаты"
});
Translation.addTranslation("Axe Head Sand Cast", {
	ru: "Песочная форма для наконечника топора"
});
Translation.addTranslation("Broad Axe Head Sand Cast", {
	de: "Breiter Axtkopf im Sandguss",
	id: "Tuangan Kepala Kapak Lebar Pasir",
	it: "Stampo di sabbia per teste di ascia grande",
	ja: "大斧頭の砂型",
	ko: "넓은면 도끼 머리 모래 금형",
	pl: "Piaskowa forma szerokiej głowicy siekiery",
	pt: "Molde de Areia para Cabeça de Machado Grande",
	ru: "Песочная форма для наконечника секиры",
	sv: "Sandavgjutning för bredyxhuvud",
	uk: "Піщана форма для наконечника сокири-колуна",
	zh: "板斧刃沙子铸模"
});
Translation.addTranslation("Sword Blade Head Sand Cast", {
	ru: "Песочная форма для лезвия меча"
});
Translation.addTranslation("Hammer Head Sand Cast", {
	de: "Hammerkopf im Sandguss",
	id: "Tuangan Kepala Palu Pasir",
	it: "Stampo di sabbia per testa di martello",
	ja: "ハンマー頭の砂型",
	ko: "망치 머리 모래 금형",
	pl: "Piaskowa forma głowicy młota",
	pt: "Molde de Areia para Cabeça de Martelo",
	ru: "Песочная форма для наконечника молота",
	sv: "Sandavgjutning för hammarhuvud",
	uk: "Піщана форма для наконечника молота",
	zh: "锤头沙子铸模"
});
Translation.addTranslation("Excavator Head Sand Cast", {
	ru: "Песочная форма для наконечника землекопа"
});
Translation.addTranslation("Tool Rod Sand Cast", {
	ru: "Песочная форма для рукоятки инструмента"
});
Translation.addTranslation("Tough Tool Rod Sand Cast", {
	ru: "Песочная форма для крепкой рукоятки инструмента"
});
Translation.addTranslation("Binding Sand Cast", {
	ru: "Песочная форма для связки"
});
Translation.addTranslation("Tough Binding Sand Cast", {
	ru: "Песочная форма для крепкой связки"
});
Translation.addTranslation("Wide Guard Sand Cast", {
	ru: "Песочная форма для защитного слоя"
});
Translation.addTranslation("Large Plate Sand Cast", {
	de: "Sandguss für große Platten",
	id: "Tuangan Piringan Besar Pasir",
	it: "Stampo di sabbia per piastre grande",
	ja: "大板の砂型",
	ko: "큰 플레이트 모래 금형",
	pl: "Piaskowa forma dużej płyty",
	pt: "Molde de Areia para Placa Larga ",
	ru: "Песочная форма для большой пластины",
	sv: "Sandavgjutning för stor plåt",
	uk: "Піщана форма для великої пластини",
	zh: "大板沙子铸模"
});
Translation.addTranslation("Ingot Sand Cast", {
	de: "Barren-Sandguss",
	id: "Tuangan Batangan Pasir",
	it: "Stampo di sabbia per lingotti",
	ja: "インゴットの砂型",
	ko: "주괴 모래 금형",
	pl: "Piaskowa forma sztabki",
	pt: "Molde de Areia para Lingotes",
	ru: "Песочная форма для слитка",
	sv: "Sandavgjutning för tacka",
	uk: "Піщана форма для злитка",
	zh: "锭沙子铸模"
});
Translation.addTranslation("Nugget Sand Cast", {
	de: "Nugget-Sandguss",
	id: "Tuangan Nugget Pasir",
	it: "Stampo di sabbia per pepite",
	ja: "塊の砂型",
	ko: "조각 모래 금형",
	pl: "Piaskowa forma bryłki",
	pt: "Molde de Areia para Pepitas",
	ru: "Песочная форма для самородка",
	sv: "Sandavgjutning för klimp",
	uk: "Піщана форма для шматочка",
	zh: "粒沙子铸模"
});
Translation.addTranslation("Gem Sand Cast", {
	de: "Edelstein-Sandguss",
	id: "Tuangan Permata Pasir",
	it: "Stampo di sabbia per gemme",
	ja: "宝石の砂型",
	ko: "보석 모래 금형",
	pl: "Piaskowa forma klejnotu",
	pt: "Molde de Areia para Gemas",
	ru: "Песочная форма для самоцвета",
	sv: "Sandavgjutning för ädelsten",
	uk: "Піщана форма для самоцвіту",
	zh: "宝石沙子铸模"
});
Translation.addTranslation("Plate Sand Cast", {
	ru: "Песочная форма для пластины"
});
Translation.addTranslation("Gear Sand Cast", {
	de: "Zahnrad-Sandguss",
	id: "Tuangan Gir Pasir",
	it: "Stampo di sabbia per ingranaggi",
	ja: "歯車の砂型",
	ko: "톱니 모래 금형",
	pl: "Piaskowa forma koła zębatego",
	pt: "Molde de Areia para Engrenagem",
	ru: "Песочная форма для шестерни",
	sv: "Sandavgjutning för kugghjul",
	uk: "Піщана форма для шестірні",
	zh: "齿轮沙子铸模"
});
Translation.addTranslation("TConstuct: Clay Cast", {
	ru: "TConstuct: Глиняные формы"
});
Translation.addTranslation("Pickaxe Head Clay Cast", {
	ru: "Глиняная форма для наконечника кирки"
});
Translation.addTranslation("Shovel Head Clay Cast", {
	ru: "Глиняная форма для наконечника лопаты"
});
Translation.addTranslation("Axe Head Clay Cast", {
	ru: "Глиняная форма для наконечника топора"
});
Translation.addTranslation("Broad Axe Head Clay Cast", {
	ru: "Глиняная форма для наконечника секиры"
});
Translation.addTranslation("Sword Blade Head Clay Cast", {
	ru: "Глиняная форма для лезвия меча"
});
Translation.addTranslation("Hammer Head Clay Cast", {
	ru: "Глиняная форма для наконечника молота"
});
Translation.addTranslation("Excavator Head Clay Cast", {
	ru: "Глиняная форма для наконечника землекопа"
});
Translation.addTranslation("Tool Rod Clay Cast", {
	ru: "Глиняная форма для рукоятки инструмента"
});
Translation.addTranslation("Tough Tool Rod Clay Cast", {
	ru: "Глиняная форма для крепкой рукоятки инструмента"
});
Translation.addTranslation("Binding Clay Cast", {
	ru: "Глиняная форма для связки"
});
Translation.addTranslation("Tough Binding Clay Cast", {
	ru: "Глиняная форма для крепкой связки"
});
Translation.addTranslation("Wide Guard Clay Cast", {
	ru: "Глиняная форма для защитного слоя"
});
Translation.addTranslation("Large Plate Clay Cast", {
	ru: "Глиняная форма для большой пластины"
});
Translation.addTranslation("Ingot Clay Cast", {
	ru: "Глиняная форма для слитка"
});
Translation.addTranslation("Nugget Clay Cast", {
	ru: "Глиняная форма для самородка"
});
Translation.addTranslation("Gem Clay Cast", {
	ru: "Глиняная форма для самоцвета"
});
Translation.addTranslation("Plate Clay Cast", {
	ru: "Глиняная форма для пластины"
});
Translation.addTranslation("Gear Clay Cast", {
	ru: "Глиняная форма для шестерни"
});
Translation.addTranslation("TConstuct: Cast", {
	ru: "TConstuct: Литейные формы"
});
Translation.addTranslation("Pickaxe Head Cast", {
	ru: "Форма для наконечника кирки"
});
Translation.addTranslation("Shovel Head Cast", {
	ru: "Форма для наконечника лопаты"
});
Translation.addTranslation("Axe Head Cast", {
	ru: "Форма для наконечника топора"
});
Translation.addTranslation("Broad Axe Head Cast", {
	ru: "Форма для наконечника секиры"
});
Translation.addTranslation("Sword Blade Head Cast", {
	ru: "Форма для лезвия меча"
});
Translation.addTranslation("Hammer Head Cast", {
	ru: "Форма для наконечника молота"
});
Translation.addTranslation("Excavator Head Cast", {
	ru: "Форма для наконечника землекопа"
});
Translation.addTranslation("Tool Rod Cast", {
	ru: "Форма для рукоятки инструмента"
});
Translation.addTranslation("Tough Tool Rod Cast", {
	ru: "Форма для крепкой рукоятки инструмента"
});
Translation.addTranslation("Binding Cast", {
	ru: "Форма для связки"
});
Translation.addTranslation("Tough Binding Cast", {
	ru: "Форма для крепкой связки"
});
Translation.addTranslation("Wide Guard Cast", {
	ru: "Форма для защитного слоя"
});
Translation.addTranslation("Large Plate Cast", {
	ru: "Форма для большой пластины"
});
Translation.addTranslation("Ingot Cast", {
	ru: "Форма для слитка"
});
Translation.addTranslation("Nugget Cast", {
	ru: "Форма для самородка"
});
Translation.addTranslation("Gem Cast", {
	ru: "Форма для самоцвета"
});
Translation.addTranslation("Plate Cast", {
	ru: "Форма для пластины"
});
Translation.addTranslation("Gear Cast", {
	ru: "Форма для шестерни"
});

///
// TABLES
///

Translation.addTranslation("Part Builder", {
	de: "Teilebauer",
	id: "Part Builder",
	it: "Costruttore di parti",
	ja: "部品作成台", ko: "부품 제작대",
	pl: "Konstruktor części",
	pt: "Montador de Peças",
	ru: "Поэтапный сборщик",
	sv: "Delbyggare",
	uk: "Збирач деталей",
	zh: "部件制造台"
});
Translation.addTranslation("Here you can craft tool parts to fulfill your tinkering fantasies.", {
	de: "Hier können Sie Werkzeugteile herstellen, um Ihre Bastelfantasien zu erfüllen.",
	id: "Here you can craft tool parts to fulfill your tinkering fantasies.",
	it: "Qui puoi creare parti di utensili per soddisfare le tue fantasie di armeggiatore.",
	ja: "あなたのティンカーとしての夢を叶える道具の部品を作れます。",
	ko: "상상했었던 모든 도구 부품을 제작할 수 있습니다.",
	pl: "Tutaj możesz wytwarzać części narzędzi dla zaspokojenia swoich majsterkowiczowskich fantazji.",
	pt: "Aqui você pode criar peças de ferramentas para realizar suas fantasias tinkers.",
	ru: "Здесь вы можете создавать части инструментов, для воплощения своих литейных фантазий.",
	sv: "Här kan du tillverka verktygsdelar för att ge utlopp för din kreativitet.",
	uk: "Тут ти можеш створювати інструментні деталі для справдження своїх інженерних фантазій.",
	zh: "在这里你能制作工具部件，从而实现你的工匠之梦。"
});
Translation.addTranslation("To craft a part simply put a blank pattern into the left slot and select the part you want. The remaining slot holds the material you want to craft your part out of.", {
	de: "Um ein Teil herzustellen, legen Sie einfach ein leeres Muster in den linken Schlitz und wählen Sie das gewünschte Teil aus. Der verbleibende Schlitz hält das Material, aus dem Sie Ihr Teil herstellen möchten.",
	id: "To craft a part simply put a blank pattern into the left slot and select the part you want. The remaining slot holds the material you want to craft your part out of.",
	it: "Per creare una parte basta mettere un modello vuoto nello slot di sinistra e selezionare la parte che vuoi. Il restante slot contiene il materiale con cui vuoi creare la tua parte.",
	ja: "部品を作るには、左のスロットに空のパターンを入れて作成したい部品を選択します。残りのスロットには部品を作るための素材を置きます。",
	ko: "왼쪽 슬롯에 빈 틀을 넣고, 원하는 부품을 선택하면 부품이 제작됩니다. 나머지 슬롯에 도구의 재료를 넣어야 합니다.",
	pl: "Aby wytworzyć część po prostu umieść pusty szablon do slotu po lewej i wybierz część, jakiej potrzebujesz. Drugi slot przechowuje materiał, z którego ma być wykonana część.",
	pt: "Para criar uma peça basta colocar um molde vazio no slot esquerdo e selecionar a peça desejada. O slot restante detém o material do qual você quer confeccionar sua peça.",
	ru: "Чтобы изготовить часть, положите шаблон в левый слот и выберите нужную часть. В оставшийся слот помещается материал, из которого вы хотите изготовить часть.",
	sv: "För att tillverka en del lägger du ett blankt mönster i platsen till vänster och väljer den del du vill ha. Den återstående platsen är materialet du vill tillverka din del utav.",
	uk: "Щоб створити деталь, просто розмістіть пустий шаблон у лівому слоті й обери бажану деталь. В инший слот покладіть матеріал, з якого ви хочете створити деталь.",
	zh: "要制作一个工具部件，你需要将模具放入左侧的空槽，并选择目标部件类型。接着在右侧的槽中放入材料，即可制成对应材料的对应部件。"
});
Translation.addTranslation("Title", {
	ru: "Наименование"
});
Translation.addTranslation("Description", {
	ru: "Описание"
});
Translation.addTranslation("Head", {
	de: "Kopf", id: "Head", it: "Testa", ja: "ヘッド部", ko: "머리",
	pl: "Głowica",
	pt: "Cabeça",
	ru: "Наконечник",
	sv: "Huvud",
	uk: "Наконечник",
	zh: "顶端"
});
Translation.addTranslation("Durability: ", {
	de: "Haltbarkeit: ",
	id: "Durability: ",
	it: "Durabilità: ",
	ja: "耐久度: ", ko: "내구도: ",
	pl: "Wytrzymałość:",
	pt: "Durabilidade: ",
	ru: "Прочность: ",
	sv: "Hållbarhet: ",
	uk: "Міцність: ",
	zh: "耐久度："
});
Translation.addTranslation("Mining Tier: ", {
	de: "Erntestufe: ",
	id: "Harvest Tier: ",
	it: "Livello di raccolta: ",
	ja: "採掘ランク: ",
	ko: "채굴 등급: ",
	pt: "Nivel de Coleta: ",
	ru: "Уровень копания: ",
	sv: "Grävnivå: ",
	uk: "Рівень добування: ",
	zh: "采掘等级："
});
Translation.addTranslation("Mining Speed: ", {
	de: "Mining-Geschw.: ",
	id: "Mining Speed: ",
	it: "Velocità di scavo: ",
	ja: "採掘速度: ",
	ko: "채굴 속도: ",
	pl: "Szybkość kopania:",
	pt: "Velocidade de Mineração: ",
	ru: "Скорость копания: ",
	sv: "Grävhastighet: ",
	uk: "Швидкість добування: ",
	zh: "采掘速度："
});
Translation.addTranslation("Melee Damage: ", {
	de: "Angr.-Schaden: ",
	id: "Attack Damage: ",
	it: "Danno d'attacco: ",
	ja: "攻撃力: ",
	ko: "공격 피해: ",
	pl: "Obrażenia:",
	pt: "Dano de Ataque: ",
	ru: "Урон: ",
	sv: "Attackskada: ",
	uk: "Шкода від атаки: ",
	zh: "攻击伤害："
});
Translation.addTranslation("Handle", {
	de: "Handle", id: "Handle",
	it: "Gestione",
	ja: "持ち手", ko: "손잡이", pl: "Trzon",
	pt: "Manuseio",
	ru: "Рукоять",
	sv: "Skaft",
	uk: "Стержень",
	zh: "手柄"
});
Translation.addTranslation("Multiplier: ", {
	ru: "Множитель: "
});
Translation.addTranslation("Durability: ", {
	de: "Haltbarkeit: ",
	id: "Durability: ",
	it: "Durabilità: ",
	ja: "耐久度: ", ko: "내구도: ",
	pl: "Wytrzymałość:",
	pt: "Durabilidade: ",
	ru: "Прочность: ",
	sv: "Hållbarhet: ",
	uk: "Міцність: ",
	zh: "耐久度："
});
Translation.addTranslation("Extra", {
	de: "Extra", id: "Extra", it: "Extra", ja: "締め具",
	ko: "추가적인 부품",
	pl: "Dodatek",
	pt: "Extra",
	ru: "Дополнительно",
	sv: "Extra",
	uk: "Додатково",
	zh: "附件"
});
Translation.addTranslation("Material value: %s", {
	de: "Materialwert: %s",
	id: "Material value: %s",
	it: "Valore materiale: %s",
	ja: "素材値: %s",
	ko: "재료의 양: %s",
	pl: "Ilość materiału: %s",
	pt: "Valor do Material: %s",
	ru: "Кол-во материала: %s",
	sv: "Materialvärde: %s",
	uk: "Вартість матеріалу: %s",
	zh: "材料值：%s"
});
Translation.addTranslation("Tool Forge", {
	de: "Werkzeugschmiede",
	id: "Tool Forge",
	it: "Fucina degli strumenti",
	ja: "道具鋳造工", ko: "도구 대장간",
	pl: "Mistrz majsterkowania",
	pt: "Forja de ferramentas",
	ru: "Кузня для инструментов",
	sv: "Verktygssmedja",
	uk: "Інструментна кузня",
	zh: "工具锻造"
});
Translation.addTranslation("Repair & Modify", {
	de: "Reparieren & Modifizieren",
	id: "Repair & Modify",
	it: "Ripara e modifica",
	ja: "修理と変更",
	ko: "수리 & 수식어",
	pl: "Napraw i modyfikuj",
	pt: "Repare & Modifique",
	ru: "Починка и Модификация",
	sv: "Reparera och modifiera",
	uk: "Ремонт і модифікація",
	zh: "修复与强化"
});
Translation.addTranslation("Modifiers", {
	de: "Modifikatoren",
	id: "Modifiers",
	it: "Modificatori",
	ja: "改造", ko: "수식어",
	pl: "Modyfikacje",
	pt: "Modificador",
	ru: "Модификаторы",
	sv: "Modifierare",
	uk: "Модифікатори",
	zh: "强化物"
});
Translation.addTranslation("Modifiers: ", {
	de: "Modifikatoren: ",
	id: "Modifiers: ",
	it: "Modificatori: ",
	ja: "改造: ", ko: "수식어: ",
	pl: "Modyfikacje: ",
	pt: "Modificador: ",
	ru: "Модификаторы: ",
	sv: "Modifierare: ",
	uk: "Модифікатори: ",
	zh: "强化物："
});
Translation.addTranslation("Unknown slot type %s", {
	de: "Unbekannter Slot-Typ %s",
	id: "Unknown slot type %s",
	it: "Tipo di slot %s sconosciuto",
	ja: "未知のスロットタイプです: %s",
	ko: "'%s'은(는) 알 수 없는 종류의 슬롯입니다",
	pt: "Tipo de slot desconhecido %s",
	ru: "Unknown slot type %s",
	sv: "%s är en okänd platstyp",
	uk: "Невідомий тип слоту %s",
	zh: "未知槽位类型%s"
});
Translation.addTranslation("Tinker Station", {
	de: "Bastelstation",
	id: "Tinker Station",
	it: "Stazione dell'armeggiatore",
	ja: "ティンカー台",
	ko: "대장장이 작업대",
	pl: "Stacja majsterkowania",
	pt: "Estação Tinker",
	ru: "Литейная станция",
	sv: "Tinkerstation",
	uk: "Інженерна станція",
	zh: "工匠站"
});
Translation.addTranslation("Level: ", {
	ru: "Уровень: "
});
Translation.addTranslation("XP: ", {
	ru: "Опыт: "
});

///
// TOOLS
///

Translation.addTranslation("Pickaxe Head", {
	ru: "Наконечник кирки"
});
Translation.addTranslation("Shovel Head", {
	ru: "Наконечник лопаты"
});
Translation.addTranslation("Axe Head", {
	ru: "Наконечник топора"
});
Translation.addTranslation("Broad Axe Head", {
	ru: "Наконечник секиры"
});
Translation.addTranslation("Sword Blade", {
	ru: "Лезвие меча"
});
Translation.addTranslation("Hammer Head", {
	ru: "Наконечник молота"
});
Translation.addTranslation("Excavator Head", {
	ru: "Наконечник землекопа"
});
Translation.addTranslation("Tool Rod", {
	ru: "Рукоятка инструмента"
});
Translation.addTranslation("Tough Tool Rod", {
	ru: "Крепкая рукоятка инструмента"
});
Translation.addTranslation("Binding", {
	ru: "Связка"
});
Translation.addTranslation("Tough Binding", {
	ru: "Крепкая связка"
});
Translation.addTranslation("Wide Guard", {
	ru: "Защитный слой"
});
Translation.addTranslation("Large Plate", {
	ru: "Большая пластина"
});
Translation.addTranslation("Broken %s", {
	ru: "%s (разрушено)"
});
Translation.addTranslation("Pickaxe", {
	de: "Spitzhacke",
	id: "Pickaxe",
	it: "Piccone",
	ja: "ツルハシ", ko: "곡괭이", pl: "Kilof",
	pt: "Picareta",
	ru: "Кирка", sv: "Hacka", uk: "Кайло", zh: "镐"
});
Translation.addTranslation("The Pickaxe is a precise mining tool. It is effective on stone and ores. It breaks blocks, OK?", {
	de: "Die Spitzhacke ist ein präzises Bergbauwerkzeug. Sie ist effektiv bei Steinen und Erzen. Sie bricht Blöcke, OK?",
	id: "The Pickaxe is a precise mining tool. It is effective on stone and ores. It breaks blocks, OK?",
	it: "Il piccone è un preciso strumento da miniera. È efficace sulla pietra e sui minerali. Rompe i blocchi, ok?",
	ja: "ツルハシは精密な採掘道具です。石や鉱石に効果的です。そのブロックを壊しても大丈夫？",
	ko: "곡괭이는 정밀한 채굴 도구입니다. 돌과 광석을 효과적으로 채굴할 수 있습니다. 간단히 말하면, 블록을 부수는 도구입니다.",
	pl: "Kilof jest precyzyjnym narzędziem do kopania. Działa dobrze na skały i rudy. Kilof kopie, OK?",
	pt: "A picareta é uma ferramenta de mineração. Ela é muito efetiva para minerar pedras e minérios. Isso quebra blocos, Certo?",
	ru: "Кирка самый точный шахтерский инструмент. Очень эффективна для добычи камня и руд. Она ломает блоки, ясно?",
	sv: "Hackan är ett ensidigt grävverktyg. Den är effektiv på sten och malm. Den bryter block, hajar du?",
	uk: "Кайло є точним шахтарським знаряддям. Воно ефективне для добування блоків і руд. Воно ламає блоки, ясно?",
	zh: "镐是一种精准型采矿工具，能够高效挖掘石头、矿石等石类方块。挖方块用的，懂？"
});
Translation.addTranslation("Shovel", {
	ru: "Лопата"
});
Translation.addTranslation("The Shovel digs up dirt. It is effective on dirt, sand, gravel, and snow. Just don't dig your own grave!", {
	ru: "Лопата нужна для копания земли. Очень эффективна на земле, песке, гравии и снегу. Просто не выкапывай собственную могилу!"
});
Translation.addTranslation("Hatchet", {
	ru: "Секира"
});
Translation.addTranslation("The Hatchet chops up wood and makes short work of leaves. It also makes for a passable weapon. Chop chop!", {
	ru: "Секира срубает древесину и быстро справляется с листвой. Это также делает ее неплохим оружием. Боньк, боньк!"
});
Translation.addTranslation("Mattock", {
	de: "Mattock",
	id: "Mattock",
	it: "Mattock",
	ja: "マトック", ko: "매톡", pl: "Motyka",
	pt: "Chibanca",
	ru: "Киркомотыга",
	sv: "Jordhacka",
	uk: "Кайломотика",
	zh: "鹤嘴锄"
});
Translation.addTranslation("The Cutter Mattock is a versatile farming tool. It is effective on wood, dirt, and plants. It also packs quite a punch.", {
	ru: "Киркомотыга прекрасный инструмент для сельского хозяйства. Очень эффективна на древесине, земле и растениях. Она также наносит неплохой урон."
});
Translation.addTranslation("Broad Sword", {
	ru: "Секира"
});
Translation.addTranslation("The Broad Sword is a universal weapon. Sweep attacks keep enemy hordes at bay. Also good against cobwebs!", {
	ru: "Секира универсальное оружие. Сметающие все на своем пути атаки сдерживают врагов на расстоянии. Также неплоха против паутины!"
});
Translation.addTranslation("Hammer", {
	ru: "Молот"
});
Translation.addTranslation("The Hammer is a broad mining tool. It harvests blocks in a wide range. Also effective against undead.", {
	ru: "Молот используется для раскапывания шахт. Добывает блоки в большом радиусе. Также эффективен против нежити."
});
Translation.addTranslation("Excavator", {
	de: "Bagger",
	id: "Excavator",
	it: "Scavatore",
	ja: "エクスカベーター",
	ko: "야전삽",
	pl: "Duża łopata",
	pt: "Escavadora",
	ru: "Землекоп",
	sv: "Utgrävare",
	uk: "Землечерпалка",
	zh: "开掘铲"
});
Translation.addTranslation("The Excavator is a broad digging tool. It digs up large areas of soil and snow in a wide range. Terraforming!", {
	de: "Der Bagger ist ein breites Grabwerkzeug. Er gräbt große Erd- und Schneeflächen in einem weiten Bereich aus. Terraforming!",
	id: "The Excavator is a broad digging tool. It digs up large areas of soil and snow in a wide range. Terraforming!",
	it: "L'escavatore è un grande strumento di scavo. Scava grandi aree di terreno e neve in un ampio raggio. Terraformazione!",
	ja: "エクスカベーターは大型の掘り道具です。広範囲の土や雪を一度に掘り起こせます。テラフォーミング！",
	ko: "야전삽은 광범위한 굴착 도구입니다. 넓은 범위의 흙과 눈을 파낼 수 있습니다. 지형을 평탄화하세요!",
	pl: "Duża łopata jest dużym narzędziem do kopania w ziemi. Niszczy dużą ilość gleby i śniegu na raz. Terraformacja!",
	pt: "A Escavadora é uma ferramenta grande muito útil para a escavação. Ele escava grandes áreas de solo e neve em larga escala. Terraformando!",
	ru: "Землекоп используется для раскапывания кратеров. Выкапывает участки земли и снега в большом радиусе. Терраформирование!",
	sv: "Utgrävaren är ett mångsidigt grävverktyg. Den gräver upp större områden av jord och snö i ett brett område. Terraformering!",
	uk: "Землечерпалка є широким копальним знаряддям. Вона викопує велику площу ґрунту й снігу в широкому радіусі. Тераформування!",
	zh: "开掘铲是一种范围型挖掘工具，能单次挖掘一整片区域内的泥土和雪。改天换地！"
});
Translation.addTranslation("Tree chopping in progress...", {
	ru: "Продолжается измельчение дерева..."
});
Translation.addTranslation("Lumber Axe", {
	ru: "Топор лесника"
});
Translation.addTranslation("The Lumber Axe is a broad chopping tool. It can fell entire trees in one swoop or gather wood in a wide range. Timber!", {
	ru: "Топор лесника используется для измельчения леса. Он может добыть сразу все дерево или собрать древесину в большом радиусе. Лесоповал!"
});

///
// TOOLS -> MATERIALS
///

Translation.addTranslation("Wooden %s", {
	ru: "%s из древесины"
});
Translation.addTranslation("Wooden", {
	ru: "Древесина"
});
Translation.addTranslation("Stone %s", {
	ru: "%s из камня"
});
Translation.addTranslation("Stone", {
	ru: "Камень"
});
Translation.addTranslation("Flint %s", {
	ru: "%s из кремния"
});
Translation.addTranslation("Flint", {
	ru: "Кремень"
});
Translation.addTranslation("Cactus %s", {
	ru: "%s из кактусов"
});
Translation.addTranslation("Cactus", {
	ru: "Кактус"
});
Translation.addTranslation("Obsidian %s", {
	ru: "%s из обсидиана"
});
Translation.addTranslation("Obsidian", {
	ru: "Обсидиан"
});
Translation.addTranslation("Prismarine %s", {
	ru: "%s из призмарина"
});
Translation.addTranslation("Prismarine", {
	ru: "Призмарин"
});
Translation.addTranslation("Netherrack %s", {
	ru: "%s из незерака"
});
Translation.addTranslation("Netherrack", {
	ru: "Незерак"
});
Translation.addTranslation("End Stone %s", {
	ru: "%s из эндерняка"
});
Translation.addTranslation("End Stone", {
	ru: "Эндерняк"
});
Translation.addTranslation("Bone %s", {
	ru: "%s из костей"
});
Translation.addTranslation("Bone", {
	ru: "Кость"
});
Translation.addTranslation("Paper %s", {
	ru: "%s из бумаги"
});
Translation.addTranslation("Paper", {
	ru: "Бумага"
});
Translation.addTranslation("Sponge %s", {
	ru: "%s из губок"
});
Translation.addTranslation("Sponge", {
	ru: "Губка"
});
Translation.addTranslation("Blazewood %s", {
	ru: "%s из огнедерева"
});
Translation.addTranslation("Blazewood", {
	de: "Blazewood",
	id: "Kayu Berapi",
	it: "Legno di blaze",
	ja: "ブレイズウッド",
	ko: "블레이즈나무",
	pl: "Płomienne drewno",
	pt: "Blazewood",
	ru: "Огнедерево",
	sv: "Brännarträ",
	uk: "Пломенедерево",
	zh: "烈焰木"
});
Translation.addTranslation("Slime %s", {
	ru: "%s из слизи"
});
Translation.addTranslation("Slime", {
	ru: "Слизь"
});
Translation.addTranslation("Blue Slime %s", {
	ru: "%s из синей слизи"
});
Translation.addTranslation("Blue Slime", {
	ru: "Синяя слизь"
});
Translation.addTranslation("Magma Slime %s", {
	ru: "%s из магмовой слизи"
});
Translation.addTranslation("Magma Slime", {
	ru: "Магмовая слизь"
});
Translation.addTranslation("Knightslime %s", {
	ru: "%s из рыцарской слизи"
});
Translation.addTranslation("Knightslime", {
	ru: "Рыцарская слизь"
});
Translation.addTranslation("Iron %s", {
	ru: "%s из железа"
});
Translation.addTranslation("Iron", {
	ru: "Железо"
});
Translation.addTranslation("Pig Iron %s", {
	ru: "%s из свиного железа"
});
Translation.addTranslation("Pig Iron", {
	ru: "Свиное железо"
});
Translation.addTranslation("Cobalt %s", {
	ru: "%s из кобальта"
});
Translation.addTranslation("Cobalt", {
	ru: "Кобальт"
});
Translation.addTranslation("Ardite %s", {
	ru: "%s из ардита"
});
Translation.addTranslation("Ardite", {
	ru: "Ардит"
});
Translation.addTranslation("Manyullyn %s", {
	ru: "%s из маньюлина"
});
Translation.addTranslation("Manyullyn", {
	ru: "Маньюлин"
});
Translation.addTranslation("Copper %s", {
	ru: "%s из меди"
});
Translation.addTranslation("Copper", {
	ru: "Медь"
});
Translation.addTranslation("Bronze %s", {
	ru: "%s из бронзы"
});
Translation.addTranslation("Bronze", {
	ru: "Бронза"
});
Translation.addTranslation("Lead %s", {
	ru: "%s из свинца"
});
Translation.addTranslation("Lead", {
	ru: "Свинец"
});
Translation.addTranslation("Silver %s", {
	ru: "%s из серебра"
});
Translation.addTranslation("Silver", {
	ru: "Серебро"
});
Translation.addTranslation("Electrum %s", {
	ru: "%s из электрума"
});
Translation.addTranslation("Electrum", {
	ru: "Электрум"
});
Translation.addTranslation("Steel %s", {
	ru: "%s из стали"
});
Translation.addTranslation("Steel", {
	ru: "Сталь"
});

///
// TOOLS -> MODIFIERS
///

Translation.addTranslation("Haste", {
	de: "Eile", id: "Haste",
	it: "Sollecitudine",
	ja: "加速",
	ko: "성급함",
	pl: "Pośpieszny",
	pt: "Pressa",
	ru: "Спешка",
	sv: "Skyndsamhet",
	uk: "Квапливість",
	zh: "急迫"
});
Translation.addTranslation("Luck", {
	de: "Glück", id: "Luck",
	it: "Fortuna",
	ja: "ラッキー", ko: "운",
	pl: "Szczęśliwy",
	pt: "Sorte", ru: "Удача", sv: "Tur",
	uk: "Удачливо",
	zh: "幸运"
});
Translation.addTranslation("Sharper", {
	de: "Schärfer",
	id: "Sharper",
	it: "Affilatezza",
	ja: "超鋭利",
	ko: "뾰족함",
	pl: "Ostrzejszy",
	pt: "Mais Afiado",
	ru: "Острота",
	sv: "Mer skärpa",
	uk: "Гострішість",
	zh: "锋利"
});
Translation.addTranslation("Diamond", {
	de: "Diamant",
	id: "Diamond",
	it: "Diamante",
	ja: "ダイヤモンド", ko: "다이아몬드",
	pl: "Diament",
	pt: "Diamante",
	ru: "Алмаз",
	sv: "Diamant",
	uk: "Діамант",
	zh: "钻石"
});
Translation.addTranslation("Emerald", {
	de: "Smaragd",
	id: "Emerald",
	it: "Smeraldo",
	ja: "エメラルド", ko: "에메랄드",
	pl: "Szmaragd",
	pt: "Esmeralda",
	ru: "Изумруд",
	sv: "Smaragd",
	uk: "Смарагд",
	zh: "绿宝石"
});
Translation.addTranslation("Silky Cloth", {
	de: "Seidiger Stoff",
	id: "Kain Sutra",
	it: "Panno di seta",
	ja: "シルキークロス",
	ko: "비단결 천",
	pl: "Jedwabista tkanina",
	pt: "Pano de Seda",
	ru: "Шёлковая ткань",
	sv: "Silkestyg",
	uk: "Шовкова тканина",
	zh: "丝绢"
});
Translation.addTranslation("Silky Jewel", {
	de: "Seidiges Juwel",
	id: "Permata Halus",
	it: "Gioiello di seta",
	ja: "シルキージュエル",
	ko: "비단결 보석",
	pl: "Jedwabisty klejnot",
	pt: "Jóia de Seda",
	ru: "Шёлковый самоцвет",
	sv: "Silkesjuvel",
	uk: "Шовковий самоцвіт",
	zh: "裹绸宝石"
});
Translation.addTranslation("Silky", {
	de: "Seidig", id: "Silky", it: "Setoso", ja: "シルキー", ko: "비단결",
	pl: "Jedwabisty",
	pt: "Sedoso",
	ru: "Шёлковый",
	sv: "Silkeslent",
	uk: "Шовковість",
	zh: "丝触"
});
Translation.addTranslation("Reinforcement", {
	ru: "Укрепитель"
});
Translation.addTranslation("Reinforced", {
	id: "Reinforced",
	it: "Rinforzato",
	ja: "補強", ko: "보강",
	pl: "Wzmocniony",
	pt: "Reforçado",
	ru: "Укрепление",
	sv: "Förstärkt",
	uk: "Укріплення",
	zh: "加固"
});
Translation.addTranslation("Beheading", {
	ru: "Отсечение"
});
Translation.addTranslation("Graveyard Soil", {
	ru: "Кладбищенская почва"
});
Translation.addTranslation("Consecrated Soil", {
	ru: "Освященная почва"
});
Translation.addTranslation("Smite", {
	de: "Schlag", id: "Smite",
	it: "Anatema",
	ja: "アンデッド特効",
	ko: "강타",
	pl: "Pogromca nieumarłych",
	pt: "Golpe", ru: "Небесная кара", sv: "Heligt",
	uk: "Небесна кара",
	zh: "亡灵杀手"
});
Translation.addTranslation("Bane of Arthropods", {
	ru: "Бич членистоногих"
});
Translation.addTranslation("Fiery", {
	de: "Feurig", id: "Fiery",
	it: "Ardente",
	ja: "灼熱", ko: "불꽃",
	pl: "Ognisty",
	pt: "Ardente",
	ru: "Воспламенение",
	sv: "Brännhet",
	uk: "Вогнистість",
	zh: "怒火"
});
Translation.addTranslation("Necrotic Bone", {
	de: "Nekrotischer Knochen",
	id: "Necrotic Bone",
	it: "Osso necrotico",
	ja: "ネクロボーン",
	ko: "영혼이 깃든 뼈",
	pl: "Nekrotyczna kość",
	pt: "Osso Necrosado",
	ru: "Некротическая кость",
	sv: "Nekrotiskt ben",
	uk: "Некротична кістка",
	zh: "噬生之骨"
});
Translation.addTranslation("Necrotic", {
	de: "Nekrotisch",
	id: "Necrotic",
	it: "Necrotico",
	ja: "ネクロマンシー",
	ko: "사령의 가시",
	pl: "Nekrotyczny",
	pt: "Necrosado",
	ru: "Некроз",
	sv: "Nekrotiskt",
	uk: "Некротичність",
	zh: "噬生"
});
Translation.addTranslation("Knockback", {
	de: "Rückschlag",
	id: "Knockback",
	it: "Contraccolpo",
	ja: "ノックバック", ko: "밀치기", pl: "Odrzut",
	pt: "Repulsão",
	ru: "Отбрасывание",
	sv: "Knuff",
	uk: "Відкидування",
	zh: "击退"
});
Translation.addTranslation("Ball of Moss", {
	ru: "Комок мха"
});
Translation.addTranslation("Mending Moss", {
	ru: "Мох восстановления"
});
Translation.addTranslation("Mending Moss requires at least 10 levels", {
	ru: "Мох восстановления требует по крайней мере 10 уровня"
});
Translation.addTranslation("Mending", {
	ru: "Починка"
});
Translation.addTranslation("Shulking", {
	ja: "シュルカー化",
	ru: "Левитация",
	uk: "Шалкерство",
	zh: "潜影壳"
});
Translation.addTranslation("Web", {
	ru: "Замедление"
});

///
// TOOLS -> LEVELING
///

Translation.addTranslation("Clumsy", {
	ru: "Неловкий"
});
Translation.addTranslation("Your %s has reached level %s.", {
	ru: "Ваш %s достиг нового уровня %s."
});
Translation.addTranslation("Comfortable", {
	ru: "Удобный"
});
Translation.addTranslation("You begin to feel comfortable handling the %s.", {
	ru: "Вам становится непривычно удобно держать %s."
});
Translation.addTranslation("Accustomed", {
	ru: "Привычный"
});
Translation.addTranslation("You are now accustomed to the weight of the %s.", {
	ru: "Вы привыкаете к стати собственного %s."
});
Translation.addTranslation("Adept", {
	ru: "Самородок"
});
Translation.addTranslation("You have become adept at handling the %s.", {
	ru: "Вас смело можно назвать самородком в работе с %s."
});
Translation.addTranslation("Expert", {
	ru: "Эксперт"
});
Translation.addTranslation("You are now an expert at using the %s!", {
	ru: "Вы настоящий эксперт в использовании %s!"
})
Translation.addTranslation("Master", {
	ru: "Мастер"
});
Translation.addTranslation("You have mastered the %s!", {
	ru: "Вы мастерски отточили свои навыки с %s!"
});
Translation.addTranslation("Grandmaster", {
	ru: "Профессионал"
});
Translation.addTranslation("You have grandmastered the %s!", {
	ru: "Вы настоящий профессионал в использовании %s!"
});
Translation.addTranslation("Heroic", {
	ru: "Героический"
});
Translation.addTranslation("You feel like you could fulfill mighty deeds with your %s!", {
	ru: "Вы начинаете чувствовать, что могли бы совершать невероятное со своим %s!"
});
Translation.addTranslation("Legendary", {
	ru: "Легендарный"
});
Translation.addTranslation("You and your %s are living legends!", {
	ru: "Вы и ваш %s настоящие живые легенды!"
});
Translation.addTranslation("Godlike", {
	ru: "Богоподобный"
});
Translation.addTranslation("No god could stand in the way of you and your %s!", {
	ru: "Не дай бог кто-то станет на пути перед вами и вашим %s!"
})
Translation.addTranslation("Awesome", {
	ru: "Умопомрачительный"
});
Translation.addTranslation("Your %s is pure awesome.", {
	ru: "Ваш %s просто умопомрачителен."
});
Translation.addTranslation("Hacker", {
	ru: "Хакер"
});

///
// INTEGRATIONS
///

Translation.addTranslation("Part Buidling", {
	ru: "Поэтапная сборка"
});
Translation.addTranslation("Melting", {
	de: "Schmelzen",
	id: "Melting",
	it: "Fusione",
	ja: "溶融", ko: "용해",
	pl: "Topienie",
	pt: "Fundição",
	ru: "Переплавка",
	sv: "Nedsmältning",
	uk: "Розплавлення",
	zh: "熔炼"
});
Translation.addTranslation("Alloying", {
	de: "Legieren",
	id: "Alloying",
	it: "Lega", ja: "合金化", ko: "합금",
	pl: "Mieszanie metali",
	pt: "Ligamento",
	ru: "Смешивание",
	sv: "Legering",
	uk: "Сплавляння",
	zh: "合金"
});
Translation.addTranslation("Alloyer", {
	de: "Legierung",
	id: "Alloyer",
	it: "Legatrice",
	ja: "合金炉", ko: "합금기",
	pl: "Topiarka",
	pt: "Fundidor de Ligas",
	ru: "Смешиватель",
	sv: "Legering",
	uk: "Сплавлювач",
	zh: "合金炉"
});
Translation.addTranslation("Item Casting", {
	ru: "Литье предметов"
});
Translation.addTranslation("Block Casting", {
	ru: "Литье блоков"
});
Translation.addTranslation("Cast item is consumed on casting", {
	de: "Gegossener Gegenstand wird beim Zaubern verbraucht",
	id: "Cast item is consumed on casting",
	it: "L'oggetto di stampo si consuma al momento dello stampo",
	ja: "型はなくなります",
	ko: "이 아이템은 주조할 때 소모됩니다",
	pl: "Forma niszczy się przy odlewaniu",
	pt: "O item fundido é consumido na fundição",
	ru: "Форма расходуется во время литья",
	sv: "Avgjutningen konsumeras vid gjutning",
	uk: "Предмет-форма витрачається при литті",
	zh: "消耗铸模"
});
Translation.addTranslation("%s s", { de: "%s s", id: "%s s", it: "%s s", ja: "%s秒", ko: "%s초", pl: "%s s", pt: "%s s", ru: "%s сек", sv: "%s s", uk: "%s с", zh: "%s秒" });
Translation.addTranslation("%s°C", { de: "%s°C", id: "%s°C", it: "%s°C", ja: "%s°C", ko: "%s°C", pl: "%s°C", pt: "%s°C", ru: "%s°C", sv: "%s°C", uk: "%s°C", zh: "%s℃" });
