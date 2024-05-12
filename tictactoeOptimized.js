const xo = document.getElementById("xo");
const btns = document.getElementsByClassName("btns");

function changexo(e) {
    
    e.target.innerText = xo.innerText;
    e.target.disabled = true;
    if (xo.innerText == "X") {
        xo.innerText = "O";
    } else {
        xo.innerText = "X";
    }
}

for(let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', changexo);    
}