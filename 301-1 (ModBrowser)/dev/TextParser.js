var TextParser = {lastLinesCount: 0};
TextParser.limitLength = function (text, length) {
    TextParser.lastLinesCount = 0;
    var out = "";
    var lines = text.split("\n");
    for (var line in lines) {
        line = lines[line].trim();
        if (line.length <= length) {
            out += line + "\n";
            TextParser.lastLinesCount++;
        } else {
            words = line.split(" ");
            var i = 0;
            while (i < words.length) {
                var result = "";
                while (i < words.length && result.length + words[i].length <= length) {
                    result += words[i++] + " ";
                }
                i++;
                out += result + "\n";
                TextParser.lastLinesCount++;
            }
        }
    }
    return out;
};

