let interval;
const URL = 'https://www.youtube.com/watch?v=mbov4Rs0F3k';
document.addEventListener('DOMContentLoaded', () => {
    const bodySelector = document.getElementsByTagName('body')[0];
    bodySelector.style.backgroundColor = 'rgba(18,52,5,0.8)';
    bodySelector.style.color = '#ded9d9';
    console.info('DOM loaded successful');
    
    timer();
});

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
    const newTab = window.open(url, '_blank', 'noopener');
    console.log(newTab);
}

const showTimer = (seconds) => {
    if (seconds < 0) return clearInterval(interval);
    
    const secondsSelector = document.getElementsByClassName('secondsContainer')[0];
    
    if (seconds === 0) {
        secondsSelector.textContent = 'Fired!';
        openNewTab();
    } else {
        secondsSelector.textContent = (seconds / 1000).toString();
    }
};
