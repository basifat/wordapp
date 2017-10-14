$(document).ready(function () {
    $('.tabs a').click(function () {
        switch_tabs($(this));
    });

    switch_tabs($('.defaulttab'));

});

function switch_tabs(obj)
{
    $('.tab-content').hide();
    $('.tabs li').removeClass("selected");
    var id = obj.attr("name");

    $('#' + id).show();
    obj.parent().addClass("selected");
}
// Popup
$(document).ready(function () {
    //When you click on a link with class of poplight and the href starts with a #
    // $('a.poplight[href^=#]').click(function () {
    //     var popID = $(this).attr('rel'); //Get Popup Name
    //     var popURL = $(this).attr('href'); //Get Popup href to define size
    //
    //     //Pull Query & Variables from href URL
    //     var query = popURL.split('?');
    //     var dim = query[1].split('&');
    //     var popWidth = dim[0].split('=')[1]; //Gets the first query string value
    //
    //     //Fade in the Popup and add close button
    //     $('#' + popID).fadeIn();
    //
    //     //Fade in Background
    //     $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    //     $('#fade').css({'filter': 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer
    //
    //     return false;
    // });
    //
    // //Close Popups and Fade Layer
    // $('a.close, #fade').live('click', function () { //When clicking on the close or fade layer...
    //     $('#fade , .popup_block').fadeOut(function () {
    //     }); //fade them both out
    //
    //     return false;
    // });

    $('.fakesubmit').click(function (e) {
        if ($(this).attr('id') == 'sendbtn') {
            e.preventDefault();
            $('#id_submit1').click();
        } else if ($(this).attr('id') == 'signbtn') {
            e.preventDefault();
            $('#id_submit2').click();
        } else if ($(this).attr('id') == 'getstartedbtn') {
            return true;
        } else {
            e.preventDefault();
            $('#blue input[type="submit"]').click();
        }
    });
    $('.mobilemenu').click(function () {
        $('#menu').slideToggle();
    });
});

$(window).resize(function () {
    var w = $(window).innerWidth();
    if (w < 1000) {
        $('.mobilemenu').show();
        $('#menu').hide();
    } else {
        $('.mobilemenu').hide();
        $('#menu').show();
    }
});
$(window).load(function () {
    var w = $(window).innerWidth();
    if (w < 1000) {
        $('.mobilemenu').show();
        $('#menu').hide();
    } else {
        $('.mobilemenu').hide();
        $('#menu').show();
    }


});
$(document).ready(function () {
//    $('input, textarea').placeholder();
});
