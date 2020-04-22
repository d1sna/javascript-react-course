window.addEventListener('DOMContentLoaded', () => {
    let infoHeaderItems = document.querySelectorAll('.info-header-tab'),
        info = document.querySelectorAll('.info-tabcontent'),
        a = 0;

    hideAnother();

    for (let i = 0; i < infoHeaderItems.length; i++) {
        infoHeaderItems[i].addEventListener('click', () => {
            a = i;
            info[a].classList.add('show');
            info[a].classList.remove('hide');
            hideAnother();
        });
    }

    function hideAnother() {
        for (let i = 0; i < info.length; i++) {
            if (i == a) continue;
            info[i].classList.remove('show');
            info[i].classList.add('hide');
        }
    }
});