$(document).ready(function(){


	mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yZGNob3BlIiwiYSI6ImNqdnF1ZWM3ODA4eDM0M21hbGpzZDNoMW0ifQ._3G8shiq-OLZuTFakS58Jw';
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v9',
			zoom: 1.5,
			center: [40, 50],
		});
		map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
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

});

