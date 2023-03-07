import React from "react";


const FORM = document.getElementById('form');
const student = {

}
function validateStudent(name,value) {
    if(! name) return;
    if(name === 'name') {
      if(! value.match(/^[A-Z]/)) {
        displayError(name,"should starts with uppercase");
        return false;
      } else if( value.length < 5){
        displayError(name,"minimum 5 characters");
        return false;
      } else {
        displayError(name,"");
        return true;
      }
    }
}

function validateStudent(name,value) {
    if(! name) return;
    if(name === 'name') {
      if(! value.match(/^[A-Z]/)) {
        displayError(name,"should starts with uppercase");
        return false;
      } else if( value.length < 5){
        displayError(name,"minimum 5 characters");
        return false;
      } else {
        displayError(name,"");
        return true;
      }
    }
    if(name === 'phone') {
      if(! (value + "").match(/^[6-9][0-9]{9}$/)) {
        displayError(name,"Invalid phone number");
        return false;
      } else{
        displayError(name,"");
        return true;
      }
    }
}
