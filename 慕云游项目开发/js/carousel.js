(function () {
    //得到元素
    let carousel_list = document.getElementById('carousel_list');
    let left_btn = document.getElementById('left_btn');
    let right_btn = document.getElementById('right_btn');
    let ciricle_ol = document.getElementById('ciricle_ol')
    let ciricle_lis = ciricle_ol.getElementsByTagName('li')

    //克隆第一张li
    let clone_li = carousel_list.firstElementChild.cloneNode(true);
    //上树
    carousel_list.appendChild(clone_li);

    //当前正在显示的图片序号，从0开始
    let idx = 0;
    //节流锁
    let lock = true;

    //右按钮事件监听

    right_btn.onclick = right_btn_handler
    //右按钮的时间处理函数
    function right_btn_handler() {
        //判断节流锁的状态，如果是关闭的，就什么都不做
        if (!lock) return;
        //关锁
        lock = false;
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
        //设置小圆点
        setCircles();
        //开锁
        setTimeout(function () {
            lock = true;
        }, 500);
    };
    //左按钮的事件监听
    left_btn.onclick = function () {
        //判断节流锁的状态，如果是关闭的，就什么都不做
        if (!lock) return;
        //关锁
        lock = false;
        //左按钮很特殊，要先写if语句，而不是idx--
        if (idx == 0) {
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            idx = 4
            //小技巧，延时0毫秒非常有用，可以让刚才的瞬移发生之后，再把过度加上
            setTimeout(function () {
                carousel_list.style.transition = 'transform .5s ease 0s';
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
            }, 0);
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }
        //设置小圆点
        setCircles();
        //开锁
        setTimeout(function () {
            lock = true
        }, 500);
    }
    //设置小圆点的current在谁身上，序号为idx的小圆点才有current类名，其他的li都没有类名
    function setCircles() {
        //遍历
        for (let i = 0; i < 5; i++) {
            //这里的%5非常巧妙，0，1，2，3，4除以五都是它本身，但是5除以5等于0了
            //这里有一瞬间idx=5
            if (i == idx % 5) {
                circle_lis[i].className = 'current'
            } else {
                circle_lis[i].className = ''
            }
        }
    }
    //事件委托.小圆点的监听
    ciricle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            //得到li身上的data_n属性，就是n
            var n = Number(e.target.getAtteribute('date_n'));
            //改变idx
            idx = n;
            //拉动
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
            //调用改变小圆点的函数
            setCircles()
        }
    }
    //定时器，自动轮播
    setInterval(right_btn_handler, 2000);
})();