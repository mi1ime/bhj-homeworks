const reveals = document.querySelectorAll('.reveal');

reveals.forEach((reveal, i) => {
    document.addEventListener('scroll', () => {
        function onPage(el) {
            const {top, bottom} = el.getBoundingClientRect();
        
            if (bottom < 0) {
                el.className = 'reveal';
                return;
            }
            if (top > window.innerHeight) {
                el.className = 'reveal';
                return;
            }
            el.className = 'reveal reveal_active';
        }

        onPage(reveal);
    })
})

    




