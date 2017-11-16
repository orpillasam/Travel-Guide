$(function () 
 {
	 $("#f_elem_city").autocomplete({
		source: function (request, response) {
		 $.getJSON(
			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
			function (data) {
			 response(data);
			 console.log(data);
			 console.log(request);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
		 var selectedObj = ui.item;
		 $("#f_elem_city").val(selectedObj.value);
		getcitydetails(selectedObj.value);
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

$.getJSON(
     "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=los",
    // After the data comes back from the API
    function(response) {
      // Storing an array of results in the results variable
     	
     	console.log(response);
 

    });



