 




 

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {getAuth,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {getFirestore,collection,setDoc,addDoc,getDocs,getDoc,doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
 
  
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
  const db = getFirestore(app);


  let logoutBtn = document.querySelector(".logoutBtn");
  let courseWrapper = document.querySelector(".courseWrapper");
  let menuBtn=document.querySelector('#menu-btn')
let navbar=document.querySelector('.header .flex .navbar')
 
 
 


  menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
//   console.log(logoutBtn)
const logoutHandler = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        // console.log("signout successfully")
        window.location.href = '../html/login.html'
    }).catch((error) => {
        // An error happened.
    });
    
}
logoutBtn.addEventListener('click', logoutHandler)

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(uid)
        // getUserData(uid)
        currentLoggedInUser = uid
        // ...
    } else {
        // User is signed out
        // ...
        // console.log("sign out")
        window.location.href = '../html/login.html'
    }
});

window.onload = function () {
    getBlogs()


}

const getBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
        const uid = auth.currentUser.uid;
        console.log('uid====>', uid);
        const blogDoc = doc.data()
// console.log(blogDoc)
        const id = doc.id

        
            
            //  const cardcontent=`<div class="card1" > 
             
            //      <div style="display: flex; flex-direction: row;" >
            //          <div><img src=${blogDoc.profilePicture} alt="" width="100px" height="100px" ></div>
            //      <div><h1>${blogDoc.title}</h1>
            //      </div>
            //  </div>
             
             
            //      <div><p  style="margin-left: 5px;">${blogDoc.description}</p></div>
            
             
            //  </div>
            //  `
            // const cardcontent=` <div class="course-card">
            // <img class="course-image" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg" alt="Course 3 Image">
            // <div class="course-title">${blogDoc.title}</div>
            // <div class="course-description">
            // ${blogDoc.description}
            // </div>`

            // const cardcontent=` <div class="swiper-slide slide">
            // <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg" alt="">
            // <h3>${blogDoc.title}</h3>
            // <p>${blogDoc.description}</p> 
            // </div>`
            const cardcontent=`<div class="course-card">
            <img class="course-img" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg" alt="Course Image" width="100%" height="200">
            <div class="course-title">${blogDoc.title}</div>
            <div class="course-description">
            ${blogDoc.description}
            </div>
        </div>`
        //    console.log(cardcontent);

            courseWrapper.innerHTML += cardcontent
            return
    }
    )};

;

window.getBlogs = getBlogs