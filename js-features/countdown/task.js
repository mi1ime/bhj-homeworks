function timerDown() {
    const date = new Date;
    const startTimerValue = date.setHours(0, 0, document.getElementById('timer').textContent, 0);

    document.getElementById('timer').textContent = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0');


        let intervalId = setInterval(() => {
        if (date.getSeconds() > 0 || date.getMinutes() > 0 || date.getHours() > 0) {

            let seconds = date.getSeconds();
            seconds = seconds - 1;
            date.setSeconds(seconds);

            let newTimerValue = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0');

            return document.getElementById('timer').textContent = newTimerValue;
        }
        clearInterval(intervalId);

        location.assign('qt_ru.qm');

        return alert("Вы победили в конкурсе!");
    }, 1000)
 }

timerDown();