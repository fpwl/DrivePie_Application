//This is my custom js.

(function () {

    //Initial Invokations
    hidingPages()
    nextAndBackButtons()

    //A function wrapper to hide pages
    function hidingPages () {
        var getStartedBtn = document.getElementById('getStartedBtn');
        var logo = document.getElementById('logo');
        var landingPage = document.getElementById('landingPage');
        var mainAppContent = document.getElementById('mainAppContent')

        //show and hide pages event listeners
        getStartedBtn.addEventListener('click', hideLandingPage, false);
        logo.addEventListener('click', showLandingPage, false);

        //function that hides the loading page
        function hideLandingPage() {
            var questionOneWrapper = document.getElementById('questionOne')

            landingPage.style.display = 'none';
            mainAppContent.style.display = 'block';
            questionOneWrapper.style.display = 'block';

            //Invokations for functions
            mapbox()
            addMinusSeats()
            addMinusDays()
        }

        //function that shows the loading page
        function showLandingPage() {
            var questionOneWrapper = document.getElementById('questionOne')

            mainAppContent.style.display = 'none';
            landingPage.style.display = 'block';
            questionOneWrapper.style.display = 'none';

            window.location.reload();
        }
    }
    
    //A function to hold all Event listeners
    function nextAndBackButtons () {
        //Next question events listeners
        document.getElementById('submitQuestionOne').addEventListener('click', questionOneValidation, false);
        document.getElementById('submitQuestionOneCustomise').addEventListener('click', customiseQuestionValidation, false);
        document.getElementById('submitQuestionTwo').addEventListener('click', questionTwoValidation, false);
        document.getElementById('submitQuestionThree').addEventListener('click', questionThreeValidation, false);

        //Go back events listeners
        document.getElementById('customiseBackButton').addEventListener('click', goBackToQuestionOne, false);
        document.getElementById('questionTwoBackButton').addEventListener('click', goBackToQuestionOne, false);
        document.getElementById('questionThreeBackButton').addEventListener('click', goBackToQuestionTwo, false);
        document.getElementById('questionFourBackButton').addEventListener('click', goBackToQuestionThree, false);

        //Function to go back to Question one
        function goBackToQuestionOne() {
            document.getElementById('questionOne').style.display = 'block';
            document.getElementById('questionTwo').style.display = 'none';
            document.getElementById('questionOneCustomise').style.display = 'none';
        }

        //Function to go back to Question Two
        function goBackToQuestionTwo() {
            document.getElementById('questionTwo').style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
        }

        //Function to go back to Question Three
        function goBackToQuestionThree() {
            document.getElementById('questionThree').style.display = 'block';
            document.getElementById('questionFour').style.display = 'none';
        }
    }

    // Adding and Minus number of seats function
    function addMinusSeats() {
        var addSeat = document.getElementById('addSeat');
        var minusSeat = document.getElementById('minusSeat');
        var seatQuantity = document.getElementById('seatQuantity');
        var seatCount = 0;

        addSeat.addEventListener('click', addSeats, false);
        minusSeat.addEventListener('click', minusSeats, false);

        function addSeats () {
            if (seatCount >= 0 && seatCount <= 5){
                seatCount ++;
                seatQuantity.value = seatCount;
            }   
        }
        function minusSeats() {
            if (seatCount > 0 && seatCount <= 6){
                seatCount --;
                seatQuantity.value = seatCount;
            }
        }
    }

    //Adding and Minus number of days function
    function addMinusDays () {
        var addDay = document.getElementById('addDays');
        var minusDay = document.getElementById('minusDays');
        var dayQuantity = document.getElementById('dayQuantity');
        var dayCount = 0;

        var seatQuantity = document.getElementById('seatQuantity');

        addDay.addEventListener('click', addDays, false);
        minusDay.addEventListener('click', minusDays, false);

        function addDays() {
            if (dayCount >= 0 && dayCount <= 14) {
                dayCount++;
                dayQuantity.value = dayCount;
            }
        }
        function minusDays() {
            if (dayCount > 0 && dayCount <= 15) {
                dayCount--;
                dayQuantity.value = dayCount;
            }
        }
     }

//____________________________________________________________________________________________________//

    //Valiadtion JS for the valiadtion of the form questions

    //Validation for Question One
    function questionOneValidation() {
        //Type of trip option variables
        var customiseButton = document.getElementById('customise');
        var northIsland = document.getElementById('northIsland');
        var southIsland = document.getElementById('southIsland');
        var fullTrip = document.getElementById('fullTrip');

        if (customiseButton.checked) {
            document.getElementById('questionOne').style.display = 'none';
            document.getElementById('questionOneCustomise').style.display = 'block';
        }
        else if (fullTrip.checked || southIsland.checked || northIsland.checked) {
            document.getElementById('questionOne').style.display = 'none';
            document.getElementById('questionTwo').style.display = 'block';
        }
        else {
            console.log('choose something');
        }
    }

    //Validating Question One Customise
    function customiseQuestionValidation() {
        var startingPointSelect = document.getElementById('sel1');
        var endingPointSelect = document.getElementById('sel2');

        if (startingPointSelect.value && endingPointSelect.value) {
            document.getElementById('questionOneCustomise').style.display = 'none';
            document.getElementById('questionTwo').style.display = 'block';
        }
        else {
            console.log('choose something please');
        }
    }

    //Validating Question Two 
    function questionTwoValidation() {
        var seatQuantity = document.getElementById('seatQuantity');

        if (seatQuantity.value > 0) {
            document.getElementById('questionTwo').style.display = 'none';
            document.getElementById('questionThree').style.display = 'block';
        }
        else {
            console.log('add some seats');
        }
    }

    //Validating Question Three 
    //Taking seat and day quantity to determine what vehicles will be displayed in question four
    function questionThreeValidation() {
        var dayQuantity = document.getElementById('dayQuantity').value;
        var seatQuantity = document.getElementById('seatQuantity').value;

        //Vehicle option variables
        var motorbike = document.getElementById('motorbike');
        var smallCar = document.getElementById('smallCar');
        var largeCar = document.getElementById('largeCar');
        var motorhome = document.getElementById('motorhome');

        showLargeCar()
        showMotorbike()
        showMotorhome()
        showSmallCar()

        function showMotorbike() {
            if (seatQuantity == 1 && (dayQuantity > 0 && dayQuantity <= 5)) {
                motorbike.style.display = 'block';
                document.getElementById('questionThree').style.display = 'none';
                document.getElementById('questionFour').style.display = 'block';

                vehicleModalData()
            }
            else {
                motorbike.style.display = 'none';
                console.log('motorbike hidden')
            }
        }

        function showSmallCar() {
            if ((seatQuantity > 0 && seatQuantity <= 2) && (dayQuantity > 0 && dayQuantity <= 10)) {
                smallCar.style.display = 'block';
                document.getElementById('questionThree').style.display = 'none';
                document.getElementById('questionFour').style.display = 'block';
            }
            else {
                smallCar.style.display = 'none';
                console.log('Small Car hidden')
            }
        }

        function showLargeCar() {
            if ((seatQuantity > 0 && seatQuantity <= 5) && (dayQuantity >= 3 && dayQuantity <= 10)) {
                largeCar.style.display = 'block';
                document.getElementById('questionThree').style.display = 'none';
                document.getElementById('questionFour').style.display = 'block';
            }
            else {
                largeCar.style.display = 'none';
                console.log('Large Car hidden')
            }
        }

        function showMotorhome() {
            if ((seatQuantity >= 2 && seatQuantity <= 6) && (dayQuantity >= 2 && dayQuantity <= 15)) {
                motorhome.style.display = 'block';
                document.getElementById('questionThree').style.display = 'none';
                document.getElementById('questionFour').style.display = 'block';
            }
            else {
                motorhome.style.display = 'none';
                console.log('Motohome hidden')
            }
        }
    }

//_________________________________________________________________________________________________________//

    //Vehicle option modal data function
    function vehicleModalData () {
        var dayQuantity = document.getElementById('dayQuantity').value;
        var seatQuantity = document.getElementById('seatQuantity').value;

        var startingPointSelect = document.getElementById('sel1');
        var endingPointSelect = document.getElementById('sel2');

        var northIsland = document.getElementById('northIsland');
        var southIsland = document.getElementById('southIsland');
        var fullTrip = document.getElementById('fullTrip');

        var motorbike = document.getElementById('motorbike');
        var smallCar = document.getElementById('smallCar');
        var largeCar = document.getElementById('largeCar');
        var motorhome = document.getElementById('motorhome');

        motorbike.addEventListener('click', motorbikeModalData, false);

        // function motorbikeModalData () {
            
        // }
    }

//__________________________________________________________________________________________________________//

    //custom js for mapbox styles

    //Displaying Mapbox map
    function mapbox() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnB3bCIsImEiOiJjamFib2swNnMwMjU0MndwZGwzdnhmZXBnIn0.0glfG4jZkFJwm0TJLuVriA';

        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/fpwl/cjan5kfxmeaq02smsehvd41aa', // stylesheet location
            center: [174.8860, -40.9006], // starting position [lng, lat]
            zoom: 4 // starting zoom 
        });

        

        document.getElementById('northIsland').addEventListener('click', showMarkers, false);
        document.getElementById('southIsland').addEventListener('click', showMarkers, false);
        document.getElementById('fullTrip').addEventListener('click', showMarkers, false);



        function showMarkers () {
            if (document.getElementById('fullTrip').checked) {
                northIslandData.features.forEach(function (marker) {
                    // create a HTML element for each feature
                    var el = document.createElement('div');
                    el.className = 'marker';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates)
                        .addTo(map);
                });
                southIslandData.features.forEach(function (marker) {
                    // create a HTML element for each feature
                    var el = document.createElement('div');
                    el.className = 'marker';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates)
                        .addTo(map);
                });
            }
            else if (document.getElementById('northIsland').checked) {
                northIslandData.features.forEach(function (marker) {
                    // create a HTML element for each feature
                    var el = document.createElement('div');
                    el.className = 'marker';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates)
                        .addTo(map);
                });
            }
            else if (document.getElementById('southIsland').checked) {
                southIslandData.features.forEach(function (marker) {
                    // create a HTML element for each feature
                    var el = document.createElement('div');
                    el.className = 'marker';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates)
                        .addTo(map);
                });
            }
            else if (document.getElementById('customise').checked) {
                document.getElementById('nextArrowOne').style.color = '#ffdd12';
            }

        }
    }
        
        // document.getElementById('northIsland').addEventListener('click', northHalfMarkers, false);
        // document.getElementById('southIsland').addEventListener('click', southHalfMarkers, false);
        // document.getElementById('fullTrip').addEventListener('click', fullTripMarkers, false);

        //functions to add mapbox markers to map
    //     function fullTripMarkers() {
    //         // add markers to map
    //         northIslandData.features.forEach(function (marker) {
    //             // create a HTML element for each feature
    //             var el = document.createElement('div');
    //             el.className = 'marker';

    //             // make a marker for each feature and add to the map
    //             new mapboxgl.Marker(el)
    //                 .setLngLat(marker.geometry.coordinates)
    //                 .addTo(map);
    //         });
    //         southIslandData.features.forEach(function (marker) {
    //             // create a HTML element for each feature
    //             var el = document.createElement('div');
    //             el.className = 'marker';

    //             // make a marker for each feature and add to the map
    //             new mapboxgl.Marker(el)
    //                 .setLngLat(marker.geometry.coordinates)
    //                 .addTo(map);
    //         });
    //     }

    //     function northHalfMarkers() {
    //         // add markers to map
    //         northIslandData.features.forEach(function (marker) {
    //             // create a HTML element for each feature
    //             var el = document.createElement('div');
    //             el.className = 'marker';

    //             // make a marker for each feature and add to the map
    //             new mapboxgl.Marker(el)
    //                 .setLngLat(marker.geometry.coordinates)
    //                 .addTo(map);
    //         });
    //     }

    //     function southHalfMarkers() {
    //         // add markers to map
    //         southIslandData.features.forEach(function (marker) {
    //             // create a HTML element for each feature
    //             var el = document.createElement('div');
    //             el.className = 'marker';

    //             // make a marker for each feature and add to the map
    //             new mapboxgl.Marker(el)
    //                 .setLngLat(marker.geometry.coordinates)
    //                 .addTo(map);
    //         });
    //     }
    // }


})();








