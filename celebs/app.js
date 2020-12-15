const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const mainbutton = document.querySelector('#main__btn')

// display mobile menu, this is a function
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const inputMenu = document.querySelector('#input-page')
    const myturnMenu = document.querySelector('#myturn-page')
    let scrollPos = window.scrollY

    // adds highlight class to my menu items -- adjust scrollPos numbers based on look, using inspect 
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        inputMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        inputMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        myturnMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2200) {
        myturnMenu.classList.add('highlight');
        inputMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 1000 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAe2e1wi_qjzlD4HR6ZMeYutKDveB-K-wM",
    authDomain: "celebs--rae.firebaseapp.com",
    databaseURL: "https://celebs--rae-default-rtdb.firebaseio.com",
    projectId: "celebs--rae",
    storageBucket: "celebs--rae.appspot.com",
    messagingSenderId: "427947460588",
    appId: "1:427947460588:web:f471bfdc2c6d5bc5d722c9",
    measurementId: "G-3YTV00EREN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

//trying this variable declaration
import firebase from "firebase/app";
import "firebase/database";
var database = firebase.database();
var myFirebase = firebase.database().ref();
var inBowl = myFirebase.child("inBowl");

// saving info?
const submitname = () => {
    inBowl.update({userinput})
    //document.write("yo" + userinput);
};
mainbutton.addEventListener('click', submitname);

//tutorial
var config = {
    apiKey: "AIzaSyAe2e1wi_qjzlD4HR6ZMeYutKDveB-K-wM",
    authDomain: "celebs--rae.firebaseapp.com",
    databaseURL: "https://celebs--rae-default-rtdb.firebaseio.com",
    projectId: "celebs--rae",
    storageBucket: "celebs--rae.appspot.com",
    messagingSenderId: "427947460588",
    appId: "1:427947460588:web:f471bfdc2c6d5bc5d722c9",
    measurementId: "G-3YTV00EREN"
  };
  
  // Initialize your Firebase app
  firebase.initializeApp(config);
  
  // Reference to your entire Firebase database
  var myFirebase = firebase.database().ref();
  
  // Get a reference to the recommendations object of your Firebase.
  // Note: this doesn't exist yet. But when we write to our Firebase using
  // this reference, it will create this object for us!
  var inBowl = myFirebase.child("inBowl");
  
  // Push our first recommendation to the end of the list and assign it a
  // unique ID automatically.
  inBowl.push("try this");
