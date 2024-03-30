let rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach ((rotator, i) => {

    let active = rotator.querySelector('.rotator__case_active');
    let textColor = active.getAttribute('data-color');
    active.style.color = textColor;
    let timeout = active.getAttribute('data-speed');

    function rotate() {
        if (active.classList.contains('rotator__case_active')) {

            active.classList.remove('rotator__case_active');
                    
            if (active.nextElementSibling === null) {
                active = rotator.firstElementChild;
            } else {
                active = active.nextElementSibling;
            }

            active.classList.add('rotator__case_active');
            textColor = active.getAttribute('data-color');
            active.style.color = textColor;
            timeout = active.getAttribute('data-speed');
                
        }

        setTimeout(rotate, timeout);
    }

    setTimeout(rotate, timeout);

})

