document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault(); //Form göndermesinde sayfa yenilemeyi kapat
        return;
    });
});