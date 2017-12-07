//North Island Coordinates
var northIslandData = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [173.2676, -35.1173]
        },
        properties: {
        title: 'Mapbox',
        description: 'Kaitaia, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [174.7633, -36.8485]
        },
        properties: {
        title: 'Mapbox',
        description: 'Auckland, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [175.1894, -37.4558]
        },
        properties: {
            title: 'Mapbox',
            description: 'Waikato, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [175.0479, -39.9301]
        },
        properties: {
            title: 'Mapbox',
            description: 'Whanganui, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [174.780354, -41.278077]
        },
        properties: {
            title: 'Mapbox',
            description: 'Wellington, New Zealand'
        }
    }]
};

//South Island Coordinates
var southIslandData = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [171.2108, -42.4504]
        },
        properties: {
            title: 'Mapbox',
            description: 'Greymouth, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [172.6362, -43.5321]
        },
        properties: {
            title: 'Mapbox',
            description: 'Christchurch, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [168.6626, -45.0312]
        },
        properties: {
            title: 'Mapbox',
            description: 'Queenstown, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [170.5028, -45.8788]
        },
        properties: {
            title: 'Mapbox',
            description: 'Dunedin, New Zealand'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [168.3538, -46.4132]
        },
        properties: {
            title: 'Mapbox',
            description: 'Invercargill, New Zealand'
        }
    }]
};

var routePossibilities = [
    {
        id: 0,
        route: "Kaitaia and Auckland",
        distance: 311
    },
    {
        id: 1,
        route: "Kaitaia and Waikato",
        distance: 483
    },
    {
        id: 2,
        route: "Kaitaia and Whanganui",
        distance: 754
    },
    {
        id: 3,
        route: "Kaitaia and Wellington",
        distance: 952
    },
    {
        id: 4,
        route: "Kaitaia and Greymouth",
        distance: 1398
    },
    {
        id: 5,
        route: "Kaitaia and Christchurch",
        distance: 1527
    },
    {
        id: 6,
        route: "Kaitaia and Queenstown",
        distance: 1920
    },
    {
        id: 7,
        route: "Kaitaia and Dunedin",
        distance: 1881
    },
    {
        id: 8,
        route: "Kaitaia and Invercargill",
        distance: 2085
    },
    {
        id: 9,
        route: "Auckland and Waikato",
        distance: 174
    },
    {
        id: 10,
        route: "Auckland and Whanganui",
        distance: 445
    },
    {
        id: 11,
        route: "Auckland and Wellington",
        distance: 643
    },
    {
        id: 12,
        route: "Auckland and Greymouth",
        distance: 1088
    },
    {
        id: 13,
        route: "Auckland and Christchurch",
        distance: 1218
    },
    {
        id: 14,
        route: "Auckland and Queenstown",
        distance: 1611
    },
    {
        id: 15,
        route: "Auckland and Dunedin",
        distance: 1572
    },
    {
        id: 14,
        route: "Auckland and Invercargill",
        distance: 1776
    },
    {
        id: 14,
        route: "Waikato and Whanganui",
        distance: 300
    },
    {
        id: 15,
        route: "Waikato and Wellington",
        distance: 476
    },
    {
        id: 16,
        route: "Waikato and Greymouth",
        distance: 921
    },
    {
        id: 17,
        route: "Waikato and Christchurch",
        distance: 1050
    },
    {
        id: 18,
        route: "Waikato and Queenstown",
        distance: 1444
    },
    {
        id: 19,
        route: "Waikato and Dunedin",
        distance: 1404
    },
    {
        id: 20,
        route: "Waikato and Invercargill",
        distance: 1609
    },
    {
        id: 21,
        route: "Whanganui and Wellington",
        distance: 194
    },
    {
        id: 22,
        route: "Whanganui and Greymouth",
        distance: 639
    },
    {
        id: 23,
        route: "Whanganui and Christchurch",
        distance: 768
    },
    {
        id: 24,
        route: "Whanganui and Queenstown",
        distance: 1162
    },
    {
        id: 25,
        route: "Whanganui and Dunedin",
        distance: 1122
    },
    {
        id: 26,
        route: "Whanganui and Invercargill",
        distance: 1327
    },
    {
        id: 27,
        route: "Wellington and Greymouth",
        distance: 451
    },
    {
        id: 28,
        route: "Wellington and Christchurch",
        distance: 580
    },
    {
        id: 29,
        route: "Wellington and Queenstown",
        distance: 974
    },
    {
        id: 30,
        route: "Wellington and Dunedin",
        distance: 934
    },
    {
        id: 31,
        route: "Wellington and Invercargill",
        distance: 1139
    },
    {
        id: 32,
        route: "Greymouth and Christchurch",
        distance: 244
    },
    {
        id: 33,
        route: "Greymouth and Queenstown",
        distance: 523
    },
    {
        id: 34,
        route: "Greymouth and Dunedin",
        distance: 545
    },
    {
        id: 35,
        route: "Greymouth and Invercargill",
        distance: 697
    },
    {
        id: 36,
        route: "Christchurch and Queenstown",
        distance: 484
    },
    {
        id: 37,
        route: "Christchurch and Dunedin",
        distance: 361
    },
    {
        id: 38,
        route: "Christchurch and Invercargill",
        distance: 566
    },
    {
        id: 39,
        route: "Queenstown and Dunedin",
        distance: 278
    },
    {
        id: 40,
        route: "Queenstown and Invercargill",
        distance: 187
    },
    {
        id: 41,
        route: "Dunedin and Invercargill",
        distance: 205
    },

];


