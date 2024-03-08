let tabNavigation = document.querySelector('.tab__navigation');
let tabs = Array.from(tabNavigation.querySelectorAll('.tab'));

let tabContents = document.querySelector('.tab__contents');
let allTabsContent = Array.from(tabContents.querySelectorAll('.tab__content'));

tabs.forEach ((tab, i) => {
    tab.onclick = () => {
        let currentActiveTab = document.querySelector('.tab_active');
        currentActiveTab.className = 'tab';

        tab.className = 'tab tab_active';

        let currentActiveContent = document.querySelector('.tab__content_active');
        currentActiveContent.className = 'tab__content';
        
        allTabsContent[i].className = 'tab__content tab__content_active';

    }
    
})
