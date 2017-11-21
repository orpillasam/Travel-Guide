$(document).ready(function() {
	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyDYIymwE96hrnwsMAd2DjJT5NTywGQDLHQ",
	authDomain: "project1-burger.firebaseapp.com",
	databaseURL: "https://project1-burger.firebaseio.com",
	projectId: "project1-burger",
	storageBucket: "",
	messagingSenderId: "297665083434"
	};
	firebase.initializeApp(config);

  	var database = firebase.database();
	var bigMacUSD = 5.3;
	var exchangeRate;
	var currency;
	var selectedMonth;
	var city;
	var minTemp;
	var maxTemp;
	var averageMonthRainfall;
	var countryDollarPrice;
	var bigMacIndex;


	//********still need to update the citi names*****************
	//destination (country name) variable is all lowercase
	var destinations = [
			vietnam = {
				countryName: 'Vietnam',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'VNM',
				currencyCode: 'VND',
			},
			argentina = {
				countryName: 'Argentina',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'ARG',
				currencyCode: 'ARS',
			},	
			australia = {
				countryName: 'Australia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'AUS',
				currencyCode: 'AUD',
			},	
			brazil = {
				countryName: 'brazil',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'BRA',
				currencyCode: 'BRL',
			},						
			britain = {
				countryName: 'Britain',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'GBR',
				currencyCode: 'GBP',
			},	
			chile = {
				countryName: 'Chile',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'CHL',
				currencyCode: 'CLP',
			},	
			china = {
				countryName: 'China',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'CHN',
				currencyCode: 'CNY',
			},	
			colombia = {
				countryName: 'Colombia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'COL',
				currencyCode: 'COP',
			},	
			czechrepublic = {
				countryName: 'Czech Republic',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'CZE',
				currencyCode: 'CZK',
			},	
			denmark = {
				countryName: 'Denmark',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'DNK',
				currencyCode: 'DKK',
			},	
			egypt = {
				countryName: 'Egypt',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'EGY',
				currencyCode: 'EGP',
			},	
			hongkong = {
				countryName: 'Hong Kong',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'HKG',
				currencyCode: 'HKD',
			},	
			hungary = {
				countryName: 'HUngary',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'HUN',
				currencyCode: 'HUF',
			},				
			india = {
				countryName: 'India',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'IND',
				currencyCode: 'INR'
			},
			indonesia = {
				countryName: 'Indonesia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'IDN',
				currencyCode: 'IDR',
			},
			israel = {
				countryName: 'Israel',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'ISR',
				currencyCode: 'ILS',
			}, 
			japan = {
				countryName: 'Japan',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'JPN',
				currencyCode: 'JPY',
			},
			lithuania = {
				countryName: 'Lithuania',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'LTU',
				currencyCode: 'EUR',
			},
			malaysia = {
				countryName: 'Malaysia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'MYS',
				currencyCode: 'MYR',
			},
			mexico = {
				countryName: 'Mexico',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'MEX',
				currencyCode: 'MXN',
			},
			newzealand = {
				countryName: 'New Zealand',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'NZ',
				currencyCode: 'NZD',
			},
			norway = {
				countryName: 'Norway',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'NOR',
				currencyCode: 'NOK',
			},
			pakistan = {
				countryName: 'Pakistan',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'PAK',
				currencyCode: 'PKR',
			},
			peru = {
				countryName: 'Peru',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'PER',
				currencyCode: 'PEN',
			},
			philippines = {
				countryName: 'Philippines',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'PHL',
				currencyCode: 'PHP',
			},
			poland = {
				countryName: 'Poland',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'POL',
				currencyCode: 'PLN',
			},
			russia = {
				countryName: 'Russia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'RUS',
				currencyCode: 'RUB',
			},
			saudiarabia = {
				countryName: 'Saudi Arabia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'SAU',
				currencyCode: 'SAR',
			},
			singapore = {
				countryName: 'Singapore',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'SIN',
				currencyCode: 'SGD',
			},
			southafrica = {
				countryName: 'South Africa',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'ZAF',
				currencyCode: 'ZAR',
			},
			southkorea = {
				countryName: 'South Korea',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'KOR',
				currencyCode: 'KRW',
			},
			srilanka = {
				countryName: 'Sri Lanka',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'LKA',
				currencyCode: 'LKR',
			},
			sweden = {
				countryName: 'Sweden',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'SWE',
				currencyCode: 'SKE',
			},	
			switzerland = {
				countryName: 'SWITZERLAND',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'CHE',
				currencyCode: 'CHF',
			},
			taiwan = {
				countryName: 'Taiwan',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'ROC',
				currencyCode: 'TWD',
			},
			thailand = {
				countryName: 'Thailand',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'THA',
				currencyCode: 'THB',
			},
			turkey = {
				countryName: 'Turkey',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'TUR',
				currencyCode: 'TRY',
			},
			uae = {
				countryName: 'United Arab Emirates',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'UAE',
				currencyCode: 'AED',
			},
			ukraine = {
				countryName: 'Ukraine',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'UKR',
				currencyCode: 'UAH',
			},
			usa = {
				countryName: 'United States of America',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'USA',
				currencyCode: 'USD',
			},
			uruguay = {
				countryName: 'Uruguay',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'URY',
				currencyCode: 'UYU',
			},
			venezuela = {
				countryName: 'Venezuela',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'VEN',
				currencyCode: 'VEF',
			},
			austria = {
				countryName: 'Austria',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'AUT',
				currencyCode: 'EUR',
			},
			belgium = {
				countryName: 'Belgium',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'BEL',
				currencyCode: 'EUR',
			},
			estonia = {
				countryName: 'Estonia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'EST',
				currencyCode: 'EUR',
			},
			finland = {
				countryName: 'Finland',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'FIN',
				currencyCode: 'EUR',
			},
			france = {
				countryName: 'France',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'FRA',
				currencyCode: 'EUR',
			},
			germany = {
				countryName: 'Germany',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'DEU',
				currencyCode: 'EUR',
			},
			ireland = {
				countryName: 'Ireland',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'IRL',
				currencyCode: 'EUR',
			},
			italy = {
				countryName: 'Italy',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'ITA',
				currencyCode: 'EUR',
			},
			netherlands = {
				countryName: 'Netherlands',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'NLD',
				currencyCode: 'EUR',
			},
			greece = {
				countryName: 'Greece',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'GRC',
				currencyCode: 'EUR',
			},
			portugal = {
				countryName: 'Portugal',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'PRT',
				currencyCode: 'EUR',
			},
			spain = {
				countryName: 'Spain',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'ESP',
				currencyCode: 'EUR',
			},
			latvia = {
				countryName: 'Latvia',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'LVA',
				currencyCode: 'EUR',
			}
	]
	
	//takes values from input fields and puts them into variables.  Runs the API functions
	$('#submit-button').on('click', function(event){

		event.preventDefault();
		currencyLower = $('#currency-input').val().trim();
		currency = currencyLower.toUpperCase();
		console.log('currency type is ' + currency);

		cityLower = $('#city-input').val().trim();
		city = cityLower.toUpperCase();
		console.log("selected city is " + city);

		countryLower = $('#country-input').val().trim();
		country = countryLower.toLowerCase();
		console.log("country is " + country);
		selectedCountryCode = destinations.country;
		console.log(selectedCountryCode)

		selectedMonth = $('#month-input').val().trim();
		console.log('month is ' + selectedMonth);

		var userSearch = {
			currency:currency,
			countryName:country,
			cityName:city,
			month:selectedMonth,
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		}

		database.ref().push(userSearch);

		$('#currency-input').val('');
		$('#city-input').val('');
		$('#country-input').val('');
		$('#month-input').val('');
		
	});

	database.ref().on('child_added', function(childSnapshot, prevChildKey){

	  	console.log(childSnapshot.val());

	  	currency = childSnapshot.val().currency;
	  	country = childSnapshot.val().countryName;
	  	city = childSnapshot.val().cityName;
	  	selectedMonth = childSnapshot.val().month;

	  	console.log("currency is " + currency);
	  	console.log("country is " + country);
	  	console.log(" city is " + city);
	  	console.log("month is " + selectedMonth);

		setTimeout(bigMac, 500); //delayed since the exchange rate API needs to load first
		getCurrentExchangeRate();
		monthlyWeather();
		setTimeout(travelCard, 1000);

	  });

	function travelCard(){

		var cardDiv = $('<div>');
		var minTempNumber = parseInt(minTemp);
		console.log(minTemp);
		var maxTempNumber = parseInt(maxTemp);
		console.log(maxTemp);
		var averageTemp = (minTempNumber + maxTempNumber) / 2;

		console.log('average temp is ' + averageTemp);
		var exchangeRateConverted = Math.round(exchangeRate * 100) / 100;

		var countryDollarPriceConverted = Math.round(countryDollarPrice * 100) / 100;
		$(countryDollarPriceConverted).addClass('big-mac-price');
		var bigMacIndexConverted = Math.round(bigMacIndex * 100) / 100;

		var averageMonthRainfallConverted = Math.round(averageMonthRainfall * 100) / 100;


		var cityDiv = $('<div>');
		cityDiv.addClass('city');
		cityDiv.append(city);

		var countryDiv = $('<div>');
		countryDiv.addClass('country');
		countryDiv.append(country);

		var exchangeRateConvertedDiv = $('<div>');
		exchangeRateConvertedDiv.addClass('exchange-rate');
		exchangeRateConvertedDiv.text();  // temporary hard code

		var bigMacIndexConvertedDiv = $('<div>');
		bigMacIndexConvertedDiv.addClass('exchange-rate');
		bigMacIndexConvertedDiv.text(exchangeRateConverted);  //temporary hard code

		var averageTempDiv = $('<div>');
		averageTempDiv.addClass('temperature');
		averageTempDiv.text(averageTemp); //temperature hard code

		var averageMonthRainfallConvertedDiv = $('<div>');
		averageMonthRainfallConvertedDiv.addClass('rainfall');
		averageMonthRainfallConvertedDiv.text(averageMonthRainfallConverted);

		var countryDollarPriceConvertedDiv = $('<div>');
		
		countryDollarPriceConvertedDiv.addClass('big-mac-price');
		countryDollarPriceConvertedDiv.text(countryDollarPriceConverted);

    	$(cardDiv).addClass('card-div');
    	cardDiv.append(cityDiv);
    	cardDiv.append(countryDiv);
    	cardDiv.append(exchangeRateConvertedDiv);
  
    	cardDiv.append(countryDollarPriceConvertedDiv);
 
    	cardDiv.append(bigMacIndexConvertedDiv);

    	cardDiv.append(averageTempDiv);

    	cardDiv.append(averageMonthRainfallConvertedDiv)
    	$('#card-well').append(cardDiv);
	}

	//calls the currency exchange API.  Gets the current exchange rate of the input country. this is set in USD
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
        	// $('#exchange-rate').text(exchangeRate + " " + currency + " to USD");

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
        	countryDollarPrice = countryPrice / exchangeRate;
        	console.log(countryDollarPrice);

        	// the USA big mac price divided by the big mac price in the input country 
        	bigMacIndex = bigMacUSD / countryDollarPrice;
        	console.log(bigMacIndex);
        	// $('#big-mac-cost').text("$" +CountryDollarPrice);
        	// $('#big-mac-index').text(bigMacIndex);

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
        	minTemp = (results[selectedMonth].avgMinTemp_F);
        	console.log("average min temp is " + minTemp);

        	//maximum temperature of the selected month in input city
        	maxTemp = (results[selectedMonth].absMaxTemp_F);
        	console.log("average max temp is " + maxTemp);

        	//average daily rainfall in selected month in input city, in milimeters
        	var averageDailyRainfall = (results[selectedMonth].avgDailyRainfall);
        	console.log("average daily rainfall is " + averageDailyRainfall + "mm");

        	//coverts the average rainfall into inches. *(days in a month) /(milimeters in a inch)
        	averageMonthRainfall = averageDailyRainfall * 30 / 25.4;
        	console.log("average monthly rainfall is " + averageMonthRainfall + "in");

        	// $('#min-temp').text(minTemp + "F");
        	// $('#max-temp').text(maxTemp + "F");
        	// $('#average-rainfall').text(averageMonthRainfall + "inches");

        });	
    }

});

  

});