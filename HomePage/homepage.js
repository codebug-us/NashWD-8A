$(document).ready(function(){

	console.log("lets get to it");

//$("h1").fadeOut(2000);


	mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yZGNob3BlIiwiYSI6ImNqdnF1ZWM3ODA4eDM0M21hbGpzZDNoMW0ifQ._3G8shiq-OLZuTFakS58Jw';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v9',
		zoom: 1.5,
		center: [40, 50],
	});
	var geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		marker: {
			color: "orange",
			size: "small",
			symbol: "1",
		},
		mapboxgl: mapboxgl
	});
	document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

	var place = $.ajax({

		url: "https://api.airtable.com/v0/appGbyykGch5ePLkF/1trip_data?api_key=" + apiKey,
		method: "GET",

	});
	place.done(function(response){
		var arr = [];
		for (var i = 0; i < response.records.length; i++) {
			arr.push(response.records[i].fields);
		}
		 console.log("Slack response: ", arr);
		 markers(arr);
	});


	function markers(arr){	
		for (var i=0; i < arr.length; i++){
			var marker = new mapboxgl.Marker();
			if (arr[i].notes) {
				var popup = new mapboxgl.Popup().setHTML("<strong>"+ arr[i].name + "</strong>  <p>"+ arr[i].notes +"</p>");	
				marker.setPopup(popup);
			} else {
				var beginform = "<form id='message-form'>";
				var endform = "<input id='submit-button' type='submit' value='Submit'> </form>";
				var popup = new mapboxgl.Popup().setHTML(beginform + "<textarea class= 'input-name' rows='20' columns='40'></textarea><br>" + endform);
				marker.setPopup(popup);

			}
				
			marker.setLngLat([arr[i].longitude, arr[i].latitude]);
			marker.addTo(map);

		}
	 }

		$("body #map").on("submit", "#message-form", function(event){
			event.preventDefault();
			var inputs = $(".input-name").val();
			console.log(inputs);


		});





});