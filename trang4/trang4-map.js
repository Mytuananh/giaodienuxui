function initMap() {
    var map = new google.maps.Map(document.getElementById('map-link'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
});
}

    var showMapBtn = document.getElementById('maps-link');
    showMapBtn.addEventListener('click', function() {
    initMap();
});

