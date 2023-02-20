
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcBFboieIOS3JwBt6mhTjoyD6bFZWljtA",
  authDomain: "vamosconversar-3be82.firebaseapp.com",
  projectId: "vamosconversar-3be82",
  storageBucket: "vamosconversar-3be82.appspot.com",
  messagingSenderId: "825520821748",
  appId: "1:825520821748:web:e89b69c15ce1725bc7d5a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function updateLike(messageId){ 
  console.log("botão de like pressionado - " + messageId); 
  buttonId = messageId; likes = document.getElementById(buttonId).value; 
  updatedLikes = Number(likes) + 1; console.log(updatedLikes); 
  firebase.database().ref(roomName).child(messageId).update({ like : updatedLikes }); 
}


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
