

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
    
            var name = childSnapshot.val().name;
            var destination = childSnapshot.val().destination;
            var frequency = childSnapshot.val().frequency;
            var time = childSnapshot.val().time;
            var key = childSnapshot.key;
        

    var firstTrainTime = moment(time, "hh:mm").subtract(1, "years");
    console.log(firstTrainTime);

   

    var currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("hh:mm"));


    


    var timeDiff = moment().diff(moment(firstTrainTime), "minutes");
    console.log("Difference In Time: " + timeDiff);


    var remainingTime = timeDiff % frequency;
    console.log(remainingTime);


    var minNextTrain = frequency - remainingTime;
    console.log("Minutes Till Train: " + minNextTrain);


    var addNextTrain = moment().add(minNextTrain, "minutes");
    var nextTrainArr = moment(addNextTrain).format("hh:mm");
    console.log("Arrival Time: " + nextTrainArr);

        
        $("#newTrains").append(
            "<tr><td>" + name + "</td>" +
            "<td>" + destination + "</td>" +
            "<td>" + frequency + "</td>" +
            "<td>" + minNextTrain + "</td>" +
            "<td>" + nextTrainArr + "</td>"
            
        
        );

 });
    