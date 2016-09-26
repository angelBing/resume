window.onload = function () {
    var del = document.querySelectorAll(".product_buy_right");
    //console.log(del);
    var up;

    var minBox = document.querySelector(".minBox");
    var jd_minBox = document.querySelector(".jd_minBox");

    var clear=document.querySelector(".clear");
    for (var i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            minBox.style.display = "block";
            jd_minBox.classList.add("moveY");
            up = this.querySelector(".up");
            up.style.transform = "rotate(-30deg)";
            up.style.transition="all 0.5s ";
            up.style.transformOrigin = "left bottom";
        }

    }

    clear.onclick=function(){
        minBox.style.display = "none";
        up.style.transform = "rotate(0deg)";
    }

}
