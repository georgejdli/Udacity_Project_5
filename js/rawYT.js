//set the map parameters
var center = new google.maps.LatLng(38.235616,-85.715553);
//The degree to which the map is zoomed in. This can range from 0 (least zoomed) to 21 and above (most zoomed).
var zoom = 16;
var zoomMax = 18;
var zoomMin = 12;

//These options configure the setup of the map.
var mapOptions = {
    center: center,
    zoom: zoom,
    maxZoom:zoomMax,
    minZoom:zoomMin,
    mapTypeId: 'terrain',
    panControl: false,
    mapTypeControl: false
};

var map;

//use the infobox library to inject the youtube JSON into the click event//set style for infobox
var infoWindowBox = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";

//loads up the map on the page using above options and below function when the DOM loads
google.maps.event.addDomListener(window, 'load', initializeMap);

//function called by above to create the map
function initializeMap () {

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

}

function createMarkers () {
      //add markers
    var markerList = model.markers;
    for(var i = 0; i < markerList.length; i++) {
      var markPos = new google.maps.LatLng(
        markerList[i].lat,
        markerList[i].lng
      },
      //this finally works, leave it alone!
      var marker = new google.maps.Marker({
        position: markPos,
        map: map,
        icon: 'images/marker.png',
        title: markerList[i].title,
        animation: google.maps.Animation.DROP
      });
}
//create the inforaation for the infobox
var ytInfoWindow = document.createElement('div');
ytInfoWindow.style.cssText = infoWindowBox;
ytInfoWindow.innerHTML = getMovie();



function getMovie() {
  var ytString = document.addEventListener(marker, 'click', function() {
  var self = this;
   var yt_url = 'https://www.googleapis.com/youtube/v3/search?part=id&q=' + self.title + '+louisville&maxResults=1&callback=?&key=AIzaSyActmR_LWyXc0Y9CxHucYh-C73C09Om318';
  $.getJSON(yt_url, function(json){
      console.log(json);
      var title = json.items[0].id.videoId;
      var contentString = '<div id="player">' + '<iframe width="320" height="200" src="https://www.youtube.com/embed/'+title+'" frameborder="0" allowfullscreen></iframe>' + '</div>';
      });
}
}
























//hard data list of markers, put at bottom to keep out of sight for coding preference
var model = {
            currentMarker: null,
  markers: [
    {
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
    }
]
};