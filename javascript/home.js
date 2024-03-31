function showNav(){
    document.getElementById('navbarNav').className == "collapse navbar-collapse" ? document.getElementById('navbarNav').className = "navbar-collapse" : document.getElementById('navbarNav').className = "collapse navbar-collapse"
    // Have to put this in because fuck knows why my bootstrap is railing me rn
}

let switchCount = 0;
function switchCarasoul(){
    switchCount == 33 ? switchCount = 1 : switchCount++
    document.getElementById("carasoul").style.backgroundImage = `url(./images/hanging${switchCount}.jpeg)`;
}

setInterval(switchCarasoul, 1000);