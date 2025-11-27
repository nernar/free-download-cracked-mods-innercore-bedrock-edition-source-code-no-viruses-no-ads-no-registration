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
 * Позволяет объединять предметы в категории
 */
let ItemDictionary = {
    /**
     * Список всех существующих категорий
     * @private {*}
     */
    dictionary: {},

    /**
     * Создает новую категорию предметов
     * @param {string} categoryIdentifier ID категории
     */
    createCategory: function (categoryIdentifier) {
        this.dictionary[categoryIdentifier] = {}
    },

    /**
     * Добавляет предмет в категорию
     * @param {number} id  ID предмета
     * @param {string} categoryIdentifier ID категории
     */
    setItemCategory: function (id, categoryIdentifier) {
        if (!this.dictionary[categoryIdentifier]) {
            this.createCategory(categoryIdentifier);
        }
        this.dictionary[categoryIdentifier][id] = true;
    },

    /**
     * Проверяет нахождение предмета в категории
     * @param {number} id  ID предмета
     * @param {string} categoryIdentifier ID категории
     * @returns {boolean} Результат проверки
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
     * @param {number} id  ID предмета
     * @param {string} categoryIdentifier ID категории
     */
    removeItemFromCategory: function (id, categoryIdentifier) {
        if (this.dictionary[categoryIdentifier] && this.dictionary[categoryIdentifier][id]) {
            this.dictionary[categoryIdentifier][id] = false;
        }
    },

    /**
     * Возвращает категорию
     * @param {string} categoryIdentifier ID категории
     * @returns {object} Категория
     */
    getCategory: function (categoryIdentifier) {
        return this.dictionary[categoryIdentifier] || null;
    },

    /**
     * Возвращает все предметы в категории
     * @param {string} categoryIdentifier ID категории
     * @returns {[]} Массив предметов в категории
     */
    getCategoryItems: function (categoryIdentifier) {
        let items = []
        if (this.dictionary[categoryIdentifier]) {
            for (let i in this.dictionary[categoryIdentifier]) {
                items.push(parseInt(i));
            }
        }
        return items;
    }
};

EXPORT("ItemDictionary", ItemDictionary);