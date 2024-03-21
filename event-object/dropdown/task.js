let dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));

let dropdowns = Array.from(document.querySelectorAll('.dropdown__list'));

let dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValues.forEach ((value, i) => {

    value.onclick = () => {

        dropdowns[i].classList.toggle('dropdown__list_active');
        
        dropdownItems.forEach ((item) => {
        item.onclick = () => {
            value.textContent = item.textContent;
            dropdowns[i].classList.toggle('dropdown__list_active');
            return false;
        }
    })

    }
    
})

