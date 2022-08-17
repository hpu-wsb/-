(function () {
    //得到元素
    let carousel_list = document.getElementById('carousel_list');
    let left_btn = document.getElementById('left_btn');
    let right_btn = document.getElementById('right_btn');

    //克隆第一张li
    let clone_li = carousel_list.firstElementChild.cloneNode(true);
    //上树
    carousel_list.appendChild(clone_li);

    //当前正在显示的图片序号，从0开始
    let idx = 0;

    //右按钮事件监听

    right_btn.onclick = function () {
        //加上过渡
        carousel_list.style.transition = 'transform .5s ease 0s';
        idx++;
        //拉动
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        //判断是否是最后一张
        if (idx > 4) {
            setTimeout(function () {
                //去掉过渡
                carousel_list.style.transition = 'none';
                //删除transform
                carousel_list.style.transform = 'none';
                idx = 0;
            }, 500);
        }
    };
    //左按钮的事件监听
    left_btn.onclick = function () {
        //左按钮很特殊，要先写if语句，而不是idx--
        if (idx == 0) {
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            //小技巧，延时0毫秒非常有用，可以让刚才的瞬移发生之后，再把过度加上
            setTimeout(function () {
                carousel_list.style.transition = 'transform .5s ease 0s';
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
                idx = 4;
            }, 0);
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }
    }
})();