(function () {
    let bannerNavul = document.getElementById('banner-nav-ul');
    let bannerLis = document.querySelectorAll('#banner-nav-ul li');
    let bannerNav = document.getElementById('banner-nav');
    let menus = document.querySelectorAll('.menus-box .menu')

    //事件委托,必须使用onmouseover事件，而不是onmouseenter
    //onmouseover冒泡，onmouseenter不冒泡
    bannerNavul.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            let t = e.target.getAttribute('data-t');
            console.log(t)
            //寻找匹配的menu
            let themenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            //寻找所有menu
            //排他操作，让其他的盒子都去掉current类名
            for (let i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }
            //匹配的这项加上current类名
            themenu.className = 'menu current'
        }
    }
    //当鼠标离开大盒子的时候，菜单要关闭
    bannerNav.onmouseleave = function () {
        for (let i = 0; i < bannerLis.length; i++) {
            bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            menus[i].className = 'menu';
        }
    }

})();