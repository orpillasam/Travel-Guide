$(document).ready(function() {

	var bigMacUSD = 5.3;
	// displayApi();
	function displayApi() {
		var subject = $(this).attr('data-name');
		console.log("subject is " + subject);

		var queryURL = "https://v3.exchangerate-api.com/bulk/b23eabf8c9716038ad266c7b/USD"
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.rates;

        	var exchangeRateDiv = $('div');
        	exchangeRate = results.AED;
        	console.log('exchange rate is' + exchangeRate);
        	$('#exchange-display').text(exchangeRate);


        });

     }

     // exchangeRateHistory();
     function exchangeRateHistory() {
     	var subject = $(this).attr('data-name');
		console.log("subject is " + subject);

		var queryURL = "https://v3.exchangerate-api.com/archive/b23eabf8c9716038ad266c7b/USD/2012/11/14"
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.rates;

        });


     }
     bigMac();
    function bigMac() {
    	var subject = $(this).attr('data-name');
		console.log("subject is " + subject);

		var queryURL = "https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_CHN?start_date=2017-07-31&end_date=2017-07-31&api_key=9TGtJzuQxqvJizpJDPXX"
		
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.dataset;


        	var CountryDollarPrice = (results.data[0][3]);
        	console.log(dollarPrice);
        	var exchangeRate = (results.data[0][2]);
        	var bigMacIndex = bigMacUSD / CountryDollarPrice;
        	console.log(bigMacIndex);


        });

    }

    // weather();
    function weather(){

    	var subject = $(this).attr('data-name');
		console.log("subject is " + subject);

		var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=455783e66fb6bb9a0d380e49bc2c4117"
		
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.dataset;

        });
    	
       }
       monthlyWeather();
    function monthlyWeather(){
    	var subject = $(this).attr('data-name');
		console.log("subject is " + subject);

		var queryURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=1814235921e94fd2998195653171511&q=chicago&format=json&mca=yes&showmap=yes"
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.dataset;

        });	
    }

});

// "2017-07-31"
// 1
// :
// 5.3  cost in country dollars
// 2
// :
// 1	exchange rate 
// 3
// :
// 5.3 cost in USD
// 4
// :
// 1	how many big macs you can buy in USD
// 5
// :
// 0
// 6
// :
// 0
// 7
// :
// -1.5005913049094
// 8
// :
// 16.178555240496
// 9
// :
// 35.836244457314
// 10
// :
// 10.581714525236
// length
// :
// 11