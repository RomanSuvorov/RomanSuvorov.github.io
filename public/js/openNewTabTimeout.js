let interval;
let secondsLeft = 4;
const URL = 'https://www.youtube.com/watch?v=mbov4Rs0F3k';
document.addEventListener('DOMContentLoaded', () => {
    let bodySelector = document.getElementsByTagName('body')[0];
    bodySelector.style.backgroundColor = 'rgb(78,119,5)';
    bodySelector.style.color = '#ded9d9';
    console.info('DOM loaded successful');
    
    const timerWrapper = document.getElementsByClassName('timerWrapper')[0];
    const buttonStop = window.document.createElement('button');
    buttonStop.classList.add('btn_stop');
    timerWrapper.append(buttonStop);
    // bodySelector.append()
    
    // const isBlocked = checkIsPopupBlocked();
    // console.log('isBlocked', isBlocked);
    // if (isBlocked) {
    //     const errorSelector = document.getElementsByClassName('error')[0];
    //
    //     errorSelector.textContent = 'Please, disable your popup blocker!';
    // } else {
        timer();
    // }
});

const checkIsPopupBlocked = () => {
    const newWindow = window.open(null, 'popup', 'left=100,top=100,width=1,height=1');
    try {
        console.log('newWindow');
        newWindow.close();
        return false;
    } catch (error) {
        console.error(error);
        return true;
    }
}

const timer = ()  => {
    const buttonStop = document.getElementsByClassName('btn_stop')[0];
    buttonStop.innerText = 'Stop';
    buttonStop.onclick = stopTimer;

    const intervalSeconds = 1000;

    showTimer();
    
    interval = setInterval(() => {
        secondsLeft -= 1;
        showTimer();
    }, intervalSeconds);
};

const openNewTabViaButton = () => {
    console.log('openNewTabViaButton');
    const link = document.getElementsByClassName('link')[0];
    // console.log(link);
    const event = new MouseEvent(
        'click',
        {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            shiftKey: false,
            altKey: false,
            metaKey: false,
            button: 0,
            relatedTarget: null,
            detail: 0,
            view: window,
            cancelable: true,
            bubbles: true,
        });
    // link.dispatchEvent(event);
    // const a = link.click();
    // console.log('result', a);
    // window.open(a, '_blank');
    // window.location.replace(URL);
    window.location.assign('public/templates/page1.html');
    // history.pushState(null, '', '')
}

const showTimer = () => {
    if (secondsLeft < 0) return clearInterval(interval);
    
    const secondsSelector = document.getElementsByClassName('secondsContainer')[0];
    
    if (secondsLeft === 0) {
        const buttonStop = document.getElementsByClassName('btn_stop')[0];
        buttonStop.onclick = timer;
        buttonStop.innerText = 'Start';
        secondsLeft = 4;
        secondsSelector.textContent = 'Fired!';
        openNewTabViaButton();
    } else {
        secondsSelector.textContent = (secondsLeft).toString();
    }
};

const stopTimer = () => {
    clearInterval(interval);
    const buttonStop = document.getElementsByClassName('btn_stop')[0];
    buttonStop.onclick = timer;
    buttonStop.innerText = 'Continue';
}
