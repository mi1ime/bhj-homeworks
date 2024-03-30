let fontSizes = Array.from(document.querySelectorAll('.font-size'));

let controlFontColor = document.querySelector('.book__control_color');
let fontColors = Array.from(controlFontColor.querySelectorAll('.color'));

let controlBgColor = document.querySelector('.book__control_background');
let bgColors = Array.from(controlBgColor.querySelectorAll('.color'));

let book = document.querySelector('.book');

fontSizes.forEach((fontSize, i) => {
    fontSize.onclick = () => {
            let fontSizeActive = document.querySelector('.font-size_active');
            fontSizeActive.classList.remove('font-size_active');
            
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');

            fontSize.classList.add('font-size_active');

            let currentFontSize = fontSize.getAttribute('data-size');
            book.classList.add(`book_fs-${currentFontSize}`);

            return false;
    }
})


fontColors.forEach((fontColor, i) => {
    fontColor.onclick = () => {
            let fontColorActive = controlFontColor.querySelector('.color_active');
            fontColorActive.classList.remove('color_active');

            book.classList.remove('book_color-black');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');

            fontColor.classList.add('color_active');

            let currentFontColor = fontColor.getAttribute('data-text-color');
            book.classList.add(`book_color-${currentFontColor}`);

            return false;
    }
})

bgColors.forEach((bgColor, i) => {
    bgColor.onclick = () => {
            let bgColorActive = controlBgColor.querySelector('.color_active');
            bgColorActive.classList.remove('color_active');

            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');

            bgColor.classList.add('color_active');

            let currentBgColor = bgColor.getAttribute('data-bg-color');
            book.classList.add(`book_bg-${currentBgColor}`);

            return false;
    }
})