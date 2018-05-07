var config = {
    apiKey: "AIzaSyBNSExPpQMOqXV7dOX3g186TBfBskrrNBA",
    authDomain: "train-time-4a6ee.firebaseapp.com",
    databaseURL: "https://train-time-4a6ee.firebaseio.com",
    projectId: "train-time-4a6ee",
    storageBucket: "train-time-4a6ee.appspot.com",
    messagingSenderId: "668981131704"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var currentTime = moment();

  database.ref().on("child_added", function(childSnap) {

    var name = childSnap.val().name;
    var going = childSnap.val().going;
    var arrival = childSnap.val().arrival;
    var freq = childSnap.val().freq;
    var min = childSnap.val().min;
    var next = childSnap.val().next;
 
    $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + going + "</td><td>" + freq + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
 });

// var trainName = "";
// var destination = "";
// var frequencyMin = 0;
// var nextArrival = 0;
// var minsAway = 0;
// var newTrain;

$("#addTrain").on("click", function (event) {

    event.preventDefault();
    

    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var nextArrival = $("#nextArrivalInput").val().trim();
    var frequencyMin = $("#frequencyInput").val().trim();

    var firstTrainConverted = moment(nextArrival, "hh:mm").subtract("1, years");

    var difference = currentTime.diff(moment(firstTrainConverted), "minutes");
    var remainder = difference % frequencyMin;
    var minUntilTrain = frequencyMin - remainder;
    var nextTrain = moment().add(minUntilTrain, "minutes").format("hh:mm a");

    var newTrain = {
        name: trainName,
        going: destination,
        arrival: nextArrival,
        freq: frequencyMin,
        min: minUntilTrain,
        next: nextTrain
        
    };


console.log(newTrain);

database.ref().push(newTrain);

$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#nextArrivalInput").val("");
$("#frequencyInput").val("");


});
