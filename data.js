var firebaseConfig = {
    apiKey: "AIzaSyBPiDrV_hD-d8qTi5m_S5nEjmQ7kMhwkzs",
    authDomain: "need-electronics.firebaseapp.com",
    databaseURL: "https://need-electronics-ddcf2-default-rtdb.firebaseio.com/",
    projectId: "need-electronics",
    storageBucket: "need-electronics.appspot.com",
    messagingSenderId: "450397395955",
    appId: "1:450397395955:web:44cf4c610a95ef0bec1086",
    measurementId: "G-M7R2H7MZ0B"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
        alert("error");
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var zip = document.getElementById('zip').value;
    var state = document.getElementById('state').value;
    var district = document.getElementById('district').value;
  
    var password = document.getElementById('password').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        Name: getId('fname'),
    City: getId('city'),
    State: getId('state'),
    Disrict: getId('district'),
    Zip: getId('zip'),
        Email : getId('eemail'),
        Password : getId('password')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
    alert(id);
}

