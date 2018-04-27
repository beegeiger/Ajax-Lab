"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', function(result) {
    	$('#fortune-text').html(result);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function(results) {
    	$('#weather-info').html(results['forecast']);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let formData = {"qty": $("#qty-field").val(), "melon_type": $("#melon-type-field").val()};
    $.post("/order-melons.json", formData, function(results) {
    	$('#order-status').html(results['msg']);
    	if(results['code'] === 'ERROR') {
   			$('#order-status').addClass("order-error");
   		} else {$('#order-status').removeClass("order-error");}
 
   	});

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


