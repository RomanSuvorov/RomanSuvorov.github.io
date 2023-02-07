let interval;
const URL = 'https://www.youtube.com/watch?v=mbov4Rs0F3k';
document.addEventListener('DOMContentLoaded', () => {
    const bodySelector = document.getElementsByTagName('body')[0];
    bodySelector.style.backgroundColor = 'rgba(18,52,5,0.8)';
    bodySelector.style.color = '#ded9d9';
    console.info('DOM loaded successful');
    
    const isBlocked = checkIsPopupBlocked();
    console.log('isBlocked', isBlocked);
    if (isBlocked) {
        const errorSelector = document.getElementsByClassName('error')[0];
    
        errorSelector.textContent = 'Please, disable your popup blocker!';
    } else {
        timer();
    }
    
    const link = window.document.createElement('a');
    link.target = '_blank';
    link.classList.add('link');
    link.setAttribute('href', URL);
    link.innerText = 'Open new tab!';
    const btnWrapper = document.getElementsByClassName('btnWrapper')[0];
    btnWrapper.append(link);
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

const timer = (initSeconds = 2)  => {
    let secondsForTimeout = initSeconds * 1000;
    const intervalSeconds = 1000;

    showTimer(secondsForTimeout);
    
    interval = setInterval(() => {
        secondsForTimeout -= 1000;
        showTimer(secondsForTimeout);
    }, intervalSeconds);
};

const openNewTab = (url = URL) => {
    // const newTab = window.open(url, '_blank', 'noopener');
    // console.log(newTab);
    const link = window.document.createElement('a');
    link.target = '_blank';
    link.href = url;
    // const e = window.document.createEvent("MouseEvents");
    // e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    
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
    const result = link.dispatchEvent(event);
    console.log('result', result);
}

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
    link.dispatchEvent(event);
    // const a = link.click();
    // console.log('result', a);
    // window.open(a, '_blank');
    // window.location.replace(URL);
}

const showTimer = (seconds) => {
    if (seconds < 0) return clearInterval(interval);
    
    const secondsSelector = document.getElementsByClassName('secondsContainer')[0];
    
    if (seconds === 0) {
        secondsSelector.textContent = 'Fired!';
        // openNewTab();
        openNewTabViaButton();
    } else {
        secondsSelector.textContent = (seconds / 1000).toString();
    }
};
