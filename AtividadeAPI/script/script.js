var map;
function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-11.713870, -40.145932),
        zoom: 8,
        mapTypeId: 'roadmap' // roadmap, satellite, hybrid, terrain
        };

    map = new google.maps.Map(document.getElementById('map'), mapOptions)
    

    const image = {
        url: "img/house.png",
        scaledSize: new google.maps.Size(30, 30),
      };
    const image2 = {
        url: "img/fut.png",
        scaledSize: new google.maps.Size(30, 30),
      };

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-11.709680, -40.149948),
        map: map,
        title: 'Minha casa',
        icon: image,
        animation: google.maps.Animation.BOUNCE
    });

    $.getJSON('./script/pins.json', function(response) { 
            var dados = response;
        
        $.each(dados, function(chave, valor) {
            const point = new google.maps.LatLng(valor.x, valor.y)
            var marker = new google.maps.Marker({
                position: point,
                title: valor.title,
                map: map,
                icon: image2,
                animation: google.maps.Animation.BOUNCE
            });

        });

    });
    
}


