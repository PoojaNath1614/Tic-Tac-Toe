const xo = document.getElementById("xo");
const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const b13 = document.getElementById("b13");
const b21 = document.getElementById("b21");
const b22 = document.getElementById("b22");
const b23 = document.getElementById("b23");
const b31 = document.getElementById("b31");
const b32 = document.getElementById("b32");
const b33 = document.getElementById("b33");

function changexo() {
    if (xo.innerText == "X") {
        xo.innerText = "O";
    } else {
        xo.innerText = "X";
    }
}


function result() {
    const arr = [[b11.innerText, b12.innerText, b13.innerText], [b21.innerText, b22.innerText, b23.innerText],
    [b31.innerText, b32.innerText, b33.innerText], [b11.innerText, b22.innerText, b33.innerText],
    [b13.innerText, b22.innerText, b31.innerText], [b11.innerText, b21.innerText, b31.innerText],
    [b12.innerText, b22.innerText, b32.innerText], [b13.innerText, b23.innerText, b33.innerText]];
    for(let i=0;i<arr.length;i++){
        if(arr[i][0]==xo.innerText && arr[i][0]===arr[i][1] && arr[i][1]===arr[i][2] ){
            const player = xo.innerText;
            setTimeout(()=>{
                alert(player+" wins");
                window.location.reload();
            },0);
            
            break;
        }
    }
}
b11.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b11.disabled = true;
    result();
    changexo();
});
b12.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b12.disabled = true;
    result();
    changexo();
   
});
b13.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b13.disabled = true;
    result();
    changexo();
  
});
b21.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b21.disabled = true;
    result();
    changexo();
    
});
b22.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b22.disabled = true;
    result();
    changexo();
   
});
b23.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b23.disabled = true;
    result();
    changexo();
    
    
});
b31.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b31.disabled = true;
    result();
    changexo();
   
    
});
b32.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b32.disabled = true;
    result();
    changexo();
   
});
b33.addEventListener('click', (e) => {
    e.target.innerText = xo.innerText;
    b33.disabled = true;
    result();
    changexo();
});
