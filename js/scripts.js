$(document).ready(function(){
    //Login Modal
    $('#loginModalBtn').click(function() {
        $('#loginModal').modal('show');
    });
    $('#loginModalClose, #loginModalDismiss').click(function() {
        $('#loginModal').modal('hide');
    });

    //Reserve Table Modal
    $('#reserveModalBtn').click(function() {
        $('#reserveTableModal').modal('show');
    });
    $('#reserveModalClose, #reserveModalDismiss').click(function() {
        $('#reserveTableModal').modal('hide');
    });

    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});