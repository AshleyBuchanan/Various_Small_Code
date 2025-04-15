document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.querySelector('input[type="checkbox"]');

    const savedMode = JSON.parse(localStorage.getItem('modeSwitch'));
    modeSwitch.checked = savedMode;

    console.log(typeof (modeSwitch.checked), modeSwitch.checked);

    function updateMode() {
        modeSwitch.checked
            ? document.body.className = 'dark'
            : document.body.className = 'light';
    }
    updateMode();
    document.body.style.opacity = 1;

    modeSwitch.addEventListener('click', (event) => {
        updateMode();
        localStorage.setItem('modeSwitch', modeSwitch.checked);

    });

    const preferences = {
        fontSize: '18px',
        favColor: 'purple'
    };

    localStorage.setItem('preferences', JSON.stringify(preferences));
});



