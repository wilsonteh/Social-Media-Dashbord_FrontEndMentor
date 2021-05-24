let body = document.body
let toggle = body.querySelector('#switch');
let statsUpdate = body.querySelectorAll('.box .update span');

let limeGreen = 'hsl(163, 72%, 41%)';
let brightRed = 'hsl(356, 69%, 56%)';

// Apply color and arrow of stats update dynamically 
const applyStatsColor = () => {
    for (let stat of statsUpdate) {
        let number = stat.innerText
        let arrow = stat.previousElementSibling;

        // if number is +ve, apply arrow UP and color GREEN
        if (number >= 0) {
            stat.parentElement.style.color = limeGreen;
            // insert arrow icon
            arrow.setAttribute('src', './images/icon-up.svg');

        } else if (number < 0) {   // if number is -ve, apply arrow DOWN and color RED
            stat.parentElement.style.color = brightRed;
            // insert arrow icon
            arrow.setAttribute('src', './images/icon-down.svg');
            // remove '-ve' sign
            stat.innerHTML = number.replace('-', '');
        }
    }
}

applyStatsColor()

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
})