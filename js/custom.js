//This is my custom js.

(function () {
    changeNextArrowColor()

    //show and hide pages event listeners
    document.getElementById('getStartedBtn').addEventListener('click', hideLandingPage, false);
    document.getElementById('logo').addEventListener('click', showLandingPage, false);
    document.getElementById('newSearch').addEventListener('click', showLandingPage, false);

    //These are variables for the Landing page and App content page.
    var landingPage = document.getElementById('landingPage');
    var mainAppContent = document.getElementById('mainAppContent')

    //function that hides the loading page
    function hideLandingPage() {
        landingPage.style.display = 'none';
        mainAppContent.style.display = 'block';
        questionOne.style.display = 'block';
        //Invokations for functions
        mapbox()
        addMinusSeats()
        addMinusDays()
    }
    //function that shows the loading page
    function showLandingPage() {
        mainAppContent.style.display = 'none';
        landingPage.style.display = 'block';
        questionOne.style.display = 'none';
        //Refresh page, which cancels all input data
        window.location.reload();
    }

    //Form question wrappers variables
    var questionOne = document.getElementById('questionOne');
    var questionOneCustomise = document.getElementById('questionOneCustomise');
    var questionTwo = document.getElementById('questionTwo');
    var questionThree = document.getElementById('questionThree');
    var questionFour = document.getElementById('questionFour');

    //Variable for back button
    var customiseBackButton = document.getElementById('customiseBackButton')
    var questionTwoBackButton = document.getElementById('questionTwoBackButton')
    var questionThreeBackButton = document.getElementById('questionThreeBackButton')
    var questionFourBackButton = document.getElementById('questionFourBackButton')

    //Back button event listeners
    customiseBackButton.addEventListener('click', function () {
        goBackButton(questionOne, questionOneCustomise)
    }, false);
    questionTwoBackButton.addEventListener('click', function () {
        goBackButton(questionOne, questionTwo)
    }, false);
    questionThreeBackButton.addEventListener('click', function () {
        goBackButton(questionTwo, questionThree)
    }, false);
    questionFourBackButton.addEventListener('click', function () {
        goBackButton(questionThree, questionFour)
    }, false);

    //Go back button function
    function goBackButton (showQuestion, hideQuestion) {
        showQuestion.style.display = 'block';
        hideQuestion.style.display = 'none';
    }

    // Adding and Minus number of seats function
    function addMinusSeats() {
        var addSeat = document.getElementById('addSeat');
        var minusSeat = document.getElementById('minusSeat');
        // var seatQuantity = document.getElementById('seatQuantity');
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
        // var dayQuantity = document.getElementById('dayQuantity');
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

    function changeNextArrowColor () {

        //Question One: When a Trip a been checked change arrow colour to yellow
        $('#customise').on('change', function () {
            // $("#nextArrowOne").css("color", "#ffdd12");
            nextArrowOne.style.colour = "#ffdd12";
        })
        $('#northIsland').on('change', function () {
            // $("#nextArrowOne").css("color", "#ffdd12");
            nextArrowOne.style.colour = "#ffdd12";
        })
        $('#southIsland').on('change', function () {
            // $("#nextArrowOne").css("color", "#ffdd12");
            nextArrowOne.style.colour = "#ffdd12";
        })
        $('#fullTrip').on('change', function () {
            // $("#nextArrowOne").css("color", "#ffdd12");
            nextArrowOne.style.colour = "#ffdd12";
        })

        //Question Two: When seatQuantity has value change arrow colour to yellow
        if (dayQuantity.value >= 1){
            // $("#nextArrowOne").css("color", "#ffdd12");
            nextArrowTwo.style.colour = "#ffdd12";
        }


    }

//____________________________________________________________________________________________________//

    // Next arrow variables
    var nextArrowOne = document.getElementById('submitQuestionOne')
    var nextArrowOneCustomise = document.getElementById('submitQuestionOneCustomise')
    var nextArrowTwo = document.getElementById('submitQuestionTwo')
    var nextArrowThree = document.getElementById('submitQuestionThree')
    // Next question events listeners
    nextArrowOne.addEventListener('click', questionOneValidation, false);
    nextArrowOneCustomise.addEventListener('click', customiseQuestionValidation, false);
    nextArrowTwo.addEventListener('click', questionTwoValidation, false);
    nextArrowThree.addEventListener('click', questionThreeValidation, false);

    //Trip options variables
    var customiseButton = document.getElementById('customise');
    var northIsland = document.getElementById('northIsland');
    var southIsland = document.getElementById('southIsland');
    var fullTrip = document.getElementById('fullTrip');
    //Vehicle option variables
    var motorbike = document.getElementById('motorbike');
    var smallCar = document.getElementById('smallCar');
    var largeCar = document.getElementById('largeCar');
    var motorhome = document.getElementById('motorhome');
    //Customise question selects variables
    var startingPointSelect = document.getElementById('sel1');
    var endingPointSelect = document.getElementById('sel2');
    //Seat and day Quantity variables
    var seatQuantity = document.getElementById('seatQuantity');
    var dayQuantity = document.getElementById('dayQuantity');

    //Valiadtion JS for the valiadtion of the form questions

    //Validation for Question One
    function questionOneValidation() {
        if (customiseButton.checked) {
            questionOne.style.display = 'none';
            questionOneCustomise.style.display = 'block';

        }
        else if (fullTrip.checked || southIsland.checked || northIsland.checked) {
            questionOne.style.display = 'none';
            questionTwo.style.display = 'block';
        }     
    }

    //Validating Question One Customise
    function customiseQuestionValidation() {
        if (startingPointSelect.value && endingPointSelect.value) {
            questionOneCustomise.style.display = 'none';
            questionTwo.style.display = 'block';
        }
    }

    //Validating Question Two 
    function questionTwoValidation() {
        if (seatQuantity.value > 0) {
            questionTwo.style.display = 'none';
            questionThree.style.display = 'block';
        }
    }

    //Validating Question Three 
    //Taking seat and day quantity to determine what vehicles will be displayed in question four
    function questionThreeValidation() {

        grabPreCalculatedDistance()

        if (seatQuantity.value == 1 && (dayQuantity.value > 0 && dayQuantity.value <= 5) && (travelDistanceValue > 900 && dayQuantity.value > 1 )) {
            motorbike.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else if (seatQuantity.value == 1 && (dayQuantity.value > 0 && dayQuantity.value <= 5) && (travelDistanceValue <= 900)){
            motorbike.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else {
            motorbike.style.display = 'none';
            console.log('break');
        }

        if ((seatQuantity.value > 0 && seatQuantity.value <= 2) && (dayQuantity.value > 0 && dayQuantity.value <= 10) && (travelDistanceValue > 900 && dayQuantity.value > 1)) {
            smallCar.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else if ((seatQuantity.value > 0 && seatQuantity.value <= 2) && (dayQuantity.value > 0 && dayQuantity.value <= 10) && (travelDistanceValue <= 900)){
            smallCar.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else {
            smallCar.style.display = 'none';
            console.log('break');
        }
    
        if ((seatQuantity.value > 0 && seatQuantity.value <= 5) && (dayQuantity.value >= 3 && dayQuantity.value <= 10) && (travelDistanceValue > 900 && dayQuantity.value > 1)) {
            largeCar.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else if ((seatQuantity.value > 0 && seatQuantity.value <= 5) && (dayQuantity.value >= 3 && dayQuantity.value <= 10) && (travelDistanceValue <= 900)) {
            largeCar.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else {
            largeCar.style.display = 'none';
            console.log('break');
        }

        if ((seatQuantity.value >= 2 && seatQuantity.value <= 6) && (dayQuantity.value >= 2 && dayQuantity.value <= 15) && (travelDistanceValue > 900 && dayQuantity.value > 1)) {
            motorhome.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else if ((seatQuantity.value >= 2 && seatQuantity.value <= 6) && (dayQuantity.value >= 2 && dayQuantity.value <= 15) && (travelDistanceValue <= 900)) {
            motorhome.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else {
            motorhome.style.display = 'none';
            console.log('break');
        }

        console.log(travelDistanceValue);
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
    var travelLength = document.getElementById('numberOfDays');
    var amountOfSeats = document.getElementById('numberOfPeople');
    var fuelCost = document.getElementById('fuelCost');
    var fuelCostEquation = document.getElementById('fuelCostCalculation');
    var totalCost = document.getElementById('totalCost');
    var travelDistancePrint = document.getElementById('travelDistance');
    //Vehicle Name and Image
    var vehicleNameHeader = document.getElementById('vehicleInfoModalLabel');
    var vehicleImage = document.getElementById('vehicleImage');
    //Rental Cost Variable
    var rentalPrice = document.getElementById('rentalPrice');
    var rentalPriceEquation = document.getElementById('rentalPriceCalculation');
    //Trip distance values
    var fullTripDistance = 2500;
    var northIslandDistance = 978;
    var southIslandDistance = 1071;

    var travelDistanceValue = [];

    motorbike.addEventListener('click', function () {
        vehicleModalInfo("TRIUMPH DAYTONA 650", "img/vehicleImages/motorcycle.jpg", 109, 3.7)
    }, false);
    smallCar.addEventListener('click', function () {
        vehicleModalInfo("2008 SMART FORTWO", "img/vehicleImages/smallCar.jpg", 129, 8.5)
    }, false);
    largeCar.addEventListener('click', function () {
        vehicleModalInfo("MINI COOPER S 3-DOOR HATCH", "img/vehicleImages/largeCar.jpg", 144, 9.7)
    }, false);
    motorhome.addEventListener('click', function () {
        vehicleModalInfo("VOLKSWAGEN CAMPER VAN", "img/vehicleImages/motorhome.jpg", 200, 17)
    }, false);

    function vehicleModalInfo (carName, carImage, rentalCost, fuelCapacity) {
        var rentalPriceArray = [];
        var fuelCostArray = [];

        grabPreCalculatedDistance()
        vehicleNameHeader.textContent = carName;
        vehicleImage.src = carImage;
        travelLength.textContent = dayQuantity.value + ' days';
        amountOfSeats.textContent = seatQuantity.value + ' people';

        var totalRentalPrice = (dayQuantity.value * rentalCost).toFixed(2);
        rentalPrice.textContent = '$' + totalRentalPrice;
        rentalPriceArray.push(totalRentalPrice);
        rentalPriceEquation.textContent = '($' + rentalCost + '/day x ' + dayQuantity.value + ')';

        var estimatedFuelCost = (((travelDistanceValue / 100) * fuelCapacity) * 1.98).toFixed(2);
        fuelCost.textContent = '$' + estimatedFuelCost;
        fuelCostArray.push(estimatedFuelCost);
        fuelCostEquation.textContent = '($1.98/L x ' + fuelCapacity + 'L/100km for ' + travelDistanceValue + 'km)';

        var rentalPriceValue = Number(rentalPriceArray);
        var fuelCostValue = Number(fuelCostArray);
        var totalCostValue = (rentalPriceValue + fuelCostValue).toFixed(2);
        totalCost.textContent = '$' + totalCostValue;
    }

    function grabPreCalculatedDistance () {
        if (fullTrip.checked) {
            var travelDistance = fullTripDistance;
            travelDistanceValue.splice(0, 1, travelDistance);
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (northIsland.checked) {
            var travelDistance = northIslandDistance;
            travelDistanceValue.splice(0, 1, travelDistance);
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (southIsland.checked) {
            var travelDistance = southIslandDistance;
            travelDistanceValue.splice(0, 1, travelDistance);
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (customiseButton.checked) {
            customisedDistanceValues()
        }
    }

    function customisedDistanceValues() {
        for (var i = 0; i < routeDataArray.length; i++) {
            if ((startingPointSelect.value == routeDataArray[i][0] || startingPointSelect.value == routeDataArray[i][1]) && (endingPointSelect.value == routeDataArray[i][0] || endingPointSelect.value == routeDataArray[i][1])) {
                var travelDistance = routePossibilities[routeDataArray[i][2]].distance;
                travelDistanceValue.splice(0, 1, travelDistance);
                travelDistancePrint.textContent = travelDistance + ' km';
            }
        }
    }
})();








