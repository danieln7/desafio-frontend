// Configura o mapa do Google

function initMap() {

    // O endereço é Av. das Américas, 700
    const endereco = { lat: -23.001931942240006, lng: -43.32034152192107 };
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: endereco,
    });
    const marker = new google.maps.Marker({
        position: endereco,
        map: map,
    });
}