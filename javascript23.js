let ID={
    "Swapna":"Love You"}

let m=0;
let n=0;

let imagesdic=["swapna321.jpg","swapna12345.jpg","swapna1.jpg","swapna2.jpg"]
let musicdic=["humma.mp3","sometimes.mp3"]

function click1(){
    let name=document.getElementById("username").value;
    let passw=document.getElementById("pass").value;

    if(ID[name] && ID[name]==passw){
        window.open("Imagesofswapna.html","_self");
    }
    else{
        alert("Invalid password");
    }

}



function click2() {
    var image = document.getElementById("img1");
    var musicpl=document.getElementById("audioplay")

    m = (m + 1) % imagesdic.length; // Increment m and wrap around using modulus
    n = (n + 1) % musicdic.length;
            musicpl.src = musicdic[n];
            musicpl.load();
            musicpl.play();
    image.src = imagesdic[m];
   
}



