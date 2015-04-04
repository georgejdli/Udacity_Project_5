//This was the first iteration of the map js, but after reviewing the forums I found a cleaner code that made the callbacks a lot easier to
//work with:  Referred mostly to :  http://discussions.udacity.com/t/p5-marker-list-not-displaying/3015 also had help from George Li
    var locations = [];
    locations.push({
        name: "Ramsis on the World",
        LatLng: new google.maps.LatLng(38.235616, -85.715553),
        description: "V4qP_cT_ts4"
    });
    locations.push({
        name: "Molly Malone/'s",
        LatLng: new google.maps.LatLng(38.241760, -85.725012)
    });
    locations.push({
        name: "Oshea/'s",
        LatLng: new google.maps.LatLng(38.240664, -85.724904)
    });
    locations.push({
        name: "Pheonix Hill",
        LatLng: new google.maps.LatLng(38.244473, -85.728123)
    });
    locations.push({
        name: "Wick/'s Pizza",
        LatLng: new google.maps.LatLng(38.240361, -85.724346)
    });

    locations.push({
        name: "Nowhere Bar",
        LatLng: new google.maps.LatLng(38.237917, -85.719583)
    });
    locations.push({
        name: "Impellizari/'s",
        LatLng: new google.maps.LatLng(38.233569, -85.711901)
    });
    locations.push({
        name: "Boombozz Pizza",
        LatLng: new google.maps.LatLng(38.231883, -85.710034)
    });
    locations.push({
        name: "Mark/'s Feed Store BBQ",
        LatLng: new google.maps.LatLng(38.231445, -85.708532)
    });
    locations.push({
        name: "Seviche",
        LatLng: new google.maps.LatLng(38.231175, -85.707545)
    });
    locations.push({
        name: "Cumberland Brewery",
        LatLng: new google.maps.LatLng(38.230729, -85.705389)
    });
    locations.push({
        name: "Cafe Mimosa",
        LatLng: new google.maps.LatLng(38.231487, -85.706944)
    });
    locations.push({
        name: "Palermo",
        LatLng: new google.maps.LatLng(38.234069, -85.712695)
    });
    locations.push({
        name: "Bristol Bar",
        LatLng: new google.maps.LatLng(38.235241, -85.714041)
    });
    locations.push({
        name: "Heine Bros Coffee",
        LatLng: new google.maps.LatLng(38.237297, -85.719467)
    });
   function initialize() {
//Create the map object on the screen
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
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    //Array of locations for Markers

    //For Loop creates and places markers when 'load' occurs
    for (i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: locations[i].LatLng,
            map: map,
            //animtation buggy with for loop, not really necessary anyway
            //draggable: false,
            //animation: google.maps.animation.DROP,
            title: locations[i].name
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "Placeholder for API"
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

var viewModel = {
    locations: ko.observableArray(locations)
};
ko.applyBindings(viewModel);
/*window.onload = initialize();*/
 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: '',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }




























//example to work from
var viewModel = function() {
  var map, bounds, markerArray;

  var self = this;  // ADD THIS LINE, then always use self.markerArray

  //Initialize map location, set as IIFE to kick off immediately
  var initMap = function() {
    //create map
    var mapOptions = {
      disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    bounds = new google.maps.LatLngBounds();

    self.markerArray = ko.observableArray();

    //add markers
    var markerList = model.markers;
    for(var x = 0; x < markerList.length; x++) {
      var markPos = new google.maps.LatLng(
        markerList[x].lat,
        markerList[x].lng
      );

      var marker = new google.maps.Marker({
        position: markPos,
        map: map,
        title: markerList[x].title,
        animation: google.maps.Animation.DROP
      });

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
    console.log(self.markerArray());
  }();


};

ko.applyBindings(new viewModel());