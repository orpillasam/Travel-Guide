$(document).ready(function() {

	var bigMacUSD = 5.3;
	var exchangeRate;
	var currency;
	var selectedMonth;
	var city;
	
	//will create a var called destinations with objects inside which are. Country[Cities][Currency code][Country Code]
	// will need to convert month into an index number, 0-11.

	//takes values from input fields and puts them into variables.  Runs the API functions
	$('#submit-button').on('click', function(event){

		event.preventDefault();
		currency = $('#currency-input').val().trim();
		console.log('currency type is ' + currency);
		city = $('#city-input').val().trim();
		console.log("selected city is " + city);
		country = $('#country-input').val().trim();
		console.log("country is " + country);
		selectedMonth = $('#month-input').val().trim();
		console.log('month is ' + selectedMonth);

		setTimeout(bigMac, 2000);
		getCurrentExchangeRate();
		monthlyWeather();
		
	});

	//calls the currency exchange API.  Gets the current exchange rate of the input country
	function getCurrentExchangeRate() {	

		var queryURL = "https://v3.exchangerate-api.com/bulk/b23eabf8c9716038ad266c7b/USD"
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.rates;
           	console.log("country is " + currency);

           	//currently using the currency input field, but we will put each country in an object and call the currency from there
           	//and we will call the currency code of the selected country
           	exchangeRate = results[currency];  
   	     	console.log('exchange rate is' + exchangeRate);
        	$('#exchange-rate').text(exchangeRate);

        });
     }
     
     //  calls the big mac API. returns cost index and price of big bag in USD
    function bigMac() {

    	//ALERT - will need to change the var country to the country code. will need to put info a country object
		var queryURL = "https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_" + country + "?start_date=2017-07-31&end_date=2017-07-31&api_key=9TGtJzuQxqvJizpJDPXX"
				 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.dataset;

        	// the cost of a big mac in the input country's currency 
        	var countryPrice = (results.data[0][1]);

        	//the cost of a big mac in the input country, in USD
        	var CountryDollarPrice = countryPrice / exchangeRate;
        	console.log(CountryDollarPrice);

        	// the USA big mac price divided by the big mac price in the input country 
        	var bigMacIndex = bigMacUSD / CountryDollarPrice;
        	console.log(bigMacIndex);
        	$('#big-mac-cost').text(CountryDollarPrice);
        	$('#big-mac-index').text(bigMacIndex);

        });

    }
    
    //calls the weather API to retrieve average climate data for the input city
    function monthlyWeather(){

		//needs a valid city name input		
		var queryURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=1814235921e94fd2998195653171511&q=" + city + "&format=json&mca=yes&showmap=yes"
		 		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.data.ClimateAverages[0].month;
    		console.log('selected month is ' + selectedMonth); //var selectedMonth is a user input. needs to be an index #, 0-11.

    		//minimum temperature of the selected month in input city
        	var minTemp = (results[selectedMonth].avgMinTemp_F);
        	console.log("average min temp is " + minTemp);

        	//maximum temperature of the selected month in input city
        	var maxTemp = (results[selectedMonth].absMaxTemp_F);
        	console.log("average max temp is " + maxTemp);

        	//average daily rainfall in selected month in input city, in milimeters
        	var averageDailyRainfall = (results[selectedMonth].avgDailyRainfall);
        	console.log("average daily rainfall is " + averageDailyRainfall + "mm");

        	//coverts the average rainfall into inches. *(days in a month) /(milimeters in a inch)
        	var averageMonthRainfall = averageDailyRainfall * 30 / 25.4;
        	console.log("average monthly rainfall is " + averageMonthRainfall + "in");

        	$('#min-temp').text(minTemp + "F");
        	$('#max-temp').text(maxTemp + "F");
        	$('#average-rainfall').text(averageMonthRainfall + "inches");

        });	
    }

	

});

