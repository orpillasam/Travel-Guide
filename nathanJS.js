$(document).ready(function() {
	var destinations = [
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
				countryName: 'Brazil',
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
				countryName: 'Hungary',
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
				countryName: 'Switzerland',
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
			vietnam = {
				countryName: 'Vietnam',
				cities: ['hanoi', 'ho chi minh city', 'de nang'],
				countryCode: 'VNM',
				currencyCode: 'VND',
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


for(let i =0; i<destinations.length; i++){ //Loads the options into drop down box.
		var $option = $('<option>');
		$option.text(destinations[i].countryName);
		$('#country-input').append($option);
	}


/*Adding submit functionality for rome2rio API*/


});