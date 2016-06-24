/// <reference path="_references.js" />

$(document).ready(function () {
    produitagricolesNamespace.initialize();
});

(function () {
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    this.produitagricolesNamespace = this.produitagricolesNamespace || {};
    var ns = this.produitagricolesNamespace;
    var currentRecord;

    //Fonction de création de fichiers
    function getFile(fileSystem) {
        fileSystem.root.getFile(nomImagePA, { create: true }, fileOpened, handleError);
    }

    function fileOpened(fileEntry) {
        alert("Fichier déjà ouvert!");
    }

    function handleError(error) {
        alert(error.code);
    }
    //======================

    ns.initialize = function () {
        if ($('#produitagricoleForm')) {
            $('#submitPA').on('click', ns.save2);
            $('#submitPA').on('keypress', ns.save2);
            ns.display();
        } else if( $('#editProduitAgricolForm')) {
            $('#savePA').on('click', ns.save);
            $('#savePA').on('keypress', ns.save);
            //ns.display();
        } else {
            $('#mesPAetat').ready(function () {
                ns.display();
            });
        }
        
       
    };


    function retrieveFromStorage() {
        var produitagricolesJSON = localStorage.getItem('produitagricoles');
        return produitagricolesJSON ? JSON.parse(produitagricolesJSON) : [];
    }

    function bindToGrid(results) {
        var html = '';

        for (var i = 0; i < results.length; i++) {
            var produitagricole = results[i];
            if ($('#mesPA') && $('#editPA')) {
                html += '<tr><td>' + produitagricole.nomPA + '</td>';
                html += '<td>' + produitagricole.nomLocalPA + '</td>';
                html += '<td>' + produitagricole.nomScientifiquePA + '</td>';
                html += '<td>' + produitagricole.descriptionPA + '</td>';
                html += '<td>' + produitagricole.varietePA + '</td>';
                html += '<td>' + produitagricole.imagePA + '</td>';
                html += '<td><a class="edit" href = "javascript:void(0)" data-key=' + i + '>Éditer</a></td></tr>';
            } else {//
                $('#mesPAetat').ready(function(){
                    //if ($('#mesPAetat')) {
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
                });
            }
        }
        if ($('#mesPA') && $('#editPA')) {
            html = html || '<tr><td colspan="3">Aucune donnée disponible !</td></tr>';
            $('#mesPA tbody').html(html);
            $('#mesPA a.edit').on('click', ns.loadProduitAgricole);
            $('#mesPA a.edit').on('keypress', ns.loadProduitAgricole);
        } else { //

            $('#mesPAetat').ready(function () {
                html = html || '<tr><td colspan="3">Aucune donnée disponible !</td></tr>';
                $('#mesPAetat tbody').html(html);
            });
        }
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


    localStorage.setItem('produitagricoles', JSON.stringify(results));

    


    ns.save2 = function () {
        var produitagricole = currentRecord.produitagricole;
        var nomImagePA = $('#imagePA').val; //+ '_' + $('#nomPA') + '.JPEG';
        var nomVideo = $('#videoPA').val;// + '_' + $('#nomPA');
        var writeToFile;

        produitagricole.nomPA = $('#nomPA').val();
        produitagricole.nomLocalPA = $('#nomLocalPA').val();
        produitagricole.nomScientifiquePA = $('#nomScientifiquePA').val();
        produitagricole.descriptionPA = $('#descriptionPA').val();
        produitagricole.varietePA = $('#varietePA').val();
        produitagricole.imagePA = $('#imagePA').val();
        produitagricole.videoPA = $('#videoPA').val();

        var results = retrieveFromStorage();

        results.push(produitagricole);

        //Écriture de  l'image
        window.requestFileSystem(TEMPORARY, 5 * 1024 * 1024, getDirectory, handleError);
    };


    //création de fichier
    function getDirectory(fileSystem) {
        fileSystem.root.getDirectory("imagesPA", { create: true }, directoryOpened, handleError);
    }

    function directoryOpened(directoryEntry) {
        directoryEntry.getFile(nomImagePA, {create: true}, fileOpened, handleError);
    }
    
    function fileOpened(fileEntry) {
        //fileEntry.createWriter(writeToFile, handleError);
        alert("Fichier ouvert!");
    }

    writeToFile = function (fileWriter) {
        /*fileWriter.onwriteend = function () { alert('success'); };
        fileWriter.onerror = function () { alert('Failed'); };
        fileWriter.write(new Blob([nomImage]));*/

    }

    function handleError(error) {
        alert(error.code);
    }

})();

