function showNav(){
    document.getElementById('navbarNav').className == "collapse navbar-collapse" ? document.getElementById('navbarNav').className = "navbar-collapse" : document.getElementById('navbarNav').className = "collapse navbar-collapse"
    // Have to put this in because fuck knows why my bootstrap is railing me rn
}

window.onscroll = function() {
    document.querySelectorAll('.fag').forEach((e)=>{
        e.style.marginTop = "11vw";
        e.style.opacity = "1";
    })
}
