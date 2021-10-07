let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');

let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');

let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});



formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


// function myfunc(){
//     var first = document.getElementById("checkIn").value;
//     var second =document.getElementById("checkOut").value;
//     if(first > second){
//     alert("please select correct date");
//     }else{
//     document.getElementById("checkOut").min = first;
//     }
// }

function myfunc() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
}


function pric(){
    var select = document.getElementById('cars');
    var value = select.options[select.selectedIndex].value;
    
    var guest = parseFloat(document.getElementById("pepole").value);
    
    if(value === "Mumbai"){
        const add = document.getElementById("tprice").value= "980.00" ;
        const c = add*guest;
        document.getElementById("tprice").value= c ;
        
    }else if(value === "Paris"){
        const add = document.getElementById("tprice").value= "720.00" ;
        const c = add*guest;
        document.getElementById("tprice").value= c ;

    }else if(value === "Germany"){
        const add = document.getElementById("tprice").value= "850.00" ;
        const c = add*guest;
        document.getElementById("tprice").value= c ;

    }else if(value === "Egypt"){
          const add = document.getElementById("tprice").value= "500.00" ;
        const c = add*guest;
        document.getElementById("tprice").value= c ;

    }else if(value === "Maldeev"){
        const add = document.getElementById("tprice").value= "400.00" ;
        const c = add*guest;
        document.getElementById("tprice").value= c ;
    }

}

function con(){
    document.getElementById("msgbox").style.display = "block";
    setTimeout(function(){ 
        document.getElementById("msgbox").style.display = "none";
        }, 3000);
        document.getElementById("row1").value = '';
        document.getElementById("row2").value = '';
        document.getElementById("row3").value = '';
        document.getElementById("row4").value = '';
        document.getElementById("row5").value = '';
        
}

function togglepopup() {
    document.getElementById("popap-1").classList.toggle("active");
}



//scroll button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 250px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.documentElement.scrollTop > 250) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.documentElement.scrollTop = 0;
// }
