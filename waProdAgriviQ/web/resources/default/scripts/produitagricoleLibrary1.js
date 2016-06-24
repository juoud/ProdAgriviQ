/// <reference path="_references.js" />

$(document).ready(function () {
    produitagricolesNamespace.initialize();
});

(function () {
    this.produitagricolesNamespace = this.produitagricolesNamespace || {};
    var ns = this.produitagricolesNamespace;
    var currentRecord;

    ns.initialize = function () {
              ns.display();     
    };


    function retrieveFromStorage() {
        var produitagricolesJSON = localStorage.getItem('produitagricoles');
        return produitagricolesJSON ? JSON.parse(produitagricolesJSON) : [];
    }

    function bindToGrid(results) {
        var html = '';

        for (var i = 0; i < results.length; i++) {
            var produitagricole = results[i];
            html += '<tr><td>' + produitagricole.varietePA + '</td>';
            html += '<td>' + produitagricole.nomPA + '</td>';
            html += '<td>' + produitagricole.nomLocalPA + '</td>';
            html += '<td>' + produitagricole.nomScientifiquePA + '</td>';
            html += '<td>' + produitagricole.descriptionPA + '</td>';
            if ($('#imagePA') != null)
                html += '<td>' + produitagricole.imagePA + '</td>';
            if ($('#videoPA') != null)
                html += '<td>' + produitagricole.videoPA + '</td>';
            html += '<td><a class="edit" href = "javascript:void(0)" data-key=' + i + '>Non publié</a></td></tr>'; 
        }

        html = html || '<tr><td colspan="3">Aucune donnée disponible !</td></tr>';
        $('#mesPAetat tbody').html(html);
    }

    ns.display = function () {
        //if ($('#editProduitAgricolForm')) {
            $('#currentAction').html('Éditer un produit agricole')
            
        //};

        currentRecord = { key: null, produitagricole: {} };
        displayCurrentRecord();

        var results = retrieveFromStorage();
        bindToGrid(results);
    }
    

    ns.loadProduitAgricole = function () {
        var key = parseInt($(this).attr('data-key'));
        var results = retrieveFromStorage();
        $('#currentAction').html('Édition de produit agricole');
        currentRecord = { key: key, produitagricole: results[key] };
        displayCurrentRecord();
    };

    function displayCurrentRecord() {
        var produitagricole = currentRecord.produitagricole;
        
        $('#nomPA').val(produitagricole.nomPA);
        $('#nomLocalPA').val(produitagricole.nomLocalPA);
        $('#nomScientifiquePA').val(produitagricole.nomScientifiquePA);
        $('#descriptionPA').val(produitagricole.descriptionPA);
        $('#varietePA').val(produitagricole.varietePA);
    }

    ns.save = function () {
        var produitagricole = currentRecord.produitagricole;
        
        produitagricole.nomPA = $('#nomPA').val();
        produitagricole.nomLocalPA = $('#nomLocalPA').val();
        produitagricole.nomScientifiquePA = $('#nomScientifiquePA').val();
        produitagricole.descriptionPA = $('#descriptionPA').val();
        produitagricole.varietePA = $('#varietePA').val();

        var results = retrieveFromStorage();

        if (currentRecord.key != null) {
            results[currentRecord.key] = produitagricole;
        } else {
            results.push(produitagricole);
        }

        localStorage.setItem('produitagricoles', JSON.stringify(results));
    }

    ns.save2 = function () {
        var produitagricole = currentRecord.produitagricole;
        produitagricole.nomPA = $('#nomPA').val();
        produitagricole.nomLocalPA = $('#nomLocalPA').val();
        produitagricole.nomScientifiquePA = $('#nomScientifiquePA').val();
        produitagricole.descriptionPA = $('#descriptionPA').val();
        produitagricole.varietePA = $('#varietePA').val();
        produitagricole.imagePA = $('#imagePA').val().toString;
        produitagricole.videoPA = $('#videoPA').val().toString;

        var results = retrieveFromStorage();


        results.push(produitagricole);


        localStorage.setItem('produitagricoles', JSON.stringify(results));
    };

})();

