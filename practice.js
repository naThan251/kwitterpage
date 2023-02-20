const firebaseConfig = {
    apiKey: "AIzaSyDcBFboieIOS3JwBt6mhTjoyD6bFZWljtA",
    authDomain: "vamosconversar-3be82.firebaseapp.com",
    databaseURL: "https://vamosconversar-3be82-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-3be82",
    storageBucket: "vamosconversar-3be82.appspot.com",
    messagingSenderId: "825520821748",
    appId: "1:825520821748:web:e89b69c15ce1725bc7d5a1"
};

firebase.initializeApp(firebaseConfig);
  
const app = initializeApp(firebaseConfig);

function addUser() { 
    userName = document.getElementById("userName").value; 
    firebase.database().ref("/").child(userName).update({ 
     purpose : "adding user" }); 
}