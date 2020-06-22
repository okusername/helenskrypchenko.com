



// CHANGE SLIDES ON MAIN SCREEN

var count = 1; // start after all images loaded

function mySlidesLoaded(){
    ++count;
    console.log(count);
    if (count === 8){
        return count;
    }
}

// console.log(count);

var myIndex = 0; // main function
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length && count === 8) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  

    setTimeout(carousel, 1000);
}




// SHOW BURGER MENU

function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}