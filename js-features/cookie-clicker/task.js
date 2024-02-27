let clickerCounter  = document.getElementById('clicker__counter').textContent;
let сookie = document.getElementById('cookie');

let timeClick = new Date();

сookie.onclick = function() {
    let currentTime = new Date();
    timeInterval = currentTime - timeClick;
    timeClick = currentTime;
    
    if (сookie.width === 200) {
        сookie.width = сookie.width + 50;
    } else {
        сookie.width = сookie.width - 50;
    }
    clickerCounter++;
    document.getElementById('clicker__counter').textContent = clickerCounter;

    document.getElementById('clicker__lastClickSpeed').textContent = (1 / timeInterval * 1000).toFixed(2);
    return;
}