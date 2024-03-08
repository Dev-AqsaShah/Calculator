 
document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('nputBox');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.innerHTML === '=') {
                try {
                    input.value = eval(input.value);
                } catch (err) {
                    input.value = 'Error';
                }
            } else if (button.innerHTML === 'AC') {
                input.value = '';
            } else if (button.innerHTML === 'DEL') {
                input.value = input.value.slice(0, -1);
            } else {
                input.value += button.innerHTML;
            }
        });
    });
});
