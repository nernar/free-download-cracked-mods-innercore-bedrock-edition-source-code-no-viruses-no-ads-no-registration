var DownloadHandler = {downloads: [], addDownload: function (url, callbacks, type) {
    var download = {url: url, status: "prepared", isCancelled: function () {
        return this.status == "stopped";
    }, cancel: function () {
        if (!this.isCancelled() && this.status != "finishing") {
            this.status = "stopped";
            if (this._cancel) {
                this._cancel();
            }
        }
    }};
    for (var name in callbacks) {
        download["_" + name] = callbacks[name];
    }
    this.downloads.push(download);
    inThread(function () {
        if (!download.isCancelled()) {
            download.status = "running";
            if (download._start) {
                download._start();
            }
        }
        try {
            var action = Network.downloadFile;
            if (type) {
                action = Network.downloadIcon;
            }
            var result = action(url, {message: function (msg) {
                if (download._message && !download.isCancelled()) {
                    download._message(msg);
                }
            }, progress: function (p) {
                if (download._progress && !download.isCancelled()) {
                    download._progress(p);
                }
            }, isCancelled: function () {
                return download.isCancelled();
            }});
        }
        catch (e) {
            if (download._fail) {
                download._fail(e);
            }
        }
        if (!download.isCancelled()) {
            download.status = "finishing";
            if (result) {
                if (download._complete) {
                    download._complete(result);
                }
            } else {
                if (download._fail) {
                    download._fail();
                }
            }
            download.status = "stopped";
        }
    });
}, stop: function (url) {
    for (var i in this.downloads) {
        var download = this.downloads[i];
        if (download.url == url) {
            this.downloads.splice(i--);
            download.cancel();
        }
    }
}, stopAll: function () {
    for (var i in this.downloads) {
        this.downloads[i].cancel();
    }
    this.downloads = [];
}};

