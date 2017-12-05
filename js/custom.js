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

        addDay.addEventListener('click', addDays, false);
        minusDay.addEventListener('click', minusDays, false);

        function addDays () {
            if (dayCount >= 0 && dayCount <= 5){
                dayCount ++;
                dayQuantity.value = dayCount;
            }
        }

        function minusDays () {
            if (dayCount > 0 && dayCount <= 6){
                dayCount --;
                dayQuantity.value = dayCount;
            }
        }
    }

    //Validating Question One
    function questionOneValidation () {
        //Type of trip option variables
        var customiseButton = document.getElementById('customise');
        var northIsland = document.getElementById('northIsland');
        var southIsland = document.getElementById('southIsland');
        var fullTrip = document.getElementById('fullTrip');

        if (customiseButton.checked){
            document.getElementById('questionOne').style.display = 'none';
            document.getElementById('questionOneCustomise').style.display = 'block';
        }
        else if (fullTrip.checked || southIsland.checked || northIsland.checked){
            document.getElementById('questionOne').style.display = 'none';
            document.getElementById('questionTwo').style.display = 'block';
        }
        else {
            console.log('choose something');
        }
    }

    //Validating Question One Customise
    function customiseQuestionValidation(params) {
        var startingPointSelect = document.getElementById('sel1');
        var endingPointSelect = document.getElementById('sel2');

        if (startingPointSelect.value && endingPointSelect.value){
            document.getElementById('questionOneCustomise').style.display = 'none';
            document.getElementById('questionTwo').style.display = 'block';
        }
        else{
            console.log('choose something please');
        }
    }

    //Validating Question Two 
    function questionTwoValidation () {
        var seatQuantity = document.getElementById('seatQuantity');

        if (seatQuantity.value > 0){
            document.getElementById('questionTwo').style.display = 'none';
            document.getElementById('questionThree').style.display = 'block';
        }
        else {
            console.log('add some seats');
        }
    }

    //Validating Question Three 
    function questionThreeValidation() {
        var dayQuantity = document.getElementById('dayQuantity');

        if (dayQuantity.value > 0) {
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else {
            console.log('add some days');
        }
    }


    //Map Box js stuff
    function mapbox() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnB3bCIsImEiOiJjamFib2swNnMwMjU0MndwZGwzdnhmZXBnIn0.0glfG4jZkFJwm0TJLuVriA';

        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/fpwl/cjan5kfxmeaq02smsehvd41aa', // stylesheet location
            center: [174.8860, -40.9006], // starting position [lng, lat]
            zoom: 4.5 // starting zoom 
        });
    }

})();









