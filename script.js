function screensize(){

    const head = document.getElementById("sizeInfo");
    const w = window.innerWidth;
    const h =window.innerHeight;
    head.innerHTML = `<h1>Width: ${w} and Height: ${h} </h1>`;
    
    

}

window.addEventListener("resize",screensize);

screensize();