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





$(document).ready(function(){
    $(".centre").each(function(){
            $(this).css({
                    'margin-top': -$(this).height() / 2
                });
    })
});

$(window).resize(function(){
    $(".centre").each(function(){
            $(this).css({
                    'margin-top': -$(this).height() / 2
                });
    })
});



var cos = Math.floor((Math.cos($(document).scrollTop()))*10);
            var coswavelength = 1000;
            var coswavelength2 = 200;
            var fromtop;


            $(document).scroll(function(e) {

                fromtop = ($(document).scrollTop());
                cos = Math.floor( (Math.cos ( $(document).scrollTop() / coswavelength ) ) *10);
                cos2 = Math.floor( (Math.cos ( $(document).scrollTop() / coswavelength2 ) ) *10);


                $('#floor').css({
                    'margin-left': - fromtop / 7.5
                });
         
                $('.cloud-m').css({
                    'margin-left': - fromtop / 5
                });
     
                $('.cloud-s').css({
                    'margin-left': - fromtop / 7
                });
           
                $('.cloud-l').css({
                    'margin-left': - fromtop / 4
                });
            
                $('#dandy-1').css({
                    'margin-left': - fromtop / 10
                });

                $('#dandy-2').css({
                    'margin-left': - fromtop / 7
                });

                $('#dandy-1').css({
                    'margin-top': - (cos * 3)
                });

                $('#dandy-2').css({
                    'margin-top': - (cos * 3.3)
                });

                $('#leaf-3').css({
                    'margin-left': - ($(document).scrollTop()) / 5
                });

                $('#leaf-2').css({
                    'margin-left': - ($(document).scrollTop()) / 7
                });

                $('#leaf-3').css({
                    'margin-top': - (cos * 3)
                });

                $('#leaf-2').css({
                    'margin-top': - (cos * 3.3)
                });

                 $('#ooh').css({
                    'margin-left': - ($(document).scrollTop()) / 1.5
                });

                $('#aah').css({
                    'margin-left': - ($(document).scrollTop()) / 1.5
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



                fromtop = ($(document).scrollTop());

                if ((fromtop > 0 && fromtop < 11940) || (fromtop > 14900 && fromtop < 20940) || (fromtop > 23900 && fromtop < 29900) || (fromtop > 32900 && fromtop < 38940) || fromtop > 43900) {
                        $('#snailbow-body').removeClass("hide");
                    } else {
                        $('#snailbow-body').addClass("hide");
                    }

                if ((fromtop == 0) || (fromtop > 5900 && fromtop < 11940) || (fromtop > 17940 && fromtop < 20940) || (fromtop > 26940 && fromtop < 29940) || (fromtop > 35940 && fromtop < 38940)) {
                        $('#mouth-sad').removeClass("hide");
                    } else {
                        $('#mouth-sad').addClass("hide");
                    }

                if ((fromtop == 0) || (fromtop > 14940 && fromtop < 17940) || (fromtop > 23940 && fromtop < 26940) || (fromtop > 32940 && fromtop < 35940) || (fromtop > 43940 && fromtop < 46940)) {
                        $('#mouth-confused').removeClass("hide");
                    } else {
                        $('#mouth-confused').addClass("hide");
                    }

                if ((fromtop > 0 && fromtop < 5940) || fromtop > 46940) {
                        $('#mouth-happy').removeClass("hide");
                    } else {
                        $('#mouth-happy').addClass("hide");
                    }

                if ((fromtop > 0 && fromtop < 11940) || (fromtop > 17900 && fromtop < 20940) || (fromtop > 26900 && fromtop < 29940) || (fromtop > 35900 && fromtop < 38940) || fromtop > 43900) {
                        $('#shell-snail').removeClass("hide");
                    } else {
                        $('#shell-snail').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 14900 && fromtop < 17940) {
                        $('#shell-turtle').removeClass("hide");
                    } else {
                        $('#shell-turtle').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 23900 && fromtop < 26940) {
                        $('#shell-armadillo').removeClass("hide");
                    } else {
                        $('#shell-armadillo').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 32900 && fromtop < 35940) {
                        $('#shell-crab').removeClass("hide");
                    } else {
                        $('#shell-crab').addClass("hide");
                    }

                if ((fromtop == 0) || (fromtop > 11900 && fromtop < 14940) || (fromtop > 20900 && fromtop < 23940) || (fromtop > 29900 && fromtop < 32940) || (fromtop > 38900 && fromtop < 43940)){
                        $('#friends-snailbow').removeClass("hide");
                    } else {
                        $('#friends-snailbow').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 11900 && fromtop < 14940) {
                        $('#friends-turtle').removeClass("hide");
                    } else {
                        $('#friends-turtle').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 20900 && fromtop < 23940) {
                        $('#friends-armadillo').removeClass("hide");
                    } else {
                        $('#friends-armadillo').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 29900 && fromtop < 32940) {
                        $('#friends-crab').removeClass("hide");
                    } else {
                        $('#friends-crab').addClass("hide");
                    }

                if ((fromtop == 0) || fromtop > 38900 && fromtop < 43940) {
                        $('#friends-owl').removeClass("hide");
                    } else {
                        $('#friends-owl').addClass("hide");
                    }


                if(fromtop > 50){
                    $('#music').removeClass("mute");
                }

            });


    
$(window).scroll(function() {
     console.log(fromtop);
  });
