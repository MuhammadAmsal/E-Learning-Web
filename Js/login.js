import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

 
  

const firebaseConfig = {
  apiKey: "AIzaSyA4IUo4hOvbzWORREMSzUjAf3gDSpud_L0",
  authDomain: "devathon-c1331.firebaseapp.com",
  projectId: "devathon-c1331",
  storageBucket: "devathon-c1331.appspot.com",
  messagingSenderId: "621606452747",
  appId: "1:621606452747:web:6f183f3c5278170d1f910e",
  measurementId: "G-JR63V5NKJM"
};
   
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  let loginEmail = document.querySelector("#loginEmail");
  let loginPassword = document.querySelector("#loginPassword");
  let  loginBtn= document.querySelector("#loginBtn");

console.log(loginBtn)
console.log(loginPassword)
console.log(loginEmail)

  loginBtn.addEventListener('click', loginHandler)

function loginHandler() {
  
    if(!loginEmail.value || !loginPassword.value  ){
        alert(`Please Fill Out This Field`)
        return false
      }
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then(  (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user) {
                console.log(user)
                window.location.href = '/'
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`User Does Not Exist`)
            // window.location.href = ''
        });
}
