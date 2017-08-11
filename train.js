// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvNdUDtqsomrq52UkXOwDhr2wIDRzkX_M",
    authDomain: "train-e8e59.firebaseapp.com",
    databaseURL: "https://train-e8e59.firebaseio.com",
    projectId: "train-e8e59",
    storageBucket: "train-e8e59.appspot.com",
    messagingSenderId: "21831692710"
  };
  firebase.initializeApp(config)

}

function appendToTable(TrainName, Destination, FirstTrainTime, Frequency, NextArrival, MinutesAway){
  var $table = $("#employeetable");
  var $tableRow = $("<tr>");
  $tableRow.append("<td>" + TrainName + "</td>");
  $tableRow.append("<td>" + Destination + "</td>");
  $tableRow.append("<td>" + FirstTrainTime + "</td>");
  $tableRow.append("<td>" + Frequency + "</td>");
  $tableRow.append("<td>" + NextArrival + "</td>");
  $tableRow.append("<td>" + MinutesAway + "</td>");
  $table.append($tableRow);
}

var databaseref = firebase.database();
$(document).ready(function(){
  $("#submitbtn").on("click", function(){
    var Train Schedule = $("#Train Schedule").val().trim();
    var Destination = $("#Destination").val().trim();
    var First Train Time = $("#FirstTrainTime").val().trim();
    var Next Arrival = $("#NextArrival").val().trim();
    var Minutes Away = 
    
  
    $("#TrainName").val("");
    $("#Destination").val("");
    $("#FirstTrainTime").val("");
    $("#Frequency").val("");

    databaseref.ref().push({
      TrainName:TrainName,
      Destination:Destination,
      FirstTrainTime:FirstTrainTime,
      Frequency:Frequency,
      NextArrival:NextArrival,
      
    });
  });

  databaseref.ref().on("child_added", function(childSnapshot){
      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().TrainName);
      console.log(childSnapshot.val().Destination);
      console.log(childSnapshot.val().FirstTrainTime);
      console.log(childSnapshot.val().Frequency);
      console.log(childSnapshot.val().NextArrival);
      appendToTable( childSnapshot.val().TrainName, childSnapshot.val().Destination, childSnapshot.val().FirstTrainTime, childSnapshot.val().Frequency, childSnapshot.val().NextArrival

  });

});
