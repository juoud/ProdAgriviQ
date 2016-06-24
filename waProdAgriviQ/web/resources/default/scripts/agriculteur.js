/// <reference path="jquery-2.1.4.js" />
$(document).ready(function () {
    $('#submitAgriculteur').on('click', callServer);
});

function callServer() {
    var data = $('form[name="agriculteurForm"]').serialize();
    $.post('/agriculteurService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}

