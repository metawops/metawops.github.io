// assets/js/theme-switcher.js

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// 1. Initialisierung: UI mit dem aktuellen Status synchronisieren
// (Das 'data-theme' Attribut wurde bereits vom Head-Script gesetzt)
if (document.documentElement.getAttribute('data-theme') === 'dark') {
    toggleSwitch.checked = true;
}

// 2. Die Kern-Funktion zum Umschalten
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// 3. Event Listener für den Klick auf den Schalter
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}

// 4. NEU: Hotkey Listener (Taste 't')
document.addEventListener('keydown', function(event) {
    // Sicherheits-Check: Nicht umschalten, wenn der User tippt (Input, Suche, Textarea)
    const tagName = event.target.tagName.toUpperCase();
    if (tagName === 'INPUT' || tagName === 'TEXTAREA' || event.target.isContentEditable) {
        return; 
    }

    // Prüfung auf Taste 't' oder 'T'
    if (event.key === 't' || event.key === 'T') {
        // Checkbox Status umkehren
        toggleSwitch.checked = !toggleSwitch.checked;
        
        // WICHTIG: Das 'change' Event manuell feuern, damit die switchTheme Funktion läuft
        const changeEvent = new Event('change');
        toggleSwitch.dispatchEvent(changeEvent);
    }
});