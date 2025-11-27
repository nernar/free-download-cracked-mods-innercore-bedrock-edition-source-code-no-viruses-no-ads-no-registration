var GSLib = {generateStructure: function (x, y, z, structure) {
    for (var i = 0; i < structure.length; i++) {
        var curY = structure[i];
        var moveX = Math.floor(curY.length / 2);
        for (var o = 0; o < curY.length; o++) {
            var curX = curY[o];
            var moveZ = Math.floor(curX.length / 2);
            for (var p = 0; p < curX.length; p++) {
                var curBlock = curX[p];
                World.setBlock(x + o - moveX, y + i, z + p - moveZ, curBlock, 0);
            }
        }
    }
}};
registerAPIUnit("GSLib", GSLib);

