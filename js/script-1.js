// JavaScript Document
var locationData =
[
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
];

var markersArray = ko.observableArray([]);
locationData.forEach(populateMarkersArray);

function populateMarkersArray(element) { //, index, array
    markersArray.push(element);
}
var highlands = new google.maps.LatLng(38-235616,-85.715553);
// Set up a google map
var mapOptions = {
        center: highlands,
        zoom: 16,
        mapTypeId: 'terrain',
        panControl: false,
        disableDefaultUI: true
};

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

function initialize() {
    locationData.forEach(loadMarkers);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    google.maps.event.addListener(function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

  // If the place has a geometry, then present it on a map.

        marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);



 infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow0.open(map, marker0);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);

function loadMarkers(element) { //, index, array
    var myLatlng = new google.maps.LatLng(element.lat,element.long);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: element.name
    });
    loadInfoWindow(element, marker);
}

function loadInfoWindow(element, marker) {
    var contentString = '<div class="strong"><a href="' + element.url + '" target="_blank">' + element.name + '</a></div><div>' + element.add1 + '</div><div>' + element.add2 + '</div><div>'+ element.phone + '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        toggleBounce(marker);
    });
}

 function toggleBounce(marker) {
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


function viewModel() {


  }
  ko.applyBindings(new viewModel());