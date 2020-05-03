window.addEventListener("scroll", function(){
    let menuArea = this.document.getElementById('menu-area')

    if(window.pageYOffset > 0){
        menuArea.classList.add("cus-nav")
    }else{
        menuArea.classList.remove("cus-nav")
    }
})


// Side navbar pushing out from the right
function openNav() {
  document.getElementById("mySidenav").style.width = "187px";
  // document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginRight = "187px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// function openNav() {
//     document.getElementById("mySidenav").style.width = "230px";
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

// function openNav() {
//     document.getElementById("mySidenav").style.width = "230px";
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

//   function myFunction(x) {
//     x.classList.toggle("change")
//   }


// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 50) {
//         $(".header").addClass("active");
//     } else {
//         //remove the background property so it comes transparent again (defined in your css)
//        $(".header").removeClass("active");
//     }
// });
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

