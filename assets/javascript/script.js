$(document).ready(function(){
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

    $('#addButton').on("click", function(event){
        event.preventDefault();

        var trainNameInput = $("#trainNameInput").val().trim();
        var destinationInput = $("#destinationInput").val().trim();
        var firstTrainInput = $("#firstTrainInput").val().trim();
        var frequencyInput = $("#frequencyInput").val().trim();
        
        var newTrain = {
            name = trainNameInput,
            destination = destinationInput,
            firstTrain = firstTrainInput,
            frequency = frequencyInput
        }
        
    })
})