const firebaseConfig = {
      apiKey: "AIzaSyCwOvoQ7XrRvwL5lfcunbdeGaL8tbKKVZQ",
      authDomain: "kwitter1-e49ea.firebaseapp.com",
      databaseURL: "https://kwitter1-e49ea-default-rtdb.firebaseio.com",
      projectId: "kwitter1-e49ea",
      storageBucket: "kwitter1-e49ea.appspot.com",
      messagingSenderId: "610312387337",
      appId: "1:610312387337:web:e6731f31767d8fbbddb1d8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";
function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row = "<div class='room_name' id="+Room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItam("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

