
$(document).ready(function () {
	/*---------------------------Step 1 ------------------------------------
	-	API functionality for populating the search box
		- Autocomplete request/response expectations: https://stackoverflow.com/questions/5077409/what-does-autocomplete-request-server-response-look-like
		- Requires ajax/jquery UI and style
	------------------------------------------------------------------------*/

	 $("#f_elem_city").autocomplete({
		source: function (request, response) {
		 $.getJSON(
		 	"http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
			// "http://free.rome2rio.com/api/1.4/json/Autocomplete?key=7slkssQD&query="+request.term,
			function (data) {
			// var placesArray = [];
			 // for(let i = 0; i<data.places.length; i++){
			 // 	var valueObject = {
			 // 		"value": data.places[i].longName
			 // 	}
			 // 	placesArray.push(valueObject);
			 // }
			 response(data);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
		 var selectedObj = ui.item;
		 console.log(selectedObj);
		 $("#f_elem_city").val(selectedObj.value);
	
		 return false;
		},
		open: function () {
		 $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
		 $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	 });
	 $("#f_elem_city").autocomplete("option", "delay", 100);

	 /*---------------------------Step 2 ------------------------------------
	-	Take the values in the box and use the API to get our info.
		- Required Info to search for in the api:
			1. COUNTRY (in caps)	(Get through string manipulation)
			2. CITY    (in caps)	(Get through string manipulation)
			3. Currency (Three letter initial) (May need to search through the API or use a direct object)
			4. The selected month	(Get through user input)
	------------------------------------------------------------------------*/
	 
	 function findCurrency(country){
	 	var queryURL = "http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=" + country;
	 	// var queryURL = "http://free.rome2rio.com/api/1.4/json/Search?key=7slkssQD&oName=" + country + "&dName=" + country;
	 	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          console.log(response.currencyCode);
          

        });
	 }

	 $("#nc-submit-city").on('click',function(event){
	 	event.preventDefault();

	 	var country, city, currency, selectedMonth;

	 	if($('#f_elem_city').val() != ""){
	 		var tempArray = $('#f_elem_city').val().trim().split(", ");
	 		if(tempArray.length > 1){
	 			city = tempArray[0];
	 			country = tempArray[2];
	 			currency = findCurrency(country);
	 		}

	 	}
	 	$('#f_elem_city').val("");


	 });
});



// $.getJSON(
//      "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=los",
//     // After the data comes back from the API
//     function(response) {
//       // Storing an array of results in the results variable
     	
//      	console.log(response);
 

//     });



