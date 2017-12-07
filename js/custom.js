//This is my custom js.

(function () {

    //Initial Invokations
    hidingPages()
    nextAndBackButtons()

    //A function wrapper to hide pages
    function hidingPages () {
        var landingPage = document.getElementById('landingPage');
        var mainAppContent = document.getElementById('mainAppContent')

        //show and hide pages event listeners
        document.getElementById('getStartedBtn').addEventListener('click', hideLandingPage, false);
        document.getElementById('logo').addEventListener('click', showLandingPage, false);
        document.getElementById('newSearch').addEventListener('click', showLandingPage, false);

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

     //Make customise route selection to not have same data in start and end location
    $('select').change(function () {
        var ary = new Array();
        $('select option:selected').each(function () {
            if ($(this).val().length > 0) {
                ary.push($(this).val());
            }
        });
        $('select option').each(function () {
            if ($.inArray($(this).val(), ary) > -1) {
                $(this).attr('disabled', 'disabled');
            } else {
                $(this).removeAttr('disabled');
            }
        });
    });

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

//____________________________________________________________________________________________________//

    //custom js for mapbox styles

    //Displaying Mapbox map
    function mapbox() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnB3bCIsImEiOiJjamFib2swNnMwMjU0MndwZGwzdnhmZXBnIn0.0glfG4jZkFJwm0TJLuVriA';

        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/fpwl/cjan5kfxmeaq02smsehvd41aa', // stylesheet location
            center: [174.8860, -40.9006], // starting position [lng, lat]
            zoom: 4.2 // starting zoom 
        });

        //Hide and show mapbox markers
        document.getElementById('northIsland').addEventListener('click', showNorthIslandMarkers, false);
        document.getElementById('southIsland').addEventListener('click', showSouthIslandMarkers, false);
        document.getElementById('fullTrip').addEventListener('click', showFullTripMarkers, false);
        document.getElementById('customise').addEventListener('click', customiseMarkers, false);

        function showNorthIslandMarkers () {
            northIslandData.features.forEach(function (marker) {
                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker northMark';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
            });

            // document.getElementsByClassName('southMark'[0]).style.displ;
            $('.southMark').hide();
        }

        function showSouthIslandMarkers () {
            southIslandData.features.forEach(function (marker) {
                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker southMark';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
            });

            $('.northMark').hide();
        }

        function showFullTripMarkers () {
            northIslandData.features.forEach(function (marker) {
                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker northMark';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
            });
            southIslandData.features.forEach(function (marker) {
                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker southMark';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
            });
        }

        function customiseMarkers () {
            $('.northMark').hide();
            $('.southMark').hide();
        }

        //Grabing customise select values
        $('#sel1').on('change', function () {
            var startLoactionValue = document.getElementById('sel1').value;

                //Individual markers for customise section
                if (startLoactionValue == 'kaitaia') {
                    var el = document.createElement('div');
                    el.className = 'marker kaitaiaMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[0].geometry.coordinates)
                        .addTo(map);

                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                    
                }
                if (startLoactionValue == 'auckland') {
                    var el = document.createElement('div');
                    el.className = 'marker aucklandMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[1].geometry.coordinates)
                        .addTo(map);
                    
                    $('.kaitaiaMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'waikato') {
                    var el = document.createElement('div');
                    el.className = 'marker waikatoMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[2].geometry.coordinates)
                        .addTo(map);

                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'wanganui') {
                    var el = document.createElement('div');
                    el.className = 'marker wanganuiMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[3].geometry.coordinates)
                        .addTo(map);

                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'wellington') {
                    var el = document.createElement('div');
                    el.className = 'marker wellingtonMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[4].geometry.coordinates)
                        .addTo(map);

                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'greymouth') {
                    var el = document.createElement('div');
                    el.className = 'marker greymouthMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[0].geometry.coordinates)
                        .addTo(map);
                    
                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'christchurch') {
                    var el = document.createElement('div');
                    el.className = 'marker christchurchMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[1].geometry.coordinates)
                        .addTo(map);

                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'queenstown') {
                    var el = document.createElement('div');
                    el.className = 'marker queenstownMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[2].geometry.coordinates)
                        .addTo(map);

                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'dunedin') {
                    var el = document.createElement('div');
                    el.className = 'marker dunedinMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[3].geometry.coordinates)
                        .addTo(map);
                    
                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.invercargillMark').hide();
                }
                if (startLoactionValue == 'invercargill') {
                    var el = document.createElement('div');
                    el.className = 'marker invercargillMark';

                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[4].geometry.coordinates)
                        .addTo(map);

                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                }
                if(startLoactionValue == '') {
                    $('.kaitaiaMark').hide();
                    $('.aucklandMark').hide();
                    $('.waikatoMark').hide();
                    $('.wanganuiMark').hide();
                    $('.wellingtonMark').hide();
                    $('.greymouthMark').hide();
                    $('.christchurchMark').hide();
                    $('.queenstownMark').hide();
                    $('.dunedinMark').hide();
                    $('.invercargillMark').hide();
                }
        })

        $('#sel2').on('change', function () {
            var endLoactionValue = document.getElementById('sel2').value;

            //Individual markers for customise section
            if (endLoactionValue == 'kaitaia') {
                var el = document.createElement('div');
                el.className = 'marker kaitaiaMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[0].geometry.coordinates)
                    .addTo(map);

                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();

            }
            if (endLoactionValue == 'auckland') {
                var el = document.createElement('div');
                el.className = 'marker aucklandMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[1].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'waikato') {
                var el = document.createElement('div');
                el.className = 'marker waikatoMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[2].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'wanganui') {
                var el = document.createElement('div');
                el.className = 'marker wanganuiMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[3].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'wellington') {
                var el = document.createElement('div');
                el.className = 'marker wellingtonMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[4].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'greymouth') {
                var el = document.createElement('div');
                el.className = 'marker greymouthMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[0].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'christchurch') {
                var el = document.createElement('div');
                el.className = 'marker christchurchMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[1].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'queenstown') {
                var el = document.createElement('div');
                el.className = 'marker queenstownMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[2].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'dunedin') {
                var el = document.createElement('div');
                el.className = 'marker dunedinMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[3].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
            if (endLoactionValue == 'invercargill') {
                var el = document.createElement('div');
                el.className = 'marker invercargillMarkEnd';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[4].geometry.coordinates)
                    .addTo(map);

                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
            }
            if (endLoactionValue == '') {
                $('.kaitaiaMarkEnd').hide();
                $('.aucklandMarkEnd').hide();
                $('.waikatoMarkEnd').hide();
                $('.wanganuiMarkEnd').hide();
                $('.wellingtonMarkEnd').hide();
                $('.greymouthMarkEnd').hide();
                $('.christchurchMarkEnd').hide();
                $('.queenstownMarkEnd').hide();
                $('.dunedinMarkEnd').hide();
                $('.invercargillMarkEnd').hide();
            }
        })
    }

//____________________________________________________________________________________________________//

    //Vehicle Option Modal Functions
    //Vehicle option variables
    var motorbike = document.getElementById('motorbike');
    var smallCar = document.getElementById('smallCar');
    var largeCar = document.getElementById('largeCar');
    var motorhome = document.getElementById('motorhome');
    var vehicleNameHeader = document.getElementById('vehicleInfoModalLabel');
    var vehicleImage = document.getElementById('vehicleImage');
    var travelLength = document.getElementById('numberOfDays');
    var dayQuantity = document.getElementById('dayQuantity');
    var amountOfSeats = document.getElementById('numberOfPeople');
    var seatQuantity = document.getElementById('seatQuantity');
    var travelDistancePrint = document.getElementById('travelDistance'); 

    motorbike.addEventListener('click', motorbikeInfoModal, false);
    smallCar.addEventListener('click', smallCarInfoModal, false);
    largeCar.addEventListener('click', largeCarInfoModal, false);
    motorhome.addEventListener('click', motorhomeInfoModal, false);

    function motorbikeInfoModal () {
        vehicleNameHeader.textContent = "TRIUMPH DAYTONA 650";
        vehicleImage.src = "img/vehicleImages/motorcycle.jpg";
        grabPreCalculatedDistance()
        travelLength.textContent = dayQuantity.value + ' days';
        amountOfSeats.textContent = seatQuantity.value + ' people';
    }

    function smallCarInfoModal () {
        vehicleNameHeader.textContent = "2008 SMART FORTWO";
        vehicleImage.src = "img/vehicleImages/smallCar.jpg";
        grabPreCalculatedDistance()
        travelLength.textContent = dayQuantity.value + ' days';
        amountOfSeats.textContent = seatQuantity.value + ' people';
    }

    function largeCarInfoModal() {
        vehicleNameHeader.textContent = "MINI COOPER S 3-DOOR HATCH";
        vehicleImage.src = "img/vehicleImages/largeCar.jpg";
        grabPreCalculatedDistance()
        travelLength.textContent = dayQuantity.value + ' days';
        amountOfSeats.textContent = seatQuantity.value + ' people';
    }

    function motorhomeInfoModal() {
        vehicleNameHeader.textContent = "VOLKSWAGEN CAMPER VAN";
        vehicleImage.src = "img/vehicleImages/motorhome.jpg";
        grabPreCalculatedDistance()
        travelLength.textContent = dayQuantity.value + ' days';
        amountOfSeats.textContent = seatQuantity.value + ' people';
    }

    var customiseButton = document.getElementById('customise');
    var northIsland = document.getElementById('northIsland');
    var southIsland = document.getElementById('southIsland');
    var fullTrip = document.getElementById('fullTrip');

    var fullTripDistance = 2500;
    var northIslandDistance = 978;
    var southIslandDistance = 1071;

    // console.dir(travelDistance.value);

    function grabPreCalculatedDistance () {
        if (fullTrip.checked) {
            var travelDistance = fullTripDistance;
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (northIsland.checked) {
            var travelDistance = northIslandDistance;
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (southIsland.checked) {
            var travelDistance = southIslandDistance;
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (customiseButton.checked) {
            var travelDistance = 'TBD';
            travelDistancePrint.textContent = travelDistance + ' km';
        }
    }
    

})();








