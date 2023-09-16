let increasing = true
const box = document.querySelectorAll('.menu')
const icon = document.querySelectorAll('.menu-icon')

icon.forEach((icon, In1) => {
    icon.addEventListener('click', () => {
        if (increasing) {
            box[In1].style.margin = '10em auto'
        } else {
            box[In1].style.margin = 'auto'
        }

        increasing = !increasing
    
    icon.classList.toggle('arriba', increasing)
    icon.classList.toggle('abajo', !increasing)
    })
});
