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
  document.getElementById("mySidenav").style.width = "250px"
  // document.getElementById("mySidenav").style.width = "100%"
  document.getElementById("main").style.marginRight = "250px"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
  document.getElementById("main").style.marginRight= "0"
}


const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }
})

function myFunction() {
  var x = document.getElementById("myLinks")
  if (x.style.display === "block") {
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}

