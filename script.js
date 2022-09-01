let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
;

function createAndColor(color){
let body = document.getElementsByTagName('body');
let newSquare = document.createElement('div');
newSquare.style.width= '11.1%'
newSquare.style.paddingBottom = '11.1%'
newSquare.style.cssFloat = 'left'
newSquare.style.backgroundColor = color;
document.body.appendChild(newSquare)
}
for (let i = 0; i < 81; i++){
    if(i % 2 !== 0){
        createAndColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    } else if (i % 2 === 0){
        createAndColor((`#${Math.floor(Math.random()*16777215).toString(16)}`));
    }
    
    

}