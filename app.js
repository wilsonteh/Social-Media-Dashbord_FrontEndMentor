let body = document.body
let toggle = body.querySelector('#switch');

 
// Consoling // 
console.dir(toggle);

toggle.addEventListener('change', function() {
    body.classList.toggle('dark-theme');
})