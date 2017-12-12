//This is my custom js.

(function () {
    //Custom Variables

    //These are variables for the Landing page and App content page.
    var landingPage = document.getElementById('landingPage');
    var mainAppContent = document.getElementById('mainAppContent');
    //Form question wrappers variables
    var questionOne = document.getElementById('questionOne');
    var questionOneCustomise = document.getElementById('questionOneCustomise');
    var questionTwo = document.getElementById('questionTwo');
    var questionThree = document.getElementById('questionThree');
    var questionFour = document.getElementById('questionFour');
    //Variable for back button
    var customiseBackButton = document.getElementById('customiseBackButton');
    var questionTwoBackButton = document.getElementById('questionTwoBackButton');
    var questionThreeBackButton = document.getElementById('questionThreeBackButton');
    var questionFourBackButton = document.getElementById('questionFourBackButton');
    //Variables for add and minus days and seats
    var addDay = document.getElementById('addDays');
    var minusDay = document.getElementById('minusDays');
    var dayCount = 0;
    var addSeat = document.getElementById('addSeat');
    var minusSeat = document.getElementById('minusSeat');
    var seatCount = 0;
    // Next arrow variables
    var nextArrowOne = document.getElementById('submitQuestionOne');
    var nextArrowOneCustomise = document.getElementById('submitQuestionOneCustomise');
    var nextArrowTwo = document.getElementById('submitQuestionTwo');
    var nextArrowThree = document.getElementById('submitQuestionThree');
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

    //Event Listeners

    //show and hide pages event listeners
    document.getElementById('getStartedBtn').addEventListener('click', hideLandingPage, false);
    document.getElementById('logo').addEventListener('click', showLandingPage, false);
    document.getElementById('newSearch').addEventListener('click', showLandingPage, false);
    //Back button event listeners
    customiseBackButton.addEventListener('click', function () {
        goBackButton(questionOne, questionOneCustomise);
    }, false);
    questionTwoBackButton.addEventListener('click', function () {
        goBackButton(questionOne, questionTwo);
    }, false);
    questionThreeBackButton.addEventListener('click', function () {
        goBackButton(questionTwo, questionThree);
    }, false);
    questionFourBackButton.addEventListener('click', function () {
        goBackButton(questionThree, questionFour);
    }, false);
    //Add seats and days event listeners 
    addSeat.addEventListener('click', addSeats, false);
    minusSeat.addEventListener('click', minusSeats, false);
    addDay.addEventListener('click', addDays, false);
    minusDay.addEventListener('click', minusDays, false);
    // Next question events listeners
    nextArrowOne.addEventListener('click', questionOneValidation, false);
    nextArrowOneCustomise.addEventListener('click', customiseQuestionValidation, false);
    nextArrowTwo.addEventListener('click', questionTwoValidation, false);
    nextArrowThree.addEventListener('click', questionThreeValidation, false);
    //Vehicle Modal event listeners
    motorbike.addEventListener('click', function () {
        vehicleModalInfo("TRIUMPH DAYTONA 650", "img/vehicleImages/motorcycle.jpg", 109, 3.7);
    }, false);
    smallCar.addEventListener('click', function () {
        vehicleModalInfo("2008 SMART FORTWO", "img/vehicleImages/smallCar.jpg", 129, 8.5);
    }, false);
    largeCar.addEventListener('click', function () {
        vehicleModalInfo("MINI COOPER S 3-DOOR HATCH", "img/vehicleImages/largeCar.jpg", 144, 9.7);
    }, false);
    motorhome.addEventListener('click', function () {
        vehicleModalInfo("VOLKSWAGEN CAMPER VAN", "img/vehicleImages/motorhome.jpg", 200, 17);
    }, false);

//_________________________________________________________________________________________________________________________________________//

    //function that hides the loading page
    function hideLandingPage() {
        landingPage.style.display = 'none';
        mainAppContent.style.display = 'block';
        questionOne.style.display = 'block';
        //Init for mapbox to make the map fit the page 
        mapbox();
        //Init function to close tooltipser once conditional are met
        $('.tippy').tooltipster({
            trigger: 'custom',
            triggerClose: {
                click: true,
                hover: true
            }
        });
    }

    //function that shows the loading page
    function showLandingPage() {
        mainAppContent.style.display = 'none';
        landingPage.style.display = 'block';
        questionOne.style.display = 'none';
        //Refresh page, which cancels all input data
        window.location.reload();
    }

    //A function for the Go back button
    function goBackButton (showQuestion, hideQuestion) {
        showQuestion.style.display = 'block';
        hideQuestion.style.display = 'none';
    }
    
    // Adding and Minus number of seats 
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

    //Adding and Minus number of days
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

     //Make customise route selection to not have same data in start and end location
    $('select').change(function () {
        var ary = [];
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

    //Validation for Question One
    function questionOneValidation() {
        //Conditionals to determine what question to display
        if (customiseButton.checked) {
            questionOne.style.display = 'none';
            questionOneCustomise.style.display = 'block';
            $('.tripTippy').tooltipster('close');
        }
        else if (fullTrip.checked || southIsland.checked || northIsland.checked) {
            questionOne.style.display = 'none';
            questionTwo.style.display = 'block';     
            $('.tripTippy').tooltipster('close');    
        }     
        else{
            //A tooltip to pop up if no trip has been selected
            $('.tripTippy').tooltipster('open');
        }
    }

    //Validating Question One Customise
    function customiseQuestionValidation() {
        //Conditionals to only show next question if both start and end locaation has a value
        if (startingPointSelect.value && endingPointSelect.value) {
            questionOneCustomise.style.display = 'none';
            questionTwo.style.display = 'block';
            $('.endLocationTippy').tooltipster('close'); 
            $('.startLocationTippy').tooltipster('close');
        }
        else if (startingPointSelect.value) {
            //Show tooltip if no end location selected
            $('.endLocationTippy').tooltipster('open');
            $('.startLocationTippy').tooltipster('close');
        }
        else if (endingPointSelect.value) {
            //Show tooltip if no start location selected
            $('.startLocationTippy').tooltipster('open');
            $('.endLocationTippy').tooltipster('close');
        }
        else{
            //Show tooltips if no start and end location selected
            $('.endLocationTippy').tooltipster('open'); 
            $('.startLocationTippy').tooltipster('open');
        }
    }

    //Validating Question Two 
    function questionTwoValidation() {
        //Conditional to only show next question when there is a seat quantity.
        if (seatQuantity.value > 0) {
            questionTwo.style.display = 'none';
            questionThree.style.display = 'block';
            $('.seatsTippy').tooltipster('close');
        }
        else{
            //Show tooltip if the has been no seats added
            $('.seatsTippy').tooltipster('open');
        }
    }

    //Validating Question Three 
    function questionThreeValidation() {
        //Invoking grabPreCalculatedDistance function so a travelDistanceValue exists
        grabPreCalculatedDistance();
        //Taking seat and day quantity to determine what vehicles will be displayed in question four
        //A for loop to loop through a array data to determine max and min, seat and day values, as well as the type of vehicle to show or hide
        for (var i = 0; i < q3ValiadationArray.length; i++) {
            if ((seatQuantity.value >= q3ValiadationArray[i][0] && seatQuantity.value <= q3ValiadationArray[i][1]) && (dayQuantity.value >= q3ValiadationArray[i][2] && dayQuantity.value <= q3ValiadationArray[i][3]) && (travelDistanceValue > 1080 && dayQuantity.value > 1)) {
                q3ValiadationArray[i][4].style.display = 'block';
                questionThree.style.display = 'none';
                questionFour.style.display = 'block';
                $('.daysTippy').tooltipster('close');
            }
            else if ((seatQuantity.value >= q3ValiadationArray[i][0] && seatQuantity.value <= q3ValiadationArray[i][1]) && (dayQuantity.value >= q3ValiadationArray[i][2] && dayQuantity.value <= q3ValiadationArray[i][3]) && (travelDistanceValue <= 1080)) {
                q3ValiadationArray[i][4].style.display = 'block';
                questionThree.style.display = 'none';
                questionFour.style.display = 'block';
                $('.daysTippy').tooltipster('close');
            }
            else {
                //Hide specified vehicle if the conidtional do not meet
                q3ValiadationArray[i][4].style.display = 'none';
                //The conditionals below is to show different tool tips content depending on conditional requirements
                if (travelDistanceValue < 1080 && dayQuantity.value < 1) {
                    $('.daysTippy').tooltipster('open');
                    $('.daysTippy').tooltipster('content', 'Please add some Days.');
                }
                else if (travelDistanceValue > 1080 && dayQuantity.value < 2) {
                    $('.daysTippy').tooltipster('open');
                    $('.daysTippy').tooltipster('content', 'The route chosen exceeds 1080km. For your saftey please extend your trip to 2 or more days');
                }
            }
        }
    }

//____________________________________________________________________________________________________//

    //Custom js for mapbox styles
    function mapbox() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnB3bCIsImEiOiJjamFib2swNnMwMjU0MndwZGwzdnhmZXBnIn0.0glfG4jZkFJwm0TJLuVriA';
        //Displaying mapbox map 
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/fpwl/cjan5kfxmeaq02smsehvd41aa', // stylesheet location
            center: [174.8860, -40.9006], // starting position [lng, lat]
            zoom: 4.2 // starting zoom 
        });

        //Hide and show mapbox markers event listeners
        northIsland.addEventListener('click', showNorthIslandMarkers, false);
        southIsland.addEventListener('click', showSouthIslandMarkers, false);
        fullTrip.addEventListener('click', showFullTripMarkers, false);
        customise.addEventListener('click', customiseMarkers, false);

        //When north Island trip is selected show markers
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
            $('.southMark').hide();
        }
        //When south Island trip is selected show markers
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
        //When full trip is selected show markers
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
        //When customise trip is selected hide all markers
        function customiseMarkers () {
            $('.northMark').hide();
            $('.southMark').hide();
        }

        //Grabing customise select values
        $('#sel1').on('change', function () {
            var el = document.createElement('div');
            var startLoactionValue = document.getElementById('sel1').value;

                //Individual markers for customise section
                if (startLoactionValue == 'kaitaia') {
                    el.className = 'marker kaitaiaMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[0].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker aucklandMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[1].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker waikatoMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[2].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker wanganuiMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[3].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker wellingtonMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(northIslandData.features[4].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker greymouthMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[0].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker christchurchMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[1].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker queenstownMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[2].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker dunedinMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[3].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
                    el.className = 'marker invercargillMark';
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(southIslandData.features[4].geometry.coordinates)
                        .addTo(map);
                    //Hiding markers that are not selected
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
        });

        $('#sel2').on('change', function () {
            var el = document.createElement('div');
            var endLoactionValue = document.getElementById('sel2').value;

            //Individual markers for customise section
            if (endLoactionValue == 'kaitaia') {
                el.className = 'marker kaitaiaMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[0].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker aucklandMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[1].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker waikatoMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[2].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker wanganuiMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[3].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker wellingtonMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(northIslandData.features[4].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker greymouthMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[0].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker christchurchMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[1].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker queenstownMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[2].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker dunedinMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[3].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
                el.className = 'marker invercargillMarkEnd';
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(southIslandData.features[4].geometry.coordinates)
                    .addTo(map);
                //Hiding markers that are not selected
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
        });
    }

//____________________________________________________________________________________________________//

    //Vehicle Option Modal Functions

    //Array to store the trip distance when chosen
    var travelDistanceValue = [];

    //Function to display data inside modal depending on which car the user selects
    function vehicleModalInfo (carName, carImage, rentalCost, fuelCapacity) {
        var rentalPriceArray = [];
        var fuelCostArray = [];

        grabPreCalculatedDistance();
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

    //Function to add a travelDistance to the travelDistanceValue Array.
    function grabPreCalculatedDistance () {
        var travelDistance;

        if (fullTrip.checked) {
            travelDistance = fullTripDistance;
            travelDistanceValue.splice(0, 1, travelDistance);
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (northIsland.checked) {
            travelDistance = northIslandDistance;
            travelDistanceValue.splice(0, 1, travelDistance);
            travelDistancePrint.textContent = travelDistance + ' km';
        }
        if (southIsland.checked) {
            travelDistance = southIslandDistance;
            travelDistanceValue.splice(0, 1, travelDistance);
            travelDistancePrint.textContent = travelDistance + ' km';
        }
       
        if (customiseButton.checked) {
            customisedDistanceValues();
        }
    }

     //Due to the customisation could have multiple values possiblities, the for loop, calculates the customise distance and pushes it to the travelDistanceArray
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








