$(document).ready(function() {
    //add material classes to calendar pls
    $(".fc-prev-button, .fc-next-button").each(function() {
        $(this).addClass("mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent");
    });

    //add material classes to calendar pls
    $(".fc-today-button").each(function() {
        $(this).addClass("mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect");
    });

    //animations
    $('.mdl-layout__drawer').addClass('animated fadeIn');
    $('#storage-section, #movies-section, #sonarr-section').addClass('animated fadeIn');
});