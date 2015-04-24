//second iteration
//Jason Smith
//Udacity Nanodegree Project 5
//TODO - apply Knockout bindings
//TODO - work with script-1.js
var infowindow, map, marker, center, locations;
var markers = [];

  // create locations objects in an array to be used in marker functions.
 locations = [{
      title: "Ramsis on the World",
      lat: 38.235616,
      lng:  -85.715553,
      description: "grub"
    },
    {
      title: "Molly Malone's",
      lat: 38.241760,
      lng: -85.725012,
      description: "pub"
    },
    {
      title: "Oshea's",
      lat: 38.240664,
      lng: -85.724904,
      description: "pub"
    },
    {
      title: "Wick's Pizza",
      lat: 38.240361,
      lng: -85.724346,
      description: "grub"
    },
    {
      title: "Nowhere Bar",
      lat: 38.237917,
      lng:  -85.719583,
      description: "pub"
    },
    {
      title: "Impellizari's",
      lat: 38.233569,
      lng: -85.711901,
      description: "grub"
    },
    {
      title: "Boombozz Pizza",
      lat: 38.231883,
      lng: -85.710034,
      description: "grub"
    },
    {
      title:  "Mark's Feed Store BBQ",
      lat: 38.231445,
      lng: -85.708532,
      description: "grub"
    },
    {
      title:  "Seviche",
      lat: 38.231175,
      lng: -85.707545,
      description: "grub"
    },
    {
      title:  "Cumberland Brewery",
      lat:  38.230729,
      lng:  -85.705389,
      description: "pub"
    },
    {
      title:  "Cafe Mimosa",
      lat:  38.231487,
      lng:  -85.706344,
      description: "grub"
    },
    {
      title:  "Palermo",
      lat:  38.234069,
      lng:  -85.712695,
      description: "grub"
    },
    {
      title:  "Bristol Bar",
      lat:  38.235241,
      lng:  -85.714041,
      description: "pub"
    },
    {
      title:  "Heine Brothers Coffee",
      lat:  38.237297,
      lng:  -85.719467,
      description: "grub"
    }];

 var initialize = function(){


 center = new google.maps.LatLng(38.235616,-85.715553);

 var mapOptions = {
      center: center,
      zoom: 16,
      mapTypeId: 'terrain',
      panControl: false,
      disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  infowindow = new google.maps.InfoWindow();
  var i;
  // create marker functions to place markers on map and set up the info window
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map,
            title: locations[i].name
        });



        google.maps.event.addListener(marker, 'click', (function(marker)  {
            return function() {

                // set info window with a title and open the info window
                infowindow.setContent(marker.title);
                infowindow.open(map, marker);

              // add marker animation by setting and timing out animation
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function(){ marker.setAnimation(null); }, 750);

            }
        })(marker));

        markers.push(marker);

  };



}

var ExplorerViewModel = function(){
  var self = this;

  // observe the global array of locations
  self.locations= ko.observableArray(locations);

  self.markers=ko.observableArray(markers);

  self.filter= ko.observable('');

  // Create function to open info windows in response to clicks on list-view.
  self.OpenInfoWindow= function(locations){

    var point= markers[locations.markerNum];

    // set info window with a title and open the info window
     infowindow.open(map, point);
     infowindow.setContent(point.title);

     // add marker animation by setting and timing out animation
     point.setAnimation(google.maps.Animation.BOUNCE);
     setTimeout(function(){ point.setAnimation(null); }, 750);

 }
 //Handles the showing and hiding of all markers depending on setMap() value
  self.showOrHideMarkers= function(state){
           for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(state);
          };
        }

// returns array to the filteredmarkers array definition
  self.filterArray = function(filter){
       return ko.utils.arrayFilter(self.locations(), function(location) {
        return location.name.toLowerCase().indexOf(filter) >= 0;


       });

  }
//displays selected markers
  self.displaySelected = function(filteredmarkers){
  for (var i = 0; i < filteredmarkers.length; i++) {
             markers[filteredmarkers[i].markerNum].setMap(map);
            }
      }


//Manages filtering of list view and markers
self.filterList = function(){
var filter = self.filter().toLowerCase();
  if (!filter) {
      self.showOrHideMarkers(map);
     return self.locations();
  } else {

  self.showOrHideMarkers(null);
  var filteredmarkers = [];
  filteredmarkers = self.filterArray(filter);
  self.displaySelected(filteredmarkers);
  return filteredmarkers;

  }
}


}




google.maps.event.addDomListener(window, 'load', ExplorerMap);

ko.applyBindings(new ExplorerViewModel());