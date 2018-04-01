$(document).ready(function(){
// Initialize Firebase---------------------------------
    var config = {
        apiKey: "AIzaSyB_CPky6SxoqaHlRG0iAVv9uVPN0tk4pqU",
        authDomain: "train-scheduler-cb07e.firebaseapp.com",
        databaseURL: "https://train-scheduler-cb07e.firebaseio.com",
        projectId: "train-scheduler-cb07e",
        storageBucket: "train-scheduler-cb07e.appspot.com",
        messagingSenderId: "477245144792"
      };
      firebase.initializeApp(config);
    var database = firebase.database();
// onClick event function----------------------------
    $('#addButton').on("click", function(event){
        event.preventDefault();

        var trainNameInput = $("#trainNameInput").val().trim();
        var destinationInput = $("#destinationInput").val().trim();
        var firstTrainInput = $("#firstTrainInput").val().trim();
        var frequencyInput = $("#frequencyInput").val().trim();
        
        var newTrain = {
            name : trainNameInput,
            destination : destinationInput,
            firstTrain : firstTrainInput,
            frequency : frequencyInput
        }
        database.ref().push(newTrain);

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.firstTrain);
        console.log(newTrain.frequency);

        $("#trainNameInput").val("")
        $("#destinationInput").val("")
        $("#firstTrainInput").val("")
        $("#frequencyInput").val("")
    });
// Retrieving from firebase ------------------------
    database.ref().on("child_added", function(snapshot){
        console.log(snapshot.val());

        var retrievedName = snapshot.val().name;
        var retrievedDestination = snapshot.val().destination;
        var retrievedFirstTrain = snapshot.val().firstTrain;
        var retrievedFrequency = snapshot.val().frequency;

        console.log(retrievedName);
        console.log(retrievedDestination);
        console.log(retrievedFirstTrain);
        console.log(retrievedFrequency);
        
    })
})