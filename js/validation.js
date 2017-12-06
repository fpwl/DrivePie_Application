//Custom Valiadtion JS for the valiadtion of the form questions

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
function customiseQuestionValidation () {
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
//Taking seat and day quantity to determine what vehicles will be displayed in question four
function questionThreeValidation () {
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

    function showMotorbike () {
        if (seatQuantity == 1 && (dayQuantity > 0 && dayQuantity <= 5)){
            motorbike.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';

            vehicleModalData()
        }
        else{
            motorbike.style.display = 'none';
            console.log('motorbike hidden')
        }
    }

    function showSmallCar () {
        if ((seatQuantity > 0 && seatQuantity <= 2) && (dayQuantity > 0 && dayQuantity <= 10)){
            smallCar.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else {
            smallCar.style.display = 'none';
            console.log('Small Car hidden')
        }
    }

    function showLargeCar () {
        if ((seatQuantity > 0 && seatQuantity <= 5) && (dayQuantity >=3 && dayQuantity <= 10)){
            largeCar.style.display = 'block';
            document.getElementById('questionThree').style.display = 'none';
            document.getElementById('questionFour').style.display = 'block';
        }
        else{
            largeCar.style.display = 'none';
            console.log('Large Car hidden')
        }
    }

    function showMotorhome () {
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