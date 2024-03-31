// List of Users
let retards = ["Wang Zuxi", "Tze Kye", "Javier", "Xuan He", "Zhi Chuen", "Crystal", "Aldrin", "Chang Kai"];
let pp = ["69696969-1", "InthEbenInging23", "500000000000-2506195", "696969-0.04", "66666-0", "69", "170569-6", "1234566"]


// Fake loading screen lol
setTimeout(()=>{
    document.getElementById('loadingScreen').style.marginTop = '69vh';
    document.getElementById('loadingScreen').style.opacity = 0;
},2000)
setTimeout(()=>{
    document.getElementById('loadingScreen').style.display = 'none';
},2700)


function verify(){
    console.log(retards.indexOf(document.getElementById('Username').value));
    console.log(pp.indexOf(document.getElementById('penisSize').value));

    if(retards.indexOf(document.getElementById('Username').value) != pp.indexOf(document.getElementById('penisSize').value)){
        if(!retards.includes(document.getElementById('Username').value))
        {
            document.getElementById('errorMsg').innerHTML = "This ain't it bro :/";
        }
        else if(!pp.includes(document.getElementById('penisSize').value))
        {
            document.getElementById('errorMsg').innerHTML = "Did you over-estimate your penis size? :(";
        }
        else{
            document.getElementById('errorMsg').innerHTML = "Do you forget all your passwords like this? :(";
        }
    }
    else if(retards.includes(document.getElementById('Username').value) && pp.includes(document.getElementById('penisSize').value) && retards.indexOf(document.getElementById('Username').value) == pp.indexOf(document.getElementById('penisSize').value)){
        window.location.href = 'home.html';
    }
    else{
        document.getElementById('errorMsg').innerHTML = "How did you get it both wrong? God blast you man &#128591";
        setTimeout(()=>{
            window.location.href = 'https://findachurch.sg/';
        }, 1100)
    }
}