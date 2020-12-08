let isGame = true
const stopGame = (n) => {
    isGame = false;
    setTimeout(() => {
        alert(n + ' is winner')
        isWin = true
    }, 5);
}
const columns = document.querySelectorAll('.case');
let xo = 1
let count=0
let cases={
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9
}
let locked = {
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false
}
let o = 0
function winGame (n){
    if (xo == 1 && locked[n] == false){
        cases[n] = 'x'
        locked[n] = true
        columns[n-1].classList.add('x')
        xo--
        count++
    }
    else if(xo==0 && locked[n] == false){
        cases[n] = 'o'
        columns[n-1].classList.add('zero')
        locked[n]= true
        xo++
        count++
    }
    if (cases [1] == cases[2] && cases[2] == cases[3] && cases[3]=='x' ||
    cases[4] == cases[5] &&cases [5]== cases[6] && cases[6] =='x'||
    cases[7] == cases[8] && cases[8] == cases[9] && cases[9]=='x'||
        cases[1] == cases[5] && cases[5] == cases[9] && cases[9]=='x'||
        cases[3] == cases[5] && cases[5] == cases[7] && cases[7]=='x'||
        cases[2]==cases[3] && cases[3] == cases[5] && cases[5] =='x'||
        cases[1]==cases[4] && cases[4] == cases[7] && cases[7] =='x'||
        cases[3]==cases[6] && cases[6] == cases[9] && cases[9] =='x')
        {
            stopGame('x')

        }
    else if (cases [1] == cases[2] && cases[2] == cases[3] && cases[3]=='o' ||
    cases[4] == cases[5] &&cases [5]== cases[6] && cases[6] =='o'||
    cases[7] == cases[8] && cases[8] == cases[9] && cases[9]=='o'||
    cases[1] == cases[5] && cases[5] == cases[9] && cases[9]=='o'||
    cases[3] == cases[5] && cases[5] == cases[7] && cases[7]=='o'||
    cases[2]==cases[3] && cases[3] == cases[5] && cases[5] =='o'||
    cases[1]==cases[4] && cases[4] == cases[7] && cases[7] =='o'||
    cases[3]==cases[6] && cases[6] == cases[9] && cases[9] =='o')
    {
        stopGame('o')
    }

    {
        
        if(count==9 && isWin != true) {
            setTimeout(() => {
                alert('Ничья')
            }, 5);
        }
    }
}
