$(document).ready(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAS28IfDs_q9QD7T4GHBbTRc06CgMwhleQ",
        authDomain: "train-schedule-7c823.firebaseapp.com",
        databaseURL: "https://train-schedule-7c823.firebaseio.com",
        projectId: "train-schedule-7c823",
        storageBucket: "",
        messagingSenderId: "723076965763",
        appId: "1:723076965763:web:2763e92d11a93692"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var dataRef = firebase.database();

      $("#trainAdd").on("click", function(event) {
        //don't refresh the page
        event.preventDefault();

        var name = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrain = $("#firstTrain").val().trim();
        var frequency = $("#frequency").val().trim();

        dataRef.ref().push({
            name: name,
            destination: destination,
            time: firstTrain,
            frequency: frequency
        });
    });

    dataRef.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
        