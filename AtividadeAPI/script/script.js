var map;
function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-11.709680, -40.149950),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)
}