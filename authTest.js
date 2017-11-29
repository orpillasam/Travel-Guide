// Initialize Firebase
var config = {
apiKey: "AIzaSyBuf29g7hknWHDoZn9gQFuHHAkSkhAGKkw",
authDomain: "myproject-a2b4d.firebaseapp.com",
databaseURL: "https://myproject-a2b4d.firebaseio.com",
projectId: "myproject-a2b4d",
storageBucket: "myproject-a2b4d.appspot.com",
messagingSenderId: "384162082608"
};
firebase.initializeApp(config);
var database = firebase.database();

//Get button elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //Sign in 
  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
  
});

btnSignUp.addEventListener('click', e => {
  //TODO: This does not check if its actual email.
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //Sign in 
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});

btnLogout.addEventListener('click', e =>{
  firebase.auth().signOut();
});
//Add a listener to see if the sign in change is changed
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    database.ref().once('value', function(snapshot) {
      if (!(snapshot.child('testUsers').hasChild("" + firebaseUser + ""))) {
       
        const users = {
          uid: firebaseUser.uid
        }
        database.ref('testUsers').push(users);
      }
    });
    
  }else{
    console.log('not logged in');
    btnLogout.classList.add('hide');
  }
});