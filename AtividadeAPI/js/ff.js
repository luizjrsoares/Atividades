window.onload = function(){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-11.708180,-40.148478),
            scrollwheel:false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.map.Map(document.getElementById('map'), mapProp)
    }
    initialize()
}