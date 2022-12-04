var map;
function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-11.709680, -40.149948),
        zoom: 8,
        mapTypeId: 'roadmap' // roadmap, satellite, hybrid, terrain
        };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)
    

    const image = {
        url: "img/house.png",
        scaledSize: new google.maps.Size(30, 30),
      };

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-11.709680, -40.149948),
        map: map,
        title: 'Minha casa',
        icon: image,
        animation: google.maps.Animation.DROP
    });

    $.getJSON('./script/pins.json', function(data) { 
        $.each(data.pins, function(chave, valor) {
            const point = new google.maps.LatLng(valor.coordenadas.x, valor.coordenadas.y)

            var marker = new google.maps.Marker({
                position: point,
                title: valor.title,
                map: map,
                icon: image
            });

        });

    });
    
}

