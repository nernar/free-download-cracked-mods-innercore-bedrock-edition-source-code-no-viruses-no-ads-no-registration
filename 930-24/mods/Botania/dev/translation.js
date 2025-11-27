let all_translation_keys = {};
function readFile(name) {
    FileTools.ReadText(__dir__ + "/assets/lang/" + name + ".lang").split("\n").filter(function (element) {
        return element.length > 0 && !element.startsWith("#");
    }).forEach(function (line) {
        let kv = line.split("=");
        if (!all_translation_keys[kv[0]]) {
            all_translation_keys[kv[0]] = {};
        }
        all_translation_keys[kv[0]][name] = kv[1];
    });
}
FileTools.GetListOfFiles(__dir__ + "/assets/lang", "lang").forEach(function (file) {
    readFile(file.getName().replaceFirst("[.][^.]+$", ""));
});
for (let key in all_translation_keys) {
    if (!all_translation_keys[key][Translation.getLanguage()]) {
        all_translation_keys[key][Translation.getLanguage()] = all_translation_keys[key].en;
    }
    Translation.addTranslation(key, all_translation_keys[key]);
}

