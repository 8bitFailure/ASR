function showNav(){
    document.getElementById('navbarNav').className == "collapse navbar-collapse" ? document.getElementById('navbarNav').className = "navbar-collapse" : document.getElementById('navbarNav').className = "collapse navbar-collapse"
    // Have to put this in because fuck knows why my bootstrap is railing me rn
}

for (let i = 1; i < 34; i++) {
    document.getElementById('seggs').innerHTML += `
    <img class="seggsSesh" src="./images/hanging${i}.jpeg" alt="seggs">
    `
}

window.onscroll = function() {
    document.querySelectorAll('.seggsSesh').forEach((e)=>{
        e.style.marginLeft = "0vw";
    })
}