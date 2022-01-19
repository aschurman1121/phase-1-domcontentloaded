// Your code goes here


// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");

    
// })


// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );
  

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");

    document.querySelector('p').textContent = "This is really cool!" 
    
})

//DOM content loaded does not wait for stylesheets and images to load
