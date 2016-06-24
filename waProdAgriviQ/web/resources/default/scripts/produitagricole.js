/// <reference path="jquery-2.1.4.js" />

$(document).ready(function () {
    $('#submitPA').on('click', callServer);
})

function callServer() {
    var data = $('form[name="produitagricoleForm"]').serialize();
    $.post('/PAService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}
