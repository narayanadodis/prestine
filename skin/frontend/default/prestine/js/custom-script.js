var base_url = 'http://localhost/projects/prestine/';
var prestine_url = 'http://localhost/projects/prestine/customize/';
window.indexUndo = 0;
window.stack = new Array();

function fabricClick(fid, price, name, tailorsprice, description) {
    var server = prestine_url;
    var LargImag = prestine_url + fid + ".jpg";
    var UrlImageFabric = prestine_url + fid + ".jpg";

    jQuery('#LargImagFabric').attr('src', LargImag);
    jQuery('#ImageFabric').attr('src', UrlImageFabric);
    jQuery('#ImageFabric').val(price)

    jQuery('#TitleFabric').html('Base of ' + name);

    jQuery('.price').text(price + '.00');
    jQuery('#shirtprice').val(Number(price.replace(/[^0-9\.]+/g, "")));

    if (jQuery('#collarcolor').val() == jQuery('#basecolor').val()) {
        jQuery('#collarcolor').val(fid);
    }
    if (jQuery('#collarliningcolor').val() == jQuery('#basecolor').val()) {
        jQuery('#collarliningcolor').val(fid);
    }

    if (jQuery('#cuffcolor').val() == jQuery('#basecolor').val()) {
        jQuery('#cuffcolor').val(fid);
    }
    if (jQuery('#placketcolor').val() == jQuery('#basecolor').val()) {
        jQuery('#placketcolor').val(fid);
    }
    if (jQuery('#pocketcolor').val() == jQuery('#basecolor').val()) {
        jQuery('#pocketcolor').val(fid);
    }
    if (jQuery('#strapcolor').val() == jQuery('#basecolor').val()) {
        jQuery('#strapcolor').val(fid);
    }

    jQuery('#sbaimg').attr('src', (server + fid + '_main_set2_0005.png'));

    jQuery('#basecolor').val(fid);

    jQuery('#fabric_title').text(name + ':');
    jQuery('#fabric_description').text(description);
    jQuery('#fabric_tailorsPrice').text('At your local tailor: ' + tailorsprice + '.00');
    jQuery('#fabric_price').text('At Blank Label: ' + price + '.00');

    jQuery('#scolimg').attr('src', prestine_url + jQuery('#collarliningcolor').val() + "_main_set3_0004.png");
    CuffClick(parseInt(jQuery('#cuff').val()));
    placketClick(parseInt(jQuery('#placket').val()));
    PocketClick(parseInt(jQuery('#pocket').val()));

    CollarClick(parseInt(jQuery('#collar').val()));
    ShoulderClick(parseInt(jQuery('#strap').val()));
    SleeveClick(parseInt(jQuery('#sleeve').val()));
    BackClick(parseInt(jQuery('#back').val()))
}

function SleeveClick(plac) 
{
    var plac = parseInt(plac);

    var server = prestine_url;
     if (!window.undoflag) {
         window.stack[window.indexUndo] = 'SleeveClick('+ jQuery('#sleeve').val() +');';
         window.indexUndo++;
         window.undoflag = false;
     }

    //jQuery('#sleeve_case').val(plac);
    var fid = jQuery('#cuffcolor').val();
    jQuery('#sleeve').val(plac);
    var basecolor = jQuery('#basecolor').val();

    switch (plac) {
        case 1:
        {
            if(jQuery('#cuff').val() == 3)
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0001.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0005.png');
                jQuery('#sba5img').attr('src', server + 'FrenchSleeve_WhiteLineIssueSolver.png');
                break;
            }
            else if(jQuery('#cuff').val() == 1 || jQuery('#cuff').val() == 2)
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0000.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006.png');
                jQuery('#sba5img').attr('src', server + 'StandardSleeve_WhiteLineIssueSolver.png');
                break;
            }
            else
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0000.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006.png');
                jQuery('#sba5img').attr('src', server + 'StandardSleeve_WhiteLineIssueSolver.png');
                break;
            }
        }

        case 2:
        {
            if(jQuery('#cuff').val() == 3)
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_french_rolled.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0005_1.png');
                jQuery('#sba5img').attr('src', '');
                break;
            }
            else if(jQuery('#cuff').val() == 1 || jQuery('#cuff').val() == 2)
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_rolled.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006_1.png');
                jQuery('#sba5img').attr('src', '');
                break;
            }
            else
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_rolled.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006_1.png');
                jQuery('#sba5img').attr('src', '');
                break;
            }
        }

        case 3:
        {
            jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0002.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0008.png');
                jQuery('#sba5img').attr('src', server + 'ShortSleeve_WhiteLineIssueSolver.png');

                jQuery('#CuffFabric li').eq(0).attr('class', '');
                jQuery('#CuffFabric li').eq(1).attr('class', '');

                jQuery('#CuffcolorDisc').html("");
                jQuery('#cuffcolor').val(jQuery('#basecolor').val());
                jQuery('#cutomcuff').val(false);


                jQuery('#cuffinnercolor').val(jQuery('#basecolor').val());
                jQuery('#cuffinner').val(0);
                jQuery('#CuffinnercolorDisc').html('');

                break;
            // jQuery('#cuff').val('4');
            // CuffClick(parseInt(jQuery('#cuff').val()));
            // break;
        }
    }

    jQuery.ajax({   
        url : base_url + 'customizeshirt/index/sleeve',
        type : 'get',
        data : 'switchno=' + plac,
        success : function(data) {
        jQuery('#SleeveDisc').html(data);
        }
    });

}

function CuffClick(plac) {
    jQuery('#CuffType li').removeClass();
    jQuery('#CuffType li').eq(plac - 1).addClass("active");

    var server = prestine_url;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'CuffClick(' + jQuery('#cuff').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }

   

    var fid = jQuery('#cuffcolor').val();
    jQuery('#cuff').val(plac);
    var basecolor = jQuery('#basecolor').val();

    switch (plac) {
        case 2:
            {
                if(jQuery('#sleeve').val() == 1)
                {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0000.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006.png');
                jQuery('#sba5img').attr('src', server + 'StandardSleeve_WhiteLineIssueSolver.png');
                break;
                }
                if(jQuery('#sleeve').val() == 2)
                {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_rolled.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006_1.png');
                jQuery('#sba5img').attr('src', '');
                break;
                }
            }
        case 3:
            {
                if(jQuery('#sleeve').val() == 1)
                {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0001.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0005.png');
                jQuery('#sba5img').attr('src', server + 'FrenchSleeve_WhiteLineIssueSolver.png');
                break;
                }
                if(jQuery('#sleeve').val() == 2)
                {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_french_rolled.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0005_1.png');
                jQuery('#sba5img').attr('src', '');
                break;
                }
            }
        case 4:
            {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0002.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0008.png');
                jQuery('#sba5img').attr('src', server + 'ShortSleeve_WhiteLineIssueSolver.png');

                jQuery('#CuffFabric li').eq(0).attr('class', '');
                jQuery('#CuffFabric li').eq(1).attr('class', '');

                jQuery('#CuffcolorDisc').html("");
                jQuery('#cuffcolor').val(jQuery('#basecolor').val());
                jQuery('#cutomcuff').val(false);


                jQuery('#cuffinnercolor').val(jQuery('#basecolor').val());
                jQuery('#cuffinner').val(0);
                jQuery('#CuffinnercolorDisc').html('');

                break;
            }
        default:
            {
               if(jQuery('#sleeve').val() == 1)
                {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_0000.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006.png');
                jQuery('#sba5img').attr('src', server + 'StandardSleeve_WhiteLineIssueSolver.png');
                break;
                }
                if(jQuery('#sleeve').val() == 2)
                {
                jQuery('#sslimg').attr('src', server + basecolor + '_main_set2_rolled.png');
                jQuery('#scuimg').attr('src', server + fid + '_main_set1_0006_1.png');
                jQuery('#sba5img').attr('src', '');
                break;
                }
            }
    }

    /*if (plac == 4) {
        if (jQuery('#zoomcuff').css('visibility') == 'visible') {
            jQuery('#zoomcuffinner').css('visibility', 'hidden');
        }
    }
    else {
        if (jQuery('#zoomcuff').css('visibility') == 'visible') {
            jQuery('#zoomcuffinner').css('visibility', 'visible');
        }
    }

    jQuery.get(base_url + 'customizeshirt/index/cuff?switchno=' + plac, function (data) {
        jQuery('#CuffDisc').html(data);
    });*/
	jQuery.ajax({   
		url : base_url + 'customizeshirt/index/cuff',
		type : 'get',
		data : 'switchno=' + plac,
		success : function(data) {
		jQuery('#CuffDisc').html(data);
		}
	});
				
}

function placketClick(plac) {
    jQuery('#PlacketType li').removeClass();
    jQuery('#PlacketType li').eq(plac - 1).addClass("active");
    var fid = jQuery('#placketcolor').val();
    var server = prestine_url;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'placketClick(' + jQuery('#placket').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    jQuery('#placket').val(plac);

    switch (plac) {
        case 1:
            {
                var url = server + fid + '_main_set3_0012.png';
                jQuery('#splimg').attr('src', url);
                jQuery('#sba3img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0004.png'));
                jQuery('#PlacketFabric').show();
                jQuery('#ttlPlacketFabricText').show();
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_set3_0013.png';
                jQuery('#splimg').attr('src', url);
                jQuery('#sba3img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#PlacketFabric').show();
                jQuery('#ttlPlacketFabricText').show();
                break;
            }
        default:
            {
                jQuery('#PlacketFabric li').eq(0).attr('class', '');
                jQuery('#PlacketcolorDisc').html('');

                jQuery('#splimg').attr('src', (prestine_url + 'blank.png'));
                jQuery('#sba3img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0004.png'));
                jQuery('#PlacketFabric').hide();
                jQuery('#ttlPlacketFabricText').hide();
                jQuery('#placketcolor').val(jQuery('#basecolor').val());
                jQuery('#customplacket').val(false);
                break;
            }
    }

    /*jQuery.get('/Shirts/GetPlacket/' + plac, function (data) {
        jQuery('#PlacketDisc').html(data);
    });*/
	jQuery.ajax({   
		url : base_url + 'customizeshirt/index/front',
		type : 'get',
		data : 'switchno=' + plac,
		success : function(data) {
		jQuery('#PlacketDisc').html(data);
		}
	});
}

function NoofPocketClick(plac) {
    //jQuery('#PocketType li').removeClass();
   // jQuery('#PocketType li').eq(plac - 1).addClass("active");
    //var fid = jQuery('#pocketcolor').val();
    var server = prestine_url;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'NoofPocketClick(' + jQuery('#noofpocket').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    var plac = parseInt(plac);
    
    jQuery('#noofpocket').val(plac);
    //alert(plac);
    
    switch (plac) {
        case 1:
            {
                //alert('1');
                //PocketClick(parseInt(jQuery('#pocket').val()));
                PocketClick(parseInt(jQuery('#pocket').val()));
                break;
            }

        case 2:
            {
                //alert('2');
                PocketClick(parseInt(jQuery('#pocket').val()));
                break;
            }
        default:
            {
               //alert('def');

            }
    }

   
}

function PocketClick(plac) {
    jQuery('#PocketType li').removeClass();
    jQuery('#PocketType li').eq(plac - 1).addClass("active");
    var fid = jQuery('#pocketcolor').val();
    var server = prestine_url;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'PocketClick(' + jQuery('#pocket').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    jQuery('#pocket').val(plac);

    if(jQuery('#pocket').val() == 1)
    {
        jQuery('.noofpocket_cont').hide();
    }
    else
    {
        jQuery('.noofpocket_cont').show();
    }

    var noofpockets = jQuery('#noofpocket').val();

    if(noofpockets == 1) {
        switch (plac) {
        case 1:
            {
                jQuery('#spoimg').attr('src', (prestine_url + 'blank.png'));
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }

        case 2:
            {
                var url = server + fid + '_main_1poc_round.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_1poc_angle.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 4:
            {
                var url = server + fid + '_main_1poc_diamond.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 5:
            {
                var url = server + fid + '_main_1poc_square.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 6:
            {
                var url = server + fid + '_main_1poc_flap_round.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001_1.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 7:
            {
                var url = server + fid + '_main_1poc_flap_angle.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001_1.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 8:
            {
                var url = server + fid + '_main_1poc_flap_diamond.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001_1.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        /*case 3:
            {
                var url = server + fid + '_main_set3_0000.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }*/
        default:
            {
                var url = server + fid + '_main_1poc_angle.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        }
    }

    if(noofpockets == 2) {
        switch (plac) {
        case 1:
            {
                jQuery('#spoimg').attr('src', (prestine_url + 'blank.png'));
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }

        case 2:
            {
                var url = server + fid + '_main_2poc_round.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_2poc_angle.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 4:
            {
                var url = server + fid + '_main_2poc_diamond.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 5:
            {
                var url = server + fid + '_main_2poc_square.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 6:
            {
                var url = server + fid + '_main_2poc_flap_round.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 7:
            {
                var url = server + fid + '_main_2poc_flap_angle.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        case 8:
            {
                var url = server + fid + '_main_2poc_flap_diamond.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        /*case 3:
            {
                var url = server + fid + '_main_set3_0000.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0001.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }*/
        default:
            {
                var url = server + fid + '_main_2poc_angle.png';
                jQuery('#spoimg').attr('src', url);
                jQuery('#sba4img').attr('src', (prestine_url + 'blank.png'));
                jQuery('#pocketstyle').val(1);
                break;
            }
        }
    }

    

    /*jQuery.get('/Shirts/GetPocket/' + plac, function (data) {
        jQuery('#PocketDisc').html(data);
    });*/
	jQuery.ajax({   
		url : base_url + 'customizeshirt/index/pocket',
		type : 'get',
		data : 'switchno=' + plac,
		success : function(data) {
		jQuery('#PocketDisc').html(data);
		}
	});
}

function CollarClick(plac) 
{

    jQuery('#CollarType li').removeClass();
    jQuery('#CollarType').find('li[collar=' + plac + ']').addClass("active");

    var fid = jQuery('#collarcolor').val();
    var basecolor = jQuery('#basecolor').val();
    var server = prestine_url;
    var plac = plac;

    if (!window.undoflag) {
        window.stack[window.indexUndo] = 'CollarClick(' + jQuery('#collar').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    jQuery('#collar').val(plac);

    if (fid != basecolor || plac == 8) {
        jQuery('#scoimg_neru').attr('src', prestine_url + fid + "_main_set3_0016.png");
    }
    else {
        jQuery('#scoimg_neru').attr('src', prestine_url + 'blank.png');
    }
    
    plac = parseInt(plac);
    switch (plac) {
        case 2:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0015.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0011.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 4:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0003.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0005.png');
                jQuery('#scobdimg').attr('src', server + jQuery('#buttons').val() + '_main_button_0003.png');
                break;
            }
        case 5:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0011.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0008.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 6:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0010.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0007.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 7:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0009.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0006.png');
                jQuery('#scobdimg').attr('src', server + jQuery('#buttons').val() + '_main_button_0009.png');
                break;
            }
        case 8:
            {
                jQuery('#scoimg').attr('src', prestine_url + 'blank.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0009.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 9:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0014.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0010.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        case 10:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0001.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0004.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
        default:
            {
                jQuery('#scoimg').attr('src', server + fid + '_main_set3_0002.png');
                jQuery('#sbaimg').attr('src', server + basecolor + '_main_set2_0003.png');
                jQuery('#scobdimg').attr('src', prestine_url + 'blank.png');
                break;
            }
    }

    var pl = jQuery('#placket').val();
    fid = jQuery('#placketcolor').val();

    if (pl == "3") { //covered
        if (plac == 2 || plac == 5 || plac == 6 || plac == 7 || plac == 8 || plac == 9 || plac == 10) {
            var url = server + fid + '_main_set3_0006.png';
            jQuery('#splimg').attr('src', url);
        }
        else {
            var url = server + fid + '_main_set3_0013.png';
            jQuery('#splimg').attr('src', url);
        }
        jQuery('#sba3img').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
    }
    else if (pl == "2") { //french
        jQuery('#splimg').attr('src', 'http://c12743256.r56.cf2.rackcdn.com/Images/blank.png');
        jQuery('#sba3img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0004.png'));
    }
    else { //normal
        if (plac == 2 || plac == 5 || plac == 6 || plac == 7 || plac == 8 || plac == 9 || plac == 10) {
            var url = server + fid + '_main_set3_0005.png';
            jQuery('#splimg').attr('src', url);
        }
        else {
            var url = server + fid + '_main_set3_0012.png';
            jQuery('#splimg').attr('src', url);
        }
        jQuery('#sba3img').attr('src', (server + jQuery('#buttons').val() + '_main_button_0004.png'));
    }

/*
    jQuery.get('/Shirts/GetCollar/' + plac, function (data) {
        jQuery('#CollarDisc').html(data);
    });*/
	jQuery.ajax({   
		url : base_url + 'customizeshirt/index/collar',
		type : 'get',
		data : 'switchno=' + plac,
		success : function(data) {
		jQuery('#CollarDisc').html(data);
		}
	});
}


function ShoulderClick(plac) {
    jQuery('#ShoulderType li').removeClass();
    jQuery('#ShoulderType li').eq(plac - 1).addClass("active");
    var fid = jQuery('#strapcolor').val();
    var server = prestine_url;

   if (!window.undoflag) {
        window.stack[window.indexUndo] = 'ShoulderClick(' + jQuery('#strap').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    jQuery('#strap').val(plac);

    switch (plac) {
        case 1:
            {
                jQuery('#sshimg').attr('src', (prestine_url + 'blank.png'));
                break;
            }
        case 3:
            {
                var url = server + fid + '_main_set3_0008.png';
                jQuery('#sshimg').attr('src', url);
                break;
            }
        default:
            {
                var url = server + fid + '_main_set3_0007.png';
                jQuery('#sshimg').attr('src', url);
                break;
            }
    }

   /* jQuery.get('/Shirts/GetShoulder/' + plac, function (data) {
        jQuery('#ShoulderDisc').html(data);
    });*/
	jQuery.ajax({   
		url : base_url + 'customizeshirt/index/shoulder',
		type : 'get',
		data : 'switchno=' + plac,
		success : function(data) {
		jQuery('#ShoulderDisc').html(data);
		}
	});
}

function BackClick(plac) {
    jQuery('#BackType li').removeClass();
    jQuery('#BackType li').eq(plac - 1).addClass("active");
    var coid = jQuery('#collarcolor').val();
    var cuid = jQuery('#cuffcolor').val();
    var fid = jQuery('#basecolor').val();

    var server = prestine_url;

   if (!window.undoflag) {
        window.stack[window.indexUndo] = 'BackClick(' + jQuery('#back').val() + ');';
        window.indexUndo++;
        window.undoflag = false;
    }
    jQuery('#back').val(plac);

    switch (plac) {
        case 1:
            {
                jQuery('#bbimg').attr('src', (server + fid + '_main_back_body.png'));
                jQuery('#bcoimg').attr('src', (server + coid + '_main_back_collar.png'));
                jQuery('#bcuimg').attr('src', (server + cuid + '_main_back_cuff.png'));
                jQuery('#bstimg').attr('src', (prestine_url + 'blank.png'));
                break;
            }
        case 2:
            {
                jQuery('#bbimg').attr('src', (server + fid + '_main_back_body.png'));
                jQuery('#bcoimg').attr('src', (server + coid + '_main_back_collar.png'));
                jQuery('#bcuimg').attr('src', (server + cuid + '_main_back_cuff.png'));
                jQuery('#bstimg').attr('src', (prestine_url + 'shirt_box_pleat.png'));
                break;
            }   
        case 3:
            {
                jQuery('#bbimg').attr('src', (server + fid + '_main_back_body.png'));
                jQuery('#bcoimg').attr('src', (server + coid + '_main_back_collar.png'));
                jQuery('#bcuimg').attr('src', (server + cuid + '_main_back_cuff.png'));
                jQuery('#bstimg').attr('src', (prestine_url + 'shirt_side_pleat.png'));
                break;
            }
        case 4:
            {
                jQuery('#bbimg').attr('src', (server + fid + '_main_back_body.png'));
                jQuery('#bcoimg').attr('src', (server + coid + '_main_back_collar.png'));
                jQuery('#bcuimg').attr('src', (server + cuid + '_main_back_cuff.png'));
                jQuery('#bstimg').attr('src', (prestine_url + 'shirt_center_pleat.png'));
                break;
            }    
        default:
            {
               jQuery('#bbimg').attr('src', (server + fid + '_main_back_body.png'));
                jQuery('#bcoimg').attr('src', (server + coid + '_main_back_collar.png'));
                jQuery('#bcuimg').attr('src', (server + cuid + '_main_back_cuff.png'));
                jQuery('#bstimg').attr('src', (prestine_url + 'blank.png'));
                break;
            }
    }

   /* jQuery.get('/Shirts/GetBack/' + plac, function (data) {
        jQuery('#BackDisc').html(data);
    });*/
    jQuery.ajax({   
        url : base_url + 'customizeshirt/index/back',
        type : 'get',
        data : 'switchno=' + plac,
        success : function(data) {
        jQuery('#BackDisc').html(data);
        }
    });
}

function ViewChangeClick(view) {
    if(view == 'front') {
        jQuery('#shirt').css('display', 'block');
        jQuery('#shirt-back').css('display', 'none');
        jQuery('.viewfront strong').css('color', '#9A181A');
        jQuery('.viewback strong').css('color', '#fff');
    }
    else if(view == 'back') {
        jQuery('#shirt-back').css('display', 'block');
        jQuery('#shirt').css('display', 'none');
        jQuery('.viewback strong').css('color', '#9A181A');
        jQuery('.viewfront strong').css('color', '#fff');
    }
}


function fabricTypeClick(fid, type) {
    var server = prestine_url;
    var id = fid;

    jQuery('#TypeFabric').hide();
    
    switch (type) {
        case "Collar":
            {
                jQuery('#CollarFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#collarcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#customcollar').val(true);
                jQuery('#collarcolor').val(fid);

                window.undoflag = true;
                CollarClick(parseInt(jQuery('#collar').val()));
                BackClick(parseInt(jQuery('#back').val()));
                window.undoflag = false;
				//jQuery('#scolimg').attr('src', prestine_url + fid + "_main_set3_0004.png");
                /*jQuery.get('/Shirts/GetCollarcolor/' + fid, function (data) {
                    jQuery('#CollarcolorDisc').html(data);
                });*/
				jQuery.ajax({   
					url : base_url + 'customizeshirt/index/collarcolor',
					type : 'get',
					data : 'fid=' + fid,
					success : function(data) {
					jQuery('#CollarcolorDisc').html(data);
					}
				});
				
                break;
            }
        case "CollarInner":
            {
                jQuery('#CollarFabric li').eq(1).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#collarliningcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#collarlining').val(1);
                jQuery('#collarliningcolor').val(fid);
                jQuery('#scolimg').attr('src', prestine_url + fid + "_main_set3_0004.png");
				
                /*jQuery.get('/Shirts/GetCollarliningcolor/' + id, function (data) {
                    jQuery('#CollarliningcolorDisc').html(data);
                });*/
				jQuery.ajax({   
					url : base_url + 'customizeshirt/index/collarliningcolor',
					type : 'get',
					data : 'fid=' + fid,
					success : function(data) {
					jQuery('#CollarliningcolorDisc').html(data);
					}
				});
                break;
            }
        case "Cuff":
            {
                jQuery('#CuffFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#cuffcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#cutomcuff').val(true);
                jQuery('#cuffcolor').val(fid);
                window.undoflag = true;
                CuffClick(parseInt(jQuery('#cuff').val()));
                BackClick(parseInt(jQuery('#back').val()));
                window.undoflag = false;
				/*jQuery.get('/Shirts/GetCuffcolor/' + id, function (data) {
                    jQuery('#CuffcolorDisc').html(data);
                });*/
				jQuery.ajax({   
					url : base_url + 'customizeshirt/index/cuffcolor',
					type : 'get',
					data : 'fid=' + fid,
					success : function(data) {
					jQuery('#CuffcolorDisc').html(data);
					}
				});
                break;
            }
        case "CuffInner":
            {
                jQuery('#CuffFabric li').eq(1).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#cuffinnercolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#cuffinner').val(1);
                jQuery('#cuffinnercolor').val(fid);
				
				/*jQuery.get('/Shirts/GetCuffinnercolor/' + id, function (data) {
                    jQuery('#CuffinnercolorDisc').html(data);
                });*/
				jQuery.ajax({   
					url : base_url + 'customizeshirt/index/cuffinnercolor',
					type : 'get',
					data : 'fid=' + fid,
					success : function(data) {
					jQuery('#CuffinnercolorDisc').html(data);
					}
				});
                break;
				
            }
        case "Placket":
            {
                jQuery('#PlacketFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#placketcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#customplacket').val(true);
                jQuery('#placketcolor').val(fid);
                window.undoflag = true;
                placketClick(parseInt(jQuery('#placket').val()));
                window.undoflag = false;
                 /*jQuery.get('/Shirts/GetPlacketcolor/' + id, function (data) {
                     jQuery('#PlacketcolorDisc').html(data);
                 });*/
				 jQuery.ajax({   
					url : base_url + 'customizeshirt/index/placketcolor',
					type : 'get',
					data : 'fid=' + fid,
					success : function(data) {
					jQuery('#PlacketcolorDisc').html(data);
					}
				});

                break;
            }
        case "Pocket":
            {
                jQuery('#PocketFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#pocketcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#custompocket').val(true);
                jQuery('#pocketcolor').val(fid);
                window.undoflag = true;
                PocketClick(parseInt(jQuery('#pocket').val()));
                window.undoflag = false;
                jQuery.get('/Shirts/GetPocketcolor/' + id, function (data) {
                    jQuery('#PocketcolorDisc').html(data);
                });
                break;
            }
        case "Shoulder":
            {
                jQuery('#ShoulderFabric li').eq(0).addClass("active");
                if (!window.undoflag) {
                    window.stack[window.indexUndo] = "UndoFabric(&#39;" + type + "&#39;," + jQuery('#strapcolor').val() + ");";
                    window.indexUndo++;
                    window.undoflag = false;
                }
                jQuery('#customstrap').val(true);
                jQuery('#strapcolor').val(fid);
                window.undoflag = true;
                ShoulderClick(parseInt(jQuery('#strap').val()));
                window.undoflag = false;
                jQuery.get('/Shirts/GetStrapcolor/' + id, function (data) {
                    jQuery('#StrapcolorDisc').html(data);
                });
                break;
            }
        default:
            {
                break;
            }
    }

    jQuery('#CurrentType').val('');
}

function UndoFabric(type, id) {
    jQuery('#CurrentType').val(type);
    fabricTypeClick(id, type);
}

function UndoFunction() {
    if (window.indexUndo > 0) {
        window.indexUndo--;
        if (window.indexUndo >= 0) {
            jQuery('#UndoButton').html("<input type='button' id='un' onclick='" + window.stack[window.indexUndo] + "' />");
        
            window.undoflag = true;
            jQuery('#un')[0].click();
            initScript();
            window.undoflag = false;
        }
    }
}

function initScript() {
    var placket = jQuery('#placket').val();
    jQuery('#PlacketType li').removeClass();
    jQuery('#PlacketType li').eq(placket - 1).addClass("active");

    var pocket = jQuery('#pocket').val();
    jQuery('#PocketType li').removeClass();
    jQuery('#PocketType li').eq(pocket - 1).addClass("active");

    var strap = jQuery('#strap').val();
    jQuery('#ShoulderType li').removeClass();
    jQuery('#ShoulderType li').eq(strap - 1).addClass("active");

    var cuff = jQuery('#cuff').val();
    jQuery('#CuffType li').removeClass();
    jQuery('#CuffType li').eq(cuff - 1).addClass("active");

    var collar = jQuery('#collar').val();
    jQuery('#CollarType li').removeClass();
    jQuery('#CollarType').find('li[collar=' + collar + ']').addClass("active");

    var buttons = jQuery('#buttons').val();
    jQuery('#ButtonColor li').removeClass();
    jQuery('#ButtonColor li').eq(buttons - 1).addClass("active");

    var basecolor = jQuery('#basecolor').val();
    if (placket == 2) {
        jQuery('#PlacketFabric').hide();
        jQuery('#placketcolor').val(jQuery('#basecolor').val());
        jQuery('#customplacket').val(false);
        jQuery('#ttlPlacketFabricText').hide();
    }
    else {
        jQuery('#PlacketFabric').show();
        jQuery('#ttlPlacketFabricText').show();
    }

    if (basecolor != jQuery('#collarcolor').val()) {

        jQuery('#CollarFabric li').eq(0).addClass("active");
    }
    else {
        jQuery('#CollarFabric li').eq(0).removeClass();
    }

    if (Number(jQuery('#collarlining').val() != 0)/*jQuery('#collarcolor').val() != jQuery('#collarliningcolor').val()*/) {
        jQuery('#CollarFabric li').eq(1).addClass("active");
    }
    else {
        jQuery('#CollarFabric li').eq(1).removeClass();
    }

    if (basecolor != jQuery('#cuffcolor').val()) {

        jQuery('#CuffFabric li').eq(0).addClass("active")
    }
    else {
        jQuery('#CuffFabric li').eq(0).removeClass();
    }

    if (jQuery('#cuffcolor').val() != jQuery('#cuffinnercolor').val()) {

        jQuery('#CuffFabric li').eq(1).addClass("active");
    }
    else {
        jQuery('#CuffFabric li').eq(1).removeClass();
    }

    if (basecolor != jQuery('#placketcolor').val()) {
        jQuery('#PlacketFabric li').eq(0).addClass("active")
    }
    else {
        jQuery('#PlacketFabric li').removeClass();
    }

    if (basecolor != jQuery('#pocketcolor').val()) {
        jQuery('#PocketFabric li').eq(0).addClass("active")
    }
    else {
        jQuery('#PocketFabric li').removeClass();
    }

    if (basecolor != jQuery('#strapcolor').val()) {
        jQuery('#ShoulderFabric li').eq(0).addClass("active")
    }
    else {
        jQuery('#ShoulderFabric li').removeClass();
    }

    var mono = false;
    var monoString = "";
    if (jQuery('#cuffmono').val() == 2) {
        jQuery('#monogram li').eq(0).addClass("CircleActive");
        mono = true;
        monoString = " Cuff,";
    }
    if (jQuery('#pocketmono').val() == 2) {
        jQuery('#monogram li').eq(1).addClass("CircleActive");
        mono = true;
        monoString = " Pocket,";
    }
    if (jQuery('#collarmono').val() == 2) {
        jQuery('#monogram li').eq(2).addClass("CircleActive");
        mono = true;
        monoString += " Collar,";
    }
    if (mono) {

        jQuery('#monotextT').val(jQuery('#monotext').val());
        jQuery('#monocolorT option[value*="' + jQuery('#monocolor').val() + '"]').attr('selected', 'selected')
        var string = "Monogram '" + jQuery('#monotext').val() + "' on " + monoString + " in " + jQuery('#monocolor').val();
        jQuery('.monolab').html(string);
        jQuery('#MonoDisc').html(string);
    }

    var label = false;
    var labelString = "";
    if (jQuery('#placketlabel').val() == 2) {
        jQuery('#label li').eq(0).addClass("CircleActive");
        label = true;
        labelString = " Placket,";
    }

    if (jQuery('#collarlabel').val() == 2) {
        jQuery('#label li').eq(1).addClass("CircleActive");
        label = true;
        labelString += " Collar,";
    }

    if (label) {
        var color = jQuery('#labelcolor').val();
        var text = jQuery('#labeltext').val();
        jQuery('#labeltextT').val(text);
        jQuery('#labelcolorT option[value*="' + jQuery('#labelcolor').val() + '"]').attr('selected', 'selected');

        jQuery('.lablab').html("Label '" + text + "' on " + labelString + " in " + color);
        jQuery('#LabelDisc').html("Label '" + text + "' on " + labelString + " in " + color);
    }


}

function MonoClick(plac) {
    if (jQuery('#monogram li').eq(plac - 1).attr('class') == "" || jQuery('#monogram li').eq(plac - 1).attr('class') == undefined) {
        jQuery('#monogram li').eq(plac - 1).addClass("CircleActive");
    }
    else {
        jQuery('#monogram li').eq(plac - 1).removeClass("CircleActive");
    }
}

function selectMonogramFont(val) {
    jQuery('#partMonogramFont li').removeClass('active');
    jQuery('#partMonogramFont li').eq(val).addClass('active');

    jQuery('#partMonogramFont li a').removeClass('item_selected');

    var el = jQuery('#partMonogramFont li').eq(val);
    jQuery(el).find('a').addClass('item_selected');
}

function ApplyMono() {
    var thereIs = false;
    var string = "";
    var Cuff = 1;
    var Pocket = 1;
    var Collar = 1;
    var Font = 0;

    if (!window.undoflag) {

        window.stack[window.indexUndo] = 'monolabel(&#39;' + jQuery('#monotext').val() + '&#39;,&#39;'
                                                      + jQuery('#monocolor').val() + '&#39;,&#39;'
                                                      + jQuery('#cuffmono').val() + '&#39;,&#39;'
                                                      + jQuery('#pocketmono').val() + '&#39;,&#39;' + jQuery('#collarmono').val() + '&#39;,&#39;'
                                                      + jQuery('#monogramfont').val() + '&#39;,' + true + ');';
        window.indexUndo++;
        window.undoflag = false;
    }

    if ((jQuery('#monotextT').val() != '') && (jQuery('#monocolorT').val() != 'color')) {

        if (jQuery('#monogram li').eq(0).attr('class') != "" && jQuery('#monogram li').eq(0).attr('class') != undefined) {
            string = " Cuff,";
            Cuff = 2;
            thereIs = true;
        }
        if (jQuery('#monogram li').eq(1).attr('class') != "" && jQuery('#monogram li').eq(1).attr('class') != undefined) {
            string = string + " Pocket,";
            Pocket = 2;
            thereIs = true;
        }
        if (jQuery('#monogram li').eq(2).attr('class') != "" && jQuery('#monogram li').eq(2).attr('class') != undefined) {
            string = string + " Collar,";
            Collar = 2;
            thereIs = true;
        }
    }
    if (thereIs) {
        var text = jQuery('#monotextT').val();
        var color = jQuery('#monocolorT').val();
        jQuery('.monolab')[0].innerHTML = "Monogram '" + text + "' on" + string + " in " + color;
        jQuery('.monolab')[1].innerHTML = "Monogram '" + text + "' on" + string + " in " + color;
        jQuery('#MonoDisc').html("Monogram '" + text + "' on" + string + " in " + color);

        jQuery('#cuffmono').val(Cuff);
        jQuery('#pocketmono').val(Pocket);
        jQuery('#collarmono').val(Collar);

        jQuery('#monotext').val(jQuery('#monotextT').val());
        jQuery('#monocolor').val(jQuery('#monocolorT').val());

        Font = jQuery('#partMonogramFont li.active').index();

        jQuery('#monogramfont').val(Font);
    }
    else {
        jQuery('#monotext').val('');
        jQuery('#monocolor').val('color');
        jQuery('#pocketmono').val(Pocket);
        jQuery('#collarmono').val(Collar);
        jQuery('#cuffmono').val(Cuff);
        jQuery('.monolab')[0].innerHTML = "No Monograms selected.";
        jQuery('.monolab')[1].innerHTML = "No Monograms selected.";
        jQuery('#MonoDisc').html("");

        jQuery('#monogramfont').val(Font);
    }
}

function LabelClick(plac) {
    if (jQuery('#label li').eq(plac - 1).attr('class') == "" || jQuery('#label li').eq(plac - 1).attr('class') == undefined) {
        jQuery('#label li').eq(plac - 1).addClass("CircleActive");
    }
    else {
        jQuery('#label li').eq(plac - 1).removeClass("CircleActive");
    }
}

function selectLabelFont(val) {
    jQuery('#partLabelFont li').removeClass('active');
    jQuery('#partLabelFont li').eq(val).addClass('active');

    jQuery('#partLabelFont li a').removeClass('item_selected');

    var el = jQuery('#partLabelFont li').eq(val);
    jQuery(el).find('a').addClass('item_selected');
}

function ApplyLabel() {
    var thereIs = false;
    var string = "";
    var Font = 0;

    if (!window.undoflag) {

        window.stack[window.indexUndo] = 'monolabel(&#39;' + jQuery('#labeltext').val() + '&#39;,&#39;'
                                                      + jQuery('#labelcolor').val() + '&#39;,&#39;'
                                                      + jQuery('#placketlabel').val() + '&#39;,&#39;'
                                                      + jQuery('#collarlabel').val() + '&#39;,'
                                                      + false + ',&#39;' + jQuery('#labelfont').val() + '&#39;,' + false + ');';
        window.indexUndo++;
        window.undoflag = false;
    }

    if ((jQuery('#labeltextT').val() != '') && (jQuery('#labelcolorT').val() != 'color')) {
        if (jQuery('#label li:first').attr('class') != "" && jQuery('#label li:first').attr('class') != undefined) {
            string = " Placket,";
            jQuery('#placketlabel').val(2);
            thereIs = true;
        }
        if (jQuery('#label li:last').attr('class') != "" && jQuery('#label li:last').attr('class') != undefined) {
            string = string + " Collar,";
            jQuery('#collarlabel').val(2);
            thereIs = true;
        }
    }
    if (thereIs) {
        var text = jQuery('#labeltextT').val();
        var color = jQuery('#labelcolorT').val();

        jQuery('#labeltext').val(text);
        jQuery('#labelcolor').val(color);
        jQuery('.lablab')[0].innerHTML = "Label '" + text + "' on " + string + " in " + color;
        jQuery('.lablab')[1].innerHTML = "Label '" + text + "' on " + string + " in " + color;
        jQuery('#LabelDisc').html("Label '" + text + "' on " + string + " in " + color);

        Font = jQuery('#partLabelFont li.active').index();
        jQuery('#labelfont').val(Font);
    }
    else {
        jQuery('#labeltext').val('');
        jQuery('#labelcolor').val('color');
        jQuery('#placketlabel').val(1);
        jQuery('#collarlabel').val(1);
        jQuery('.lablab')[0].innerHTML = "No Labels selected.";
        jQuery('.lablab')[1].innerHTML = "No Labels selected.";
        jQuery('#LabelDisc').html("");
        jQuery('#labelfont').val(Font);
    }
}

function monolabel(text, color, p1, p2, p3, font, isMono) {
    if (isMono) {
        jQuery('#monotextT').val(text);
        jQuery('#monocolorT').val(color);
        if (p1 == '2') {
            jQuery('#monogram li').eq(0).attr('class', 'CircleActive');
        }
        else {
            jQuery('#monogram li').eq(0).attr('class', '');
        }
        if (p2 == '2') {
            jQuery('#monogram li').eq(1).attr('class', 'CircleActive');
        }
        else {
            jQuery('#monogram li').eq(1).attr('class', '');
        }
        if (p3 == '2') {
            jQuery('#monogram li').eq(2).attr('class', 'CircleActive');
        }
        else {
            jQuery('#monogram li').eq(2).attr('class', '');
        }

        jQuery('#partMonogramFont li').removeClass('active');
        jQuery('#partMonogramFont li a').removeClass('item_selected');
        
        jQuery('#partMonogramFont li').eq(font).addClass('active');
        jQuery(jQuery('#partMonogramFont li').eq(font)).find('a').addClass('item_selected');

        ApplyMono();
    }
    else {
        jQuery('#labeltextT').val(text);
        jQuery('#labelcolorT').val(color);
        if (p1 == '2') {
            jQuery('#label li').eq(0).attr('class', 'CircleActive');
        }
        else {
            jQuery('#label li').eq(0).attr('class', '');
        }
        if (p2 == '2') {
            jQuery('#label li').eq(1).attr('class', 'CircleActive');
        }
        else {
            jQuery('#label li').eq(1).attr('class', '');
        }

        jQuery('#partLabelFont li').removeClass('active');
        jQuery('#partLabelFont li a').removeClass('item_selected');

        jQuery('#partLabelFont li').eq(font).addClass('active');
        jQuery(jQuery('#partLabelFont li').eq(font)).find('a').addClass('item_selected');

        ApplyLabel();
    }
}
