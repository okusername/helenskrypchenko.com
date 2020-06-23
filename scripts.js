



// CHANGE SLIDES ON MAIN SCREEN

var count = 1; 

function mySlidesLoaded(){
    ++count;
    // console.log(count);
    if (count === 8){
        carousel();
        return count;
    }
}

var myIndex = 0;

function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
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