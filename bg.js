const body = document.querySelector("body");

const IMG_NUMBER = 3;


// function handleImgLoad(){
//     console.log("finished log")
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `imgs/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener("loadend",handleImgLoad)

    // body.style.backgroundRepeat = "no-repeat";
    // body.style.backgroundImage = `url('imgs/${imgNumber + 1}.jpg')`;
    // body.style.backgroundSize = "100%";
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();