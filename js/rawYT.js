//Anonymous self invoking function=---like this!
(function() {
//load the IFrame Player Asynchronously
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
//creates the window for each marker, just applies a generic youtube video at the moment, need to get it working with Ajax to supply video.

        var ytRequestTimeout = setTimeout(function(){
        console.log("failed to get Youtube resources");
    }, 10000);
        google.maps.event.addListener(marker, "click", function(){
          var yt_url = 'https://www.googleapis.com/youtube/v3/search?part=id&q=' + marker.title + '+louisville&maxResults=1&callback=?&key=AIzaSyActmR_LWyXc0Y9CxHucYh-C73C09Om318';
          //make some room for youtube ajax call and supporting code here.
          $.getJSON(yt_url, function(response){
            console.log(response);
            var title = response.items[0].id.videoId;
              var contentString = '<iframe width="640" height="390" src="//www.youtube.com/embed/'+title+'" frameborder="0" allowfullscreen></iframe>';
              var infowindow = new google.maps.InfoWindow({
              content: contentString
              });

              //content: '<object width="225" height="175"><param name="movie" value="am name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/embed/e1XVzZ3zsXY" type="application/x-shockwave-flash" width="425" height="344" allowscriptaccess="always" allowfullscreen="true"></embed></object>'
              //content: '<iframe width="480" height="270" src="//www.youtube.com/embed/e1XVzZ3zsXY" frameborder="0" allowfullscreen></iframe>'

            //  })
            infowindow.open(map, marker);

          }

        )
    })
  }
    //console.log(markerArray()
  }();


};

ko.applyBindings(new viewModel());
})();

