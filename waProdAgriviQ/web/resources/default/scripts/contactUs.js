/// <reference path="jquery-2.1.4.js" />
$(document).ready(function () {
    $('#submitContactUs').on('click', callServer);
});

function callServer() {
    var data = $('#contactForm').serialize();
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}