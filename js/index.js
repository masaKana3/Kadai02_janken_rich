$(function () {
    $(".balloon_oya_txt1").hide();
    $(".balloon_oya_txt2").hide();
    $(".balloon_oya_txt3").hide();
    $('.balloon_oya').hover(
        function () {
            $(this).children(".balloon_oya_txt1").fadeIn(1000);
            $(this).children(".balloon_oya_txt2").delay(2000).fadeIn(1000);
            $(this).children(".balloon_oya_txt3").delay(3000).fadeIn(1000);
        });
});

var img = document.getElementById("coinbox");
var width = img.naturalWidth;
var height = img.naturalHeight;
console.log(width, height);


$("#coinbox").on("click", function () {
    $("#sound_coin").get(0).play();
    //   });


    var num = Math.floor(Math.random() * 6);
    console.log(num, "点取り占い")

    if (num === 0) {
        console.log("1ten");
        $("#imagearea_1").delay("slow").attr("src", "img/tentori_choju_1ten.jpg");
        $("#sound_1ten").delay("slow").get(0).play();
        $(".contents").css('background-color', 'black')

    } else if (num === 1) {
        console.log("2ten");
        $("#imagearea_1").attr("src", "img/tentori_choju_2ten.jpg");
        $(".contents").css("background-color", "gray");
    } else if (num === 2) {
        console.log("3ten");
        $("#imagearea_1").attr("src", "img/tentori_choju_3ten.jpg");
        $(".contents").css("background-color", "gray");
    } else if (num === 3) {
        console.log("5ten");
        $("#imagearea_1").attr("src", "img/tentori_choju_5ten.jpg");
        $(".contents").css("background-color", "yellowgreen");
    } else if (num === 4) {
        console.log("7ten");
        $("#imagearea_1").attr("src", "img/tentori_choju_7ten.jpg");
        $(".contents").css("background-color", "lightblue");
        $("#sound_7ten").delay("slow").get(0).play();
    } else if (num === 5) {
        console.log("10ten");
        $("#imagearea_1").attr("src", "img/tentori_choju_10ten.jpg");
        $(".contents").css("background-color", "pink");
        $("#sound_10ten").delay("slow").get(0).play();
    }
});