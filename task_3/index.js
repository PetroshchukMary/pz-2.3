let center = document.createElement('center');

let ChessTable = document.createElement('table');
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for (let i = 0; i < 10; i++) {

    let tr = document.createElement('tr');
    if(i === 0 || i === 9){
        for (let c = 0; c < 10; c++){
            let td = document.createElement('td');
            if(c !== 0){
                td.textContent = chars[c-1];
            }
            td.setAttribute('class', 'cell char-cell');
            if(i === 0){
                td.classList.add('reverse');
            }
            tr.appendChild(td);
        }
    }else {
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            if(j === 0 || j === 9){
                td.textContent = 9-i;
                td.setAttribute('class', 'cell char-cell');
                if(j === 9){
                    td.classList.add('reverse');
                }
            } else {

                if(i === 2){
                    td.style.backgroundImage = 'url("img/blackPawn.png")';
                }else if(i === 7){
                    td.style.backgroundImage = 'url("img/whitePawn.png")';
                }else if (i === 1){
                    if(j === 1 || j === 8){
                        td.style.backgroundImage = 'url("img/blackRook.png")';
                    }else if(j === 2 || j === 7){
                        td.style.backgroundImage = 'url("img/blackKnight.png")';
                    }else if(j === 3 || j === 6){
                        td.style.backgroundImage = 'url("img/blackBishop.png")';
                    }else if(j === 4){
                        td.style.backgroundImage = 'url("img/blackQueen.png")';
                    }else {
                        td.style.backgroundImage = 'url("img/blackKing.png")';
                    }
                }else if(i === 8){
                    if(j === 1 || j === 8){
                        td.style.backgroundImage = 'url("img/whiteRook.png")';
                    }else if(j === 2 || j === 7){
                        td.style.backgroundImage = 'url("img/whiteKnight.png")';
                    }else if(j === 3 || j === 6){
                        td.style.backgroundImage = 'url("img/whiteBishop.png")';
                    }else if(j === 4){
                        td.style.backgroundImage = 'url("img/whiteQueen.png")';
                    }else {
                        td.style.backgroundImage = 'url("img/whiteKing.png")';
                    }
                }

                if ((i + j) % 2 == 0) {
                    td.setAttribute('class', 'cell whitecell');
                    tr.appendChild(td);
                } else {
                    td.setAttribute('class', 'cell blackcell');
                }
            }
            tr.appendChild(td);
        }
    }

    ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

ChessTable.setAttribute('cellspacing', '0');
document.body.appendChild(center);