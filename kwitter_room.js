
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyA21hgMw_kI729frZopJKD_gyLbxhOnVoQ",
  authDomain: "char-1f55c.firebaseapp.com",
  databaseURL: "https://char-1f55c-default-rtdb.firebaseio.com",
  projectId: "char-1f55c",
  storageBucket: "char-1f55c.appspot.com",
  messagingSenderId: "436185323503",
  appId: "1:436185323503:web:ee59a0ffb789df4a04081a"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  console.log(room_name)

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
