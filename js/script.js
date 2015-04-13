function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map-canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}


//Anonymous self invoking function=---like this!
(function() {

//let's try a function to begin our observable listview
function locationList(name, type) {
  var self=this;
  self.name=marker.title;
  self.type=marker.description;
}






var $body = $('body');
var $player = $('#player');
var $choice = $('#choice');

var choice = $choice.val();

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

var viewModel = function() {
  var map, bounds, markerArray;

  var self = this;

  //Initialize map location, set as IIFE to kick off immediately
  var initMap = function() {
    //create map
    var mapOptions = {
        center: new google.maps.LatLng(38.235616,-85.715553),
        zoom: 16,
        mapTypeId: 'terrain',
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
        icon: 'images/marker.png',
        title: markerList[i].title,
        animation: google.maps.Animation.DROP
      });
//still need to work on infoWindow, put more content in
//creates the window for each marker, just applies a generic youtube video at the moment, need to get it working with Ajax to supply video.

        var ytRequestTimeout = setTimeout(function(){
        console.log("failed to get Youtube resources");
    }, 10000);
        google.maps.event.addListener(marker, "click", function(){
          var yt_url = 'https://www.googleapis.com/youtube/v3/search?part=id&q=' + this.title + '+louisville&maxResults=1&callback=?&key=AIzaSyActmR_LWyXc0Y9CxHucYh-C73C09Om318';
          //make some room for youtube ajax call and supporting code here.
          $.getJSON(yt_url, function(response){
            console.log(response);
            var title = response.items[0].id.videoId;
            //var playerUrl = 'src="https://www.youtube.com/embed/' + title + '"';
            //$player.append(playerUrl);
            var contentString = '<div id="player">' + '<iframe width="320" height="200" src="https://www.youtube.com/embed/'+title+'" frameborder="0" allowfullscreen></iframe>' + '</div>';
            var ytWindow = new google.maps.InfoWindow({
              content: contentString
              })
            ytWindow.open(marker.get('map'), marker);

          }

        );
    });
  }
    //console.log(markerArray()
  }();


};

ko.applyBindings(new viewModel());
})();