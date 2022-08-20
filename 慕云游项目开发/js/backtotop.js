(function () {
    let backtotop = document.getElementById('backtotop');
    let timer;

    backtotop.onclick = function () {
        //设表先关
        clearInterval(timer);
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;
            if (document.documentElement.scrollTo <= 0) {
                clearInterval(timer)
            }
        }, 20)
    };
    //监听页面的滚动
    window.onscroll = function () {
        //卷动值
        var scrollTop = document.documentElement.scrollTop || window.scrollY;
        //页面无卷动，返回顶部按钮隐藏
        if (scrollTop == 0) {
            backtotop.style.display = 'none';
        } else {
            backtotop.style.display = 'block'
        }
    }
})();