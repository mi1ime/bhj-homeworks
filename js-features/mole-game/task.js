let killCount = document.getElementById('dead').textContent;
let missCount = document.getElementById('lost').textContent;

getHole = index => document.getElementById(`hole${index}`);

for (index = 1; index < 9; index++) {
    let currentHole = getHole(index);
    currentHole.onclick = function() {
        if (currentHole.className.includes( 'hole_has-mole' )) {
            killCount++;
            document.getElementById('dead').textContent = killCount;
            if (killCount === 10) {
                alert('Победа!');
                killCount = 0;
                missCount = 0;
                document.getElementById('dead').textContent = killCount;
                document.getElementById('lost').textContent = missCount;
            }
            return;
        } else {
            missCount++;
            document.getElementById('lost').textContent = missCount;
            if (missCount === 5) {
                alert('Вы проиграли!');
                killCount = 0;
                missCount = 0;
                document.getElementById('dead').textContent = killCount;
                document.getElementById('lost').textContent = missCount;
            }
            return;
        }   
    }
}

