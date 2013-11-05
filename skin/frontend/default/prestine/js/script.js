$(function () {

    var selected_tab = 0;
    if ($('#IsFabrics').val() == 'True') {
        selected_tab = 1;
    }

    $("#tabs").tabs({
        selected: selected_tab, select: function (event, ui) {
            ToStepHeader(ui.index);
            $('#page').val(1);
            return true;
        }
    });
    $('#dialog_link, ul#icons li').hover(
        function () { $(this).addClass('ui-state-hover'); },
        function () { $(this).removeClass('ui-state-hover'); }
    );

    $('div[step]').click(function () {

    });
});
$(function () {
    $('#sub-tabs').tabs({ selected: 0 });
    $('#dialog_link, ul#icons li').hover(
	function () { $(this).addClass('ui-state-hover'); },
	function () { $(this).removeClass('ui-state-hover'); }
);
});
$(function () {
    $('#sub-tabs-fabric').tabs({ selected: 0 });
    $('#dialog_link, ul#icons li').hover(
	function () { $(this).addClass('ui-state-hover'); },
	function () { $(this).removeClass('ui-state-hover'); }
);
});
$(function () {
    $('#sub-tabs01').tabs({
        selected: 0, select: function (event, ui) {
            if (ui.index == 1) {
                if ($('#menuDress').length != 0) {
                    $('#menuDress').show();
                    $('#monogram').show();
                    $('#Ask').hide();
                    $('#Send').hide();
                }
            }
            return true;
        }
    });
    $('#dialog_link, ul#icons li').hover(
	function () { $(this).addClass('ui-state-hover'); },
	function () { $(this).removeClass('ui-state-hover'); }
);
});
$(function () {
    $('#sub-tabs02').tabs({ selected: 0 });
    $('#dialog_link, ul#icons li').hover(
	function () { $(this).addClass('ui-state-hover'); },
	function () { $(this).removeClass('ui-state-hover'); }
);
});
$(function () {
    $('#sub-tabs03').tabs({
        selected: 0, select: function (event, ui) {
            if (ui.index == 1) {
                if ($('#menuDress').length != 0) {
                    $('#menuDress').show();
                    $('#monogram').show();
                    $('#Ask').hide();
                    $('#Send').hide();
                }
            }
            return true;
        }
    });
    $('#dialog_link, ul#icons li').hover(
	function () { $(this).addClass('ui-state-hover'); },
	function () { $(this).removeClass('ui-state-hover'); }
);
});

function ToStepHeader(step) {
    var numStep = parseInt(step);
    $('#addChart').hide();
    $('#Continue').show();
    switch (numStep) {
        case 1:
            {
                $('#Step').text('Step 2: Choose Shirt Style Options');
                $("#sub-tabs01").tabs({ selected: 0 });
                $('#subtitle').text('Conservative or out-going, customize the different styling options.');
                $('#stepHiden').val(1);
                break;
            }
        case 2:
            {
                $('#Step').text('Step 3: Choose Optional Embroidery');
                $("#sub-tabs02").tabs({ selected: 0 });
                $('#subtitle').text('Click on the position of your embroidery, thread color, enter your text and click Apply.');
                $('#stepHiden').val(7);
                break;
            }
        case 3:
            {
                $('#addChart').show();
                $('#Continue').hide();
                $('#Step').text('Step 4: Choose Custom Sizes');
                $('#subtitle').text('Let us guide you through sizing or enter the exact measurements you already know.');
                $('#stepHiden').val(9);
                break;
            }
        default:
            {
                $('#Step').text('Step 1: Choose Shirt Fabric');
                $('#subtitle').text('Click on a fabric swatch below to choose your shirt fabric.');
                $('#stepHiden').val(0);
                break;
            }
    }
}

function ToStep(step) {
    var numStep = parseInt($('#stepHiden').val()) + 1;
    $('#stepHiden').val(numStep);
    $('#addChart').hide();
    $('#Continue').show();

    switch (numStep) {
        case 1:
            {
                $("#tabs").tabs({ selected: 1 });
                $("#sub-tabs01").tabs({ selected: 0 });
                $('#Step').text('Step 2: Choose Shirt Style Options');
                $('#subtitle').text('Conservative or out-going, customize the different styling options.');
                break;
            }
        case 2:
            {
                $("#sub-tabs01").tabs({ selected: 1 });
                break;
            }
        case 3:
            {
                $("#sub-tabs01").tabs({ selected: 2 });
                break;
            }
        case 4:
            {
                $("#sub-tabs01").tabs({ selected: 3 });
                break;
            }
        case 5:
            {
                $("#sub-tabs01").tabs({ selected: 4 });
                break;
            }
        case 6:
            {
                $("#sub-tabs01").tabs({ selected: 5 });
                break;
            }
        case 7:
            {
                $("#tabs").tabs({ selected: 2 });
                $("#sub-tabs02").tabs({ selected: 0 });
                $('#Step').text('Step 3: Choose Optional Embroidery');
                $('#subtitle').text('Click on the position of your embroidery, thread color, enter your text and click Apply.');
                break;
            }
        case 8:
            {
                $("#sub-tabs02").tabs({ selected: 1 });
                break;
            }
        case 9:
            {
                $("#tabs").tabs({ selected: 3 });
                $('#addChart').show();
                $('#Continue').hide();
                $('#Step').text('Step 4: Choose Custom Sizes');
                $('#subtitle').text('Let us guide you through sizing or enter the exact measurements you already know.');
                break;
            }
        default:
            {
                $("#tabs").tabs({ selected: 0 });
                $('#Step').text('Step 1: Choose Shirt Fabric');
                $('#subtitle').text('Click on a fabric swatch below to choose your shirt fabric.');
                break;
            }

    }
}

function fabricClick(fid, price, name, tailorsprice, description) {
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    var LargImag = "http://c4236272.r72.cf2.rackcdn.com/large/" + fid + ".jpg";
    var UrlImageFabric = "http://c4236272.r72.cf2.rackcdn.com/small/" + fid + ".jpg";

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

    $('#scolimg').attr('src', 'http://c4233705.r5.cf2.rackcdn.com/' + $('#collarliningcolor').val() + "_main_set3_0004.png");
    CuffClick(parseInt($('#cuff').val()));
    placketClick(parseInt($('#placket').val()));
    PocketClick(parseInt($('#pocket').val()));

    CollarClick(parseInt($('#collar').val()));
    ShoulderClick(parseInt($('#strap').val()));
}

function fabricTypeClick(fid) {
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    var id = fid;

    $('#TypeFabric').hide();
    var type = $('#CurrentType').val();
    switch (type) {
        case "Collar":
            {
                $('#CollarFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#collarcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                $('#customcollar').val(true);
                $('#collarcolor').val(fid);

                window.undoflag = true;
                CollarClick(parseInt($('#collar').val()));
                window.undoflag = false;
                $('#scolimg').attr('src', 'http://c4233705.r5.cf2.rackcdn.com/' + fid + "_main_set3_0004.png");
                $.get('/Shirts/GetCollarcolor/' + fid, function (data) {
                    $('#CollarcolorDisc').html(data);
                });

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
                $('#scolimg').attr('src', 'http://c4233705.r5.cf2.rackcdn.com/' + fid + "_main_set3_0004.png");

                $.get('/Shirts/GetCollarliningcolor/' + id, function (data) {
                    $('#CollarliningcolorDisc').html(data);
                });
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
                $.get('/Shirts/GetCuffcolor/' + id, function (data) {
                    $('#CuffcolorDisc').html(data);
                });
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

                $.get('/Shirts/GetCuffinnercolor/' + id, function (data) {
                    $('#CuffinnercolorDisc').html(data);
                });
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
                $.get('/Shirts/GetPlacketcolor/' + id, function (data) {
                    $('#PlacketcolorDisc').html(data);
                });

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

function fabricTypeClose() {
    $('#TypeFabric').hide();
    $('#CurrentType').val('');
}

function zumFabric() {
    if ($('#winFabric').css('display') == 'none') {
        $('#winFabric').show();
    }
    else {
        $('#winFabric').hide();
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

function placketClick(plac) {
    $('#PlacketType li').removeClass();
    $('#PlacketType li').eq(plac - 1).addClass("active");
    var fid = $('#placketcolor').val();
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';

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
                $('#sba3img').attr('src', ('http://c12743256.r56.cf2.rackcdn.com/Images/blank.png'));
                $('#PlacketFabric').show();
                $('#ttlPlacketFabricText').show();
                break;
            }
        default:
            {
                $('#PlacketFabric li').eq(0).attr('class', '');
                $('#PlacketcolorDisc').html('');

                $('#splimg').attr('src', ('http://c12743256.r56.cf2.rackcdn.com/Images/blank.png'));
                $('#sba3img').attr('src', (server + $('#buttons').val() + '_main_button_0004.png'));
                $('#PlacketFabric').hide();
                $('#ttlPlacketFabricText').hide();
                $('#placketcolor').val($('#basecolor').val());
                $('#customplacket').val(false);
                break;
            }
    }

    $.get('/Shirts/GetPlacket/' + plac, function (data) {
        $('#PlacketDisc').html(data);
    });
}

function PocketClick(plac) {
    $('#PocketType li').removeClass();
    $('#PocketType li').eq(plac - 1).addClass("active");
    var fid = $('#pocketcolor').val();
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'PocketClick(' + $('#pocket').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#pocket').val(plac);

    switch (plac) {
        case 1:
            {
                $('#spoimg').attr('src', ('http://c12743256.r56.cf2.rackcdn.com/Images/blank.png'));
                $('#sba4img').attr('src', ('http://c12743256.r56.cf2.rackcdn.com/Images/blank.png'));
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
                $('#sba4img').attr('src', ('http://c12743256.r56.cf2.rackcdn.com/Images/blank.png'));
                $('#pocketstyle').val(2);
                break;
            }
    }

    $.get('/Shirts/GetPocket/' + plac, function (data) {
        $('#PocketDisc').html(data);
    });
}

function ShoulderClick(plac) {
    $('#ShoulderType li').removeClass();
    $('#ShoulderType li').eq(plac - 1).addClass("active");
    var fid = $('#strapcolor').val();
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'ShoulderClick(' + $('#strap').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#strap').val(plac);

    switch (plac) {
        case 1:
            {
                $('#sshimg').attr('src', ('http://c12743256.r56.cf2.rackcdn.com/Images/blank.png'));
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

    $.get('/Shirts/GetShoulder/' + plac, function (data) {
        $('#ShoulderDisc').html(data);
    });
}

function CuffClick(plac) {
    $('#CuffType li').removeClass();
    $('#CuffType li').eq(plac - 1).addClass("active");
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
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
                $('#cuffcolor').val($('#basecolor').val());
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

    if (plac == 4) {
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
    });
}

function CollarClick(plac) {
    $('#CollarType li').removeClass();
    $('#CollarType').find('li[collar=' + plac + ']').addClass("active");

    var fid = $('#collarcolor').val();
    var basecolor = $('#basecolor').val();
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'CollarClick(' + $('#collar').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    $('#collar').val(plac);

    if (fid != basecolor || plac == 8) {
        $('#scoimg_neru').attr('src', 'http://c4233705.r5.cf2.rackcdn.com/' + fid + "_main_set3_0016.png");
    }
    else {
        $('#scoimg_neru').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
    }

    switch (plac) {
        case 2:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0015.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0011.png');
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
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
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
                break;
            }
        case 6:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0010.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0007.png');
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
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
                $('#scoimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0009.png');
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
                break;
            }
        case 9:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0014.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0010.png');
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
                break;
            }
        case 10:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0001.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0004.png');
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
                break;
            }
        default:
            {
                $('#scoimg').attr('src', server + fid + '_main_set3_0002.png');
                $('#sbaimg').attr('src', server + basecolor + '_main_set2_0003.png');
                $('#scobdimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
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


    $.get('/Shirts/GetCollar/' + plac, function (data) {
        $('#CollarDisc').html(data);
    });
}
function buttonclick(plac) {
    $('#ButtonColor li').removeClass();
    $('#ButtonColor li').eq(plac - 1).addClass("active");
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'buttonclick(' + $('#buttons').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    window.undoflag = true;
    $('#buttons').val(plac);
    var collar = parseInt($('#collar').val());

    CollarClick(collar);

    var placket = parseInt($('#placket').val());
    placketClick(placket);

    var pocket = parseInt($('#pocket').val());
    PocketClick(pocket)

    $('#scobimg').attr('src', server + (plac) + '_main_button_0002.png');

    $.get('/Shirts/GetButtons/' + plac, function (data) {
        $('#ButtonsDisc').html(data);
    });
    window.undoflag = false;
}
function AskClick() {
    $('#menuDress').hide();
    $('#Ask').show();
    $('#AskOurTailors').val(true);
    $('#Knowyursize').val(false);
}
function SendClick() {
    $('#menuDress').hide();
    $('#Send').show();
    $('#AskOurTailors').val(false);
    $('#Knowyursize').val(false);
}

function CollarFabricClick(plac) {
    if ($('#CollarFabric li').eq(plac - 1).attr('class') == "" ||
            $('#CollarFabric li').eq(plac - 1).attr('class') == undefined) {
        if (plac == 1) {
            $('#CurrentType').val('Collar');
        }
        else {
            $('#CurrentType').val('CollarInner');
        }
        $('#TypeFabric').show();
    }
    else {
        $('#CollarFabric li').eq(plac - 1).removeClass();

        var basecolor = $('#basecolor').val();
        if ((plac - 1) == 0) {
            $('#collarcolor').val(basecolor);
            $('#customcollar').val(false);
            CollarClick(parseInt($('#collar').val()));
            $('#CollarcolorDisc').html('');
            $('#scolimg').attr('src', 'http://c4233705.r5.cf2.rackcdn.com/' + basecolor + "_main_set3_0004.png");
        }
        else {
            $('#collarliningcolor').val($('#collarcolor').val());
            $('#collarlining').val(0);
            if (basecolor == $('#collarliningcolor').val()) {
                $('#CollarliningcolorDisc').html('');
            } else {
                $.get('/Shirts/GetCollarliningcolor/' + $('#collarliningcolor').val(), function (data) {
                    $('#CollarliningcolorDisc').html(data);
                });
            }

            $('#scolimg').attr('src', 'http://c4233705.r5.cf2.rackcdn.com/' + $('#collarcolor').val() + "_main_set3_0004.png");
        }
    }
}
function CuffFabricClick(plac) {
    if ($('#CuffType li:last').attr('class') != "active") {
        if ($('#CuffFabric li').eq(plac - 1).attr('class') == "" || $('#CuffFabric li').eq(plac - 1).attr('class') == undefined) {
            if (plac == 1) {
                $('#CurrentType').val('Cuff');
            }
            else {

                $('#CurrentType').val('CuffInner');
            }
            $('#TypeFabric').show();
        }
        else {
            $('#CuffFabric li').eq(plac - 1).attr('class', '');
            if (plac == 1) {
                $('#CuffcolorDisc').html("");
                $('#cuffcolor').val($('#basecolor').val());
                $('#cutomcuff').val(false);
                //$('#cuffsleeve').val(0);
                CuffClick(parseInt($('#cuff').val()));
            }
            else {

                $('#cuffinnercolor').val($('#basecolor').val());
                $('#cuffinner').val(0);
                $('#CuffinnercolorDisc').html('');
            }
        }
    }
}

function setCustomPlacket(plac) {
    if ($('#PlacketFabric li').eq(plac - 1).attr('class') == "" ||
            $('#PlacketFabric li').eq(plac - 1).attr('class') == undefined) {
        $('#CurrentType').val('Placket');
        $('#TypeFabric').show();
    }
    else {
        $('#PlacketFabric li').eq(plac - 1).attr('class', '');
        $('#placketcolor').val($('#basecolor').val());
        $('#customplacket').val(false);
        $('#PlacketcolorDisc').html('');
        placketClick(parseInt($('#placket').val()));
    }
}

function PocketFabricClick(plac) {

    if ($('#PocketFabric li').eq(plac - 1).attr('class') == "" ||
            $('#PocketFabric li').eq(plac - 1).attr('class') == undefined) {
        $('#CurrentType').val('Pocket');
        $('#TypeFabric').show();
    }
    else {
        $('#PocketFabric li').eq(plac - 1).attr('class', '');
        $('#pocketcolor').val($('#basecolor').val());
        $('#custompocket').val(false);
        $('#PocketcolorDisc').html('');
        PocketClick(parseInt($('#pocket').val()));
    }
}
function ShoulderFabricClick(plac) {
    if ($('#ShoulderFabric li').eq(plac - 1).attr('class') == "" ||
            $('#ShoulderFabric li').eq(plac - 1).attr('class') == undefined) {
        $('#CurrentType').val('Shoulder');
        $('#TypeFabric').show();
    }
    else {
        $('#ShoulderFabric li').eq(plac - 1).attr('class', '');
        $('#strapcolor').val($('#basecolor').val());
        $('#customstrap').val(false);
        $('#StrapcolorDisc').html('');
        ShoulderClick(parseInt($('#strap').val()));
    }
}

function MonoClick(plac) {
    if ($('#monogram li').eq(plac - 1).attr('class') == "" || $('#monogram li').eq(plac - 1).attr('class') == undefined) {
        $('#monogram li').eq(plac - 1).addClass("CircleActive");
    }
    else {
        $('#monogram li').eq(plac - 1).removeClass("CircleActive");
    }
}

function selectMonogramFont(val) {
    $('#partMonogramFont li').removeClass('active');
    $('#partMonogramFont li').eq(val).addClass('active');

    $('#partMonogramFont li a').removeClass('item_selected');

    var el = $('#partMonogramFont li').eq(val);
    $(el).find('a').addClass('item_selected');
}

function selectLabelFont(val) {
    $('#partLabelFont li').removeClass('active');
    $('#partLabelFont li').eq(val).addClass('active');

    $('#partLabelFont li a').removeClass('item_selected');

    var el = $('#partLabelFont li').eq(val);
    $(el).find('a').addClass('item_selected');
}

function ApplyMonoDress() {
    if (($('#MonoStyle').val() !== 'choose monogram style') &&
     ($('#monocolor').val() != 'color') &&
     ($('#monotext').val() != '')) {
        var string = "Monogram '" + $('#monotext').val() + "' on " + $('#MonoStyle').val() + " in " + $('#monocolor').val();
        $('.monolab').html(string);
        $('#MonoDisc').html(string);
    }
    else {
        $('.monolab').html("No Monograms selected.");
        $('#MonoDisc').html('');
    }
}
function ApplyMono() {
    var thereIs = false;
    var string = "";
    var Cuff = 1;
    var Pocket = 1;
    var Collar = 1;
    var Font = 0;

    if (!window.undoflag) {

        window.stack[window.indexUndo] = 'monolabel(&#39;' + $('#monotext').val() + '&#39;,&#39;'
                                                      + $('#monocolor').val() + '&#39;,&#39;'
                                                      + $('#cuffmono').val() + '&#39;,&#39;'
                                                      + $('#pocketmono').val() + '&#39;,&#39;' + $('#collarmono').val() + '&#39;,&#39;'
                                                      + $('#monogramfont').val() + '&#39;,' + true + ');';
        window.indexUndo++;
        window.undoflag = false;
    }

    if (($('#monotextT').val() != '') && ($('#monocolorT').val() != 'color')) {

        if ($('#monogram li').eq(0).attr('class') != "" && $('#monogram li').eq(0).attr('class') != undefined) {
            string = " Cuff,";
            Cuff = 2;
            thereIs = true;
        }
        if ($('#monogram li').eq(1).attr('class') != "" && $('#monogram li').eq(1).attr('class') != undefined) {
            string = string + " Pocket,";
            Pocket = 2;
            thereIs = true;
        }
        if ($('#monogram li').eq(2).attr('class') != "" && $('#monogram li').eq(2).attr('class') != undefined) {
            string = string + " Collar,";
            Collar = 2;
            thereIs = true;
        }
    }
    if (thereIs) {
        var text = $('#monotextT').val();
        var color = $('#monocolorT').val();
        $('.monolab')[0].innerHTML = "Monogram '" + text + "' on" + string + " in " + color;
        $('.monolab')[1].innerHTML = "Monogram '" + text + "' on" + string + " in " + color;
        $('#MonoDisc').html("Monogram '" + text + "' on" + string + " in " + color);

        $('#cuffmono').val(Cuff);
        $('#pocketmono').val(Pocket);
        $('#collarmono').val(Collar);

        $('#monotext').val($('#monotextT').val());
        $('#monocolor').val($('#monocolorT').val());

        Font = $('#partMonogramFont li.active').index();

        $('#monogramfont').val(Font);
    }
    else {
        $('#monotext').val('');
        $('#monocolor').val('color');
        $('#pocketmono').val(Pocket);
        $('#collarmono').val(Collar);
        $('#cuffmono').val(Cuff);
        $('.monolab')[0].innerHTML = "No Monograms selected.";
        $('.monolab')[1].innerHTML = "No Monograms selected.";
        $('#MonoDisc').html("");

        $('#monogramfont').val(Font);
    }
}

function LabelClick(plac) {
    if ($('#label li').eq(plac - 1).attr('class') == "" || $('#label li').eq(plac - 1).attr('class') == undefined) {
        $('#label li').eq(plac - 1).addClass("CircleActive");
    }
    else {
        $('#label li').eq(plac - 1).removeClass("CircleActive");
    }
}

function ApplyLabel() {
    var thereIs = false;
    var string = "";
    var Font = 0;

    if (!window.undoflag) {

        window.stack[window.indexUndo] = 'monolabel(&#39;' + $('#labeltext').val() + '&#39;,&#39;'
                                                      + $('#labelcolor').val() + '&#39;,&#39;'
                                                      + $('#placketlabel').val() + '&#39;,&#39;'
                                                      + $('#collarlabel').val() + '&#39;,'
                                                      + false + ',&#39;' + $('#labelfont').val() + '&#39;,' + false + ');';
        window.indexUndo++;
        window.undoflag = false;
    }

    if (($('#labeltextT').val() != '') && ($('#labelcolorT').val() != 'color')) {
        if ($('#label li:first').attr('class') != "" && $('#label li:first').attr('class') != undefined) {
            string = " Placket,";
            $('#placketlabel').val(2);
            thereIs = true;
        }
        if ($('#label li:last').attr('class') != "" && $('#label li:last').attr('class') != undefined) {
            string = string + " Collar,";
            $('#collarlabel').val(2);
            thereIs = true;
        }
    }
    if (thereIs) {
        var text = $('#labeltextT').val();
        var color = $('#labelcolorT').val();

        $('#labeltext').val(text);
        $('#labelcolor').val(color);
        $('.lablab')[0].innerHTML = "Label '" + text + "' on " + string + " in " + color;
        $('.lablab')[1].innerHTML = "Label '" + text + "' on " + string + " in " + color;
        $('#LabelDisc').html("Label '" + text + "' on " + string + " in " + color);

        Font = $('#partLabelFont li.active').index();
        $('#labelfont').val(Font);
    }
    else {
        $('#labeltext').val('');
        $('#labelcolor').val('color');
        $('#placketlabel').val(1);
        $('#collarlabel').val(1);
        $('.lablab')[0].innerHTML = "No Labels selected.";
        $('.lablab')[1].innerHTML = "No Labels selected.";
        $('#LabelDisc').html("");
        $('#labelfont').val(Font);
    }
}

function zoomShow(type) {
    switch (type) {
        case 1:
            {
                collarZoom();
                break;
            }
        case 2:
            {
                cuffZoom();
                break;
            }
        case 3:
            {
                shoulderZoom();
                break;
            }
        case 4:
            {
                pocketZoom();
                break;
            }
        case 5:
            {
                cuffinnerZoom();
                break;
            }
        default:

    }
    $('#ZumShirt').show();
}
function zoomHide() {
    $('#ZumShirt').hide();
}

function collarZoom() {
    var collar = parseInt($('#collar').val());
    var basecolor = $('#basecolor').val();
    var collarcolor = $('#collarcolor').val();
    var placket = $('#placket').val();
    var buttons = $('#buttons').val();

    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    var data = '';
    switch (collar) {
        case 1:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0003.png />';
                break;
            }
        case 4:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0005.png />';
                break;
            }
        case 5:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0008.png />';
                break;
            }
        case 6:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0007.png />';
                break;
            }
        case 7:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0006.png />';
                break;
            }
        case 8:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0009.png />';
                break;
            }
        case 9:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0002.png />';
                break;
            }
        case 10:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0004.png />';
                break;
            }
        default:
            {
                data = data + '<img src=' + server + basecolor + '_collar_set2_0001.png />';
                break;
            }
    }
   
    data = data + '<img src=' + server + collarcolor + '_collar_set3_0014.png />';

    if ($('#collarlining').val() == "1") {
        data = data + '<img src=' + server + $('#collarliningcolor').val() + '_collar_set3_0004.png />';
    }

    data = data + '<img src=' + server + buttons + '_collar_button_0002.png />';
    if (placket == "3") {

        if (collar == 2 || collar == 5 || collar == 6 || collar == 7 || collar == 8 || collar == 9 || collar == 10) {
            data = data + '<img src=' + server + $('#placketcolor').val() + '_collar_set3_0006.png />';
        }
        else {
            data = data + '<img src=' + server + $('#placketcolor').val() + '_collar_set3_0013.png />';
        }
    }
    else if (placket == "2") {
        data = data + '<img src=' + server + buttons + '_collar_button_0004.png />';
    }
    else {
        if (collar == 2 || collar == 5 || collar == 6 || collar == 7 || collar == 8 || collar == 9 || collar == 10) {
            data = data + '<img src=' + server + $('#placketcolor').val() + '_collar_set3_0005.png />';
        }
        else {
            data = data + '<img src=' + server + $('#placketcolor').val() + '_collar_set3_0012.png />';
        }

        data = data + '<img src=' + server + buttons + '_collar_button_0004.png />';
    }


    data = data + getCollarItem();

    if ($('#strap').val() == "3") {
        data = data + '<img src=' + server + $('#strapcolor').val() + '_collar_set3_0007.png />';
    }

    $('#ZumShirt').html(data);
}

function getCollarItem() {
    var collar = parseInt($('#collar').val());
    var basecolor = $('#basecolor').val();
    var collarcolor = $('#collarcolor').val();
    var placket = $('#placket').val();
    var buttons = $('#buttons').val();
    var data = '';
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';

    switch (collar) {
        case 1:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0002.png />';
                break;
            }
        case 4:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0003.png />';
                data = data + '<img src=' + server + buttons + '_collar_button_0003.png />';
                break;
            }
        case 5:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0011.png />';
                break;
            }
        case 6:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0010.png />';
                break;
            }
        case 7:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0009.png />';
                data = data + '<img src=' + server + buttons + '_collar_button_0009.png />';
                break;
            }
        case 8:
            {
                break;
            }
        case 9:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0008.png />';
                break;
            }
        case 10:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0001.png />';
                break;
            }
        default:
            {
                data = data + '<img src=' + server + collarcolor + '_collar_set3_0000.png />';
                break;
            }
    }
    return data;
}

function cuffZoom() {
    var cuff = parseInt($('#cuff').val());
    var basecolor = $('#basecolor').val();
    var cuffcolor = $('#cuffcolor').val();

    var buttons = $('#buttons').val();
    var data;
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    switch (cuff) {
        case 2:
            {
                data = '<img src=' + server + basecolor + '_cuff_set2_0001.png />';
                data = data + '<img src=' + server + cuffcolor + '_cuff_set3_0002.png />';
                data = data + '<img src=' + server + buttons + '_cuff_button_0002.png />';
                break;
            }
        case 3:
            {
                data = '<img src=' + server + basecolor + '_cuff_set2_0000.png />';
                data = data + '<img src=' + server + cuffcolor + '_cuff_set3_0000.png />';
                data = data + '<img src=' + server + buttons + '_cuff_button_0000.png />';
                break;
            }
        case 4:
            {
                var pocket = $('#pocket').val();
                var strapcolor = $('#strapcolor').val();
                if (pocket == "1") {
                    if ($('#strap').val() == "3") {
                        data = '<img src=' + server + basecolor + '_short_set2_0002.png />';
                    }
                    else {
                        data = '<img src=' + server + basecolor + '_short_set2_0000.png />';
                    }
                }
                else {
                    if ($('#strap').val() == "3") {
                        data = '<img src=' + server + basecolor + '_short_set2_0003.png />';
                    }
                    else {
                        data = '<img src=' + server + basecolor + '_short_set2_0001.png />';
                    }

                    if (pocket == "2") {
                        data = data + '<img src=' + server + strapcolor + '_short_set1_0007.png />';
                    }
                    else {

                        data = data + '<img src=' + server + $('#pocketcolor').val() + '_short_set3_0000.png />';
                        data = data + '<img src=' + server + buttons + '_short_button_0001.png />';
                    }
                }
                data = data + '<img src=' + server + cuffcolor + '_short_set1_0008.png />';

                break;
            }
        default:
            {
                data = '<img src=' + server + basecolor + '_cuff_set2_0001.png />';
                data = data + '<img src=' + server + cuffcolor + '_cuff_set3_0001.png />';
                data = data + '<img src=' + server + buttons + '_cuff_button_0001.png />';
                break;
            }
    }

    $('#ZumShirt').html(data);
}

function cuffinnerZoom() {
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    var data;
    var cuffinnercolor = $('#cuffinnercolor').val();
    var cuffinner = $('#cuffinner').val();
    var basecolor = $('#basecolor').val();

    data = '<img src=' + server + basecolor + '_inside_cuff_0000.png />';
    switch (cuffinner) {
        case "1":
            {
                data = data + '<img src=' + server + cuffinnercolor + '_inside_cuff_0001.png />';
                break;
            }
        case "2":
            {
                data = data + '<img src=' + server + cuffinnercolor + '_inside_cuff_0002.png />';
                break;
            }
        default:
            {
                break;
            }
    }
    $('#ZumShirt').html(data);
}

function shoulderZoom() {
    var strap = $('#strap').val()
    var basecolor = $('#basecolor').val();
    var strapcolor = $('#strapcolor').val();

    var buttons = $('#buttons').val();
    var data;
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';
    switch (strap) {
        case "2":
            {
                data = '<img src=' + server + basecolor + '_shoulders_set2_0000.png />';
                data = data + '<img src=' + server + strapcolor + '_shoulders_set3_0007.png />';
                data = data + '<img src=' + server + buttons + '_shoulders_button_0006.png />';
                break;
            }
        case "3":
            {
                data = '<img src=' + server + basecolor + '_shoulders_set2_0001.png />';
                data = data + '<img src=' + server + strapcolor + '_shoulders_set3_0008.png />';
                break;
            }
        default:
            {
                data = '<img src=' + server + basecolor + '_shoulders_set2_0002.png />';
                break;
            }
    }

    $('#ZumShirt').html(data);
}
function pocketZoom() {
    var pocket = $('#pocket').val();
    var cuff = $('#cuff').val();
    var basecolor = $('#basecolor').val();
    var pocketcolor = $('#pocketcolor').val();

    var buttons = $('#buttons').val();
    var data;
    var server = 'http://c4233705.r5.cf2.rackcdn.com/';

    switch (cuff) {
        case "3":
            {
                data = '<img src=' + server + basecolor + '_pockets_set2_0001.png />';

                break;
            }
        case "4":
            {
                data = '<img src=' + server + basecolor + '_pockets_set2_0002.png />';

                break;
            }
        default:
            {
                data = '<img src=' + server + basecolor + '_pockets_set2_0000.png />';

                break;
            }
    }

    if ($('#placket').val() == "3") {
        data = data + '<img src=' + server + $('#placketcolor').val() + '_pockets_set3_0006.png />';
    } else {
        if ($('#placket').val() == "2") {
            data = data + '<img src=' + server + $('#placketcolor').val() + '_pockets_set3_0005.png />';
        }

        data = data + '<img src=' + server + buttons + '_pockets_button_0004.png />';
    }

    if (pocket != "1") {
        if (pocket == "2") {
            data = data + '<img src=' + server + pocketcolor + '_pockets_set1_0007.png />';
        } else {
            data = data + '<img src=' + server + pocketcolor + '_pockets_set3_0000.png />';
            data = data + '<img src=' + server + buttons + '_pockets_button_0001.png />';
        }
    }
    $('#ZumShirt').html(data);
}

function fb() {
    var qString = $(document.forms[0]).serialize();
    $.post('/Shirts/SaveShareShirt/', qString, function (data) {
        fbshareurl(data);
    });
}
function fbshareurl(shareid) {
    var server = $('#server').val();
    var thefburl = server + "/dress-shirts-style/fbshare.aspx?shareid=" + shareid;
    window.open('http://beta.facebook.com/sharer.php?u=' + encodeURIComponent(thefburl) + '&t=' + encodeURIComponent('Check Out My Awesome Blank Label Shirt'), 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;
}

function SaveDising() {
    if ($('#Account').length == 1) {
        window.canredirect = true;
        $('#saveDising').val(true);
        var action = document.forms[0].action;
        action = action.replace('UpdateItem', 'SaveDesign').replace('AddItem', 'SaveDesign');
        document.forms[0].action = action;
        document.forms[0].submit();
    } else {
        $('#LogIn').click();
    }
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

function UndoFabric(type, id) {
    $('#CurrentType').val(type);
    fabricTypeClick(id);
}

function monolabel(text, color, p1, p2, p3, font, isMono) {
    if (isMono) {
        $('#monotextT').val(text);
        $('#monocolorT').val(color);
        if (p1 == '2') {
            $('#monogram li').eq(0).attr('class', 'CircleActive');
        }
        else {
            $('#monogram li').eq(0).attr('class', '');
        }
        if (p2 == '2') {
            $('#monogram li').eq(1).attr('class', 'CircleActive');
        }
        else {
            $('#monogram li').eq(1).attr('class', '');
        }
        if (p3 == '2') {
            $('#monogram li').eq(2).attr('class', 'CircleActive');
        }
        else {
            $('#monogram li').eq(2).attr('class', '');
        }

        $('#partMonogramFont li').removeClass('active');
        $('#partMonogramFont li a').removeClass('item_selected');
        
        $('#partMonogramFont li').eq(font).addClass('active');
        $($('#partMonogramFont li').eq(font)).find('a').addClass('item_selected');

        ApplyMono();
    }
    else {
        $('#labeltextT').val(text);
        $('#labelcolorT').val(color);
        if (p1 == '2') {
            $('#label li').eq(0).attr('class', 'CircleActive');
        }
        else {
            $('#label li').eq(0).attr('class', '');
        }
        if (p2 == '2') {
            $('#label li').eq(1).attr('class', 'CircleActive');
        }
        else {
            $('#label li').eq(1).attr('class', '');
        }

        $('#partLabelFont li').removeClass('active');
        $('#partLabelFont li a').removeClass('item_selected');

        $('#partLabelFont li').eq(font).addClass('active');
        $($('#partLabelFont li').eq(font)).find('a').addClass('item_selected');

        ApplyLabel();
    }
}