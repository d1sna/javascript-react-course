window.addEventListener('DOMContentLoaded', () => {
    // Tabs

    let infoHeaderItems = document.querySelectorAll('.info-header-tab'),
        info = document.querySelectorAll('.info-tabcontent'),
        descriptionBtns = document.querySelectorAll('.description-btn'),
        a = 0;

    hideAnother();

    for (let i = 0; i < descriptionBtns.length; i++) {
        descriptionBtns[i].addEventListener('click', showModalWindow);
    }

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
            if (i == a) {
                continue;
            }
            info[i].classList.remove('show');
            info[i].classList.add('hide');
        }
    }

    // Timer

    let deadline = '2020-04-29';

    function getDifferinceTime(endTime) {
        let total = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor(total / 1000 / 60 / 60);
        return {
            total,
            seconds,
            minutes,
            hours
        };
    }

    function setClock(endTime) {
        let hoursValue = document.querySelector('.hours'),
            minutesValue = document.querySelector('.minutes'),
            secondsValue = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getDifferinceTime(endTime);
            if (t.total > 0) {

                if (t.hours < 10) {
                    hoursValue.textContent = '0' + t.hours;
                } else {
                    hoursValue.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutesValue.textContent = '0' + t.minutes;
                } else {
                    minutesValue.textContent = t.minutes;
                }
                if (t.seconds < 10) {
                    secondsValue.textContent = '0' + t.seconds;
                } else {
                    secondsValue.textContent = t.seconds;
                }



                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            } else {
                hoursValue.textContent = '00';
                minutesValue.textContent = '00';
                secondsValue.textContent = '00';
            }
        }
    }
    setClock(deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', showModalWindow);
    close.addEventListener('click', closeModalWindow);

    function showModalWindow() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function closeModalWindow() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    // Form

    let message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Извините, произошла ошибка.'
    };

    let form = document.querySelector('.main-form'),
        statusMessage = document.createElement('div'),
        inputs = form.getElementsByTagName('input');

    console.log(inputs);

    statusMessage.classList.add('status');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        let formData = new FormData(form),
            request = new XMLHttpRequest(),
            obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4) {
                statusMessage.textContent = message.succes;
            } else {
                statusMessage.textContent = message.failure;
            }
        });

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    });

    let emailForm = document.getElementById('form'),
        emailFormInputs = emailForm.getElementsByTagName('input');
    console.log(emailForm);

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        emailForm.appendChild(statusMessage);

        let formData = new FormData(emailForm),
            request = new XMLHttpRequest(),
            obj = {};

        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        console.log(formData);

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4) {
                statusMessage.textContent = message.succes;
            } else {
                statusMessage.textContent = message.failure;
            }
        });

        for (let i = 0; i < emailFormInputs.length; i++) {
            emailFormInputs[i].value = '';
        }
    });


});