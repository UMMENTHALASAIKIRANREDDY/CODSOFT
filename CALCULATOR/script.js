const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',    () => {
        const value = button.dataset.value;
        if    (value === 'AC') {
            display.textContent = '0';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            display.textContent += value;   
        }
    });
});