var name = 'BusTrak';

google.maps.event.addDomListener(window, 'load', initialize);

function hd($scope) {
$scope.hdn=name;
}

var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(7.1,79.9428)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
      if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You are here!'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    
  }
   
    
}



function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(7.9,79.9428),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

 
function drpmnu($scope){
$scope.places=['Nugegoda','Koswatta','Malabe','Nawala',
'Rajagiriya','Battaramulla'];

}







