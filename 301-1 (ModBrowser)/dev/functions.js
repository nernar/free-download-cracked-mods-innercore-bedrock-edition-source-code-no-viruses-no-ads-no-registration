function inThread(func) {
    (new java.lang.Thread({run: function () {
        try {
            func();
        }
        catch (e) {
            print("Error in mod browser networking:\n" + e);
        }
    }})).start();
}
function removeFromArray(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

