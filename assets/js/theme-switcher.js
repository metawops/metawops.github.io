// assets/js/theme-switcher.js

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// 1. UI Synchronisierung: Schalterstellung an das aktuelle Theme anpassen
// Wir lesen einfach das Attribut aus, das der Head-Block gesetzt hat
if (document.documentElement.getAttribute('data-theme') === 'dark') {
    toggleSwitch.checked = true;
}

// 2. Die Funktion zum Umschalten
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// 3. Event Listener registrieren
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}