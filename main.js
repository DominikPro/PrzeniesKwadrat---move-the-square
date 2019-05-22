const div = document.querySelector("div");

let divX = 150;
let divY = 50;
div.style.left = divX + "px";
div.style.top = `${divY}px`;

let pozycjaPrzyciskuMyszki = false;
let divPozycjaX
let divPozycjaY

div.addEventListener("mousedown", funkcjaZmianaKoloruNaMousedown);
div.addEventListener("mouseup", funkcjaZmianaKoloruNaMouseUp);


function funkcjaZmianaKoloruNaMousedown(e) {
    div.style.backgroundColor = "gray";
    pozycjaPrzyciskuMyszki = !pozycjaPrzyciskuMyszki;
    divPozycjaX = e.offsetX;
    divPozycjaY = e.offsetY;
};

div.addEventListener("mousemove", (e) => {
    if (pozycjaPrzyciskuMyszki) {
        console.log("funckjaMouseMove dział")
        divX = e.clientX - divPozycjaX;
        divY = e.clientY - divPozycjaY;
        div.style.left = divX + "px";
        div.style.top = divY + "px";
    }
})

function funkcjaZmianaKoloruNaMouseUp() {
    div.style.backgroundColor = "black";
    pozycjaPrzyciskuMyszki = !pozycjaPrzyciskuMyszki;
}