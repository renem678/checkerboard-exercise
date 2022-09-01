let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
;
function addGradient(){
    let gradient = document.createElement('div');
    gradient.style.width = '100%';
    gradient.style.height = '100%';
    gradient.style.background = "linear-gradient(to right, rgba(27, 71, 45, 0.84), rgba(6, 72, 165, 0.84 100%)";
    gradient.style.zIndex = "2";
    gradient.style.position = "fixed";
    document.body.appendChild(gradient);
}
function createAndColor(color){
let body = document.getElementsByTagName('body');
let newSquare = document.createElement('div');
newSquare.style.width= '11.1%'
newSquare.style.paddingBottom = '11.1%'
newSquare.style.cssFloat = 'left'
newSquare.style.backgroundColor = color;
document.body.appendChild(newSquare)
}
addGradient();
for (let i = 0; i < 81; i++){
    if(i % 2 !== 0){
        createAndColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    } else if (i % 2 === 0){
        createAndColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }
    
    

}

