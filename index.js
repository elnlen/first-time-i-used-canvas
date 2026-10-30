const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
context.fillStyle = 'black';

let x= 0, y = 0;
let isBlack = true;


for (let i = 1; i <= 100; i++) {
    for(let j = 1; j <= 100; j++) {

        /*スイカ柄にできる*/
        /*
        context.fillStyle = isBlack ? 'green' : 'black';
        isBlack = !isBlack;
        */
        /*市松模様*/
        if((i+j) % 2 == 0) {
            context.fillStyle = 'black';
        } else {
            context.fillStyle = 'green';
        }
        context.fillRect(x,y,10,10);
        x += 10;
    }
    x = 0;
    y += 10;
}
