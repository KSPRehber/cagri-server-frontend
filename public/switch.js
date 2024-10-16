document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const switchText = document.querySelector('.switch-text');
    const pages = document.getElementById('pages');
    toggleSwitch.checked = !toggleSwitch.checked;
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            switchText.textContent = 'Chat';
            pages.style.transform = 'translateX(0%)';
        } else {
            switchText.textContent = 'GAL';
            pages.style.transform = 'translateX(-50%)';
        }
    });
});

