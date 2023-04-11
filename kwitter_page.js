//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyA21hgMw_kI729frZopJKD_gyLbxhOnVoQ",
      authDomain: "char-1f55c.firebaseapp.com",
      databaseURL: "https://char-1f55c-default-rtdb.firebaseio.com",
      projectId: "char-1f55c",
      storageBucket: "char-1f55c.appspot.com",
      messagingSenderId: "436185323503",
      appId: "1:436185323503:web:ee59a0ffb789df4a04081a"
    };
    firebase.initializeApp(firebaseConfig);
    var onix=localStorage.getItem("room_name")
    var sonic=localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+onix).on('value', function(snapshot) { document.getElementById("ferrari").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
var uva=message_data["nombre"]
var mango=message_data["mensaje"]
var auto="<h5 id='fresas'>"+uva+"</h5>"
var camaro="<h4 id='silla'>"+mango+"</h4>"
document.getElementById("ferrari").innerHTML+=auto+camaro
//Termina código
      } });  }); }
getData();
function pikachu(){
      localStorage.removeItem("room_name") 
      localStorage.removeItem("user_name") 
window.location.replace("index.html")
}

function enviar(){
      var dragonate=document.getElementById("cocodrilo").value
      firebase.database().ref(onix).push({
            nombre:sonic,
            mensaje:dragonate
      })
}