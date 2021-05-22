let cells = document.querySelectorAll('.item');
var cnt = 1;
let flag = 0;
cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        if (flag == 1) location.reload();
        if (cnt % 2 == 0) e.target.textContent = 'O';
        else e.target.textContent = 'X';
        cnt++;
        var temp = 0;
        for(var i = 0; i < 9; i++){
            if(cells[i].innerText == 'O' || cells[i].innerText == 'X') temp++;
        }

        //when X win
        if (cells[0].innerText == 'X' && cells[1].innerText == 'X' && cells[2].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[3].innerText == 'X' && cells[4].innerText == 'X' && cells[5].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[0].innerText == 'X' && cells[3].innerText == 'X' && cells[6].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[1].innerText == 'X' && cells[4].innerText == 'X' && cells[7].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[2].innerText == 'X' && cells[5].innerText == 'X' && cells[8].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[6].innerText == 'X' && cells[7].innerText == 'X' && cells[8].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[2].innerText == 'X' && cells[4].innerText == 'X' && cells[6].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        } else if (cells[0].innerText == 'X' && cells[4].innerText == 'X' && cells[8].innerText == 'X') {
            document.querySelector('p').innerText = 'X Win!';
            flag = 1;
        }

        //when O win
        if (cells[0].innerText == 'O' && cells[1].innerText == 'O' && cells[2].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[3].innerText == 'O' && cells[4].innerText == 'O' && cells[5].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[0].innerText == 'O' && cells[3].innerText == 'O' && cells[6].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[1].innerText == 'O' && cells[4].innerText == 'O' && cells[7].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[2].innerText == 'O' && cells[5].innerText == 'O' && cells[8].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[6].innerText == 'O' && cells[7].innerText == 'O' && cells[8].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[2].innerText == 'O' && cells[4].innerText == 'O' && cells[6].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        } else if (cells[0].innerText == 'O' && cells[4].innerText == 'O' && cells[8].innerText == 'O') {
            document.querySelector('p').innerText = 'O Win!';
            flag = 1;
        }
        else if(temp == 9 && flag == 0){
            document.querySelector('p').innerText = 'Draw!';
            flag = 1;
        }
    });
})