let input = document.querySelector('#bin2dec');
let button = document.querySelector('.button');
let result = document.querySelector('.result');
let resultBox = document.querySelector('.resultBox');
let resultTitle = document.querySelector('.title');

function convert() {
    let check = input.value.split('').some(element => {
        return element > 1;
    })

    if (input.value.length > 8) {
        resultBox.style.backgroundColor = 'rgb(240, 180, 170)';

        resultTitle.innerHTML = '';
        result.innerHTML = 'Insira no máximo 8 caracteres no campo';

    } else if (check == true) {
        resultBox.style.backgroundColor = 'rgb(240, 180, 170)';

        resultTitle.innerHTML = '';
        result.innerHTML = 'Apenas valores binários são permitidos (0 e 1)';

    } else {
        let reverted = input.value.split('').reverse();
        let sum = 0;
        let square = 1;

        reverted.forEach((element, index) => {
            if (element == 1) {
                sum += element * square;
            }

            square += square
        });
        

        resultBox.style.backgroundColor = 'rgb(220, 240, 230)';
        resultTitle.innerHTML = 'Resultado:';
        result.innerHTML = sum;
    }

}

// 128  64  32  16   8   4   2   1
//   0   0   0   0   0   0   0   0

// Reverted
//   1   2   4   8  16  32  64 128 (soma)
//   0   1   2   3   4   5   6   7 (index)
//   1   2   3   4   5   6   7   8 (index + 1)
//   0   0   0   0   0   0   0   0 (binário)