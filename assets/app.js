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

$("#run-search").on("click", function (event) {

    event.preventDefault();
    var newRow = $("<tr>");

    trainName = $("#trainName").val();
    destination = $("#destination").val();
    nextArrival = $("#nextArrival").val();
    frequencyMin = $("frequencyMin").val();

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);


});

// database.ref().push(newEmp);
// // Clears all of the text-boxes
// $("#employee-name-input").val("");
// $("#role-input").val("");
// $("#start-input").val("");
// $("#rate-input").val("");
// });
