let a = document.getElementById("hai")
let c = document.getElementById("woi")
let cv = document.getElementById("cv")
let rg = document.getElementById("rg")
let clickCount = 0
let klik = 0
a.onclick = function(){
    clickCount++
    let b = document.createElement("img")
    b.src = "https://cdn2.iconfinder.com/data/icons/hand-gestures-28/128/hand-wave-1024.png"
    b.id = "wave"
    c.appendChild(b)

    for(let i=0; i< 100; i++){
        setTimeout(function() {
            b.style.transform = "rotate(45deg)";
        }, 500*i);
        setTimeout(function() {
            b.style.transform = "rotate(90deg)";
        }, 600*i);
        setTimeout(function() {
            b.style.transform = "rotate(45deg)";
        }, 700*i);
    }

    if(clickCount > 1){
        alert("cukup cok wes")
        c.removeChild(b)
    }
}
cv.onclick = function(){
    window.location.href = "https://www.rottentomatoes.com/celebrity/ryan_gosling"
}

rg.onclick = function(){
    klik++
    let apen =document.getElementById("apen")
    let gambar = document.createElement("img")
    gambar.id = "ft"
    setTimeout(function(){
        gambar.src = "rg1.jpg"
        apen.appendChild(gambar)
    },1000)
    setTimeout(function(){
        gambar.src = "rg2.jpg"
        apen.appendChild(gambar)
    },3000)
    setTimeout(() => {
        apen.removeChild(gambar)
    }, 5000);

    if(klik > 1){
        alert("sudah cukup")
    }
    
    
}
