var prestine_url = 'http://localhost/projects/prestine/customize/';

function fabricTypeClick(fid, type) {
    var server = prestine_url;
    var id = fid;

    $('#TypeFabric').hide();
    
    switch (type) {
        case "Collar":
            {
                $('#CollarFabric li').eq(0).addClass("active");

                /*if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#collarcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                $('#customcollar').val(true);
                $('#collarcolor').val(fid);

                window.undoflag = true;
                CollarClick(parseInt($('#collar').val()));
                window.undoflag = false;*/

                //setting the productid to get the correct color at the collar
                $('#collarcolor').val(fid);

                var plac = $('#collar').val();
              
                CollarClick(plac);
                break;
            }
        case "CollarInner":
            {
                $('#CollarFabric li').eq(1).addClass("active");

                /*if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#collarliningcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }*/
                $('#collarlining').val(1);
                $('#collarliningcolor').val(fid);
                $('#scolimg').attr('src', prestine_url + fid + "_main_set3_0004.png");
                break;
            }
        case "Cuff":
            {
                $('#CuffFabric li').eq(0).addClass("active");

                /*if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#cuffcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }*/

                $('#cutomcuff').val(true);
                $('#cuffcolor').val(fid);

                /*window.undoflag = true;*/
                CuffClick(parseInt($('#cuff').val()));

                // window.undoflag = false;
                break;
            }
        case "CuffInner":
            {
                $('#CuffFabric li').eq(1).addClass("active");

                /*if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + $('#cuffinnercolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }*/

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