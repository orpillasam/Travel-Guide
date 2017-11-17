//Autocomplete request/response expectations: https://stackoverflow.com/questions/5077409/what-does-autocomplete-request-server-response-look-like
//Requires  ajax/jquery UI and style



$(document).ready(function () {
	 $("#f_elem_city").autocomplete({
		source: function (request, response) {
		 $.getJSON(
		 	// "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
			"http://free.rome2rio.com/api/1.4/json/Autocomplete?key=7slkssQD&query="+request.term,
			function (data) {
			var placesArray = [];
			 for(let i = 0; i<data.places.length; i++){
			 	var valueObject = {
			 		"value": data.places[i].longName
			 	}
			 	placesArray.push(valueObject);
			 }
			 response(placesArray);
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


});



// $.getJSON(
//      "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=los",
//     // After the data comes back from the API
//     function(response) {
//       // Storing an array of results in the results variable
     	
//      	console.log(response);
 

//     });



