var name = 'BusTrak';

google.maps.event.addDomListener(window, 'load', initialize);

function hd($scope) {
$scope.hdn=name;
}

var map;
function initialize() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(7.1,79.9428)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

 
function drpmnu($scope){
$scope.places=['Nugegoda','Koswatta','Malabe'];

}

function testid($scope){
    $scope.placed=document.getElementById('To').value;
}


function txtbx(){
    var indd=document.getElementById('To').value;
  var outdd=document.getElementById('tbox');
    outdd.value=indd;
    }