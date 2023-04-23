// document.getElementById("count-el").innerText = 5;

// initialize the count as 0;
let count = 0;

let saveEl  = document.getElementById("save-el")

//listen for clicks on the increment button
function increment(){
    //increment the count variable when the button is clicked (log it out);
    count += 1;
    // change the count-el in the HTML to reflect the new count;
    document.getElementById('count-el').innerText = count;
    // console.log(count);
}

// document.getElementById('count-el').innerHTML = count;
// Should inside the function 


function save(){
    let entries = count + " - "
    console.log(entries);
    saveEl.textContent += entries  //innerText alternative MDN

    console.log(count);
    count = 0;
    document.getElementById('count-el').innerText = count;
}

// save();

///////////           PRACTICE       ////////////////
// let username = "per";
// let message = "You have tree new notifications"

// // console.log(message + ', ' + username + "!");
// let messageToUser = message + ', ' + username + "!";
// console.log(messageToUser);

let myGreeting = greeting + name;
console.log(myGreeting);

let welcomeEl = document.getElementById("welcome-el");
let name = "Jaejeong";
let greeting = "Welcome back";
welcomeEl.innerText = greeting + " " + name;
welcomeEl.innerText += "👋"

