let dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));

let dropdowns = Array.from(document.querySelectorAll('.dropdown__list'));

let dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValues.forEach ((value, i) => {

    value.onclick = () => {

        dropdowns[i].className = 'dropdown__list dropdown__list_active';
        
        dropdownItems.forEach ((item) => {
        item.onclick = () => {
            value.textContent = item.textContent;
            dropdowns[i].className = 'dropdown__list';
            return false;
        }
    })

    }
    
})

