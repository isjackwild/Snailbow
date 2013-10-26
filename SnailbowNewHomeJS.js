$(window).load(function() {
    $('#end').css({
        'height': ($(window).height())
    });

    $('#load').addClass("hide");
    $('#ready').removeClass("hide");

});


$(window).resize(function() {
    $('#end').css({
        'height': ($(window).height())
    });
});


var bind = function(scope, fn) {
    return function () {
        fn.apply(scope, arguments);
    };
};


$(document).ready(function(){
    $(".centre").each(function(){
        $(this).css({
           'margin-top': -$(this).height() / 2
        });
    })

    SnailBoxScrollManager.init();
});

$(window).resize(function(){
    $(".centre").each(function(){
            $(this).css({
                    'margin-top': -$(this).height() / 2
                });
    })
});

var SnailBoxScrollManager = {
    coswavelength: 1000,
    coswavelength2: 200,
    init: function()
    {
        $(document).scroll(bind(this, this.onWindowScroll));
    },
    onWindowScroll: function()
    {
        this.onScroll($(document).scrollTop())
    },
    onScroll: function(scrollPos)
    {
        //var cos = Math.floor((Math.cos(scrollPos))*10), cos2

        var cos = Math.floor( (Math.cos ( scrollPos / this.coswavelength ) ) *10);
        var cos2 = Math.floor( (Math.cos ( scrollPos / this.coswavelength2 ) ) *10);


        $('#floor').css({
            'margin-left': - scrollPos / 7.5
        });

        $('.cloud-m').css({
            'margin-left': - scrollPos / 5
        });

        $('.cloud-s').css({
            'margin-left': - scrollPos / 7
        });

        $('.cloud-l').css({
            'margin-left': - scrollPos / 4
        });

        $('#dandy-1').css({
            'margin-left': - scrollPos / 10
        });

        $('#dandy-2').css({
            'margin-left': - scrollPos / 7
        });

        $('#dandy-1').css({
            'margin-top': - (cos * 3)
        });

        $('#dandy-2').css({
            'margin-top': - (cos * 3.3)
        });

        $('#leaf-3').css({
            'margin-left': - (scrollPos) / 5
        });

        $('#leaf-2').css({
            'margin-left': - (scrollPos) / 7
        });

        $('#leaf-3').css({
            'margin-top': - (cos * 3)
        });

        $('#leaf-2').css({
            'margin-top': - (cos * 3.3)
        });

         $('#ooh').css({
            'margin-left': - (scrollPos) / 1.5
        });

        $('#aah').css({
            'margin-left': - (scrollPos) / 1.5
        });

        $('#ooh').css({
            'margin-top': + (cos2 * 5)
        });

        $('#aah').css({
            'margin-top': - (cos2 * 5)
        });

        $('#friends-owl').css({
            'margin-top': + (cos2 * 2)
        });

        $('#friends-owl').css({
            'margin-right': + (cos * 6)
        });


        if ((scrollPos > 0 && scrollPos < 11940) || (scrollPos > 14900 && scrollPos < 20940) || (scrollPos > 23900 && scrollPos < 29900) || (scrollPos > 32900 && scrollPos < 38940) || scrollPos > 43900) {
                $('#snailbow-body').removeClass("hide");
            } else {
                $('#snailbow-body').addClass("hide");
            }

        if ((scrollPos == 0) || (scrollPos > 5900 && scrollPos < 11940) || (scrollPos > 17940 && scrollPos < 20940) || (scrollPos > 26940 && scrollPos < 29940) || (scrollPos > 35940 && scrollPos < 38940)) {
                $('#mouth-sad').removeClass("hide");
            } else {
                $('#mouth-sad').addClass("hide");
            }

        if ((scrollPos == 0) || (scrollPos > 14940 && scrollPos < 17940) || (scrollPos > 23940 && scrollPos < 26940) || (scrollPos > 32940 && scrollPos < 35940) || (scrollPos > 43940 && scrollPos < 46940)) {
                $('#mouth-confused').removeClass("hide");
            } else {
                $('#mouth-confused').addClass("hide");
            }

        if ((scrollPos > 0 && scrollPos < 5940) || scrollPos > 46940) {
                $('#mouth-happy').removeClass("hide");
            } else {
                $('#mouth-happy').addClass("hide");
            }

        if ((scrollPos > 0 && scrollPos < 11940) || (scrollPos > 17900 && scrollPos < 20940) || (scrollPos > 26900 && scrollPos < 29940) || (scrollPos > 35900 && scrollPos < 38940) || scrollPos > 43900) {
                $('#shell-snail').removeClass("hide");
            } else {
                $('#shell-snail').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 14900 && scrollPos < 17940) {
                $('#shell-turtle').removeClass("hide");
            } else {
                $('#shell-turtle').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 23900 && scrollPos < 26940) {
                $('#shell-armadillo').removeClass("hide");
            } else {
                $('#shell-armadillo').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 32900 && scrollPos < 35940) {
                $('#shell-crab').removeClass("hide");
            } else {
                $('#shell-crab').addClass("hide");
            }

        if ((scrollPos == 0) || (scrollPos > 11900 && scrollPos < 14940) || (scrollPos > 20900 && scrollPos < 23940) || (scrollPos > 29900 && scrollPos < 32940) || (scrollPos > 38900 && scrollPos < 43940)){
                $('#friends-snailbow').removeClass("hide");
            } else {
                $('#friends-snailbow').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 11900 && scrollPos < 14940) {
                $('#friends-turtle').removeClass("hide");
            } else {
                $('#friends-turtle').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 20900 && scrollPos < 23940) {
                $('#friends-armadillo').removeClass("hide");
            } else {
                $('#friends-armadillo').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 29900 && scrollPos < 32940) {
                $('#friends-crab').removeClass("hide");
            } else {
                $('#friends-crab').addClass("hide");
            }

        if ((scrollPos == 0) || scrollPos > 38900 && scrollPos < 43940) {
                $('#friends-owl').removeClass("hide");
            } else {
                $('#friends-owl').addClass("hide");
            }


        if(scrollPos > 50){
            $('#music').removeClass("mute");
        }
    }
}

