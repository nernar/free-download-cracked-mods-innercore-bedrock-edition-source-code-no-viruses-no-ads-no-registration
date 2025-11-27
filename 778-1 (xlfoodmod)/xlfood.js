/*
BUILD INFO:
  dir: dev
  target: xlfood.js
  files: 9
*/



// file: import.js

IMPORT("XLRegister");
IMPORT("ToolLib");
IMPORT("SoundAPI");

//function
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function PlaySound(file, volume){
    var Sounds = new Sound();
    switch(randomInt(1, 4)){
        case 1: Sounds.setSource(file + "1.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 2: Sounds.setSource(file + "2.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 3: Sounds.setSource(file + "3.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 4: Sounds.setSource(file + "4.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
    }
};




// file: Langs.js

//BLOCK
Translation.addTranslation("Rock Salt", {ja: "岩塩", ru: "Каменная соль", zh: "矿盐"});
Translation.addTranslation("Vanilla Flower", {ja: "バニラの花", ru: "Ванильный цветок", zh: "香草花"});
Translation.addTranslation("Chocolate Cake", {ja: "チョコケーキ", ru: "Шоколадный торт", zh: "巧克力蛋糕"});
Translation.addTranslation("Chocolate Cookie Cake", {ja: "チョコレートクッキーケーキ", ru: "Торт из шоколадного печенья", zh: "巧克力曲奇蛋糕"});
Translation.addTranslation("Cheese Cake", {ja: "チーズケーキ", ru: "Сырный торт", zh: "奶酪蛋糕"});
Translation.addTranslation("Nether Cake", {ja: "ネザーケーキ", ru: "Адский торт", zh: "下界蛋糕"});
Translation.addTranslation("Strawberry Cake", {ja: "ストロベリーケーキ", ru: "Клубничный торт", zh: "草莓蛋糕"});
Translation.addTranslation("Pumpkin Cake", {ja: "パンプキンケーキ", ru: "Тыквенный торт", zh: "南瓜蛋糕"});
Translation.addTranslation("Pizza", {ja: "ピザ", ru: "Пицца", zh: "披萨"});

//ITEM
Translation.addTranslation("Rice", {ja: "米", ru: "Рис", zh: "稻米"});
Translation.addTranslation("Butter Rice", {ja: "バターライス", ru: "Масляный рис", zh: "黄油拌饭"});
Translation.addTranslation("Fried Rice", {ja: "チャーハン", ru: "Жареный рис", zh: "炒饭"});
Translation.addTranslation("Pepper Seeds", {ja: "コショウの種", ru: "Перцовые семена", zh: "胡椒籽"});
Translation.addTranslation("Pepper", {ja: "コショウ", ru: "Перец", zh: "胡椒"});
Translation.addTranslation("Corn Seeds", {ja: "トウモロコシの種", ru: "Семена кукурузы", zh: "玉米种子"});
Translation.addTranslation("Raw Corn", {ja: "生のトウモロコシ", ru: "Сырая кукуруза", zh: "生玉米"});
Translation.addTranslation("Corn", {ja: "トウモロコシ", ru: "Кукуруза", zh: "熟玉米"});
Translation.addTranslation("Cucumber Seeds", {ja: "キュウリの種", ru: "Семена огурцов", zh: "黄瓜种子"});
Translation.addTranslation("Cucumber", {ja: "キュウリ", ru: "Огурец", zh: "黄瓜"});
Translation.addTranslation("Lettuce Seeds", {ja: "レタスの種", ru: "Семена салата", zh: "生菜种子"});
Translation.addTranslation("Lettuce", {ja: "レタス", ru: "Салат", zh: "生菜"});
Translation.addTranslation("Onion", {ja: "タマネギ", ru: "Лук", zh: "洋葱"});
Translation.addTranslation("Tomato Seeds", {ja: "トマトの種", ru: "Семена томатов", zh: "番茄种子"});
Translation.addTranslation("Tomato", {ja: "トマト", ru: "Томат", zh: "番茄"});
Translation.addTranslation("Strawberry Seeds", {ja: "イチゴの種", ru: "Клубничные семена", zh: "草莓种子"});
Translation.addTranslation("Strawberry", {ja: "イチゴ", ru: "Клубника", zh: "草莓"});
Translation.addTranslation("Lemon Seeds", {ja: "レモンの種", ru: "Семена лимона", zh: "柠檬籽"});
Translation.addTranslation("Lemon", {ja: "レモン", ru: "Лимон", zh: "柠檬"});
Translation.addTranslation("Pineapple Seeds", {ja: "パイナップルの種", ru: "Семена ананаса", zh: "菠萝种子"});
Translation.addTranslation("Pineapple", {ja: "パイナップル", ru: "Ананас", zh: "菠萝"});
Translation.addTranslation("Salt", {ja: "塩", ru: "Соль", zh: "盐"});
Translation.addTranslation("Dough", {ja: "生地", ru: "Тесто", zh: "生面团"});
Translation.addTranslation("Cooked Dough", {ja: "焼いた生地", ru: "Приготовленное тесто", zh: "熟面团"});
Translation.addTranslation("Crouton", {ja: "クルトン", ru: "Сухарик", zh: "油炸面包丁"});

Translation.addTranslation("Butter", {ja: "バター", ru: "Масло", zh: "黄油"});
Translation.addTranslation("Cheese", {ja: "チーズ", ru: "Сыр", zh: "奶酪"});
Translation.addTranslation("Cheese Puff", {ja: "チーズパフ", ru: "Сырный шарик", zh: "奶酪泡芙"});
Translation.addTranslation("Chips", {ja: "チップス", ru: "Чипсы", zh: "薯片"});
Translation.addTranslation("Salty Chips", {ja: "塩辛いチップス", ru: "Соленые чипсы", zh: "咸薯片"});
Translation.addTranslation("Spicy Chips", {ja: "辛いチップス", ru: "Пряные чипсы", zh: "香辣薯片"});
Translation.addTranslation("Onion Rings", {ja: "オニオンリング", ru: "Луковые кольца", zh: "洋葱圈"});
Translation.addTranslation("Cheesy Bread", {ja: "チーズパン", ru: "Сырный хлеб", zh: "奶酪面包"});
Translation.addTranslation("Potato Bread", {ja: "ジャガイモパン", ru: "Картофельный хлеб", zh: "土豆面包"});
Translation.addTranslation("Corn Bread", {ja: "トウモロコシパン", ru: "Кукурузный хлеб", zh: "玉米面包"});
Translation.addTranslation("Rice Bread", {ja: "米粉パン", ru: "Рисовый хлеб", zh: "大米面包"});
Translation.addTranslation("Baguette", {ja: "バゲット", ru: "Багет", zh: "法棍面包"});
Translation.addTranslation("Fried Egg", {ja: "目玉焼き", ru: "Яичница", zh: "煎鸡蛋"});
Translation.addTranslation("Pancake", {ja: "パンケーキ", ru: "Блин", zh: "煎饼"});
Translation.addTranslation("Waffle", {ja: "ワッフル", ru: "Вафля", zh: "华夫饼"});
Translation.addTranslation("Macaroni and Cheese", {ja: "マカロニとチーズ", ru: "Макароны с сыром", zh: "奶酪通心粉"});
Translation.addTranslation("Spaghetti", {ja: "スパゲッティ", ru: "Спагетти", zh: "意大利面"});
Translation.addTranslation("Enchilada", {ja: "エンチラーダ", ru: "Энчилада", zh: "香辣玉米卷饼"});
Translation.addTranslation("Lasagne", {ja: "ラザニア", ru: "Лазанья", zh: "千层面"});
Translation.addTranslation("Jambon-Beurre", {ja: "ジャンボン-ブゥール", ru: "Сэндвич с ветчиной из багета", zh: "黄油火腿"});
Translation.addTranslation("Flesh", {ja: "肉", ru: "Приготовленная плоть", zh: "肉"});

Translation.addTranslation("Ham", {ja: "ハム", ru: "Окорок", zh: "火腿"});
Translation.addTranslation("Sausage", {ja: "ソーセージ", ru: "Сосиска", zh: "香肠"});
Translation.addTranslation("Bacon", {ja: "ベーコン", ru: "Бекон", zh: "培根"});
Translation.addTranslation("Beef Jerky", {ja: "ビーフジャーキー", ru: "Вяленая говядина", zh: "牛肉干"});
Translation.addTranslation("Ground Beef", {ja: "牛のひき肉", ru: "Говяжий фарш", zh: "牛肉馅"});
Translation.addTranslation("Raw Chicken Wing", {ja: "生の手羽先", ru: "Сырое куриное крылышко", zh: "生鸡翅"});
Translation.addTranslation("Cooked Chicken Wing", {ja: "焼き手羽先", ru: "Приготовленное куриное крылышко", zh: "熟鸡翅"});
Translation.addTranslation("Spicy Chicken Wing", {ja: "辛い手羽先", ru: "Пряное куриное крылышко", zh: "香辣鸡翅"});
Translation.addTranslation("Bucket of Fried Chicken", {ja: "フライドチキン入りバケツ", ru: "Ведро жареной курицы", zh: "炸鸡桶"});
Translation.addTranslation("Top Bun", {ja: "上のバンズパン", ru: "Верх булки для гамбургера", zh: "顶部的汉堡面包"});
Translation.addTranslation("Bottom Bun", {ja: "底のバンズパン", ru: "Низ булки для гамбургера", zh: "底部的汉堡面包"});
Translation.addTranslation("Hamburger", {ja: "ハンバーガー", ru: "Гамбургер", zh: "牛肉汉堡"});
Translation.addTranslation("Chicken Burger", {ja: "チキンバーガー", ru: "Чикенбургер", zh: "鸡肉汉堡"});
Translation.addTranslation("Cheeseburger", {ja: "チーズバーガー", ru: "Чизбургер", zh: "奶酪汉堡"});
Translation.addTranslation("Hot Dog", {ja: "ホットドッグ", ru: "Хот-дог", zh: "热狗"});
Translation.addTranslation("Sausage Roll", {ja: "ソーセージロール", ru: "Сосиска в тесте", zh: "香肠卷"});
Translation.addTranslation("Slice of Pizza", {ja: "切り分けたピザ", ru: "Кусочек пиццы", zh: "披萨切片"});
Translation.addTranslation("Tortilla", {ja: "トルティーヤ", ru: "Тортилья", zh: "玉米饼"});
Translation.addTranslation("Taco", {ja: "タコス", ru: "Тако", zh: "塔可"});
Translation.addTranslation("Burrito", {ja: "ブリート", ru: "Буррито", zh: "墨西哥卷饼"});
Translation.addTranslation("Kebab", {ja: "ケバブ", ru: "Кебаб", zh: "牛肉卷饼"});

Translation.addTranslation("Chicken Sandwich", {ja: "チキンサンド", ru: "Куриный сендвич", zh: "鸡肉三明治"});
Translation.addTranslation("BLT Sandwich", {ja: "BLTサンドイッチ", ru: "Сэндвич с беконом, салатом и томатами", zh: "英式传统三明治"});
Translation.addTranslation("Breakfast Sandwich", {ja: "朝食のサンドイッチ", ru: "Сэндвич на завтрак", zh: "早餐三明治"});
Translation.addTranslation("Grilled Cheese Sandwich", {ja: "グリルチーズサンドイッチ", ru: "Сырный сэндвич", zh: "烤奶酪三明治"});
Translation.addTranslation("Ice Cream Sandwich", {ja: "アイスクリームサンドイッチ", ru: "Сэндвич с мороженым", zh: "冰淇淋三明治"});
Translation.addTranslation("Seaweed", {ja: "海藻", ru: "Водоросли", zh: "熟海草"});
Translation.addTranslation("Futomaki", {ja: "太巻き", ru: "Футомаки", zh: "大太卷寿司"});
Translation.addTranslation("Uramaki", {ja: "裏巻", ru: "Урамаки", zh: "反卷寿司"});
Translation.addTranslation("Oshizushi", {ja: "押し寿司", ru: "Оши-суши", zh: "押寿司"});
Translation.addTranslation("Bowl", {ja: "ボウル", ru: "Миска", zh: "碗"});
Translation.addTranslation("Garden Salad", {ja: "グリーンサラダ", ru: "Садовый салат", zh: "田园沙拉"});
Translation.addTranslation("Chicken Salad", {ja: "チキンサラダ", ru: "Куриный салат", zh: "鸡肉沙拉"});
Translation.addTranslation("Caesar Salad", {ja: "シーザーサラダ", ru: "Салат Цезарь", zh: "凯撒沙拉"});
Translation.addTranslation("Onion Salad", {ja: "オニオンサラダ", ru: "Луковый салат", zh: "洋葱沙拉"});
Translation.addTranslation("Taco Salad", {ja: "タコサラダ", ru: "Тако салат", zh: "玉米饼沙拉"});
Translation.addTranslation("Cucumber Soup", {ja: "キュウリのスープ", ru: "Огуречный суп", zh: "黄瓜汤"});
Translation.addTranslation("Tomato Soup", {ja: "トマトスープ", ru: "Томатный суп", zh: "番茄汤"});
Translation.addTranslation("Vegetable Soup", {ja: "野菜スープ", ru: "Овощной суп", zh: "蔬菜汤"});
Translation.addTranslation("Chicken Soup", {ja: "チキンスープ", ru: "Куриный суп", zh: "鸡汤"});
Translation.addTranslation("Beef Stew", {ja: "ビーフシチュー", ru: "Тушеная говядина", zh: "炖牛肉"});
Translation.addTranslation("Pumpkin Stew", {ja: "カボチャのシチュー", ru: "Тушеная тыква", zh: "南瓜盅"});

Translation.addTranslation("Caramel Apple", {ja: "キャラメルアップル", ru: "Карамельное яблоко", zh: "焦糖苹果"});
Translation.addTranslation("Marshmallow", {ja: "マシュマロ", ru: "Зефир", zh: "棉花糖"});
Translation.addTranslation("Roasted Marshmallow", {ja: "ローストマシュマロ", ru: "Жареный зефир", zh: "烤棉花糖"});
Translation.addTranslation("Chocolate Cookie", {ja: "チョコレートクッキー", ru: "Шоколадное печенье", zh: "巧克力饼干"});
Translation.addTranslation("Vanilla Cookie", {ja: "バニラクッキー", ru: "Ванильное печенье", zh: "香草奶油夹心饼干"});
Translation.addTranslation("Brownie", {ja: "ブラウニー", ru: "Брауни", zh: "布朗巧克力饼干"});
Translation.addTranslation("Bourbon Biscuit", {ja: "バーボンビスケット", ru: "Бурбонское печенье", zh: "巧克力夹心饼干"});
Translation.addTranslation("Chocolate", {ja: "チョコレート", ru: "Шоколад", zh: "巧克力"});
Translation.addTranslation("Chocolate Ice Cream Ball", {ja: "チョコレートアイスクリームボール", ru: "Шоколадный мороженый шарик", zh: "巧克力冰淇淋球"});
Translation.addTranslation("Vanilla Ice Cream Ball", {ja: "バニラアイスクリームボール", ru: "Ванильный мороженый шарик", zh: "香草冰淇淋球"});
Translation.addTranslation("Strawberry Ice Cream Ball", {ja: "ストロベリーアイスクリームボール", ru: "Клубничный мороженый шарик", zh: "草莓冰淇淋球"});
Translation.addTranslation("Ice Cream Cone", {ja: "アイスクリームコーン", ru: "Рожок мороженого", zh: "冰淇淋蛋卷"});
Translation.addTranslation("Chocolate Ice Cream", {ja: "チョコレートアイスクリーム", ru: "Шоколадное мороженое", zh: "巧克力冰淇淋"});
Translation.addTranslation("Vanilla Ice Cream", {ja: "バニラアイスクリーム", ru: "Ванильное мороженое", zh: "香草冰淇淋"});
Translation.addTranslation("Strawberry Ice Cream", {ja: "ストロベリーアイスクリーム", ru: "Клубничное мороженое", zh: "草莓冰淇淋"});
Translation.addTranslation("Crescent Roll", {ja: "クレセントロール", ru: "Рогалик", zh: "牛角面包"});
Translation.addTranslation("Donut", {ja: "ドーナツ", ru: "Пончик", zh: "甜甜圈"});
Translation.addTranslation("Sugar Donut", {ja: "シュガードーナツ", ru: "Сахарный пончик", zh: "糖霜甜甜圈"});
Translation.addTranslation("Chocolate Donut", {ja: "チョコレートドーナツ", ru: "Шоколадный пончик", zh: "巧克力甜甜圈"});
Translation.addTranslation("Vanilla Donut", {ja: "バニラドーナツ", ru: "Ванильный пончик", zh: "香草甜甜圈"});
Translation.addTranslation("Paper Cup", {ja: "紙コップ", ru: "Бумажный стакан", zh: "纸杯"});

Translation.addTranslation("Vanilla Cupcake", {ja: "バニラカップケーキ", ru: "Ванильный кекс", zh: "香草纸杯蛋糕"});
Translation.addTranslation("Chocolate Cupcake", {ja: "チョコレートカップケーキ", ru: "Шоколадный кекс", zh: "巧克力纸杯蛋糕"});
Translation.addTranslation("Chocolate Cookie Cupcake", {ja: "チョコレートクッキーカップケーキ", ru: "Кекс из шоколаного печенья", zh: "巧克力饼干纸杯蛋糕"});
Translation.addTranslation("Strawberry Cupcake", {ja: "ストロベリーカップケーキ", ru: "Клубничный кекс", zh: "草莓纸杯蛋糕"});
Translation.addTranslation("Pie Shell", {ja: "パイシェル", ru: "Корж пирога", zh: "馅饼皮"});
Translation.addTranslation("Apple Pie", {ja: "アップルパイ", ru: "Яблочный пирог", zh: "苹果派"});
Translation.addTranslation("Golden Apple Pie", {ja: "金のアップルパイ", ru: "Золотой яблочный пирог", zh: "金苹果派"});
Translation.addTranslation("Cheese Pie", {ja: "チーズパイ", ru: "Сырный пирог", zh: "奶酪派"});
Translation.addTranslation("Chicken Pot Pie", {ja: "チキンポットパイ", ru: "Горшечный куриный пирог", zh: "鸡肉派"});
Translation.addTranslation("Chocolate Pie", {ja: "チョコレートパイ", ru: "Шоколадный пирог", zh: "巧克力派"});
Translation.addTranslation("Bacon Pie", {ja: "ベーコンパイ", ru: "Пирог с беконом", zh: "培根派"});
Translation.addTranslation("Fish Pie", {ja: "フィッシュパイ", ru: "Рыбный пирог", zh: "仰望星空派"});
Translation.addTranslation("Strawberry Pie", {ja: "ストロベリーパイ", ru: "Клубничный пирог", zh: "草莓派"});
Translation.addTranslation("Tomato Sauce", {ja: "トマトソース", ru: "Томатный соус", zh: "番茄酱"});
Translation.addTranslation("Hot Sauce", {ja: "ホットソース", ru: "Острый соус", zh: "辣酱"});
Translation.addTranslation("Chocolate Syrup", {ja: "チョコレートシロップ", ru: "Шоколадный сироп", zh: "巧克力酱"});
Translation.addTranslation("Vanilla Extract", {ja: "バニラの抽出物", ru: "Экстракт ванили", zh: "香草精"});
Translation.addTranslation("Vanilla Cream", {ja: "バニラクリーム", ru: "Ванильный крем", zh: "香草奶油"});
Translation.addTranslation("Empty Can", {ja: "空の缶", ru: "Пустая банка", zh: "空罐"});
Translation.addTranslation("Speedy Energy Drink", {ja: "スピーディエナジードリンク", ru: "Скоростной энергетический напиток", zh: "极速能量饮料"});
Translation.addTranslation("Healthy Energy Drink", {ja: "健康的なエネルギードリンク", ru: "Здоровый энергетический напиток", zh: "健康能量饮料"});

Translation.addTranslation("Stealthy Energy Drink", {ja: "ステルスエネルギードリンク", ru: "Скрытый энергетический напиток", zh: "隐身能量饮料"});
Translation.addTranslation("Strong Energy Drink", {ja: "強いエネルギードリンク", ru: "Сильный энергетический напиток", zh: "强壮能量饮料"});
Translation.addTranslation("Deadly Energy Drink", {ja: "命にかかわるエネルギードリンク", ru: "Смертельный энергетический напиток", zh: "致命能量饮料"});
Translation.addTranslation("Super Energy Drink", {ja: "スーパーエナジードリンク", ru: "Супер энергетический напиток", zh: "超级能量饮料"});
Translation.addTranslation("Glass Mug", {ja: "ガラスのマグカップ", ru: "Стеклянная кружка", zh: "玻璃杯"});
Translation.addTranslation("Beer", {ja: "ビール", ru: "Пиво", zh: "啤酒"});
Translation.addTranslation("Coffee Cup", {ja: "コーヒーカップ", ru: "Кофейная чашка", zh: "咖啡杯"});
Translation.addTranslation("Coffee", {ja: "コーヒー", ru: "Кофе", zh: "咖啡"});
Translation.addTranslation("Cappuccino", {ja: "カプチーノ", ru: "Капучино", zh: "卡布奇诺"});
Translation.addTranslation("Lemonade", {ja: "レモネード", ru: "Лимонад", zh: "柠檬水"});
Translation.addTranslation("Strawberry Juice", {ja: "イチゴジュース", ru: "Клубничный сок", zh: "草莓汁"});
Translation.addTranslation("Pineapple Juice", {ja: "パイナップルジュース", ru: "Ананасовый сок", zh: "菠萝汁"});
Translation.addTranslation("Lemon Syrup", {ja: "レモンシロップ", ru: "Лимонный сироп", zh: "柠檬糖浆"});
Translation.addTranslation("Strawberry Syrup", {ja: "イチゴシロップ", ru: "Клубничный сироп", zh: "草莓糖浆"});
Translation.addTranslation("Pineapple Syrup", {ja: "パイナップルシロップ", ru: "Ананасовый сироп", zh: "菠萝糖浆"});
Translation.addTranslation("Lemonade Slushie", {ja: "レモンスラッシー", ru: "Лимонная слякоть", zh: "柠檬泥"});
Translation.addTranslation("Strawberry Slushie", {ja: "イチゴスラッシー", ru: "Клубничная слякоть", zh: "草莓泥"});
Translation.addTranslation("Pineapple Slushie", {ja: "パイナップルスラッシー", ru: "Ананасовый сладкий", zh: "凤梨酥"});

//CATEGORY
Translation.addTranslation("XL-Items", {ja: "XL-アイテム", ru: "XL-Предметы", zh: "XL-项目"});
Translation.addTranslation("XL-Foods", {ja: "XL-食べ物", ru: "XL-Еда", zh: "XL-食品"});
Translation.addTranslation("XL-Seeds", {ja: "XL-種", ru: "XL-Семена", zh: "XL-种子"});




// file: Items/Items.js

XLRegistry.Items("seaweed", "Seaweed");
XLRegistry.Items("bowl", "Bowl");
XLRegistry.Items("coffee_cup", "Coffee Cup");
XLRegistry.Items("glass_mug", "Glass Mug");
XLRegistry.Items("chocolate_ice_cream_ball", "Chocolate Ice Cream Ball");
XLRegistry.Items("vanilla_ice_cream_ball", "Vanilla Ice Cream Ball");
XLRegistry.Items("strawberry_ice_cream_ball", "Strawberry Ice Cream Ball");
XLRegistry.Items("tomato_sauce", "Tomato Sauce");
XLRegistry.Items("hot_sauce", "Hot Sauce");
XLRegistry.Items("chocolate_syrup", "Chocolate Syrup");
XLRegistry.Items("vanilla_extract", "Vanilla Extract");
XLRegistry.Items("vanilla_cream", "Vanilla Cream");
XLRegistry.Items("empty_can", "Empty Can");
XLRegistry.Items("pie_shell", "Pie Shell");
XLRegistry.Items("paper_cup", "Paper Cup");




// file: Seeds/Seeds.js

XLRegistry.Seeds("rice", "Rice", 4, true);
XLRegistry.Seeds("pepper", "Pepper Seeds", 7, false);
XLRegistry.Seeds("corn", "Corn Seeds", 7, false);
XLRegistry.Seeds("cucumber", "Cucumber Seeds", 6, false);
XLRegistry.Seeds("lettuce", "Lettuce Seeds", 7, false);
XLRegistry.Seeds("onion", "Onion", 6, true);
XLRegistry.Seeds("tomato", "Tomato Seeds", 6, false);
XLRegistry.Seeds("strawberry", "Strawberry Seeds", 6, false);
XLRegistry.Seeds("lemon", "Lemon Seeds", 6, false);
XLRegistry.Seeds("pineapple", "Pineapple Seeds", 4, false);

XLRegistry.Drops("rice_plant_stage", 4, "rice", "rice");
XLRegistry.Drops("pepper_plant_stage", 7, "pepper_seeds", "pepper");
XLRegistry.Drops("corn_plant_stage", 7, "corn_seeds", "raw_corn");
XLRegistry.Drops("cucumber_plant_stage", 6, "cucumber_seeds", "cucumber");
XLRegistry.Drops("lettuce_plant_stage", 7, "lettuce_seeds", "lettuce");
XLRegistry.Drops("onion_plant_stage", 6, "onion", "onion");
XLRegistry.Drops("tomato_plant_stage", 6, "tomato_seeds", "tomato");
XLRegistry.Drops("strawberry_plant_stage", 6, "strawberry_seeds", "strawberry");
XLRegistry.Drops("lemon_plant_stage", 6, "lemon_seeds", "lemon");
XLRegistry.Drops("pineapple_plant_stage", 4, "pineapple_seeds", "pineapple");

XLRegistry.Grows("rice_plant_stage", 0);
XLRegistry.Grows("rice_plant_stage", 1);
XLRegistry.Grows("rice_plant_stage", 2);
XLRegistry.Grows("rice_plant_stage", 3);
XLRegistry.Grows("pepper_plant_stage", 0);
XLRegistry.Grows("pepper_plant_stage", 1);
XLRegistry.Grows("pepper_plant_stage", 2);
XLRegistry.Grows("pepper_plant_stage", 3);
XLRegistry.Grows("pepper_plant_stage", 4);
XLRegistry.Grows("pepper_plant_stage", 5);
XLRegistry.Grows("pepper_plant_stage", 6);
XLRegistry.Grows("corn_plant_stage", 0);
XLRegistry.Grows("corn_plant_stage", 1);
XLRegistry.Grows("corn_plant_stage", 2);
XLRegistry.Grows("corn_plant_stage", 3);
XLRegistry.Grows("corn_plant_stage", 4);
XLRegistry.Grows("corn_plant_stage", 5);
XLRegistry.Grows("corn_plant_stage", 6);
XLRegistry.Grows("cucumber_plant_stage", 0);
XLRegistry.Grows("cucumber_plant_stage", 1);
XLRegistry.Grows("cucumber_plant_stage", 2);
XLRegistry.Grows("cucumber_plant_stage", 3);
XLRegistry.Grows("cucumber_plant_stage", 4);
XLRegistry.Grows("cucumber_plant_stage", 5);
XLRegistry.Grows("lettuce_plant_stage", 0);
XLRegistry.Grows("lettuce_plant_stage", 1);
XLRegistry.Grows("lettuce_plant_stage", 2);
XLRegistry.Grows("lettuce_plant_stage", 3);
XLRegistry.Grows("lettuce_plant_stage", 4);
XLRegistry.Grows("lettuce_plant_stage", 5);
XLRegistry.Grows("lettuce_plant_stage", 6);
XLRegistry.Grows("onion_plant_stage", 0);
XLRegistry.Grows("onion_plant_stage", 1);
XLRegistry.Grows("onion_plant_stage", 2);
XLRegistry.Grows("onion_plant_stage", 3);
XLRegistry.Grows("onion_plant_stage", 4);
XLRegistry.Grows("onion_plant_stage", 5);
XLRegistry.Grows("tomato_plant_stage", 0);
XLRegistry.Grows("tomato_plant_stage", 1);
XLRegistry.Grows("tomato_plant_stage", 2);
XLRegistry.Grows("tomato_plant_stage", 3);
XLRegistry.Grows("tomato_plant_stage", 4);
XLRegistry.Grows("tomato_plant_stage", 5);
XLRegistry.Grows("strawberry_plant_stage", 0);
XLRegistry.Grows("strawberry_plant_stage", 1);
XLRegistry.Grows("strawberry_plant_stage", 2);
XLRegistry.Grows("strawberry_plant_stage", 3);
XLRegistry.Grows("strawberry_plant_stage", 4);
XLRegistry.Grows("strawberry_plant_stage", 5);
XLRegistry.Grows("lemon_plant_stage", 0);
XLRegistry.Grows("lemon_plant_stage", 1);
XLRegistry.Grows("lemon_plant_stage", 2);
XLRegistry.Grows("lemon_plant_stage", 3);
XLRegistry.Grows("lemon_plant_stage", 4);
XLRegistry.Grows("lemon_plant_stage", 5);
XLRegistry.Grows("pineapple_plant_stage", 0);
XLRegistry.Grows("pineapple_plant_stage", 1);
XLRegistry.Grows("pineapple_plant_stage", 2);
XLRegistry.Grows("pineapple_plant_stage", 3);

XLRegistry.Plants("rice", "rice_plant_stage");
XLRegistry.Plants("pepper_seeds", "pepper_plant_stage");
XLRegistry.Plants("corn_seeds", "corn_plant_stage");
XLRegistry.Plants("cucumber_seeds", "cucumber_plant_stage");
XLRegistry.Plants("lettuce_seeds", "lettuce_plant_stage");
XLRegistry.Plants("onion", "onion_plant_stage");
XLRegistry.Plants("tomato_seeds", "tomato_plant_stage");
XLRegistry.Plants("strawberry_seeds", "strawberry_plant_stage");
XLRegistry.Plants("lemon_seeds", "lemon_plant_stage");
XLRegistry.Plants("pineapple_seeds", "pineapple_plant_stage");




// file: Foods/Foods.js

XLRegistry.Foods("butter_rice", "Butter Rice", 4, true);
XLRegistry.Foods("fried_rice", "Fried Rice", 3, true);
XLRegistry.Foods("pepper", "Pepper", 1, true);
XLRegistry.Foods("raw_corn", "Raw Corn", 1, true);
XLRegistry.Foods("corn", "Corn", 1, true);
XLRegistry.Foods("cucumber", "Cucumber", 1, true);
XLRegistry.Foods("lettuce", "Lettuce", 1, true);
XLRegistry.Foods("tomato", "Tomato", 1, true);
XLRegistry.Foods("strawberry", "Strawberry", 1, true);
XLRegistry.Foods("lemon", "Lemon", 1, true);
XLRegistry.Foods("pineapple", "Pineapple", 1, true);

XLRegistry.Foods("salt", "Salt", 0, true);
XLRegistry.Foods("dough", "Dough", 1, true);
XLRegistry.Foods("cooked_dough", "Cooked Dough", 2, true);
XLRegistry.Foods("crouton", "Crouton", 1, true);
XLRegistry.Foods("butter", "Butter", 1, true);
XLRegistry.Foods("cheese", "Cheese", 1, true);
XLRegistry.Foods("cheese_puff", "Cheese Puff", 1, true);
XLRegistry.Foods("chips", "Chips", 1, true);
XLRegistry.Foods("salty_chips", "Salty Chips", 1, true);
XLRegistry.Foods("spicy_chips", "Spicy Chips", 1, true);
XLRegistry.Foods("onion_rings", "Onion Rings", 2, true);
XLRegistry.Foods("cheesy_bread", "Cheesy Bread", 6, true);
XLRegistry.Foods("potato_bread", "Potato Bread", 6, true);
XLRegistry.Foods("corn_bread", "Corn Bread", 8, true);
XLRegistry.Foods("rice_bread", "Rice Bread", 5, true);
XLRegistry.Foods("baguette", "Baguette", 5, true);
XLRegistry.Foods("fried_egg", "Fried Egg", 3, true);
XLRegistry.Foods("pancake", "Pancake", 5, true);
XLRegistry.Foods("waffle", "Waffle", 5, true);
XLRegistry.Foods("macaroni_and_cheese", "Macaroni and Cheese", 9, false);

XLRegistry.Foods("spaghetti", "Spaghetti", 9, false);
XLRegistry.Foods("enchilada", "Enchilada", 9, true);
XLRegistry.Foods("lasagne", "Lasagne", 12, true);
XLRegistry.Foods("jambon_beurre", "Jambon-Beurre", 15, true);

XLRegistry.Foods("flesh", "Flesh", 4, true);
XLRegistry.Foods("ham", "Ham", 4, true);
XLRegistry.Foods("sausage", "Sausage", 3, true);
XLRegistry.Foods("bacon", "Bacon", 3, true);
XLRegistry.Foods("beef_jerky", "Beef Jerky", 3, true);
XLRegistry.Foods("ground_beef", "Ground Beef", 4, true);
XLRegistry.Foods("raw_chicken_wing", "Raw Chicken Wing", 1, true);
XLRegistry.Foods("cooked_chicken_wing", "Cooked Chicken Wing", 4, true);
XLRegistry.Foods("spicy_chicken_wing", "Spicy Chicken Wing", 4, true);
XLRegistry.Foods("bucket_of_fried_chicken", "Bucket of Fried Chicken", 6, false);

XLRegistry.Foods("top_bun", "Top Bun", 4, true);
XLRegistry.Foods("bottom_bun", "Bottom Bun", 4, true);
XLRegistry.Foods("hamburger", "Hamburger", 9, true);
XLRegistry.Foods("chickenburger", "Chicken Burger", 9, true);
XLRegistry.Foods("cheeseburger", "Cheeseburger", 10, true);
XLRegistry.Foods("hot_dog", "Hot Dog", 8, true);
XLRegistry.Foods("sausage_roll", "Sausage Roll", 7, true);
XLRegistry.Foods("slice_of_pizza", "Slice of Pizza", 7, true);
XLRegistry.Foods("tortilla", "Tortilla", 4, true);
XLRegistry.Foods("taco", "Taco", 7, true);
XLRegistry.Foods("burrito", "Burrito", 7, true);
XLRegistry.Foods("kebab", "Kebab", 12, true);

XLRegistry.Foods("chicken_sandwich", "Chicken Sandwich", 10, true);
XLRegistry.Foods("blt_sandwich", "BLT Sandwich", 12, true);
XLRegistry.Foods("breakfast_sandwich", "Breakfast Sandwich", 8, true);
XLRegistry.Foods("grilled_cheese_sandwich", "Grilled Cheese Sandwich", 11, true);
XLRegistry.Foods("ice_cream_sandwich", "Ice Cream Sandwich", 6, true);

XLRegistry.Foods("futomaki", "Futomaki", 4, true);
XLRegistry.Foods("uramaki", "Uramaki", 9, true);
XLRegistry.Foods("oshizushi", "Oshizushi", 12, true);

XLRegistry.Foods("garden_salad", "Garden Salad", 5, false);
XLRegistry.Foods("chicken_salad", "Chicken Salad", 8, false);
XLRegistry.Foods("caesar_salad", "Caesar Salad", 6, false);
XLRegistry.Foods("onion_salad", "Onion Salad", 4, false);
XLRegistry.Foods("taco_salad", "Taco Salad", 10, false);

XLRegistry.Foods("cucumber_soup", "Cucumber Soup", 6, false);
XLRegistry.Foods("tomato_soup", "Tomato Soup", 3, false);
XLRegistry.Foods("vegetable_soup", "Vegetable Soup", 8, false);
XLRegistry.Foods("chicken_soup", "Chicken Soup", 10, false);
XLRegistry.Foods("beef_stew", "Beef Stew", 12, false);
XLRegistry.Foods("pumpkin_stew", "Pumpkin Stew", 6, true);

XLRegistry.Foods("caramel_apple", "Caramel Apple", 6, true);
XLRegistry.Foods("marshmallow", "Marshmallow", 1, true);
XLRegistry.Foods("roasted_marshmallow", "Roasted Marshmallow", 2, true);
XLRegistry.Foods("chocolate_cookie", "Chocolate Cookie", 3, true);
XLRegistry.Foods("vanilla_cookie", "Vanilla Cookie", 4, true);
XLRegistry.Foods("brownie", "Brownie", 3, true);
XLRegistry.Foods("bourbon_biscuit", "Bourbon Biscuit", 3, true);
XLRegistry.Foods("chocolate", "Chocolate", 1, true);
XLRegistry.Foods("ice_cream_cone", "Ice Cream Cone", 3, true);
XLRegistry.Foods("chocolate_ice_cream", "Chocolate Ice Cream", 4, true);
XLRegistry.Foods("vanilla_ice_cream", "Vanilla Ice Cream", 4, true);
XLRegistry.Foods("strawberry_ice_cream", "Strawberry Ice Cream", 4, true);
XLRegistry.Foods("crescent_roll", "Crescent Roll", 6, true);
XLRegistry.Foods("donut", "Donut", 4, true);
XLRegistry.Foods("sugar_donut", "Sugar Donut", 5, true);
XLRegistry.Foods("chocolate_donut", "Chocolate Donut", 5, true);
XLRegistry.Foods("vanilla_donut", "Vanilla Donut", 5, true);

XLRegistry.Foods("vanilla_cupcake", "Vanilla Cupcake", 2, true);
XLRegistry.Foods("chocolate_cupcake", "Chocolate Cupcake", 3, true);
XLRegistry.Foods("chocolate_cookie_cupcake", "Chocolate Cookie Cupcake", 5, true);
XLRegistry.Foods("strawberry_cupcake", "Strawberry Cupcake", 3, true);

XLRegistry.Foods("apple_pie", "Apple Pie", 8, true);
XLRegistry.Foods("golden_apple_pie", "Golden Apple Pie", 8, true);
XLRegistry.Foods("cheese_pie", "Cheese Pie", 8, true);
XLRegistry.Foods("chicken_pot_pie", "Chicken Pot Pie", 8, true);
XLRegistry.Foods("chocolate_pie", "Chocolate Pie", 8, true);
XLRegistry.Foods("bacon_pie", "Bacon Pie", 8, true);
XLRegistry.Foods("fish_pie", "Fish Pie", 8, true);
XLRegistry.Foods("strawberry_pie", "Strawberry Pie", 8, true);

XLRegistry.Foods("coffee", "Coffee", 2, false);
XLRegistry.Foods("cappuccino", "Cappuccino", 4, false);

XLRegistry.Cakes("chocolate_cake", "Chocolate Cake", 14, false);
XLRegistry.Cakes("chocolate_cookie_cake", "Chocolate Cookie Cake", 17, false);
XLRegistry.Cakes("cheese_cake", "Cheese Cake", 15, false);
XLRegistry.Cakes("nether_cake", "Nether Cake", 14, false);
XLRegistry.Cakes("strawberry_cake", "Strawberry Cake", 15, false);
XLRegistry.Cakes("pumpkin_cake", "Pumpkin Cake", 14, false);
XLRegistry.Cakes("pizza", "Pizza", 18, true);

Item.registerUsingCompleteFunction("bucket_of_fried_chicken", function(){
    Player.addItemToInventory(325, 1, 0);
});
Item.registerUsingCompleteFunction("coffee", function(){
    Player.addItemToInventory(ItemID.coffee_cup, 1, 0);
});
Item.registerUsingCompleteFunction("cappuccino", function(){
    Player.addItemToInventory(ItemID.coffee_cup, 1, 0);
});

Item.onUsingComplete(ItemID.bucket_of_fried_chicken);
Item.onUsingComplete(ItemID.coffee);
Item.onUsingComplete(ItemID.cappuccino);




// file: Drinks/Drinks.js

var Speedy = {1:0, 3:2};
var Healthy = {10:0};
var Stealthy = {16:0, 1:0, 14:0};
var Strong = {5:1, 12:1};
var Deadly = {19:0};
var Super = {8:0, 1:0, 3:0, 13:1, 10:1, 16:2, 14:2, 5:2};
var Beer = {9:1};

 XLRegistry.Drinks("speedy_energy_drink", "Speedy Energy Drink", 0, "empty_can", Speedy, 500);
 XLRegistry.Drinks("healthy_energy_drink", "Healthy Energy Drink", 0, "empty_can", Healthy, 600);
 XLRegistry.Drinks("stealthy_energy_drink", "Stealthy Energy Drink", 0, "empty_can", Stealthy, 2400);
 XLRegistry.Drinks("strong_energy_drink", "Strong Energy Drink", 0, "empty_can", Strong, 2400);
 XLRegistry.Drinks("deadly_energy_drink", "Deadly Energy Drink", 0, "empty_can", Deadly, 1200);
 XLRegistry.Drinks("super_energy_drink", "Super Energy Drink", 10, "empty_can", Super, 3600);
 XLRegistry.Drinks("beer", "Beer", 4, "glass_mug", Beer, 100);

 XLRegistry.Juices("lemon_juice", "Lemonade", 2);
 XLRegistry.Juices("strawberry_juice", "Strawberry Juice", 2);
 XLRegistry.Juices("pineapple_juice", "Pineapple Juice", 2);
 XLRegistry.Juices("lemon_syrup", "Lemon Syrup", 2);
 XLRegistry.Juices("strawberry_syrup", "Strawberry Syrup", 2);
 XLRegistry.Juices("pineapple_syrup", "Pineapple Syrup", 2);
 XLRegistry.Juices("lemon_slushie", "Lemonade Slushie", 3);
 XLRegistry.Juices("strawberry_slushie", "Strawberry Slushie", 3);
 XLRegistry.Juices("pineapple_slushie", "Pineapple Slushie", 3);




// file: Blocks/Rock_Salt.js

Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 1.5,
    explosionres: 1.5,
    lightopacity: 15,
    renderlayer: 2,
    sound: "stone"
}, "rock_salt");

IDRegistry.genBlockID("rock_salt");
Block.createBlock("rock_salt", [{name: "Rock Salt", texture: [["rock_salt", 0]], inCreative: true}], "rock_salt");
ToolAPI.registerBlockMaterial(BlockID.rock_salt, "stone", 1, true);
Block.setDestroyLevel("rock_salt", 1);
Item.addCreativeGroup("XLBlocks", Translation.translate("XL Blocks"),[
    BlockID.rock_salt
]);

Block.registerDropFunction("rock_salt", function (coords, id, data, level, enchant){
    if(level >= 1){
		var drop = [[ItemID.salt, randomInt(1, 4), 0]];
		ToolAPI.dropOreExp(coords, 0, 2, enchant.experience);
		return drop;
	}
	return null;
}, 3);
ToolLib.addBlockDropOnExplosion("rock_salt");

Callback.addCallback("PostLoaded", function(){
	Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
		for(var i = 1; i <= 20; i++){
		    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 127);
		    GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rock_salt, 0, randomInt(1, 8));
		}
	});
});




// file: Blocks/Flower.js

Block.createSpecialType({
    base: 31,
    opaque: false,
    rendertype: 6,
    lightopacity: 0,
    destroytime: 0,
    sound: "grass"
}, "flower");

var Config = {
	"Vanilla_Flower": __config__.access("Generate.Vanilla_Flower"),
    "Grass": __config__.access("Generate.Grass")
};

IDRegistry.genItemID("vanilla_flower");
Item.createItem("vanilla_flower", "Vanilla Flower", {name: "vanilla_flower", meta:0});
Item.addCreativeGroup("XLSeeds", Translation.translate("XL Seeds"),[
    ItemID.vanilla_flower
]);

IDRegistry.genBlockID("vanilla_flower");
Block.createBlock("vanilla_flower", [{name: "Vanilla Flower", texture: [["vanilla_flower", 0]], inCreative: false}], "flower");
Block.setBlockShape(BlockID.vanilla_flower, {x: 0, y: 0, z: 0}, {x: 1, y: 0.001, z: 1});
BlockRenderer.addRenderCallback("vanilla_flower", function(api, coords, block){
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1, "vanilla_flower", 0);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, "vanilla_flower", 0);
});
BlockRenderer.enableCustomRender("vanilla_flower");
Block.registerDropFunction("vanilla_flower", function (coords, id, data){
    return [[ItemID.vanilla_flower, 1, 0]];
});

Callback.addCallback("ItemUse", function(coords, item, block){ 
    let c = coords;
    if((item.id == ItemID.vanilla_flower && (block.id == 2 || block.id == 3)) && World.getBlockID(c.x, c.y+1, c.z) == 0){
        World.setBlock(c.x, c.y+1, c.z, BlockID.vanilla_flower, 0);
        PlaySound("grass", 0.5);
        Player.decreaseCarriedItem(1);
    }
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    if(Config.Vanilla_Flower){
        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        var grassTest = World.getBlockID(coords.x, coords.y, coords.z);
        if(Math.random() <= 0.05){
            if(grassTest == 2){
                World.setBlock(coords.x, coords.y+1, coords.z, BlockID.vanilla_flower, 0);
            }
        }
    }
});

//Grass
Callback.addCallback("DestroyBlock", function(coords, block, player){
    if(block.id == 31){
        XLRegistry.DropOnGrass();
    }
});




// file: Recipes/Recipes.js

//Furnace
XLRegistry.FurnaceRecipes("cheese", "cheese_puff", 0.35);
XLRegistry.FurnaceRecipes(848, "chocolate_syrup", 0.35);
XLRegistry.FurnaceRecipes("raw_chicken_wing", "cooked_chicken_wing", 0.35);
XLRegistry.FurnaceRecipes("dough", "cooked_dough", 0.35);
XLRegistry.FurnaceRecipes("raw_corn", "corn", 0.35);
XLRegistry.FurnaceRecipes(367, "flesh", 0.35);
XLRegistry.FurnaceRecipes(344, "fried_egg", 0.35);
XLRegistry.FurnaceRecipes("rice", "fried_rice", 0.35);
XLRegistry.FurnaceRecipes("pepper", "hot_sauce", 0.35);
XLRegistry.FurnaceRecipes("lemon_juice", "lemon_syrup", 0.35);
XLRegistry.FurnaceRecipes(353, "marshmallow", 0.35);
XLRegistry.FurnaceRecipes("onion", "onion_rings", 0.35);
XLRegistry.FurnaceRecipes("pineapple_juice", "pineapple_syrup", 0.35);
XLRegistry.FurnaceRecipes("marshmallow", "roasted_marshmallow", 0.35);
XLRegistry.FurnaceRecipes(-130, "seaweed", 0.35);
XLRegistry.FurnaceRecipes("strawberry_juice", "strawberry_syrup", 0.35);
XLRegistry.FurnaceRecipes("tomato", "tomato_sauce", 0.35);

//SHAPE
Callback.addCallback("LevelLoaded", function(){
    Recipes.addShaped({id: ItemID.baguette, count: 1, data: 0}, [
        "W  ",
        " D ",
        "  W"
    ], ['W', 296, 0, 'D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.baguette, count: 1, data: 0}, [
        "  W",
        " D ",
        "W  "
    ], ['W', 296, 0, 'D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.beef_stew, count: 1, data: 0}, [
        "ACO",
        " B "
    ], ['A', 391, 0, 'C', 364, 0, 'O', ItemID.onion, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.beer, count: 1, data: 0}, [
        "R",
        "F",
        "G"
    ], ['R', ItemID.rice, 0, 'F', 376, 0, 'G', ItemID.glass_mug, 0]);
    Recipes.addShaped({id: ItemID.blt_sandwich, count: 1, data: 0}, [
        "DDD",
        "BLT",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'B', ItemID.bacon, 0, 'L', ItemID.lettuce, 0, 'T', ItemID.tomato, 0]);
    Recipes.addShaped({id: ItemID.bottom_bun, count: 1, data: 0}, [
        "W W",
        " D "
    ], ['W', 296, 0, 'D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.bourbon_biscuit, count: 1, data: 0}, [
        "C",
        "B", 
        "C"
    ], ['C', ItemID.chocolate, 0, 'B', ItemID.chocolate_ice_cream_ball, 0]);
    Recipes.addShaped({id: ItemID.bowl, count: 8, data: 0}, [
        "S S",
        " I "
    ], ['S', 280, 0, 'I', 265, 0]);
    Recipes.addShaped({id: ItemID.breakfast_sandwich, count: 1, data: 0}, [
        "DDD",
        "BCE",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'B', ItemID.bacon, 0, 'C', ItemID.cheese, 0, 'E', ItemID.fried_egg, 0]);
    Recipes.addShaped({id: ItemID.burrito, count: 1, data: 0}, [
        " O ",
        "TGC",
        " O "
    ], ['C', ItemID.cheese, 0, 'T', ItemID.tomato, 0, 'G', ItemID.ground_beef, 0, 'O', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.butter, count: 2, data: 0}, [
        "MMM",
        "MSM"
    ], ['M', 876, 0, 'S', ItemID.salt, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 5, 0)});
    Recipes.addShaped({id: ItemID.caesar_salad, count: 1, data: 0}, [
        "LP ",
        "HCE",
        " B "
    ], ['L', ItemID.lettuce, 0, 'P', ItemID.pepper_seeds, 0, 'H', ItemID.cheese, 0, 'C', ItemID.crouton, 0, 'E', 344, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.caramel_apple, count: 1, data: 0}, [
        "SSS",
        "SAS", 
        "SSS"
    ], ['S', 353, 0, 'A', 260, 0]);
    Recipes.addShaped({id: ItemID.cheese_cake, count: 1, data: 0}, [
        "MMM",
        "SCS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'C', ItemID.cheese, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.cheese, count: 4, data: 0}, [
        "MM",
        "MM",
        "MM"
    ], ['M', 876, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 6, 0)});
    Recipes.addShaped({id: ItemID.cheeseburger, count: 1, data: 0}, [
        " T ",
        "CGP",
        " B "
    ], ['T', ItemID.top_bun, 0, 'P', ItemID.cucumber, 0, 'G', ItemID.ground_beef, 0, 'C', ItemID.cheese, 0, 'B', ItemID.bottom_bun, 0]);
    Recipes.addShaped({id: ItemID.chicken_salad, count: 1, data: 0}, [
        "OU ",
        "PCE",
        " B "
    ], ['O', ItemID.onion, 0, 'U', ItemID.cucumber, 0, 'P', ItemID.pepper_seeds, 0, 'C', 366, 0, 'E', 344, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.chicken_sandwich, count: 1, data: 0}, [
        "DDD",
        "LCL",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'L', ItemID.lettuce, 0, 'C', 366, 0]);
    Recipes.addShaped({id: ItemID.chicken_soup, count: 1, data: 0}, [
        "A",
        "C",
        "B"
    ], ['A', 391, 0, 'C', 366, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.chickenburger, count: 1, data: 0}, [
        " T ",
        "HCL",
        " B "
    ], ['T', ItemID.top_bun, 0, 'H', ItemID.hot_sauce, 0, 'C', 366, 0, 'L', ItemID.lettuce, 0, 'B', ItemID.bottom_bun, 0]);
    Recipes.addShaped({id: ItemID.chocolate_cake, count: 1, data: 0}, [
        "MMM",
        "SCS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'C', ItemID.chocolate, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.chocolate_cookie_cake, count: 1, data: 0}, [
        "MMM",
        "SCS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'C', ItemID.chocolate_cookie, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.chocolate_cookie_cupcake, count: 1, data: 0}, [
        "O",
        "D",
        "P"
    ], ['O', ItemID.chocolate_cookie, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.chocolate_cookie, count: 1, data: 0}, [
        "SCS",
        " M ",
        "SCS"
    ], ['S', ItemID.chocolate_syrup, 0, 'C', 357, 0, 'M', ItemID.marshmallow, 0]);
    Recipes.addShaped({id: ItemID.chocolate_cupcake, count: 1, data: 0}, [
        "C",
        "D",
        "P"
    ], ['C', ItemID.chocolate, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.chocolate, count: 1, data: 0}, [
        "CCC",
        "CDC",
        "CCC"
    ], ['C', ItemID.chocolate_syrup, 0, 'D', 848, 0]);
    Recipes.addShaped({id: ItemID.coffee_cup, count: 4, data: 0}, [
        "II ",
        "IIS",
        "II "
    ], ['I', 265, 0, 'S', 280, 0]);
    Recipes.addShaped({id: ItemID.crescent_roll, count: 1, data: 0}, [
        "D D",
        " D "
    ], ['D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.cucumber_soup, count: 1, data: 0}, [
        "P",
        "C",
        "B"
    ], ['P', 393, 0, 'C', ItemID.cucumber, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.deadly_energy_drink, count: 1, data: 0}, [
        "RE",
        "WF",
        "S "
    ], ['R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'F', 376, 0, 'S', 375, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.donut, count: 4, data: 0}, [
        "DDD",
        "D D",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.dough, count: 8, data: 0}, [
        "WW",
        "WW",
        " A"
    ], ['W', 296, 0, 'A', 850, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.empty_can, count: 4, data: 0}, [
        "I I",
        "I I",
        "I I"
    ], ['I', 265, 0]);
    Recipes.addShaped({id: ItemID.enchilada, count: 1, data: 0}, [
        "RTC",
        "MGO",
        " T "
    ], ['R', ItemID.rice, 0, 'C', ItemID.cheese, 0, 'M', ItemID.tomato_sauce, 0, 'G', ItemID.ground_beef, 0, 'O', ItemID.onion, 0, 'T', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.futomaki, count: 1, data: 0}, [
        "SSS",
        "RCR",
        "SSS"
    ], ['S', ItemID.seaweed, 0, 'R', ItemID.rice, 0, 'C', ItemID.cucumber, 0]);
    Recipes.addShaped({id: ItemID.garden_salad, count: 1, data: 0}, [
        " L ",
        "HTC",
        " B "
    ], ['L', ItemID.lettuce, 0, 'H', ItemID.cheese, 0, 'T', ItemID.tomato, 0, 'C', ItemID.cucumber, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.glass_mug, count: 2, data: 0}, [
        "GG ",
        "GGG",
        "GG "
    ], ['G', 20, 0]);
    Recipes.addShaped({id: ItemID.grilled_cheese_sandwich, count: 1, data: 0}, [
        "DDD",
        "CCC",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'C', ItemID.cheese, 0]);
    Recipes.addShaped({id: ItemID.hamburger, count: 1, data: 0}, [
        " T ",
        "OGP",
        " B "
    ], ['T', ItemID.top_bun, 0, 'O', ItemID.tomato, 0, 'G', ItemID.ground_beef, 0, 'P', ItemID.cucumber, 0, 'B', ItemID.bottom_bun, 0]);
    Recipes.addShaped({id: ItemID.healthy_energy_drink, count: 1, data: 0}, [
        "GR",
        "EW",
        "L "
    ], ['G', 370, 0, 'R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'L', 382, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.hot_dog, count: 1, data: 0}, [
        " C ",
        "CSC",
        " C "
    ], ['C', ItemID.cooked_dough, 0, 'S', ItemID.sausage, 0]);
    Recipes.addShaped({id: ItemID.ice_cream_cone, count: 1, data: 0}, [
        "W W",
        "W W",
        " W "
    ], ['W', 296, 0]);
    Recipes.addShaped({id: ItemID.ice_cream_sandwich, count: 1, data: 0}, [
        "HCH",
        "III",
        "HCH"
    ], ['H', ItemID.chocolate_syrup, 0, 'C', 357, 0, 'I', ItemID.vanilla_ice_cream_ball, 0]);
    Recipes.addShaped({id: ItemID.jambon_beurre, count: 1, data: 0}, [
        "P",
        "U",
        "B"
    ], ['P', 320, 0, 'U', ItemID.butter, 0, 'B', ItemID.baguette, 0]);
    Recipes.addShaped({id: ItemID.kebab, count: 1, data: 0}, [
        " T ",
        "LGN",
        " O "
    ], ['T', ItemID.tomato, 0, 'L', ItemID.lettuce, 0, 'G', ItemID.ground_beef, 0, 'N', ItemID.onion, 0, 'O', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.lasagne, count: 1, data: 0}, [
        "DDD",
        "GTC",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'G', ItemID.ground_beef, 0, 'T', ItemID.tomato_sauce, 0, 'C', ItemID.cheese, 0]);
    Recipes.addShaped({id: ItemID.macaroni_and_cheese, count: 1, data: 0}, [
        " C ",
        "DDD",
        " B "
    ], ['C', ItemID.cheese, 0, 'D', ItemID.cooked_dough, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.nether_cake, count: 1, data: 0}, [
        "MMM",
        "SBS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'B', 377, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.onion_salad, count: 1, data: 0}, [
        "LOT",
        " B "
    ], ['L', ItemID.lettuce, 0, 'O', ItemID.onion, 0, 'T', ItemID.tomato, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.oshizushi, count: 1, data: 0}, [
        "RSR",
        "RRR"
    ], ['R', ItemID.rice, 0, 'S', 463, 0]);
    Recipes.addShaped({id: ItemID.pancake, count: 1, data: 0}, [
        "DDD"
    ], ['D', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.paper_cup, count: 3, data: 0}, [
        "P P",
        " P "
    ], ['P', 339, 0]);
    Recipes.addShaped({id: ItemID.pie_shell, count: 1, data: 0}, [
        "C C",
        " C "
    ], ['C', ItemID.dough, 0]);
    Recipes.addShaped({id: ItemID.pizza, count: 1, data: 0}, [
        "DDD",
        "DCD",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'C', ItemID.cheese, 0]);
    Recipes.addShaped({id: ItemID.potato_bread, count: 1, data: 0}, [
        "WPW"
    ], ['W', 296, 0, 'P', 393, 0]);
    Recipes.addShaped({id: ItemID.pumpkin_cake, count: 1, data: 0}, [
        "MMM",
        "SPS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'P', 86, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.pumpkin_stew, count: 1, data: 0}, [
        " E ",
        "OGC",
        " P "
    ], ['E', ItemID.pepper, 0, 'O', 392, 0, 'G', ItemID.ground_beef, 0, 'C', 391, 0, 'P', 86, 0]);
    Recipes.addShaped({id: ItemID.rice_bread, count: 1, data: 0}, [
        "WRW"
    ], ['W', 296, 0, 'R', ItemID.rice, 0]);
    Recipes.addShaped({id: ItemID.sausage_roll, count: 1, data: 0}, [
        "D",
        "S",
        "D"
    ], ['D', ItemID.cooked_dough, 0, 'S', ItemID.sausage, 0]);
    Recipes.addShaped({id: ItemID.sausage, count: 3, data: 0}, [
        "C  ",
        " C ",
        "  C"
    ], ['C', 320, 0]);
    Recipes.addShaped({id: ItemID.sausage, count: 3, data: 0}, [
        "  C",
        " C ",
        "C  "
    ], ['C', 320, 0]);
    Recipes.addShaped({id: ItemID.spaghetti, count: 1, data: 0}, [
        " G ",
        "DTD",
        " B "
    ], ['G', ItemID.ground_beef, 0, 'D', ItemID.cooked_dough, 0, 'T', ItemID.tomato_sauce, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.speedy_energy_drink, count: 1, data: 0}, [
        "SR",
        "EW"
    ], ['S', 353, 0, 'R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.stealthy_energy_drink, count: 1, data: 0}, [
        "RE",
        "WS",
        "G "
    ], ['R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'S', 353, 0, 'G', 396, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.strawberry_cake, count: 1, data: 0}, [
        "MMM",
        "STS",
        "WWW"
    ], ['M', 850, 0, 'S', 353, 0, 'T', ItemID.strawberry, 0, 'W', 296, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 3, 0)});
    Recipes.addShaped({id: ItemID.strawberry_cupcake, count: 1, data: 0}, [
        "S",
        "D",
        "P"
    ], ['S', ItemID.strawberry, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.strong_energy_drink, count: 1, data: 0}, [
        "RE",
        "WM",
        "B "
    ], ['R', ItemID.rice, 0, 'E', ItemID.empty_can, 0, 'W', 850, 0, 'M', 378, 0, 'B', 377, 0], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShaped({id: ItemID.super_energy_drink, count: 1, data: 0}, [
        "SH",
        "PT",
        "D "
    ], ['S', ItemID.stealthy_energy_drink, 0, 'H', ItemID.healthy_energy_drink, 0, 'P', ItemID.speedy_energy_drink, 0, 'T', ItemID.strong_energy_drink, 0, 'D', 264, 0]);
    Recipes.addShaped({id: ItemID.taco_salad, count: 1, data: 0}, [
        " L ",
        "HTO",
        " B "
    ], ['L', ItemID.lettuce, 0, 'H', ItemID.cheese, 0, 'T', ItemID.tortilla, 0, 'O', ItemID.tomato, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.taco, count: 1, data: 0}, [
        "N L",
        "TGH",
        " O "
    ], ['N', ItemID.onion, 0, 'L', ItemID.lettuce, 0, 'H', ItemID.cheese, 0, 'T', ItemID.tomato, 0, 'G', ItemID.ground_beef, 0, 'O', ItemID.tortilla, 0]);
    Recipes.addShaped({id: ItemID.tomato_soup, count: 1, data: 0}, [
        "T",
        "B"
    ], ['T', ItemID.tomato, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.top_bun, count: 1, data: 0}, [
        " D ",
        "W W"
    ], ['D', 296, 0, 'W', ItemID.cooked_dough, 0]);
    Recipes.addShaped({id: ItemID.tortilla, count: 1, data: 0}, [
        "DDD",
        "DCD",
        "DDD"
    ], ['D', ItemID.cooked_dough, 0, 'C', ItemID.corn, 0]);
    Recipes.addShaped({id: ItemID.uramaki, count: 1, data: 0}, [
        "RRR",
        "ASC",
        "RRR"
    ], ['R', ItemID.rice, 0, 'A', 391, 0, 'S', ItemID.seaweed, 0, 'C', ItemID.cucumber, 0]);
    Recipes.addShaped({id: ItemID.vanilla_cookie, count: 1, data: 0}, [
        "CVC",
        " C "
    ], ['C', ItemID.cooked_dough, 0, 'V', ItemID.vanilla_cream, 0]);
    Recipes.addShaped({id: ItemID.vanilla_cupcake, count: 1, data: 0}, [
        "V",
        "D",
        "P"
    ], ['V', ItemID.vanilla_cream, 0, 'D', ItemID.cooked_dough, 0, 'P', ItemID.paper_cup, 0]);
    Recipes.addShaped({id: ItemID.vegetable_soup, count: 1, data: 0}, [
        "CAE",
        "TOP",
        " B "
    ], ['C', ItemID.cucumber, 0, 'A', 391, 0, 'E', ItemID.pepper, 0, 'T', ItemID.tomato, 0, 'O', ItemID.onion, 0, 'P', 392, 0, 'B', ItemID.bowl, 0]);
    Recipes.addShaped({id: ItemID.waffle, count: 1, data: 0}, [
        "DD",
        "DD"
    ], ['D', ItemID.dough, 0]);
});

//SHAPELESS
Callback.addCallback("LevelLoaded", function(){
    Recipes.addShapeless({id: ItemID.apple_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 260, data: 0}]);
    Recipes.addShapeless({id: ItemID.bacon_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.bacon, data: 0}]);
    Recipes.addShapeless({id: ItemID.bacon, count: 4, data: 0}, [{id: 320, data: 0}]);
    Recipes.addShapeless({id: ItemID.beef_jerky, count: 4, data: 0}, [{id: ItemID.salt, data: 0}, {id: 364, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.brownie, count: 1, data: 0}, [{id: ItemID.chocolate, data: 0}, {id: ItemID.chocolate_syrup, data: 0}]);
    Recipes.addShapeless({id: ItemID.bucket_of_fried_chicken, count: 1, data: 0}, [{id: 325, data: 0}, {id: 366, data: 0}]);
    Recipes.addShapeless({id: ItemID.butter_rice, count: 1, data: 0}, [{id: ItemID.rice, data: 0}, {id: ItemID.butter, data: 0}]);
    Recipes.addShapeless({id: ItemID.cappuccino, count: 1, data: 0}, [{id: ItemID.coffee, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.cheese_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.cheese, data: 0}]);
    Recipes.addShapeless({id: ItemID.cheesy_bread, count: 1, data: 0}, [{id: 297, data: 0}, {id: ItemID.cheese, data: 0}]);
    Recipes.addShapeless({id: ItemID.chicken_pot_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 366, data: 0}]);
    Recipes.addShapeless({id: ItemID.chips, count: 8, data: 0}, [{id: ItemID.cooked_dough, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.chocolate_donut, count: 1, data: 0}, [{id: ItemID.chocolate_syrup, data: 0}, {id: ItemID.donut, data: 0}]);
    Recipes.addShapeless({id: ItemID.chocolate_ice_cream_ball, count: 1, data: 0}, [{id: ItemID.chocolate, data: 0}, {id: 332, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.chocolate_ice_cream, count: 1, data: 0}, [{id: ItemID.chocolate_ice_cream_ball, data: 0}, {id: ItemID.ice_cream_cone, data: 0}]);
    Recipes.addShapeless({id: ItemID.chocolate_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.chocolate, data: 0}, {id: ItemID.chocolate_syrup, data: 0}]);
    Recipes.addShapeless({id: ItemID.coffee, count: 1, data: 0}, [{id: ItemID.coffee_cup, data: 0}, {id: 848, data: 0}]);
    Recipes.addShapeless({id: ItemID.corn_bread, count: 1, data: 0}, [{id: 297, data: 0}, {id: ItemID.corn, data: 0}]);
    Recipes.addShapeless({id: ItemID.corn_seeds, count: 1, data: 0}, [{id: ItemID.raw_corn, data: 0}]);
    Recipes.addShapeless({id: ItemID.crouton, count: 4, data: 0}, [{id: 297, data: 0}, {id: ItemID.butter, data: 0}]);
    Recipes.addShapeless({id: ItemID.cucumber_seeds, count: 1, data: 0}, [{id: ItemID.cucumber, data: 0}]);
    Recipes.addShapeless({id: ItemID.fish_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 877, data: 0}]);
    Recipes.addShapeless({id: ItemID.golden_apple_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: 322, data: 0}]);
    Recipes.addShapeless({id: ItemID.ground_beef, count: 2, data: 0}, [{id: 364, data: 0}]);
    Recipes.addShapeless({id: ItemID.ham, count: 1, data: 0}, [{id: 320, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.lemon_juice, count: 1, data: 0}, [{id: ItemID.lemon, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.lemon_seeds, count: 1, data: 0}, [{id: ItemID.lemon, data: 0}]);
    Recipes.addShapeless({id: ItemID.lemon_slushie, count: 1, data: 0}, [{id: ItemID.lemon_syrup, data: 0}, {id: 374, data: 0}, {id: 332, data: 0}]);
    Recipes.addShapeless({id: ItemID.lettuce_seeds, count: 1, data: 0}, [{id: ItemID.lettuce, data: 0}]);
    Recipes.addShapeless({id: ItemID.pepper_seeds, count: 1, data: 0}, [{id: ItemID.pepper, data: 0}]);
    Recipes.addShapeless({id: ItemID.pineapple_juice, count: 1, data: 0}, [{id: ItemID.pineapple, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.pineapple_seeds, count: 1, data: 0}, [{id: ItemID.pineapple, data: 0}]);
    Recipes.addShapeless({id: ItemID.pineapple_slushie, count: 1, data: 0}, [{id: ItemID.pineapple_syrup, data: 0}, {id: 374, data: 0}, {id: 332, data: 0}]);
    Recipes.addShapeless({id: ItemID.raw_chicken_wing, count: 2, data: 0}, [{id: 365, data: 0}]);
    Recipes.addShapeless({id: ItemID.salty_chips, count: 1, data: 0}, [{id: ItemID.chips, data: 0}, {id: ItemID.salt, data: 0}]);
    Recipes.addShapeless({id: ItemID.slice_of_pizza, count: 2, data: 0}, [{id: ItemID.pizza, data: 0}]);
    Recipes.addShapeless({id: ItemID.spicy_chicken_wing, count: 1, data: 0}, [{id: ItemID.cooked_chicken_wing, data: 0}, {id: ItemID.hot_sauce, data: 0}]);
    Recipes.addShapeless({id: ItemID.spicy_chips, count: 1, data: 0}, [{id: ItemID.chips, data: 0}, {id: ItemID.hot_sauce, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_ice_cream_ball, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}, {id: 332, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.strawberry_ice_cream, count: 1, data: 0}, [{id: ItemID.strawberry_ice_cream_ball, data: 0}, {id: ItemID.ice_cream_cone, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_juice, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_pie, count: 1, data: 0}, [{id: ItemID.pie_shell, data: 0}, {id: ItemID.strawberry, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_seeds, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}]);
    Recipes.addShapeless({id: ItemID.strawberry_slushie, count: 1, data: 0}, [{id: ItemID.strawberry_syrup, data: 0}, {id: 374, data: 0}, {id: 332, data: 0}]);
    Recipes.addShapeless({id: ItemID.sugar_donut, count: 1, data: 0}, [{id: 353, data: 0}, {id: ItemID.donut, data: 0}]);
    Recipes.addShapeless({id: ItemID.tomato_seeds, count: 1, data: 0}, [{id: ItemID.tomato, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_cream, count: 1, data: 0}, [{id: ItemID.vanilla_extract, data: 0}, {id: 353, data: 0}, {id: 353, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_donut, count: 1, data: 0}, [{id: ItemID.vanilla_cream, data: 0}, {id: ItemID.donut, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_extract, count: 1, data: 0}, [{id: ItemID.vanilla_flower, data: 0}, {id: 374, data: 0}]);
    Recipes.addShapeless({id: ItemID.vanilla_ice_cream_ball, count: 1, data: 0}, [{id: ItemID.vanilla_cream, data: 0}, {id: 332, data: 0}, {id: 876, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
    Recipes.addShapeless({id: ItemID.vanilla_ice_cream, count: 1, data: 0}, [{id: ItemID.vanilla_ice_cream_ball, data: 0}, {id: ItemID.ice_cream_cone, data: 0}]);
    Recipes.addShapeless({id: ItemID.waffle, count: 1, data: 0}, [{id: 876, data: 0}, {id: ItemID.cooked_dough, data: 0}], function(api, field, result){
        for(var i in field){
            api.decreaseFieldSlot(i);
        }
    Player.addItemToInventory(325, 1, 0)});
});




