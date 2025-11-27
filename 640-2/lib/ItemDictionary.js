/**
 *  ItemDictionary library
 *  Внимание! Запрещено:
 *      1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
 *      2.Изменение кода
 *      3.Явное копирование кода
 *  Используя библиотеку вы автоматически соглашаетесь с этими правилами.
 *  @MeduiIthron ( https://vk.com/lotrmod_be )
 */
LIBRARY({
	name: "ItemDictionary",
	version: 5,
	shared: true,
	api: "CoreEngine",
	dependencies: []
});

/**
 * Позволяет обьединять предметы в категории
 */
var ItemDictionary = {
    dictionary: {},

    /**
     * Создает новую категорию предметов
     * @param {*} categoryIdentifier ID категории
     */
    createCategory: function (categoryIdentifier) {
        this.dictionary[categoryIdentifier] = {}
    },

    /**
     * Добавляет предмет в категорию
     * @param {*} id  ID предмета
     * @param {*} categoryIdentifier ID категории
     */
    setItemCategory: function (id, categoryIdentifier) {
        if (!this.dictionary[categoryIdentifier]){
            this.createCategory(categoryIdentifier);
        }
        this.dictionary[categoryIdentifier][id] = true;
    },

    /**
     * Проверяет нахождение предмета в категории
     * @param {*} id  ID предмета
     * @param {*} categoryIdentifier ID категории
     */
    isItemInCategory: function (id, categoryIdentifier) {
        if (!this.dictionary[categoryIdentifier]) {
            return false;
        }
        if (this.dictionary[categoryIdentifier][id]) {
            return true
        }
        return false
    },

    /**
     * Удаляет предмет из категории
     * @param {*} id  ID предмета
     * @param {*} categoryIdentifier ID категории
     */
    removeItemFromCategory: function (id, categoryIdentifier) {
        if (this.dictionary[categoryIdentifier]&&this.dictionary[categoryIdentifier][id]) {
            this.dictionary[categoryIdentifier][id] = false;
        }
    },

    /**
     * Возвращает категорию
     * @param {*} categoryIdentifier
     */
    getCategory: function(categoryIdentifier){
        return this.dictionary[categoryIdentifier] || null;
    }
};

EXPORT("ItemDictionary", ItemDictionary);