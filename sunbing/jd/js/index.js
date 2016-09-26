window.onload = function () {
    search();
    banner();
}

function search() {

    var jd_top = document.querySelector(".jd_top");
    var banner = document.querySelector(".banner");
    var h = banner.offsetHeight;
    window.onscroll = function () {
        var opacity = 0;
        var top = document.body.scrollTop;
        if (top > h) {
            opacity = 0.85;
        } else {
            opacity = top / h * 0.85
        }

        jd_top.style.backgroundColor = "rgba(201,21,35," + opacity + ")";
    }
}

//轮播图
function banner() {
    var banner = document.querySelector(".banner");
    var w = banner.offsetWidth;
    var imgBox = banner.querySelector("ul:first-child");
    var point = banner.querySelector("ul:last-child");
    var points = point.querySelectorAll("li");
    var index = 1;
    //添加过渡
    function addtransition() {
        imgBox.style.transition = "all .5s";
        imgBox.style.webkitTransition = "all .5s";
    }

    //取消过渡
    function removetransition() {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }

    //添加移动
    function addtransform(w) {
        imgBox.style.transform = "translateX(" + w + "px)";
        imgBox.style.webkitTransform = "translateX(" + w + "px)";
    }

    var timer = setInterval(function () {
        index++;
        //console.log(index);
        addtransition();
        addtransform(-index * w);
        //setPoints(index);

    }, 2000);

    itcast.transitionEnd(imgBox, function () {
        if (index >= 9) {
            index = 1;
            removetransition();
            addtransform(-index * w);
        } else if (index <= 0) {
            index = 8;
            removetransition();
            addtransform(-index * w);
        }
        setPoints(index);
    })

    function setPoints(index) {
        //console.log(index);
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove("new");

        }
        points[index - 1].classList.add("new");
    }

//获取开始点的位置
    var startX = 0;
    //获取移动的触摸点的位置
    var moveX = 0;
    //获取移动的长度
    var moveLong = 0;
    //判断是否移动
    var isMove = false;


    //触摸开始
    imgBox.addEventListener("touchstart", function (event) {
        //console.log("kaishi");
//清除定时器
        clearInterval(timer);
        //记录开始点的位置
        console.log(event);
        startX = event.touches[0].clientX;
        console.log(startX);
    })
    //触摸移动
    imgBox.addEventListener("touchmove", function (event) {
        isMove = true;

        moveX = event.touches[0].clientX;

        moveLong = moveX - startX;
        //当前imgbox的位置
        var boxMove = (-index * w) + moveLong;
        removetransition();
        addtransform(boxMove);
    })
    //触摸结束
    imgBox.addEventListener("touchend", function (event) {

        if(isMove && Math.abs(moveLong)>w/3){
            if(moveLong>=0){
                index--;
            }else{
                index++;
            }

            addtransition();
            addtransform(-index * w);
        }else{

            addtransition();
            addtransform(-index * w);
        }

         timer = setInterval(function () {
            index++;
            //console.log(index);
            addtransition();
            addtransform(-index * w);
            //setPoints(index);

        }, 2000);

    })


}