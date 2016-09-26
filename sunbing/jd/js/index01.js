window.onload = function () {


    banner();

    //掌上秒杀
    killTime();
}

function banner() {
    var banner = document.querySelector(".banner");
    var w = banner.offsetWidth;
    var imgBox = banner.querySelector("ul:first-child");
    //console.log(imgBox);
    var point = banner.querySelector("ul:last-child");
    console.log(point);
    var points = point.querySelectorAll("li");
    console.log(points);
    var index = 1;
    //移动
    function transform(w) {
        imgBox.style.transform = "translateX(" + w + "px)";
        imgBox.style.webkitTransform = "translateX(" + w + "px)";
    }

    //添加过渡
    function addtransition() {
        imgBox.style.transition = "all 0.5s";
        imgBox.style.webkitTransition = "all 0.5s";

    }

    //清除过渡
    function removetransition() {
        imgBox.style.transition = "null";
        imgBox.style.webkitTransition = "null";
    }

    var timer = setInterval(function () {
        index++;
        console.log(index);
        addtransition();
        transform(-index * w);
    }, 2000);

    itcast.transitionEnd(imgBox, function () {
        //console.log(index);
        if (index >= 9) {
            index = 1;
            removetransition();
            transform(-index * w);
        } else if (index <= 0) {
            index = 8;
            removetransition();
            transform(-index * w);
        }
        setPoint(index);

    })

    function setPoint(index) {
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove("new");
        }
        points[index - 1].classList.add("new");
    }

//触屏
//    开始位置
    var starX = 0;
    //最终离开位置
    var moveX = 0;
    //移动的距离
    var longX = 0;
    var isMove = false;

    imgBox.addEventListener("touchstart", function (event) {
        clearInterval(timer);

        starX = event.touches[0].clientX;
    })


    imgBox.addEventListener("touchmove", function (event) {
        isMove = true;
        moveX = event.touches[0].clientX;
        longX = moveX - starX;
        var current = -index * w + longX;
        removetransition();
        transform(current);
    })


    imgBox.addEventListener("touchend", function () {
        if (isMove && Math.abs(longX) > w / 3) {
            if (longX > 0) {
                index--;
            } else {
                index++;
            }
            addtransition();
            transform(-index * w);
        } else {
            addtransition();
            transform(-index * w);
        }
        timer = setInterval(function () {
            index++;
            addtransition();
            transform(-index * w);
        },2000);

    })


}


//掌上秒杀
function killTime() {

    var longTime = 60 * 60 * 5;
    var spans = document.querySelectorAll(".jd_time>span");
    setInterval(function () {
        if (longTime <= 0) {
            return;
        }
        longTime--;
        var h = Math.floor(longTime / 3600);
        var m = Math.floor(longTime % 3600 / 60);
        var s = longTime % 60;
        spans[0].innerHTML = Math.floor(h / 10);
        spans[1].innerHTML = h % 10;
        spans[3].innerHTML = Math.floor(m / 10);
        spans[4].innerHTML = m % 10;
        spans[6].innerHTML = Math.floor(s / 10);
        spans[7].innerHTML = s % 10;
    }, 1000);

}