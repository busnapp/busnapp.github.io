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
    navigator.geolocation.watchPosition(function(position) {
        
//we created an anony function to set map    
        
/*a position is returned if successful which goes into this anonymous function and so we say that this is = pos in terms of lattitude and longitude... hence the google.map.latlng */        
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

        
        //this will create the icon folks
        var imgdude={
     url: "licn.png", 
     scaledSize: new google.maps.Size(80,80), // size
    
 };
        //this will put it on the map man
      var mrkme = new google.maps.Marker({
        map: map,
        position: pos,
        icon: imgdude
      });
    
        
      map.setCenter(pos);
        
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
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







