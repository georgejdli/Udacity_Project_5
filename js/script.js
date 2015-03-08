function initialize() {
//Create the map object on the screen
    var mapOptions = {
        center: {
        	//Center map at Cherokee Rd and Bardstown Rd
            lat: 38.234472,
            lng: -85.713895
        },
        zoom: 14,
        panControl: false
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    //Array of locations for Markers
    var locations = [];
    locations.push({
        name: "Ramsis on the World",
        LatLng: new google.maps.LatLng(38.235616, -85.715553)
    });
    locations.push({
        name: "Havana Rumba",
        LatLng: new google.maps.LatLng(38.224154, -85.693458)
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
        name: "Holy Grale Pub",
        LatLng: new google.maps.LatLng(38.289195, -85.723467)
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
        name: "Za'/s Pizzeria",
        LatLng: new google.maps.LatLng(38.231209, -85.704734)
    });
    locations.push({
        name: "Sapporo",
        LatLng: new google.maps.LatLng(38.230130, -85.703318)
    });
    locations.push({
        name: "Asiatique",
        LatLng: new google.maps.LatLng(38.228816, -85.701859)
    });
    locations.push({
        name: "Bard/'s Town Tavern",
        LatLng: new google.maps.LatLng(38.228276, -85.700850)
    });
    locations.push({
        name: "Safai Coffee",
        LatLng: new google.maps.LatLng(38.230038, -85.703500)
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
        name: "Comfy Cow",
        LatLng: new google.maps.LatLng(38.232288, -85.709191)
    });
    locations.push({
        name: "Murphy'/s Cameras",
        LatLng: new google.maps.LatLng(38.232220, -85.710345)
    });
    locations.push({
        name: "Palermo",
        LatLng: new google.maps.LatLng(38.234069, -85.712695)
    });
    locations.push({
        name: "El Camino",
        LatLng: new google.maps.LatLng(38.237752, -85.714690)
    });
    locations.push({
        name: "Bristol Bar",
        LatLng: new google.maps.LatLng(38.235241, -85.714041)
    });
    locations.push({
        name: "Kashmir Indian Food",
        LatLng: new google.maps.LatLng(38.236050, -85.716085)
    });
    locations.push({
        name: "Heart and Soul",
        LatLng: new google.maps.LatLng(38.236488, -85.717952)
    });
    locations.push({
        name: "LaBamba",
        LatLng: new google.maps.LatLng(38.236850, -85.717297)
    });
    locations.push({
        name: "Chop Shop Barber",
        LatLng: new google.maps.LatLng(38.237002, -85.717609)
    });
    locations.push({
        name: "Heine Bros Coffee",
        LatLng: new google.maps.LatLng(38.237297, -85.719467)
    });
    locations.push({
        name: "Ditto/'s",
        LatLng: new google.maps.LatLng(38.237912, -85.820688)
    });
    locations.push({
        name: "Homemade Pie Kitchen",
        LatLng: new google.maps.LatLng(38.239766, -85.722319)
    });
    locations.push({
        name: "Jack Frye/'s",
        LatLng: new google.maps.LatLng(38.240078, -85.724040)
    });
    locations.push({
        name: "Wasabiya Sushi",
        LatLng: new google.maps.LatLng(38.240444, -85.724040)
    });
    //For Loop creates and places markers when 'load' occurs
    for (i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: locations[i].LatLng,
            map: map,
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
/*window.onload = initialize();*/
