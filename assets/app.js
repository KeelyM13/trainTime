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

var trainName = "";
var destination = "";
var frequencyMin = 0;
var nextArrival = 0;
var minsAway = 0;
var newTrain;

$("#addTrain").on("click", function (event) {

    event.preventDefault();
    var newRow = $("<tr>");

    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    nextArrival = $("#nextArrivalInput").val().trim();
    frequencyMin = $("frequencyInput").val().trim();

    newTrain = {
        name: trainName,
        going: destination,
        arrival: nextArrival,
        freq: frequencyMin
        
    };




database.ref().push(newTrain);

$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#nextArrivalInput").val("");
$("frequencyInput").val("");
});
