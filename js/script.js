//Anonymous self invoking function=---like this!
(function() {

var model = {
  currentMarker: null,
  markers: [
    {
      title: "Ramsis on the World",
      lat: 38.235616,
      lng:  -85.715553
    },
    {
      title: "Molly Malone's",
      lat: 38.241760,
      lng: -85.725012
    },
    {
      title: "Oshea's",
      lat: 38.240664,
      lng: -85.724904
    },
    {
      title: "Wick's Pizza",
      lat: 38.240361,
      lng: -85.724346
    },
    {
      title: "Nowhere Bar",
      lat: 38.237917,
      lng:  -85.719583
    },
    {
      title: "Impellizari's",
      lat: 38.233569,
      lng: -85.711901
    },
    {
      title: "Boombozz Pizza",
      lat: 38.231883,
      lng: -85.710034
    },
    {
      title:  "Mark's Feed Store BBQ",
      lat: 38.231445,
      lng: -85.708532
    },
    {
      title:  "Seviche",
      lat: 38.231175,
      lng: -85.707545
    },
    {
      title:  "Za's Pizzeria",
      lat:  38.231209,
      lng:  -85.704734
    },
    {
      title:  "Sapporo",
      lat:  38.230130,
      lng:  -85.703318
    },
    {
      title:  "Asiatique",
      lat:  38.228816,
      lng:  -85.701859
    },
    {
      title:  "Bard's Town Tavern",
      lat:  38.228276,
      lng:  -85.700850
    },
    {
      title:  "Cumberland Brewery",
      lat:  38.230729,
      lng:  -85.705389
    },
    {
      title:  "Cafe Mimosa",
      lat:  38.231487,
      lng:  -85.706344
    },
    {
      title:  "Comfy Cow",
      lat:  38.232288,
      lng:  -85.709191
    },
    {
      title:  "Palermo",
      lat:  38.234069,
      lng:  -85.712695
    },
    {
      title:  "Bristol Bar",
      lat:  38.235241,
      lng:  -85.714041
    },
    {
      title:  "Heine Brothers Coffee",
      lat:  38.237297,
      lng:  -85.719467
    },
]
};

var viewModel = function() {
  var map, bounds, markerArray;

  var self = this;

  //Initialize map location, set as IIFE to kick off immediately
  var initMap = function() {
    //create map
    var mapOptions = {
         center: {
          //Center map at Cherokee Rd and Bardstown Rd
            lat: 38.234472,
            lng: -85.713895
        },
        zoom: 15,
        panControl: false,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    bounds = new google.maps.LatLngBounds();

    self.markerArray = ko.observableArray();

    //add markers
    var markerList = model.markers;
    for(var i = 0; i < markerList.length; i++) {
      var markPos = new google.maps.LatLng(
        markerList[i].lat,
        markerList[i].lng
      );
//this finally works, leave it alone!
      var marker = new google.maps.Marker({
        position: markPos,
        map: map,
        title: markerList[i].title,
        animation: google.maps.Animation.DROP
      });
//still need to work on infoWindow, put more content in
      var infowindow = new google.maps.InfoWindow({
        content: null
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.title)
        infowindow.open(map, this);
      });

      bounds.extend(markPos);
      map.fitBounds(bounds);
      map.setCenter(bounds.getCenter());

      self.markerArray.push(marker);
    }
    //console.log(markerArray()
  }();


};

ko.applyBindings(new viewModel());
})();










//Hold onto below for now, just now liking how it works, scant documentation makes it difficult to get it working, going to try Youtube again.


//ajax call for yourMapperApp2 from Mashape.com. a dynamic mapping aid app for louisville area
/*$.ajax({
    url: "https://yourmapper2.p.mashape.com/markers?c=1%2C2%2C3&center=1&compact=1&days=30&f=json&id=180&lat=38.234472&lon=-85.713895&num=5&radius=1&search=smith", // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method
    data: {}, // Additional parameters here
    datatype: 'json',
    success: function(data) { alert(JSON.stringify(data)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Key: C0uqW4lPTtmshIf6Z4RnCTLOzEp8p1QBG2RjsnUH0gWljPn96j"); // Enter here your Mashape key
    }
});
*/