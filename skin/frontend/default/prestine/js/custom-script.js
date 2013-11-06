var prestine_url = 'http://localhost/projects/prestine/customize/';
window.indexUndo = 0;
window.stack = new Array();

function fabricClick(fid, price, name, tailorsprice, description) {
    var server = prestine_url;
    var LargImag = prestine_url + fid + ".jpg";
    var UrlImageFabric = prestine_url + fid + ".jpg";

    $('#LargImagFabric').attr('src', LargImag);
    $('#ImageFabric').attr('src', UrlImageFabric);
    $('#ImageFabric').val(price)

    $('#TitleFabric').html('Base of ' + name);

    $('.price').text(price + '.00');
    $('#shirtprice').val(Number(price.replace(/[^0-9\.]+/g, "")));

    if ($('#collarcolor').val() == $('#basecolor').val()) {
        $('#collarcolor').val(fid);
    }
    if ($('#collarliningcolor').val() == $('#basecolor').val()) {
        $('#collarliningcolor').val(fid);
    }

    if ($('#cuffcolor').val() == $('#basecolor').val()) {
        $('#cuffcolor').val(fid);
    }
    if ($('#placketcolor').val() == $('#basecolor').val()) {
        $('#placketcolor').val(fid);
    }
    if ($('#pocketcolor').val() == $('#basecolor').val()) {
        $('#pocketcolor').val(fid);
    }
    if ($('#strapcolor').val() == $('#basecolor').val()) {
        $('#strapcolor').val(fid);
    }

    $('#sbaimg').attr('src', (server + fid + '_main_set2_0005.png'));

    $('#basecolor').val(fid);

    $('#fabric_title').text(name + ':');
    $('#fabric_description').text(description);
    $('#fabric_tailorsPrice').text('At your local tailor: ' + tailorsprice + '.00');
    $('#fabric_price').text('At Blank Label: ' + price + '.00');

    $('#scolimg').attr('src', prestine_url + $('#collarliningcolor').val() + "_main_set3_0004.png");
    CuffClick(parseInt($('#cuff').val()));
    placketClick(parseInt($('#placket').val()));
    PocketClick(parseInt($('#pocket').val()));

    CollarClick(parseInt($('#collar').val()));
    ShoulderClick(parseInt($('#strap').val()));
}


function CuffClick(plac) {
    $('#CuffType li').removeClass();
    $('#CuffType li').eq(plac - 1).addClass("active");
    var server = prestine_url;
    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'CuffClick(' + $('#cuff').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    var fid = $('#cuffcolor').val();
    $('#cuff').val(plac);
    var basecolor = $('#basecolor').val();

    switch (plac) {
        case 2:
            {
                $('#sslimg').attr('src', server + basecolor + '_main_set2_0000.png');
                $('#scuimg').attr('src', server + fid + '_main_set1_0006.png');
                $('#sba5img').attr('src', server + 'StandardSleeve_WhiteLineIssueSolver.png');
                break;
            }
        case 3:
            {
                $('#sslimg').attr('src', server + basecolor + '_main_set2_0001.png');
                $('#scuimg').attr('src', server + fid + '_main_set1_0005.png');
                $('#sba5img').attr('src', server + 'FrenchSleeve_WhiteLineIssueSolver.png');

                break;
            }
        case 4:
            {
                $('#sslimg').attr('src', server + basecolor + '_main_set2_0002.png');
                $('#scuimg').attr('src', server + fid + '_main_set1_0008.png');
                $('#sba5img').attr('src', server + 'ShortSleeve_WhiteLineIssueSolver.png');

                $('#CuffFabric li').eq(0).attr('class', '');
                $('#CuffFabric li').eq(1).attr('class', '');

                $('#CuffcolorDisc').html("");
                //$('#cuffcolor').val($('#basecolor').val());
                $('#cutomcuff').val(false);


                $('#cuffinnercolor').val($('#basecolor').val());
                $('#cuffinner').val(0);
                $('#CuffinnercolorDisc').html('');

                break;
            }
        default:
            {
                $('#sslimg').attr('src', server + basecolor + '_main_set2_0000.png');
                $('#scuimg').attr('src', server + fid + '_main_set1_0006.png');
                $('#sba5img').attr('src', server + 'StandardSleeve_WhiteLineIssueSolver.png');
                break;
            }
    }

    /*if (plac == 4) {
        if ($('#zoomcuff').css('visibility') == 'visible') {
            $('#zoomcuffinner').css('visibility', 'hidden');
        }
    }
    else {
        if ($('#zoomcuff').css('visibility') == 'visible') {
            $('#zoomcuffinner').css('visibility', 'visible');
        }
    }

    $.get('/Shirts/GetCuff/' + plac, function (data) {
        $('#CuffDisc').html(data);
    });*/
}

function placketClick(plac) {
    $('#PlacketType li').removeClass();
    $('#PlacketType li').eq(plac - 1).addClass("active");
    var fid = $('#placketcolor').val();
    var server = prestine_url;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'placketClick(' + $('#placket').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#placket').val(plac);

    switch (plac) {
        case 1:
            {
                var url = server + fid + '_main_set3_0012.png';
                $('#splimg').attr('src', url);
                $('#sba3img').attr('src', (server + $('#buttons').val() + '_main_button_0004.png'));
                $('#PlacketFabric').show();
                $('#ttlPlacketFabricText').show();
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_set3_0013.png';
                $('#splimg').attr('src', url);
                $('#sba3img').attr('src', (prestine_url + 'blank.png'));
                $('#PlacketFabric').show();
                $('#ttlPlacketFabricText').show();
                break;
            }
        default:
            {
                $('#PlacketFabric li').eq(0).attr('class', '');
                $('#PlacketcolorDisc').html('');

                $('#splimg').attr('src', (prestine_url + 'blank.png'));
                $('#sba3img').attr('src', (server + $('#buttons').val() + '_main_button_0004.png'));
                $('#PlacketFabric').hide();
                $('#ttlPlacketFabricText').hide();
                $('#placketcolor').val($('#basecolor').val());
                $('#customplacket').val(false);
                break;
            }
    }

    /*$.get('/Shirts/GetPlacket/' + plac, function (data) {
        $('#PlacketDisc').html(data);
    });*/
}

function PocketClick(plac) {
    $('#PocketType li').removeClass();
    $('#PocketType li').eq(plac - 1).addClass("active");
    var fid = $('#pocketcolor').val();
    var server = prestine_url;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'PocketClick(' + $('#pocket').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#pocket').val(plac);

    switch (plac) {
        case 1:
            {
                $('#spoimg').attr('src', (prestine_url + 'blank.png'));
                $('#sba4img').attr('src', (prestine_url + 'blank.png'));
                $('#pocketstyle').val(1);
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_set3_0000.png';
                $('#spoimg').attr('src', url);
                $('#sba4img').attr('src', (server + $('#buttons').val() + '_main_button_0001.png'));
                $('#pocketstyle').val(1);
                break;
            }
        default:
            {
                var url = server + fid + '_main_set1_0007.png';
                $('#spoimg').attr('src', url);
                $('#sba4img').attr('src', (prestine_url + 'blank.png'));
                $('#pocketstyle').val(2);
                break;
            }
    }

    /*$.get('/Shirts/GetPocket/' + plac, function (data) {
        $('#PocketDisc').html(data);
    });*/
}

function CollarClick(plac) {

    $('#CollarType li').removeClass();
    $('#CollarType').find('li[collar=' + plac + ']').addClass("active");

    var fid = $('#collarcolor').val();
    var basecolor = $('#basecolor').val();
    var server = prestine_url;
    var plac = plac;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'CollarClick(' + $('#collar').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#collar').val(plac);

    if (fid != basecolor || plac == 8) {
        $('#scoimg_neru').attr('src', prestine_url + fid + "_main_set3_0016.png");
    }
    else {
        $('#scoimg_neru').attr('src', prestine_url + 'blank.png');
    }
    
    plac = parseInt(plac);
    switch (plac) {
        case 2:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0015.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0011.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 4:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0003.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0005.png');
                $('#scobdimg').attr('src', server + $('#buttons').val() + '_main_button_0003.png');
                break;
            }
        case 5:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0011.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0008.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 6:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0010.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0007.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 7:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0009.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0006.png');
                $('#scobdimg').attr('src', server + $('#buttons').val() + '_main_button_0009.png');
                break;
            }
        case 8:
            {
                $('#scoimg').attr('src', prestine_url + 'blank.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0009.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 9:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0014.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0010.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 10:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0001.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0004.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        default:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0002.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0003.png');
                $('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
    }

    var pl = $('#placket').val();
    fid = $('#placketcolor').val();

    if (pl == "3") { //covered
        if (plac == 2 || plac == 5 || plac == 6 || plac == 7 || plac == 8 || plac == 9 || plac == 10) {
            var url = server + fid + '_main_set3_0006.png';
            $('#splimg').attr('src', url);
        }
        else {
            var url = server + fid + '_main_set3_0013.png';
            $('#splimg').attr('src', url);
        }
        $('#sba3img').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
    }
    else if (pl == "2") { //french
        $('#splimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
        $('#sba3img').attr('src', (server + $('#buttons').val() + '_main_button_0004.png'));
    }
    else { //normal
        if (plac == 2 || plac == 5 || plac == 6 || plac == 7 || plac == 8 || plac == 9 || plac == 10) {
            var url = server + fid + '_main_set3_0005.png';
            $('#splimg').attr('src', url);
        }
        else {
            var url = server + fid + '_main_set3_0012.png';
            $('#splimg').attr('src', url);
        }
        $('#sba3img').attr('src', (server + $('#buttons').val() + '_main_button_0004.png'));
    }

/*
    $.get('/Shirts/GetCollar/' + plac, function (data) {
        $('#CollarDisc').html(data);
    });*/
}


function ShoulderClick(plac) {
    $('#ShoulderType li').removeClass();
    $('#ShoulderType li').eq(plac - 1).addClass("active");
    var fid = $('#strapcolor').val();
    var server = prestine_url;

   if (!window.undoflag) {
        window.stack[window.indexUndo] = 'ShoulderClick(' + $('#strap').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#strap').val(plac);

    switch (plac) {
        case 1:
            {
                $('#sshimg').attr('src', (prestine_url + 'blank.png'));
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_set3_0008.png';
                $('#sshimg').attr('src', url);
                break;
            }
        default:
            {
                var url = server + fid + '_main_set3_0007.png';
                $('#sshimg').attr('src', url);
                break;
            }
    }

   /* $.get('/Shirts/GetShoulder/' + plac, function (data) {
        $('#ShoulderDisc').html(data);
    });*/
}


function fabricTypeClick(fid, type) {
    var server = prestine_url;
    var id = fid;

    $('#TypeFabric').hide();
    
    switch (type) {
        case "Collar":
            {
                $('#CollarFabric li').eq(0).addClass("active");

                if (!window.undoflag) {
                    //alert($('#collarcolor').val());
                    // console.log(window.stack);
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#collarcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }

                $('#customcollar').val(true);
                $('#collarcolor').val(fid);

                window.undoflag = true;
                CollarClick(parseInt($('#collar').val()));
                window.undoflag = false;

                break;
            }
        case "CollarInner":
            {
                $('#CollarFabric li').eq(1).addClass("active");

                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#collarliningcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                $('#collarlining').val(1);
                $('#collarliningcolor').val(fid);
                $('#scolimg').attr('src', prestine_url + fid + "_main_set3_0004.png");
                break;
            }
        case "Cuff":
            {
                $('#CuffFabric li').eq(0).addClass("active");

                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#cuffcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }

                $('#cutomcuff').val(true);
                $('#cuffcolor').val(fid);

                window.undoflag = true;
                CuffClick(parseInt($('#cuff').val()));

                window.undoflag = false;
                break;
            }
        case "CuffInner":
            {
                $('#CuffFabric li').eq(1).addClass("active");

                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#cuffinnercolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }

                $('#cuffinner').val(1);
                $('#cuffinnercolor').val(fid);
                break;
            }
        case "Placket":
            {
                $('#PlacketFabric li').eq(0).addClass("active");

               if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#placketcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }

                $('#customplacket').val(true);
                $('#placketcolor').val(fid);

                window.undoflag = true;

                placketClick(parseInt($('#placket').val()));
                
                 window.undoflag = false;
                // $.get('/Shirts/GetPlacketcolor/' + id, function (data) {
                //     $('#PlacketcolorDisc').html(data);
                // });

                break;
            }
        case "Pocket":
            {
                $('#PocketFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#pocketcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                $('#custompocket').val(true);
                $('#pocketcolor').val(fid);
                window.undoflag = true;
                PocketClick(parseInt($('#pocket').val()));
                window.undoflag = false;
                $.get('/Shirts/GetPocketcolor/' + id, function (data) {
                    $('#PocketcolorDisc').html(data);
                });
                break;
            }
        case "Shoulder":
            {
                $('#ShoulderFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#strapcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                $('#customstrap').val(true);
                $('#strapcolor').val(fid);
                window.undoflag = true;
                ShoulderClick(parseInt($('#strap').val()));
                window.undoflag = false;
                $.get('/Shirts/GetStrapcolor/' + id, function (data) {
                    $('#StrapcolorDisc').html(data);
                });
                break;
            }
        default:
            {
                break;
            }
    }

    $('#CurrentType').val('');
}

function UndoFabric(type, id) {
    $('#CurrentType').val(type);
    fabricTypeClick(id, type);
}

function UndoFunction() {
    if (window.indexUndo > 0) {
        window.indexUndo--;
        if (window.indexUndo >= 0) {
            $('#UndoButton').html("<input type='button' id='un' onclick='" + window.stack[window.indexUndo] + "' />");

            window.undoflag = true;
            $('#un')[0].click();
            initScript();
            window.undoflag = false;
        }
    }
}

function initScript() {
    var placket = $('#placket').val();
    $('#PlacketType li').removeClass();
    $('#PlacketType li').eq(placket - 1).addClass("active");

    var pocket = $('#pocket').val();
    $('#PocketType li').removeClass();
    $('#PocketType li').eq(pocket - 1).addClass("active");

    var strap = $('#strap').val();
    $('#ShoulderType li').removeClass();
    $('#ShoulderType li').eq(strap - 1).addClass("active");

    var cuff = $('#cuff').val();
    $('#CuffType li').removeClass();
    $('#CuffType li').eq(cuff - 1).addClass("active");

    var collar = $('#collar').val();
    $('#CollarType li').removeClass();
    $('#CollarType').find('li[collar=' + collar + ']').addClass("active");

    var buttons = $('#buttons').val();
    $('#ButtonColor li').removeClass();
    $('#ButtonColor li').eq(buttons - 1).addClass("active");

    var basecolor = $('#basecolor').val();
    if (placket == 2) {
        $('#PlacketFabric').hide();
        $('#placketcolor').val($('#basecolor').val());
        $('#customplacket').val(false);
        $('#ttlPlacketFabricText').hide();
    }
    else {
        $('#PlacketFabric').show();
        $('#ttlPlacketFabricText').show();
    }

    if (basecolor != $('#collarcolor').val()) {

        $('#CollarFabric li').eq(0).addClass("active");
    }
    else {
        $('#CollarFabric li').eq(0).removeClass();
    }

    if (Number($('#collarlining').val() != 0)/*$('#collarcolor').val() != $('#collarliningcolor').val()*/) {
        $('#CollarFabric li').eq(1).addClass("active");
    }
    else {
        $('#CollarFabric li').eq(1).removeClass();
    }

    if (basecolor != $('#cuffcolor').val()) {

        $('#CuffFabric li').eq(0).addClass("active")
    }
    else {
        $('#CuffFabric li').eq(0).removeClass();
    }

    if ($('#cuffcolor').val() != $('#cuffinnercolor').val()) {

        $('#CuffFabric li').eq(1).addClass("active");
    }
    else {
        $('#CuffFabric li').eq(1).removeClass();
    }

    if (basecolor != $('#placketcolor').val()) {
        $('#PlacketFabric li').eq(0).addClass("active")
    }
    else {
        $('#PlacketFabric li').removeClass();
    }

    if (basecolor != $('#pocketcolor').val()) {
        $('#PocketFabric li').eq(0).addClass("active")
    }
    else {
        $('#PocketFabric li').removeClass();
    }

    if (basecolor != $('#strapcolor').val()) {
        $('#ShoulderFabric li').eq(0).addClass("active")
    }
    else {
        $('#ShoulderFabric li').removeClass();
    }

    var mono = false;
    var monoString = "";
    if ($('#cuffmono').val() == 2) {
        $('#monogram li').eq(0).addClass("CircleActive");
        mono = true;
        monoString = " Cuff,";
    }
    if ($('#pocketmono').val() == 2) {
        $('#monogram li').eq(1).addClass("CircleActive");
        mono = true;
        monoString = " Pocket,";
    }
    if ($('#collarmono').val() == 2) {
        $('#monogram li').eq(2).addClass("CircleActive");
        mono = true;
        monoString += " Collar,";
    }
    if (mono) {

        $('#monotextT').val($('#monotext').val());
        $('#monocolorT option[value*="' + $('#monocolor').val() + '"]').attr('selected', 'selected')
        var string = "Monogram '" + $('#monotext').val() + "' on " + monoString + " in " + $('#monocolor').val();
        $('.monolab').html(string);
        $('#MonoDisc').html(string);
    }

    var label = false;
    var labelString = "";
    if ($('#placketlabel').val() == 2) {
        $('#label li').eq(0).addClass("CircleActive");
        label = true;
        labelString = " Placket,";
    }

    if ($('#collarlabel').val() == 2) {
        $('#label li').eq(1).addClass("CircleActive");
        label = true;
        labelString += " Collar,";
    }

    if (label) {
        var color = $('#labelcolor').val();
        var text = $('#labeltext').val();
        $('#labeltextT').val(text);
        $('#labelcolorT option[value*="' + $('#labelcolor').val() + '"]').attr('selected', 'selected');

        $('.lablab').html("Label '" + text + "' on " + labelString + " in " + color);
        $('#LabelDisc').html("Label '" + text + "' on " + labelString + " in " + color);
    }


}
