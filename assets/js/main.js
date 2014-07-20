function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(4.687239,-74.061666),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var image = 'assets/img/blue-pin.png';
    
    var marker = new google.maps.Marker({
    	map: map,
	    animation: google.maps.Animation.DROP,
	    position: map.getCenter(),
	    icon: image
	});
	
	var infowindow = new google.maps.InfoWindow();
	infowindow.setContent('Calle 99 No. 49 - 53 </br> La Castellana');
	google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map, marker);
	});

	// google.maps.event.addListener(marker, 'click', toggleBounce);
}

// function toggleBounce() {
//   if (marker.getAnimation() != null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDQ8118IKg7EZsrkyo3jwJHR10k_NmNwaI&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

// google.maps.event.addDomListener(window, 'load', initialize);

// window.onload = loadScript;

window.onload = function() {
	loadScript();
	// toggleBounce();
}