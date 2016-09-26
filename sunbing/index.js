window.onload = function () {
    $(".yes").on("click", function () {
        $(".cover").addClass("hide");
        $(".cover1").addClass("show");
    });
    $(".videoY").on("click", function () {

        $(".cover1").removeClass("show");
        $(".cover2").addClass("show");
    })

    //var video = $("video")[0];
    //video.oncanplay = function () {
    //
    //    var h = Matn.floor(video.duration / 3600);
    //    var m;
    //    if (video.duration >= 3600) {
    //        m = Math.floor((video.duration % 3600) / 60)
    //    } else {
    //        m = Math.floor(video.duration / 60)
    //    }
    //    ;
    //    var s = Math.floor(video.duration % 60);
    //    h = h < 10 ? "0" + h : h;
    //    m = m < 10 ? "0" + m : m;
    //    s = s < 10 ? "0" + s : s;
    //    var total = h + ":" + m + ":" + s;
    //    $(".total").html(total);
    //}
    //
    //$(".switch").click(function () {
    //    $(".switch").toggleClass("fa-play fa-pause");
    //    if (video.paused) {
    //        video.play();
    //    } else {
    //        video.pause();
    //    }
    //
    //})

}
