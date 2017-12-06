//custom js for mapbox styles

//Displaying Mapbox map
function mapbox() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZnB3bCIsImEiOiJjamFib2swNnMwMjU0MndwZGwzdnhmZXBnIn0.0glfG4jZkFJwm0TJLuVriA';

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/fpwl/cjan5kfxmeaq02smsehvd41aa', // stylesheet location
        center: [174.8860, -40.9006], // starting position [lng, lat]
        zoom: 4.5 // starting zoom 
    });
}

// //Validating Question One and showing mapbox markers
// function showingTripMarkers() {

//     // document.getElementById('northIsland').addEventListener('click', northHalfMarkers, false);
//     // document.getElementById('southIsland').addEventListener('click', southHalfMarkers, false);
//     document.getElementById('fullTrip').addEventListener('click', fullTripMarkers, false);


//     //functions to add mapbox markers to map
//     function fullTripMarkers() {
//         // add markers to map
//         geojson.features.forEach(function (marker) {
//             // create a HTML element for each feature
//             var el = document.createElement('div');
//             el.className = 'marker';

//             // make a marker for each feature and add to the map
//             new mapboxgl.Marker(el)
//                 .setLngLat(marker.geometry.coordinates)
//                 .addTo(map);
//         });
//         // southIslandData.features.forEach(function (marker) {
//         //     // create a HTML element for each feature
//         //     var el = document.createElement('div');
//         //     el.className = 'marker';

//         //     // make a marker for each feature and add to the map
//         //     new mapboxgl.Marker(el)
//         //         .setLngLat(marker.geometry.coordinates)
//         //         .addTo(map);
//         // });
//     }
// }
